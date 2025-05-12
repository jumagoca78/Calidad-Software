# 🧪 Testing de Mutantes con Jest + Stryker Mutator (Versión Funcional)

Este proyecto permite validar funciones JavaScript puras usando pruebas unitarias con **Jest** y pruebas de mutantes con **Stryker Mutator**, compatible sin configuración avanzada.

---

## 📁 Estructura del Proyecto

```
student-form-jest-fixed/
├── public/
│   └── validation.js
├── __tests__/
│   └── validation.test.js
├── stryker.conf.js
├── package.json
└── README.md
```

---

## ✅ 1. Lógica de validación

📁 `public/validation.js`

```javascript
function validarAlumno(name, age, email) {
  return name !== '' && age > 0 && email.includes('@');
}

module.exports = { validarAlumno };
```

---

## 🧪 2. Pruebas unitarias con Jest

📁 `__tests__/validation.test.js`

```javascript
const { validarAlumno } = require('../public/validation');

test('valida alumno con datos correctos', () => {
  expect(validarAlumno('Ana', 20, 'ana@correo.com')).toBe(true);
});

test('detecta alumno con datos incorrectos', () => {
  expect(validarAlumno('', -5, 'correo')).toBe(false);
});
```

---

## ⚙️ 3. Instalación y configuración

### Paso 1: Instalar dependencias

```bash
npm install
```

(Si usas por primera vez)

```bash
npm install jest --save-dev
npm install @stryker-mutator/core @stryker-mutator/jest-runner --save-dev
```

---

## 📄 4. Configuración de Stryker

📁 `stryker.conf.js`

```javascript
module.exports = {
  mutate: ['public/validation.js'],
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off'
};
```

---

## 🚀 5. Ejecutar pruebas

### Pruebas unitarias con Jest

```bash
npx jest
```

### Mutation testing con Stryker

```bash
npx stryker run
```

---

## 📊 6. Ver resultados

Abre el reporte generado por Stryker:

```
reports/mutation/html/index.html
```

---

## 🧠 Recomendación para EduScrum

- Revisar qué mutantes sobreviven y mejorar pruebas en el siguiente Sprint.
- Usar este enfoque para tareas de calidad continua y refactorización con propósito.
