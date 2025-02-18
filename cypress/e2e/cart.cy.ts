import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import login from "../fixtures/login.json";
import cypress = require("cypress");


describe("Testes de Carrinho", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.fillLogin(login.users[0], login.password).submit();
  });

  it("Adicionar produto no carrinho", () => {
    CartPage.addProductToCart().validateCartBadge("1");
  });

  it("Remover produto do carrinho", () => {
    CartPage.addProductToCart()
    .validateCartBadge("1")
    .removeProductFromCart()
    .validateCartBadgeEmpty();
  });
});

