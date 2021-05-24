### <a href="https://iouu.com.br"><img alt="IOUU-Logo" src="./iouu-logo.jpg" float="center"/></a>

# IOUU Desafio - Repositório

O projeto foi criado a partir do boilerplate desenvolvido e mantido por [Douglas Dennys](https://github.com/doga10/clean-architecture-node), nele foi utilizado NodeJs + TypeScript + TDD + Clean Architecture.

## :triangular_flag_on_post: Começando

Dependencias:

- Node: 14.15.0
- Docker: 20.10.2
- npm: 6.14.0
- git: 2.28.0.windows.1

Sara usar executar esse projeto de forma local siga os passos:

> git clone <https://gitlab.com/surftelecom/plataforma/api/spec-eseye.git>\
> cd iouu-desafio\
> npm install\
> docker compose up

## :ledger: Descrição

1 - Construção de uma tabela price para financiamento. Onde você é recebido como parâmetros para calcular o valor das parcelas, como o seguinte exemplo: <http://www.drcalc.net/price.asp?it=5&ml=Calc>\
2 - É possível renegociar a tabela price, caso o solicitante do empréstimo não consiga pagar uma determinada parcela. Assim, será criada uma nova tabela price a partir da última parcela paga ou com base na ultima negociação, armazenando as negociações anteriores em um histórico na base de dados.

## :hammer: Documentação

### <img alt="Nuage" src="./swagger-logo.png" height="18" float="center"/> PriceTable

Após o serviço estar devidamente inicializado, confome passos seguidos anteriormente, a documentação de funcionalidades desse projeto pode ser encontrado no swagger, em [User Guide](http://localhost:5050/api-docs).

## :bust_in_silhouette: Autor

**Gledson Assis**

---

This README was generated with ❤️ by **Gledson**
