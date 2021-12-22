const app = require('./server');
const config = require('./config');

app.listen(config.port, () => {
  console.log('API executando em ' + config.url + config.port)
});