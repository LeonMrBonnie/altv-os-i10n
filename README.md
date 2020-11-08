# Open Source - i10n

Created by LeonMrBonnie

[:heart: Support me by becoming a Patron](https://www.patreon.com/leonmrbonnie/)<br>
⭐ This repository if you found it useful!

[![Generic badge](https://img.shields.io/badge/.altv_Installer%3F-Yes!-4E753E.svg)](https://shields.io/)

---

# Description

This repository provides an alt:V resource to easily make your server available in multiple languages.

This resource is very simple.

## Installing Dependencies / Installation

**I cannot stress this enough. Ensure you have NodeJS 13+ or you will have problems.**

- [NodeJS 13+](https://nodejs.org/en/download/current/)
- An Existing or New Gamemode
- General Scripting Knowledge

After simply add the name of this resource to your `server.cfg` resource section.

`altv-os-i10n`

Then simply clone this repository into your main server resources folder.

```
cd resources
git clone https://github.com/LeonMrBonnie/altv-os-i10n i10n
```

Ensure your `package.json` includes this property:

```json
"type": "module"
```

# Using the resource

To use the resource it has to be added to the `deps` array in the `resource.cfg` of the resource where you want to use this resource.
Afterwards you can just import the resource by using:

```js
import * as i10n from "i10n";
```

And you can then use the exported functions-- though it would be preferable if you directly imported what is required:

```js
import { _ } from "i10n";
```

# Adding a new language or updating an existing one

To add or update languages and translations you have to navigate to the `languages` directory in the resource.<br>
In this resource you will find a file for every available language.<br>
Every language has to be a `.json` file that has an object, where every key is the `translation key` and the value is the `translated value`.
You can add new languages by just adding a new `.json` file.<br>
You can edit the translations by just editing the corresponding `.json` file.

# Available functions

### _ (alias translate)

Translates the given translation key to the given language.
If the language or translation was not found, it will return the translation key.
Otherwise it will return the translated version of the translation key.

```ts
function _(lang: string, key: string): string;
```

### getLanguages

Returns all the available languages in an array.

```ts
function getLanguages(): string[];
```

### isValidLanguage

Returns whether the given language is available or not.

```ts
function isValidLanguage(lang: string): boolean;
```

# Other alt:V Open Source Resources

- [Authentication by Stuyk](https://github.com/Stuyk/altv-os-auth)
- [Discord Authentication by Stuyk](https://github.com/Stuyk/altv-discord-auth)
- [Global Blip Manager by Dzeknjak](https://github.com/jovanivanovic/altv-os-global-blip-manager)
- [Global Marker Manager by Dzeknjak](https://github.com/jovanivanovic/altv-os-global-marker-manager)
- [Chat by Dzeknjak](https://github.com/jovanivanovic/altv-os-chat)
- [Nametags by Stuyk](https://github.com/Stuyk/altv-os-nametags)
- [Entity Sync for JS by LeonMrBonnie](https://github.com/LeonMrBonnie/altv-os-js-entitysync)
- [Context Menu by Stuyk](https://github.com/Stuyk/altv-os-context-menu)
- [Global Textlabels by Stuyk](https://github.com/Stuyk/altv-os-global-textlabels)
- [Interactions by LeonMrBonnie](https://github.com/LeonMrBonnie/altv-os-interactions)
- [Noclip by LeonMrBonnie](https://github.com/LeonMrBonnie/altv-os-noclip)
- [Character Editor by Stuyk](https://github.com/Stuyk/altv-os-character-editor)
