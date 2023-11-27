

import React from 'react';
import SFA from '../SFA';


const EnumeratorsDetails= ({ EnumeratorsDetails, setEnumeratorsDetails }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const EnumeratorsDetailsLabels1 = [
        { type: 1, name: "Enumerators Details" },
        { type: 2, name: "Date of Data Collection" },
        { type: 2, name: "Name" },
        { type: 2, name: "Designation/Title" },
        { type: 2, name: "Telephone Number" },
 ]
    return (
        <SFA
            labelData={EnumeratorsDetailsLabels1}
            data={EnumeratorsDetails}
            setData={setEnumeratorsDetails}
        />
    )

}

export default EnumeratorsDetails;


