import React from "react";
import SFA from "../SFA";

const Operation = ({ Operation, setOperation }) => {
  // 1-> label
  // 2-> Input
  // 3-> CheckBox

  const OperationLabels1 = [
    { type: 1, name: "Type of Management" },
    { type: 3, name: "Communal" },
    { type: 3, name: "Private/Individual" },
    { type: 3, name: "Private Operator" },
    { type: 3, name: "Institutional" },
    { type: 3, name: "Other-Specify" },
    { type: 2, name: "Other-Specify_data",hide:'Other-Specify' },
    { type: 3, name: "Does this Source have a WSC" },
    { type: 1, name: "If Yes, When was this WSC Established",hide:'Does this Source have a WSC' },
    { type: 3, name: "Yes - Month/Year of Establishment",hide:'Does this Source have a WSC' },
    { type: 2, name: "YYYY/MM",hide:'Yes - Month/Year of Establishment' },
    { type: 3, name: "No",hide:'Does this Source have a WSC'},
    { type: 1, name: "If Established,is was it trained",hide:'Does this Source have a WSC'},
    { type: 3, name: "Yes - Month/Year of Training",hide:'Does this Source have a WSC' },
    { type: 2, name: "YYYY/MM",hide:'Yes - Month/Year of Training' },
    { type: 3, name: "No",hide:'Does this Source have a WSC' },
    { type: 3, name: "Is WSC functional" },
    { type: 1, name: "If WSC is Functional, tick applicable box",hide:'Is WSC functional' },
    { type: 3, name: "WSC is collecting user fees",hide:'Is WSC functional' },
    { type: 3, name: "WSC undertakes regular servicing/minor repairs",hide:'Is WSC functional' },
    { type: 3, name: "WSC is holding regular meetings",hide:'Is WSC functional' },
    { type: 3, name: "Environment/sanitation around the source is ok",hide:'Is WSC functional' },
    { type: 1, name: "If WSC is not functional,indicate main reasons why:" },
    { type: 3, name: "Source Dried Up/Low Yield" },
    { type: 3, name: "WSC Not trained" },
    { type: 3, name: "Majority of Members shifted/moved/Died" },
    { type: 3, name: "Alternative Water facility In place" },
    { type: 3, name: "Source Brokedown beyond means of Community" },
    { type: 3, name: "WSC Not Commited" },
    { type: 3, name: "Other-data" },
    { type: 2, name: "Other_data", hide:"Other-data" },
    { type: 1, name: "If WSC exists" },
    { type: 2, name: "No.of members on WSC" },
    { type: 2, name: "No.of active members on WSC" },
    { type: 2, name: "No.of women on WSC" },
    { type: 3, name: "Are there women in key Positions" },
    { type: 2, name: "No.of women holding key positions",hide:'Are there women in key Positions' },
    { type: 1, name: "Tick applicable position(s) below" },
    { type: 3, name: "Chairperson" },
    { type: 3, name: "Vice-chairperson" },
    { type: 3, name: "Secretary" },
    { type: 3, name: "Treasurer" },
    { type: 1, name: "Attach Photos" },
    { type: 2, name: "Attach Photo Of Pointwater Source" },
  ];
  return (
    <SFA labelData={OperationLabels1} data={Operation} setData={setOperation} />
  );
};

export default Operation;
