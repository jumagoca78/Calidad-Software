# Testing de Mutantes con Jest + Stryker Mutator (Sin Babel)

Este proyecto permite validar funciones JavaScript puras usando pruebas unitarias con **Jest** y pruebas de mutantes con **Stryker Mutator**, sin dependencias innecesarias como Babel.

---

## Estructura del Proyecto

```
student-form-jest-nobabel/
├── public/
│   └── validation.js
├── __tests__/
│   └── validation.test.js
├── stryker.conf.js
├── package.json
└── README.md
```

---

## 1. Lógica de validación

`public/validation.js`

```javascript
function validarAlumno(name, age, email) {
  return name !== '' && age > 0 && email.includes('@');
}

module.exports = { validarAlumno };
```

---

## 2. Pruebas unitarias con Jest

`__tests__/validation.test.js`

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

## 3. Instalación y configuración

### Paso 1: Instalar dependencias

```bash
npm install
```

(Si es nuevo)

```bash
npm install jest @stryker-mutator/core @stryker-mutator/jest-runner --save-dev
```

---

## 4. Configuración de Stryker

`stryker.conf.js`

```javascript
module.exports = {
  mutate: ['public/validation.js'],
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off'
};
```

---

## 5. Ejecutar pruebas

### Pruebas unitarias con Jest

```bash
npm test
```

### Mutation testing con Stryker

```bash
npm run mutate
```

---

## 6. Ver resultados

Abre el reporte generado por Stryker:

```
reports/mutation/html/index.html
```

---

## Para uso con EduScrum

- Evalúa cuántos mutantes sobrevivieron y mejora tus pruebas.
- Usa el informe en la retrospectiva para identificar debilidades del test.

