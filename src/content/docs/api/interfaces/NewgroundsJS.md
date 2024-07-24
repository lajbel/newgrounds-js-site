---
editUrl: false
next: false
prev: false
title: "NewgroundsJS"
---

## Methods

### autoPing()

> **autoPing**(`ms`): `void`

Automatically pings the Newgrounds API, this is useful for keeping the session alive

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The interval in milliseconds |

#### Returns

`void`

#### Source

newgrounds.d.ts:508

***

### connect()

> **connect**(`appID`, `encKey`, `config`?): `NewgroundsClient`

Create a client and connect to the Newgrounds API

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `appID` | `string` | The app id found on the Newgrounds API project page |
| `encKey` | `string` | The encryption key found on the Newgrounds API project page |
| `config`? | [`NewgroundsConfig`](/api/type-aliases/newgroundsconfig/) | - |

#### Returns

`NewgroundsClient`

A new NewgroundsClient

#### Source

newgrounds.d.ts:424

***

### getCloudData()

> **getCloudData**(`id`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Get cloud data from a save slot

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the save slot |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

The data stored in the save slot

#### Source

newgrounds.d.ts:481

***

### getScores()

> **getScores**(`scoreboardID`, `opt`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Score`](/api/type-aliases/score/)[]\>

Get the scores for a scoreboard

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `scoreboardID` | `number` | The id of the scoreboard to get scores from |
| `opt` | [`ScoreBoardGetScoresParams`](/api/type-aliases/scoreboardgetscoresparams/) | - |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Score`](/api/type-aliases/score/)[]\>

Scores corresponding to the scoreboard

#### Source

newgrounds.d.ts:446

***

### getUsername()

> **getUsername**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Get the username of the current user

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

The username of the current user, if they are logged in

#### Source

newgrounds.d.ts:461

***

### getVersion()

> **getVersion**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Get the version of your Newgrounds Project

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

The version of your Newgrounds Project

#### Source

newgrounds.d.ts:467

***

### isOnNewgrounds()

> **isOnNewgrounds**(): `boolean`

Check if the game is current running on Newgrounds.com

#### Returns

`boolean`

A boolean indicating if the game is running on Newgrounds.com

#### Source

newgrounds.d.ts:496

***

### isSupporter()

> **isSupporter**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Check if the current user is a supporter

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

A boolean indicating if the user is a supporter, if they are logged in

#### Source

newgrounds.d.ts:473

***

### loadSoundID()

> **loadSoundID**(`id`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )\>

A function to load a sound as a ArrayBuffer based on the provided ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` \| `number` | The ID of the sound to load. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )\>

A promise that resolves with the loaded sound as an ArrayBuffer.

#### Source

newgrounds.d.ts:515

***

### login()

> **login**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](/api/type-aliases/user/)\>

Log in the user

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](/api/type-aliases/user/)\>

The user that was logged in

#### Source

newgrounds.d.ts:430

***

### ping()

> **ping**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Pings the Newgrounds API

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

"pong"

#### Source

newgrounds.d.ts:502

***

### postScore()

> **postScore**(`scoreboardID`, `value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Score`](/api/type-aliases/score/)\>

Post a score to a scoreboard

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `scoreboardID` | `number` | The id of the scoreboard to post the score to |
| `value` | `number` | The value of the score |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Score`](/api/type-aliases/score/)\>

The Score that was posted to the board.

#### Source

newgrounds.d.ts:455

***

### setCloudData()

> **setCloudData**(`id`, `value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SaveSlot`](/api/type-aliases/saveslot/)\>

Set cloud data in a save slot

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The id of the save slot |
| `value` | `string` | The value to store in the save slot |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SaveSlot`](/api/type-aliases/saveslot/)\>

The save slot that was updated

#### Source

newgrounds.d.ts:490

***

### unlockMedal()

> **unlockMedal**(`medalID`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Unlock a medal

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `medalID` | `number` | The id of the medal to unlock |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

A boolean indicating if the medal was unlocked

#### Source

newgrounds.d.ts:438

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `NewgroundsClient` | *typeof* `NewgroundsClient` | The NewgroundsClient class |
