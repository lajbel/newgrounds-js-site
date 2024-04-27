---
editUrl: false
next: false
prev: false
title: "Result"
---

> **Result**\<`T`\>: \{`component`: `string`;`data`: `T`;`echo`: `any`;`error`: [`NGError`](/api/interfaces/ngerror/);`success`: `boolean`;  }

Contains information returned by an API component.

## Type parameters

| Type parameter |
| :------ |
| `T` extends `object` |

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `component` | `string` | The name of the component that was executed (ie 'Medal.unlock'). |
| `data` | `T` | An object, or array of one-or-more objects, containing any returned properties or errors. |
| `echo` | `any` | If you passed an 'echo' value in your execute object, it will be echoed here. |
| `error` | [`NGError`](/api/interfaces/ngerror/) | This will contain any error info if the success property is false. |
| `success` | `boolean` | If false, there was a problem with your 'request' object. Details will be in the error property. |

## Source

newgrounds.d.ts:94
