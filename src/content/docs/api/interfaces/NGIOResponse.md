---
editUrl: false
next: false
prev: false
title: "NGIOResponse"
---

Contains all return output from an API request.

## Type parameters

| Type parameter |
| :------ |
| `D` extends `object` |

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `api_version?` | `string` | If there was an error, this will contain the current version number of the API gateway. |
| `app_id` | `string` | Your application's unique ID. |
| `debug?` | [`NGDebug`](/api/interfaces/ngdebug/) | Contains extra information you may need when debugging (debug mode only). |
| `echo?` | `any` | If you passed an 'echo' value in your request object, it will be echoed here. |
| `error?` | [`NGError`](/api/interfaces/ngerror/) | This will contain any error info if the success property is false. |
| `help_url?` | `string` | If there was an error, this will contain the URL for our help docs. |
| `result` | [`Result`](/api/type-aliases/result/)\<`D`\> | This will be a Result object, or an array containing one-or-more Result objects. |
| `success` | `boolean` | If false, there was a problem with your 'request' object. Details will be in the error property. |
