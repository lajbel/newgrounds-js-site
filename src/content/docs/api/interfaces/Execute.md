---
editUrl: false
next: false
prev: false
title: "Execute"
---

Contains all the information needed to execute an API component.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `component?` | `string` | The name of the component you want to call, ie 'App.connect'. (Only required if 'secure' is not set.) |
| `echo?` | `any` | An optional value that will be returned, verbatim, in the Result object. |
| `parameters?` | `object` \| `object`[] | An object of parameters you want to pass to the component. |
| `secure?` | `string` \| `string`[] | A an encrypted Execute object or array of Execute objects. (Only required if 'component' is not set.) |
