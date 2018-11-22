/**
 * PerguntaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: function(req, res) {
    pergunta.find().then(function(data) {
      res.view("pages/pergunta/index",
        {
          notice: req.param("notice"),
          pergunta: data
        });
    });
  },
  new: function(req, res) {
    res.view("pages/pergunta/new");
  },
  edit: async function(req, res) {
    var pkid = parseInt(req.param('id'))
    if (pkid && !isNaN(pkid)) {
        var p = await pergunta.findOne({
            id: pkid
        });
        if (p) {
          res.view("pages/pergunta/edit", {
            pergunta: p
          });
        } else {
          res.redirect("/pergunta?notice=Erro.");
        }
    } else {
        res.redirect("/pergunta?notice=Não encontrado.");
    }
  },
  saveOrUpdate: function(req, res) {
    var pkid = parseInt(req.param("id"));
    var model = {
      pergunta: req.param("enunciado"),
      alternativaA: req.param("alternativaA"),
      alternativaB: req.param("alternativaB"),
      alternativaC: req.param("alternativaC"),
      alternativaD: req.param("alternativaC"),
      correta: req.param("alternativaCorreta")
    }
    if (pkid > 0) {
      pergunta.update({
          id: pkid
        }, model).exec(function(err, newmodel) {
          if (!err) {
            res.redirect(
              "/pergunta?notice=Salvo com sucesso!"
            );
          } else { // Não Salvou!
            res.redirect(
              "/pergunta?notice=Erro!"
            );
          }
      });
    } else {
      pergunta.create(model).exec(function(err, newmodel) {
        if (!err) { // Salvou!
          console.log(newmodel);
            res.redirect(
              "/pergunta?notice=Salvo com sucesso!"
            );
        } else { // Não Salvou!
            res.redirect(
              "/pergunta?notice=Erro!"
            );
        }
      });
    }
  },
  delete: function(req, res) {
    var pkid = parseInt(req.param('id'))
    if (pkid && !isNaN(pkid)) {
        pergunta.destroy({
            id: pkid
        }).exec(function(err) {
            if (!err) {
              res.redirect("/pergunta?notice=Removido.");
            } else {
              res.redirect("/pergunta?notice=Erro.");
            }
        });
    } else {
        res.redirect("/pergunta?notice=Não encontrado.");
    }
  }

};

