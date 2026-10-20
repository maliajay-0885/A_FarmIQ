import { useState } from "react";
import { DemoBadge, Metric, ModuleButton, SelectField } from "./ModuleShared";
import ModuleIcon from "./ModuleIcon";
import { defaultDevices } from "@/data/modules";

/**
 * Device Management module — connected device list with a pairing flow.
 * Device data is seeded from `data/modules.js`.
 */
export default function DeviceManager() {
  const [pairing, setPairing] = useState(false);
  const [paired, setPaired]   = useState(false);

  const devices = paired
    ? [...defaultDevices, { name: "ESP32 New Node", status: "Online • Unassigned", value: "100%" }]
    : defaultDevices;

  return (
    <div className="space-y-4">
      <DemoBadge />

      <div className="grid grid-cols-3 gap-2">
        <Metric label="Connected" value={paired ? "4" : "3"} note="Online now" />
        <Metric label="Offline"   value="1"    note="Needs attention" />
        <Metric label="Calibration" value="Due" note="1 sensor" />
      </div>

      <section className="overflow-hidden rounded-[22px] border border-[#E0E8E2] bg-white">
        {devices.map((item, index) => {
          const isOffline = item.status.startsWith("Offline");
          return (
            <button
              key={item.name}
              className={`flex w-full items-center gap-3 p-4 text-left ${
                index ? "border-t border-[#EDF1EE]" : ""
              }`}
            >
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl ${
                  isOffline
                    ? "bg-[#FCE9E5] text-[#A55243]"
                    : "bg-[#E5F3F7] text-[#28778A]"
                }`}
              >
                <ModuleIcon name="device" size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <b className="block text-[11px] text-[#294234]">{item.name}</b>
                <span className="text-[9px] text-[#829188]">{item.status}</span>
              </span>
              <b className="text-[10px] text-[#557064]">{item.value}</b>
            </button>
          );
        })}
      </section>

      {!pairing ? (
        <ModuleButton onClick={() => setPairing(true)}>
          <ModuleIcon name="plus" size={16} />
          Add device
        </ModuleButton>
      ) : (
        <section className="rounded-[22px] border border-[#CFE0D4] bg-white p-4 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#E8F3EA] text-[#216B45]">
            <ModuleIcon name="signal" />
          </span>
          <h2 className="mt-3 text-[14px] font-extrabold text-[#213D2F]">
            Pairing mode
          </h2>
          <p className="mt-1 text-[10px] leading-5 text-[#73867A]">
            Power on your ESP32/ESP8266 device and hold its PAIR button for 5
            seconds.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <SelectField
              label="Assign to farm"
              value="Green Valley Farm"
              onChange={() => {}}
              options={["Green Valley Farm", "Riverbend Plot", "Assign later"]}
            />
            <SelectField
              label="Configuration"
              value="Soil sensor"
              onChange={() => {}}
              options={["Soil sensor", "Weather node", "Tank level"]}
            />
          </div>
          <div className="mt-3">
            <ModuleButton
              onClick={() => {
                setPaired(true);
                setPairing(false);
              }}
            >
              Simulate device found
            </ModuleButton>
          </div>
        </section>
      )}
    </div>
  );
}
