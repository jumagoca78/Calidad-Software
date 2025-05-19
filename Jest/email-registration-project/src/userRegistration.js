// Este código define dos clases: EmailService y UserRegistration.
// La clase EmailService tiene un método send que simula el envío de un correo electrónico.
// La clase UserRegistration utiliza una instancia de EmailService para enviar un correo electrónico de bienvenida cuando se registra un nuevo usuario.
// La clase UserRegistration tiene un método register que toma un correo electrónico como argumento y llama al método send de EmailService con ese correo y un mensaje de bienvenida.
// La clase EmailService es un servicio de correo electrónico que se puede usar en producción para enviar correos reales.
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


// Exportamos las clases para que puedan ser utilizadas en otros módulos
// Esto permite que las pruebas unitarias importen estas clases y las utilicen para crear instancias de EmailService y UserRegistration
// Esto es útil para la inyección de dependencias, permitiendo que se pase un servicio de correo simulado durante las pruebas

module.exports = { EmailService, UserRegistration };