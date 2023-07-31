
if (typeof gdjs.evtsExt__CardHelper___MapValue !== "undefined") {
  gdjs.evtsExt__CardHelper___MapValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CardHelper___MapValue = {};


gdjs.evtsExt__CardHelper___MapValue.userFunc0x8588c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const cardValue = eventsFunctionContext.getArgument("value");

const cardValueName = (() => {
    switch (cardValue) {
        case 1: return "Ace";
        case 11: return "Jack";
        case 12: return "Queen";
        case 13: return "King";
        default: return cardValue.toString();
    }
})();

eventsFunctionContext.returnValue = cardValueName;
};
gdjs.evtsExt__CardHelper___MapValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CardHelper___MapValue.userFunc0x8588c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CardHelper___MapValue.func = function(runtimeScene, value, parentEventsFunctionContext) {
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
if (argName === "value") return value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CardHelper___MapValue.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CardHelper___MapValue.registeredGdjsCallbacks = [];