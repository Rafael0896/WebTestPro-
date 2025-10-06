import React from 'react';

export default function ElementsSection() {
    const categories = [
        {
            title: 'Interfaz (UI)',
            items: [
                'Navegación y enlaces',
                'Formularios y validaciones',
                'Botones y CTAs',
                'Imágenes y media',
                'Modales y popups',
                'Tablas y paginación'
            ]
        },
        {
            title: 'Funcionalidad',
            items: [
                'Autenticación/Autorización',
                'CRUD de datos',
                'Búsqueda y filtros',
                'Upload de archivos',
                'APIs y endpoints',
                'Transacciones'
            ]
        },
        {
            title: 'Performance',
            items: [
                'Tiempos de carga',
                'Lazy loading',
                'Caché del navegador',
                'Compresión GZIP',
                'Optimización de assets'
            ]
        },
        {
            title: 'Seguridad',
            items: [
                'HTTPS habilitado',
                'Validación de inputs',
                'Protección CSRF',
                'Headers de seguridad',
                'Rate limiting'
            ]
        },
        {
            title: 'SEO y Accesibilidad',
            items: [
                'Meta tags',
                'HTML semántico',
                'Alt text en imágenes',
                'Contraste de colores',
                'Navegación por teclado'
            ]
        },
        {
            title: 'Compatibilidad',
            items: [
                'Cross-browser testing',
                'Desktop y móvil',
                'Diferentes resoluciones',
                'Manejo de errores'
            ]
        }
    ];

    return (
        <div className="content-section">
            <div className="elements-grid">
                {categories.map((category, index) => (
                    <div key={index} className="element-category">
                        <h4>{category.title}</h4>
                        <ul>
                            {category.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}