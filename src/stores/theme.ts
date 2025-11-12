import { writable } from "svelte/store";

// Initialize the store with a default state
export const theme = writable("system");

// Export the STORAGE_KEY for consistent usage
export const STORAGE_KEY = "theme-preference";

// You can also export utility functions here if you want to keep them centralized
export const getSystemTheme = () => {
    if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    }
    return "light";
};