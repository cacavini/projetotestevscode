describe('Deve gerar um novo Pedido', () => {
    before(() => {
      cy.obterNovoToken();
    });

    it('Deve gerar novo Pedido', () => {
      const token = Cypress.env('token');
      const MerchantUuid = 'ce67a150-a7ae-49e2-819c-ddc75569e743';
        cy.request({
        method: 'POST',
        url: `https://hml-api-multi.siteteste.inf.br/service-gateway/sub-account-order/v2/${MerchantUuid}/create`,
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Agent': 'ALELO-STRESS-TEST',
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
          'accept': '*/*',
          'accept-encoding': 'gzip, deflate',
        },
        body: {
            "username": "caio.silva@onnitech.com.br",
            "items": [
                {
                    "cardHolderUuid": "74b6dba1-7e01-4523-b420-3329213e3e62",
                    "REFEI": "5",
                    "ALIME": "5",
                    "COMBU": "5",
                    "SAUDE": "5",
                    "MOBIL": "5",
                    "EDUCA": "5",
                    "FARMA": "5",
                    "HOMEO": "5",
                    "TRANS": "5",
                    "ENTRE": "5"
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