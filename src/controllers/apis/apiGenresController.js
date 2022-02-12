const db = require("../../database/models");

module.exports = {
    list: (req, res)=> {
        db.Genre.findAll({include: [{association: "movies"}]})
            .then((genres) => {
                res.json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: "localhost:3001/api/genres",
                    },
                    data: genres})
            }).catch(err => res.send(err));
    },

    detail: (req, res) => {
        db.Genre.findByPk(req.params.id, {include: [{association: "movies"}]})
            .then(genre => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        url: "localhost:3001/api/genres/:id"
                    },
                    data: genre
                })
            }).catch(err => res.send(err));

    }
}