import React from "react";
import { FEATURES, FeatureType } from "./data";

interface FeatureListProps {
    selectedFeature: FeatureType;
    setSelectedFeature: React.Dispatch<React.SetStateAction<FeatureType>>;
}

export default function FeaturesList ({selectedFeature, setSelectedFeature}: FeatureListProps) {
    
    const handleClickFeature = ({index}: {index: number}) => {
        setSelectedFeature(FEATURES[index])
    }

    const renderFeatures = FEATURES.map((feature, index) => {
        const isFirstFeature = index == 0;
        const isSelectedFeature = selectedFeature.title == feature.title;
        const customStyles = `${isFirstFeature ? "border-top" : ""} ${isSelectedFeature ? "selected" : ""}`
        
        return (
            <div className={`${customStyles} border-bottom features__list__item selected-feature`} onClick={() => handleClickFeature({index})}>
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