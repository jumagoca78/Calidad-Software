//Explica la estructura de pruebas unitarias de Jest para el código anterior
// Este código es una prueba unitaria escrita con Jest para la clase UserRegistration.
// La prueba verifica que al registrar un usuario, se envía un correo electrónico de bienvenida.
// La prueba utiliza un servicio de correo electrónico simulado (mock) para verificar que el método send se llama con los argumentos correctos.
// La prueba se organiza de la siguiente manera:
// 1. Importación de dependencias: Se importa la clase UserRegistration desde el módulo src/userRegistration.js.
// 2. Definición de la prueba: Se define una prueba con el nombre "envía correo tras registrar usuario".
// 3. Creación de un servicio de correo simulado: Se crea un objeto mockEmailService que simula el comportamiento del servicio de correo electrónico.
// 4. Creación de una instancia de UserRegistration: Se crea una instancia de UserRegistration pasando el servicio de correo simulado.
// 5. Registro de un usuario: Se llama al método register de la instancia de UserRegistration con un correo electrónico de prueba.
// 6. Verificación de la llamada al servicio de correo: Se utiliza expect y toHaveBeenCalledWith para verificar que el método send del servicio de correo simulado fue llamado con el correo electrónico de prueba y el mensaje "Welcome!".
// Este enfoque permite probar la funcionalidad de la clase UserRegistration sin depender de un servicio de correo real, lo que hace que la prueba sea más rápida y confiable.


const { UserRegistration } = require('../src/userRegistration');

test("envía correo tras registrar usuario", () => {
  const mockEmailService = { send: jest.fn() };
  const registration = new UserRegistration(mockEmailService);

  registration.register("test@example.com");

  expect(mockEmailService.send).toHaveBeenCalledWith("test@example.com", "Welcome!");
});

