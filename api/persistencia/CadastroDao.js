function CadastroDao(connection){
    this._connection = connection;
}

CadastroDao.prototype.salva = function(cadastro,callback){
    this._connection.query('INSERT INTO cadastros SET ?', cadastro,callback);
}

CadastroDao.prototype.lista = function(callback){
    this._connection.query('select * from cadastros', callback);
}

CadastroDao.prototype.buscaPorId= function(id,callback){
    this._connection.query('select * from cadastros where id = ?', [id],callback);
}

module.exports = function(){
    return CadastroDao;
};