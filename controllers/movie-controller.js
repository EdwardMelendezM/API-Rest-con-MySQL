'use strict';

var MovieModel = require('../models/movie-model'),
    MovieController = () => {

    }

MovieController.getAll = (req, res, next) => {
    MovieModel.getAll((err, rows) => {
        if (err) {
            /* Parametros a enviar a index */
            let locals = {
                title: 'Error al consultar',
                description: "Error en la consulta SQL",
                error: err
            }
            /* Renderizado de index  */
            res.render('error', locals);
        }
        else {
            /* Parametros a enviar a index */
            let locals = {
                title: 'Lista de Peliculas',
                data: rows
            }
            /* Renderizado de index  */
            res.render('index', locals);
        }
    })
}
MovieController.getOne = (req, res, next) => {

}
MovieController.upadte = (req, res, next) => {

}
MovieController.delete = (req, res, next) => {

}
MovieController.addForm = (req, res, next) => {

}
MovieController.error404 = (req, res, next) => {

}

module.exports = MovieController; 