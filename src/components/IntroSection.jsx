import React from 'react';

export default function IntroSection() {
    const steps = [
        {
            title: '1. Preparación',
            description: 'Define el alcance, crea casos de prueba y prepara datos de prueba específicos.'
        },
        {
            title: '2. Ejecución',
            description: 'Realiza pruebas funcionales, de compatibilidad, rendimiento y seguridad.'
        },
        {
            title: '3. Automatización',
            description: 'Implementa herramientas como Selenium, Cypress o Playwright para eficiencia.'
        },
        {
            title: '4. Monitoreo continuo',
            description: 'Establece sistemas de monitoreo y alertas para detectar problemas en tiempo real.'
        }
    ];

    return (
        <div className="intro-section">
            <h2>¿Cómo realizar pruebas de funcionalidad efectivas?</h2>
            <p>
                Las pruebas de funcionalidad son esenciales para garantizar que tu sitio web publicado funcione correctamente
                para todos los usuarios. Un enfoque sistemático te ayudará a identificar problemas antes de que afecten
                a tus visitantes.
            </p>
            <p>
                Este proceso implica verificar todos los aspectos críticos: desde la configuración del dominio hasta la
                compatibilidad entre navegadores, pasando por la experiencia móvil y la validación exhaustiva de cada elemento.
            </p>

            <div className="process-steps">
                {steps.map((step, index) => (
                    <div key={index} className="step-card">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}