

import React from 'react';
import SFA from '../SFA';


const OperationAndMaintenance= ({ OperationAndMaintenance, setOperationAndMaintenance }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const OperationAndMaintenanceLabels1 = [
        { type: 1, name: "Type of Management" },
        { type: 3, name: "Communal" },
        { type: 3, name: "Private/Individual" },
        { type: 3, name: "Private Operator" },
        { type: 3, name: "Institutional" },
        { type: 3, name: "Other-Specify data" },
        { type: 2, name: "Other-Specify data",hide:'Other-Specify data' },
        { type: 1, name: "Condition of the facility structures" },
        { type: 3, name: "Roof" },
        { type: 3, name: "Wall" },
        { type: 3, name: "Floor" },
        { type: 3, name: "convocy (Door with Lock)" },
        { type: 3, name: "Other-Specify" },
        { type: 2, name: "Other-Specify",hide:'Other-Specify' },
        { type: 3, name: "Is the Facility Clean" },
        { type: 1, name: "General Condition of the facility" },
        { type: 3, name: "Good" },
        { type: 3, name: "Poor" },
        { type: 3, name: "Bad" },
        { type: 3, name: "Do users pay to use the facility" },
        { type: 1, name: "If Yes,How much for",hide:'Do users pay to use the facility' },
        { type: 2, name: "Toilet",hide:'Do users pay to use the facility' },
        { type: 2, name: "Shower",hide:'Do users pay to use the facility' },
        { type: 1, name: "How often do Users Pay" },
        { type: 3, name: "Per Use" },
        { type: 3, name: "Weekly" },
        { type: 3, name: "Other" },
        { type: 3, name: "Daily" },
        { type: 3, name: "Monthly" },
        { type: 2, name: "Number of User per day" },

       ]
return (
        <SFA
            labelData={OperationAndMaintenanceLabels1}
            data={OperationAndMaintenance}
            setData={setOperationAndMaintenance}
        />
    )

}

export default OperationAndMaintenance;

