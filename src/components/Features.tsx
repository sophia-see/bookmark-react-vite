import React from "react";
import Tabs from "./Tabs";

export type FeatureType = {
    title: string;
    heading: string;
    image: string;
    description: string;
}

export const FEATURES = [
    {
        title: "Simple Bookmarking",
        heading: "Bookmark in one click",
        image: "images/illustration-features-tab-1.svg",
        description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        title: "Speedy Searching",
        heading: "Intelligent search",
        image: "images/illustration-features-tab-2.svg",
        description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        title: "Easy Sharing",
        heading: "Share your bookmarks",
        image: "images/illustration-features-tab-3.svg",
        description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    },
]

export default function Features () {
    return (
        <div className="features__container">
            <div className="features__description">
                <div className="heading-2">Features</div>
                <div className="subheading">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
            </div>

            <Tabs />
        </div>
    )
}