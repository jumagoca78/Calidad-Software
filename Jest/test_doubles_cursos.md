
# Aplicación de Test Doubles en un Proyecto Web de Gestión de Cursos

Este documento explica cómo se utilizan los cinco tipos de **Test Doubles** en el contexto de un desarrollo web moderno, específicamente en una plataforma de formularios para organizar cursos. Se detallan ejemplos claros para cada tipo de double en situaciones prácticas del frontend y backend.

---

## Contexto del Proyecto

Una plataforma web con las siguientes características:

- Frontend con formularios React para registrar cursos y usuarios.
- Backend con API REST para guardar, consultar y autenticar.
- Uso de validaciones, tokens JWT y almacenamiento en memoria o base de datos.

---

## 1. Dummy

**Propósito**: Rellenar argumentos requeridos que no son relevantes en el test.

**Ejemplo práctico**:
Un componente React que recibe un `logger`, pero el test solo se enfoca en validación del formulario:

```jsx
const dummyLogger = { log: () => {} };
render(<CourseForm logger={dummyLogger} />);
```

---

## 2. Stub

**Propósito**: Retornar valores específicos sin ejecutar lógica real.

**Ejemplo práctico**:
Simulación de un servicio que verifica si un curso ya existe:

```js
const courseServiceStub = {
  courseExists: (name) => name === "React"
};
expect(courseServiceStub.courseExists("React")).toBe(true);
```

---

## 3. Mock

**Propósito**: Verificar que una función fue llamada con los argumentos correctos.

**Ejemplo práctico**:
Probar que el evento de guardar curso llama a la función adecuada:

```js
const saveCourseMock = jest.fn();
fireEvent.click(screen.getByText("Guardar"));
expect(saveCourseMock).toHaveBeenCalledWith({
  name: "Curso 1",
  startDate: "2024-10-10"
});
```

---

## 4. Fake

**Propósito**: Lógica real simplificada, sin infraestructura real.

**Ejemplo práctico**:
Repositorio falso para cursos:

```js
class FakeCourseRepo {
  constructor() {
    this.courses = [];
  }
  save(course) {
    this.courses.push(course);
  }
  findByName(name) {
    return this.courses.find(c => c.name === name);
  }
}
```

---

## 5. Spy

**Propósito**: Observar el uso de funciones reales.

**Ejemplo práctico**:
Verificar que se llama a un logger en el backend Express:

```js
const logger = new Logger();
const spy = jest.spyOn(logger, 'log');
courseController.create(course, logger);
expect(spy).toHaveBeenCalledWith("Curso creado: React");
```

---

## Resumen comparativo

| Tipo de Test Double | Uso en el proyecto | Propósito |
|---------------------|--------------------|-----------|
| Dummy               | Props que no se usan | Evitar errores por dependencias |
| Stub                | Servicios de validación simulados | Controlar flujo del código |
| Mock                | Verificación de acciones | Validar que algo se ejecuta |
| Fake                | Repositorio o lógica real sin DB | Probar lógica completa en memoria |
| Spy                 | Observación de funciones reales | Validar ejecución sin reemplazo |
