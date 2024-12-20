import React from "react";
import { FEATURES, FeatureType } from "./data";
import FeatureDetails from "./FeatureDetails";
import FeaturesDescription from "./FeaturesDescription";
import FeaturesList from "./FeaturesList";

export default function Features () {
    const [selectedFeature, setSelectedFeature] = React.useState<FeatureType>(FEATURES[0]);
    
    return (
        <section className="features__container">
            <FeaturesDescription />
            <FeaturesList selectedFeature={selectedFeature} setSelectedFeature={setSelectedFeature}/>
            <FeatureDetails selectedFeature={selectedFeature} />
        </section>
    )
}