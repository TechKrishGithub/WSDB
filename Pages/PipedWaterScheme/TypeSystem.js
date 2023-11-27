
import React from "react";
import SFA from "../SFA";

const TypeSystem = ({ TypeSystem, setTypeSystem }) => {
  // 1-> label
  // 2-> Input
  // 3-> CheckBox

  const TypeSystemLabels1 = [
    { type: 1, name: "Type Of System/scheme" },
    { type: 3, name: "No of Public Stand Posts" },
    { type: 3, name: "Surface Water Based(SWB)" },
    { type: 3, name: "Combined Ground & Surface Water Based(GWB/SWB)" },
    { type: 2, name: "Local ID number of piped system/scheme", },
    { type: 2, name: "Name of Piped System/Scheme" },
    { type: 1, name: "Energy Source for Pumping(Combinations are possible)" },
    { type: 3, name: "Gravlty FlowScheme" },
    { type: 3, name: "National Grid/Electricity" },
    { type: 3, name: "Windmill" },
    { type: 3, name: "Generator/Diesel" },
    { type: 3, name: "Solar Powered" },
    { type: 3, name: "Hybrid" },
    { type: 3, name: "Does the scheme have a Surface Water source" },
    { type: 1, name: "If Yes, give type and named of source", hide: 'Does the scheme have a Surface Water source' },
    { type: 2, name: "Lake,indcate name", hide: 'Does the scheme have a Surface Water source' },
    { type: 2, name: "River,indcate name", hide: 'Does the scheme have a Surface Water source' },
    { type: 2, name: "Wetland/Swamp-name", hide: 'Does the scheme have a Surface Water source' },
    { type: 3, name: "Does the scheme have a Ground Water source" },
    { type: 1, name: "If Yes, given type, Name and Number", hide: 'Does the scheme have a Ground Water source' },
    { type: 2, name: "Borehole/Production Well(s)", hide: 'Does the scheme have a Ground Water source' },
    { type: 2, name: "indcate DWDno(s)", hide: 'Does the scheme have a Ground Water source' },
    { type: 2, name: "Spring(s),indcate name(S)", hide: 'Does the scheme have a Ground Water source' },
    { type: 3, name: "Other-given type&name" },
    { type: 2, name: "Other-given type&name-data", hide: 'Other-given type&name' },
    { type: 1, name: "Source of funding" },
    { type: 3, name: "GoU-Central Govt specify" },
    { type: 2, name: "GoU-Central Govt specify-data", hide: 'GoU-Central Govt specify' },
    { type: 3, name: "GoU-Local Govt specify" },
    { type: 2, name: "GoU-Local Govt specify-data", hide: 'GoU-Local Govt specify' },
    { type: 3, name: "NGO- Give name" },
    { type: 2, name: "NGO- Give name-data", hide: 'NGO- Give name' },
    { type: 3, name: "Partnership -Give name" },
    { type: 2, name: "Partnership -Give name-data", hide: 'Partnership -Give name' },
    { type: 3, name: "Other-specify" },
    { type: 2, name: "Other-specify-data", hide: 'Other-specify' },

  ];
  return (
    <SFA
      labelData={TypeSystemLabels1}
      data={TypeSystem}
      setData={setTypeSystem}
    />
  );
};

export default TypeSystem;


