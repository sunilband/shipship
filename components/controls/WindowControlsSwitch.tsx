import { usePreferencesStore } from "@/store/use-preferences-store";
import { Switch } from "../ui/switch";

export default function WindowControlsSwitch() {
  const showWindowControls = usePreferencesStore(
    (state) => state.showWindowControls
  );

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Controls
      </label>
      <Switch
        checked={showWindowControls}
        onCheckedChange={(checked) =>
          usePreferencesStore.setState({ showWindowControls: checked })
        }
        className="my-1.5"
      />
    </div>
  );
}
