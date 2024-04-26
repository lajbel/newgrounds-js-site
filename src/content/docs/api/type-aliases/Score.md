---
editUrl: false
next: false
prev: false
title: "Score"
---

> **Score**: \{`formatted_value`: `string`;`tag`: `string`;`user`: [`User`](/api/type-aliases/user/) \| `null`;`value`: `number`;  }

Contains information about a score posted to a scoreboard.

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `formatted_value` | `string` | The score value in the format selected in your scoreboard settings. |
| `tag` | `string` | The tag attached to this score (if any). |
| `user` | [`User`](/api/type-aliases/user/) \| `null` | The user who earned score. If this property is absent, the score belongs to the active user. |
| `value` | `number` | The integer value of the score. |

## Source

newgrounds.d.ts:115
