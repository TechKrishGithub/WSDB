

import React from "react";
import SFA from "../SFA";

const OperationStatus = ({ OperationStatus, setOperationStatus }) => {
  // 1-> label
  // 2-> Input
  // 3-> CheckBox

  const OperationStatusLabels1 = [
    { type: 1, name: "Functionality" },
    { type: 3, name: "Functional (in use)" },
    { type: 3, name: "Functional (not in use)" },
    { type: 3, name: "Non-Functional" },
    {type: 2,name: "If the water source is non-functional or not in use when did it break down?(day)",},
    { type: 1, name: "Reasons why the source is non-functional or not in use" },
    { type: 3, name: "Dry/Low yielding" },
    { type: 3, name: "Technical breakdown - specify" },
    { type: 2, name: "Technical breakdown - specify_data",hide:'Technical breakdown - specify' },
    { type: 3, name: "Water Quality (Physical)" },
    { type: 3, name: "Smelly Water",hide:'Water Quality (Physical)' },
    { type: 3, name: "Tasty Water(salty etc)",hide:'Water Quality (Physical)' },
    { type: 3, name: "Brown Water" ,hide:'Water Quality (Physical)'},
    { type: 3, name: "Other Coloured Water",hide:'Water Quality (Physical)' },
    { type: 3, name: "Suspended Particles" ,hide:'Water Quality (Physical)'},
    { type: 3, name: "Oily Water" ,hide:'Water Quality (Physical)'},
    { type: 3, name: "Dirty Water" ,hide:'Water Quality (Physical)'},
    { type: 3, name: "Itchy Water",hide:'Water Quality (Physical)' },
    { type: 3, name: "Other",hide:'Water Quality (Physical)'},
    { type: 2, name: "Other_data",hide:'Other' },
    { type: 3, name: "Silted(Valley tanks/Dams)" },
    { type: 3, name: "Leaking (Rainwater Harvesting Tanks)" },
    { type: 3, name: "Alternative source nearby" },
    { type: 3, name: "Vandalism - specify" },
    { type: 2, name: "Vandalism - specify_data",hide:'Vandalism - specify' },
    { type: 3, name: "Other - specify" },
    { type: 2, name: "Other - specify_data",hide:'Other - specify' },
    {
      type: 2,
      name: "For Non-Functional and not used sources,give more details and explanations of main reason(s) why",
    },
    {
      type: 2,
      name: "For both functional and non-functional sources,Indicate year/Month of last repairs",
    },
    { type: 2, name: "Give details on the reparis done,if any" },
  ];
  return (
    <SFA
      labelData={OperationStatusLabels1}
      data={OperationStatus}
      setData={setOperationStatus}
    />
  );
};

export default OperationStatus;
