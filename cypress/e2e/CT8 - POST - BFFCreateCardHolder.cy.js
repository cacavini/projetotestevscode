describe('Deve gerar um novo Card Holder', () => {
    before(() => {
      cy.obterNovoToken();
    });

    it('Deve gerar novo CardHolder trazer os dados', () => {
      const token = Cypress.env('token');
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
            "globalUniqueIdentifier": "86847709006",
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
       expect(response.status).to.equal(201);
        //expect(response.body).to.have.property('');
        //expect(response.body).to.have.property('cardHolderDocument');
        cy.log('Corpo da resposta:', response.body);
      });
    });
  });