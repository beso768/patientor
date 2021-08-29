import React from "react";
import { EntryTypes } from "../types";

export default function Entries({ entries }: { entries: EntryTypes[] }) {
  //   const [icon, setIcon] = React.useState<string | undefined>("user md");
  const entryIcon = (type: string): string => {
    switch (type) {
      case "Hospital":
        return "user md icon";
      case "HealthCheck":
        return "stethoscope icon";
      case "OccupationalHealthcare":
        return "heartbeat icon";
      default:
        return "heart outline icon";
    }
  };

  return (
    <>
      <h2>Entries: </h2>
      {entries.map((item) => {
        return (
          <ul key={item.id}>
            <li>
              Date: {item.date} <i className={entryIcon(item.type)}></i>{" "}
            </li>
            <li>Description: {item.description}</li>

            {item.diagnosisCodes && (
              <li>Diagnosis Codes: {item.diagnosisCodes.join(" , ")}</li>
            )}
          </ul>
        );
      })}
    </>
  );
}
