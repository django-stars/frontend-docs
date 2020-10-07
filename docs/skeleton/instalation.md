---
id: skeleton_instalation
title: Getting Started
sidebar_label: Getting Started
---

To set up a basic front-end project run:

```
npx @django-stars/skeleton init [projectName] [folderName]
```

Example

```
npx @django-stars/skeleton init ds-site client
```

This command will create javascript project "ds-site" within a folder `client`
or you can run:

```
npx @django-stars/skeleton init
```

If you do not specify a name or template, it will prompt you to do that.

Additionally, it will ask you for some more information:
 - Git repository url (this will be used only for package.json to set up git information)
 - Back-end url (this will change default env configuration to proxy dev server to localhost)
 - Template
