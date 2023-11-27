import React from 'react';
import SFA from '../SFA';


const OtherInfoDwo = ({ OtherInfoDwo, setOtherInfoDwo }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const OtherInfoDwoLabels1 = [
        { type: 1, name: "Does the scheme offer Pro-Poor services" },
        { type: 3, name: "Does the scheme offer Pro-Poor services" },
        { type: 1, name: "i.e.where people payless or equal to the house connection tariff in the service area" },
        { type: 2, name: "Other Info as required by the DWO" },

    ]
    return (
        <SFA
            labelData={OtherInfoDwoLabels1}
            data={OtherInfoDwo}
            setData={setOtherInfoDwo}
        />
    )

}

export default OtherInfoDwo;
