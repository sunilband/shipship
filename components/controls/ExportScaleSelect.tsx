import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePreferencesStore } from "@/store/use-preferences-store";

const scales = [
  { value: 1, label: "1x" },
  { value: 2, label: "2x" },
  { value: 3, label: "3x" },
];

export default function ExportScaleSelect() {
  const exportScale = usePreferencesStore((state) => state.exportScale);

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Quality
      </label>
      <Select
        value={String(exportScale)}
        onValueChange={(value) =>
          usePreferencesStore.setState({ exportScale: Number(value) })
        }
      >
        <SelectTrigger className="w-20">
          <SelectValue placeholder="Scale" />
        </SelectTrigger>
        <SelectContent className="dark">
          {scales.map(({ value, label }) => (
            <SelectItem key={value} value={String(value)}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
