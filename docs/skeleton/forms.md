---
id: skeleton_forms
title: Forms
sidebar_label: Forms
---

We use [react-final-form](https://final-form.org/react) to handle form state. To connect your React component with final form we recommend using [withFinalForm](/frontend-docs/docs/resources/resource_withFinalForm) HOC that includes some common code to work with REST API and form elements.

To make form's javascript code more reusable you can use `common/forms` folder and define all standard inputs there.

## ~~BaseFieldHOC~~

Is HOC wraps your input with react-final-form. This function wraps input component with [Field](https://final-form.org/docs/react-final-form/api/Field) component to pass all props from react-final-form. Additionally it wraps input with BaseFieldLayout. 

## ~~BaseFieldLayout~~

Mostly all of your inputs will have the same layout. To wrap input element with label, define some accessibility props, show label, errors, isRequired, show some additional html elements such as [InputAdornment](https://material-ui.com/api/input-adornment/), ext... use BaseFieldLayout. To avoid same code and make all form elements more reusable you should use BaseFieldLayout that is a part of BaseFieldHOC and defines all html elements that are common for any input component.

## ~~inputs~~

Now all props for input is already defined with BaseFieldHOC and all additional html elements are defined with BaseFieldLayout and all is left is to create input compnent. It is better to store all input components in `inputs` folder. Input components now shouldn't contain any duplicate code and should be simple as much as it could be :)


```jsx
export default function TextInput({ onChange, inputClassName, ...props }) {
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange])
  return (
    <input
      {...props}
      className={inputClassName}
      onChange={handleChange}
    />
  )
}
```

## ~~fields.js~~

Now when you have your input component you just need to wrap this Component with BaseFieldHOC. And this should be done in `fields.js` file. 

```javascript
import TextInput from './inputs/TextInput'

const TextField = BaseFieldHOC(TextInput)

export {
  TextField
}
```

:::caution

Please, note that input Component shoud have a name `<type>Input` and a field `<type>Field`

:::

## ~~validation~~

Based on react-final-form API you can use [form level validation](https://final-form.org/docs/react-final-form/examples/record-level-validation) and [fiels level validation](https://final-form.org/docs/react-final-form/examples/field-level-validation). Skeleton includes basic examples of validations. You can find this solution in 'common/form/validation' folder.

### ~~form level validation~~

```javascript
import { validateEmail, validateRequired, compose } from 'common/forms/validation'

export default compose(
  validateEmail('email'),
  validateRequired(['email', 'password']),
)
```

This will check fields with names `email` and `password` to be defined and field check `email` field with email reqexp.

:::caution

Please note that form level validation could not contain validation rules for inputs that are not exist in your form.
For example if you define rule for field `name` to be required and then you delete this input from JSX - your form will always be invalid.

:::

### ~~field level validation~~

```javascript
import { email, required, composeValidators } from 'common/forms/validation'

const validateEmail = composeValidators(email, required)

function MyForm(){
  return (
    <TextInput
      name="email"
      validate={validateEmail}
    />
  )
}
```

:::caution

Please note that you can not use `composeValidators` inside your React Component. It is important that validate function should be unique during all React Component lifecycle.

:::

### ~~conditional validation~~

react-final-form API memoized validate function prop. The best way to handle conditional validation is to describe validate function more correctly.

```javascript
import { email, required, composeValidators } from 'common/forms/validation'

function conditionalRequired(value, allValues){
  if(!allValues.anotherInput) return undefined
  return composeValidators(required, email)(value)
}

function MyForm(){
  return (
    <TextInput
      name="email"
      validate={conditionalRequired}
    />
  )
}
```

## ~~change one field based on another field~~

To make some form state changes on field change it is recommended to use [decorators](https://final-form.org/docs/final-form/types/Decorator)

```javascript
const transferFormdecorator = createDecorator({
  field: /total/,
  updates: (value, name, allValues) => {
    return set(allValues, name.replace('.total', '.debts'), [])
  },
})


finalForm(
  {
    decorators: [transferFormdecorator],
  }
)
```

In this example you will subscribe on change for all fields inside fields array with name that includes `total` in their name and update relevant fields with name `debts` to empty array. 