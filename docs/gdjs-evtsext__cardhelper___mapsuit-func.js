
if (typeof gdjs.evtsExt__CardHelper___MapSuit !== "undefined") {
  gdjs.evtsExt__CardHelper___MapSuit.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CardHelper___MapSuit = {};


gdjs.evtsExt__CardHelper___MapSuit.userFunc0x8588c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const cardSuit = eventsFunctionContext.getArgument("suit");

const cardSuitName = (() => {
    switch (cardSuit) {
        case 0: return "Clubs";
        case 1: return "Diamonds";
        case 2: return "Hearts";
        case 3: return "Spades";
    }
})();

eventsFunctionContext.returnValue = cardSuitName;
};
gdjs.evtsExt__CardHelper___MapSuit.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CardHelper___MapSuit.userFunc0x8588c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CardHelper___MapSuit.func = function(runtimeScene, suit, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "suit") return suit;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CardHelper___MapSuit.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CardHelper___MapSuit.registeredGdjsCallbacks = [];