function validarAlumno(name, age, email) {
  return name !== '' && age > 0 && email.includes('@');
}

module.exports = { validarAlumno };
