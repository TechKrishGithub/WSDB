
import React from 'react';
import SFA from '../SFA';


const DataVerification= ({ DataVerification, setDataVerification }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const DataVerificationLabels1 = [
        { type: 1, name: "Data Verification" },
        { type: 2, name: "Name" },
        { type: 2, name: "Date" },
        { type: 3, name: "Signature" },
    ]
    return (
        <SFA
            labelData={DataVerificationLabels1}
            data={DataVerification}
            setData={setDataVerification}
        />
    )

}

export default DataVerification;



