const expres = require('express');
const {celebrate,Segments,Joi} = require ('celebrate');
const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = expres.Router();

routes.post('/sessions',SessionController.create);
routes.get('/ongs', OngController.index);   
routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city: Joi.string().required().max(100),
        uf: Joi.string().required().length(2),
    })
}) ,OngController.create);

routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),ProfileController.index);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page : Joi.number(),
    })
}),incidentController.index);


routes.post('/incidents',celebrate({
    [Segments.BODY]: Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
        value:Joi.number().required().min(2).max(8),
    })
}),incidentController.create);


routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id: Joi.number().required(),
    })
}),incidentController.delete);
module.exports = routes;