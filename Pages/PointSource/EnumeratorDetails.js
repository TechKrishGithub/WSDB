

import React from 'react';
import SFA from '../SFA';


const EnumeratorDetails= ({ EnumeratorDetails, setEnumeratorDetails }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const EnumeratorDetailsLabels1 = [
        { type: 1, name: "Enumerator Details" },
        { type: 2, name: "Date of Date Collection:" },
        { type: 2, name: "Name" },
        { type: 2, name: "TelePhone" },
        { type: 2, name: "Designation/Title" },
    ]
    return (
        <SFA
            labelData={EnumeratorDetailsLabels1}
            data={EnumeratorDetails}
            setData={setEnumeratorDetails}
        />
    )

}

export default EnumeratorDetails;
