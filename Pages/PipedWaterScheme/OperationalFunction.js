import React from "react";
import SFA from "../SFA";

const OperationalFunction = ({ OperationalFunction, setOperationalFunction }) => {
  // 1-> label
  // 2-> Input
  // 3-> CheckBox

  const OperationalFunctionLabels1 = [
    { type: 1, name: "Functionality" },
    { type: 3, name: "Functional(whole Is fully function)" },
    { type: 3, name: "Non-Functional (whole system is complete down)" },
    { type: 3, name: "Partially Functional(specify problem)" },
    { type: 2, name: "Partially Functional(specify problem)",hide:'Partially Functional(specify problem)' },
    { type: 1,name: "If the system is not fully functional ,when did it become non-functional or only partially functional",},
    { type: 2, name: "Date" },
    { type: 1, name: "Reasons why the schema/system is not fully functional" },
    { type: 3, name: "Dry/Low yielding" },
    { type: 3, name: "Techical breakdown-specify" },
    { type: 2, name: "Techical breakdown-specify",hide:'Techical breakdown-specify' },
    { type: 3, name: "Power problems-specify" },
    { type: 2, name: "Power problems-specify",hide:'Power problems-specify' },
    { type: 3, name: "Non-Payment of Water Fees" }, 
    { type: 1, name: "Water Quality-specify" },
    { type: 3, name: "smelly" },
    { type: 3, name: "Tasty" },
    { type: 3, name: "Brown Water" },
    { type: 3, name: "Other Coloured water" },
    { type: 3, name: "Suspended Particles" },
    { type: 3, name: "Oily Water" },
    { type: 3, name: "Dirty Water" },
    { type: 3, name: "Itchy water" },
    { type: 3, name: "Other" },
    { type: 2, name: "Other",hide:'Other' },
    { type: 3, name: "Altemative Water facility Nearby" },
    { type: 3, name: "Poor Management" },
    { type: 3, name: "Other-specify" },
    { type: 2, name: "Other-specify-data",hide:'Other-specify'},
    { type: 2, name: "Year of last major repair/replacement" },
    { type: 2, name: "Give details on the repairs done ,If any" },

  ];
  return (
    <SFA
      labelData={OperationalFunctionLabels1}
      data={OperationalFunction}
      setData={setOperationalFunction}
    />
  );
};

export default OperationalFunction;