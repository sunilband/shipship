import { cn } from "@/lib/utils";
import flourite from "flourite";
import { codeSnippets, fonts } from "@/options";
import hljs from "highlight.js";
import { useEffect } from "react";
import Editor from "react-simple-code-editor";
import { usePreferencesStore } from "@/store/use-preferences-store";

export default function CodeEditor() {
  const store = usePreferencesStore();

  // Add random code snippets on mount
  useEffect(() => {
    const randomSnippet =
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    usePreferencesStore.setState(randomSnippet);
  }, []);

  // Auto Detect Language
  useEffect(() => {
    if (store.autoDetectLanguage) {
      // use flourite to detect language and provide highlighting
      const { language } = flourite(store.code, { noUnknown: true });
      usePreferencesStore.setState({
        language: language.toLowerCase() || "plaintext",
      });
    }
  }, [store.autoDetectLanguage, store.code]);

  // Count the number of lines so we can render the optional gutter
  const lineCount = store.code.split("\n").length;

  return (
    <div
      className={cn(
        "border-2 shadow-2xl",
        store.darkMode
          ? "bg-black/75 border-gray-600/40"
          : "bg-white/75 border-gray-200/20"
      )}
      style={{ borderRadius: store.borderRadius }}
    >
      <header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
        <div className="flex gap-1.5">
          <div className="rounded-full h-2 w-2 bg-red-500"></div>
          <div className="rounded-full h-2 w-2 bg-yellow-500"></div>
          <div className="rounded-full h-2 w-2 bg-green-500"></div>
        </div>
        <div className="col-span-4 flex justify-center">
          <input
            type="text"
            value={store.title}
            onChange={(e) =>
              usePreferencesStore.setState({ title: e.target.value })
            }
            spellCheck={false}
            onClick={(e) => {
              if (e.target instanceof HTMLInputElement) {
                e.target.select();
              }
            }}
            className="bg-transparent text-center text-gray-400 text-sm font-medium focus:outline-none"
          />
        </div>
      </header>
      <div
        className={cn(
          "px-4 pb-4 flex",
          store.darkMode
            ? "brightness-110"
            : "text-gray-800 brightness-50 saturate-200 contrast-200"
        )}
      >
        {store.showLineNumbers && (
          <div
            aria-hidden="true"
            className="select-none text-right pr-4 text-gray-500/70"
            style={{
              fontFamily: fonts[store.fontStyle as keyof typeof fonts].name,
              fontSize: store.fontSize,
              lineHeight: 1.25,
              paddingTop: 10,
            }}
          >
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        )}
        <Editor
          value={store.code}
          onValueChange={(code) => usePreferencesStore.setState({ code })}
          highlight={(code) =>
            hljs.highlight(code, { language: store.language || "plaintext" })
              .value
          }
          style={{
            fontFamily: fonts[store.fontStyle as keyof typeof fonts].name,
            fontSize: store.fontSize,
            lineHeight: 1.25,
          }}
          textareaClassName="focus:outline-none"
          onClick={(e) => {
            if (e.target instanceof HTMLTextAreaElement) {
              e.target.select();
            }
          }}
        />
      </div>
    </div>
  );
}
