describe('Deve pesquisar pelo Card', () => {
    before(() => {
      // Obtém um novo token antes de todos os testes
      cy.obterNovoToken();
    });
  
    it('Deve pesquisar CardHolder e trazer os dados', () => {
      const token = Cypress.env('token');
      const CardHolderUuid = 'a5638b4a-c58d-4e89-b6c3-be7565fb2de3'; // Substitua pelo UUID real
      cy.request({
        method: 'GET',
        url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/card-holder/${CardHolderUuid}/card`,
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
  