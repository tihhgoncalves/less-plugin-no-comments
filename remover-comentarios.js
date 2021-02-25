module.exports = function(less) {

    function RemoverComentarios(options) {
        this.options = options || {};
    };

    RemoverComentarios.prototype = {

        process: function (css) {

            // comentários: /**  xxx */
            var regex = /\/\*.+\*\//gm;
            css = css.replace(regex, '');

            // comentários: // xxx
            var regex = /^(.+)?\/\/.+$/gm;
            css = css.replace(regex, '');

            //retira linhas em branco
            var regex = /^\s*/gm;
            css = css.replace(regex, '');

            return css;
        }
        
    };

    return RemoverComentarios;
};