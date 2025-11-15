import { usePreferencesStore } from "@/store/use-preferences-store";
import { Slider } from "../ui/slider";

export default function RadiusSlider() {
  const borderRadius = usePreferencesStore((state) => state.borderRadius);

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Radius
      </label>
      <Slider
        className="w-32 my-5"
        value={[borderRadius]}
        onValueChange={([borderRadius]) =>
          usePreferencesStore.setState({ borderRadius })
        }
        max={32}
        step={2}
      />
    </div>
  );
}
