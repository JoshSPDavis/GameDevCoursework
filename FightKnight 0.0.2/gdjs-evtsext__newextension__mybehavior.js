
gdjs.evtsExt__NewExtension__MyBehavior = gdjs.evtsExt__NewExtension__MyBehavior || {};

/**
 * Behavior generated from 
 * @class MyBehavior
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__NewExtension__MyBehavior.MyBehavior = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__NewExtension__MyBehavior.MyBehavior.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("NewExtension::MyBehavior", gdjs.evtsExt__NewExtension__MyBehavior.MyBehavior);

// Properties:


// Methods:

