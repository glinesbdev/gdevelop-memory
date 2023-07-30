
if (typeof gdjs.evtsExt__CardHelper__Shuffle !== "undefined") {
  gdjs.evtsExt__CardHelper__Shuffle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CardHelper__Shuffle = {};


gdjs.evtsExt__CardHelper__Shuffle.userFunc0xc003d8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const random = (seed) => {
  var x = Math.sin(seed++) * 10000; 
  return x - Math.floor(x);
}

const arr = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("names"));
arr.castTo("array");
const array = arr.getAllChildrenArray();

const length = array.length
let index = -1;
let seed = new Date().getMilliseconds();

while (++index < length) {
    const rand = Math.floor(random(seed) * index++);
    const value = array[rand];
    array[rand] = array[index];
    array[index] = value;
    ++seed;
}
};
gdjs.evtsExt__CardHelper__Shuffle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CardHelper__Shuffle.userFunc0xc003d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CardHelper__Shuffle.func = function(runtimeScene, names, parentEventsFunctionContext) {
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
if (argName === "names") return names;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CardHelper__Shuffle.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CardHelper__Shuffle.registeredGdjsCallbacks = [];