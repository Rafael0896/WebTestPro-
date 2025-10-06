import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AccordionSection({
                                             id,
                                             icon,
                                             title,
                                             content,
                                             isOpen,
                                             onToggle
                                         }) {
    return (
        <div className="accordion-section">
            <div
                className={`accordion-header ${isOpen ? 'active' : ''}`}
                onClick={onToggle}
            >
                <div className="accordion-title">
                    {icon}
                    <h3>{title}</h3>
                </div>
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            {isOpen && (
                <div className="accordion-content">
                    {content}
                </div>
            )}
        </div>
    );
}