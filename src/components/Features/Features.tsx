import FeaturesDescription from "./FeaturesDescription";
import FeaturesList from "./FeaturesList";

export default function Features () {
    return (
        <div className="features__container">
            <FeaturesDescription />
            <FeaturesList />
        </div>
    )
}