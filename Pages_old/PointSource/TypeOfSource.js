import React from 'react';
import SFA from '../SFA';


const TypeOfSource = ({ TypeOfSourceData, setTypeOfSourceData }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const TypeOfSourceLabels1 = [
        { type: 1, name: "Tick the applicable box below" },
        { type: 3, name: "Protected Spring" },
        { type: 3, name: "No. of Spouts" },
        { type: 3, name: "Shallow Well/Hand Dug(Less than 30m deep) with hand pump" },
        { type: 3, name: "Deep borehole (more than 30m deep) with hand pump" },
        { type: 3, name: "Rainwater Harvest Tank(6,000 liters and above)" },
        { type: 2, name: "Volume of Tank", hide: "Rainwater Harvest Tank(6,000 liters and above)" },
        { type: 3, name: "WfP Borehole" },
        { type: 3, name: "Unprotected Spring" },
        { type: 3, name: "Public Stand Post" },
        { type: 2, name: "No. Tapstands", hide: "Public Stand Post" },
        { type: 3, name: "Kiosk" },
        { type: 2, name: "No. Tapstands", hide: "Kiosk" },
        { type: 3, name: "Yard tap for public use" },
        { type: 2, name: "No. Tapstands", hide: "Yard tap for public use" },
        { type: 1, name: "If Taps,Indicate Sheme/System Details" },
        { type: 1, name: "Indicate type of mother Scheme/System" },
        { type: 3, name: "Ground Water based (GWB)" },
        { type: 3, name: "Surface Water Based (SWB)" },
        { type: 3, name: "Combined Ground and Surface water based" },
        { type: 2, name: "Indicate Name of Piped System/Scheme" },
        { type: 3, name: "Is this source within in the premise" },
        { type: 2, name: "No. of Households within the premise" },
        { type: 1, name: "Estimated number of households (using this source):" },
        { type: 2, name: "Within 0-500m radius", roman: 'I' },
        { type: 2, name: "Within 500-1000m radius", roman: 'II' },
        { type: 2, name: "Beyond > 1000m radius", roman: 'III' },
        { type: 2, name: "If Permise is an institutions how many estimated students/patients/soldiers/etc." },
        { type: 2, name: "Estimate average people per household" }
    ];


    return (
        <SFA
            labelData={TypeOfSourceLabels1}
            data={TypeOfSourceData}
            setData={setTypeOfSourceData}
        />
    )

}

export default TypeOfSource;