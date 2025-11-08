import { create } from "zustand";
import { persist } from "zustand/middleware";

// export const usePreferencesStore = create(
//   persist(
//     () => ({
//       code: "",
//       title: "Untitled",
//       theme: "hyper",
//       darkMode: true,
//       showBackground: true,
//       language: "plaintext",
//       autoDetectLanguage: false,
//       fontSize: 16,
//       fontStyle: "jetBrainsMono",
//       padding: 64,
//     }),
//     {
//       name: "user-preferences",
//     }
//   )
// );

// Persistent: Saves data to localStorage under the key user-preferences, so the state is retained after refreshing/restarting the app.

interface PreferencesState {
  code: string;
  title: string;
  theme: string;
  darkMode: boolean;
  showBackground: boolean;
  showLineNumbers: boolean;
  language: string;
  autoDetectLanguage: boolean;
  fontSize: number;
  fontStyle: string;
  padding: number;
  borderRadius: number;

  // Setters
  setCode: (code: string) => void;
  setTitle: (title: string) => void;
  setTheme: (theme: string) => void;
  toggleDarkMode: () => void;
  toggleBackground: () => void;
  toggleLineNumbers: () => void;
  setLanguage: (language: string) => void;
  setAutoDetectLanguage: (enabled: boolean) => void;
  setFontSize: (size: number) => void;
  setFontStyle: (style: string) => void;
  setPadding: (padding: number) => void;
  setBorderRadius: (radius: number) => void;
  resetPreferences: () => void;
}

// Default values used on first load and when the user resets their settings
const defaultPreferences = {
  code: "",
  title: "Untitled",
  theme: "midnight",
  darkMode: true,
  showBackground: true,
  showLineNumbers: false,
  language: "plaintext",
  autoDetectLanguage: false,
  fontSize: 16,
  fontStyle: "jetBrainsMono",
  padding: 64,
  borderRadius: 12,
};

// Create a persistent Zustand store with type safety and update methods
export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      ...defaultPreferences,

      // Setters
      setCode: (code) => set({ code }),
      setTitle: (title) => set({ title }),
      setTheme: (theme) => set({ theme }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      toggleBackground: () =>
        set((state) => ({ showBackground: !state.showBackground })),
      toggleLineNumbers: () =>
        set((state) => ({ showLineNumbers: !state.showLineNumbers })),
      setLanguage: (language) => set({ language }),
      setAutoDetectLanguage: (enabled) => set({ autoDetectLanguage: enabled }),
      setFontSize: (size) => set({ fontSize: size }),
      setFontStyle: (style) => set({ fontStyle: style }),
      setPadding: (padding) => set({ padding }),
      setBorderRadius: (radius) => set({ borderRadius: radius }),
      // Reset styling preferences but keep the user's code, title and language
      resetPreferences: () =>
        set((state) => ({
          ...defaultPreferences,
          code: state.code,
          title: state.title,
          language: state.language,
          autoDetectLanguage: state.autoDetectLanguage,
        })),
    }),
    {
      name: "user-preferences", // Key used in localStorage
    }
  )
);
