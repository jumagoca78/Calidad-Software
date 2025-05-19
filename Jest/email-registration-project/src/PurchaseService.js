// PurchaseService.js
class PurchaseService {
  constructor(notifier) {
    this.notifier = notifier;
  }

  completePurchase(userId) {
    // lógica de compra...
    this.notifier.notify(userId, "Compra completada");
  }
}

module.exports = PurchaseService;
