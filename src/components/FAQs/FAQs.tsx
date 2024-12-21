import FAQsDescription from "./FAQsDescription";
import FAQsList from "./FAQsList";

export default function FAQs () {
    return (
        <section className="faqs__container">
            <FAQsDescription />
            <FAQsList />
        </section>
    )
}