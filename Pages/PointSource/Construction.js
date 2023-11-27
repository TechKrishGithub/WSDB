

import React from 'react';
import SFA from '../SFA';
const Construction = ({ Construction, setConstruction }) => {
  // 1-> label
  // 2-> Input
  // 3-> CheckBox

  const ConstructionLabels1 = [
    { type: 2, name: "Month/Year of Construction" },
    { type: 3, name: "Estimate" },
    { type: 1, name: "If not known,please estimate and Indicate (EST) after the year:" },
    { type: 2, name: "Source Name" },
    { type: 2, name: "Source Number" },
    { type: 1, name: "Source of Funding" },
    { type: 3, name: "Private" },
    { type: 3, name: "NGO-Specify" },
    { type: 2, name: "NGO-Specify_data", hide: 'NGO-Specify' },
    { type: 3, name: "Gou - Central Govt" },
    { type: 2, name: "Gou - Central Govt_data", hide: 'Gou - Central Govt' },
    { type: 3, name: "GoU - Local Govt" },
    { type: 2, name: "GoU - Local Govt_data", hide: 'GoU - Local Govt' },
    { type: 3, name: "Partnership - Specify" },
    { type: 2, name: "Partnership - Specify_data", hide: 'Partnership - Specify' },
    { type: 3, name: "Other - Specify" },
    { type: 2, name: "Other - Specify_data", hide: 'Other - Specify' },
    { type: 1, name: "Current Ownership" },
    { type: 3, name: "Private" },
    { type: 3, name: "Community" },
    { type: 3, name: "Institutional - Health (Give name of Institution)" },
    { type: 2, name: "Institutional - Health (Give name of Institution_data)", hide: 'Institutional - Health (Give name of Institution)' },
    { type: 3, name: "Institutional - Education (Name of Institution)" },
    { type: 2, name: "Institutional - Education (Name of Institution_data)", hide: 'Institutional - Education (Name of Institution)' },
    { type: 3, name: "Other - Specify - Institutional" },
    { type: 2, name: "Other - Specify_data", hide: 'Other - Specify -Institutional' }

  ];



  return (
    <SFA
      labelData={ConstructionLabels1}
      data={Construction}
      setData={setConstruction}
    />
  )

}

export default Construction;


