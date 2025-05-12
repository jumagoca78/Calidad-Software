import { validarAlumno } from '../public/validation';

test('valida alumno con datos correctos', () => {
  expect(validarAlumno('Ana', 20, 'ana@correo.com')).toBe(true);
});

test('detecta alumno con datos incorrectos', () => {
  expect(validarAlumno('', -5, 'correo')).toBe(false);
});
