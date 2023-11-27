

import React from "react";
import SFA from "../SFA";

const GenralInformation = ({ GenralInformation, setGenralInformation }) => {
  // 1-> label
  // 2-> Input
  // 3-> CheckBox

  const GenralInformationLabels1 = [
    { type: 1, name: "Total number of connections" },
    { type: 2, name: "No of Public Stand Posts" },
    { type: 2, name: "No of Yard Taps" },
    { type: 2, name: "No of Kiosks" },
    { type: 2, name: "No of House Connections", },
    { type: 2, name: "No of Institutional Connections" },
    { type: 1, name: "No of Non-Instutional (Commercial)" },
    { type: 2, name: "Connections" },
    { type: 2, name: "No of Industrial Connections" },
    { type: 2, name: "Others Connections" },
    { type: 2, name: "Estimated Population served by system" },
    { type: 2, name: "Date of commissioning" },
    { type: 3, name: "If not Know ,please estimate and indicate9EST)" },
    { type: 3, name: "Is Yes,scheme Gazetted" },
    { type: 1, name: "If Yes what is the Water Authority" },
    { type: 3, name: "Umbrella Authorty Name" },
    { type: 2, name: "Umbrella Authorty Name-data", hide: 'Umbrella Authorty Name' },
    { type: 3, name: "NWSC" },
    { type: 3, name: "Is a Treatment System in place" },
    { type: 1, name: "Treatement Type", hide: 'Is a Treatment System in place' },
    { type: 3, name: "Water Treatment plant", hide: 'Is a Treatment System in place' },
    { type: 3, name: "Cholorine Dosing", hide: 'Is a Treatment System in place' },
    { type: 3, name: "Aeration/Iron Removal", hide: 'Is a Treatment System in place' },
    { type: 1, name: "Frequency of Water Treatment" },
    { type: 3, name: "Daily" },
    { type: 3, name: "Monthly" },
    { type: 3, name: "Bi-Annually" },
    { type: 3, name: "Weekly" },
    { type: 3, name: "Quartely" },
    { type: 3, name: "Annually" },
    { type: 1, name: "Total Pipe length" },
    { type: 2, name: "Transmisson" },
    { type: 2, name: "Distribution" },
    { type: 2, name: "Total" },
    { type: 2, name: "Total Storage capacity (all revervoirs)" },
  ];
  return (
    <SFA
      labelData={GenralInformationLabels1}
      data={GenralInformation}
      setData={setGenralInformation}
    />
  );
};

export default GenralInformation;


