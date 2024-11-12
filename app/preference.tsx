'use client';
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card } from "@nextui-org/card";
import WiFiPanel from "./wifi";
import SpawnPanel from "./spwan";
import InfoPanel from "./info";
import ColorsPanel from "./colors";

export default function Preference() {

    return <div className="flex flex-col max-w-xl ">
        <Card className="p-8">
            <Tabs aria-label="Options">
                <Tab key="colors" title="Colors">
                    <ColorsPanel />
                </Tab>
                <Tab key="wifi" title="WiFi">
                    <WiFiPanel />
                </Tab>
                <Tab key="spawn" title="Spawn">
                    <SpawnPanel />
                </Tab>
                <Tab key="info" title="Info">
                    <InfoPanel />
                </Tab>
            </Tabs>
        </Card>
    </div>;
}