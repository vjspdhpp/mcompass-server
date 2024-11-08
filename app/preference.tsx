'use client';
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Switch } from "@nextui-org/switch";
import WiFiPanel from "./panel";
import { Card, CardBody } from "@nextui-org/card";

export default function Preference() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [canSave, setCanSave] = useState(false);

    const [errorPopover, setErrorPopover] = useState(false);

    function onLatitudeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const lat = e.target.value;
        setLatitude(lat);
        setCanSave(lat !== '' && longitude !== '');
        setErrorPopover(false);
    }

    function onLongitudeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const lon = e.target.value;
        setLongitude(lon);
        setCanSave(latitude !== '' && lon !== '');
        setErrorPopover(false);
    }

    function handleSave() {
        const lat = parseFloat(latitude);
        const lon = parseFloat(longitude);
        // make sure the lat is in the range of -90 to 90 
        if (lat && lon && lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180) {
            console.log("Save ", lat, lon);
        } else {
            console.log("Please enter both latitude and longitude");
            // show a toast
            setErrorPopover(true);
        }
    }
    return <div className="flex flex-col max-w-xl">
        <Card className="p-4">
            <Tabs aria-label="Options">
                <Tab key="wifi" title="WiFi">
                    <WiFiPanel />
                </Tab>
                <Tab key="spawn" title="Spawn">
                    <div className="w-full flex flex-col items-center justify-center flex-wrap gap-4">
                        <p>World Spawn Point</p>
                        <Input type="number" label="Latitude" value={latitude} onChange={onLatitudeChange} />
                        <Input type="number" label="Longitude" value={longitude} onChange={onLongitudeChange} />
                        <Popover placement="bottom">
                            <PopoverTrigger>
                                <Button color="primary" variant="ghost" className="max-w-xs w-full" onClick={handleSave} isDisabled={!canSave}>
                                    Save
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="px-1 py-2">
                                    <div className="text-small font-bold">Value Error</div>
                                    <div className="text-tiny">Latitude and Longitude must be numbers between -90 and 90, and -180 and 180 respectively.</div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </Tab>
            </Tabs>
        </Card>
    </div>;
}