import { Player } from "../models/Player.js";
export async function getPlayers(req, res) {
  const data = await Player.findAll();
  res.json(data);
}
export async function createPlayer(req, res) {
  const { name, surname, phone } = req.body;
  const newPlayer = await Player.create({
    name,
    surname,
    phone,
  });

  res.send("creating Player");
}
