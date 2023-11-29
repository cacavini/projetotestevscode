Cypress.Commands.add('obterNovoToken', () => {
  cy.request({
    method: 'POST',
    url: 'https://hml-api-multi.siteteste.inf.br/oauth2/token',
    form: true, 
    body: {
      grant_type: 'client_credentials',
      client_id: '4pj5urdslp3lqle8n8fimv4ptv',
      client_secret: '1i7nafphfqfbhpm52leka1js1uck8sbpfgfg4hr04sfg1eehjkkc'
    },
    headers: {
      'User-Agent': 'ALELO-STRESS-TEST',
      'Cookie': 'XSRF-TOKEN=dacae83d-8b32-402b-8282-e61dc9e55cb2; __cf_bm=7QOQ_DXnI56Ubk.ZFKF943ZamVcoUaQyky877d5gn18-1694021807-0-AZ++PGC5ehbfLO1HL/eHOR/Raqmj6K2asqHsg+ZqZt/YHNnY8X/Swxsn6mFt7IEhnT2rkcFi+RyLTxg+NYbJSwg=' 
    },
  }).then((response) => {
    if (response.status === 200) {
      const novoToken = response.body.access_token;
      Cypress.env('token', novoToken);
      cy.log('Token obtido com sucesso:', novoToken);
    } else {
      throw new Error('Falha ao obter um novo token.');
    }
  });
});
// Defina a função para gerar um CPF válido
Cypress.Commands.add('gerarCPFFixo', () => {
  // Gere um CPF válido usando a biblioteca
  const numeroCPF = cpf.generate(true); // Passando 'true' para gerar um CPF formatado
  return numeroCPF;
});
