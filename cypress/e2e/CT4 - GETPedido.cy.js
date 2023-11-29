describe('Deve pesquisar pelo Pedido', () => {
    before(() => {
      // Obtém um novo token antes de todos os testes
      cy.obterNovoToken();
    });
  
    it('Deve pesquisar pelo Pedido e trazer os dados', () => {
      const token = Cypress.env('token');
      const MerchantUuid = 'ce67a150-a7ae-49e2-819c-ddc75569e743'; // Substitua pelo UUID real
      const CardHolderUuid = '7353e275-3c17-4781-b5ed-de7569ee8565'; // Substitua pelo UUID real
      cy.request({
        method: 'GET',
        url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/sub-account-order/${MerchantUuid}/${CardHolderUuid}`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Connection': 'keep-alive',
          'accept': '*/*',
          'accept-encoding': 'gzip, deflate',
          'User-Agent': 'ALELO-STRESS-TEST',
        },
      }).then(response => {
        expect(response.status).to.equal(200); 
        //expect(response.body).to.have.property('');
        //expect(response.body).to.have.property('cardHolderDocument'); 
        cy.log('Corpo da resposta:', response.body);
        
      });
    });
  });
  