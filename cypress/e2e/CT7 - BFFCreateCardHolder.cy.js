it('Deve gerar novo CardHolder trazer os dados', () => {
  const token = Cypress.env('token');
  const { cpf } = require('gerador-validador-cpf');


  // Use cy.gerarCPFFixo() para gerar um CPF válido e capturar o valor
  cy.gerarCPFFixo().then((numeroCPF) => {
    cy.request({
      method: 'POST',
      url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/card-holder/`,
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'ALELO-STRESS-TEST',
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate',
      },
      body: {
        "name": "Termo de Uso",
        "email": "caio.silva@onnitech.com.br",
        "globalUniqueIdentifier": numeroCPF, // Use o CPF gerado
        "identificationType": "CPF",
        "phones": [
          {
            "number": "11965444566",
            "phoneType": "CELLPHONE"
          }
        ],
        "addresses": [
          {
            "street": "Rua Paraná",
            "portNumber": "1234",
            "location": "Brasil",
            "complement": "",
            "zipCode": "38400654",
            "city": "Uberlândia",
            "state": "MG",
            "country": "Brazil",
            "type": "MAIN"
          },
          {
            "street": "Rua Paraná",
            "portNumber": "1234",
            "location": "Brasil",
            "complement": "",
            "zipCode": "38400654",
            "city": "Uberlândia",
            "state": "MG",
            "country": "Brazil",
            "type": "BILLING"
          }
        ],
        "merchant": {
          "uuid": "ce67a150-a7ae-49e2-819c-ddc75569e743"
        }
      }
    }).then(response => {
      expect(response.status).to.equal(200);
      cy.log('Corpo da resposta:', response.body);
    });
  });
});
