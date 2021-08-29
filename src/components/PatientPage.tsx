import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useStateValue } from "../state";
import { EntryTypes, Patient } from "./../types";
import Entries from "./Entries";

export default function PatientPage() {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue();
  const [patient, setPatient] = useState<Patient>();
  const [entries, setEntries] = useState<EntryTypes[]>();

  useEffect(() => {
    const patient = patients[id];
    if (patient) {
      setPatient(patient);
      setEntries(patient.entries);
    } else {
      <Redirect to="/notFound" />;
    }
  });

  return (
    <div>
      {patient && (
        <>
          <h1>{patient.name}</h1>
          <i
            className={`${patient.gender === "male" ? "mars" : "female"} icon`}
          ></i>
          {patient.ssn && <h2>ssn: {patient.ssn}</h2>}
          {entries && <Entries entries={entries} />}
          <ul></ul>
        </>
      )}
    </div>
  );
}
