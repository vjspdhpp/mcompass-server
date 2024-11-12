'use client';
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { JSX, SVGProps, useEffect, useState } from "react";

const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" }
];

export default function WiFiPanel() {
    const [ssid, setSSID] = useState("");
    const [needPassword, setNeedPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [ssids, setSSIDs] = useState<{ key: string, value: string }[]>([]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         fetch("/api/wifi/ssids")
    //             .then(response => response.json())
    //             .then(data => {
    //                 const newSSIDs = data.filter((ssid: any) => !ssids.some((s: any) => s.key === ssid.key));
    //                 setSSIDs([...ssids, ...newSSIDs]);
    //             });
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

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
        <div className="w-full flex flex-col items-center justify-center flex-wrap gap-4">
            <p className="px-3 text-start w-full">Save WiFi might cause the device to restart <br />and lost current connection.</p>
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
            <Button color="primary" variant="ghost" className="w-full max-w-xs" onClick={saveWiFi}>
                Save
            </Button>
        </div>
    );
}