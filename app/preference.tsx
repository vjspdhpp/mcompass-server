'use client';
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card } from "@nextui-org/card";
import WiFiPanel from "./wifi";
import SpawnPanel from "./spwan";
import Reset from "./reset";
import InfoPanel from "./info";
export default function Preference() {

    return <div className="flex flex-col max-w-xl">
        <Card className="p-4">
            <Tabs aria-label="Options">
                <Tab key="wifi" title="WiFi">
                    <WiFiPanel />
                </Tab>
                <Tab key="spawn" title="Spawn">
                    <SpawnPanel />
                </Tab>
                <Tab key="reset" title="Reset">
                    <Reset />
                </Tab>
                <Tab key="info" title="Info">
                    <InfoPanel />
                </Tab>
            </Tabs>
        </Card>
    </div>;
}