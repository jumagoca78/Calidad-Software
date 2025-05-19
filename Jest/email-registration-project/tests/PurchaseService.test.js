// PurchaseService.test.js
const PurchaseService = require('../src/PurchaseService');

test("envía notificación al completar compra", () => {
  const mockNotifier = { notify: jest.fn() }; // mock function

  const service = new PurchaseService(mockNotifier);
  service.completePurchase(42);

  expect(mockNotifier.notify).toHaveBeenCalledWith(42, "Compra completada");
  expect(mockNotifier.notify).toHaveBeenCalledTimes(1);
});
