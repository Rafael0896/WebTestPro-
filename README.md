# 🌐 WebTestPro

**Guía Completa de Pruebas de Funcionalidad Web**  
Una landing page informativa que explica cómo realizar pruebas de funcionalidad efectivas en sitios web publicados en Internet.

---

## 📘 Descripción del Proyecto

**WebTestPro** es una aplicación web desarrollada con **React + Vite**, que actúa como una guía visual y práctica sobre cómo verificar el correcto funcionamiento de un sitio web en producción.

Su objetivo es orientar a desarrolladores, testers y estudiantes en los pasos fundamentales de las **pruebas de funcionalidad web**, presentando de manera clara los conceptos y preguntas clave que deben tenerse en cuenta antes, durante y después de lanzar un sitio a Internet.

---

## 🧩 Contenido Principal

La página responde las siguientes preguntas esenciales:

- ¿Cómo verificar si un dominio está bien configurado?
- ¿Una aplicación web se ve igual en todos los exploradores web?
- ¿Cómo se ve una aplicación web en un explorador del celular?
- ¿Qué elementos se deben probar en una aplicación web?

Además, presenta una guía de cuatro etapas para realizar pruebas de funcionalidad efectivas:

1. **Preparación** – Definir el alcance y los casos de prueba.
2. **Ejecución** – Realizar pruebas funcionales, de compatibilidad y rendimiento.
3. **Automatización** – Aplicar herramientas como Selenium, Cypress o Playwright.
4. **Monitoreo continuo** – Implementar alertas y seguimiento de errores en tiempo real.

---

## 🧱 Estructura del Proyecto

```
webtestpro/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── AccordionSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── IntroSection.jsx
│   │   └── sections/
│   │       ├── BrowserSection.jsx
│   │       ├── DomainSection.jsx
│   │       ├── ElementsSection.jsx
│   │       └── MobileSection.jsx
│   │
│   ├── styles/
│   │   └── styles.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── counter.js
│   ├── style.css
│   └── javascript.svg
│
├── index.html
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Tecnologías Utilizadas

- **React** – Librería principal para la creación de interfaces.
- **Vite** – Herramienta de compilación rápida para entornos de desarrollo modernos.
- **HTML5 y CSS3** – Estructura y estilos visuales.
- **JavaScript (ES6+)** – Lógica e interactividad de los componentes.

---

## 🚀 Instrucciones de Instalación y Ejecución

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/usuario/WebTestPro.git
   ```

2. **Accede al directorio del proyecto:**
   ```bash
   cd WebTestPro
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abre el navegador y visita:**
   ```
   http://localhost:5173
   ```

---

## 🧠 Objetivo Educativo

Este proyecto tiene un propósito formativo dentro del ámbito del desarrollo web.  
Busca reforzar el conocimiento sobre **pruebas de funcionalidad**, fomentando la comprensión de buenas prácticas de testing, compatibilidad entre navegadores y verificación de elementos web.

---

## 🧑‍💻 Autor

**Rafael Álvarez**  
Proyecto desarrollado como parte del proceso de aprendizaje en **Desarrollo de Software**.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**, lo que permite su libre uso y modificación con fines educativos o personales.

---

## 🌟 Vista Previa

![Vista previa de WebTestPro](./public/vite.svg)

---

> 💡 *Recuerda:* Las pruebas son un proceso continuo.  
> Establece un ciclo regular de testing para mantener la calidad y funcionalidad de tus aplicaciones web.
