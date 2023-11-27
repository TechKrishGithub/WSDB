

import React from 'react';
import SFA from '../SFA';


const Respondent= ({ Respondent, setRespondent }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const RespondentLabels1 = [
        { type: 1, name: "Respondent" },
        { type: 2, name: "Name" },
        { type: 2, name: "Designation/Title" },
        { type: 2, name: "Telphone" },
      ]
return (
        <SFA
            labelData={RespondentLabels1}
            data={Respondent}
            setData={setRespondent}
        />
    )

}

export default Respondent;