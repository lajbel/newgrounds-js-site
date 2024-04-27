---
editUrl: false
next: false
prev: false
title: "NGIORequest"
---

A top-level wrapper containing any information needed to authenticate the application/user and any component calls being made.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `app_id` | `string` | Your application's unique ID. |
| `debug?` | `boolean` | If set to true, calls will be executed in debug mode. |
| `echo?` | `any` | An optional value that will be returned, verbatim, in the Response object. |
| `execute` | [`Execute`](/api/interfaces/execute/) \| [`Execute`](/api/interfaces/execute/)[] | A Execute object, or array of one-or-more Execute objects. |
| `session_id?` | `string` | An optional login session id. |
