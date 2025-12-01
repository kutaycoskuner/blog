// ~/utils/print.ts

export function print(...args: unknown[]): void {
    console.log(...args);
}

export function toProperCase(str: string): string {
    return str.replace(/\w\S*/g, (txt: string) => {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}

export function formatDate(inputDate: string | number | Date, format: string): string {
    const date = new Date(inputDate);
    if (isNaN(date.getTime())) {
        return "Invalid date";
    }

    const options: Record<string, string | number> = {
        yyyy: date.getFullYear(),
        yy: String(date.getFullYear()).slice(-2),
        MM: String(date.getMonth() + 1).padStart(2, '0'),
        M: date.getMonth() + 1,
        dd: String(date.getDate()).padStart(2, '0'),
        d: date.getDate(),
        HH: String(date.getHours()).padStart(2, '0'),
        H: date.getHours(),
        mm: String(date.getMinutes()).padStart(2, '0'),
        m: date.getMinutes(),
        ss: String(date.getSeconds()).padStart(2, '0'),
        s: date.getSeconds(),
        a: date.getHours() < 12 ? "AM" : "PM",
    };

    return format.replace(/yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s|a/g, (match) => {
        return String(options[match]);
    });
}

export function getLanguageDescription(language_code: string): string {
    const language_map: Record<string, string> = {
        en: "This article is English.",
        tr: "This article is Turkish.",
        es: "This article is Spanish.",
        fr: "This article is French.",
        de: "This article is German.",
        it: "This article is Italian.",
        pt: "This article is Portuguese.",
        ru: "This article is Russian.",
        zh: "This article is Chinese.",
    };

    return language_map[language_code] ?? "";
}

export function getLanguage(language_code: string): string {
    const language_map: Record<string, string> = {
        en: "English",
        tr: "Turkish",
        es: "Spanish",
        fr: "French",
        de: "German",
        it: "Italian",
        pt: "Portuguese",
        ru: "Russian",
        zh: "Chinese",
    };

    return language_map[language_code] ?? "";
}
