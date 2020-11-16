/// <reference types="@altv/types-server" />
import * as alt from "alt-server";
import util from "util";
import fs from "fs";

let availableLanguages = [];
const languages = {};

const languagesPath = `${alt.getResourcePath(alt.resourceName)}\\languages`;

async function loadLanguages() {
    let possibilities = await util.promisify(fs.readdir)(languagesPath);
    let langs = [];

    possibilities.forEach((lang) => {
        if (lang.endsWith(".json")) {
            langs.push(lang.replace(".json", ""));
        }
    });

    for (let language of langs) {
        let file = await util.promisify(fs.readFile)(
            `${languagesPath}\\${language}.json`,
            "utf-8"
        );
        let languageData = JSON.parse(file);
        languages[language] = languageData;
        alt.log(`[i10n] Loaded language '${language}'`);
    }
    availableLanguages = langs;
}

/**
 * Translates the specified translation key with the specified language
 * @param {string} lang Language name
 * @param {string} key Translation key
 */
export function _(lang, key) {
    if (!languages[lang]) return key;
    let translated = languages[lang][key];
    if (!translated) return key;
    return translated;
}

/**
 * Translates the specified translation key with the specified language
 * @param {string} lang Language name
 * @param {string} key Translation key
 */
export function translate(lang, key) {
    return _(lang, key);
}

/**
 * Returns all available languages
 */
export function getLanguages() {
    return availableLanguages;
}

/**
 * Checks whether the specified language is valid
 * @param {string} lang Language name
 */
export function isValidLanguage(lang) {
    return availableLanguages.includes(lang);
}

loadLanguages();
