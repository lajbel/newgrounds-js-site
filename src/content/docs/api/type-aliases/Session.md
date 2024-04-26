---
editUrl: false
next: false
prev: false
title: "Session"
---

> **Session**: \{`expired`: `boolean`;`id`: `string`;`passport_url`: `string` \| `null`;`remember`: `boolean`;`user`: [`User`](/api/type-aliases/user/) \| `null`;  }

Contains information about the current user session.

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `expired` | `boolean` | If true, the session_id is expired. Use App.startSession to get a new one. |
| `id` | `string` | A unique session identifier. |
| `passport_url` | `string` \| `null` | If the session has no associated user but is not expired, this property will provide a URL that can be used to sign the user in. |
| `remember` | `boolean` | If true, the user would like you to remember their session id. |
| `user` | [`User`](/api/type-aliases/user/) \| `null` | If the user has not signed in, or granted access to your app, this will be null. |

## Source

newgrounds.d.ts:137
