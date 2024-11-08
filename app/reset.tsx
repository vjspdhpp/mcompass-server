import { Button } from "@nextui-org/button";

export default function Reset() {

    function onResetButtonClick() {
        console.log("Reset");
    }

    return <div className="w-full flex flex-col flex-wrap gap-4">
        <p>Factory Reset</p>
        <p>Warning:<br/> This will reset all settings <br/> and reboot the device.</p>
        <Button color="primary" variant="ghost" className="w-full max-w-xs" onClick={onResetButtonClick}>
            Reset
        </Button>
    </div>;
}