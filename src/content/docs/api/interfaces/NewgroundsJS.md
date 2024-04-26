---
editUrl: false
next: false
prev: false
title: "NewgroundsJS"
---

## Methods

### connect()

> **connect**(`appID`, `encKey`): `NewgroundsClient`

Create a client and connect to the Newgrounds API

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id found on the Newgrounds API project page |
| `encKey` | `string` | The encryption key found on the Newgrounds API project page |

#### Returns

`NewgroundsClient`

A new NewgroundsClient

#### Source

newgrounds.d.ts:398

***

### getCloudData()

> **getCloudData**(`id`): `Promise`\<`string`\>

Get cloud data from a save slot

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the save slot |

#### Returns

`Promise`\<`string`\>

The data stored in the save slot

#### Source

newgrounds.d.ts:455

***

### getScores()

> **getScores**(`scoreboardID`, `opt`): `Promise`\<[`Score`](/api/type-aliases/score/)[]\>

Get the scores for a scoreboard

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `scoreboardID` | `number` | The id of the scoreboard to get scores from |
| `opt` | [`ScoreBoardGetScoresParams`](/api/type-aliases/scoreboardgetscoresparams/) | - |

#### Returns

`Promise`\<[`Score`](/api/type-aliases/score/)[]\>

Scores corresponding to the scoreboard

#### Source

newgrounds.d.ts:420

***

### getUsername()

> **getUsername**(): `Promise`\<`string`\>

Get the username of the current user

#### Returns

`Promise`\<`string`\>

The username of the current user, if they are logged in

#### Source

newgrounds.d.ts:435

***

### getVersion()

> **getVersion**(): `Promise`\<`string`\>

Get the version of your Newgrounds Project

#### Returns

`Promise`\<`string`\>

The version of your Newgrounds Project

#### Source

newgrounds.d.ts:441

***

### isSupporter()

> **isSupporter**(): `Promise`\<`boolean`\>

Check if the current user is a supporter

#### Returns

`Promise`\<`boolean`\>

A boolean indicating if the user is a supporter, if they are logged in

#### Source

newgrounds.d.ts:447

***

### login()

> **login**(): `Promise`\<[`User`](/api/type-aliases/user/)\>

Log in the user

#### Returns

`Promise`\<[`User`](/api/type-aliases/user/)\>

The user that was logged in

#### Source

newgrounds.d.ts:404

***

### postScore()

> **postScore**(`scoreboardID`, `value`): `Promise`\<[`Score`](/api/type-aliases/score/)\>

Post a score to a scoreboard

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `scoreboardID` | `number` | The id of the scoreboard to post the score to |
| `value` | `number` | The value of the score |

#### Returns

`Promise`\<[`Score`](/api/type-aliases/score/)\>

The Score that was posted to the board.

#### Source

newgrounds.d.ts:429

***

### setCloudData()

> **setCloudData**(`id`, `value`): `Promise`\<[`SaveSlot`](/api/type-aliases/saveslot/)\>

Set cloud data in a save slot

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the save slot |
| `value` | `string` | The value to store in the save slot |

#### Returns

`Promise`\<[`SaveSlot`](/api/type-aliases/saveslot/)\>

The save slot that was updated

#### Source

newgrounds.d.ts:464

***

### unlockMedal()

> **unlockMedal**(`medalID`): `Promise`\<`boolean`\>

Unlock a medal

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `medalID` | `number` | The id of the medal to unlock |

#### Returns

`Promise`\<`boolean`\>

A boolean indicating if the medal was unlocked

#### Source

newgrounds.d.ts:412

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `NewgroundsClient` | *typeof* `NewgroundsClient` | The NewgroundsClient class |
