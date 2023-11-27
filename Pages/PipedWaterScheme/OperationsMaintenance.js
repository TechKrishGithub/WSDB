import React from "react";
import SFA from "../SFA";

const OperationsMaintenance = ({
  OperationsMaintenance,
  setOperationsMaintenance,
}) => {
  // 1-> label
  // 2-> Input
  // 3-> CheckBox

  const OperationsMaintenanceLabels1 = [
    { type: 1, name: "Type of Management/Operator" },
    { type: 3, name: "Communal" },
    { type: 3, name: "Water and Sanitation Committee(WSC)" },
    { type: 3, name: "Private Operator -Name" },
    { type: 2, name: "Private Operator -Name", hide: "Private Operator -Name" },
    { type: 3, name: "NWSC" },
    { type: 3, name: "Water Board" },
    { type: 3, name: "Other-Specify" },
    { type: 2, name: "Other-Specify-data", hide: "Other-Specify" },
    { type: 3, name: "Is a Water Board9WB)/wSC in place ?" },
    { type: 3, name: "Is a WB/WSC in functional ?" },
    { type: 1, name: "If Functionality, does the WB/WSC do the following" },
    { type: 3, name: "WB/WSC holds quarterly meetings" },
    { type: 3, name: "WB/WSC undertakes monitoring visits" },
    { type: 3, name: "WB/WSC checks books of accounts of the operator" },
    { type: 1, name: "If WB/WSC is not functional,indicate main reasons why" },
    { type: 3, name: "Facility Gazezzetted" },
    { type: 3, name: "Water System Non-functional/partially Functional" },
    { type: 3, name: "WB Not trained" },
    { type: 3, name: "WB/ Not Committed" },
    { type: 3, name: "Altemative Water facilityNearby" },
    { type: 3, name: "Facility Brokedown beyond means of WB" },
    { type: 3, name: "Majority of Members shifted/moved/Died" },
    { type: 3, name: "Other-Specify" },
    { type: 2, name: "Other", hide: "Other-Specify" },
    { type: 2, name: "No of members on WB/WSC" },
    { type: 2, name: "No of active members on WB/WSC" },
    { type: 2, name: "No of women on WB/WSC" },
    { type: 3, name: "Are there women in key positions" },
    { type: 2, name: "No of women holding key positions" },
    { type: 3, name: "Chairperson" },
    { type: 3, name: "vice-Chairperson" },
    { type: 3, name: "Secretary" },
    { type: 3, name: "Treasurer" },
    { type: 1, name: "Attach Photos" },
    { type: 2, name: "Attach Office Photo" },
    { type: 2, name: "Attach Reservoir Photo" },
    { type: 2, name: "Attach Intake Photo" },
    { type: 2, name: "Attach kiosk/Public Tap Stand Photo" },
  ];
  return (
    <SFA
      labelData={OperationsMaintenanceLabels1}
      data={OperationsMaintenance}
      setData={setOperationsMaintenance}
    />
  );
};

export default OperationsMaintenance;
