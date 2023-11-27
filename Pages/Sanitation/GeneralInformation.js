

import React from 'react';
import SFA from '../SFA';


const GenralInformation= ({ GenralInformation, setGenralInformation }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const GenralInformationLabels1 = [
        { type: 1, name: "General Information" },
        { type: 2, name: "Month/Year of Construction" },
        { type: 3, name: "If not know,Please estimate and Indicate above click the ticket (Estimate) here" },
        { type: 3, name: "Facility Labeled" },
        { type: 2, name: "Facility Number" },
        { type: 1, name: "Source of Funding" },
        { type: 3, name: "Private data" },
        { type: 2, name: "Private",hide:'Private data' },
        { type: 3, name: "NGO/CBO-Specify" },
        { type: 2, name: "NGO/CBO-Specify",hide:'NGO/CBO-Specify' },
        { type: 3, name: "Community data" },
        { type: 2, name: "Community",hide:'Community data' },
        { type: 3, name: "Partnership-Spedfy" },
        { type: 2, name: "Partnership-Spedfy",hide:"Partnership-Spedfy" },

        { type: 3, name: "Other Specify" },
        { type: 2, name: "Other Specify-data",hide:'Other Specify' },
        { type: 1, name: "Current Ownership" },
        { type: 3, name: "Private" },
        { type: 2, name: "Private",hide:'Private' },
        { type: 3, name: "Community" },
        { type: 2, name: "Community",hide:'Community' },
        { type: 3, name: "Institutional-(Give name of Institution)" },
        { type: 2, name: "Institutional-(Give name of Institution)",hide:'Institutional-(Give name of Institution)'},
        { type: 3, name: "Local Goverment" },
        { type: 2, name: "Local Goverment",hide:'Local Goverment' },
        { type: 3, name: "Other-Specify" },
        { type: 2, name: "Other-Specify",hide:"Other-Specify" },

      
      ]

return (
        <SFA
            labelData={GenralInformationLabels1}
            data={GenralInformation}
            setData={setGenralInformation}
        />
    )

}

export default GenralInformation;