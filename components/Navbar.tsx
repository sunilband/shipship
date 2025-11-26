import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-2 sm:px-4 py-1">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold tracking-tight">SnipShip</span>
        <span className="hidden sm:inline text-xs text-neutral-500">
          beautiful code screenshots
        </span>
      </div>

      <a
        href="https://github.com/sunilband/shipship"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
      >
        <GitHubLogoIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Star on GitHub</span>
      </a>
    </nav>
  );
}
