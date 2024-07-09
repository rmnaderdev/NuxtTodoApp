import { useState } from "nuxt/app";

// These are shared states that can be used in multiple components
// This uses Nuxt's `useState` function to create a shared state
export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("color", () => "pink");