import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function DomainSection() {
    const tools = [
        { name: 'DNS Checker', description: 'Verifica propagación global' },
        { name: 'MXToolbox', description: 'Análisis completo de DNS' },
        { name: 'WhatsMyDNS', description: 'Propagación DNS mundial' }
    ];

    const checklist = [
        'El dominio carga con y sin www',
        'HTTPS configurado con certificado SSL válido',
        'Redirección HTTP → HTTPS funciona',
        'No hay errores de "mixed content"',
        'Propagación DNS completada (24-48h)'
    ];

    return (
        <div className="content-section">
            <h4>Verificaciones DNS esenciales:</h4>
            <ul>
                <li><strong>Resolución de dominio:</strong> Usa comandos como <code>nslookup</code> o <code>dig</code> para verificar que apunte a la IP correcta</li>
                <li><strong>Registros importantes:</strong> Verifica registros A, AAAA, CNAME, MX y TXT</li>
            </ul>

            <h4>Herramientas recomendadas:</h4>
            <div className="tools-grid">
                {tools.map((tool, index) => (
                    <div key={index} className="tool-card">
                        <strong>{tool.name}</strong>
                        <p>{tool.description}</p>
                    </div>
                ))}
            </div>

            <h4>Checklist de verificación:</h4>
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