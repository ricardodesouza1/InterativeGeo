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
  questionario: function(req, res) {
    Perguntas.find().then(function(data) {
      res.view("pages/perguntas/questionario",
        {
          notice: req.param("notice"),
          perguntas: data
        });
    });
  },
  nome: function(req, res) {
    Perguntas.find().then(function(data) {
      res.view("pages/perguntas/nome",
        {
          notice: req.param("notice"),
          perguntas: data
        });
    });
  },
  // paginas do progrma-----------------------
  login: function(req, res) {
    res.view("pages/perguntas/login");
  },
  logo: function(req, res) {
    res.view("pages/perguntas/logo");
  },
  telaInicial: function(req, res) {
    res.view("pages/perguntas/telaInicial");
  },
  opcaoEstudo: function(req, res) {
    res.view("pages/perguntas/opcaoEstudo");
  },
  regiaoNorteClima: function(req, res) {
    res.view("pages/perguntas/regiaoNorteClima");
  },
  regiaoNorteEstados: function(req, res) {
    res.view("pages/perguntas/regiaoNorteEstados");
  },
  regiaoNorteRelevo: function(req, res) {
    res.view("pages/perguntas/regiaoNorteRelevo");
  },
  regiaoNorteRelevo1: function(req, res) {
    res.view("pages/perguntas/regiaoNorteRelevo1");
  },
  regiaoNorteRelevo2: function(req, res) {
    res.view("pages/perguntas/regiaoNorteRelevo2");
  },
  regiaoNorteVegetacao: function(req, res) {
    res.view("pages/perguntas/regiaoNorteVegetacao");
  },

  // ------------------------------------------
  
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
  // salavar perguntas perguntas que seram cadastradas
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
              "/perguntas?notice=Erro!"+err
            );
        }
      });
    }
  },
  //usuário nome de usuário informado
  saveuOrUpdate: function(req, res) {
    var pkid = parseInt(req.param("id_usuario"));  // mudaça de id para id_usuario
    var model = {
      nome: req.param("nome")
    }
    if (pkid > 0) {
      Usuario.update({
          id_usuario: pkid    // mudaça de id para id_usuario
        }, model).exec(function(err, newmodel) {
          if (!err) {
            res.redirect(
              "/perguntas?notice=Salvo com sucesstooooooooooo!"
            );
          } else { // Não Salvou!
            res.redirect(
              "/perguntas?notice=Erro!"
            );
          }
      });
    } else {
      Usuario.create(model).exec(function(err, newmodel) {
        if (!err) { // Salvou!
          console.log(newmodel);
            res.redirect(
              "telaInicial"
            );
        } else { // Não Salvou!
            res.redirect(
              "/perguntas?notice=Erro!"+err
            );
        }
      });
    }
  },
 //pega resposta do usuário e insere no gabatio

 savegOrUpdate: function(req, res) {
    var pkid = parseInt(req.param("id_gabarito"));  // mudaça de id para id_usuario
    var pergunta = req.param("pergunta");
    var resposta = req.param("resposta");
    var resposta = req.param("usuario");
    for (i = 0; i < pergunta.length; i++) {
      var resposta = resposta[i];
      var perguntaId = pergunta[i];
      var usuarioId = usuario[i];
      var model = {
        gabarito: resposta,
        pergunta_id: perguntaId,
        usuario_id: usuarioId
      };
      if (pkid > 0) {
        Gabarito.update({
            id_gabarito: pkid    // mudaça de id para id_usuario
          }, model).exec(function(err, newmodel) {
            if (!err) {
              res.redirect(
                "/perguntas?notice=Salvo com sucessooooooooooogggg!"
              );
            } else { // Não Salvou!
              res.redirect(
                "/perguntas?notice=Erro!"
              );
            }
        });
      } else {
        Gabarito.create(model).exec(function(err, newmodel) {
          if (!err) { // Salvou!
            console.log(newmodel);
              res.redirect(
                "/perguntas?notice=Salvo com sucessooooooooooooggggg!"
              );
          } else { // Não Salvou!
              res.redirect(
                "/perguntas?notice=Erro!"+err
              );
          }
        });
      }
    }
  },

  // Excluir perguntas que foram cadastradas erradas
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
