import { EXTENSIONS } from "./data"

export default function ExtensionsList () {
    const renderExtensions = EXTENSIONS.map((extension) => (
        <div className="extension__card">
            <img src={extension.image} alt={`logo of ${extension.name}`} className="extension__img" />
            <div className="heading-3 mb-6">Add to {extension.name}</div>
            <div className="subheading-2 mb-32">Minimum version {extension.minVersion}</div>
            <div className="dotted-divider"></div>
            <button className="btn primary-btn m-24">Add & Install Extension</button>
        </div>
    ));

    return <div className="extensions__list">
        {renderExtensions}
    </div>;
}