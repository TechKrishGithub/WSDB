

import React from 'react';
import SFA from '../SFA';


const RecommendationsImprovement= ({ RecommendationsImprovement, setRecommendationsImprovement }) => {

    // 1-> label
    // 2-> Input
    // 3-> CheckBox

    const RecommendationsImprovementLabels1 = [
        { type: 1, name: "Recommendations Improvement" },
        { type: 2, name: "What recommendations for Improvement by Users/Management is suggested" },
      
    ]
return (
        <SFA
            labelData={RecommendationsImprovementLabels1}
            data={RecommendationsImprovement}
            setData={setRecommendationsImprovement}
        />
    )

}

export default RecommendationsImprovement;
