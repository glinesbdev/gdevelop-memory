"use strict";

const fs = require("fs");
const path = require("path");

const updateCards = (cards) => {
  return cards.map(card => {
    return {
      ...card,
      animations: card.animations.map(animation => {
        return {
          ...animation,
          directions: animation.directions.map(direction => {
            return {
              ...direction,
              sprites: direction.sprites.map(sprite => {
                return {
                  ...sprite,
                  originPoint: { ...sprite.originPoint, x: 186 / 2, y: 264 / 2 }
                }
              })
            }
          })
        }
      })
    }
  });
};

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
