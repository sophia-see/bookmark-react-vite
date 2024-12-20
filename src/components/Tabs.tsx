import React from "react";
import { FEATURES, FeatureType } from "./Features"


export default function Tabs () {
    const [selectedFeature, setSelectedFeature] = React.useState<FeatureType>(FEATURES[0]);
    
    const handleClickFeature = ({index}: {index: number}) => {
        setSelectedFeature(FEATURES[index])
    }

    const renderFeatures = FEATURES.map((feature, index) => {
        const isFirstFeature = index == 0;
        const isSelectedFeature = selectedFeature.title == feature.title;
        const customStyles = `${isFirstFeature ? "border-top" : ""} ${isSelectedFeature ? "selected-feature" : ""}`
        
        return (
            <div className={`${customStyles} border-bottom features__list__item`} onClick={() => handleClickFeature({index})}>
                {feature.title}
            </div>
        )
    })

    return (
        <div className="features__list">
            {renderFeatures}
        </div>
    )
}