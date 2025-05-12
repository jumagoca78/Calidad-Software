# Testing de Mutantes con Jest + Stryker Mutator

Este proyecto demuestra cómo realizar pruebas unitarias y de mutación para funciones JavaScript puras usando **Jest** y **Stryker Mutator**. Se enfoca en validar una función que verifica los datos de un alumno.

---

##  Estructura del Proyecto

```
student-form-jest/
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
export function validarAlumno(name, age, email) {
  return name !== '' && age > 0 && email.includes('@');
}
```

---

## 2. Pruebas unitarias con Jest

`__tests__/validation.test.js`

```javascript
import { validarAlumno } from '../public/validation';

test('valida alumno con datos correctos', () => {
  expect(validarAlumno('Ana', 20, 'ana@correo.com')).toBe(true);
});

test('detecta alumno con datos incorrectos', () => {
  expect(validarAlumno('', -5, 'correo')).toBe(false);
});
```

---

## 3. Instalación y configuración

### Paso 1: Inicializar el proyecto

```bash
npm init -y
```

### Paso 2: Instalar Jest y Stryker

```bash
npm install jest --save-dev
npx jest --init
npm install @stryker-mutator/core @stryker-mutator/jest-runner @stryker-mutator/javascript-mutator --save-dev
```

En la configuración de Jest, elige:
- ❯ Use Babel? → No
- ❯ Use TypeScript? → No
- ❯ Test environment → node
- ❯ Automatically clear mocks → Yes

---

## 4. Configurar Stryker

`stryker.conf.js`

```javascript
module.exports = {
  mutate: ['public/validation.js'],
  testRunner: 'jest',
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off',
};
```

---

## 5. Ejecutar pruebas

### Ejecutar Jest (unitarias)

```bash
npx jest
```

### Ejecutar Stryker Mutator

```bash
npx stryker run
```

---

## 6. Ver resultados

Abre el archivo generado por Stryker:

```
reports/mutation/html/index.html
```

Verás los mutantes que fueron:
- "Matados" (detectados por tus pruebas)
- "Sobrevivientes" (no detectados, mejora necesaria)

---



