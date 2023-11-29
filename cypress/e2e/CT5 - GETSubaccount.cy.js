describe('Deve pesquisar pelo SubAccount', () => {
    before(() => {
      // Obtém um novo token antes de todos os testes
      cy.obterNovoToken();
    });
  
    it('Deve pesquisar CardHolder e trazer os dados', () => {
      const token = Cypress.env('token');
      const CardHolderUuid = 'c18a8f7e-defc-448a-a9ef-7e15b05eab6e'; // Substitua pelo UUID real
      cy.request({
        method: 'GET',
        url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/card-holder/${CardHolderUuid}/sub-account`,
        headers: {
          Authorization: `Bearer ${token}`,
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
  