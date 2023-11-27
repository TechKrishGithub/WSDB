
import React from 'react';
import SFA from '../SFA';


const AttachPhotos= ({ AttachPhotos, setAttachPhotos }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const AttachPhotosLabels1 = [
        { type: 1, name: "Attach Photos" },
        { type: 2, name: "Attach Photos of Facility Front View" },
        { type: 2, name: "Attach Handwashing Facility" },
        { type: 2, name: "Attach Photo of interior" },
       ]
return (
        <SFA
            labelData={AttachPhotosLabels1}
            data={AttachPhotos}
            setData={setAttachPhotos}
        />
    )

}

export default AttachPhotos;
