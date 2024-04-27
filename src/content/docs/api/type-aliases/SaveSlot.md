---
editUrl: false
next: false
prev: false
title: "SaveSlot"
---

> **SaveSlot**: \{`datetime`: `string`;`id`: `number`;`size`: `number`;`timestamp`: `number`;`url`: `string` \| `null`;  }

Contains information about a CloudSave slot.

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `datetime` | `string` | A date and time (in ISO 8601 format) representing when this slot was last saved. |
| `id` | `number` | The slot number. |
| `size` | `number` | The size of the save data in bytes. |
| `timestamp` | `number` | A unix timestamp representing when this slot was last saved. |
| `url` | `string` \| `null` | The URL containing the actual save data for this slot, or null if this slot has no data. |

## Source

newgrounds.d.ts:109
