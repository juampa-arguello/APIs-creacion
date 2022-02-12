const db = require("../../database/models");

module.exports = {
    create: (req, res) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date
        })
        .then(movie => {
            res.status(200).json({
                meta: {
                    status: 200,
                    msg: "Movie added succesfully"
                },
                data: movie
            })
        })
        .catch(err => res.send(err));
    },
    destroy: (req, res) => {
        db.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(movie => {
            res.status(200).json({
                meta: {
                    status: 200,
                    msg: "Movie deleted"
                },
                data: movie
            })
        })
        .catch(err => res.send(err));
    }
}