describe('Deve gerar um novo Merchant', () => {
    before(() => {
      cy.obterNovoToken();
    });

    it('Deve gerar novo Merchant e trazer os dados', () => {
      const token = Cypress.env('token');
        cy.request({
        method: 'POST',
        url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/merchant/`,
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Agent': 'ALELO-STRESS-TEST',
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
          'accept': '*/*',
          'accept-encoding': 'gzip, deflate',
        },
        body: {
            "name": "PAT DO CAIO TESTE AUTOMAÇÂO",
            "embossingName": "PAT DO CAIO NOVO",
            "globalUniqueIdentifier": "08616320000182",
            "pat": true,
            "addresses": [
                {
                    "street": "Rua Paraná",
                    "portNumber": "1234",
                    "location": "Brasil",
                    "complement": "",
                    "zipCode": "38400654",
                    "city": "Uberlândia",
                    "state": "MG",
                    "country": "Brazil",
                    "type": "MAIN"
                }
            ]
        }
      }).then(response => {
       expect(response.status).to.equal(200);
        //expect(response.body).to.have.property('');
        //expect(response.body).to.have.property('cardHolderDocument');
        cy.log('Corpo da resposta:', response.body);
      });
    });
  });