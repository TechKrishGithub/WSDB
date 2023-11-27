



import React from 'react';
import SFA from '../SFA';


const ChallengesFacedUsers= ({ ChallengesFacedUsers, setChallengesFacedUsers }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const ChallengesFacedUsersLabels1 = [
        { type: 1, name: "What are the current challenges of Usage for Users" },
        { type: 3, name: "User Fees are high" },
        { type: 3, name: "Most people unaware of how to use facility" },
        { type: 3, name: "Users unwilling to pay for maintenance" },
        { type: 3, name: "Water Supply is intermitent" },
        { type: 3, name: "No Privacy (No Doors,cracked walls etc)" },
        { type: 3, name: "No separation between Male/Female" },
        { type: 3, name: "No access at Night" },
        { type: 3, name: "Not security for Users" },
        { type: 3, name: "Has Construction Defets (no rump,small stance etc)" },
        { type: 3, name: "Dirty Facility" },
        { type: 3, name: "Poor Customer Care" },
        { type: 3, name: "Other Specify" },
        { type: 2, name: "Other Specify",hide:'Other Specify' },

       ]
return (
        <SFA
            labelData={ChallengesFacedUsersLabels1}
            data={ChallengesFacedUsers}
            setData={setChallengesFacedUsers}
        />
    )

}

export default ChallengesFacedUsers;
