

import React from 'react';
import SFA from '../SFA';


const Enumerator= ({ Enumerator, setEnumerator }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const EnumeratorLabels1 = [
        { type: 1, name: "Enumerator" },
        { type: 2, name: "Name" },
        { type: 2, name: "Designation/Title" },
        { type: 2, name: "Telephone" },
        { type: 2, name: "Data of Collection" },
    ]
return (
        <SFA
            labelData={EnumeratorLabels1}
            data={Enumerator}
            setData={setEnumerator}
        />
    )

}

export default Enumerator;
