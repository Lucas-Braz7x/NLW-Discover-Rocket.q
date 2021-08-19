const Database = require("../db/config");

module.exports = {
  async create(req, res){
    const db = await Database()
    const pass = req.body.password;

    let roomId;
    let isRoom = true;

    while(isRoom){
        /* Gerando chave aleatória */
      for(let i=0; i<6;i++){
        i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
        roomId += Math.floor(Math.random() * 10).toString();
      }

      /* Verificando se já existe essa chave */
      const roomsIds = await db.all(`SELECT id FROM rooms`);

      isRoom = roomsIds.some(roomExistId => roomExistId == roomId);
      if(!isRoom){
        /* Inserindo a salano banco */
        await db.run(`
          INSERT INTO rooms(
            id, 
            pass
          )VALUES(
            ${parseInt(roomId)},
            ${pass}
          )
        `);
      }

    }

    
    await db.close();

    res.redirect(`/room/${roomId}`);
  }
}