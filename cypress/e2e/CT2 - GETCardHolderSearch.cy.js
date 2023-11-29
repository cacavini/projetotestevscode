describe('Deve pesquisar pelo Card Holder', () => {
  before(() => {
    // Obtém um novo token antes de todos os testes
    cy.obterNovoToken();
  });

  it('Deve pesquisar pelo cardHolder e trazer os dados', () => {
    const token = Cypress.env('token');
    const cardHolderUuid = '4ff87d87-e91a-43e1-9f0a-7005c2a56fed';
    cy.request({
      method: 'GET',
      url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/card-holder/${cardHolderUuid}`,
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
