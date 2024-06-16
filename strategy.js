/**
 * The Context class defines the interface of interest to clients.
 */
// Encapsulates an algorithm inside a class
var PaymentContext = /** @class */ (function () {
    function PaymentContext(strategy) {
        this.strategy = strategy;
    }
    PaymentContext.prototype.setPaymentStrategy = function (strategy) {
        this.strategy = strategy;
    };
    PaymentContext.prototype.makePayment = function (amount) {
        console.log("PaymentContext: Initiating payment process...");
        this.strategy.pay(amount);
    };
    return PaymentContext;
}());
/**
 * Concrete payment strategies implement the payment algorithm according to a specific payment method.
 */
var CreditCardStrategy = /** @class */ (function () {
    function CreditCardStrategy(cardNumber, expiryDate, cvv) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }
    CreditCardStrategy.prototype.pay = function (amount) {
        console.log("CreditCardStrategy: Paying ".concat(amount, " via credit card (").concat(this.cardNumber, ")..."));
        // Actual payment process using credit card
    };
    return CreditCardStrategy;
}());
var PayPalStrategy = /** @class */ (function () {
    function PayPalStrategy(email, password) {
        this.email = email;
        this.password = password;
    }
    PayPalStrategy.prototype.pay = function (amount) {
        console.log("PayPalStrategy: Paying ".concat(amount, " via PayPal (").concat(this.email, ")..."));
        // Actual payment process using PayPal
    };
    return PayPalStrategy;
}());
/**
 * The client code chooses a concrete payment strategy and passes it to the context.
 */
var context = new PaymentContext(new CreditCardStrategy("1234 5678 9012 3456", "12/25", "123"));
console.log("Client: Payment strategy is set to Credit Card.");
context.makePayment(100);
console.log("");
console.log("Client: Changing payment strategy to PayPal.");
context.setPaymentStrategy(new PayPalStrategy("example@example.com", "password"));
context.makePayment(200);
//# sourceMappingURL=strategy.js.map