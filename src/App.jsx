import React, { useState } from "react";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import AccordionSection from "./components/AccordionSection";
import Footer from "./components/Footer";
import sectionsData from "./data/sectionsData";

export default function App() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (sectionId) => {
        setOpenSection(openSection === sectionId ? null : sectionId);
    };

    return (
        <div className="container">
            <Header />
            <IntroSection />
            <div className="sections-container">
                {sectionsData.map((section) => (
                    <AccordionSection
                        key={section.id}
                        section={section}
                        isOpen={openSection === section.id}
                        toggleSection={toggleSection}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}
