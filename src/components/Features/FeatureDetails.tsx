import { FeatureType } from "./data";

interface FeatureDetailsProps {
    selectedFeature: FeatureType
}

export default function FeatureDetails ({selectedFeature}: FeatureDetailsProps) {
    return (
        <div className="feature__details">
            <div className="feature__img_container">
                <img src={selectedFeature.image} alt="" className="full-img" />
                <div className="img-shadow-left"></div>
            </div>
            <div className="content">
                <div className="heading-2">Bookmark in one click</div>
                <div className="subheading mb-16">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</div>
                <div className="btn-containers">
                    <button className="btn primary-btn">More Info</button>
                </div>
            </div>
        </div>
    )
}