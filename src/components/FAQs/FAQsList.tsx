import React from "react";
import { FAQS } from "./data";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const defaultColor = "hsl(231, 69%, 60%)";
const selectedColor = "hsl(0, 94%, 66%)";

export default function FAQsList () {
    const [selectedFAQ, setSelectedFAQ] = React.useState<number | null>(null);
    
    const handleClickFAQ = ({index}: {index: number}) => {
        if (index == selectedFAQ)   setSelectedFAQ(null);
        else setSelectedFAQ(index)
    }

    const renderFAQs = FAQS.map((faq, index) => {
        const isFirstFeature = index == 0;
        const customStyles = `${isFirstFeature ? "border-top" : ""}`
        const isSelectedFAQ = index == selectedFAQ;

        return (
            <div className={`${customStyles} border-bottom faq__item pb-12`} onClick={() => handleClickFAQ({index})}>
                <div className="flex heading-4 mt-20">
                    <div>{faq.question}</div>
                    <MdOutlineKeyboardArrowDown fill={isSelectedFAQ ? selectedColor : defaultColor}/>
                </div>
                <div className={`paragraph mt-26 mb-24 ${isSelectedFAQ ? "" : "hidden"}`}>
                    {faq.answer}
                </div>
            </div>
        )
    });

    return (
        <div className="faqs__list mt-64">
            {renderFAQs}
            <button className="btn primary-btn self-center mt-48">More Info</button>
        </div>
    )
}