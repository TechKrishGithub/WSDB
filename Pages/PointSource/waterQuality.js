

import React from 'react';
import SFA from '../SFA';


const DataVerification= ({ WaterQuality, setWaterQuality }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const WaterQualityLabels1 = [
        { type: 3, name: "In your Oberservation is this Source Free From contamination" },
        { type: 3, name: "If No, Give The Reason (you many tick more than one)" },
        { type: 3, name: "Environment/Catchment Not well maintained" },
        { type: 3, name: "Source not well drained" },
        { type: 3, name: "Animal grazing" },
        { type: 3, name: "Rubbish around source" },
        { type: 3, name: "Other-Specify" },
        { type: 2, name: "Other-Specify_data",hide:'Other-Specify' },
    ]
    return (
        <SFA
            labelData={WaterQualityLabels1}
            data={WaterQuality}
            setData={setWaterQuality}
        />
    )

}

export default DataVerification;




