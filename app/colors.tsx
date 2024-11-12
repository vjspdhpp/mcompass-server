import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function ColorsPanel() {
    const [color, setColor] = useState("#aabbcc");
    const [fill, setFill] = useState(false);

    function handleColorChange(color: string) {
        setColor(color);
        if (fill) {
            fetch("/setColor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "color": color })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    }

    function saveColor() {
        fetch("/setColor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "color": color })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    return <div className="w-full flex flex-col items-center justify-center flex-wrap gap-4">
        <p >{color}</p>
        <Switch className="w-full" checked={fill} onValueChange={setFill}>Fill Plate</Switch>
        <HexColorPicker color={color} onChange={handleColorChange} />
        <Button color="primary" variant="ghost" className="w-full max-w-xs" onClick={saveColor}>
            Save
        </Button>
    </div>;
}