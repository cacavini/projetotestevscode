describe('Deve gerar e enviar um novo Cartão', () => {
    before(() => {
      cy.obterNovoToken();
    });

    it('Deve gerar e enviar um novo cartão', () => {
      const token = Cypress.env('token');
      const cardHolderUuid = '8be4d2b1-bf2f-4f16-8d58-db98bbbbf600';
        cy.request({
        method: 'POST',
        url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/card-holder/${cardHolderUuid}/card/start-embossing`,
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Agent': 'ALELO-STRESS-TEST',
          'Content-Type': 'application/json',
          'Connection': 'keep-alive',
          'accept': '*/*',
          'accept-encoding': 'gzip, deflate',
        },   
      }).then(response => {
       expect(response.status).to.equal(200);
        //expect(response.body).to.have.property('');
        //expect(response.body).to.have.property('cardHolderDocument');
        cy.log('Corpo da resposta:', response.body);
      });
    });
  });