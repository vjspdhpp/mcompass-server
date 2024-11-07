'use client';
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { useState } from "react";

export default function Home() {
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

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Bring the&nbsp;</span>
        <span className={title({ color: "violet" })}>Compass&nbsp;</span>
        <br />
        <span className={title()}>
          from Minecraft to Life.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Set target Location.
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="number" label="Latitude" value={latitude} onChange={onLatitudeChange} />
          <Input type="number" label="Longitude" value={longitude} onChange={onLongitudeChange} />
        </div>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button color="primary" variant="ghost" className="w-full mt-8" onClick={handleSave} isDisabled={!canSave}>
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

      <div className="flex gap-3">
        {/* <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link> */}

      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
