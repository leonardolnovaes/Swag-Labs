import LoginPage from "../pages/LoginPage";
import login from "../fixtures/login.json";

describe("Testes de Login", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Deve logar com sucesso em todos os usuários", () => {
    login.users.forEach((user: string) => {
      LoginPage.fillLogin(user, login.password)
        .submit()
        .validateLoginSuccess()
        .logout();
    });
  });

  it("Deve exibir erro ao tentar logar com usuário bloqueado", () => {
    LoginPage.fillLogin(login.locked_out_user, login.password)
      .submit()
      .validateErrorMessage(
        "Epic sadface: Sorry, this user has been locked out."
      );
  });

  it("Deve exibir erro ao tentar logar sem digitar usuário", () => {
    LoginPage.submit().validateErrorMessage(
      "Epic sadface: Username is required"
    );
  });
});
