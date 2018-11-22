/**
 * PerguntasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: function(req, res) {
    Perguntas.find().then(function(data) {
      res.view("pages/perguntas/index",
        {
          notice: req.param("notice"),
          perguntas: data
        });
    });
  },
  new: function(req, res) {
    res.view("pages/perguntas/new");
  },
  edit: async function(req, res) {
    var pkid = parseInt(req.param('id'))
    if (pkid && !isNaN(pkid)) {
        var p = await Perguntas.findOne({
            id: pkid
        });
        if (p) {
          res.view("pages/perguntas/edit", {
            perguntas: p
          });
        } else {
          res.redirect("/perguntas?notice=Erro.");
        }
    } else {
        res.redirect("/perguntas?notice=Não encontrado.");
    }
  },
  saveOrUpdate: function(req, res) {
    var pkid = parseInt(req.param("id"));
    var model = {
      perguntas: req.param("perguntas"),
      alternativaA: req.param("alternativaA"),
      alternativaB: req.param("alternativaB"),
      alternativaC: req.param("alternativaC"),
      alternativaD: req.param("alternativaD"),
      resposta: req.param("resposta")
    }
    if (pkid > 0) {
      Perguntas.update({
          id: pkid
        }, model).exec(function(err, newmodel) {
          if (!err) {
            res.redirect(
              "/perguntas?notice=Salvo com sucesso!"
            );
          } else { // Não Salvou!
            res.redirect(
              "/perguntas?notice=Erro!"
            );
          }
      });
    } else {
      Perguntas.create(model).exec(function(err, newmodel) {
        if (!err) { // Salvou!
          console.log(newmodel);
            res.redirect(
              "/perguntas?notice=Salvo com sucesso!"
            );
        } else { // Não Salvou!
            res.redirect(
              "/perguntas?notice=Erro!"
            );
        }
      });
    }
  },
  delete: function(req, res) {
    var pkid = parseInt(req.param('id'))
    if (pkid && !isNaN(pkid)) {
        Perguntas.destroy({
            id: pkid
        }).exec(function(err) {
            if (!err) {
              res.redirect("/perguntas?notice=Removido.");
            } else {
              res.redirect("/perguntas?notice=Erro.");
            }
        });
    } else {
        res.redirect("/perguntas?notice=Não encontrado.");
    }
  }

};
