const { UserRegistration } = require('../src/userRegistration');

test("envía correo tras registrar usuario", () => {
  const mockEmailService = { send: jest.fn() };
  const registration = new UserRegistration(mockEmailService);

  registration.register("test@example.com");

  expect(mockEmailService.send).toHaveBeenCalledWith("test@example.com", "Welcome!");
});