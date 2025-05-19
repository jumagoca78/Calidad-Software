const { UserService } = require("../src/userService");

test("lanza error si el nombre es muy corto", () => {
  const dummySmsService = { send: () => {} }; // Dummy: solo cumple el parámetro

  const service = new UserService(dummySmsService);

  expect(() => service.createUser("Al", "555-1234")).toThrow("Nombre inválido");
});