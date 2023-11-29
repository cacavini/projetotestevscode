describe('Deve pesquisar pelo Merchant', () => {
  before(() => {
    // Obtém um novo token antes de todos os testes
    cy.obterNovoToken();
  });
 
  it('Deve fazer uma requisição à API usando um token de acesso', () => {
    const token = Cypress.env('token');
    const MerchantUuid = '059998b0-a889-4d7c-8ae9-aafbd7171580';
 
    cy.request({
      method: 'GET',
      url: `https://hml-api-multi.siteteste.inf.br/service-gateway/api/merchant/${MerchantUuid}`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Connection': 'keep-alive',
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate',
      },
      //failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('uuid');
      cy.log('Corpo da resposta:', response.body);
    });
  });
});