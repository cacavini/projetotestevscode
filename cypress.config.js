module.exports = {
  env: {
    "CYPRESS_API_CLIENT_ID": "4pj5urdslp3lqle8n8fimv4ptv",
    "CYPRESS_API_CLIENT_SECRET": "1i7nafphfqfbhpm52leka1js1uck8sbpfgfg4hr04sfg1eehjkkc"
  },
  e2e: {
    baseUrl: "https://hml-api-multi.siteteste.inf.br", // Nova configuração baseUrl dentro de e2e
    setupNodeEvents(on, config) {
      // Chame o seu plugin personalizado aqui
      require('./cypress/plugins/index.js')(on, config);

      // Implemente os ouvintes de eventos do Node aqui, se necessário
    },
  },
};
