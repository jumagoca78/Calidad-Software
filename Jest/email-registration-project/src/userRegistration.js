class EmailService {
  send(email, content) {
    // En producción enviaría un correo real
  }
}

class UserRegistration {
  constructor(emailService) {
    this.emailService = emailService;
  }

  register(email) {
    this.emailService.send(email, "Welcome!");
  }
}

module.exports = { EmailService, UserRegistration };