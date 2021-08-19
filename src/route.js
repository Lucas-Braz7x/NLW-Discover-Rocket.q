const express = require('express');

/* Importando os controllers */
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', (req, res) =>{
  res.render("index", {page: 'enter-room'});
});
route.get('/create-pass', (req, res) =>{
  res.render("index", {page: 'create-pass'});
});

route.post('/create-room', RoomController.create );
route.get('/room/:roomId', RoomController.open);


/* Formato da modal de passar informação */
route.post('/question/create/:room', QuestionController.create );
route.post('/question/:room/:question/:action', QuestionController.index );


module.exports = route; 