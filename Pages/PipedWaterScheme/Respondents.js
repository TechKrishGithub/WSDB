import React from 'react';
import SFA from '../SFA';


const Respondents= ({ Respondents, setRespondents }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const RespondentsLabels1 = [
        { type: 1, name: "Respondents" },
        { type: 2, name: "Name" },
        { type: 2, name: "Gender" },
        { type: 2, name: "Telephone" },
        { type: 2, name: "Responsibility/Title" },


      ]
    return (
        <SFA
            labelData={RespondentsLabels1}
            data={Respondents}
            setData={setRespondents}
        />
    )

}

export default Respondents;

