

import React from 'react';
import SFA from '../SFA';


const DataVerifications= ({ DataVerifications, setDataVerifications }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const DataVerificationsLabels1 = [
        { type: 1, name: "Data Verifications" },
        { type: 2, name: "Name" },
        { type: 2, name: "Date" },
        { type: 2, name: "Telephone" },
        { type: 3, name: "Signature" },

]
    return (
        <SFA
            labelData={DataVerificationsLabels1}
            data={DataVerifications}
            setData={setDataVerifications}
        />
    )

}

export default DataVerifications;


