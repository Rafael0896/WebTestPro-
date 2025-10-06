import React, { useState } from 'react';
import { Globe, Monitor, Smartphone, TestTube } from 'lucide-react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AccordionSection from './components/AccordionSection';
import Footer from './components/Footer';
import DomainSection from './components/sections/DomainSection';
import BrowserSection from './components/sections/BrowserSection';
import MobileSection from './components/sections/MobileSection';
import ElementsSection from './components/sections/ElementsSection';
import './styles/styles.css';

export default function App() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: 'domain',
            icon: <Globe className="icon" />,
            title: '¿Cómo verificar si un dominio está bien configurado?',
            content: <DomainSection />
        },
        {
            id: 'browsers',
            icon: <Monitor className="icon" />,
            title: '¿Una aplicación web se ve igual en todos los exploradores?',
            content: <BrowserSection />
        },
        {
            id: 'mobile',
            icon: <Smartphone className="icon" />,
            title: '¿Cómo se ve una aplicación web en un explorador del celular?',
            content: <MobileSection />
        },
        {
            id: 'elements',
            icon: <TestTube className="icon" />,
            title: '¿Qué elementos se deben probar en una aplicación web?',
            content: <ElementsSection />
        }
    ];

    return (
        <div className="container">
            <Header />
            <IntroSection />

            <div className="sections-container">
                {sections.map(section => (
                    <AccordionSection
                        key={section.id}
                        id={section.id}
                        icon={section.icon}
                        title={section.title}
                        content={section.content}
                        isOpen={openSection === section.id}
                        onToggle={() => toggleSection(section.id)}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}