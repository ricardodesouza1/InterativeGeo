/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome':            { action: 'dashboard/view-welcome' },

  'GET /faq':                { view:   'pages/faq' },
  'GET /legal/terms':        { view:   'pages/legal/terms' },
  'GET /legal/privacy':      { view:   'pages/legal/privacy' },
  'GET /contact':            { view:   'pages/contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  'GET /teste': { action: 'teste/index' },


  'GET /pessoa':      
        { action: "pessoa/index" },
  'GET /pessoa/new':
        { action: "pessoa/new" },
  'POST /pessoa/save':
        { action: "pessoa/saveOrUpdate"},
  'GET /pessoa/delete/:id':
        { action: "pessoa/delete" },
  'GET /pessoa/edit/:id':
        { action: "pessoa/edit" },

  'GET /perguntas':      
        { action: "perguntas/index" },
  'GET /perguntas/new':
        { action: "perguntas/new"},
  'POST /perguntas/save':
        { action: "perguntas/saveOrUpdate"},
  'GET /perguntas/delete/:id':
        { action: "perguntas/delete" },
  'GET /perguntas/edit/:id':
        { action: "perguntas/edit" },


  'GET /perguntas/login':
        { action: "perguntas/login"},
  'POST /perguntas/saveu':
        { action: "perguntas/saveuOrUpdate"},
  'GET /perguntas/nome':
        { action: "perguntas/nome"},


  'GET /perguntas/questionario':
        { action: "perguntas/questionario"},
  'POST /perguntas/saveg':
        { action: "perguntas/savegOrUpdate"},

  



// páginas estatiicas
  'GET /perguntas/logo':
        { action: "perguntas/logo"},
  'GET /perguntas/telaInicial':
        { action: "perguntas/telaInicial"},
  'GET /perguntas/opcaoEstudo':
        { action: "perguntas/opcaoEstudo"},


  // conteúdos

  'GET /perguntas/regiaoNorteClima':
        { action: "perguntas/regiaoNorteClima"},
  'GET /perguntas/regiaoNorteEstados':
        { action: "perguntas/regiaoNorteEstados"},
  'GET /perguntas/regiaoNorteRelevo':
        { action: "perguntas/regiaoNorteRelevo"},
  'GET /perguntas/regiaoNorteRelevo1':
        { action: "perguntas/regiaoNorteRelevo1"},
  'GET /perguntas/regiaoNorteRelevov':
        { action: "perguntas/regiaoNorteRelevov"},
  'GET /perguntas/regiaoNorteRelevo2':
        { action: "perguntas/regiaoNorteRelevo2"},
  'GET /perguntas/regiaoNorteVegetacao':
        { action: "perguntas/regiaoNorteVegetacao"},

  'GET /perguntas/resultado':
        { action: "perguntas/resultado"},

  
  
  
  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',

};
