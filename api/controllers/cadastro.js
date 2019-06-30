module.exports = function(app){

    app.get('/cadastros', function(req,res){
        console.log("Recebida requisição");
        res.send('OK');
    });

    app.post('/cadastros/cadastro', function(req, res){
        var cadastro = req.body;
        console.log('cadastro');

        cadastro.status = 'CRIADO';

        var connection = app.persistencia.connectionFactory();
        var cadastroDao = new app.persistencia.CadastroDao(connection);

        if(connection){
            console.log('conectado no banco');
        }else{
            console.log('ERRO NO BANCO');
        }

        cadastroDao.salva(cadastro, function(erro, resultado){
            console.log('registro criado');
            res.json(cadastro);
        });

       
    });

}

