

import React from 'react';
import SFA from '../SFA';


const FaecalManagement= ({ FaecalManagement, setFaecalManagement }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const FaecalManagementLabels1 = [
        { type: 1, name: "Has this facility ever required emptying" },
        { type: 3, name: "When it got full" },
        { type: 1, name: "If Yes on6.1,Frequency of emptying (choose one)" },
        { type: 3, name: "Monthly" },
        { type: 3, name: "Quarterly" },
        { type: 3, name: "B1-Annually" },
        { type: 3, name: "Annually" },
        { type: 3, name: "When Need arises" },
        { type: 1, name: "If Yes on 6.1,What was the emptying Technology and at how much did it cost" },
        { type: 3, name: "Gulper Technology" },
        { type: 2, name: "Cost",hide:'Gulper Technology' },
        { type: 3, name: "Cess Pool/Vaccum Vehide" },
        { type: 2, name: "Cost",hide:'Cess Pool/Vaccum Vehide' },    
        { type: 3, name: "Manual" },
        { type: 2, name: "Cost",hide:'Manual' },    
        { type: 3, name: "Other" },
        { type: 2, name: "Other",hide:'Other' },
        { type: 1, name: "If No on 6.1,How do you manage feacal Sludge" },
        { type: 3, name: "Add/Use Chemikals" },
        { type: 3, name: "Abandon and Bulld new one" },
        { type: 3, name: "Other-specify" },
        { type: 2, name: "Other-specify",hide:'Other-specify' },
        { type: 1, name: "If this facility is connected to a sewar, what kind of sewar does it use" },
        { type: 3, name: "Off-site(i.e sewar System/Line)" },
        { type: 3, name: "On-site(e.g Septic Tank,Bio-digestor etc)" },
      ]
return (
        <SFA
            labelData={FaecalManagementLabels1}
            data={FaecalManagement}
            setData={setFaecalManagement}
        />
    )

}

export default FaecalManagement;