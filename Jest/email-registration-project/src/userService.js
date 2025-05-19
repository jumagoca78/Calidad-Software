class SmsService {
  send(phoneNumber, message) {
    // Imaginemos que esto conecta con un API real de SMS
  }
}

class UserService {
  constructor(smsService) {
    this.smsService = smsService;
  }

  createUser(name, phoneNumber) {
    if (!name || name.length < 3) {
      throw new Error("Nombre inválido");
    }

    // lógica irrelevante para la prueba...
    this.smsService.send(phoneNumber, "Bienvenido");
  }
}

module.exports = { SmsService, UserService };