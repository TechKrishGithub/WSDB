


import React from 'react';
import SFA from '../SFA';


const FunctionalityStatus= ({ FunctionalityStatus, setFunctionalityStatus}) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const FunctionalityStatusLabels1 = [
        { type: 1, name: "Funtionality" },
        { type: 3, name: "Functional (in use)" },
        { type: 3, name: "Functional (not in use)" },
        { type: 3, name: "Non-Functional" },
        { type: 3, name: "Partioally Functional" },
        { type: 1, name: "If the facility is non-functional or not in use when did it vreak down" },
        { type: 2, name: "Date" },
        { type: 1, name: "Reasons why the facility is non-functional or not in use or partally functional" },
        { type: 3, name: "Filled up" },
        { type: 3, name: "No Privacy(Doors)" },
        { type: 3, name: "Cracked Floor/Walls" },
        { type: 3, name: "Smellyt" },
        { type: 3, name: "Septic Tank full" },
        { type: 3, name: "Blocked droinage" },
        { type: 3, name: "High User Fees" },
        { type: 3, name: "Other" },
        { type: 2, name: "Other-specify",hide:'Other' },

        { type: 3, name: "Are there any maintenance/repairs done in past six" },
        { type: 2, name: "If Yes,Give details on the repairs past six months",hide:'Are there any maintenance/repairs done in past six' },
      ]

return (
        <SFA
            labelData={FunctionalityStatusLabels1}
            data={FunctionalityStatus}
            setData={setFunctionalityStatus}
        />
    )

}

export default FunctionalityStatus;