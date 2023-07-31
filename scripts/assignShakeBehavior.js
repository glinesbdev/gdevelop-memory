"use strict";

const fs = require("fs");
const path = require("path");

const updateCards = (cards) => cards.map(card => {
  return {
    ...card,
    behaviors: [{
      name: "ShakeObject_PositionAngle",
      type: "ShakeObject::ShakeObject_PositionAngle"
    }, ...card.behaviors]
  }
});

function partition(array, filter) {
  let pass = [], fail = [];
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e));
  return [pass, fail];
}

fs.readFile(path.resolve("../", "layouts", "game.json"), (err, buffer) => {
  if (err) throw err;

  let sceneData = JSON.parse(buffer);
  const [cards, nonCards] = partition(sceneData.objects, (x) => x.tags === "Card" && x.type === "Sprite");
  const sceneDataJson = JSON.stringify({ ...sceneData, objects: [ ...updateCards(cards), ...nonCards ]}, null, 2);

  fs.writeFile(path.resolve('../', 'layouts', 'game-2.json'), sceneDataJson, (err) => {
    if (err) throw err;
  });
});
