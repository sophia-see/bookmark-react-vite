import { FeatureType } from "./data";

interface FeatureDetailsProps {
    selectedFeature: FeatureType
}

export default function FeatureDetails ({selectedFeature}: FeatureDetailsProps) {
    return (
        <div className="feature__details"></div>
    )
}