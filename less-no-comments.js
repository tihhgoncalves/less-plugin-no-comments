module.exports = {
    install: function(less, pluginManager) {

        var GetRemoverComentarios = require('./remover-comentarios.js');
        var RemoverComentarios = GetRemoverComentarios(less);

        pluginManager.addPostProcessor(new RemoverComentarios());
    }
};