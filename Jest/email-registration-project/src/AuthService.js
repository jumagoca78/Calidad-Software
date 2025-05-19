// AuthService.js
class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  isEmailRegistered(email) {
    const user = this.userRepository.findUserByEmail(email);
    return !!user;
  }
}

module.exports = AuthService;
