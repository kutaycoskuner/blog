import { writable } from "svelte/store";

// Initialize the store with a default state
export const devlogIndex = writable(-1);

// You can also export utility functions here if you want to keep them centralized
export function resetDevlog() {
    devlogIndex.set(-1);
}

export function setDevlogIndex(i: number) {
    devlogIndex.set(i);
    sessionStorage.setItem("devlogIndex", String(i));
}

export function loadDevlogIndex() {
    const v = sessionStorage.getItem("devlogIndex");
    return v ? Number(v) : -1;
}