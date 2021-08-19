const Database = require("../db/config");

module.exports = {
  index(req, res){
    const roomId =  req.params.room;
    const questionId =  req.params.question;
    const action =  req.params.action;
    const password = req.body.password;

    console.log(roomId);
    console.log(questionId);
    console.log(action);
    console.log(password);
  },

  async create(req, res){
    const db = await Database();

    const question = req.body.question;
    const roomId =  req.params.room;

    await db.run(`INSERT INTO questions(
      title,
      read,
      room 
    )VALUES(
      "${question}",
      0,
      ${roomId}
    )`);

    console.log(`chegou aqui `)

    res.redirect(`/room/${roomId}`);
  }
}