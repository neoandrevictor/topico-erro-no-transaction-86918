module.exports = function(app){
  app.get('/pagamentos', function(req, res){
    console.log('Servidor rodando em http://localhost:3001/.')
    res.send('OK.');
  });
 
}
