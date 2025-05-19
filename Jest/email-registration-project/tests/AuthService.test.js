// AuthService.test.js
const AuthService = require('./AuthService');

test("devuelve true si el email está registrado", () => {
  const stubRepository = {
    findUserByEmail: (email) => ({ email })
  };

  const authService = new AuthService(stubRepository);
  expect(authService.isEmailRegistered("test@example.com")).toBe(true);
});
