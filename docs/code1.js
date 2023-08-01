gdjs.Start_32MenuCode = {};
gdjs.Start_32MenuCode.GDBackgroundObjects1= [];
gdjs.Start_32MenuCode.GDBackgroundObjects2= [];
gdjs.Start_32MenuCode.GDMainFontObjects1= [];
gdjs.Start_32MenuCode.GDMainFontObjects2= [];
gdjs.Start_32MenuCode.GDStartButtonObjects1= [];
gdjs.Start_32MenuCode.GDStartButtonObjects2= [];
gdjs.Start_32MenuCode.GDHelpTextObjects1= [];
gdjs.Start_32MenuCode.GDHelpTextObjects2= [];


gdjs.Start_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32MenuCode.GDStartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32MenuCode.GDStartButtonObjects1[k] = gdjs.Start_32MenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32MenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10637972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Start_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32MenuCode.GDMainFontObjects1.length = 0;
gdjs.Start_32MenuCode.GDMainFontObjects2.length = 0;
gdjs.Start_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Start_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Start_32MenuCode.GDHelpTextObjects1.length = 0;
gdjs.Start_32MenuCode.GDHelpTextObjects2.length = 0;

gdjs.Start_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Start_32MenuCode'] = gdjs.Start_32MenuCode;
