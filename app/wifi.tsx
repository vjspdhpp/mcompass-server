'use client';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { JSX, SVGProps, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { HsvColorPicker } from "react-colorful";
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
    const [color, setColor] = useState("#aabbcc");
    const [hsvColor, setHsvColor] = useState({ h: 0, s: 0, v: 0 });

    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }

    function handleSSIDChange(e: any) {
        setSSID(e.target.value);
    }

    function saveWiFi() {
        console.log("Save WiFi ", ssid, password);
    }

    function handleColorChange(color: string) {
        setColor(color);
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

    function queryWifiList() {
        console.log("Query WiFi List");
        // 发起一个请求，获取WiFi列表
        // fetch("/get")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error("Error fetching WiFi list:", error);
        //     });
        // 把color post出去

    }

    return (
        <div className="w-full flex flex-col items-center justify-center flex-wrap gap-4">
            <p>Wi-Fi</p>
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
            <Button color="primary" variant="ghost" className="w-full max-w-xs" onClick={queryWifiList}>
                Test Request
            </Button>
            <HexColorPicker color={color} onChange={handleColorChange} />
        </div>

    );
}