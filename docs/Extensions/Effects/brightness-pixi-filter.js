var gdjs;(function(a){const i=GlobalPIXIModule.PIXI;a.PixiFiltersTools.registerFilterCreator("Brightness",new class extends a.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(r,t){const e=new i.filters.ColorMatrixFilter;return e.brightness(1,!1),e}updatePreRender(r,t){}updateDoubleParameter(r,t,e){const l=r;t==="brightness"&&l.brightness(a.PixiFiltersTools.clampValue(e,0,1),!1)}updateStringParameter(r,t,e){}updateBooleanParameter(r,t,e){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=brightness-pixi-filter.js.map