// AuthService.test.js
const AuthService = require('../src/AuthService');

test("devuelve true si el email está registrado", () => {
  const stubRepository = {
    findUserByEmail: (email) => {
      return { email }; // Simula que encontró al usuario
    }
  };

  const authService = new AuthService(stubRepository);
  expect(authService.isEmailRegistered("test@example.com")).toBe(true);
});
