"use client";

import Image from "next/image";
import { GitHubLogoIcon, ResetIcon } from "@radix-ui/react-icons";
import { usePreferencesStore } from "@/store/use-preferences-store";
import { Button } from "./ui/button";
import ExportOptions from "./controls/ExportOptions";

export default function Navbar({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <nav className="w-full flex items-center justify-between gap-4 px-2 sm:px-4 py-1">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="SnipShip logo"
          width={32}
          height={32}
          className="h-8 w-8"
          priority
        />
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight">SnipShip</span>
          <span className="hidden sm:inline text-xs text-neutral-500">
            beautiful code screenshots
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="https://github.com/sunilband/shipship"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
        >
          <GitHubLogoIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Star on GitHub</span>
        </a>

        <div className="w-px h-6 bg-neutral-800" />

        <Button
          size="sm"
          variant="ghost"
          title="Reset all settings"
          onClick={() => usePreferencesStore.getState().resetPreferences()}
        >
          <ResetIcon className="sm:mr-2" />
          <span className="hidden sm:inline">Reset</span>
        </Button>

        <ExportOptions targetRef={targetRef} />
      </div>
    </nav>
  );
}
