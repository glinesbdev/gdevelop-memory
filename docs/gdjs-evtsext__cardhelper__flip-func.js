
if (typeof gdjs.evtsExt__CardHelper__Flip !== "undefined") {
  gdjs.evtsExt__CardHelper__Flip.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CardHelper__Flip = {};
gdjs.evtsExt__CardHelper__Flip.GDCardsObjects1= [];
gdjs.evtsExt__CardHelper__Flip.GDCardsObjects2= [];


gdjs.evtsExt__CardHelper__Flip.asyncCallback11449532 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Cards"), gdjs.evtsExt__CardHelper__Flip.GDCardsObjects2);

{for(var i = 0, len = gdjs.evtsExt__CardHelper__Flip.GDCardsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CardHelper__Flip.GDCardsObjects2[i].setAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Side") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__CardHelper__Flip.GDCardsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CardHelper__Flip.GDCardsObjects2[i].flipX(true);
}
}}
gdjs.evtsExt__CardHelper__Flip.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__CardHelper__Flip.GDCardsObjects1) asyncObjectsList.addObject("Cards", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.evtsExt__CardHelper__Flip.asyncCallback11449532(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__CardHelper__Flip.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Cards"), gdjs.evtsExt__CardHelper__Flip.GDCardsObjects1);
{for(var i = 0, len = gdjs.evtsExt__CardHelper__Flip.GDCardsObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CardHelper__Flip.GDCardsObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Flip(300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__CardHelper__Flip.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CardHelper__Flip.func = function(runtimeScene, Cards, Side, Behavior, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Cards": Cards
},
  _objectArraysMap: {
"Cards": gdjs.objectsListsToArray(Cards)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Side") return Side;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__CardHelper__Flip.GDCardsObjects1.length = 0;
gdjs.evtsExt__CardHelper__Flip.GDCardsObjects2.length = 0;

gdjs.evtsExt__CardHelper__Flip.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CardHelper__Flip.registeredGdjsCallbacks = [];