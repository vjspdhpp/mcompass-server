'use client';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

export default function WiFiPanel() {
    const [ssid, setSSID] = useState("");
    const [password, setPassword] = useState("");

    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }

    function handleSSIDChange(e: any) {
        console.log("SSID changed ", e.target.value);
        setSSID(e.target.value);
    }

    function saveWiFi() {
        console.log("Save WiFi ", ssid, password);
    }

    return (
        <div className="flex flex-col items-center justify-center flex-wrap gap-4">
            <p className="px-3 text-start w-full">Save WiFi might cause <br /> the device to restart<br />and lost current connection.</p>
            <Input
                type="text"
                label="SSID"
                value={ssid}
                onChange={handleSSIDChange}
            />
            <Input
                type="text"
                label="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <Button color="primary" variant="ghost" className="max-w-xs" onClick={saveWiFi}>
                Save
            </Button>
        </div>
    );
}