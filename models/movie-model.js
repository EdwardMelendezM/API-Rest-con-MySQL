'use strict';

var conn = require('./movie-connection'),
    MovieModel = () => {

    }

MovieModel.getAll = (cb) => {
    conn.query('SELECT * FROM movie', cb)
}
MovieModel.insert = () => {

}
MovieModel.getOne = () => {

}
MovieModel.upadte = () => {

}
MovieModel.delete = () => {

}

module.exports = MovieModel; 