
import React from 'react';
import SFA from '../SFA';


const TypeOfFacility= ({ TypeOfFacility, setTypeOfFacility }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const TypeOfFacilityLabels1 = [
        { type: 1, name: "Tick the applicable box below" },
        { type: 3, name: "Stances" },
        { type: 3, name: "Eco-san(UDDT,Forsa Altemo,AbooLoo etc)" },
        { type: 2, name: "Eco-san(UDDT,Forsa Altemo,AbooLoo etc)",hide:'Eco-san(UDDT,Forsa Altemo,AbooLoo etc)' },
        { type: 3, name: "Water Closet" },
        { type: 2, name: "Water Closet",hide:'Water Closet' },
        { type: 3, name: "Pour-Flush" },
        { type: 2, name: "Pour-Flush",hide:'Pour-Flush' },
        { type: 3, name: "Lined VIP" },
        { type: 2, name: "Lined VIP",hide:'Lined VIP' },
        { type: 3, name: "VIP Latrine" },
        { type: 2, name: "VIP Latrine",hide:'VIP Latrine' },
        { type: 3, name: "Other Specify" },
        { type: 2, name: "Other Specify",hide:'Other Specify' },
        { type: 3, name: "Separate Male/Female Stances" },
        { type: 1, name: "If the Facility is" },
        { type: 3, name: "Water source" },
        { type: 3, name: "Piped Water System/Scheme" },
        { type: 3, name: "Rain Water" },
        { type: 3, name: "Other Specify data" },
        { type: 2, name: "Other Specify data",hide:'Other Specify data' },
        { type: 2, name: "If3.3 is a Piped Water System,What is the Piped Water System" },
        { type: 3, name: "Does the facility have a boothroom" },
        { type: 3, name: "Is Hand-washing facility is available" },
        { type: 3, name: "If 3.6 is Yes,Is soap available" },
        { type: 1, name: "what type of Hand washing facility is used" },
        { type: 3, name: "Tippy-Top" },
        { type: 3, name: "Peddle" },
        { type: 3, name: "Sink" },
        { type: 3, name: "Wash-alot" },
        { type: 3, name: "Elbow" },
        { type: 3, name: "Other" },
 ]
return (
        <SFA
            labelData={TypeOfFacilityLabels1}
            data={TypeOfFacility}
            setData={setTypeOfFacility}
        />
    )

}

export default TypeOfFacility;

