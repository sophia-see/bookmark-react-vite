import ExtensionsDescription from "./ExtensionsDescription";
import ExtensionsList from "./ExtensionsList";

export default function Extensions () {
    return (
        <section className="extensions__container">
            <ExtensionsDescription />
            <ExtensionsList />
        </section>
    )
}