import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function MobileSection() {
    const methods = [
        {
            title: 'A) DevTools del navegador (desarrollo)',
            items: [
                'Chrome/Edge: F12 → Toggle device toolbar (Ctrl+Shift+M)',
                'Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)',
                'Simula diferentes dispositivos',
                'Prueba diferentes resoluciones',
                'Verifica orientación portrait/landscape'
            ]
        },
        {
            title: 'B) Dispositivos reales (recomendado)',
            items: [
                'Probar en iOS (Safari) y Android (Chrome)',
                'Verificar en diferentes tamaños',
                'Debugging remoto conectando dispositivo'
            ]
        },
        {
            title: 'C) Emuladores/simuladores',
            items: [
                'Android Studio (emulador Android)',
                'Xcode (simulador iOS)',
                'BrowserStack/Sauce Labs (dispositivos remotos)'
            ]
        }
    ];

    const checklist = [
        'Responsive design adaptativo',
        'Touch targets mínimo 44x44px',
        'Texto legible sin zoom (mín 16px)',
        'Performance en conexiones lentas',
        'Viewport meta tag configurado'
    ];

    return (
        <div className="content-section">
            <h4>Métodos para verificar:</h4>

            {methods.map((method, index) => (
                <div key={index} className="method-card">
                    <strong>{method.title}</strong>
                    <ul>
                        {method.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <h4>Aspectos clave en móvil:</h4>
            <div className="checklist">
                {checklist.map((item, index) => (
                    <div key={index} className="check-item">
                        <CheckCircle size={18} /> {item}
                    </div>
                ))}
            </div>
        </div>
    );
}