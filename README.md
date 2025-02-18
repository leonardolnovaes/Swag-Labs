# Cypress Testes Automatizados com TypeScript

Projeto de testes automatizados utilizando Cypress com TypeScript, GitHub Actions para integração contínua e paralelismo de execução.

## Tecnologias

- **Cypress**: Framework de testes E2E
- **TypeScript**: Para tipagem estática
- **Node.js**: Ambiente de execução
- **GitHub Actions**: CI/CD para execução de testes

## Instalação

Clone o repositório:

```bash
git clone https://github.com/leonardolnovaes/Swag-Labs.git
```

Instale as dependências:

```bash
npm install
```

## Execução Local

Para rodar os testes localmente:

```bash
npx cypress open
```

Ou sem a interface gráfica:

```bash
npx cypress run
```

## Execução no CI (GitHub Actions)

Testes são rodados automaticamente em GitHub Actions para branches específicas. Paralelismo e Cypress Dashboard configurados.

Exemplo de pipeline no `.github/workflows/test.yml`:

```yaml
name: Run Cypress Tests

on:
    push:
        branches:
            - feat/create-tests

jobs:
    run-tests:
        runs-on: ubuntu-latest
        strategy:
            matrix:
                container: [1, 2]
        steps:
            - uses: actions/checkout@v2
            - uses: actions/setup-node@v2
                with:
                    node-version: '16'
            - run: npm install
            - run: npx cypress run --record --parallel --ci-build-id=github-${{ github.run_id }} --group container-${{ matrix.container }}
```