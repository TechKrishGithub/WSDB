


import React from 'react';
import SFA from '../SFA';


const VillageGuiad= ({ VillageGuiad, setVillageGuiad }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const VillageGuiadLabels1 = [
        { type: 1, name: "Village Guiad/Respondent" },
        { type: 2, name: "Name" },
        { type: 2, name: "sex" },
        { type: 2, name: "TelePhone" },
        { type: 2, name: "Responsibility" },
    ]
    return (
        <SFA
            labelData={VillageGuiadLabels1}
            data={VillageGuiad}
            setData={setVillageGuiad}
        />
    )

}

export default VillageGuiad;
