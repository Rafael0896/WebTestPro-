import React from 'react';

export default function BrowserSection() {
    const browsers = [
        { name: 'Chrome/Edge', engine: 'Motor: Blink' },
        { name: 'Firefox', engine: 'Motor: Gecko' },
        { name: 'Safari', engine: 'Motor: WebKit' }
    ];

    const practices = [
        'Usar CSS reset o normalize.css',
        'Verificar compatibilidad en caniuse.com',
        'Usar autoprefixer para CSS',
        'Implementar progressive enhancement',
        'Probar en navegadores principales'
    ];

    return (
        <div className="content-section">
            <div className="alert">
                <strong>No, no se ve exactamente igual.</strong> Cada navegador tiene su propio motor de renderizado.
            </div>

            <h4>Motores de renderizado:</h4>
            <div className="browser-grid">
                {browsers.map((browser, index) => (
                    <div key={index} className="browser-card">
                        <strong>{browser.name}</strong>
                        <p>{browser.engine}</p>
                    </div>
                ))}
            </div>

            <h4>Diferencias comunes:</h4>
            <ul>
                <li>Interpretación de CSS (flexbox, grid, animaciones)</li>
                <li>Soporte de APIs JavaScript modernas</li>
                <li>Renderizado de fuentes y formularios</li>
                <li>Performance y optimizaciones</li>
            </ul>

            <h4>Buenas prácticas:</h4>
            <div className="practices-list">
                {practices.map((practice, index) => (
                    <p key={index}>✓ {practice}</p>
                ))}
            </div>
        </div>
    );
}