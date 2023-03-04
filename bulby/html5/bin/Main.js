(function ($hx_exports, $global) { "use strict"; var $hx_script = (function (exports, global) { (function ($hx_exports, $global) { "use strict";
$hx_exports["lime"] = $hx_exports["lime"] || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var lime_app_IModule = function() { };
$hxClasses["lime.app.IModule"] = lime_app_IModule;
lime_app_IModule.__name__ = true;
lime_app_IModule.__isInterface__ = true;
var lime_app_Module = function() {
	this.onExit = new lime_app__$Event_$Int_$Void();
};
$hxClasses["lime.app.Module"] = lime_app_Module;
lime_app_Module.__name__ = true;
lime_app_Module.__interfaces__ = [lime_app_IModule];
lime_app_Module.prototype = {
	__class__: lime_app_Module
};
var lime__$internal_backend_html5_HTML5Application = function(parent) {
	this.gameDeviceCache = new haxe_ds_IntMap();
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	lime_media_AudioManager.init();
	this.accelerometer = lime_system_Sensor.registerSensor(lime_system_SensorType.ACCELEROMETER,0);
};
$hxClasses["lime._internal.backend.html5.HTML5Application"] = lime__$internal_backend_html5_HTML5Application;
lime__$internal_backend_html5_HTML5Application.__name__ = true;
lime__$internal_backend_html5_HTML5Application.prototype = {
	convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) {
			return keyCode + 32;
		}
		switch(keyCode) {
		case 12:
			return 1073741980;
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 19:
			return 1073741896;
		case 20:
			return 1073741881;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 35:
			return 1073741901;
		case 36:
			return 1073741898;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 41:
			return 1073741943;
		case 43:
			return 1073741940;
		case 44:
			return 1073741894;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 91:
			return 1073742051;
		case 92:
			return 1073742055;
		case 93:
			return 1073742055;
		case 95:
			return 1073742106;
		case 96:
			return 1073741922;
		case 97:
			return 1073741913;
		case 98:
			return 1073741914;
		case 99:
			return 1073741915;
		case 100:
			return 1073741916;
		case 101:
			return 1073741917;
		case 102:
			return 1073741918;
		case 103:
			return 1073741919;
		case 104:
			return 1073741920;
		case 105:
			return 1073741921;
		case 106:
			return 1073741909;
		case 107:
			return 1073741911;
		case 108:
			return 1073741923;
		case 109:
			return 1073741910;
		case 110:
			return 1073741923;
		case 111:
			return 1073741908;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 127:
			return 1073741931;
		case 128:
			return 1073741932;
		case 129:
			return 1073741933;
		case 130:
			return 1073741934;
		case 131:
			return 1073741935;
		case 132:
			return 1073741936;
		case 133:
			return 1073741937;
		case 134:
			return 1073741938;
		case 135:
			return 1073741939;
		case 144:
			return 1073741907;
		case 145:
			return 1073741895;
		case 160:
			return 94;
		case 161:
			return 33;
		case 163:
			return 35;
		case 164:
			return 36;
		case 166:
			return 1073742094;
		case 167:
			return 1073742095;
		case 168:
			return 1073742097;
		case 169:
			return 41;
		case 170:
			return 42;
		case 171:
			return 96;
		case 172:
			return 1073741898;
		case 173:
			return 45;
		case 174:
			return 1073741953;
		case 175:
			return 1073741952;
		case 176:
			return 1073742082;
		case 177:
			return 1073742083;
		case 178:
			return 1073742084;
		case 179:
			return 1073742085;
		case 180:
			return 1073742089;
		case 181:
			return 1073742086;
		case 182:
			return 1073741953;
		case 183:
			return 1073741952;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 193:
			return 63;
		case 194:
			return 1073741923;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		case 223:
			return 96;
		case 224:
			return 1073742051;
		case 226:
			return 92;
		}
		return keyCode;
	}
	,exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		var o = window;
		if(Object.prototype.hasOwnProperty.call(o,"Accelerometer")) {
			window.addEventListener("devicemotion",$bind(this,this.handleSensorEvent),false);
		}
		
			if (!CanvasRenderingContext2D.prototype.isPointInStroke) {
				CanvasRenderingContext2D.prototype.isPointInStroke = function (path, x, y) {
					return false;
				};
			}
			if (!CanvasRenderingContext2D.prototype.isPointInPath) {
				CanvasRenderingContext2D.prototype.isPointInPath = function (path, x, y) {
					return false;
				};
			}

			if ('performance' in window == false) {
				window.performance = {};
			}

			if ('now' in window.performance == false) {
				var offset = Date.now();
				if (performance.timing && performance.timing.navigationStart) {
					offset = performance.timing.navigationStart
				}
				window.performance.now = function now() {
					return Date.now() - offset;
				}
			}

			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			}

			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); },
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};

			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};

			window.requestAnimFrame = window.requestAnimationFrame;
		;
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	}
	,exit: function() {
	}
	,handleApplicationEvent: function(__) {
		var _g = 0;
		var _g1 = this.parent.__windows;
		while(_g < _g1.length) {
			var $window = _g1[_g];
			++_g;
			$window.__backend.updateSize();
		}
		this.updateGameDevices();
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			var _g = 0;
			var _g1 = this.parent.__windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				this.parent.onUpdate.dispatch(this.deltaTime | 0);
				if($window.context != null) {
					$window.onRender.dispatch($window.context);
				}
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
			} else {
				this.nextUpdate = this.currentUpdate - this.currentUpdate % this.framePeriod + this.framePeriod;
			}
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	}
	,handleKeyEvent: function(event) {
		if(this.parent.__window != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null ? event.keyCode : event.which);
			var modifier = (event.shiftKey ? 3 : 0) | (event.ctrlKey ? 192 : 0) | (event.altKey ? 768 : 0) | (event.metaKey ? 3072 : 0);
			if(event.type == "keydown") {
				this.parent.__window.onKeyDown.dispatch(keyCode,modifier);
				if(this.parent.__window.onKeyDown.canceled && event.cancelable) {
					event.preventDefault();
				}
			} else {
				this.parent.__window.onKeyUp.dispatch(keyCode,modifier);
				if(this.parent.__window.onKeyUp.canceled && event.cancelable) {
					event.preventDefault();
				}
			}
		}
	}
	,handleSensorEvent: function(event) {
		this.accelerometer.onUpdate.dispatch(event.accelerationIncludingGravity.x,event.accelerationIncludingGravity.y,event.accelerationIncludingGravity.z);
	}
	,handleWindowEvent: function(event) {
		if(this.parent.__window != null) {
			switch(event.type) {
			case "beforeunload":
				break;
			case "blur":
				if(!this.hidden) {
					this.parent.__window.onFocusOut.dispatch();
					this.parent.__window.onDeactivate.dispatch();
					this.hidden = true;
				}
				break;
			case "focus":
				if(this.hidden) {
					this.parent.__window.onFocusIn.dispatch();
					this.parent.__window.onActivate.dispatch();
					this.hidden = false;
				}
				break;
			case "resize":
				this.parent.__window.__backend.handleResizeEvent(event);
				break;
			case "visibilitychange":
				if(window.document.hidden) {
					if(!this.hidden) {
						this.parent.__window.onFocusOut.dispatch();
						this.parent.__window.onDeactivate.dispatch();
						this.hidden = true;
					}
				} else if(this.hidden) {
					this.parent.__window.onFocusIn.dispatch();
					this.parent.__window.onActivate.dispatch();
					this.hidden = false;
				}
				break;
			}
		}
	}
	,updateGameDevices: function() {
		var devices = lime_ui_Joystick.__getDeviceData();
		if(devices == null) {
			return;
		}
		var id;
		var gamepad;
		var joystick;
		var data;
		var cache;
		var _g = 0;
		var _g1 = devices.length;
		while(_g < _g1) {
			var i = _g++;
			id = i;
			data = devices[id];
			if(data == null) {
				continue;
			}
			if(!this.gameDeviceCache.h.hasOwnProperty(id)) {
				cache = new lime__$internal_backend_html5_GameDeviceData();
				cache.id = id;
				cache.connected = data.connected;
				var _g2 = 0;
				var _g3 = data.buttons.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					cache.buttons.push(data.buttons[i1].value);
				}
				var _g4 = 0;
				var _g5 = data.axes.length;
				while(_g4 < _g5) {
					var i2 = _g4++;
					cache.axes.push(data.axes[i2]);
				}
				if(data.mapping == "standard") {
					cache.isGamepad = true;
				}
				this.gameDeviceCache.h[id] = cache;
				if(data.connected) {
					lime_ui_Joystick.__connect(id);
					if(cache.isGamepad) {
						lime_ui_Gamepad.__connect(id);
					}
				}
			}
			cache = this.gameDeviceCache.h[id];
			joystick = lime_ui_Joystick.devices.h[id];
			gamepad = lime_ui_Gamepad.devices.h[id];
			if(data.connected) {
				var button;
				var value;
				var _g6 = 0;
				var _g7 = data.buttons.length;
				while(_g6 < _g7) {
					var i3 = _g6++;
					value = data.buttons[i3].value;
					if(value != cache.buttons[i3]) {
						if(i3 == 6) {
							joystick.onAxisMove.dispatch(data.axes.length,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(4,value);
							}
						} else if(i3 == 7) {
							joystick.onAxisMove.dispatch(data.axes.length + 1,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(5,value);
							}
						} else {
							if(value > 0) {
								joystick.onButtonDown.dispatch(i3);
							} else {
								joystick.onButtonUp.dispatch(i3);
							}
							if(gamepad != null) {
								switch(i3) {
								case 0:
									button = 0;
									break;
								case 1:
									button = 1;
									break;
								case 2:
									button = 2;
									break;
								case 3:
									button = 3;
									break;
								case 4:
									button = 9;
									break;
								case 5:
									button = 10;
									break;
								case 8:
									button = 4;
									break;
								case 9:
									button = 6;
									break;
								case 10:
									button = 7;
									break;
								case 11:
									button = 8;
									break;
								case 12:
									button = 11;
									break;
								case 13:
									button = 12;
									break;
								case 14:
									button = 13;
									break;
								case 15:
									button = 14;
									break;
								case 16:
									button = 5;
									break;
								default:
									continue;
								}
								if(value > 0) {
									gamepad.onButtonDown.dispatch(button);
								} else {
									gamepad.onButtonUp.dispatch(button);
								}
							}
						}
						cache.buttons[i3] = value;
					}
				}
				var _g8 = 0;
				var _g9 = data.axes.length;
				while(_g8 < _g9) {
					var i4 = _g8++;
					if(data.axes[i4] != cache.axes[i4]) {
						joystick.onAxisMove.dispatch(i4,data.axes[i4]);
						if(gamepad != null) {
							gamepad.onAxisMove.dispatch(i4,data.axes[i4]);
						}
						cache.axes[i4] = data.axes[i4];
					}
				}
			} else if(cache.connected) {
				cache.connected = false;
				lime_ui_Joystick.__disconnect(id);
				lime_ui_Gamepad.__disconnect(id);
			}
		}
	}
	,__class__: lime__$internal_backend_html5_HTML5Application
};
var lime_app_Application = function() {
	this.onCreateWindow = new lime_app__$Event_$lime_$ui_$Window_$Void();
	this.onUpdate = new lime_app__$Event_$Int_$Void();
	lime_app_Module.call(this);
	if(lime_app_Application.current == null) {
		lime_app_Application.current = this;
	}
	this.meta = new haxe_ds_StringMap();
	this.modules = [];
	this.__windowByID = new haxe_ds_IntMap();
	this.__windows = [];
	this.__backend = new lime__$internal_backend_html5_HTML5Application(this);
	this.__registerLimeModule(this);
	this.__preloader = new lime_utils_Preloader();
	this.__preloader.onProgress.add($bind(this,this.onPreloadProgress));
	this.__preloader.onComplete.add($bind(this,this.onPreloadComplete));
};
$hxClasses["lime.app.Application"] = lime_app_Application;
lime_app_Application.__name__ = true;
lime_app_Application.__super__ = lime_app_Module;
lime_app_Application.prototype = $extend(lime_app_Module.prototype,{
	createWindow: function(attributes) {
		var $window = this.__createWindow(attributes);
		this.__addWindow($window);
		return $window;
	}
	,exec: function() {
		lime_app_Application.current = this;
		return this.__backend.exec();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onJoystickAxisMove: function(joystick,axis,value) {
	}
	,onJoystickButtonDown: function(joystick,button) {
	}
	,onJoystickButtonUp: function(joystick,button) {
	}
	,onJoystickConnect: function(joystick) {
	}
	,onJoystickDisconnect: function(joystick) {
	}
	,onJoystickHatMove: function(joystick,hat,position) {
	}
	,onJoystickTrackballMove: function(joystick,trackball,x,y) {
	}
	,onKeyDown: function(keyCode,modifier) {
	}
	,onKeyUp: function(keyCode,modifier) {
	}
	,onModuleExit: function(code) {
	}
	,onMouseDown: function(x,y,button) {
	}
	,onMouseMove: function(x,y) {
	}
	,onMouseMoveRelative: function(x,y) {
	}
	,onMouseUp: function(x,y,button) {
	}
	,onMouseWheel: function(deltaX,deltaY,deltaMode) {
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function() {
	}
	,onRenderContextRestored: function(context) {
	}
	,onTextEdit: function(text,start,length) {
	}
	,onTextInput: function(text) {
	}
	,onTouchCancel: function(touch) {
	}
	,onTouchEnd: function(touch) {
	}
	,onTouchMove: function(touch) {
	}
	,onTouchStart: function(touch) {
	}
	,onWindowActivate: function() {
	}
	,onWindowClose: function() {
	}
	,onWindowCreate: function() {
	}
	,onWindowDeactivate: function() {
	}
	,onWindowDropFile: function(file) {
	}
	,onWindowEnter: function() {
	}
	,onWindowExpose: function() {
	}
	,onWindowFocusIn: function() {
	}
	,onWindowFocusOut: function() {
	}
	,onWindowFullscreen: function() {
	}
	,onWindowLeave: function() {
	}
	,onWindowMove: function(x,y) {
	}
	,onWindowMinimize: function() {
	}
	,onWindowResize: function(width,height) {
	}
	,onWindowRestore: function() {
	}
	,render: function(context) {
	}
	,update: function(deltaTime) {
	}
	,__addWindow: function($window) {
		if($window != null) {
			this.__windows.push($window);
			this.__windowByID.h[$window.id] = $window;
			var _g = $bind(this,this.__onWindowClose);
			var window1 = $window;
			var tmp = function() {
				_g(window1);
			};
			$window.onClose.add(tmp,false,-10000);
			if(this.__window == null) {
				this.__window = $window;
				$window.onActivate.add($bind(this,this.onWindowActivate));
				$window.onRenderContextLost.add($bind(this,this.onRenderContextLost));
				$window.onRenderContextRestored.add($bind(this,this.onRenderContextRestored));
				$window.onDeactivate.add($bind(this,this.onWindowDeactivate));
				$window.onDropFile.add($bind(this,this.onWindowDropFile));
				$window.onEnter.add($bind(this,this.onWindowEnter));
				$window.onExpose.add($bind(this,this.onWindowExpose));
				$window.onFocusIn.add($bind(this,this.onWindowFocusIn));
				$window.onFocusOut.add($bind(this,this.onWindowFocusOut));
				$window.onFullscreen.add($bind(this,this.onWindowFullscreen));
				$window.onKeyDown.add($bind(this,this.onKeyDown));
				$window.onKeyUp.add($bind(this,this.onKeyUp));
				$window.onLeave.add($bind(this,this.onWindowLeave));
				$window.onMinimize.add($bind(this,this.onWindowMinimize));
				$window.onMouseDown.add($bind(this,this.onMouseDown));
				$window.onMouseMove.add($bind(this,this.onMouseMove));
				$window.onMouseMoveRelative.add($bind(this,this.onMouseMoveRelative));
				$window.onMouseUp.add($bind(this,this.onMouseUp));
				$window.onMouseWheel.add($bind(this,this.onMouseWheel));
				$window.onMove.add($bind(this,this.onWindowMove));
				$window.onRender.add($bind(this,this.render));
				$window.onResize.add($bind(this,this.onWindowResize));
				$window.onRestore.add($bind(this,this.onWindowRestore));
				$window.onTextEdit.add($bind(this,this.onTextEdit));
				$window.onTextInput.add($bind(this,this.onTextInput));
				this.onWindowCreate();
			}
			this.onCreateWindow.dispatch($window);
		}
	}
	,__createWindow: function(attributes) {
		var $window = new lime_ui_Window(this,attributes);
		if($window.id == -1) {
			return null;
		}
		return $window;
	}
	,__registerLimeModule: function(application) {
		application.onUpdate.add($bind(this,this.update));
		application.onExit.add($bind(this,this.onModuleExit),false,0);
		application.onExit.add($bind(this,this.__onModuleExit),false,0);
		var gamepad = lime_ui_Gamepad.devices.iterator();
		while(gamepad.hasNext()) {
			var gamepad1 = gamepad.next();
			this.__onGamepadConnect(gamepad1);
		}
		lime_ui_Gamepad.onConnect.add($bind(this,this.__onGamepadConnect));
		var joystick = lime_ui_Joystick.devices.iterator();
		while(joystick.hasNext()) {
			var joystick1 = joystick.next();
			this.__onJoystickConnect(joystick1);
		}
		lime_ui_Joystick.onConnect.add($bind(this,this.__onJoystickConnect));
		lime_ui_Touch.onCancel.add($bind(this,this.onTouchCancel));
		lime_ui_Touch.onStart.add($bind(this,this.onTouchStart));
		lime_ui_Touch.onMove.add($bind(this,this.onTouchMove));
		lime_ui_Touch.onEnd.add($bind(this,this.onTouchEnd));
	}
	,__removeWindow: function($window) {
		if($window != null && this.__windowByID.h.hasOwnProperty($window.id)) {
			if(this.__window == $window) {
				this.__window = null;
			}
			HxOverrides.remove(this.__windows,$window);
			this.__windowByID.remove($window.id);
			$window.close();
			if(this.__windows.length == 0) {
				lime_system_System.exit(0);
			}
		}
	}
	,__onGamepadConnect: function(gamepad) {
		this.onGamepadConnect(gamepad);
		var _g = $bind(this,this.onGamepadAxisMove);
		var gamepad1 = gamepad;
		var tmp = function(axis,value) {
			_g(gamepad1,axis,value);
		};
		gamepad.onAxisMove.add(tmp);
		var _g1 = $bind(this,this.onGamepadButtonDown);
		var gamepad2 = gamepad;
		var tmp = function(button) {
			_g1(gamepad2,button);
		};
		gamepad.onButtonDown.add(tmp);
		var _g2 = $bind(this,this.onGamepadButtonUp);
		var gamepad3 = gamepad;
		var tmp = function(button) {
			_g2(gamepad3,button);
		};
		gamepad.onButtonUp.add(tmp);
		var _g3 = $bind(this,this.onGamepadDisconnect);
		var gamepad4 = gamepad;
		var tmp = function() {
			_g3(gamepad4);
		};
		gamepad.onDisconnect.add(tmp);
	}
	,__onJoystickConnect: function(joystick) {
		this.onJoystickConnect(joystick);
		var _g = $bind(this,this.onJoystickAxisMove);
		var joystick1 = joystick;
		var tmp = function(axis,value) {
			_g(joystick1,axis,value);
		};
		joystick.onAxisMove.add(tmp);
		var _g1 = $bind(this,this.onJoystickButtonDown);
		var joystick2 = joystick;
		var tmp = function(button) {
			_g1(joystick2,button);
		};
		joystick.onButtonDown.add(tmp);
		var _g2 = $bind(this,this.onJoystickButtonUp);
		var joystick3 = joystick;
		var tmp = function(button) {
			_g2(joystick3,button);
		};
		joystick.onButtonUp.add(tmp);
		var _g3 = $bind(this,this.onJoystickDisconnect);
		var joystick4 = joystick;
		var tmp = function() {
			_g3(joystick4);
		};
		joystick.onDisconnect.add(tmp);
		var _g4 = $bind(this,this.onJoystickHatMove);
		var joystick5 = joystick;
		var tmp = function(hat,position) {
			_g4(joystick5,hat,position);
		};
		joystick.onHatMove.add(tmp);
		var _g5 = $bind(this,this.onJoystickTrackballMove);
		var joystick6 = joystick;
		var tmp = function(trackball,x,y) {
			_g5(joystick6,trackball,x,y);
		};
		joystick.onTrackballMove.add(tmp);
	}
	,__onModuleExit: function(code) {
		this.__backend.exit();
	}
	,__onWindowClose: function($window) {
		if(this.__window == $window) {
			this.onWindowClose();
		}
		this.__removeWindow($window);
	}
	,__class__: lime_app_Application
});
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = true;
ApplicationMain.main = function() {
	lime_system_System.__registerEntryPoint("Main",ApplicationMain.create);
};
ApplicationMain.create = function(config) {
	ManifestResources.init(config);
	var app = new Main();
	app.meta.h["build"] = "1";
	app.meta.h["company"] = "Sylvio Sell - maitag";
	app.meta.h["file"] = "Main";
	app.meta.h["name"] = "PeoteViewSamples";
	app.meta.h["packageName"] = "peote.view";
	app.meta.h["version"] = "0.1.0";
	var attributes = { allowHighDPI : true, alwaysOnTop : false, borderless : false, element : null, frameRate : 61, height : 0, hidden : false, maximized : false, minimized : false, parameters : { }, resizable : true, title : "PeoteViewSamples", width : 0, x : null, y : null};
	attributes.context = { antialiasing : 0, background : 16777215, colorDepth : 32, depth : true, hardware : true, stencil : true, type : null, vsync : false};
	if(app.__window == null) {
		if(config != null) {
			var _g = 0;
			var _g1 = Reflect.fields(config);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(attributes,field)) {
					attributes[field] = Reflect.field(config,field);
				} else if(Object.prototype.hasOwnProperty.call(attributes.context,field)) {
					attributes.context[field] = Reflect.field(config,field);
				}
			}
		}
	}
	app.createWindow(attributes);
	var _g = 0;
	var _g1 = ManifestResources.preloadLibraries;
	while(_g < _g1.length) {
		var library = _g1[_g];
		++_g;
		app.__preloader.addLibrary(library);
	}
	var _g = 0;
	var _g1 = ManifestResources.preloadLibraryNames;
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		app.__preloader.addLibraryName(name);
	}
	app.__preloader.load();
	ApplicationMain.start(app);
};
ApplicationMain.start = function(app) {
	var result = app.exec();
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,matchedRight: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		var sz = this.r.m.index + this.r.m[0].length;
		return HxOverrides.substr(this.r.s,sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d["setTime"](0);
		d["setUTCHours"](k[0]);
		d["setUTCMinutes"](k[1]);
		d["setUTCSeconds"](k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw haxe_Exception.thrown("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.stringify = function(h) {
	var s = "{";
	var first = true;
	for (var key in h) {
		if (first) first = false; else s += ',';
		s += key + ' => ' + Std.string(h[key]);
	}
	return s + "}";
};
haxe_ds_StringMap.prototype = {
	get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,remove: function(key) {
		if(Object.prototype.hasOwnProperty.call(this.h,key)) {
			delete(this.h[key]);
			return true;
		} else {
			return false;
		}
	}
	,toString: function() {
		return haxe_ds_StringMap.stringify(this.h);
	}
	,__class__: haxe_ds_StringMap
};
var Bulby = function(x,y,currTime) {
	this.bytePos = -1;
	this.timeYDuration = 0.;
	this.timeYStart = 0.;
	this.timeXDuration = 0.;
	this.timeXStart = 0.;
	this.tile = 0;
	this.timeX(currTime,10);
	this.timeY(currTime,3);
};
$hxClasses["Bulby"] = Bulby;
Bulby.__name__ = true;
Bulby.prototype = {
	timeX: function(startTime,duration) {
		this.timeXStart = startTime;
		this.timeXDuration = duration;
	}
	,timeY: function(startTime,duration) {
		this.timeYStart = startTime;
		this.timeYDuration = duration;
	}
	,__class__: Bulby
};
var Main = function() {
	this.isReady = false;
	this.secondsDuration = 0.5;
	this.secondsRemaining = 0;
	lime_app_Application.call(this);
};
$hxClasses["Main"] = Main;
Main.__name__ = true;
Main.__super__ = lime_app_Application;
Main.prototype = $extend(lime_app_Application.prototype,{
	onWindowCreate: function() {
		var _gthis = this;
		switch(this.__window.context.type) {
		case "opengl":case "opengles":case "webgl":
			var peoteView = new peote_view_PeoteView(this.__window);
			var display = new peote_view_Display(0,0,800,600,255);
			this.buffer = new peote_view_Buffer_$Bulby(1);
			var program = new peote_view_Program(this.buffer);
			var frameSize = 64;
			var name = "assets/bulby_spritesheet.png";
			var debug = true;
			var onProgress = null;
			var onError = null;
			var onLoad = function(image) {
				var texture = new peote_view_Texture(image.width,image.height);
				texture.tilesX = image.width / frameSize | 0;
				texture.tilesY = image.height / frameSize | 0;
				texture.setImage(peote_view_TextureData.fromLimeImage(image));
				program.addTexture(texture,"custom");
				program.snapToPixel(1);
				peoteView.addDisplay(display);
				display.addProgram(program);
				var onLoad = peoteView.isRun ? new Date().getTime() / 1000 - peoteView.startTime : peoteView.stopTime;
				_gthis.bulby = new Bulby(0,0,onLoad * peoteView.speed);
				_gthis.buffer.addElement(_gthis.bulby);
				peoteView.start();
				_gthis.isReady = true;
			};
			if(debug == null) {
				debug = false;
			}
			if(utils_Loader.corsServer != "" && new EReg("^https?://","").match(name)) {
				name = "//" + utils_Loader.corsServer + "/" + name;
			}
			var future = lime_graphics_Image.loadFromFile(name);
			if(debug) {
				console.log("utils/Loader.hx:28:","Start loading image \"" + name + "\"");
				future.onProgress(function(a,b) {
					utils_Loader.onProgressDebug(a,b,name);
				});
				future.onError(utils_Loader.onErrorDebug);
				future.onComplete(function(image) {
					utils_Loader.onCompleteDebug(name);
				});
			}
			if(onProgress != null) {
				future.onProgress(onProgress);
			}
			if(onError != null) {
				future.onError(onError);
			}
			if(onLoad != null) {
				future.onComplete(onLoad);
			}
			break;
		default:
		}
	}
	,update: function(deltaTime) {
		lime_app_Application.prototype.update.call(this,deltaTime);
		if(!this.isReady) {
			return;
		}
		if(this.secondsRemaining <= 0) {
			this.secondsRemaining = this.secondsDuration;
			var randomTileIndex = Math.floor(Math.random() * 5);
			this.bulby.tile = randomTileIndex;
			this.buffer.updateElement(this.bulby);
		}
		this.secondsRemaining -= deltaTime / 1000;
	}
	,__class__: Main
});
var ManifestResources = function() { };
$hxClasses["ManifestResources"] = ManifestResources;
ManifestResources.__name__ = true;
ManifestResources.init = function(config) {
	ManifestResources.preloadLibraries = [];
	ManifestResources.preloadLibraryNames = [];
	ManifestResources.rootPath = null;
	if(config != null && Object.prototype.hasOwnProperty.call(config,"rootPath")) {
		ManifestResources.rootPath = Reflect.field(config,"rootPath");
		if(!StringTools.endsWith(ManifestResources.rootPath,"/")) {
			ManifestResources.rootPath += "/";
		}
	}
	if(ManifestResources.rootPath == null) {
		ManifestResources.rootPath = "./";
	}
	var bundle;
	var data = "{\"name\":null,\"assets\":\"aoy4:pathy23:assets%2FBulbyBy-sa.txty4:sizei20138y4:typey4:TEXTy2:idR1goR0y18:assets%2Fbulby.pngR2i1351R3y5:IMAGER5R6goR0y27:assets%2Fbowlbypfpanim2.pngR2i581R3R7R5R8goR0y27:assets%2Fbowlbypfpanim4.pngR2i583R3R7R5R9goR0y27:assets%2Fbowlbypfpanim3.pngR2i577R3R7R5R10goR0y30:assets%2Fbulby_spritesheet.pngR2i876R3R7R5R11goR0y27:assets%2Fbowlbypfpanim1.pngR2i575R3R7R5R12goR0y27:assets%2Fbowlbypfpanim5.pngR2i583R3R7R5R13gh\",\"rootPath\":null,\"version\":2,\"libraryArgs\":[],\"libraryType\":null}";
	var manifest = lime_utils_AssetManifest.parse(data,ManifestResources.rootPath);
	var library = lime_utils_AssetLibrary.fromManifest(manifest);
	lime_utils_Assets.registerLibrary("default",library);
	library = lime_utils_Assets.getLibrary("default");
	if(library != null) {
		ManifestResources.preloadLibraries.push(library);
	} else {
		ManifestResources.preloadLibraryNames.push("default");
	}
};
Math.__name__ = true;
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) {
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		return false;
	}
	if(f1.scope == f2.scope && f1.method == f2.method) {
		return f1.method != null;
	} else {
		return false;
	}
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
var _$String_String_$Impl_$ = function() { };
$hxClasses["_String.String_Impl_"] = _$String_String_$Impl_$;
_$String_String_$Impl_$.__name__ = true;
_$String_String_$Impl_$.fromCharCode = function(code) {
	return String.fromCodePoint(code);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = true;
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return s.indexOf(end,slen - elen) == slen - elen;
	} else {
		return false;
	}
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	var ctor = Function.prototype.bind.apply(cl,[null].concat(args));
	return new (ctor);
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) {
		throw haxe_Exception.thrown("No such constructor " + constr);
	}
	if(Reflect.isFunction(f)) {
		if(params == null) {
			throw haxe_Exception.thrown("Constructor " + constr + " need parameters");
		}
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) {
		throw haxe_Exception.thrown("Constructor " + constr + " does not need parameters");
	}
	return f;
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
$hxClasses["haxe.Exception"] = haxe_Exception;
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
	,__properties__: {get_native:"get_native",get_message:"get_message"}
});
var haxe__$Unserializer_DefaultResolver = function() {
};
$hxClasses["haxe._Unserializer.DefaultResolver"] = haxe__$Unserializer_DefaultResolver;
haxe__$Unserializer_DefaultResolver.__name__ = true;
haxe__$Unserializer_DefaultResolver.prototype = {
	resolveClass: function(name) {
		return $hxClasses[name];
	}
	,resolveEnum: function(name) {
		return $hxEnums[name];
	}
	,__class__: haxe__$Unserializer_DefaultResolver
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = this.buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = new haxe__$Unserializer_DefaultResolver();
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.resolver = r;
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = true;
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g = 0;
	var _g1 = haxe_Unserializer.BASE64.length;
	while(_g < _g1) {
		var i = _g++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c == 45) {
				if(this.pos != fpos) {
					break;
				}
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) {
				break;
			}
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) {
			k *= -1;
		}
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c >= 43 && c < 58 || c == 101 || c == 69) {
				this.pos++;
			} else {
				break;
			}
		}
		return parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) {
				throw haxe_Exception.thrown("Invalid object");
			}
			if(this.buf.charCodeAt(this.pos) == 103) {
				break;
			}
			var k = this.unserialize();
			if(typeof(k) != "string") {
				throw haxe_Exception.thrown("Invalid object key");
			}
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) {
			throw haxe_Exception.thrown("Invalid enum format");
		}
		var nargs = this.readDigits();
		if(nargs == 0) {
			return Type.createEnum(edecl,tag);
		}
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		switch(this.buf.charCodeAt(this.pos++)) {
		case 65:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			return cl;
		case 66:
			var name = this.unserialize();
			var e = this.resolver.resolveEnum(name);
			if(e == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			return e;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			var o = Object.create(cl.prototype);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) {
				throw haxe_Exception.thrown("Invalid custom data");
			}
			return o;
		case 77:
			var h = new haxe_ds_ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) {
				throw haxe_Exception.thrown("Invalid string reference");
			}
			return this.scache[n];
		case 97:
			var buf = this.buf;
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else {
					a.push(this.unserialize());
				}
			}
			return a;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				var value = this.unserialize();
				h.h[s] = value;
			}
			this.pos++;
			return h;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			var o = Object.create(cl.prototype);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 100:
			return this.readFloat();
		case 102:
			return false;
		case 105:
			return this.readDigits();
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			this.pos++;
			var index = this.readDigits();
			var _this = edecl.__constructs__;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _this[i]._hx_name;
			}
			var tag = result[index];
			if(tag == null) {
				throw haxe_Exception.thrown("Unknown enum index " + name + "@" + index);
			}
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 107:
			return NaN;
		case 108:
			var l = new haxe_ds_List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 109:
			return -Infinity;
		case 110:
			return null;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 112:
			return Infinity;
		case 113:
			var h = new haxe_ds_IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				var value = this.unserialize();
				h.h[i] = value;
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) {
				throw haxe_Exception.thrown("Invalid IntMap format");
			}
			return h;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) {
				throw haxe_Exception.thrown("Invalid reference");
			}
			return this.cache[n];
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
				throw haxe_Exception.thrown("Invalid bytes length");
			}
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2 ? rest - 1 : 0);
			var max = i + (len - rest);
			var bytes = new haxe_io_Bytes(new ArrayBuffer(size));
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 116:
			return true;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
				this.pos += 19;
			} else {
				d = new Date(this.readFloat());
			}
			this.cache.push(d);
			return d;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 120:
			throw haxe_Exception.thrown(this.unserialize());
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
				throw haxe_Exception.thrown("Invalid string length");
			}
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 122:
			return 0;
		default:
		}
		this.pos--;
		throw haxe_Exception.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
$hxClasses["haxe.ValueException"] = haxe_ValueException;
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_crypto_Adler32 = function() {
	this.a1 = 1;
	this.a2 = 0;
};
$hxClasses["haxe.crypto.Adler32"] = haxe_crypto_Adler32;
haxe_crypto_Adler32.__name__ = true;
haxe_crypto_Adler32.read = function(i) {
	var a = new haxe_crypto_Adler32();
	var a2a = i.readByte();
	var a2b = i.readByte();
	var a1a = i.readByte();
	var a1b = i.readByte();
	a.a1 = a1a << 8 | a1b;
	a.a2 = a2a << 8 | a2b;
	return a;
};
haxe_crypto_Adler32.prototype = {
	update: function(b,pos,len) {
		var a1 = this.a1;
		var a2 = this.a2;
		var _g = pos;
		var _g1 = pos + len;
		while(_g < _g1) {
			var p = _g++;
			var c = b.b[p];
			a1 = (a1 + c) % 65521;
			a2 = (a2 + a1) % 65521;
		}
		this.a1 = a1;
		this.a2 = a2;
	}
	,equals: function(a) {
		if(a.a1 == this.a1) {
			return a.a2 == this.a2;
		} else {
			return false;
		}
	}
	,__class__: haxe_crypto_Adler32
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.ofString = function(s,encoding) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	}
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		var s = "";
		var b = this.b;
		var fcc = _$String_String_$Impl_$.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) {
					break;
				}
				s += fcc(c);
			} else if(c < 224) {
				s += fcc((c & 63) << 6 | b[i++] & 127);
			} else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = true;
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) {
			return false;
		}
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) a.push(+key);
		return new haxe_iterators_ArrayIterator(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,toString: function() {
		var s_b = "";
		s_b += "{";
		var it = this.keys();
		var i = it;
		while(i.hasNext()) {
			var i1 = i.next();
			s_b += i1 == null ? "null" : "" + i1;
			s_b += " => ";
			s_b += Std.string(Std.string(this.h[i1]));
			if(it.hasNext()) {
				s_b += ", ";
			}
		}
		s_b += "}";
		return s_b;
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_List = function() {
	this.length = 0;
};
$hxClasses["haxe.ds.List"] = haxe_ds_List;
haxe_ds_List.__name__ = true;
haxe_ds_List.prototype = {
	add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = new haxe_ds__$List_ListNode(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	}
	,first: function() {
		if(this.h == null) {
			return null;
		} else {
			return this.h.item;
		}
	}
	,pop: function() {
		if(this.h == null) {
			return null;
		}
		var x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,toString: function() {
		var s_b = "";
		var first = true;
		var l = this.h;
		s_b += "{";
		while(l != null) {
			if(first) {
				first = false;
			} else {
				s_b += ", ";
			}
			s_b += Std.string(Std.string(l.item));
			l = l.next;
		}
		s_b += "}";
		return s_b;
	}
	,__class__: haxe_ds_List
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
$hxClasses["haxe.ds._List.ListNode"] = haxe_ds__$List_ListNode;
haxe_ds__$List_ListNode.__name__ = true;
haxe_ds__$List_ListNode.prototype = {
	__class__: haxe_ds__$List_ListNode
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return new haxe_iterators_ArrayIterator(a);
	}
	,toString: function() {
		var s_b = "";
		s_b += "{";
		var it = this.keys();
		var i = it;
		while(i.hasNext()) {
			var i1 = i.next();
			s_b += Std.string(Std.string(i1));
			s_b += " => ";
			s_b += Std.string(Std.string(this.h[i1.__id__]));
			if(it.hasNext()) {
				s_b += ", ";
			}
		}
		s_b += "}";
		return s_b;
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
$hxClasses["haxe.exceptions.PosException"] = haxe_exceptions_PosException;
haxe_exceptions_PosException.__name__ = true;
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
	,__class__: haxe_exceptions_PosException
});
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
$hxClasses["haxe.exceptions.NotImplementedException"] = haxe_exceptions_NotImplementedException;
haxe_exceptions_NotImplementedException.__name__ = true;
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
	__class__: haxe_exceptions_NotImplementedException
});
var haxe_io_BytesBuffer = function() {
	this.pos = 0;
	this.size = 0;
};
$hxClasses["haxe.io.BytesBuffer"] = haxe_io_BytesBuffer;
haxe_io_BytesBuffer.__name__ = true;
haxe_io_BytesBuffer.prototype = {
	addByte: function(byte) {
		if(this.pos == this.size) {
			this.grow(1);
		}
		this.view.setUint8(this.pos++,byte);
	}
	,add: function(src) {
		if(this.pos + src.length > this.size) {
			this.grow(src.length);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset,src.length);
		this.u8.set(sub,this.pos);
		this.pos += src.length;
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.pos + len > this.size) {
			this.grow(len);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset + pos,len);
		this.u8.set(sub,this.pos);
		this.pos += len;
	}
	,grow: function(delta) {
		var req = this.pos + delta;
		var nsize = this.size == 0 ? 16 : this.size;
		while(nsize < req) nsize = nsize * 3 >> 1;
		var nbuf = new ArrayBuffer(nsize);
		var nu8 = new Uint8Array(nbuf);
		if(this.size > 0) {
			nu8.set(this.u8);
		}
		this.size = nsize;
		this.buffer = nbuf;
		this.u8 = nu8;
		this.view = new DataView(this.buffer);
	}
	,getBytes: function() {
		if(this.size == 0) {
			return new haxe_io_Bytes(new ArrayBuffer(0));
		}
		var b = new haxe_io_Bytes(this.buffer);
		b.length = this.pos;
		return b;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_Input = function() { };
$hxClasses["haxe.io.Input"] = haxe_io_Input;
haxe_io_Input.__name__ = true;
haxe_io_Input.prototype = {
	readByte: function() {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Input.hx", lineNumber : 53, className : "haxe.io.Input", methodName : "readByte"});
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( _g ) {
			if(!((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
				throw _g;
			}
		}
		return len - k;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = new haxe_io_Bytes(new ArrayBuffer(nbytes));
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian ? ch2 | ch1 << 8 : ch1 | ch2 << 8;
		if((n & 32768) != 0) {
			return n - 65536;
		}
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) {
			return ch2 | ch1 << 8;
		} else {
			return ch1 | ch2 << 8;
		}
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) {
			return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
		} else {
			return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
		}
	}
	,readString: function(len,encoding) {
		var b = new haxe_io_Bytes(new ArrayBuffer(len));
		this.readFullBytes(b,0,len);
		return b.getString(0,len,encoding);
	}
	,__class__: haxe_io_Input
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.length - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.length) {
		throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe_io_BytesInput;
haxe_io_BytesInput.__name__ = true;
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	readByte: function() {
		if(this.len == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
});
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_io_Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = true;
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else {
		this.dir = null;
	}
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe_io_Path;
haxe_io_Path.__name__ = true;
haxe_io_Path.directory = function(path) {
	var s = new haxe_io_Path(path);
	if(s.dir == null) {
		return "";
	}
	return s.dir;
};
haxe_io_Path.prototype = {
	__class__: haxe_io_Path
};
var haxe_io_UInt8Array = {};
haxe_io_UInt8Array.fromBytes = function(bytes,bytePos,length) {
	if(bytePos == null) {
		bytePos = 0;
	}
	if(length == null) {
		length = bytes.length - bytePos;
	}
	return new Uint8Array(bytes.b.bufferValue,bytePos,length);
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
$hxClasses["haxe.iterators.ArrayIterator"] = haxe_iterators_ArrayIterator;
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var haxe_zip_ExtraField = $hxEnums["haxe.zip.ExtraField"] = { __ename__:true,__constructs__:null
	,FUnknown: ($_=function(tag,bytes) { return {_hx_index:0,tag:tag,bytes:bytes,__enum__:"haxe.zip.ExtraField",toString:$estr}; },$_._hx_name="FUnknown",$_.__params__ = ["tag","bytes"],$_)
	,FInfoZipUnicodePath: ($_=function(name,crc) { return {_hx_index:1,name:name,crc:crc,__enum__:"haxe.zip.ExtraField",toString:$estr}; },$_._hx_name="FInfoZipUnicodePath",$_.__params__ = ["name","crc"],$_)
	,FUtf8: {_hx_name:"FUtf8",_hx_index:2,__enum__:"haxe.zip.ExtraField",toString:$estr}
};
haxe_zip_ExtraField.__constructs__ = [haxe_zip_ExtraField.FUnknown,haxe_zip_ExtraField.FInfoZipUnicodePath,haxe_zip_ExtraField.FUtf8];
var haxe_zip_Huffman = $hxEnums["haxe.zip.Huffman"] = { __ename__:true,__constructs__:null
	,Found: ($_=function(i) { return {_hx_index:0,i:i,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="Found",$_.__params__ = ["i"],$_)
	,NeedBit: ($_=function(left,right) { return {_hx_index:1,left:left,right:right,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="NeedBit",$_.__params__ = ["left","right"],$_)
	,NeedBits: ($_=function(n,table) { return {_hx_index:2,n:n,table:table,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="NeedBits",$_.__params__ = ["n","table"],$_)
};
haxe_zip_Huffman.__constructs__ = [haxe_zip_Huffman.Found,haxe_zip_Huffman.NeedBit,haxe_zip_Huffman.NeedBits];
var haxe_zip_HuffTools = function() {
};
$hxClasses["haxe.zip.HuffTools"] = haxe_zip_HuffTools;
haxe_zip_HuffTools.__name__ = true;
haxe_zip_HuffTools.prototype = {
	treeDepth: function(t) {
		switch(t._hx_index) {
		case 0:
			var _g = t.i;
			return 0;
		case 1:
			var a = t.left;
			var b = t.right;
			var da = this.treeDepth(a);
			var db = this.treeDepth(b);
			return 1 + (da < db ? da : db);
		case 2:
			var _g = t.n;
			var _g = t.table;
			throw haxe_Exception.thrown("assert");
		}
	}
	,treeCompress: function(t) {
		var d = this.treeDepth(t);
		if(d == 0) {
			return t;
		}
		if(d == 1) {
			if(t._hx_index == 1) {
				var a = t.left;
				var b = t.right;
				return haxe_zip_Huffman.NeedBit(this.treeCompress(a),this.treeCompress(b));
			} else {
				throw haxe_Exception.thrown("assert");
			}
		}
		var size = 1 << d;
		var table = [];
		var _g = 0;
		var _g1 = size;
		while(_g < _g1) {
			var i = _g++;
			table.push(haxe_zip_Huffman.Found(-1));
		}
		this.treeWalk(table,0,0,d,t);
		return haxe_zip_Huffman.NeedBits(d,table);
	}
	,treeWalk: function(table,p,cd,d,t) {
		if(t._hx_index == 1) {
			var a = t.left;
			var b = t.right;
			if(d > 0) {
				this.treeWalk(table,p,cd + 1,d - 1,a);
				this.treeWalk(table,p | 1 << cd,cd + 1,d - 1,b);
			} else {
				table[p] = this.treeCompress(t);
			}
		} else {
			table[p] = this.treeCompress(t);
		}
	}
	,treeMake: function(bits,maxbits,v,len) {
		if(len > maxbits) {
			throw haxe_Exception.thrown("Invalid huffman");
		}
		var idx = v << 5 | len;
		if(bits.h.hasOwnProperty(idx)) {
			return haxe_zip_Huffman.Found(bits.h[idx]);
		}
		v <<= 1;
		++len;
		return haxe_zip_Huffman.NeedBit(this.treeMake(bits,maxbits,v,len),this.treeMake(bits,maxbits,v | 1,len));
	}
	,make: function(lengths,pos,nlengths,maxbits) {
		if(nlengths == 1) {
			return haxe_zip_Huffman.NeedBit(haxe_zip_Huffman.Found(0),haxe_zip_Huffman.Found(0));
		}
		var counts = [];
		var tmp = [];
		if(maxbits > 32) {
			throw haxe_Exception.thrown("Invalid huffman");
		}
		var _g = 0;
		var _g1 = maxbits;
		while(_g < _g1) {
			var i = _g++;
			counts.push(0);
			tmp.push(0);
		}
		var _g = 0;
		var _g1 = nlengths;
		while(_g < _g1) {
			var i = _g++;
			var p = lengths[i + pos];
			if(p >= maxbits) {
				throw haxe_Exception.thrown("Invalid huffman");
			}
			counts[p]++;
		}
		var code = 0;
		var _g = 1;
		var _g1 = maxbits - 1;
		while(_g < _g1) {
			var i = _g++;
			code = code + counts[i] << 1;
			tmp[i] = code;
		}
		var bits = new haxe_ds_IntMap();
		var _g = 0;
		var _g1 = nlengths;
		while(_g < _g1) {
			var i = _g++;
			var l = lengths[i + pos];
			if(l != 0) {
				var n = tmp[l - 1];
				tmp[l - 1] = n + 1;
				bits.h[n << 5 | l] = i;
			}
		}
		return this.treeCompress(haxe_zip_Huffman.NeedBit(this.treeMake(bits,maxbits,0,1),this.treeMake(bits,maxbits,1,1)));
	}
	,__class__: haxe_zip_HuffTools
};
var haxe_zip__$InflateImpl_Window = function(hasCrc) {
	this.buffer = new haxe_io_Bytes(new ArrayBuffer(65536));
	this.pos = 0;
	if(hasCrc) {
		this.crc = new haxe_crypto_Adler32();
	}
};
$hxClasses["haxe.zip._InflateImpl.Window"] = haxe_zip__$InflateImpl_Window;
haxe_zip__$InflateImpl_Window.__name__ = true;
haxe_zip__$InflateImpl_Window.prototype = {
	slide: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,32768);
		}
		var b = new haxe_io_Bytes(new ArrayBuffer(65536));
		this.pos -= 32768;
		b.blit(0,this.buffer,32768,this.pos);
		this.buffer = b;
	}
	,addBytes: function(b,p,len) {
		if(this.pos + len > 65536) {
			this.slide();
		}
		this.buffer.blit(this.pos,b,p,len);
		this.pos += len;
	}
	,addByte: function(c) {
		if(this.pos == 65536) {
			this.slide();
		}
		this.buffer.b[this.pos] = c & 255;
		this.pos++;
	}
	,getLastChar: function() {
		return this.buffer.b[this.pos - 1];
	}
	,available: function() {
		return this.pos;
	}
	,checksum: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,this.pos);
		}
		return this.crc;
	}
	,__class__: haxe_zip__$InflateImpl_Window
};
var haxe_zip__$InflateImpl_State = $hxEnums["haxe.zip._InflateImpl.State"] = { __ename__:true,__constructs__:null
	,Head: {_hx_name:"Head",_hx_index:0,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Block: {_hx_name:"Block",_hx_index:1,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,CData: {_hx_name:"CData",_hx_index:2,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Flat: {_hx_name:"Flat",_hx_index:3,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Crc: {_hx_name:"Crc",_hx_index:4,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Dist: {_hx_name:"Dist",_hx_index:5,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,DistOne: {_hx_name:"DistOne",_hx_index:6,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Done: {_hx_name:"Done",_hx_index:7,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
};
haxe_zip__$InflateImpl_State.__constructs__ = [haxe_zip__$InflateImpl_State.Head,haxe_zip__$InflateImpl_State.Block,haxe_zip__$InflateImpl_State.CData,haxe_zip__$InflateImpl_State.Flat,haxe_zip__$InflateImpl_State.Crc,haxe_zip__$InflateImpl_State.Dist,haxe_zip__$InflateImpl_State.DistOne,haxe_zip__$InflateImpl_State.Done];
var haxe_zip_InflateImpl = function(i,header,crc) {
	if(crc == null) {
		crc = true;
	}
	if(header == null) {
		header = true;
	}
	this.isFinal = false;
	this.htools = new haxe_zip_HuffTools();
	this.huffman = this.buildFixedHuffman();
	this.huffdist = null;
	this.len = 0;
	this.dist = 0;
	this.state = header ? haxe_zip__$InflateImpl_State.Head : haxe_zip__$InflateImpl_State.Block;
	this.input = i;
	this.bits = 0;
	this.nbits = 0;
	this.needed = 0;
	this.output = null;
	this.outpos = 0;
	this.lengths = [];
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.window = new haxe_zip__$InflateImpl_Window(crc);
};
$hxClasses["haxe.zip.InflateImpl"] = haxe_zip_InflateImpl;
haxe_zip_InflateImpl.__name__ = true;
haxe_zip_InflateImpl.prototype = {
	buildFixedHuffman: function() {
		if(haxe_zip_InflateImpl.FIXED_HUFFMAN != null) {
			return haxe_zip_InflateImpl.FIXED_HUFFMAN;
		}
		var a = [];
		var _g = 0;
		while(_g < 288) {
			var n = _g++;
			a.push(n <= 143 ? 8 : n <= 255 ? 9 : n <= 279 ? 7 : 8);
		}
		haxe_zip_InflateImpl.FIXED_HUFFMAN = this.htools.make(a,0,288,10);
		return haxe_zip_InflateImpl.FIXED_HUFFMAN;
	}
	,readBytes: function(b,pos,len) {
		this.needed = len;
		this.outpos = pos;
		this.output = b;
		if(len > 0) {
			while(this.inflateLoop()) {
			}
		}
		return len - this.needed;
	}
	,getBits: function(n) {
		while(this.nbits < n) {
			this.bits |= this.input.readByte() << this.nbits;
			this.nbits += 8;
		}
		var b = this.bits & (1 << n) - 1;
		this.nbits -= n;
		this.bits >>= n;
		return b;
	}
	,getBit: function() {
		if(this.nbits == 0) {
			this.nbits = 8;
			this.bits = this.input.readByte();
		}
		var b = (this.bits & 1) == 1;
		this.nbits--;
		this.bits >>= 1;
		return b;
	}
	,getRevBits: function(n) {
		if(n == 0) {
			return 0;
		} else if(this.getBit()) {
			return 1 << n - 1 | this.getRevBits(n - 1);
		} else {
			return this.getRevBits(n - 1);
		}
	}
	,resetBits: function() {
		this.bits = 0;
		this.nbits = 0;
	}
	,addBytes: function(b,p,len) {
		this.window.addBytes(b,p,len);
		this.output.blit(this.outpos,b,p,len);
		this.needed -= len;
		this.outpos += len;
	}
	,addByte: function(b) {
		this.window.addByte(b);
		this.output.b[this.outpos] = b & 255;
		this.needed--;
		this.outpos++;
	}
	,addDistOne: function(n) {
		var c = this.window.getLastChar();
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			this.addByte(c);
		}
	}
	,addDist: function(d,len) {
		this.addBytes(this.window.buffer,this.window.pos - d,len);
	}
	,applyHuffman: function(h) {
		switch(h._hx_index) {
		case 0:
			var n = h.i;
			return n;
		case 1:
			var a = h.left;
			var b = h.right;
			return this.applyHuffman(this.getBit() ? b : a);
		case 2:
			var n = h.n;
			var tbl = h.table;
			return this.applyHuffman(tbl[this.getBits(n)]);
		}
	}
	,inflateLengths: function(a,max) {
		var i = 0;
		var prev = 0;
		while(i < max) {
			var n = this.applyHuffman(this.huffman);
			switch(n) {
			case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:
				prev = n;
				a[i] = n;
				++i;
				break;
			case 16:
				var end = i + 3 + this.getBits(2);
				if(end > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				while(i < end) {
					a[i] = prev;
					++i;
				}
				break;
			case 17:
				i += 3 + this.getBits(3);
				if(i > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				break;
			case 18:
				i += 11 + this.getBits(7);
				if(i > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid data");
			}
		}
	}
	,inflateLoop: function() {
		switch(this.state._hx_index) {
		case 0:
			var cmf = this.input.readByte();
			var cm = cmf & 15;
			var cinfo = cmf >> 4;
			if(cm != 8) {
				throw haxe_Exception.thrown("Invalid data");
			}
			var flg = this.input.readByte();
			var fdict = (flg & 32) != 0;
			if(((cmf << 8) + flg) % 31 != 0) {
				throw haxe_Exception.thrown("Invalid data");
			}
			if(fdict) {
				throw haxe_Exception.thrown("Unsupported dictionary");
			}
			this.state = haxe_zip__$InflateImpl_State.Block;
			return true;
		case 1:
			this.isFinal = this.getBit();
			switch(this.getBits(2)) {
			case 0:
				this.len = this.input.readUInt16();
				var nlen = this.input.readUInt16();
				if(nlen != 65535 - this.len) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.state = haxe_zip__$InflateImpl_State.Flat;
				var r = this.inflateLoop();
				this.resetBits();
				return r;
			case 1:
				this.huffman = this.buildFixedHuffman();
				this.huffdist = null;
				this.state = haxe_zip__$InflateImpl_State.CData;
				return true;
			case 2:
				var hlit = this.getBits(5) + 257;
				var hdist = this.getBits(5) + 1;
				var hclen = this.getBits(4) + 4;
				var _g = 0;
				var _g1 = hclen;
				while(_g < _g1) {
					var i = _g++;
					this.lengths[haxe_zip_InflateImpl.CODE_LENGTHS_POS[i]] = this.getBits(3);
				}
				var _g = hclen;
				var _g1 = 19;
				while(_g < _g1) {
					var i = _g++;
					this.lengths[haxe_zip_InflateImpl.CODE_LENGTHS_POS[i]] = 0;
				}
				this.huffman = this.htools.make(this.lengths,0,19,8);
				var lengths = [];
				var _g = 0;
				var _g1 = hlit + hdist;
				while(_g < _g1) {
					var i = _g++;
					lengths.push(0);
				}
				this.inflateLengths(lengths,hlit + hdist);
				this.huffdist = this.htools.make(lengths,hlit,hdist,16);
				this.huffman = this.htools.make(lengths,0,hlit,16);
				this.state = haxe_zip__$InflateImpl_State.CData;
				return true;
			default:
				throw haxe_Exception.thrown("Invalid data");
			}
			break;
		case 2:
			var n = this.applyHuffman(this.huffman);
			if(n < 256) {
				this.addByte(n);
				return this.needed > 0;
			} else if(n == 256) {
				this.state = this.isFinal ? haxe_zip__$InflateImpl_State.Crc : haxe_zip__$InflateImpl_State.Block;
				return true;
			} else {
				n -= 257;
				var extra_bits = haxe_zip_InflateImpl.LEN_EXTRA_BITS_TBL[n];
				if(extra_bits == -1) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.len = haxe_zip_InflateImpl.LEN_BASE_VAL_TBL[n] + this.getBits(extra_bits);
				var dist_code = this.huffdist == null ? this.getRevBits(5) : this.applyHuffman(this.huffdist);
				extra_bits = haxe_zip_InflateImpl.DIST_EXTRA_BITS_TBL[dist_code];
				if(extra_bits == -1) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.dist = haxe_zip_InflateImpl.DIST_BASE_VAL_TBL[dist_code] + this.getBits(extra_bits);
				if(this.dist > this.window.available()) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.state = this.dist == 1 ? haxe_zip__$InflateImpl_State.DistOne : haxe_zip__$InflateImpl_State.Dist;
				return true;
			}
			break;
		case 3:
			var rlen = this.len < this.needed ? this.len : this.needed;
			var bytes = this.input.read(rlen);
			this.len -= rlen;
			this.addBytes(bytes,0,rlen);
			if(this.len == 0) {
				this.state = this.isFinal ? haxe_zip__$InflateImpl_State.Crc : haxe_zip__$InflateImpl_State.Block;
			}
			return this.needed > 0;
		case 4:
			var calc = this.window.checksum();
			if(calc == null) {
				this.state = haxe_zip__$InflateImpl_State.Done;
				return true;
			}
			var crc = haxe_crypto_Adler32.read(this.input);
			if(!calc.equals(crc)) {
				throw haxe_Exception.thrown("Invalid CRC");
			}
			this.state = haxe_zip__$InflateImpl_State.Done;
			return true;
		case 5:
			while(this.len > 0 && this.needed > 0) {
				var rdist = this.len < this.dist ? this.len : this.dist;
				var rlen = this.needed < rdist ? this.needed : rdist;
				this.addDist(this.dist,rlen);
				this.len -= rlen;
			}
			if(this.len == 0) {
				this.state = haxe_zip__$InflateImpl_State.CData;
			}
			return this.needed > 0;
		case 6:
			var rlen = this.len < this.needed ? this.len : this.needed;
			this.addDistOne(rlen);
			this.len -= rlen;
			if(this.len == 0) {
				this.state = haxe_zip__$InflateImpl_State.CData;
			}
			return this.needed > 0;
		case 7:
			return false;
		}
	}
	,__class__: haxe_zip_InflateImpl
};
var haxe_zip_Reader = function(i) {
	this.i = i;
};
$hxClasses["haxe.zip.Reader"] = haxe_zip_Reader;
haxe_zip_Reader.__name__ = true;
haxe_zip_Reader.readZip = function(i) {
	var r = new haxe_zip_Reader(i);
	return r.read();
};
haxe_zip_Reader.prototype = {
	readZipDate: function() {
		var t = this.i.readUInt16();
		var hour = t >> 11 & 31;
		var min = t >> 5 & 63;
		var sec = t & 31;
		var d = this.i.readUInt16();
		var year = d >> 9;
		var month = d >> 5 & 15;
		var day = d & 31;
		return new Date(year + 1980,month - 1,day,hour,min,sec << 1);
	}
	,readExtraFields: function(length) {
		var fields = new haxe_ds_List();
		while(length > 0) {
			if(length < 4) {
				throw haxe_Exception.thrown("Invalid extra fields data");
			}
			var tag = this.i.readUInt16();
			var len = this.i.readUInt16();
			if(length < len) {
				throw haxe_Exception.thrown("Invalid extra fields data");
			}
			if(tag == 28789) {
				var version = this.i.readByte();
				if(version != 1) {
					var data = new haxe_io_BytesBuffer();
					data.addByte(version);
					data.add(this.i.read(len - 1));
					fields.add(haxe_zip_ExtraField.FUnknown(tag,data.getBytes()));
				} else {
					var crc = this.i.readInt32();
					var name = this.i.read(len - 5).toString();
					fields.add(haxe_zip_ExtraField.FInfoZipUnicodePath(name,crc));
				}
			} else {
				fields.add(haxe_zip_ExtraField.FUnknown(tag,this.i.read(len)));
			}
			length -= 4 + len;
		}
		return fields;
	}
	,readEntryHeader: function() {
		var i = this.i;
		var h = i.readInt32();
		if(h == 33639248 || h == 101010256) {
			return null;
		}
		if(h != 67324752) {
			throw haxe_Exception.thrown("Invalid Zip Data");
		}
		var version = i.readUInt16();
		var flags = i.readUInt16();
		var utf8 = (flags & 2048) != 0;
		if((flags & 63473) != 0) {
			throw haxe_Exception.thrown("Unsupported flags " + flags);
		}
		var compression = i.readUInt16();
		var compressed = compression != 0;
		if(compressed && compression != 8) {
			throw haxe_Exception.thrown("Unsupported compression " + compression);
		}
		var mtime = this.readZipDate();
		var crc32 = i.readInt32();
		var csize = i.readInt32();
		var usize = i.readInt32();
		var fnamelen = i.readInt16();
		var elen = i.readInt16();
		var fname = i.readString(fnamelen);
		var fields = this.readExtraFields(elen);
		if(utf8) {
			fields.push(haxe_zip_ExtraField.FUtf8);
		}
		var data = null;
		if((flags & 8) != 0) {
			crc32 = null;
		}
		return { fileName : fname, fileSize : usize, fileTime : mtime, compressed : compressed, dataSize : csize, data : data, crc32 : crc32, extraFields : fields};
	}
	,read: function() {
		var l = new haxe_ds_List();
		var buf = null;
		var tmp = null;
		while(true) {
			var e = this.readEntryHeader();
			if(e == null) {
				break;
			}
			if(e.crc32 == null) {
				if(e.compressed) {
					var bufSize = 65536;
					if(tmp == null) {
						tmp = new haxe_io_Bytes(new ArrayBuffer(bufSize));
					}
					var out = new haxe_io_BytesBuffer();
					var z = new haxe_zip_InflateImpl(this.i,false,false);
					while(true) {
						var n = z.readBytes(tmp,0,bufSize);
						out.addBytes(tmp,0,n);
						if(n < bufSize) {
							break;
						}
					}
					e.data = out.getBytes();
				} else {
					e.data = this.i.read(e.dataSize);
				}
				e.crc32 = this.i.readInt32();
				if(e.crc32 == 134695760) {
					e.crc32 = this.i.readInt32();
				}
				e.dataSize = this.i.readInt32();
				e.fileSize = this.i.readInt32();
				e.dataSize = e.fileSize;
				e.compressed = false;
			} else {
				e.data = this.i.read(e.dataSize);
			}
			l.add(e);
		}
		return l;
	}
	,__class__: haxe_zip_Reader
};
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var lime__$internal_backend_html5_GameDeviceData = function() {
	this.connected = true;
	this.buttons = [];
	this.axes = [];
};
$hxClasses["lime._internal.backend.html5.GameDeviceData"] = lime__$internal_backend_html5_GameDeviceData;
lime__$internal_backend_html5_GameDeviceData.__name__ = true;
lime__$internal_backend_html5_GameDeviceData.prototype = {
	__class__: lime__$internal_backend_html5_GameDeviceData
};
var lime__$internal_backend_html5_HTML5HTTPRequest = function() {
	this.validStatus0 = new EReg("Tizen","gi").match(window.navigator.userAgent);
};
$hxClasses["lime._internal.backend.html5.HTML5HTTPRequest"] = lime__$internal_backend_html5_HTML5HTTPRequest;
lime__$internal_backend_html5_HTML5HTTPRequest.__name__ = true;
lime__$internal_backend_html5_HTML5HTTPRequest.loadImage = function(uri) {
	var promise = new lime_app_Promise();
	if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
		lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
		lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage(uri,promise,0);
	} else {
		lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : null, uri : uri, promise : promise, type : "IMAGE", options : 0});
	}
	return promise.future;
};
lime__$internal_backend_html5_HTML5HTTPRequest.loadImageFromBytes = function(bytes,type) {
	var uri = URL.createObjectURL(new Blob([bytes.b.bufferValue],{ type : type}));
	if(uri != null) {
		var promise = new lime_app_Promise();
		if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
			lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage(uri,promise,1);
		} else {
			lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : null, uri : uri, promise : promise, type : "IMAGE", options : 1});
		}
		return promise.future;
	} else {
		return lime__$internal_backend_html5_HTML5HTTPRequest.loadImage("data:" + type + ";base64," + lime__$internal_format_Base64.encode(bytes));
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.processQueue = function() {
	if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit && lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.length > 0) {
		lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
		var queueItem = lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.pop();
		switch(queueItem.type) {
		case "BINARY":
			queueItem.instance.__loadData(queueItem.uri,queueItem.promise);
			break;
		case "IMAGE":
			lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage(queueItem.uri,queueItem.promise,queueItem.options);
			break;
		case "TEXT":
			queueItem.instance.__loadText(queueItem.uri,queueItem.promise);
			break;
		default:
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
		}
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__fixHostname = function(hostname) {
	if(hostname == null) {
		return "";
	} else {
		return hostname;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__fixPort = function(port,protocol) {
	if(port == null || port == "") {
		switch(protocol) {
		case "ftp:":
			return "21";
		case "gopher:":
			return "70";
		case "http:":
			return "80";
		case "https:":
			return "443";
		case "ws:":
			return "80";
		case "wss:":
			return "443";
		default:
			return "";
		}
	}
	return port;
};
lime__$internal_backend_html5_HTML5HTTPRequest.__fixProtocol = function(protocol) {
	if(protocol == null || protocol == "") {
		return "http:";
	} else {
		return protocol;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__isInMemoryURI = function(uri) {
	if(!StringTools.startsWith(uri,"data:")) {
		return StringTools.startsWith(uri,"blob:");
	} else {
		return true;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__isSameOrigin = function(path) {
	if(path == null || path == "") {
		return true;
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.__isInMemoryURI(path)) {
		return true;
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.originElement == null) {
		lime__$internal_backend_html5_HTML5HTTPRequest.originElement = window.document.createElement("a");
		lime__$internal_backend_html5_HTML5HTTPRequest.originHostname = lime__$internal_backend_html5_HTML5HTTPRequest.__fixHostname($global.location.hostname);
		lime__$internal_backend_html5_HTML5HTTPRequest.originProtocol = lime__$internal_backend_html5_HTML5HTTPRequest.__fixProtocol($global.location.protocol);
		lime__$internal_backend_html5_HTML5HTTPRequest.originPort = lime__$internal_backend_html5_HTML5HTTPRequest.__fixPort($global.location.port,lime__$internal_backend_html5_HTML5HTTPRequest.originProtocol);
	}
	var a = lime__$internal_backend_html5_HTML5HTTPRequest.originElement;
	a.href = path;
	if(a.hostname == "") {
		a.href = a.href;
	}
	var hostname = lime__$internal_backend_html5_HTML5HTTPRequest.__fixHostname(a.hostname);
	var protocol = lime__$internal_backend_html5_HTML5HTTPRequest.__fixProtocol(a.protocol);
	var port = lime__$internal_backend_html5_HTML5HTTPRequest.__fixPort(a.port,protocol);
	var sameHost = hostname == "" || hostname == lime__$internal_backend_html5_HTML5HTTPRequest.originHostname;
	var samePort = port == "" || port == lime__$internal_backend_html5_HTML5HTTPRequest.originPort;
	if(protocol != "file:" && sameHost) {
		return samePort;
	} else {
		return false;
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__loadImage = function(uri,promise,options) {
	var image = new Image();
	if(!lime__$internal_backend_html5_HTML5HTTPRequest.__isSameOrigin(uri)) {
		image.crossOrigin = "Anonymous";
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.supportsImageProgress == null) {
		lime__$internal_backend_html5_HTML5HTTPRequest.supportsImageProgress = 'onprogress' in image;
	}
	if(lime__$internal_backend_html5_HTML5HTTPRequest.supportsImageProgress || lime__$internal_backend_html5_HTML5HTTPRequest.__isInMemoryURI(uri)) {
		image.addEventListener("load",function(event) {
			lime__$internal_backend_html5_HTML5HTTPRequest.__revokeBlobURI(uri,options);
			var buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
			buffer.__srcImage = image;
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
			promise.complete(new lime_graphics_Image(buffer));
		},false);
		image.addEventListener("progress",function(event) {
			promise.progress(event.loaded,event.total);
		},false);
		image.addEventListener("error",function(event) {
			lime__$internal_backend_html5_HTML5HTTPRequest.__revokeBlobURI(uri,options);
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
			promise.error(event.detail);
		},false);
		image.src = uri;
	} else {
		var request = new XMLHttpRequest();
		request.onload = function(_) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
			var img = new lime_graphics_Image();
			img.__fromBytes(haxe_io_Bytes.ofData(request.response),function(img) {
				promise.complete(img);
			});
		};
		request.onerror = function(event) {
			promise.error(event.message);
		};
		request.onprogress = function(event) {
			if(event.lengthComputable) {
				promise.progress(event.loaded,event.total);
			}
		};
		request.open("GET",uri,true);
		request.responseType = "arraybuffer";
		request.overrideMimeType("text/plain; charset=x-user-defined");
		request.send(null);
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.__revokeBlobURI = function(uri,options) {
	if((options & 1) != 0) {
		URL.revokeObjectURL(uri);
	}
};
lime__$internal_backend_html5_HTML5HTTPRequest.prototype = {
	init: function(parent) {
		this.parent = parent;
	}
	,load: function(uri,progress,readyStateChange) {
		this.request = new XMLHttpRequest();
		if(this.parent.method == "POST") {
			this.request.upload.addEventListener("progress",progress,false);
		} else {
			this.request.addEventListener("progress",progress,false);
		}
		this.request.onreadystatechange = readyStateChange;
		var query = "";
		if(this.parent.data == null) {
			var h = this.parent.formData.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(query.length > 0) {
					query += "&";
				}
				var value = this.parent.formData.h[key];
				if(key.indexOf("[]") > -1 && ((value) instanceof Array)) {
					var _g = [];
					var x = $getIterator(value);
					while(x.hasNext()) {
						var x1 = x.next();
						_g.push(encodeURIComponent(x1));
					}
					var arrayValue = _g.join("&amp;" + key + "=");
					query += encodeURIComponent(key) + "=" + arrayValue;
				} else {
					var query1 = encodeURIComponent(key) + "=";
					var s = Std.string(value);
					query += query1 + encodeURIComponent(s);
				}
			}
			if(this.parent.method == "GET" && query != "") {
				if(uri.indexOf("?") > -1) {
					uri += "&" + query;
				} else {
					uri += "?" + query;
				}
				query = "";
			}
		}
		this.request.open(Std.string(this.parent.method),uri,true);
		if(this.parent.timeout > 0) {
			this.request.timeout = this.parent.timeout;
		}
		if(this.binary) {
			this.request.responseType = "arraybuffer";
		}
		var contentType = null;
		var _g = 0;
		var _g1 = this.parent.headers;
		while(_g < _g1.length) {
			var header = _g1[_g];
			++_g;
			if(header.name == "Content-Type") {
				contentType = header.value;
			} else {
				this.request.setRequestHeader(header.name,header.value);
			}
		}
		if(this.parent.contentType != null) {
			contentType = this.parent.contentType;
		}
		if(contentType == null) {
			if(this.parent.data != null) {
				contentType = "application/octet-stream";
			} else if(query != "") {
				contentType = "application/x-www-form-urlencoded";
			}
		}
		if(contentType != null) {
			this.request.setRequestHeader("Content-Type",contentType);
		}
		if(this.parent.withCredentials) {
			this.request.withCredentials = true;
		}
		if(this.parent.data != null) {
			this.request.send(this.parent.data.b.bufferValue);
		} else {
			this.request.send(query);
		}
	}
	,loadData: function(uri) {
		var promise = new lime_app_Promise();
		if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
			this.__loadData(uri,promise);
		} else {
			lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : this, uri : uri, promise : promise, type : "BINARY", options : 0});
		}
		return promise.future;
	}
	,loadText: function(uri) {
		var promise = new lime_app_Promise();
		if(lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests < lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit) {
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests++;
			this.__loadText(uri,promise);
		} else {
			lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue.add({ instance : this, uri : uri, promise : promise, type : "TEXT", options : 0});
		}
		return promise.future;
	}
	,processResponse: function() {
		if(this.parent.enableResponseHeaders) {
			this.parent.responseHeaders = [];
			var name;
			var value;
			var _g = 0;
			var _g1 = this.request.getAllResponseHeaders().split("\n");
			while(_g < _g1.length) {
				var line = _g1[_g];
				++_g;
				name = StringTools.trim(HxOverrides.substr(line,0,line.indexOf(":")));
				value = StringTools.trim(HxOverrides.substr(line,line.indexOf(":") + 1,null));
				if(name != "") {
					this.parent.responseHeaders.push(new lime_net_HTTPRequestHeader(name,value));
				}
			}
		}
		this.parent.responseStatus = this.request.status;
	}
	,__loadData: function(uri,promise) {
		var _gthis = this;
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event) {
			if(_gthis.request.readyState != 4) {
				return;
			}
			if(_gthis.request.status != null && (_gthis.request.status >= 200 && _gthis.request.status < 400 || _gthis.validStatus0 && _gthis.request.status == 0)) {
				var bytes = null;
				if(_gthis.request.responseType == "") {
					if(_gthis.request.responseText != null) {
						bytes = haxe_io_Bytes.ofString(_gthis.request.responseText);
					}
				} else if(_gthis.request.response != null) {
					bytes = haxe_io_Bytes.ofData(_gthis.request.response);
				}
				_gthis.processResponse();
				promise.complete(bytes);
			} else {
				_gthis.processResponse();
				promise.error(_gthis.request.status);
			}
			_gthis.request = null;
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
		};
		this.binary = true;
		this.load(uri,progress,readyStateChange);
	}
	,__loadText: function(uri,promise) {
		var _gthis = this;
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event) {
			if(_gthis.request.readyState != 4) {
				return;
			}
			if(_gthis.request.status != null && (_gthis.request.status >= 200 && _gthis.request.status <= 400 || _gthis.validStatus0 && _gthis.request.status == 0)) {
				_gthis.processResponse();
				promise.complete(_gthis.request.responseText);
			} else {
				_gthis.processResponse();
				promise.error(_gthis.request.status);
			}
			_gthis.request = null;
			lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests--;
			lime__$internal_backend_html5_HTML5HTTPRequest.processQueue();
		};
		this.binary = false;
		this.load(uri,progress,readyStateChange);
	}
	,__class__: lime__$internal_backend_html5_HTML5HTTPRequest
};
var lime__$internal_backend_html5_HTML5Window = function(parent) {
	this.unusedTouchesPool = new haxe_ds_List();
	this.scale = 1.0;
	this.currentTouches = new haxe_ds_IntMap();
	this.parent = parent;
	this.cursor = lime_ui_MouseCursor.DEFAULT;
	this.cacheMouseX = 0;
	this.cacheMouseY = 0;
	var attributes = parent.__attributes;
	if(!Object.prototype.hasOwnProperty.call(attributes,"context")) {
		attributes.context = { };
	}
	this.renderType = attributes.context.type;
	if(Object.prototype.hasOwnProperty.call(attributes,"element")) {
		parent.element = attributes.element;
	}
	var element = parent.element;
	if(Object.prototype.hasOwnProperty.call(attributes,"allowHighDPI") && attributes.allowHighDPI && this.renderType != "dom") {
		this.scale = window.devicePixelRatio;
	}
	parent.__scale = this.scale;
	this.setWidth = Object.prototype.hasOwnProperty.call(attributes,"width") ? attributes.width : 0;
	this.setHeight = Object.prototype.hasOwnProperty.call(attributes,"height") ? attributes.height : 0;
	parent.__width = this.setWidth;
	parent.__height = this.setHeight;
	parent.id = lime__$internal_backend_html5_HTML5Window.windowID++;
	if(((element) instanceof HTMLCanvasElement)) {
		this.canvas = element;
	} else if(this.renderType == "dom") {
		this.div = window.document.createElement("div");
	} else {
		this.canvas = window.document.createElement("canvas");
	}
	if(this.canvas != null) {
		var style = this.canvas.style;
		style.setProperty("-webkit-transform","translateZ(0)",null);
		style.setProperty("transform","translateZ(0)",null);
	} else if(this.div != null) {
		var style = this.div.style;
		style.setProperty("-webkit-transform","translate3D(0,0,0)",null);
		style.setProperty("transform","translate3D(0,0,0)",null);
		style.position = "relative";
		style.overflow = "hidden";
		style.setProperty("-webkit-user-select","none",null);
		style.setProperty("-moz-user-select","none",null);
		style.setProperty("-ms-user-select","none",null);
		style.setProperty("-o-user-select","none",null);
	}
	if(parent.__width == 0 && parent.__height == 0) {
		if(element != null) {
			parent.__width = element.clientWidth;
			parent.__height = element.clientHeight;
		} else {
			parent.__width = window.innerWidth;
			parent.__height = window.innerHeight;
		}
		this.cacheElementWidth = parent.__width;
		this.cacheElementHeight = parent.__height;
		this.resizeElement = true;
	}
	if(this.canvas != null) {
		this.canvas.width = Math.round(parent.__width * this.scale);
		this.canvas.height = Math.round(parent.__height * this.scale);
		this.canvas.style.width = parent.__width + "px";
		this.canvas.style.height = parent.__height + "px";
	} else {
		this.div.style.width = parent.__width + "px";
		this.div.style.height = parent.__height + "px";
	}
	if(Object.prototype.hasOwnProperty.call(attributes,"resizable") && attributes.resizable || !Object.prototype.hasOwnProperty.call(attributes,"width") && this.setWidth == 0 && this.setHeight == 0) {
		parent.__resizable = true;
	}
	this.updateSize();
	if(element != null) {
		if(this.canvas != null) {
			if(element != this.canvas) {
				element.appendChild(this.canvas);
			}
		} else {
			element.appendChild(this.div);
		}
		var events = ["mousedown","mouseenter","mouseleave","mousemove","mouseup","wheel"];
		var _g = 0;
		while(_g < events.length) {
			var event = events[_g];
			++_g;
			element.addEventListener(event,$bind(this,this.handleMouseEvent),true);
		}
		element.addEventListener("contextmenu",$bind(this,this.handleContextMenuEvent),true);
		element.addEventListener("dragstart",$bind(this,this.handleDragEvent),true);
		element.addEventListener("dragover",$bind(this,this.handleDragEvent),true);
		element.addEventListener("drop",$bind(this,this.handleDragEvent),true);
		element.addEventListener("touchstart",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchmove",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchend",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchcancel",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("gamepadconnected",$bind(this,this.handleGamepadEvent),true);
		element.addEventListener("gamepaddisconnected",$bind(this,this.handleGamepadEvent),true);
	}
	this.createContext();
	if(parent.context.type == "webgl") {
		this.canvas.addEventListener("webglcontextlost",$bind(this,this.handleContextEvent),false);
		this.canvas.addEventListener("webglcontextrestored",$bind(this,this.handleContextEvent),false);
	}
};
$hxClasses["lime._internal.backend.html5.HTML5Window"] = lime__$internal_backend_html5_HTML5Window;
lime__$internal_backend_html5_HTML5Window.__name__ = true;
lime__$internal_backend_html5_HTML5Window.prototype = {
	close: function() {
		this.parent.application.__removeWindow(this.parent);
	}
	,createContext: function() {
		var context = new lime_graphics_RenderContext();
		var contextAttributes = this.parent.__attributes.context;
		context.window = this.parent;
		context.attributes = contextAttributes;
		if(this.div != null) {
			context.dom = this.div;
			context.type = "dom";
			context.version = "";
		} else if(this.canvas != null) {
			var webgl = null;
			var forceCanvas = this.renderType == "canvas";
			var forceWebGL = this.renderType == "opengl" || this.renderType == "opengles" || this.renderType == "webgl";
			var allowWebGL2 = !Object.prototype.hasOwnProperty.call(contextAttributes,"version") || contextAttributes.version != "1";
			var isWebGL2 = false;
			if(forceWebGL || !forceCanvas && (!Object.prototype.hasOwnProperty.call(contextAttributes,"hardware") || contextAttributes.hardware)) {
				var transparentBackground = Object.prototype.hasOwnProperty.call(contextAttributes,"background") && contextAttributes.background == null;
				var colorDepth = Object.prototype.hasOwnProperty.call(contextAttributes,"colorDepth") ? contextAttributes.colorDepth : 16;
				var options = Object.prototype.hasOwnProperty.call(contextAttributes,"antialiasing") && contextAttributes.antialiasing > 0;
				var options1 = Object.prototype.hasOwnProperty.call(contextAttributes,"depth") ? contextAttributes.depth : true;
				var options2 = Object.prototype.hasOwnProperty.call(contextAttributes,"stencil") && contextAttributes.stencil;
				var options3 = { alpha : transparentBackground || colorDepth > 16, antialias : options, depth : options1, premultipliedAlpha : true, stencil : options2, preserveDrawingBuffer : false, failIfMajorPerformanceCaveat : false};
				var glContextType = ["webgl","experimental-webgl"];
				if(allowWebGL2) {
					glContextType.unshift("webgl2");
				}
				var _g = 0;
				while(_g < glContextType.length) {
					var name = glContextType[_g];
					++_g;
					webgl = this.canvas.getContext(name,options3);
					if(webgl != null && name == "webgl2") {
						isWebGL2 = true;
					}
					if(webgl != null) {
						break;
					}
				}
			}
			if(webgl == null) {
				context.canvas2D = this.canvas.getContext("2d");
				context.type = "canvas";
				context.version = "";
			} else {
				context.webgl = lime_graphics_WebGLRenderContext.fromWebGL2RenderContext(webgl);
				if(isWebGL2) {
					context.webgl2 = webgl;
				}
				if(lime_graphics_opengl_GL.context == null) {
					lime_graphics_opengl_GL.context = webgl;
					lime_graphics_opengl_GL.type = "webgl";
					lime_graphics_opengl_GL.version = isWebGL2 ? 2 : 1;
				}
				context.type = "webgl";
				context.version = isWebGL2 ? "2" : "1";
			}
		}
		this.parent.context = context;
	}
	,handleContextEvent: function(event) {
		switch(event.type) {
		case "webglcontextlost":
			if(event.cancelable) {
				event.preventDefault();
			}
			var tmp = lime_graphics_opengl_GL.context != null;
			this.parent.context = null;
			this.parent.onRenderContextLost.dispatch();
			break;
		case "webglcontextrestored":
			this.createContext();
			this.parent.onRenderContextRestored.dispatch(this.parent.context);
			break;
		default:
		}
	}
	,handleContextMenuEvent: function(event) {
		if((this.parent.onMouseUp.canceled || this.parent.onMouseDown.canceled) && event.cancelable) {
			event.preventDefault();
		}
	}
	,handleDragEvent: function(event) {
		switch(event.type) {
		case "dragover":
			event.preventDefault();
			return false;
		case "dragstart":
			if((js_Boot.__cast(event.target , HTMLElement)).nodeName.toLowerCase() == "img" && event.cancelable) {
				event.preventDefault();
				return false;
			}
			break;
		case "drop":
			if(event.dataTransfer != null && event.dataTransfer.files.length > 0) {
				this.parent.onDropFile.dispatch(event.dataTransfer.files);
				event.preventDefault();
				return false;
			}
			break;
		}
		return true;
	}
	,handleGamepadEvent: function(event) {
		switch(event.type) {
		case "gamepadconnected":
			lime_ui_Joystick.__connect(event.gamepad.index);
			if(event.gamepad.mapping == "standard") {
				lime_ui_Gamepad.__connect(event.gamepad.index);
			}
			break;
		case "gamepaddisconnected":
			lime_ui_Joystick.__disconnect(event.gamepad.index);
			lime_ui_Gamepad.__disconnect(event.gamepad.index);
			break;
		default:
		}
	}
	,handleMouseEvent: function(event) {
		var x = 0.0;
		var y = 0.0;
		if(event.type != "wheel") {
			if(this.parent.element != null) {
				if(this.canvas != null) {
					var rect = this.canvas.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				} else if(this.div != null) {
					var rect = this.div.getBoundingClientRect();
					x = event.clientX - rect.left;
					y = event.clientY - rect.top;
				} else {
					var rect = this.parent.element.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				}
			} else {
				x = event.clientX;
				y = event.clientY;
			}
			switch(event.type) {
			case "mousedown":
				if(event.currentTarget == this.parent.element) {
					window.addEventListener("mouseup",$bind(this,this.handleMouseEvent));
				}
				this.parent.onMouseDown.dispatch(x,y,event.button);
				if(this.parent.onMouseDown.canceled && event.cancelable) {
					event.preventDefault();
				}
				break;
			case "mouseenter":
				if(event.target == this.parent.element) {
					this.parent.onEnter.dispatch();
					if(this.parent.onEnter.canceled && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mouseleave":
				if(event.target == this.parent.element) {
					this.parent.onLeave.dispatch();
					if(this.parent.onLeave.canceled && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mousemove":
				if(x != this.cacheMouseX || y != this.cacheMouseY) {
					this.parent.onMouseMove.dispatch(x,y);
					this.parent.onMouseMoveRelative.dispatch(x - this.cacheMouseX,y - this.cacheMouseY);
					if((this.parent.onMouseMove.canceled || this.parent.onMouseMoveRelative.canceled) && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mouseup":
				window.removeEventListener("mouseup",$bind(this,this.handleMouseEvent));
				if(event.currentTarget == this.parent.element) {
					event.stopPropagation();
				}
				this.parent.onMouseUp.dispatch(x,y,event.button);
				if(this.parent.onMouseUp.canceled && event.cancelable) {
					event.preventDefault();
				}
				break;
			default:
			}
			this.cacheMouseX = x;
			this.cacheMouseY = y;
		} else {
			var deltaMode;
			switch(event.deltaMode) {
			case 0:
				deltaMode = lime_ui_MouseWheelMode.PIXELS;
				break;
			case 1:
				deltaMode = lime_ui_MouseWheelMode.LINES;
				break;
			case 2:
				deltaMode = lime_ui_MouseWheelMode.PAGES;
				break;
			default:
				deltaMode = lime_ui_MouseWheelMode.UNKNOWN;
			}
			this.parent.onMouseWheel.dispatch(event.deltaX,-event.deltaY,deltaMode);
			if(this.parent.onMouseWheel.canceled && event.cancelable) {
				event.preventDefault();
			}
		}
	}
	,handleResizeEvent: function(event) {
		this.primaryTouch = null;
		this.updateSize();
	}
	,handleTouchEvent: function(event) {
		if(event.cancelable) {
			event.preventDefault();
		}
		var rect = null;
		if(this.parent.element != null) {
			if(this.canvas != null) {
				rect = this.canvas.getBoundingClientRect();
			} else if(this.div != null) {
				rect = this.div.getBoundingClientRect();
			} else {
				rect = this.parent.element.getBoundingClientRect();
			}
		}
		var windowWidth = this.setWidth;
		var windowHeight = this.setHeight;
		if(windowWidth == 0 || windowHeight == 0) {
			if(rect != null) {
				windowWidth = rect.width;
				windowHeight = rect.height;
			} else {
				windowWidth = 1;
				windowHeight = 1;
			}
		}
		var touch;
		var x;
		var y;
		var cacheX;
		var cacheY;
		var _g = 0;
		var _g1 = event.changedTouches;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			x = 0.0;
			y = 0.0;
			if(rect != null) {
				x = (data.clientX - rect.left) * (windowWidth / rect.width);
				y = (data.clientY - rect.top) * (windowHeight / rect.height);
			} else {
				x = data.clientX;
				y = data.clientY;
			}
			if(event.type == "touchstart") {
				touch = this.unusedTouchesPool.pop();
				if(touch == null) {
					touch = new lime_ui_Touch(x / windowWidth,y / windowHeight,data.identifier,0,0,data.force,this.parent.id);
				} else {
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.id = data.identifier;
					touch.dx = 0;
					touch.dy = 0;
					touch.pressure = data.force;
					touch.device = this.parent.id;
				}
				this.currentTouches.h[data.identifier] = touch;
				lime_ui_Touch.onStart.dispatch(touch);
				if(this.primaryTouch == null) {
					this.primaryTouch = touch;
				}
				if(touch == this.primaryTouch) {
					this.parent.onMouseDown.dispatch(x,y,0);
				}
			} else {
				touch = this.currentTouches.h[data.identifier];
				if(touch != null) {
					cacheX = touch.x;
					cacheY = touch.y;
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.dx = touch.x - cacheX;
					touch.dy = touch.y - cacheY;
					touch.pressure = data.force;
					switch(event.type) {
					case "touchcancel":
						lime_ui_Touch.onCancel.dispatch(touch);
						this.currentTouches.remove(data.identifier);
						this.unusedTouchesPool.add(touch);
						if(touch == this.primaryTouch) {
							this.primaryTouch = null;
						}
						break;
					case "touchend":
						lime_ui_Touch.onEnd.dispatch(touch);
						this.currentTouches.remove(data.identifier);
						this.unusedTouchesPool.add(touch);
						if(touch == this.primaryTouch) {
							this.parent.onMouseUp.dispatch(x,y,0);
							this.primaryTouch = null;
						}
						break;
					case "touchmove":
						lime_ui_Touch.onMove.dispatch(touch);
						if(touch == this.primaryTouch) {
							this.parent.onMouseMove.dispatch(x,y);
						}
						break;
					default:
					}
				}
			}
		}
	}
	,updateSize: function() {
		if(!this.parent.__resizable) {
			return;
		}
		var elementWidth;
		var elementHeight;
		if(this.parent.element != null) {
			elementWidth = this.parent.element.clientWidth;
			elementHeight = this.parent.element.clientHeight;
		} else {
			elementWidth = window.innerWidth;
			elementHeight = window.innerHeight;
		}
		if(elementWidth != this.cacheElementWidth || elementHeight != this.cacheElementHeight) {
			this.cacheElementWidth = elementWidth;
			this.cacheElementHeight = elementHeight;
			var stretch = this.resizeElement || this.setWidth == 0 && this.setHeight == 0;
			if(this.parent.element != null && (this.div == null || this.div != null && stretch)) {
				if(stretch) {
					if(this.parent.__width != elementWidth || this.parent.__height != elementHeight) {
						this.parent.__width = elementWidth;
						this.parent.__height = elementHeight;
						if(this.canvas != null) {
							if(this.parent.element != this.canvas) {
								this.canvas.width = Math.round(elementWidth * this.scale);
								this.canvas.height = Math.round(elementHeight * this.scale);
								this.canvas.style.width = elementWidth + "px";
								this.canvas.style.height = elementHeight + "px";
							}
						} else {
							this.div.style.width = elementWidth + "px";
							this.div.style.height = elementHeight + "px";
						}
						this.parent.onResize.dispatch(elementWidth,elementHeight);
					}
				} else {
					var scaleX = this.setWidth != 0 ? elementWidth / this.setWidth : 1;
					var scaleY = this.setHeight != 0 ? elementHeight / this.setHeight : 1;
					var targetWidth = elementWidth;
					var targetHeight = elementHeight;
					var marginLeft = 0;
					var marginTop = 0;
					if(scaleX < scaleY) {
						targetHeight = Math.floor(this.setHeight * scaleX);
						marginTop = Math.floor((elementHeight - targetHeight) / 2);
					} else {
						targetWidth = Math.floor(this.setWidth * scaleY);
						marginLeft = Math.floor((elementWidth - targetWidth) / 2);
					}
					if(this.canvas != null) {
						if(this.parent.element != this.canvas) {
							this.canvas.style.width = targetWidth + "px";
							this.canvas.style.height = targetHeight + "px";
							this.canvas.style.marginLeft = marginLeft + "px";
							this.canvas.style.marginTop = marginTop + "px";
						}
					} else {
						this.div.style.width = targetWidth + "px";
						this.div.style.height = targetHeight + "px";
						this.div.style.marginLeft = marginLeft + "px";
						this.div.style.marginTop = marginTop + "px";
					}
				}
			}
		}
	}
	,__class__: lime__$internal_backend_html5_HTML5Window
};
var lime__$internal_format_Base64 = function() { };
$hxClasses["lime._internal.format.Base64"] = lime__$internal_format_Base64;
lime__$internal_format_Base64.__name__ = true;
lime__$internal_format_Base64.encode = function(source) {
	var result = [];
	var dictionary = lime__$internal_format_Base64.DICTIONARY;
	var extendedDictionary = lime__$internal_format_Base64.EXTENDED_DICTIONARY;
	var numBytes = source.length;
	var numInputTriplets = Math.floor(numBytes / 3);
	var numChunksToWrite = numInputTriplets * 2;
	result.length = Math.ceil(numBytes / 3) * 2;
	var numBytesRead = 0;
	var numChunksWritten = 0;
	var inputTriplet;
	while(numChunksWritten < numChunksToWrite) {
		inputTriplet = source.b[numBytesRead] << 16 | source.b[numBytesRead + 1] << 8 | source.b[numBytesRead + 2];
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = extendedDictionary[inputTriplet & 4095];
		numBytesRead += 3;
		numChunksWritten += 2;
	}
	switch(numBytes - numInputTriplets * 3) {
	case 1:
		inputTriplet = source.b[numBytesRead] << 16;
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = "==";
		break;
	case 2:
		inputTriplet = source.b[numBytesRead] << 16 | source.b[numBytesRead + 1] << 8;
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = dictionary[inputTriplet >> 6 & 63] + "=";
		break;
	default:
	}
	return result.join("");
};
var lime__$internal_format_Deflate = function() { };
$hxClasses["lime._internal.format.Deflate"] = lime__$internal_format_Deflate;
lime__$internal_format_Deflate.__name__ = true;
lime__$internal_format_Deflate.decompress = function(bytes) {
	var data = pako.inflateRaw(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
var lime__$internal_format_GZip = function() { };
$hxClasses["lime._internal.format.GZip"] = lime__$internal_format_GZip;
lime__$internal_format_GZip.__name__ = true;
lime__$internal_format_GZip.decompress = function(bytes) {
	var data = pako.ungzip(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
var lime__$internal_format_LZMA = function() { };
$hxClasses["lime._internal.format.LZMA"] = lime__$internal_format_LZMA;
lime__$internal_format_LZMA.__name__ = true;
lime__$internal_format_LZMA.decompress = function(bytes) {
	return null;
};
var lime__$internal_format_Zlib = function() { };
$hxClasses["lime._internal.format.Zlib"] = lime__$internal_format_Zlib;
lime__$internal_format_Zlib.__name__ = true;
lime__$internal_format_Zlib.decompress = function(bytes) {
	var data = pako.inflate(bytes.b.bufferValue);
	return haxe_io_Bytes.ofData(data);
};
var lime__$internal_graphics_ImageCanvasUtil = function() { };
$hxClasses["lime._internal.graphics.ImageCanvasUtil"] = lime__$internal_graphics_ImageCanvasUtil;
lime__$internal_graphics_ImageCanvasUtil.__name__ = true;
lime__$internal_graphics_ImageCanvasUtil.convertToCanvas = function(image,clear) {
	if(clear == null) {
		clear = false;
	}
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		if(buffer.__srcCanvas == null) {
			lime__$internal_graphics_ImageCanvasUtil.createCanvas(image,buffer.__srcImage.width,buffer.__srcImage.height);
			buffer.__srcContext.drawImage(buffer.__srcImage,0,0);
		}
		buffer.__srcImage = null;
	} else if(buffer.__srcCanvas == null && buffer.data != null) {
		image.set_transparent(true);
		lime__$internal_graphics_ImageCanvasUtil.createCanvas(image,buffer.width,buffer.height);
		lime__$internal_graphics_ImageCanvasUtil.createImageData(image);
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
	} else if(image.type == lime_graphics_ImageType.DATA && buffer.__srcImageData != null && image.dirty) {
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
		image.dirty = false;
	}
	if(clear) {
		buffer.data = null;
		buffer.__srcImageData = null;
	} else if(buffer.data == null && buffer.__srcImageData != null) {
		buffer.data = buffer.__srcImageData.data;
	}
	image.type = lime_graphics_ImageType.CANVAS;
};
lime__$internal_graphics_ImageCanvasUtil.convertToData = function(image,clear) {
	if(clear == null) {
		clear = false;
	}
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image);
	}
	if(buffer.__srcCanvas != null && buffer.data == null) {
		lime__$internal_graphics_ImageCanvasUtil.createImageData(image);
		if(image.type == lime_graphics_ImageType.CANVAS) {
			image.dirty = false;
		}
	} else if(image.type == lime_graphics_ImageType.CANVAS && buffer.__srcCanvas != null && image.dirty) {
		if(buffer.__srcImageData == null) {
			lime__$internal_graphics_ImageCanvasUtil.createImageData(image);
		} else {
			buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
			var elements = buffer.__srcImageData.data.buffer;
			var array = null;
			var view = null;
			var buffer1 = null;
			var len = null;
			var this1;
			if(elements != null) {
				this1 = new Uint8Array(elements);
			} else if(array != null) {
				this1 = new Uint8Array(array);
			} else if(view != null) {
				this1 = new Uint8Array(view);
			} else if(buffer1 != null) {
				if(len == null) {
					this1 = new Uint8Array(buffer1,0);
				} else {
					this1 = new Uint8Array(buffer1,0,len);
				}
			} else {
				this1 = null;
			}
			buffer.data = this1;
		}
		image.dirty = false;
	}
	if(clear) {
		image.buffer.__srcCanvas = null;
		image.buffer.__srcContext = null;
	}
	image.type = lime_graphics_ImageType.DATA;
};
lime__$internal_graphics_ImageCanvasUtil.createCanvas = function(image,width,height) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		buffer.__srcCanvas = window.document.createElement("canvas");
		buffer.__srcCanvas.width = width;
		buffer.__srcCanvas.height = height;
		if(!image.get_transparent()) {
			if(!image.get_transparent()) {
				buffer.__srcCanvas.setAttribute("moz-opaque","true");
			}
			buffer.__srcContext = buffer.__srcCanvas.getContext ("2d", { alpha: false });
		} else {
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
		}
	}
};
lime__$internal_graphics_ImageCanvasUtil.createImageData = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImageData == null) {
		if(buffer.data == null) {
			buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
		} else {
			buffer.__srcImageData = buffer.__srcContext.createImageData(buffer.width,buffer.height);
			buffer.__srcImageData.data.set(buffer.data);
		}
		var elements = buffer.__srcImageData.data.buffer;
		var array = null;
		var view = null;
		var buffer1 = null;
		var len = null;
		var this1;
		if(elements != null) {
			this1 = new Uint8Array(elements);
		} else if(array != null) {
			this1 = new Uint8Array(array);
		} else if(view != null) {
			this1 = new Uint8Array(view);
		} else if(buffer1 != null) {
			if(len == null) {
				this1 = new Uint8Array(buffer1,0);
			} else {
				this1 = new Uint8Array(buffer1,0,len);
			}
		} else {
			this1 = null;
		}
		buffer.data = this1;
	}
};
lime__$internal_graphics_ImageCanvasUtil.fillRect = function(image,rect,color,format) {
	lime__$internal_graphics_ImageCanvasUtil.convertToCanvas(image);
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		a = image.get_transparent() ? color >> 24 & 255 : 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		a = image.get_transparent() ? color & 255 : 255;
	}
	if(rect.x == 0 && rect.y == 0 && rect.width == image.width && rect.height == image.height) {
		if(image.get_transparent() && a == 0) {
			image.buffer.__srcCanvas.width = image.buffer.width;
			return;
		}
	}
	if(a < 255) {
		image.buffer.__srcContext.clearRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
	}
	if(a > 0) {
		image.buffer.__srcContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		image.buffer.__srcContext.fillRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
	}
	image.dirty = true;
	image.version++;
};
var lime__$internal_graphics_ImageDataUtil = function() { };
$hxClasses["lime._internal.graphics.ImageDataUtil"] = lime__$internal_graphics_ImageDataUtil;
lime__$internal_graphics_ImageDataUtil.__name__ = true;
lime__$internal_graphics_ImageDataUtil.fillRect = function(image,rect,color,format) {
	var fillColor;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		fillColor = rgba;
		break;
	case 2:
		var bgra = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		fillColor = rgba;
		break;
	default:
		fillColor = color;
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >>> 24 & 255 & 255) << 24 | (fillColor >>> 16 & 255 & 255) << 16 | (fillColor >>> 8 & 255 & 255) << 8 | 255;
	}
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied) {
		if((fillColor & 255) == 0) {
			if(fillColor != 0) {
				fillColor = 0;
			}
		} else if((fillColor & 255) != 255) {
			lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[fillColor & 255];
			fillColor = ((fillColor >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
		}
	}
	var dataView = new lime__$internal_graphics__$ImageDataUtil_ImageDataView(image,rect);
	var row;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		row = dataView.byteOffset + dataView.stride * y;
		var _g2 = 0;
		var _g3 = dataView.width;
		while(_g2 < _g3) {
			var x = _g2++;
			var offset = row + x * 4;
			var format1 = format;
			var premultiplied = false;
			if(premultiplied == null) {
				premultiplied = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			if(premultiplied) {
				if((fillColor & 255) == 0) {
					if(fillColor != 0) {
						fillColor = 0;
					}
				} else if((fillColor & 255) != 255) {
					lime_math_RGBA.a16 = lime_math_RGBA.__alpha16[fillColor & 255];
					fillColor = ((fillColor >>> 24 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * lime_math_RGBA.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
				}
			}
			switch(format1) {
			case 0:
				data[offset] = fillColor >>> 24 & 255;
				data[offset + 1] = fillColor >>> 16 & 255;
				data[offset + 2] = fillColor >>> 8 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 1:
				data[offset] = fillColor & 255;
				data[offset + 1] = fillColor >>> 24 & 255;
				data[offset + 2] = fillColor >>> 16 & 255;
				data[offset + 3] = fillColor >>> 8 & 255;
				break;
			case 2:
				data[offset] = fillColor >>> 8 & 255;
				data[offset + 1] = fillColor >>> 16 & 255;
				data[offset + 2] = fillColor >>> 24 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
};
var lime__$internal_graphics__$ImageDataUtil_ImageDataView = function(image,rect) {
	this.image = image;
	if(rect == null) {
		this.rect = image.get_rect();
	} else {
		if(rect.x < 0) {
			rect.x = 0;
		}
		if(rect.y < 0) {
			rect.y = 0;
		}
		if(rect.x + rect.width > image.width) {
			rect.width = image.width - rect.x;
		}
		if(rect.y + rect.height > image.height) {
			rect.height = image.height - rect.y;
		}
		if(rect.width < 0) {
			rect.width = 0;
		}
		if(rect.height < 0) {
			rect.height = 0;
		}
		this.rect = rect;
	}
	this.stride = image.buffer.get_stride();
	this.__update();
};
$hxClasses["lime._internal.graphics._ImageDataUtil.ImageDataView"] = lime__$internal_graphics__$ImageDataUtil_ImageDataView;
lime__$internal_graphics__$ImageDataUtil_ImageDataView.__name__ = true;
lime__$internal_graphics__$ImageDataUtil_ImageDataView.prototype = {
	__update: function() {
		this.x = Math.ceil(this.rect.x);
		this.y = Math.ceil(this.rect.y);
		this.width = Math.floor(this.rect.width);
		this.height = Math.floor(this.rect.height);
		this.byteOffset = this.stride * (this.y + this.image.offsetY) + (this.x + this.image.offsetX) * 4;
	}
	,__class__: lime__$internal_graphics__$ImageDataUtil_ImageDataView
};
var lime_app_Future = function(work,async) {
	if(async == null) {
		async = false;
	}
	if(work != null) {
		if(async) {
			var promise = new lime_app_Promise();
			promise.future = this;
			lime_app__$Future_FutureWork.queue({ promise : promise, work : work});
		} else {
			try {
				this.value = work();
				this.isComplete = true;
			} catch( _g ) {
				var e = haxe_Exception.caught(_g).unwrap();
				this.error = e;
				this.isError = true;
			}
		}
	}
};
$hxClasses["lime.app.Future"] = lime_app_Future;
lime_app_Future.__name__ = true;
lime_app_Future.withValue = function(value) {
	var future = new lime_app_Future();
	future.isComplete = true;
	future.value = value;
	return future;
};
lime_app_Future.prototype = {
	onComplete: function(listener) {
		if(listener != null) {
			if(this.isComplete) {
				listener(this.value);
			} else if(!this.isError) {
				if(this.__completeListeners == null) {
					this.__completeListeners = [];
				}
				this.__completeListeners.push(listener);
			}
		}
		return this;
	}
	,onError: function(listener) {
		if(listener != null) {
			if(this.isError) {
				listener(this.error);
			} else if(!this.isComplete) {
				if(this.__errorListeners == null) {
					this.__errorListeners = [];
				}
				this.__errorListeners.push(listener);
			}
		}
		return this;
	}
	,onProgress: function(listener) {
		if(listener != null) {
			if(this.__progressListeners == null) {
				this.__progressListeners = [];
			}
			this.__progressListeners.push(listener);
		}
		return this;
	}
	,then: function(next) {
		if(this.isComplete) {
			return next(this.value);
		} else if(this.isError) {
			var future = new lime_app_Future();
			future.isError = true;
			future.error = this.error;
			return future;
		} else {
			var promise = new lime_app_Promise();
			this.onError($bind(promise,promise.error));
			this.onProgress($bind(promise,promise.progress));
			this.onComplete(function(val) {
				var future = next(val);
				future.onError($bind(promise,promise.error));
				future.onComplete($bind(promise,promise.complete));
			});
			return promise.future;
		}
	}
	,__class__: lime_app_Future
};
var lime_app__$Future_FutureWork = function() { };
$hxClasses["lime.app._Future.FutureWork"] = lime_app__$Future_FutureWork;
lime_app__$Future_FutureWork.__name__ = true;
lime_app__$Future_FutureWork.queue = function(state) {
	if(lime_app__$Future_FutureWork.threadPool == null) {
		lime_app__$Future_FutureWork.threadPool = new lime_system_ThreadPool();
		lime_app__$Future_FutureWork.threadPool.doWork.add(lime_app__$Future_FutureWork.threadPool_doWork);
		lime_app__$Future_FutureWork.threadPool.onComplete.add(lime_app__$Future_FutureWork.threadPool_onComplete);
		lime_app__$Future_FutureWork.threadPool.onError.add(lime_app__$Future_FutureWork.threadPool_onError);
	}
	lime_app__$Future_FutureWork.threadPool.queue(state);
};
lime_app__$Future_FutureWork.threadPool_doWork = function(state) {
	try {
		var result = state.work();
		lime_app__$Future_FutureWork.threadPool.sendComplete({ promise : state.promise, result : result});
	} catch( _g ) {
		var e = haxe_Exception.caught(_g).unwrap();
		lime_app__$Future_FutureWork.threadPool.sendError({ promise : state.promise, error : e});
	}
};
lime_app__$Future_FutureWork.threadPool_onComplete = function(state) {
	state.promise.complete(state.result);
};
lime_app__$Future_FutureWork.threadPool_onError = function(state) {
	state.promise.error(state.error);
};
var lime_app_Promise = function() {
	this.future = new lime_app_Future();
};
$hxClasses["lime.app.Promise"] = lime_app_Promise;
lime_app_Promise.__name__ = true;
lime_app_Promise.prototype = {
	complete: function(data) {
		if(!this.future.isError) {
			this.future.isComplete = true;
			this.future.value = data;
			if(this.future.__completeListeners != null) {
				var _g = 0;
				var _g1 = this.future.__completeListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(data);
				}
				this.future.__completeListeners = null;
			}
		}
		return this;
	}
	,completeWith: function(future) {
		future.onComplete($bind(this,this.complete));
		future.onError($bind(this,this.error));
		future.onProgress($bind(this,this.progress));
		return this;
	}
	,error: function(msg) {
		if(!this.future.isComplete) {
			this.future.isError = true;
			this.future.error = msg;
			if(this.future.__errorListeners != null) {
				var _g = 0;
				var _g1 = this.future.__errorListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(msg);
				}
				this.future.__errorListeners = null;
			}
		}
		return this;
	}
	,progress: function(progress,total) {
		if(!this.future.isError && !this.future.isComplete) {
			if(this.future.__progressListeners != null) {
				var _g = 0;
				var _g1 = this.future.__progressListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(progress,total);
				}
			}
		}
		return this;
	}
	,__class__: lime_app_Promise
};
var lime_app__$Event_$Dynamic_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Dynamic_Void"] = lime_app__$Event_$Dynamic_$Void;
lime_app__$Event_$Dynamic_$Void.__name__ = true;
lime_app__$Event_$Dynamic_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Dynamic_$Void
};
var lime_app__$Event_$Float_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Float_Void"] = lime_app__$Event_$Float_$Float_$Float_$Void;
lime_app__$Event_$Float_$Float_$Float_$Void.__name__ = true;
lime_app__$Event_$Float_$Float_$Float_$Void.prototype = {
	remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Float_$Void
};
var lime_app__$Event_$Float_$Float_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Int_Void"] = lime_app__$Event_$Float_$Float_$Int_$Void;
lime_app__$Event_$Float_$Float_$Int_$Void.__name__ = true;
lime_app__$Event_$Float_$Float_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Int_$Void
};
var lime_app__$Event_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_Void"] = lime_app__$Event_$Float_$Float_$Void;
lime_app__$Event_$Float_$Float_$Void.__name__ = true;
lime_app__$Event_$Float_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$Void
};
var lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_lime_ui_MouseButton_Void"] = lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void;
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void.__name__ = true;
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void
};
var lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Float_Float_lime_ui_MouseWheelMode_Void"] = lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void;
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void.__name__ = true;
lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1,a2) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1,a2);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void
};
var lime_app__$Event_$Int_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Float_Float_Void"] = lime_app__$Event_$Int_$Float_$Float_$Void;
lime_app__$Event_$Int_$Float_$Float_$Void.__name__ = true;
lime_app__$Event_$Int_$Float_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,__class__: lime_app__$Event_$Int_$Float_$Float_$Void
};
var lime_app__$Event_$Int_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Float_Void"] = lime_app__$Event_$Int_$Float_$Void;
lime_app__$Event_$Int_$Float_$Void.__name__ = true;
lime_app__$Event_$Int_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$Float_$Void
};
var lime_app__$Event_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Int_Void"] = lime_app__$Event_$Int_$Int_$Void;
lime_app__$Event_$Int_$Int_$Void.__name__ = true;
lime_app__$Event_$Int_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$Int_$Void
};
var lime_app__$Event_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_Void"] = lime_app__$Event_$Int_$Void;
lime_app__$Event_$Int_$Void.__name__ = true;
lime_app__$Event_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Int_$Void
};
var lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Int_lime_ui_JoystickHatPosition_Void"] = lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void;
lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.__name__ = true;
lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,__class__: lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void
};
var lime_app__$Event_$String_$Int_$Int_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_String_Int_Int_Void"] = lime_app__$Event_$String_$Int_$Int_$Void;
lime_app__$Event_$String_$Int_$Int_$Void.__name__ = true;
lime_app__$Event_$String_$Int_$Int_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,__class__: lime_app__$Event_$String_$Int_$Int_$Void
};
var lime_app__$Event_$String_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_String_Void"] = lime_app__$Event_$String_$Void;
lime_app__$Event_$String_$Void.__name__ = true;
lime_app__$Event_$String_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$String_$Void
};
var lime_app__$Event_$Void_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_Void_Void"] = lime_app__$Event_$Void_$Void;
lime_app__$Event_$Void_$Void.__name__ = true;
lime_app__$Event_$Void_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function() {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$Void_$Void
};
var lime_app__$Event_$lime_$graphics_$RenderContext_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_graphics_RenderContext_Void"] = lime_app__$Event_$lime_$graphics_$RenderContext_$Void;
lime_app__$Event_$lime_$graphics_$RenderContext_$Void.__name__ = true;
lime_app__$Event_$lime_$graphics_$RenderContext_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$graphics_$RenderContext_$Void
};
var lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_GamepadAxis_Float_Void"] = lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void;
lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void.__name__ = true;
lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void
};
var lime_app__$Event_$lime_$ui_$GamepadButton_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_GamepadButton_Void"] = lime_app__$Event_$lime_$ui_$GamepadButton_$Void;
lime_app__$Event_$lime_$ui_$GamepadButton_$Void.__name__ = true;
lime_app__$Event_$lime_$ui_$GamepadButton_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$GamepadButton_$Void
};
var lime_app__$Event_$lime_$ui_$Gamepad_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Gamepad_Void"] = lime_app__$Event_$lime_$ui_$Gamepad_$Void;
lime_app__$Event_$lime_$ui_$Gamepad_$Void.__name__ = true;
lime_app__$Event_$lime_$ui_$Gamepad_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Gamepad_$Void
};
var lime_app__$Event_$lime_$ui_$Joystick_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Joystick_Void"] = lime_app__$Event_$lime_$ui_$Joystick_$Void;
lime_app__$Event_$lime_$ui_$Joystick_$Void.__name__ = true;
lime_app__$Event_$lime_$ui_$Joystick_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Joystick_$Void
};
var lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void"] = lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void;
lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.__name__ = true;
lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a,a1) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a,a1);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void
};
var lime_app__$Event_$lime_$ui_$Touch_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Touch_Void"] = lime_app__$Event_$lime_$ui_$Touch_$Void;
lime_app__$Event_$lime_$ui_$Touch_$Void.__name__ = true;
lime_app__$Event_$lime_$ui_$Touch_$Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	}
	,remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Touch_$Void
};
var lime_app__$Event_$lime_$ui_$Window_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
$hxClasses["lime.app._Event_lime_ui_Window_Void"] = lime_app__$Event_$lime_$ui_$Window_$Void;
lime_app__$Event_$lime_$ui_$Window_$Void.__name__ = true;
lime_app__$Event_$lime_$ui_$Window_$Void.prototype = {
	remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	}
	,dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
	,__class__: lime_app__$Event_$lime_$ui_$Window_$Void
};
var lime_graphics_Image = function(buffer,offsetX,offsetY,width,height,color,type) {
	if(height == null) {
		height = -1;
	}
	if(width == null) {
		width = -1;
	}
	if(offsetY == null) {
		offsetY = 0;
	}
	if(offsetX == null) {
		offsetX = 0;
	}
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.width = width;
	this.height = height;
	this.version = 0;
	if(type == null) {
		type = lime_graphics_ImageType.CANVAS;
	}
	this.type = type;
	if(buffer == null) {
		if(width > 0 && height > 0) {
			switch(this.type._hx_index) {
			case 0:
				this.buffer = new lime_graphics_ImageBuffer(null,width,height);
				lime__$internal_graphics_ImageCanvasUtil.createCanvas(this,width,height);
				if(color != null && color != 0) {
					this.fillRect(new lime_math_Rectangle(0,0,width,height),color);
				}
				break;
			case 1:
				var elements = width * height * 4;
				var array = null;
				var view = null;
				var buffer1 = null;
				var len = null;
				var this1;
				if(elements != null) {
					this1 = new Uint8Array(elements);
				} else if(array != null) {
					this1 = new Uint8Array(array);
				} else if(view != null) {
					this1 = new Uint8Array(view);
				} else if(buffer1 != null) {
					if(len == null) {
						this1 = new Uint8Array(buffer1,0);
					} else {
						this1 = new Uint8Array(buffer1,0,len);
					}
				} else {
					this1 = null;
				}
				this.buffer = new lime_graphics_ImageBuffer(this1,width,height);
				if(color != null && color != 0) {
					this.fillRect(new lime_math_Rectangle(0,0,width,height),color);
				}
				break;
			case 2:
				break;
			default:
			}
		}
	} else {
		this.__fromImageBuffer(buffer);
	}
};
$hxClasses["lime.graphics.Image"] = lime_graphics_Image;
lime_graphics_Image.__name__ = true;
lime_graphics_Image.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var image = new lime_graphics_Image();
	if(image.__fromFile(path)) {
		return image;
	} else {
		return null;
	}
};
lime_graphics_Image.loadFromBytes = function(bytes) {
	if(bytes == null) {
		return lime_app_Future.withValue(null);
	}
	var type = "";
	if(lime_graphics_Image.__isPNG(bytes)) {
		type = "image/png";
	} else if(lime_graphics_Image.__isJPG(bytes)) {
		type = "image/jpeg";
	} else if(lime_graphics_Image.__isGIF(bytes)) {
		type = "image/gif";
	} else if(lime_graphics_Image.__isWebP(bytes)) {
		type = "image/webp";
	} else {
		return lime_app_Future.withValue(null);
	}
	return lime__$internal_backend_html5_HTML5HTTPRequest.loadImageFromBytes(bytes,type);
};
lime_graphics_Image.loadFromFile = function(path) {
	if(path == null) {
		return lime_app_Future.withValue(null);
	}
	return lime__$internal_backend_html5_HTML5HTTPRequest.loadImage(path);
};
lime_graphics_Image.__isGIF = function(bytes) {
	if(bytes == null || bytes.length < 6) {
		return false;
	}
	var header = bytes.getString(0,6);
	if(header != "GIF87a") {
		return header == "GIF89a";
	} else {
		return true;
	}
};
lime_graphics_Image.__isJPG = function(bytes) {
	if(bytes == null || bytes.length < 4) {
		return false;
	}
	if(bytes.b[0] == 255 && bytes.b[1] == 216 && bytes.b[bytes.length - 2] == 255) {
		return bytes.b[bytes.length - 1] == 217;
	} else {
		return false;
	}
};
lime_graphics_Image.__isPNG = function(bytes) {
	if(bytes == null || bytes.length < 8) {
		return false;
	}
	if(bytes.b[0] == 137 && bytes.b[1] == 80 && bytes.b[2] == 78 && bytes.b[3] == 71 && bytes.b[4] == 13 && bytes.b[5] == 10 && bytes.b[6] == 26) {
		return bytes.b[7] == 10;
	} else {
		return false;
	}
};
lime_graphics_Image.__isWebP = function(bytes) {
	if(bytes == null || bytes.length < 16) {
		return false;
	}
	if(bytes.getString(0,4) == "RIFF") {
		return bytes.getString(8,4) == "WEBP";
	} else {
		return false;
	}
};
lime_graphics_Image.prototype = {
	fillRect: function(rect,color,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			lime__$internal_graphics_ImageCanvasUtil.fillRect(this,rect,color,format);
			break;
		case 1:
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
			if(this.buffer.data.length == 0) {
				return;
			}
			lime__$internal_graphics_ImageDataUtil.fillRect(this,rect,color,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb1;
					break;
				default:
					var rgba = color;
					var this1 = 0;
					var argb1 = this1;
					argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
					argb = argb1;
				}
			}
			this.buffer.__srcBitmapData.fillRect(rect.__toFlashRectangle(),argb);
			break;
		default:
		}
	}
	,__clipRect: function(r) {
		if(r == null) {
			return null;
		}
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) {
				return null;
			}
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) {
				return null;
			}
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) {
				return null;
			}
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) {
				return null;
			}
		}
		return r;
	}
	,__fromBase64: function(base64,type,onload) {
		var _gthis = this;
		var image = new Image();
		var image_onLoaded = function(event) {
			_gthis.buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
			_gthis.buffer.__srcImage = image;
			_gthis.offsetX = 0;
			_gthis.offsetY = 0;
			_gthis.width = _gthis.buffer.width;
			_gthis.height = _gthis.buffer.height;
			if(onload != null) {
				onload(_gthis);
			}
		};
		image.addEventListener("load",image_onLoaded,false);
		image.src = "data:" + type + ";base64," + base64;
	}
	,__fromBytes: function(bytes,onload) {
		var type = "";
		if(lime_graphics_Image.__isPNG(bytes)) {
			type = "image/png";
		} else if(lime_graphics_Image.__isJPG(bytes)) {
			type = "image/jpeg";
		} else if(lime_graphics_Image.__isGIF(bytes)) {
			type = "image/gif";
		} else {
			return false;
		}
		this.__fromBase64(lime__$internal_format_Base64.encode(bytes),type,onload);
		return true;
	}
	,__fromFile: function(path,onload,onerror) {
		var _gthis = this;
		var image = new Image();
		if(!lime__$internal_backend_html5_HTML5HTTPRequest.__isSameOrigin(path)) {
			image.crossOrigin = "Anonymous";
		}
		image.onload = function(_) {
			_gthis.buffer = new lime_graphics_ImageBuffer(null,image.width,image.height);
			_gthis.buffer.__srcImage = image;
			_gthis.width = image.width;
			_gthis.height = image.height;
			if(onload != null) {
				onload(_gthis);
			}
		};
		image.onerror = function(_) {
			if(onerror != null) {
				onerror();
			}
		};
		image.src = path;
		var image1 = image.complete;
		return true;
	}
	,__fromImageBuffer: function(buffer) {
		this.buffer = buffer;
		if(buffer != null) {
			if(this.width == -1) {
				this.width = buffer.width;
			}
			if(this.height == -1) {
				this.height = buffer.height;
			}
		}
	}
	,get_data: function() {
		if(this.buffer.data == null && this.buffer.width > 0 && this.buffer.height > 0) {
			lime__$internal_graphics_ImageCanvasUtil.convertToData(this);
		}
		return this.buffer.data;
	}
	,get_rect: function() {
		return new lime_math_Rectangle(0,0,this.width,this.height);
	}
	,get_transparent: function() {
		if(this.buffer == null) {
			return false;
		}
		return this.buffer.transparent;
	}
	,set_transparent: function(value) {
		if(this.buffer == null) {
			return false;
		}
		return this.buffer.transparent = value;
	}
	,__class__: lime_graphics_Image
	,__properties__: {set_transparent:"set_transparent",get_transparent:"get_transparent",get_rect:"get_rect",get_data:"get_data"}
};
var lime_graphics_ImageBuffer = function(data,width,height,bitsPerPixel,format) {
	if(bitsPerPixel == null) {
		bitsPerPixel = 32;
	}
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	this.data = data;
	this.width = width;
	this.height = height;
	this.bitsPerPixel = bitsPerPixel;
	this.format = format == null ? 0 : format;
	this.premultiplied = false;
	this.transparent = true;
};
$hxClasses["lime.graphics.ImageBuffer"] = lime_graphics_ImageBuffer;
lime_graphics_ImageBuffer.__name__ = true;
lime_graphics_ImageBuffer.prototype = {
	get_stride: function() {
		return this.width * (this.bitsPerPixel / 8 | 0);
	}
	,__class__: lime_graphics_ImageBuffer
	,__properties__: {get_stride:"get_stride"}
};
var lime_graphics_ImageType = $hxEnums["lime.graphics.ImageType"] = { __ename__:true,__constructs__:null
	,CANVAS: {_hx_name:"CANVAS",_hx_index:0,__enum__:"lime.graphics.ImageType",toString:$estr}
	,DATA: {_hx_name:"DATA",_hx_index:1,__enum__:"lime.graphics.ImageType",toString:$estr}
	,FLASH: {_hx_name:"FLASH",_hx_index:2,__enum__:"lime.graphics.ImageType",toString:$estr}
	,CUSTOM: {_hx_name:"CUSTOM",_hx_index:3,__enum__:"lime.graphics.ImageType",toString:$estr}
};
lime_graphics_ImageType.__constructs__ = [lime_graphics_ImageType.CANVAS,lime_graphics_ImageType.DATA,lime_graphics_ImageType.FLASH,lime_graphics_ImageType.CUSTOM];
var lime_graphics_RenderContext = function() {
};
$hxClasses["lime.graphics.RenderContext"] = lime_graphics_RenderContext;
lime_graphics_RenderContext.__name__ = true;
lime_graphics_RenderContext.prototype = {
	__class__: lime_graphics_RenderContext
};
var lime_graphics_WebGLRenderContext = {};
lime_graphics_WebGLRenderContext.fromWebGL2RenderContext = function(gl) {
	return gl;
};
var lime_graphics_opengl_GL = function() { };
$hxClasses["lime.graphics.opengl.GL"] = lime_graphics_opengl_GL;
lime_graphics_opengl_GL.__name__ = true;
var lime_math_RGBA = {};
var lime_math_Rectangle = function(x,y,width,height) {
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["lime.math.Rectangle"] = lime_math_Rectangle;
lime_math_Rectangle.__name__ = true;
lime_math_Rectangle.prototype = {
	offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,__toFlashRectangle: function() {
		return null;
	}
	,__class__: lime_math_Rectangle
};
var lime_media_AudioBuffer = function() {
};
$hxClasses["lime.media.AudioBuffer"] = lime_media_AudioBuffer;
lime_media_AudioBuffer.__name__ = true;
lime_media_AudioBuffer.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.set_src(new Howl({ src : ["data:" + lime_media_AudioBuffer.__getCodec(bytes) + ";base64," + lime__$internal_format_Base64.encode(bytes)], html5 : true, preload : false}));
	return audioBuffer;
};
lime_media_AudioBuffer.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.__srcHowl = new Howl({ src : [path], preload : false});
	return audioBuffer;
};
lime_media_AudioBuffer.fromFiles = function(paths) {
	var audioBuffer = new lime_media_AudioBuffer();
	audioBuffer.__srcHowl = new Howl({ src : paths, preload : false});
	return audioBuffer;
};
lime_media_AudioBuffer.loadFromFile = function(path) {
	var promise = new lime_app_Promise();
	var audioBuffer = lime_media_AudioBuffer.fromFile(path);
	if(audioBuffer != null) {
		if(audioBuffer != null) {
			audioBuffer.__srcHowl.on("load",function() {
				promise.complete(audioBuffer);
			});
			audioBuffer.__srcHowl.on("loaderror",function(id,msg) {
				promise.error(msg);
			});
			audioBuffer.__srcHowl.load();
		}
	} else {
		promise.error(null);
	}
	return promise.future;
};
lime_media_AudioBuffer.loadFromFiles = function(paths) {
	var promise = new lime_app_Promise();
	var audioBuffer = lime_media_AudioBuffer.fromFiles(paths);
	if(audioBuffer != null) {
		audioBuffer.__srcHowl.on("load",function() {
			promise.complete(audioBuffer);
		});
		audioBuffer.__srcHowl.on("loaderror",function() {
			promise.error(null);
		});
		audioBuffer.__srcHowl.load();
	} else {
		promise.error(null);
	}
	return promise.future;
};
lime_media_AudioBuffer.__getCodec = function(bytes) {
	var signature = bytes.getString(0,4);
	switch(signature) {
	case "OggS":
		return "audio/ogg";
	case "RIFF":
		if(bytes.getString(8,4) == "WAVE") {
			return "audio/wav";
		} else {
			var _g = bytes.b[1];
			var _g1 = bytes.b[2];
			switch(bytes.b[0]) {
			case 73:
				if(_g == 68) {
					if(_g1 == 51) {
						return "audio/mp3";
					}
				}
				break;
			case 255:
				switch(_g) {
				case 243:case 250:case 251:
					return "audio/mp3";
				default:
				}
				break;
			default:
			}
		}
		break;
	case "fLaC":
		return "audio/flac";
	default:
		var _g = bytes.b[1];
		var _g1 = bytes.b[2];
		switch(bytes.b[0]) {
		case 73:
			if(_g == 68) {
				if(_g1 == 51) {
					return "audio/mp3";
				}
			}
			break;
		case 255:
			switch(_g) {
			case 243:case 250:case 251:
				return "audio/mp3";
			default:
			}
			break;
		default:
		}
	}
	lime_utils_Log.error("Unsupported sound format",{ fileName : "lime/media/AudioBuffer.hx", lineNumber : 362, className : "lime.media.AudioBuffer", methodName : "__getCodec"});
	return null;
};
lime_media_AudioBuffer.prototype = {
	set_src: function(value) {
		return this.__srcHowl = value;
	}
	,__class__: lime_media_AudioBuffer
	,__properties__: {set_src:"set_src"}
};
var lime_media_AudioContext = function(type) {
	if(type != "custom") {
		if(type == null || type == "web") {
			try {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				this.web = new window.AudioContext ();
				this.type = "web";
			} catch( _g ) {
			}
		}
		if(this.web == null && type != "web") {
			this.html5 = new lime_media_HTML5AudioContext();
			this.type = "html5";
		}
	} else {
		this.type = "custom";
	}
};
$hxClasses["lime.media.AudioContext"] = lime_media_AudioContext;
lime_media_AudioContext.__name__ = true;
lime_media_AudioContext.prototype = {
	__class__: lime_media_AudioContext
};
var lime_media_AudioManager = function() { };
$hxClasses["lime.media.AudioManager"] = lime_media_AudioManager;
lime_media_AudioManager.__name__ = true;
lime_media_AudioManager.init = function(context) {
	if(lime_media_AudioManager.context == null) {
		if(context == null) {
			lime_media_AudioManager.context = new lime_media_AudioContext();
			context = lime_media_AudioManager.context;
			if(context.type == "openal") {
				var alc = context.openal;
				var device = alc.openDevice();
				var ctx = alc.createContext(device);
				alc.makeContextCurrent(ctx);
				alc.processContext(ctx);
			}
		}
		lime_media_AudioManager.context = context;
	}
};
var lime_media_HTML5AudioContext = function() {
};
$hxClasses["lime.media.HTML5AudioContext"] = lime_media_HTML5AudioContext;
lime_media_HTML5AudioContext.__name__ = true;
lime_media_HTML5AudioContext.prototype = {
	__class__: lime_media_HTML5AudioContext
};
var lime_media_OpenALAudioContext = function() {
};
$hxClasses["lime.media.OpenALAudioContext"] = lime_media_OpenALAudioContext;
lime_media_OpenALAudioContext.__name__ = true;
lime_media_OpenALAudioContext.prototype = {
	createContext: function(device,attrlist) {
		return lime_media_openal_ALC.createContext(device,attrlist);
	}
	,makeContextCurrent: function(context) {
		return lime_media_openal_ALC.makeContextCurrent(context);
	}
	,openDevice: function(deviceName) {
		return lime_media_openal_ALC.openDevice(deviceName);
	}
	,processContext: function(context) {
		lime_media_openal_ALC.processContext(context);
	}
	,__class__: lime_media_OpenALAudioContext
};
var lime_media_openal_ALC = function() { };
$hxClasses["lime.media.openal.ALC"] = lime_media_openal_ALC;
lime_media_openal_ALC.__name__ = true;
lime_media_openal_ALC.createContext = function(device,attrlist) {
	return null;
};
lime_media_openal_ALC.makeContextCurrent = function(context) {
	return false;
};
lime_media_openal_ALC.openDevice = function(deviceName) {
	return null;
};
lime_media_openal_ALC.processContext = function(context) {
};
var lime_net__$IHTTPRequest = function() { };
$hxClasses["lime.net._IHTTPRequest"] = lime_net__$IHTTPRequest;
lime_net__$IHTTPRequest.__name__ = true;
lime_net__$IHTTPRequest.__isInterface__ = true;
lime_net__$IHTTPRequest.prototype = {
	__class__: lime_net__$IHTTPRequest
};
var lime_net__$HTTPRequest_AbstractHTTPRequest = function(uri) {
	this.uri = uri;
	this.contentType = "application/x-www-form-urlencoded";
	this.followRedirects = true;
	this.enableResponseHeaders = false;
	this.formData = new haxe_ds_StringMap();
	this.headers = [];
	this.method = "GET";
	this.timeout = 30000;
	this.withCredentials = false;
	this.manageCookies = true;
	this.__backend = new lime__$internal_backend_html5_HTML5HTTPRequest();
	this.__backend.init(this);
};
$hxClasses["lime.net._HTTPRequest.AbstractHTTPRequest"] = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_AbstractHTTPRequest.__name__ = true;
lime_net__$HTTPRequest_AbstractHTTPRequest.__interfaces__ = [lime_net__$IHTTPRequest];
lime_net__$HTTPRequest_AbstractHTTPRequest.prototype = {
	__class__: lime_net__$HTTPRequest_AbstractHTTPRequest
};
var lime_net__$HTTPRequest_$Bytes = function(uri) {
	lime_net__$HTTPRequest_AbstractHTTPRequest.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_Bytes"] = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$Bytes.__name__ = true;
lime_net__$HTTPRequest_$Bytes.__super__ = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_$Bytes.prototype = $extend(lime_net__$HTTPRequest_AbstractHTTPRequest.prototype,{
	fromBytes: function(bytes) {
		return bytes;
	}
	,load: function(uri) {
		var _gthis = this;
		if(uri != null) {
			this.uri = uri;
		}
		var promise = new lime_app_Promise();
		var future = this.__backend.loadData(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(bytes) {
			_gthis.responseData = _gthis.fromBytes(bytes);
			promise.complete(_gthis.responseData);
		});
		return promise.future;
	}
	,__class__: lime_net__$HTTPRequest_$Bytes
});
var lime_net__$HTTPRequest_$String = function(uri) {
	lime_net__$HTTPRequest_AbstractHTTPRequest.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_String"] = lime_net__$HTTPRequest_$String;
lime_net__$HTTPRequest_$String.__name__ = true;
lime_net__$HTTPRequest_$String.__super__ = lime_net__$HTTPRequest_AbstractHTTPRequest;
lime_net__$HTTPRequest_$String.prototype = $extend(lime_net__$HTTPRequest_AbstractHTTPRequest.prototype,{
	load: function(uri) {
		var _gthis = this;
		if(uri != null) {
			this.uri = uri;
		}
		var promise = new lime_app_Promise();
		var future = this.__backend.loadText(this.uri);
		future.onProgress($bind(promise,promise.progress));
		future.onError($bind(promise,promise.error));
		future.onComplete(function(text) {
			_gthis.responseData = text;
			promise.complete(_gthis.responseData);
		});
		return promise.future;
	}
	,__class__: lime_net__$HTTPRequest_$String
});
var lime_net_HTTPRequestHeader = function(name,value) {
	if(value == null) {
		value = "";
	}
	this.name = name;
	this.value = value;
};
$hxClasses["lime.net.HTTPRequestHeader"] = lime_net_HTTPRequestHeader;
lime_net_HTTPRequestHeader.__name__ = true;
lime_net_HTTPRequestHeader.prototype = {
	__class__: lime_net_HTTPRequestHeader
};
var lime_net__$HTTPRequest_$lime_$utils_$Bytes = function(uri) {
	lime_net__$HTTPRequest_$Bytes.call(this,uri);
};
$hxClasses["lime.net._HTTPRequest_lime_utils_Bytes"] = lime_net__$HTTPRequest_$lime_$utils_$Bytes;
lime_net__$HTTPRequest_$lime_$utils_$Bytes.__name__ = true;
lime_net__$HTTPRequest_$lime_$utils_$Bytes.__super__ = lime_net__$HTTPRequest_$Bytes;
lime_net__$HTTPRequest_$lime_$utils_$Bytes.prototype = $extend(lime_net__$HTTPRequest_$Bytes.prototype,{
	fromBytes: function(bytes) {
		return lime_utils_Bytes.fromBytes(bytes);
	}
	,__class__: lime_net__$HTTPRequest_$lime_$utils_$Bytes
});
var lime_system_Sensor = function(type,id) {
	this.onUpdate = new lime_app__$Event_$Float_$Float_$Float_$Void();
	this.type = type;
	this.id = id;
};
$hxClasses["lime.system.Sensor"] = lime_system_Sensor;
lime_system_Sensor.__name__ = true;
lime_system_Sensor.registerSensor = function(type,id) {
	var sensor = new lime_system_Sensor(type,id);
	lime_system_Sensor.sensors.push(sensor);
	lime_system_Sensor.sensorByID.h[id] = sensor;
	return sensor;
};
lime_system_Sensor.prototype = {
	__class__: lime_system_Sensor
};
var lime_system_SensorType = $hxEnums["lime.system.SensorType"] = { __ename__:true,__constructs__:null
	,ACCELEROMETER: {_hx_name:"ACCELEROMETER",_hx_index:0,__enum__:"lime.system.SensorType",toString:$estr}
};
lime_system_SensorType.__constructs__ = [lime_system_SensorType.ACCELEROMETER];
var lime_system_System = function() { };
$hxClasses["lime.system.System"] = lime_system_System;
lime_system_System.__name__ = true;
lime_system_System.embed = $hx_exports["lime"]["embed"] = function(projectName,element,width,height,config) {
	if(lime_system_System.__applicationEntryPoint == null) {
		return;
	}
	if(Object.prototype.hasOwnProperty.call(lime_system_System.__applicationEntryPoint.h,projectName)) {
		var htmlElement = null;
		if(typeof(element) == "string") {
			htmlElement = window.document.getElementById(element);
		} else if(element == null) {
			htmlElement = window.document.createElement("div");
		} else {
			htmlElement = element;
		}
		if(htmlElement == null) {
			window.console.log("[lime.embed] ERROR: Cannot find target element: " + Std.string(element));
			return;
		}
		if(width == null) {
			width = 0;
		}
		if(height == null) {
			height = 0;
		}
		if(config == null) {
			config = { };
		}
		if(Object.prototype.hasOwnProperty.call(config,"background") && typeof(config.background) == "string") {
			var background = StringTools.replace(Std.string(config.background),"#","");
			if(background.indexOf("0x") > -1) {
				config.background = Std.parseInt(background);
			} else {
				config.background = Std.parseInt("0x" + background);
			}
		}
		config.element = htmlElement;
		config.width = width;
		config.height = height;
		lime_system_System.__applicationEntryPoint.h[projectName](config);
	}
};
lime_system_System.exit = function(code) {
};
lime_system_System.__registerEntryPoint = function(projectName,entryPoint) {
	if(lime_system_System.__applicationEntryPoint == null) {
		lime_system_System.__applicationEntryPoint = new haxe_ds_StringMap();
	}
	lime_system_System.__applicationEntryPoint.h[projectName] = entryPoint;
};
var lime_system_ThreadPool = function(minThreads,maxThreads) {
	if(maxThreads == null) {
		maxThreads = 1;
	}
	if(minThreads == null) {
		minThreads = 0;
	}
	this.onRun = new lime_app__$Event_$Dynamic_$Void();
	this.onError = new lime_app__$Event_$Dynamic_$Void();
	this.onComplete = new lime_app__$Event_$Dynamic_$Void();
	this.doWork = new lime_app__$Event_$Dynamic_$Void();
	this.minThreads = minThreads;
	this.maxThreads = maxThreads;
	this.currentThreads = 0;
};
$hxClasses["lime.system.ThreadPool"] = lime_system_ThreadPool;
lime_system_ThreadPool.__name__ = true;
lime_system_ThreadPool.prototype = {
	queue: function(state) {
		this.runWork(state);
	}
	,sendComplete: function(state) {
		this.onComplete.dispatch(state);
	}
	,sendError: function(state) {
		this.onError.dispatch(state);
	}
	,runWork: function(state) {
		this.onRun.dispatch(state);
		this.doWork.dispatch(state);
	}
	,__class__: lime_system_ThreadPool
};
var lime_text_Font = function(name) {
	if(name != null) {
		this.name = name;
	}
	if(!this.__init) {
		if(this.ascender == undefined) {
			this.ascender = 0;
		}
		if(this.descender == undefined) {
			this.descender = 0;
		}
		if(this.height == undefined) {
			this.height = 0;
		}
		if(this.numGlyphs == undefined) {
			this.numGlyphs = 0;
		}
		if(this.underlinePosition == undefined) {
			this.underlinePosition = 0;
		}
		if(this.underlineThickness == undefined) {
			this.underlineThickness = 0;
		}
		if(this.unitsPerEM == undefined) {
			this.unitsPerEM = 0;
		}
		if(this.__fontID != null) {
			if(lime_utils_Assets.isLocal(this.__fontID)) {
				this.__fromBytes(lime_utils_Assets.getBytes(this.__fontID));
			}
		} else if(this.__fontPath != null) {
			this.__fromFile(this.__fontPath);
		}
	}
};
$hxClasses["lime.text.Font"] = lime_text_Font;
lime_text_Font.__name__ = true;
lime_text_Font.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var font = new lime_text_Font();
	font.__fromFile(path);
	return font;
};
lime_text_Font.loadFromName = function(path) {
	var font = new lime_text_Font();
	return font.__loadFromName(path);
};
lime_text_Font.__measureFontNode = function(fontFamily) {
	var node = window.document.createElement("span");
	node.setAttribute("aria-hidden","true");
	var text = window.document.createTextNode("BESbswy");
	node.appendChild(text);
	var style = node.style;
	style.display = "block";
	style.position = "absolute";
	style.top = "-9999px";
	style.left = "-9999px";
	style.fontSize = "300px";
	style.width = "auto";
	style.height = "auto";
	style.lineHeight = "normal";
	style.margin = "0";
	style.padding = "0";
	style.fontVariant = "normal";
	style.whiteSpace = "nowrap";
	style.fontFamily = fontFamily;
	window.document.body.appendChild(node);
	return node;
};
lime_text_Font.prototype = {
	__fromBytes: function(bytes) {
		this.__fontPath = null;
	}
	,__fromFile: function(path) {
		this.__fontPath = path;
	}
	,__loadFromName: function(name) {
		var _gthis = this;
		var promise = new lime_app_Promise();
		this.name = name;
		var userAgent = $global.navigator.userAgent.toLowerCase();
		var isSafari = userAgent.indexOf(" safari/") >= 0 && userAgent.indexOf(" chrome/") < 0;
		var isUIWebView = new EReg("(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)","i").match(userAgent);
		if(!isSafari && !isUIWebView && (window.document.fonts && ($_=window.document.fonts,$bind($_,$_.load)))) {
			window.document.fonts.load("1em '" + name + "'").then(function(_) {
				promise.complete(_gthis);
			},function(_) {
				lime_utils_Log.warn("Could not load web font \"" + name + "\"",{ fileName : "lime/text/Font.hx", lineNumber : 513, className : "lime.text.Font", methodName : "__loadFromName"});
				promise.complete(_gthis);
			});
		} else {
			var node1 = lime_text_Font.__measureFontNode("'" + name + "', sans-serif");
			var node2 = lime_text_Font.__measureFontNode("'" + name + "', serif");
			var width1 = node1.offsetWidth;
			var width2 = node2.offsetWidth;
			var interval = -1;
			var timeout = 3000;
			var intervalLength = 50;
			var intervalCount = 0;
			var loaded;
			var timeExpired;
			var checkFont = function() {
				intervalCount += 1;
				loaded = node1.offsetWidth != width1 || node2.offsetWidth != width2;
				timeExpired = intervalCount * intervalLength >= timeout;
				if(loaded || timeExpired) {
					window.clearInterval(interval);
					node1.parentNode.removeChild(node1);
					node2.parentNode.removeChild(node2);
					node1 = null;
					node2 = null;
					if(timeExpired) {
						lime_utils_Log.warn("Could not load web font \"" + name + "\"",{ fileName : "lime/text/Font.hx", lineNumber : 548, className : "lime.text.Font", methodName : "__loadFromName"});
					}
					promise.complete(_gthis);
				}
			};
			interval = window.setInterval(checkFont,intervalLength);
		}
		return promise.future;
	}
	,__class__: lime_text_Font
};
var lime_ui_Gamepad = function(id) {
	this.onDisconnect = new lime_app__$Event_$Void_$Void();
	this.onButtonUp = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onButtonDown = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onAxisMove = new lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void();
	this.id = id;
	this.connected = true;
};
$hxClasses["lime.ui.Gamepad"] = lime_ui_Gamepad;
lime_ui_Gamepad.__name__ = true;
lime_ui_Gamepad.__connect = function(id) {
	if(!lime_ui_Gamepad.devices.h.hasOwnProperty(id)) {
		var gamepad = new lime_ui_Gamepad(id);
		lime_ui_Gamepad.devices.h[id] = gamepad;
		lime_ui_Gamepad.onConnect.dispatch(gamepad);
	}
};
lime_ui_Gamepad.__disconnect = function(id) {
	var gamepad = lime_ui_Gamepad.devices.h[id];
	if(gamepad != null) {
		gamepad.connected = false;
	}
	lime_ui_Gamepad.devices.remove(id);
	if(gamepad != null) {
		gamepad.onDisconnect.dispatch();
	}
};
lime_ui_Gamepad.prototype = {
	__class__: lime_ui_Gamepad
};
var lime_ui_Joystick = function(id) {
	this.onTrackballMove = new lime_app__$Event_$Int_$Float_$Float_$Void();
	this.onHatMove = new lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void();
	this.onDisconnect = new lime_app__$Event_$Void_$Void();
	this.onButtonUp = new lime_app__$Event_$Int_$Void();
	this.onButtonDown = new lime_app__$Event_$Int_$Void();
	this.onAxisMove = new lime_app__$Event_$Int_$Float_$Void();
	this.id = id;
	this.connected = true;
};
$hxClasses["lime.ui.Joystick"] = lime_ui_Joystick;
lime_ui_Joystick.__name__ = true;
lime_ui_Joystick.__connect = function(id) {
	if(!lime_ui_Joystick.devices.h.hasOwnProperty(id)) {
		var joystick = new lime_ui_Joystick(id);
		lime_ui_Joystick.devices.h[id] = joystick;
		lime_ui_Joystick.onConnect.dispatch(joystick);
	}
};
lime_ui_Joystick.__disconnect = function(id) {
	var joystick = lime_ui_Joystick.devices.h[id];
	if(joystick != null) {
		joystick.connected = false;
	}
	lime_ui_Joystick.devices.remove(id);
	if(joystick != null) {
		joystick.onDisconnect.dispatch();
	}
};
lime_ui_Joystick.__getDeviceData = function() {
	if(navigator.getGamepads) {
		return navigator.getGamepads();
	} else if(navigator.webkitGetGamepads) {
		return navigator.webkitGetGamepads();
	} else {
		return null;
	}
};
lime_ui_Joystick.prototype = {
	__class__: lime_ui_Joystick
};
var lime_ui_MouseCursor = $hxEnums["lime.ui.MouseCursor"] = { __ename__:true,__constructs__:null
	,ARROW: {_hx_name:"ARROW",_hx_index:0,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,CROSSHAIR: {_hx_name:"CROSSHAIR",_hx_index:1,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,DEFAULT: {_hx_name:"DEFAULT",_hx_index:2,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,MOVE: {_hx_name:"MOVE",_hx_index:3,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,POINTER: {_hx_name:"POINTER",_hx_index:4,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_NESW: {_hx_name:"RESIZE_NESW",_hx_index:5,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_NS: {_hx_name:"RESIZE_NS",_hx_index:6,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_NWSE: {_hx_name:"RESIZE_NWSE",_hx_index:7,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,RESIZE_WE: {_hx_name:"RESIZE_WE",_hx_index:8,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,TEXT: {_hx_name:"TEXT",_hx_index:9,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,WAIT: {_hx_name:"WAIT",_hx_index:10,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,WAIT_ARROW: {_hx_name:"WAIT_ARROW",_hx_index:11,__enum__:"lime.ui.MouseCursor",toString:$estr}
	,CUSTOM: {_hx_name:"CUSTOM",_hx_index:12,__enum__:"lime.ui.MouseCursor",toString:$estr}
};
lime_ui_MouseCursor.__constructs__ = [lime_ui_MouseCursor.ARROW,lime_ui_MouseCursor.CROSSHAIR,lime_ui_MouseCursor.DEFAULT,lime_ui_MouseCursor.MOVE,lime_ui_MouseCursor.POINTER,lime_ui_MouseCursor.RESIZE_NESW,lime_ui_MouseCursor.RESIZE_NS,lime_ui_MouseCursor.RESIZE_NWSE,lime_ui_MouseCursor.RESIZE_WE,lime_ui_MouseCursor.TEXT,lime_ui_MouseCursor.WAIT,lime_ui_MouseCursor.WAIT_ARROW,lime_ui_MouseCursor.CUSTOM];
var lime_ui_MouseWheelMode = $hxEnums["lime.ui.MouseWheelMode"] = { __ename__:true,__constructs__:null
	,PIXELS: {_hx_name:"PIXELS",_hx_index:0,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
	,LINES: {_hx_name:"LINES",_hx_index:1,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
	,PAGES: {_hx_name:"PAGES",_hx_index:2,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
	,UNKNOWN: {_hx_name:"UNKNOWN",_hx_index:3,__enum__:"lime.ui.MouseWheelMode",toString:$estr}
};
lime_ui_MouseWheelMode.__constructs__ = [lime_ui_MouseWheelMode.PIXELS,lime_ui_MouseWheelMode.LINES,lime_ui_MouseWheelMode.PAGES,lime_ui_MouseWheelMode.UNKNOWN];
var lime_ui_Touch = function(x,y,id,dx,dy,pressure,device) {
	this.x = x;
	this.y = y;
	this.id = id;
	this.dx = dx;
	this.dy = dy;
	this.pressure = pressure;
	this.device = device;
};
$hxClasses["lime.ui.Touch"] = lime_ui_Touch;
lime_ui_Touch.__name__ = true;
lime_ui_Touch.prototype = {
	__class__: lime_ui_Touch
};
var lime_ui_Window = function(application,attributes) {
	this.onTextInput = new lime_app__$Event_$String_$Void();
	this.onTextEdit = new lime_app__$Event_$String_$Int_$Int_$Void();
	this.onRestore = new lime_app__$Event_$Void_$Void();
	this.onResize = new lime_app__$Event_$Int_$Int_$Void();
	this.onRenderContextRestored = new lime_app__$Event_$lime_$graphics_$RenderContext_$Void();
	this.onRenderContextLost = new lime_app__$Event_$Void_$Void();
	this.onRender = new lime_app__$Event_$lime_$graphics_$RenderContext_$Void();
	this.onMove = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseWheel = new lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void();
	this.onMouseUp = new lime_app__$Event_$Float_$Float_$Int_$Void();
	this.onMouseMoveRelative = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseMove = new lime_app__$Event_$Float_$Float_$Void();
	this.onMouseDown = new lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void();
	this.onMinimize = new lime_app__$Event_$Void_$Void();
	this.onLeave = new lime_app__$Event_$Void_$Void();
	this.onKeyUp = new lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onKeyDown = new lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void();
	this.onFullscreen = new lime_app__$Event_$Void_$Void();
	this.onFocusOut = new lime_app__$Event_$Void_$Void();
	this.onFocusIn = new lime_app__$Event_$Void_$Void();
	this.onExpose = new lime_app__$Event_$Void_$Void();
	this.onEnter = new lime_app__$Event_$Void_$Void();
	this.onDropFile = new lime_app__$Event_$String_$Void();
	this.onDeactivate = new lime_app__$Event_$Void_$Void();
	this.onClose = new lime_app__$Event_$Void_$Void();
	this.onActivate = new lime_app__$Event_$Void_$Void();
	this.application = application;
	this.__attributes = attributes != null ? attributes : { };
	if(Object.prototype.hasOwnProperty.call(this.__attributes,"parameters")) {
		this.parameters = this.__attributes.parameters;
	}
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__scale = 1;
	this.__x = 0;
	this.__y = 0;
	this.__title = "";
	this.id = -1;
	this.__backend = new lime__$internal_backend_html5_HTML5Window(this);
};
$hxClasses["lime.ui.Window"] = lime_ui_Window;
lime_ui_Window.__name__ = true;
lime_ui_Window.prototype = {
	close: function() {
		this.__backend.close();
	}
	,__class__: lime_ui_Window
};
var lime_utils_AssetBundle = function() {
	this.data = new haxe_ds_StringMap();
	this.paths = [];
};
$hxClasses["lime.utils.AssetBundle"] = lime_utils_AssetBundle;
lime_utils_AssetBundle.__name__ = true;
lime_utils_AssetBundle.fromBytes = function(bytes) {
	var input = new haxe_io_BytesInput(bytes);
	return lime_utils_AssetBundle.__extractBundle(input);
};
lime_utils_AssetBundle.loadFromBytes = function(bytes) {
	return lime_app_Future.withValue(lime_utils_AssetBundle.fromBytes(bytes));
};
lime_utils_AssetBundle.loadFromFile = function(path) {
	return lime_utils_Bytes.loadFromFile(path).then(lime_utils_AssetBundle.loadFromBytes);
};
lime_utils_AssetBundle.__extractBundle = function(input) {
	var entries = haxe_zip_Reader.readZip(input);
	var bundle = new lime_utils_AssetBundle();
	var _g_head = entries.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var entry = val;
		if(entry.compressed) {
			var bytes = entry.data;
			var this1 = bundle.data;
			var key = entry.fileName;
			var value = lime_utils_Bytes.decompress(bytes,lime_utils_CompressionAlgorithm.DEFLATE);
			this1.h[key] = value;
		} else {
			bundle.data.h[entry.fileName] = entry.data;
		}
		bundle.paths.push(entry.fileName);
	}
	return bundle;
};
lime_utils_AssetBundle.prototype = {
	__class__: lime_utils_AssetBundle
};
var lime_utils_AssetCache = function() {
	this.enabled = true;
	this.audio = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.image = new haxe_ds_StringMap();
	this.version = 505345;
};
$hxClasses["lime.utils.AssetCache"] = lime_utils_AssetCache;
lime_utils_AssetCache.__name__ = true;
lime_utils_AssetCache.prototype = {
	exists: function(id,type) {
		if(type == "IMAGE" || type == null) {
			if(Object.prototype.hasOwnProperty.call(this.image.h,id)) {
				return true;
			}
		}
		if(type == "FONT" || type == null) {
			if(Object.prototype.hasOwnProperty.call(this.font.h,id)) {
				return true;
			}
		}
		if(type == "SOUND" || type == "MUSIC" || type == null) {
			if(Object.prototype.hasOwnProperty.call(this.audio.h,id)) {
				return true;
			}
		}
		return false;
	}
	,set: function(id,type,asset) {
		switch(type) {
		case "FONT":
			this.font.h[id] = asset;
			break;
		case "IMAGE":
			if(!((asset) instanceof lime_graphics_Image)) {
				throw haxe_Exception.thrown("Cannot cache non-Image asset: " + Std.string(asset) + " as Image");
			}
			this.image.h[id] = asset;
			break;
		case "MUSIC":case "SOUND":
			if(!((asset) instanceof lime_media_AudioBuffer)) {
				throw haxe_Exception.thrown("Cannot cache non-AudioBuffer asset: " + Std.string(asset) + " as AudioBuffer");
			}
			this.audio.h[id] = asset;
			break;
		default:
			throw haxe_Exception.thrown(type + " assets are not cachable");
		}
	}
	,clear: function(prefix) {
		if(prefix == null) {
			this.audio = new haxe_ds_StringMap();
			this.font = new haxe_ds_StringMap();
			this.image = new haxe_ds_StringMap();
		} else {
			var h = this.audio.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(StringTools.startsWith(key,prefix)) {
					var _this = this.audio;
					if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
						delete(_this.h[key]);
					}
				}
			}
			var h = this.font.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(StringTools.startsWith(key,prefix)) {
					var _this = this.font;
					if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
						delete(_this.h[key]);
					}
				}
			}
			var h = this.image.h;
			var key_h = h;
			var key_keys = Object.keys(h);
			var key_length = key_keys.length;
			var key_current = 0;
			while(key_current < key_length) {
				var key = key_keys[key_current++];
				if(StringTools.startsWith(key,prefix)) {
					var _this = this.image;
					if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
						delete(_this.h[key]);
					}
				}
			}
		}
	}
	,__class__: lime_utils_AssetCache
};
var lime_utils_AssetLibrary = function() {
	this.types = new haxe_ds_StringMap();
	this.sizes = new haxe_ds_StringMap();
	this.preload = new haxe_ds_StringMap();
	this.paths = new haxe_ds_StringMap();
	this.pathGroups = new haxe_ds_StringMap();
	this.classTypes = new haxe_ds_StringMap();
	this.cachedText = new haxe_ds_StringMap();
	this.cachedImages = new haxe_ds_StringMap();
	this.cachedFonts = new haxe_ds_StringMap();
	this.cachedBytes = new haxe_ds_StringMap();
	this.cachedAudioBuffers = new haxe_ds_StringMap();
	this.onChange = new lime_app__$Event_$Void_$Void();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
};
$hxClasses["lime.utils.AssetLibrary"] = lime_utils_AssetLibrary;
lime_utils_AssetLibrary.__name__ = true;
lime_utils_AssetLibrary.fromBundle = function(bundle) {
	if(Object.prototype.hasOwnProperty.call(bundle.data.h,"library.json")) {
		var manifest = lime_utils_AssetManifest.fromBytes(bundle.data.h["library.json"]);
		if(manifest != null) {
			var library = null;
			if(manifest.libraryType == null) {
				library = new lime_utils_AssetLibrary();
			} else {
				var name = manifest.libraryType;
				var libraryClass = $hxClasses[name];
				if(libraryClass != null) {
					library = Type.createInstance(libraryClass,manifest.libraryArgs);
				} else {
					lime_utils_Log.warn("Could not find library type: " + manifest.libraryType,{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 122, className : "lime.utils.AssetLibrary", methodName : "fromBundle"});
					return null;
				}
			}
			library.__fromBundle(bundle,manifest);
			return library;
		}
	} else {
		var library = new lime_utils_AssetLibrary();
		library.__fromBundle(bundle);
		return library;
	}
	return null;
};
lime_utils_AssetLibrary.fromManifest = function(manifest) {
	if(manifest == null) {
		return null;
	}
	var library = null;
	if(manifest.libraryType == null) {
		library = new lime_utils_AssetLibrary();
	} else {
		var name = manifest.libraryType;
		var libraryClass = $hxClasses[name];
		if(libraryClass != null) {
			library = Type.createInstance(libraryClass,manifest.libraryArgs);
		} else {
			lime_utils_Log.warn("Could not find library type: " + manifest.libraryType,{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 160, className : "lime.utils.AssetLibrary", methodName : "fromManifest"});
			return null;
		}
	}
	library.__fromManifest(manifest);
	return library;
};
lime_utils_AssetLibrary.prototype = {
	exists: function(id,type) {
		var requestedType = type != null ? js_Boot.__cast(type , String) : null;
		var assetType = this.types.h[id];
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) {
				return true;
			}
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") {
				return true;
			}
		}
		return false;
	}
	,getAsset: function(id,type) {
		switch(type) {
		case "BINARY":
			return this.getBytes(id);
		case "FONT":
			return this.getFont(id);
		case "IMAGE":
			return this.getImage(id);
		case "MUSIC":case "SOUND":
			return this.getAudioBuffer(id);
		case "TEMPLATE":
			throw haxe_Exception.thrown("Not sure how to get template: " + id);
		case "TEXT":
			return this.getText(id);
		default:
			throw haxe_Exception.thrown("Unknown asset type: " + type);
		}
	}
	,getAudioBuffer: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id)) {
			return this.cachedAudioBuffers.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_media_AudioBuffer.fromBytes(js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , haxe_io_Bytes));
		} else {
			return lime_media_AudioBuffer.fromFile(this.paths.h[id]);
		}
	}
	,getBytes: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
			return this.cachedBytes.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.cachedText.h,id)) {
			var bytes = lime_utils_Bytes.ofString(this.cachedText.h[id]);
			this.cachedBytes.h[id] = bytes;
			return bytes;
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , haxe_io_Bytes);
		} else {
			return lime_utils_Bytes.fromFile(this.paths.h[id]);
		}
	}
	,getFont: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id)) {
			return this.cachedFonts.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , lime_text_Font);
		} else {
			return lime_text_Font.fromFile(this.paths.h[id]);
		}
	}
	,getImage: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedImages.h,id)) {
			return this.cachedImages.h[id];
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , lime_graphics_Image);
		} else {
			return lime_graphics_Image.fromFile(this.paths.h[id]);
		}
	}
	,getText: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedText.h,id)) {
			return this.cachedText.h[id];
		} else {
			var bytes = this.getBytes(id);
			if(bytes == null) {
				return null;
			} else {
				return bytes.getString(0,bytes.length);
			}
		}
	}
	,isLocal: function(id,type) {
		if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return true;
		}
		var _g = js_Boot.__cast(type , String);
		if(_g == null) {
			if(!(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id) || Object.prototype.hasOwnProperty.call(this.cachedText.h,id) || Object.prototype.hasOwnProperty.call(this.cachedImages.h,id) || Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id))) {
				return Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id);
			} else {
				return true;
			}
		} else {
			switch(_g) {
			case "FONT":
				return Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id);
			case "IMAGE":
				return Object.prototype.hasOwnProperty.call(this.cachedImages.h,id);
			case "MUSIC":case "SOUND":
				return Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id);
			default:
				if(!Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
					return Object.prototype.hasOwnProperty.call(this.cachedText.h,id);
				} else {
					return true;
				}
			}
		}
	}
	,load: function() {
		if(this.loaded) {
			return lime_app_Future.withValue(this);
		}
		if(this.promise == null) {
			this.promise = new lime_app_Promise();
			this.bytesLoadedCache = new haxe_ds_StringMap();
			this.assetsLoaded = 0;
			this.assetsTotal = 1;
			var h = this.preload.h;
			var id_h = h;
			var id_keys = Object.keys(h);
			var id_length = id_keys.length;
			var id_current = 0;
			while(id_current < id_length) {
				var id = id_keys[id_current++];
				if(!this.preload.h[id]) {
					continue;
				}
				lime_utils_Log.verbose("Preloading asset: " + id + " [" + this.types.h[id] + "]",{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 408, className : "lime.utils.AssetLibrary", methodName : "load"});
				var _g = this.types.h[id];
				if(_g != null) {
					switch(_g) {
					case "BINARY":
						this.assetsTotal++;
						var future = this.loadBytes(id);
						future.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future.onComplete((function(id,_g) {
							return function(bytes) {
								_g[0](id[0],bytes);
							};
						})([id],[$bind(this,this.loadBytes_onComplete)]));
						break;
					case "FONT":
						this.assetsTotal++;
						var future1 = this.loadFont(id);
						future1.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future1.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future1.onComplete((function(id,_g) {
							return function(font) {
								_g[0](id[0],font);
							};
						})([id],[$bind(this,this.loadFont_onComplete)]));
						break;
					case "IMAGE":
						this.assetsTotal++;
						var future2 = this.loadImage(id);
						future2.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future2.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future2.onComplete((function(id,_g) {
							return function(image) {
								_g[0](id[0],image);
							};
						})([id],[$bind(this,this.loadImage_onComplete)]));
						break;
					case "MUSIC":case "SOUND":
						this.assetsTotal++;
						var future3 = this.loadAudioBuffer(id);
						future3.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future3.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.loadAudioBuffer_onError)]));
						future3.onComplete((function(id,_g) {
							return function(audioBuffer) {
								_g[0](id[0],audioBuffer);
							};
						})([id],[$bind(this,this.loadAudioBuffer_onComplete)]));
						break;
					case "TEXT":
						this.assetsTotal++;
						var future4 = this.loadText(id);
						future4.onProgress((function(id,_g) {
							return function(bytesLoaded,bytesTotal) {
								_g[0](id[0],bytesLoaded,bytesTotal);
							};
						})([id],[$bind(this,this.load_onProgress)]));
						future4.onError((function(id,_g) {
							return function(message) {
								_g[0](id[0],message);
							};
						})([id],[$bind(this,this.load_onError)]));
						future4.onComplete((function(id,_g) {
							return function(text) {
								_g[0](id[0],text);
							};
						})([id],[$bind(this,this.loadText_onComplete)]));
						break;
					default:
					}
				}
			}
			this.__assetLoaded(null);
		}
		return this.promise.future;
	}
	,loadAudioBuffer: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedAudioBuffers.h,id)) {
			return lime_app_Future.withValue(this.cachedAudioBuffers.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_app_Future.withValue(lime_media_AudioBuffer.fromBytes(js_Boot.__cast(Type.createInstance(this.classTypes.h[id],[]) , haxe_io_Bytes)));
		} else if(Object.prototype.hasOwnProperty.call(this.pathGroups.h,id)) {
			return lime_media_AudioBuffer.loadFromFiles(this.pathGroups.h[id]);
		} else {
			return lime_media_AudioBuffer.loadFromFile(this.paths.h[id]);
		}
	}
	,loadBytes: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
			return lime_app_Future.withValue(this.cachedBytes.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_app_Future.withValue(Type.createInstance(this.classTypes.h[id],[]));
		} else {
			return lime_utils_Bytes.loadFromFile(this.paths.h[id]);
		}
	}
	,loadFont: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedFonts.h,id)) {
			return lime_app_Future.withValue(this.cachedFonts.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			var font = Type.createInstance(this.classTypes.h[id],[]);
			return font.__loadFromName(font.name);
		} else {
			return lime_text_Font.loadFromName(this.paths.h[id]);
		}
	}
	,loadImage: function(id) {
		var _gthis = this;
		if(Object.prototype.hasOwnProperty.call(this.cachedImages.h,id)) {
			return lime_app_Future.withValue(this.cachedImages.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			return lime_app_Future.withValue(Type.createInstance(this.classTypes.h[id],[]));
		} else if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id)) {
			return lime_graphics_Image.loadFromBytes(this.cachedBytes.h[id]).then(function(image) {
				var _this = _gthis.cachedBytes;
				if(Object.prototype.hasOwnProperty.call(_this.h,id)) {
					delete(_this.h[id]);
				}
				_gthis.cachedImages.h[id] = image;
				return lime_app_Future.withValue(image);
			});
		} else {
			return lime_graphics_Image.loadFromFile(this.paths.h[id]);
		}
	}
	,loadText: function(id) {
		if(Object.prototype.hasOwnProperty.call(this.cachedText.h,id)) {
			return lime_app_Future.withValue(this.cachedText.h[id]);
		} else if(Object.prototype.hasOwnProperty.call(this.cachedBytes.h,id) || Object.prototype.hasOwnProperty.call(this.classTypes.h,id)) {
			var bytes = this.getBytes(id);
			if(bytes == null) {
				return lime_app_Future.withValue(null);
			} else {
				var text = bytes.getString(0,bytes.length);
				this.cachedText.h[id] = text;
				return lime_app_Future.withValue(text);
			}
		} else {
			var request = new lime_net__$HTTPRequest_$String();
			return request.load(this.paths.h[id]);
		}
	}
	,unload: function() {
	}
	,__assetLoaded: function(id) {
		this.assetsLoaded++;
		if(id != null) {
			lime_utils_Log.verbose("Loaded asset: " + id + " [" + this.types.h[id] + "] (" + (this.assetsLoaded - 1) + "/" + (this.assetsTotal - 1) + ")",{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 622, className : "lime.utils.AssetLibrary", methodName : "__assetLoaded"});
		}
		if(id != null) {
			var size = Object.prototype.hasOwnProperty.call(this.sizes.h,id) ? this.sizes.h[id] : 0;
			if(!Object.prototype.hasOwnProperty.call(this.bytesLoadedCache.h,id)) {
				this.bytesLoaded += size;
			} else {
				var cache = this.bytesLoadedCache.h[id];
				if(cache < size) {
					this.bytesLoaded += size - cache;
				}
			}
			this.bytesLoadedCache.h[id] = size;
		}
		if(this.assetsLoaded < this.assetsTotal) {
			this.promise.progress(this.bytesLoaded,this.bytesTotal);
		} else {
			this.loaded = true;
			this.promise.progress(this.bytesTotal,this.bytesTotal);
			this.promise.complete(this);
		}
	}
	,__cacheBreak: function(path) {
		return lime_utils_Assets.__cacheBreak(path);
	}
	,__fromBundle: function(bundle,manifest) {
		if(manifest != null) {
			var id;
			var data;
			var type;
			var _g = 0;
			var _g1 = manifest.assets;
			while(_g < _g1.length) {
				var asset = _g1[_g];
				++_g;
				id = Object.prototype.hasOwnProperty.call(asset,"id") ? asset.id : asset.path;
				data = bundle.data.h[asset.path];
				if(Object.prototype.hasOwnProperty.call(asset,"type")) {
					type = asset.type;
					if(type == "TEXT") {
						this.cachedText.h[id] = data != null ? Std.string(data) : null;
					} else {
						this.cachedBytes.h[id] = data;
					}
					this.types.h[id] = asset.type;
				} else {
					this.cachedBytes.h[id] = data;
					this.types.h[id] = "BINARY";
				}
			}
		} else {
			var _g = 0;
			var _g1 = bundle.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				this.cachedBytes.h[path] = bundle.data.h[path];
				this.types.h[path] = "BINARY";
			}
		}
	}
	,__fromManifest: function(manifest) {
		var hasSize = manifest.version >= 2;
		var size;
		var id;
		var pathGroup;
		var classRef;
		var basePath = manifest.rootPath;
		if(basePath == null) {
			basePath = "";
		}
		if(basePath != "") {
			basePath += "/";
		}
		var _g = 0;
		var _g1 = manifest.assets;
		while(_g < _g1.length) {
			var asset = _g1[_g];
			++_g;
			size = hasSize && Object.prototype.hasOwnProperty.call(asset,"size") ? asset.size : 100;
			id = Object.prototype.hasOwnProperty.call(asset,"id") ? asset.id : asset.path;
			if(Object.prototype.hasOwnProperty.call(asset,"path")) {
				var this1 = this.paths;
				var value = this.__cacheBreak(this.__resolvePath(basePath + Std.string(Reflect.field(asset,"path"))));
				this1.h[id] = value;
			}
			if(Object.prototype.hasOwnProperty.call(asset,"pathGroup")) {
				pathGroup = Reflect.field(asset,"pathGroup");
				var _g2 = 0;
				var _g3 = pathGroup.length;
				while(_g2 < _g3) {
					var i = _g2++;
					pathGroup[i] = this.__cacheBreak(this.__resolvePath(basePath + pathGroup[i]));
				}
				this.pathGroups.h[id] = pathGroup;
			}
			this.sizes.h[id] = size;
			this.types.h[id] = asset.type;
			if(Object.prototype.hasOwnProperty.call(asset,"preload")) {
				this.preload.h[id] = Reflect.field(asset,"preload");
			}
			if(Object.prototype.hasOwnProperty.call(asset,"className")) {
				var name = Reflect.field(asset,"className");
				classRef = $hxClasses[name];
				this.classTypes.h[id] = classRef;
			}
		}
		this.bytesTotal = 0;
		var _g = 0;
		var _g1 = manifest.assets;
		while(_g < _g1.length) {
			var asset = _g1[_g];
			++_g;
			id = Object.prototype.hasOwnProperty.call(asset,"id") ? asset.id : asset.path;
			if(Object.prototype.hasOwnProperty.call(this.preload.h,id) && this.preload.h[id] && Object.prototype.hasOwnProperty.call(this.sizes.h,id)) {
				this.bytesTotal += this.sizes.h[id];
			}
		}
	}
	,__resolvePath: function(path) {
		path = StringTools.replace(path,"\\","/");
		var colonIdx = path.indexOf(":");
		if(StringTools.startsWith(path,"http") && colonIdx > 0) {
			var lastSlashIdx = colonIdx + 3;
			var httpSection = HxOverrides.substr(path,0,lastSlashIdx);
			path = httpSection + StringTools.replace(HxOverrides.substr(path,lastSlashIdx,null),"//","/");
		} else {
			path = StringTools.replace(path,"//","/");
		}
		if(path.indexOf("./") > -1) {
			var split = path.split("/");
			var newPath = [];
			var _g = 0;
			var _g1 = split.length;
			while(_g < _g1) {
				var i = _g++;
				if(split[i] == "..") {
					if(i == 0 || newPath[i - 1] == "..") {
						newPath.push("..");
					} else {
						newPath.pop();
					}
				} else if(split[i] == ".") {
					if(i == 0) {
						newPath.push(".");
					}
				} else {
					newPath.push(split[i]);
				}
			}
			path = newPath.join("/");
		}
		return path;
	}
	,loadAudioBuffer_onComplete: function(id,audioBuffer) {
		this.cachedAudioBuffers.h[id] = audioBuffer;
		if(Object.prototype.hasOwnProperty.call(this.pathGroups.h,id)) {
			var pathGroup = this.pathGroups.h[id];
			var h = this.pathGroups.h;
			var otherID_h = h;
			var otherID_keys = Object.keys(h);
			var otherID_length = otherID_keys.length;
			var otherID_current = 0;
			while(otherID_current < otherID_length) {
				var otherID = otherID_keys[otherID_current++];
				if(otherID == id) {
					continue;
				}
				var _g = 0;
				while(_g < pathGroup.length) {
					var path = pathGroup[_g];
					++_g;
					if(this.pathGroups.h[otherID].indexOf(path) > -1) {
						this.cachedAudioBuffers.h[otherID] = audioBuffer;
						break;
					}
				}
			}
		}
		this.__assetLoaded(id);
	}
	,loadAudioBuffer_onError: function(id,message) {
		if(message != null && message != "") {
			lime_utils_Log.warn("Could not load \"" + id + "\": " + Std.string(message),{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 868, className : "lime.utils.AssetLibrary", methodName : "loadAudioBuffer_onError"});
		} else {
			lime_utils_Log.warn("Could not load \"" + id + "\"",{ fileName : "lime/utils/AssetLibrary.hx", lineNumber : 872, className : "lime.utils.AssetLibrary", methodName : "loadAudioBuffer_onError"});
		}
		this.loadAudioBuffer_onComplete(id,new lime_media_AudioBuffer());
	}
	,loadBytes_onComplete: function(id,bytes) {
		this.cachedBytes.h[id] = bytes;
		this.__assetLoaded(id);
	}
	,loadFont_onComplete: function(id,font) {
		this.cachedFonts.h[id] = font;
		this.__assetLoaded(id);
	}
	,loadImage_onComplete: function(id,image) {
		this.cachedImages.h[id] = image;
		this.__assetLoaded(id);
	}
	,loadText_onComplete: function(id,text) {
		this.cachedText.h[id] = text;
		this.__assetLoaded(id);
	}
	,load_onError: function(id,message) {
		if(message != null && message != "") {
			this.promise.error("Error loading asset \"" + id + "\": " + Std.string(message));
		} else {
			this.promise.error("Error loading asset \"" + id + "\"");
		}
	}
	,load_onProgress: function(id,bytesLoaded,bytesTotal) {
		if(bytesLoaded > 0) {
			var size = this.sizes.h[id];
			var percent;
			if(bytesTotal > 0) {
				percent = bytesLoaded / bytesTotal;
				if(percent > 1) {
					percent = 1;
				}
				bytesLoaded = Math.floor(percent * size);
			} else if(bytesLoaded > size) {
				bytesLoaded = size;
			}
			if(Object.prototype.hasOwnProperty.call(this.bytesLoadedCache.h,id)) {
				var cache = this.bytesLoadedCache.h[id];
				if(bytesLoaded != cache) {
					this.bytesLoaded += bytesLoaded - cache;
				}
			} else {
				this.bytesLoaded += bytesLoaded;
			}
			this.bytesLoadedCache.h[id] = bytesLoaded;
			this.promise.progress(this.bytesLoaded,this.bytesTotal);
		}
	}
	,__class__: lime_utils_AssetLibrary
};
var lime_utils_AssetManifest = function() {
	this.assets = [];
	this.libraryArgs = [];
	this.version = 2;
};
$hxClasses["lime.utils.AssetManifest"] = lime_utils_AssetManifest;
lime_utils_AssetManifest.__name__ = true;
lime_utils_AssetManifest.fromBytes = function(bytes,rootPath) {
	if(bytes != null) {
		return lime_utils_AssetManifest.parse(bytes.getString(0,bytes.length),rootPath);
	} else {
		return null;
	}
};
lime_utils_AssetManifest.loadFromFile = function(path,rootPath) {
	path = lime_utils_AssetManifest.__resolvePath(path);
	rootPath = lime_utils_AssetManifest.__resolveRootPath(rootPath,path);
	if(path == null) {
		return null;
	}
	return lime_utils_Bytes.loadFromFile(path).then(function(bytes) {
		return lime_app_Future.withValue(lime_utils_AssetManifest.fromBytes(bytes,rootPath));
	});
};
lime_utils_AssetManifest.parse = function(data,rootPath) {
	if(data == null || data == "") {
		return null;
	}
	var manifestData = JSON.parse(data);
	var manifest = new lime_utils_AssetManifest();
	if(Object.prototype.hasOwnProperty.call(manifestData,"name")) {
		manifest.name = manifestData.name;
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"libraryType")) {
		manifest.libraryType = manifestData.libraryType;
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"libraryArgs")) {
		manifest.libraryArgs = manifestData.libraryArgs;
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"assets")) {
		var assets = manifestData.assets;
		if(Object.prototype.hasOwnProperty.call(manifestData,"version") && manifestData.version <= 2) {
			manifest.assets = haxe_Unserializer.run(assets);
		} else {
			manifest.assets = assets;
		}
	}
	if(Object.prototype.hasOwnProperty.call(manifestData,"rootPath")) {
		manifest.rootPath = manifestData.rootPath;
	}
	if(rootPath != null && rootPath != "") {
		if(manifest.rootPath == null || manifest.rootPath == "") {
			manifest.rootPath = rootPath;
		} else {
			manifest.rootPath = rootPath + "/" + manifest.rootPath;
		}
	}
	return manifest;
};
lime_utils_AssetManifest.__resolvePath = function(path) {
	if(path == null) {
		return null;
	}
	var queryIndex = path.indexOf("?");
	var basePath;
	if(queryIndex > -1) {
		basePath = HxOverrides.substr(path,0,queryIndex);
	} else {
		basePath = path;
	}
	basePath = StringTools.replace(basePath,"\\","/");
	while(StringTools.endsWith(basePath,"/")) basePath = HxOverrides.substr(basePath,0,basePath.length - 1);
	if(StringTools.endsWith(basePath,".bundle")) {
		if(queryIndex > -1) {
			return basePath + "/library.json" + HxOverrides.substr(path,queryIndex,null);
		} else {
			return basePath + "/library.json";
		}
	} else {
		return path;
	}
};
lime_utils_AssetManifest.__resolveRootPath = function(rootPath,path) {
	if(rootPath != null) {
		return rootPath;
	}
	var queryIndex = path.indexOf("?");
	if(queryIndex > -1) {
		rootPath = HxOverrides.substr(path,0,queryIndex);
	} else {
		rootPath = path;
	}
	rootPath = StringTools.replace(rootPath,"\\","/");
	while(StringTools.endsWith(rootPath,"/")) {
		if(rootPath == "/") {
			return rootPath;
		}
		rootPath = HxOverrides.substr(rootPath,0,rootPath.length - 1);
	}
	if(StringTools.endsWith(rootPath,".bundle")) {
		return rootPath;
	} else {
		return haxe_io_Path.directory(rootPath);
	}
};
lime_utils_AssetManifest.prototype = {
	__class__: lime_utils_AssetManifest
};
var lime_utils_Assets = function() { };
$hxClasses["lime.utils.Assets"] = lime_utils_Assets;
lime_utils_Assets.__name__ = true;
lime_utils_Assets.getAsset = function(id,type,useCache) {
	if(useCache && lime_utils_Assets.cache.enabled) {
		switch(type) {
		case "BINARY":case "TEXT":
			useCache = false;
			break;
		case "FONT":
			var font = lime_utils_Assets.cache.font.h[id];
			if(font != null) {
				return font;
			}
			break;
		case "IMAGE":
			var image = lime_utils_Assets.cache.image.h[id];
			if(lime_utils_Assets.isValidImage(image)) {
				return image;
			}
			break;
		case "MUSIC":case "SOUND":
			var audio = lime_utils_Assets.cache.audio.h[id];
			if(lime_utils_Assets.isValidAudio(audio)) {
				return audio;
			}
			break;
		case "TEMPLATE":
			throw haxe_Exception.thrown("Not sure how to get template: " + id);
		default:
			return null;
		}
	}
	var id1 = id;
	var colonIndex = id1.indexOf(":");
	var symbol_libraryName = id1.substring(0,colonIndex);
	var symbol_symbolName = id1.substring(colonIndex + 1);
	var symbol_library = lime_utils_Assets.getLibrary(symbol_libraryName);
	if(symbol_library != null) {
		if(symbol_library.exists(symbol_symbolName,type)) {
			if(symbol_library.isLocal(symbol_symbolName,type)) {
				var asset = symbol_library.getAsset(symbol_symbolName,type);
				if(useCache && lime_utils_Assets.cache.enabled) {
					lime_utils_Assets.cache.set(id,type,asset);
				}
				return asset;
			} else {
				lime_utils_Log.error(type + " asset \"" + id + "\" exists, but only asynchronously",{ fileName : "lime/utils/Assets.hx", lineNumber : 133, className : "lime.utils.Assets", methodName : "getAsset"});
			}
		} else {
			lime_utils_Log.error("There is no " + type + " asset with an ID of \"" + id + "\"",{ fileName : "lime/utils/Assets.hx", lineNumber : 138, className : "lime.utils.Assets", methodName : "getAsset"});
		}
	} else {
		lime_utils_Log.error(lime_utils_Assets.__libraryNotFound(symbol_libraryName),{ fileName : "lime/utils/Assets.hx", lineNumber : 143, className : "lime.utils.Assets", methodName : "getAsset"});
	}
	return null;
};
lime_utils_Assets.getBytes = function(id) {
	return lime_utils_Assets.getAsset(id,"BINARY",false);
};
lime_utils_Assets.getLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	return lime_utils_Assets.libraries.h[name];
};
lime_utils_Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache && lime_utils_Assets.cache.enabled) {
		if(lime_utils_Assets.cache.exists(id,type)) {
			return true;
		}
	}
	var id1 = id;
	var colonIndex = id1.indexOf(":");
	var symbol_libraryName = id1.substring(0,colonIndex);
	var symbol_symbolName = id1.substring(colonIndex + 1);
	var symbol_library = lime_utils_Assets.getLibrary(symbol_libraryName);
	if(symbol_library != null) {
		return symbol_library.isLocal(symbol_symbolName,type);
	} else {
		return false;
	}
};
lime_utils_Assets.isValidAudio = function(buffer) {
	return buffer != null;
};
lime_utils_Assets.isValidImage = function(image) {
	if(image != null) {
		return image.buffer != null;
	} else {
		return false;
	}
};
lime_utils_Assets.loadLibrary = function(id) {
	var promise = new lime_app_Promise();
	var library = lime_utils_Assets.getLibrary(id);
	if(library != null) {
		return library.load();
	}
	var path = id;
	var rootPath = null;
	if(Object.prototype.hasOwnProperty.call(lime_utils_Assets.bundlePaths.h,id)) {
		lime_utils_AssetBundle.loadFromFile(lime_utils_Assets.bundlePaths.h[id]).onComplete(function(bundle) {
			if(bundle == null) {
				promise.error("Cannot load bundle for library \"" + id + "\"");
				return;
			}
			var library = lime_utils_AssetLibrary.fromBundle(bundle);
			if(library == null) {
				promise.error("Cannot open library \"" + id + "\"");
			} else {
				lime_utils_Assets.libraries.h[id] = library;
				library.onChange.add(($_=lime_utils_Assets.onChange,$bind($_,$_.dispatch)));
				promise.completeWith(library.load());
			}
		}).onError(function(_) {
			promise.error("There is no asset library with an ID of \"" + id + "\"");
		});
	} else {
		if(Object.prototype.hasOwnProperty.call(lime_utils_Assets.libraryPaths.h,id)) {
			path = lime_utils_Assets.libraryPaths.h[id];
			rootPath = haxe_io_Path.directory(path);
		} else {
			if(StringTools.endsWith(path,".bundle")) {
				rootPath = path;
				path += "/library.json";
			} else {
				rootPath = haxe_io_Path.directory(path);
			}
			path = lime_utils_Assets.__cacheBreak(path);
		}
		lime_utils_AssetManifest.loadFromFile(path,rootPath).onComplete(function(manifest) {
			if(manifest == null) {
				promise.error("Cannot parse asset manifest for library \"" + id + "\"");
				return;
			}
			var library = lime_utils_AssetLibrary.fromManifest(manifest);
			if(library == null) {
				promise.error("Cannot open library \"" + id + "\"");
			} else {
				lime_utils_Assets.libraries.h[id] = library;
				library.onChange.add(($_=lime_utils_Assets.onChange,$bind($_,$_.dispatch)));
				promise.completeWith(library.load());
			}
		}).onError(function(_) {
			promise.error("There is no asset library with an ID of \"" + id + "\"");
		});
	}
	return promise.future;
};
lime_utils_Assets.registerLibrary = function(name,library) {
	if(Object.prototype.hasOwnProperty.call(lime_utils_Assets.libraries.h,name)) {
		if(lime_utils_Assets.libraries.h[name] == library) {
			return;
		} else {
			lime_utils_Assets.unloadLibrary(name);
		}
	}
	if(library != null) {
		library.onChange.add(lime_utils_Assets.library_onChange);
	}
	lime_utils_Assets.libraries.h[name] = library;
};
lime_utils_Assets.unloadLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	var library = lime_utils_Assets.libraries.h[name];
	if(library != null) {
		lime_utils_Assets.cache.clear(name + ":");
		library.onChange.remove(lime_utils_Assets.library_onChange);
		library.unload();
	}
	var _this = lime_utils_Assets.libraries;
	if(Object.prototype.hasOwnProperty.call(_this.h,name)) {
		delete(_this.h[name]);
	}
};
lime_utils_Assets.__cacheBreak = function(path) {
	if(lime_utils_Assets.cache.version > 0) {
		if(path.indexOf("?") > -1) {
			path += "&" + lime_utils_Assets.cache.version;
		} else {
			path += "?" + lime_utils_Assets.cache.version;
		}
	}
	return path;
};
lime_utils_Assets.__libraryNotFound = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	if(lime_app_Application.current != null && lime_app_Application.current.__preloader != null && !lime_app_Application.current.__preloader.complete) {
		return "There is no asset library named \"" + name + "\", or it is not yet preloaded";
	} else {
		return "There is no asset library named \"" + name + "\"";
	}
};
lime_utils_Assets.library_onChange = function() {
	lime_utils_Assets.cache.clear();
	lime_utils_Assets.onChange.dispatch();
};
var lime_utils_Bytes = {};
lime_utils_Bytes._new = function(length,bytesData) {
	var this1 = new haxe_io_Bytes(bytesData);
	return this1;
};
lime_utils_Bytes.decompress = function(this1,algorithm) {
	switch(algorithm._hx_index) {
	case 0:
		return lime__$internal_format_Deflate.decompress(this1);
	case 1:
		return lime__$internal_format_GZip.decompress(this1);
	case 2:
		return lime__$internal_format_LZMA.decompress(this1);
	case 3:
		return lime__$internal_format_Zlib.decompress(this1);
	}
};
lime_utils_Bytes.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	return lime_utils_Bytes._new(bytes.length,bytes.b.bufferValue);
};
lime_utils_Bytes.fromFile = function(path) {
	return null;
};
lime_utils_Bytes.loadFromFile = function(path) {
	var request = new lime_net__$HTTPRequest_$lime_$utils_$Bytes();
	return request.load(path);
};
lime_utils_Bytes.ofString = function(s) {
	var bytes = haxe_io_Bytes.ofString(s);
	return lime_utils_Bytes._new(bytes.length,bytes.b.bufferValue);
};
var lime_utils_CompressionAlgorithm = $hxEnums["lime.utils.CompressionAlgorithm"] = { __ename__:true,__constructs__:null
	,DEFLATE: {_hx_name:"DEFLATE",_hx_index:0,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
	,GZIP: {_hx_name:"GZIP",_hx_index:1,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
	,LZMA: {_hx_name:"LZMA",_hx_index:2,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
	,ZLIB: {_hx_name:"ZLIB",_hx_index:3,__enum__:"lime.utils.CompressionAlgorithm",toString:$estr}
};
lime_utils_CompressionAlgorithm.__constructs__ = [lime_utils_CompressionAlgorithm.DEFLATE,lime_utils_CompressionAlgorithm.GZIP,lime_utils_CompressionAlgorithm.LZMA,lime_utils_CompressionAlgorithm.ZLIB];
var lime_utils_Log = function() { };
$hxClasses["lime.utils.Log"] = lime_utils_Log;
lime_utils_Log.__name__ = true;
lime_utils_Log.error = function(message,info) {
	if(lime_utils_Log.level >= 1) {
		var message1 = "[" + info.className + "] ERROR: " + Std.string(message);
		if(lime_utils_Log.throwErrors) {
			throw haxe_Exception.thrown(message1);
		} else {
			console.error(message1);
		}
	}
};
lime_utils_Log.verbose = function(message,info) {
	if(lime_utils_Log.level >= 5) {
		var message1 = "[" + info.className + "] " + Std.string(message);
		console.log(message1);
	}
};
lime_utils_Log.warn = function(message,info) {
	if(lime_utils_Log.level >= 2) {
		console.warn("[" + info.className + "] WARNING: " + Std.string(message));
	}
};
var lime_utils_Preloader = function() {
	this.bytesTotalCache = new haxe_ds_StringMap();
	this.bytesLoadedCache2 = new haxe_ds_StringMap();
	this.bytesLoadedCache = new haxe_ds_ObjectMap();
	this.onProgress = new lime_app__$Event_$Int_$Int_$Void();
	this.onComplete = new lime_app__$Event_$Void_$Void();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.libraries = [];
	this.libraryNames = [];
	this.onProgress.add($bind(this,this.update));
};
$hxClasses["lime.utils.Preloader"] = lime_utils_Preloader;
lime_utils_Preloader.__name__ = true;
lime_utils_Preloader.prototype = {
	addLibrary: function(library) {
		this.libraries.push(library);
	}
	,addLibraryName: function(name) {
		if(this.libraryNames.indexOf(name) == -1) {
			this.libraryNames.push(name);
		}
	}
	,load: function() {
		var _gthis = this;
		var _g = 0;
		var _g1 = this.libraries;
		while(_g < _g1.length) {
			var library = _g1[_g];
			++_g;
			this.bytesTotal += library.bytesTotal;
		}
		this.loadedLibraries = -1;
		this.preloadStarted = false;
		var _g = 0;
		var _g1 = this.libraries;
		while(_g < _g1.length) {
			var library = [_g1[_g]];
			++_g;
			lime_utils_Log.verbose("Preloading asset library",{ fileName : "lime/utils/Preloader.hx", lineNumber : 134, className : "lime.utils.Preloader", methodName : "load"});
			library[0].load().onProgress((function(library) {
				return function(loaded,total) {
					if(_gthis.bytesLoadedCache.h.__keys__[library[0].__id__] == null) {
						_gthis.bytesLoaded += loaded;
					} else {
						_gthis.bytesLoaded += loaded - _gthis.bytesLoadedCache.h[library[0].__id__];
					}
					_gthis.bytesLoadedCache.set(library[0],loaded);
					if(!_gthis.simulateProgress) {
						_gthis.onProgress.dispatch(_gthis.bytesLoaded,_gthis.bytesTotal);
					}
				};
			})(library)).onComplete((function(library) {
				return function(_) {
					if(_gthis.bytesLoadedCache.h.__keys__[library[0].__id__] == null) {
						_gthis.bytesLoaded += library[0].bytesTotal;
					} else {
						_gthis.bytesLoaded += (library[0].bytesTotal | 0) - _gthis.bytesLoadedCache.h[library[0].__id__];
					}
					_gthis.loadedAssetLibrary();
				};
			})(library)).onError((function() {
				return function(e) {
					lime_utils_Log.error(e,{ fileName : "lime/utils/Preloader.hx", lineNumber : 170, className : "lime.utils.Preloader", methodName : "load"});
				};
			})());
		}
		var _g = 0;
		var _g1 = this.libraryNames;
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			this.bytesTotal += 200;
		}
		this.loadedLibraries++;
		this.preloadStarted = true;
		this.updateProgress();
	}
	,loadedAssetLibrary: function(name) {
		this.loadedLibraries++;
		var current = this.loadedLibraries;
		if(!this.preloadStarted) {
			++current;
		}
		var totalLibraries = this.libraries.length + this.libraryNames.length;
		if(name != null) {
			lime_utils_Log.verbose("Loaded asset library: " + name + " [" + current + "/" + totalLibraries + "]",{ fileName : "lime/utils/Preloader.hx", lineNumber : 197, className : "lime.utils.Preloader", methodName : "loadedAssetLibrary"});
		} else {
			lime_utils_Log.verbose("Loaded asset library [" + current + "/" + totalLibraries + "]",{ fileName : "lime/utils/Preloader.hx", lineNumber : 201, className : "lime.utils.Preloader", methodName : "loadedAssetLibrary"});
		}
		this.updateProgress();
	}
	,start: function() {
		if(this.complete || this.simulateProgress || !this.preloadComplete) {
			return;
		}
		this.complete = true;
		this.onComplete.dispatch();
	}
	,update: function(loaded,total) {
	}
	,updateProgress: function() {
		var _gthis = this;
		if(!this.simulateProgress) {
			this.onProgress.dispatch(this.bytesLoaded,this.bytesTotal);
		}
		if(this.loadedLibraries == this.libraries.length && !this.initLibraryNames) {
			this.initLibraryNames = true;
			var _g = 0;
			var _g1 = this.libraryNames;
			while(_g < _g1.length) {
				var name = [_g1[_g]];
				++_g;
				lime_utils_Log.verbose("Preloading asset library: " + name[0],{ fileName : "lime/utils/Preloader.hx", lineNumber : 239, className : "lime.utils.Preloader", methodName : "updateProgress"});
				lime_utils_Assets.loadLibrary(name[0]).onProgress((function(name) {
					return function(loaded,total) {
						if(total > 0) {
							if(!Object.prototype.hasOwnProperty.call(_gthis.bytesTotalCache.h,name[0])) {
								_gthis.bytesTotalCache.h[name[0]] = total;
								_gthis.bytesTotal += total - 200;
							}
							if(loaded > total) {
								loaded = total;
							}
							if(!Object.prototype.hasOwnProperty.call(_gthis.bytesLoadedCache2.h,name[0])) {
								_gthis.bytesLoaded += loaded;
							} else {
								_gthis.bytesLoaded += loaded - _gthis.bytesLoadedCache2.h[name[0]];
							}
							_gthis.bytesLoadedCache2.h[name[0]] = loaded;
							if(!_gthis.simulateProgress) {
								_gthis.onProgress.dispatch(_gthis.bytesLoaded,_gthis.bytesTotal);
							}
						}
					};
				})(name)).onComplete((function(name) {
					return function(library) {
						var total = 200;
						if(Object.prototype.hasOwnProperty.call(_gthis.bytesTotalCache.h,name[0])) {
							total = _gthis.bytesTotalCache.h[name[0]];
						}
						if(!Object.prototype.hasOwnProperty.call(_gthis.bytesLoadedCache2.h,name[0])) {
							_gthis.bytesLoaded += total;
						} else {
							_gthis.bytesLoaded += total - _gthis.bytesLoadedCache2.h[name[0]];
						}
						_gthis.loadedAssetLibrary(name[0]);
					};
				})(name)).onError((function() {
					return function(e) {
						lime_utils_Log.error(e,{ fileName : "lime/utils/Preloader.hx", lineNumber : 293, className : "lime.utils.Preloader", methodName : "updateProgress"});
					};
				})());
			}
		}
		if(!this.simulateProgress && this.loadedLibraries == this.libraries.length + this.libraryNames.length) {
			if(!this.preloadComplete) {
				this.preloadComplete = true;
				lime_utils_Log.verbose("Preload complete",{ fileName : "lime/utils/Preloader.hx", lineNumber : 306, className : "lime.utils.Preloader", methodName : "updateProgress"});
			}
			this.start();
		}
	}
	,__class__: lime_utils_Preloader
};
var peote_view_BufferInterface = function() { };
$hxClasses["peote.view.BufferInterface"] = peote_view_BufferInterface;
peote_view_BufferInterface.__name__ = true;
peote_view_BufferInterface.__isInterface__ = true;
peote_view_BufferInterface.prototype = {
	__class__: peote_view_BufferInterface
};
var peote_view_Buffer_$Bulby = function(minSize,growSize,autoShrink) {
	if(autoShrink == null) {
		autoShrink = false;
	}
	if(growSize == null) {
		growSize = 0;
	}
	this._shrinkAtSize = 0;
	this._growSize = 0;
	this._maxElements = 0;
	this._glVAO = null;
	this._glInstanceBuffer = null;
	this._gl = null;
	if(minSize <= 0) {
		throw haxe_Exception.thrown("Error: Buffer need a minimum size of 1 to store an Element.");
	}
	this._minSize = minSize;
	this._growSize = growSize < 0 ? 0 : growSize;
	if(autoShrink) {
		this._shrinkAtSize = growSize + (growSize / 2 | 0);
	}
	var this1 = new Array(this._minSize);
	this._elements = this1;
	if(peote_view_Version.isINSTANCED) {
		if(Bulby.instanceBytes == null) {
			Bulby.instanceBytes = new peote_view_utils_BufferBytes(new ArrayBuffer(12));
			Bulby.instanceBytes.b[0] = 1;
			Bulby.instanceBytes.b[1] = 1;
			Bulby.instanceBytes.b[2] = 1;
			Bulby.instanceBytes.b[3] = 1;
			Bulby.instanceBytes.b[4] = 0;
			Bulby.instanceBytes.b[5] = 1;
			Bulby.instanceBytes.b[6] = 1;
			Bulby.instanceBytes.b[7] = 0;
			Bulby.instanceBytes.b[8] = 0;
			Bulby.instanceBytes.b[9] = 0;
			Bulby.instanceBytes.b[10] = 0;
			Bulby.instanceBytes.b[11] = 0;
		}
		this._elemBuffSize = 20;
	} else {
		this._elemBuffSize = 120;
	}
	this._bytes = new peote_view_utils_BufferBytes(new ArrayBuffer(this._elemBuffSize * this._minSize));
	this._bytes.fill(0,this._elemBuffSize * this._minSize,0);
};
$hxClasses["peote.view.Buffer_Bulby"] = peote_view_Buffer_$Bulby;
peote_view_Buffer_$Bulby.__name__ = true;
peote_view_Buffer_$Bulby.__interfaces__ = [peote_view_BufferInterface];
peote_view_Buffer_$Bulby.prototype = {
	setNewGLContext: function(newGl) {
		if(newGl != null && newGl != this._gl) {
			if(this._gl != null) {
				this._gl.deleteBuffer(this._glBuffer);
				if(peote_view_Version.isINSTANCED) {
					this._gl.deleteBuffer(this._glInstanceBuffer);
				}
				if(peote_view_Version.isVAO) {
					this._gl.deleteVertexArray(this._glVAO);
				}
			}
			this._gl = newGl;
			this._glBuffer = this._gl.createBuffer();
			this._gl.bindBuffer(this._gl.ARRAY_BUFFER,this._glBuffer);
			var size = this._bytes.length;
			var bytes = this._bytes;
			var this1 = new Uint8Array(bytes.b.bufferValue,0);
			this._gl.bufferData(this._gl.ARRAY_BUFFER,this1,this._gl.STREAM_DRAW);
			this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);
			if(peote_view_Version.isINSTANCED) {
				this._glInstanceBuffer = this._gl.createBuffer();
				var gl = this._gl;
				gl.bindBuffer(gl.ARRAY_BUFFER,this._glInstanceBuffer);
				var size = Bulby.instanceBytes.length;
				var bytes = Bulby.instanceBytes;
				var this1 = new Uint8Array(bytes.b.bufferValue,0);
				gl.bufferData(gl.ARRAY_BUFFER,this1,gl.STATIC_DRAW);
				gl.bindBuffer(gl.ARRAY_BUFFER,null);
			}
			if(peote_view_Version.isVAO) {
				this._glVAO = this._gl.createVertexArray();
				this._gl.bindVertexArray(this._glVAO);
				if(peote_view_Version.isINSTANCED) {
					var gl = this._gl;
					var glBuffer = this._glBuffer;
					gl.bindBuffer(gl.ARRAY_BUFFER,this._glInstanceBuffer);
					gl.enableVertexAttribArray(0);
					gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,2,0);
					gl.bindBuffer(gl.ARRAY_BUFFER,glBuffer);
					gl.enableVertexAttribArray(1);
					gl.vertexAttribPointer(1,4,gl.FLOAT,false,20,0);
					gl.vertexAttribDivisor(1,1);
					gl.enableVertexAttribArray(2);
					gl.vertexAttribPointer(2,1,gl.SHORT,false,20,16);
					gl.vertexAttribDivisor(2,1);
				} else {
					var gl = this._gl;
					gl.bindBuffer(gl.ARRAY_BUFFER,this._glBuffer);
					gl.enableVertexAttribArray(1);
					gl.vertexAttribPointer(1,4,gl.FLOAT,false,20,0);
					gl.enableVertexAttribArray(2);
					gl.vertexAttribPointer(2,1,gl.SHORT,false,20,16);
					gl.enableVertexAttribArray(0);
					gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,20,18);
				}
				this._gl.bindVertexArray(null);
			}
		}
	}
	,updateElement: function(element) {
		if(peote_view_Version.isINSTANCED) {
			var bytes = this._bytes;
			bytes.b_UFloat32[element.bytePos >> 2] = element.timeXStart;
			bytes.b_UFloat32[element.bytePos + 4 >> 2] = element.timeXDuration;
			bytes.b_UFloat32[element.bytePos + 8 >> 2] = element.timeYStart;
			bytes.b_UFloat32[element.bytePos + 12 >> 2] = element.timeYDuration;
			bytes.b_Uint16[element.bytePos + 16 >> 1] = element.tile & 65535;
		} else {
			var bytes = this._bytes;
			bytes.b_UFloat32[element.bytePos >> 2] = element.timeXStart;
			bytes.b_UFloat32[element.bytePos + 4 >> 2] = element.timeXDuration;
			bytes.b_UFloat32[element.bytePos + 8 >> 2] = element.timeYStart;
			bytes.b_UFloat32[element.bytePos + 12 >> 2] = element.timeYDuration;
			bytes.b_Uint16[element.bytePos + 16 >> 1] = element.tile & 65535;
			bytes.b[element.bytePos + 18] = 1;
			bytes.b[element.bytePos + 19] = 1;
			bytes.b_UFloat32[element.bytePos + 20 >> 2] = element.timeXStart;
			bytes.b_UFloat32[element.bytePos + 24 >> 2] = element.timeXDuration;
			bytes.b_UFloat32[element.bytePos + 28 >> 2] = element.timeYStart;
			bytes.b_UFloat32[element.bytePos + 32 >> 2] = element.timeYDuration;
			bytes.b_Uint16[element.bytePos + 36 >> 1] = element.tile & 65535;
			bytes.b[element.bytePos + 38] = 1;
			bytes.b[element.bytePos + 39] = 1;
			bytes.b_UFloat32[element.bytePos + 40 >> 2] = element.timeXStart;
			bytes.b_UFloat32[element.bytePos + 44 >> 2] = element.timeXDuration;
			bytes.b_UFloat32[element.bytePos + 48 >> 2] = element.timeYStart;
			bytes.b_UFloat32[element.bytePos + 52 >> 2] = element.timeYDuration;
			bytes.b_Uint16[element.bytePos + 56 >> 1] = element.tile & 65535;
			bytes.b[element.bytePos + 58] = 0;
			bytes.b[element.bytePos + 59] = 1;
			bytes.b_UFloat32[element.bytePos + 60 >> 2] = element.timeXStart;
			bytes.b_UFloat32[element.bytePos + 64 >> 2] = element.timeXDuration;
			bytes.b_UFloat32[element.bytePos + 68 >> 2] = element.timeYStart;
			bytes.b_UFloat32[element.bytePos + 72 >> 2] = element.timeYDuration;
			bytes.b_Uint16[element.bytePos + 76 >> 1] = element.tile & 65535;
			bytes.b[element.bytePos + 78] = 1;
			bytes.b[element.bytePos + 79] = 0;
			bytes.b_UFloat32[element.bytePos + 80 >> 2] = element.timeXStart;
			bytes.b_UFloat32[element.bytePos + 84 >> 2] = element.timeXDuration;
			bytes.b_UFloat32[element.bytePos + 88 >> 2] = element.timeYStart;
			bytes.b_UFloat32[element.bytePos + 92 >> 2] = element.timeYDuration;
			bytes.b_Uint16[element.bytePos + 96 >> 1] = element.tile & 65535;
			bytes.b[element.bytePos + 98] = 0;
			bytes.b[element.bytePos + 99] = 0;
			bytes.b_UFloat32[element.bytePos + 100 >> 2] = element.timeXStart;
			bytes.b_UFloat32[element.bytePos + 104 >> 2] = element.timeXDuration;
			bytes.b_UFloat32[element.bytePos + 108 >> 2] = element.timeYStart;
			bytes.b_UFloat32[element.bytePos + 112 >> 2] = element.timeYDuration;
			bytes.b_Uint16[element.bytePos + 116 >> 1] = element.tile & 65535;
			bytes.b[element.bytePos + 118] = 0;
			bytes.b[element.bytePos + 119] = 0;
		}
		if(element.bytePos == -1) {
			throw haxe_Exception.thrown("Error, Element is not added to Buffer");
		}
		if(this._gl != null) {
			var gl = this._gl;
			var elemBuffSize = this._elemBuffSize;
			gl.bindBuffer(gl.ARRAY_BUFFER,this._glBuffer);
			gl.bufferSubData(gl.ARRAY_BUFFER,element.bytePos,element.bufferPointer);
			gl.bindBuffer(gl.ARRAY_BUFFER,null);
		}
	}
	,addElement: function(element) {
		if(element.bytePos == -1) {
			if(this._maxElements == this._elements.length) {
				if(this._growSize == 0) {
					throw haxe_Exception.thrown("Error: Can't add new Element. Buffer is full and automatic growing Buffersize is disabled.");
				}
				var newSize = this._maxElements + this._growSize;
				var _newBytes = new peote_view_utils_BufferBytes(new ArrayBuffer(this._elemBuffSize * newSize));
				_newBytes.blit(0,this._bytes,0,this._elemBuffSize * this._maxElements);
				this._bytes = _newBytes;
				var this1 = new Array(newSize);
				var _newElements = this1;
				var _g = 0;
				var _g1 = this._maxElements;
				while(_g < _g1) {
					var i = _g++;
					var element1 = this._elements[i];
					var bytes = this._bytes;
					var offset = element1.bytePos;
					var size = this._elemBuffSize;
					if(size == null) {
						size = 0;
					}
					if(offset == null) {
						offset = 0;
					}
					var this1;
					if(size > 0) {
						this1 = new Uint8Array(bytes.b.bufferValue,offset,size);
					} else {
						this1 = new Uint8Array(bytes.b.bufferValue,offset);
					}
					element1.bufferPointer = this1;
					_newElements[i] = element1;
				}
				this._elements = _newElements;
				if(this._gl != null) {
					this._gl.deleteBuffer(this._glBuffer);
					this._glBuffer = this._gl.createBuffer();
					this._gl.bindBuffer(this._gl.ARRAY_BUFFER,this._glBuffer);
					var size = this._bytes.length;
					var bytes = this._bytes;
					var this1 = new Uint8Array(bytes.b.bufferValue,0);
					this._gl.bufferData(this._gl.ARRAY_BUFFER,this1,this._gl.STREAM_DRAW);
					this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);
					if(peote_view_Version.isVAO) {
						this._gl.bindVertexArray(this._glVAO);
						if(peote_view_Version.isINSTANCED) {
							var gl = this._gl;
							var glBuffer = this._glBuffer;
							gl.bindBuffer(gl.ARRAY_BUFFER,this._glInstanceBuffer);
							gl.enableVertexAttribArray(0);
							gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,2,0);
							gl.bindBuffer(gl.ARRAY_BUFFER,glBuffer);
							gl.enableVertexAttribArray(1);
							gl.vertexAttribPointer(1,4,gl.FLOAT,false,20,0);
							gl.vertexAttribDivisor(1,1);
							gl.enableVertexAttribArray(2);
							gl.vertexAttribPointer(2,1,gl.SHORT,false,20,16);
							gl.vertexAttribDivisor(2,1);
						} else {
							var gl = this._gl;
							gl.bindBuffer(gl.ARRAY_BUFFER,this._glBuffer);
							gl.enableVertexAttribArray(1);
							gl.vertexAttribPointer(1,4,gl.FLOAT,false,20,0);
							gl.enableVertexAttribArray(2);
							gl.vertexAttribPointer(2,1,gl.SHORT,false,20,16);
							gl.enableVertexAttribArray(0);
							gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,20,18);
						}
						this._gl.bindVertexArray(null);
					}
				}
			}
			element.bytePos = this._maxElements * this._elemBuffSize;
			var bytes = this._bytes;
			var offset = element.bytePos;
			var size = this._elemBuffSize;
			if(size == null) {
				size = 0;
			}
			if(offset == null) {
				offset = 0;
			}
			var this1;
			if(size > 0) {
				this1 = new Uint8Array(bytes.b.bufferValue,offset,size);
			} else {
				this1 = new Uint8Array(bytes.b.bufferValue,offset);
			}
			element.bufferPointer = this1;
			this._elements[this._maxElements++] = element;
			this.updateElement(element);
		} else {
			throw haxe_Exception.thrown("Error: Element is already inside a Buffer");
		}
	}
	,getVertexShader: function() {
		return "\n\t::if isES3::#version 300 es::end::\n\t::if VERTEX_INT_PRECISION::precision ::VERTEX_INT_PRECISION:: int; ::end::\n\t::if VERTEX_FLOAT_PRECISION::precision ::VERTEX_FLOAT_PRECISION:: float; ::end::\n\t::if VERTEX_SAMPLER_PRECISION::precision ::VERTEX_SAMPLER_PRECISION:: sampler2D; ::end::\n\t\n\t// Uniforms -------------------------\n\t::if (!isPICKING && isUBO)::\n\t//layout(std140) uniform uboView\n\tuniform uboView\n\t{\n\t\tvec2 uResolution;\n\t\tvec2 uViewOffset;\n\t\tvec2 uViewZoom;\n\t};\n\t//layout(std140) uniform uboDisplay\n\tuniform uboDisplay\n\t{\n\t\tvec2 uOffset;\n\t\tvec2 uZoom;\n\t};\n\t::else::\n\tuniform vec2 uResolution;\n\tuniform vec2 uOffset;\n\tuniform vec2 uZoom;\n\t::end::\n\t\n\tuniform float uTime;\n\t\n\t// Attributes -------------------------\n\t::IN:: vec2 aPosition;\n\t\n\t::if isPICKING::\n\t\t::if !isINSTANCED::\n\t\t\t::IN:: vec4 aElement;\n\t\t::end::\n\t::end::\n\t\n\t\n\t\n\t::IN:: vec4 aTime0;\n\t\n\t\n\t\n\t\n\t\n\t::IN:: float aShort0;\n\t\n\t// Varyings ---------------------------\n\t::if isPICKING::\n\t\t::if isINSTANCED::\n\t\t\tflat ::VAROUT:: int vElement;\n\t\t::else::\n\t\t\t::VAROUT:: vec4 vElement;\n\t\t::end::\n\t::end::\n\t\n\t\n\t\n\t\n\t::if (hasTEXTURES || hasFRAGMENT_INJECTION)::\n\t\t::VAROUT:: vec2 vTexCoord;\n\t\t::if isES3::flat ::end:: ::VAROUT:: float vTexPack0;\n\t::end::\t\n\n\t// custom functions -------------------\n\t::VERTEX_INJECTION::\n\n\t// --------- vertex main --------------\n\tvoid main(void)\n\t{\n\t\tfloat time0 = 1.0 - abs(mix( -1.0, 1.0, fract((uTime - aTime0.x) / max(aTime0.y * 2.0, 0.000001)))); float time1 = 1.0 - abs(mix( -1.0, 1.0, fract((uTime - aTime0.z) / max(aTime0.w * 2.0, 0.000001)))); \n\t\tvec2 size = ::if SIZE_FORMULA::::SIZE_FORMULA::::else::vec2( 512.0, 512.0 )::end::;\n\t\t\t\t\n\t\t\n\t\tvec2 pos = ::if POS_FORMULA::::POS_FORMULA::::else::vec2((0.0)+((800.0)-(512.0)-(0.0))*time0, (0.0)+((600.0)-(512.0)-(0.0))*time1*time1)::end::;\npos = pos + aPosition * size;\n\t\t\n\n\t\t\n\n\t\t::if (hasTEXTURES || hasFRAGMENT_INJECTION)::\n\t\t\tvTexCoord = aPosition;\t\t\t\n\t\t\tvTexPack0 = ::if FORMULA_VARYINGS.tile::::FORMULA_VARYINGS.tile::::else::aShort0::end::;\n\t\t::end::\n\t\t\n\t\t::if isPICKING::\n\t\t\t::if isINSTANCED::\n\t\t\t\tvElement = gl_InstanceID + 1;\n\t\t\t::else::\n\t\t\t\tvElement = aElement;\n\t\t\t::end::\n\t\t::end::\n\t\t\n\t\tfloat width = uResolution.x;\n\t\tfloat height = uResolution.y;\n\t\t::if (!isPICKING && isUBO)::\n\t\tfloat deltaX = (uOffset.x  + uViewOffset.x) / uZoom.x;\n\t\tfloat deltaY = (uOffset.y  + uViewOffset.y) / uZoom.y;\n\t\tvec2 zoom = uZoom * uViewZoom;\n\t\t::else::\n\t\tfloat deltaX = uOffset.x;\n\t\tfloat deltaY = uOffset.y;\n\t\tvec2 zoom = uZoom;\n\t\t::end::\n\t\t\n\t\t::if isPIXELSNAPPING::\n\t\tpos = floor( pos * ::PIXELDIVISOR:: * zoom ) / ::PIXELDIVISOR:: / zoom;\n\t\t::end::\n\t\t\n\t\tgl_Position = vec4 (\n\t\t\t 2.0 * zoom.x/width  * (pos.x + deltaX) - 1.0,\n\t\t\t-2.0 * zoom.y/height * (pos.y + deltaY) + 1.0,\n\t\t\t- 0.0,\n\t\t\t1.0\n\t\t);\t\t\n\t\t\n\t}\n\t";
	}
	,getFragmentShader: function() {
		return "\n\t::if isES3::#version 300 es::end::\n\t::foreach FRAGMENT_EXTENSIONS::#extension ::EXTENSION:: : enable\n\t::end::\n\t\n\t::if FRAGMENT_INT_PRECISION::precision ::FRAGMENT_INT_PRECISION:: int; ::end::\n\t::if FRAGMENT_FLOAT_PRECISION::precision ::FRAGMENT_FLOAT_PRECISION:: float; ::end::\n\t::if FRAGMENT_SAMPLER_PRECISION::precision ::FRAGMENT_SAMPLER_PRECISION:: sampler2D; ::end::\n\t\n\t// Uniforms -------------------------\t\n\t::FRAGMENT_PROGRAM_UNIFORMS::\n\t\n\t// Varyings ---------------------------\n\t::if isPICKING::\n\t\t::if isINSTANCED::\n\t\t\tflat ::VARIN:: int vElement;\n\t\t::else::\n\t\t\t::VARIN:: vec4 vElement;\n\t\t::end::\n\t::end::\n\n\t\n\t\n\t\t\t\n\t::if (hasTEXTURES || hasFRAGMENT_INJECTION)::\n\t\t::VARIN:: vec2 vTexCoord;\n\t\t::if isES3::flat ::end:: ::VARIN:: float vTexPack0;\n\t::end::\t\n\t\n\t\n\t::if isES3::\n\t\t::if (isPICKING && isINSTANCED)::\n\t\t\tout int Color;\n\t\t::else::\n\t\t\tout vec4 Color;\n\t\t::end::\n\t::end::\n\n\t::if hasTEXTURE_FUNCTIONS::\n\t\t// function to get texture color\n\t\tvec4 getTextureColor(int TXTNUM, vec2 vTexCoord) {\n\t\t::foreach TEXTURES::\n\t\t\t\n\t\t\t::if (LAYER >= 0)::\n\t\t\t::if USED_ID::\n\t\t\t\tif (TXTNUM == ::LAYER::) {\n\t\t\t\t\t::foreach UNITS::\n\t\t\t\t\t::if !FIRST ::else ::end::::if !LAST ::if (0.0 < ::UNIT_VALUE::)::end::\n\t\t\t\t\t\treturn(texture::if !isES3::2D::end::(::TEXTURE::, vec2(vTexCoord.x * ::SLOTS_WIDTH:: / ::TILES_X:: + floor(mod(vTexPack0, ::TILES_X::)) * ::SLOTS_WIDTH:: / ::TILES_X::, vTexCoord.y * ::SLOTS_HEIGHT:: / ::TILES_Y:: + floor(floor(vTexPack0) / ::TILES_X::) * ::SLOTS_HEIGHT:: / ::TILES_Y::)));\n\t\t\t\t\t::end::\n\t\t\t\t}\n\t\t\t::end::\n\t\t\t::end::\n\t\t\t\n\t\t::end::\n\t\t// default values:\n\t\t::foreach TEXTURE_DEFAULTS::\n\t\t\tif (TXTNUM == ::LAYER::) {return(::DEFAULT_VALUE::);}\t\t\n\t\t::end::\n\t\t}\n\t::else:: \n\t\t::if hasFRAGMENT_INJECTION::#define getTextureColor(a,b) vec4(0.0,0.0,0.0,0.0)::end::\n\t::end::\n\n\t::if hasTEXTURE_FUNCTIONS::\n\t\t// function to get full texture size\n\t\tvec2 getTextureResolution(int TXTNUM) {\n\t\t::foreach TEXTURES::\n\t\t\t\n\t\t\t::if (LAYER >= 0)::\n\t\t\t::if USED_ID::\n\t\t\t\tif (TXTNUM == ::LAYER::) {\n\t\t\t\t\t::foreach UNITS::\n\t\t\t\t\t::if !FIRST ::else ::end::::if !LAST ::if (0.0 < ::UNIT_VALUE::)::end::\n\t\t\t\t\t\treturn( vec2(::TEXTURE_WIDTH::, ::TEXTURE_HEIGHT::) );\n\t\t\t\t\t::end::\n\t\t\t\t}\n\t\t\t::end::\n\t\t\t::end::\n\t\t\t\n\t\t::end::\n\t\t// default values:\n\t\t::foreach TEXTURE_DEFAULTS::\n\t\t\tif (TXTNUM == ::LAYER::) {return(vec2(0.0,0.0));}\t\t\n\t\t::end::\n\t\t}\n\t::else:: \n\t\t::if hasFRAGMENT_INJECTION::#define getTextureResolution(a) vec2(0.0,0.0)::end::\n\t::end::\n\n\t// custom functions -------------------\n\t::FRAGMENT_INJECTION::\n\t\n\t// --------- fragment main ------------\n\tvoid main(void)\n\t{\t\n\t\t\n\t\t\n\t\t::if hasTEXTURES::\n\t\t\t::foreach TEXTURES::\n\t\t\t\t// ------------- LAYER ::LAYER:: --------------\n\t\t\t\t\n\t\t\t\t::if (LAYER >= 0)::\n\t\t\t\t::if USED::\n\t\t\t\t\tvec4 t::LAYER::;\n\t\t\t\t\t::foreach UNITS::\n\t\t\t\t\t::if !FIRST ::else ::end::::if !LAST ::if (0.0 < ::UNIT_VALUE::)::end::\n\t\t\t\t\t\tt::LAYER:: = texture::if !isES3::2D::end::(::TEXTURE::, vec2(vTexCoord.x * ::SLOTS_WIDTH:: / ::TILES_X:: + floor(mod(vTexPack0, ::TILES_X::)) * ::SLOTS_WIDTH:: / ::TILES_X::, vTexCoord.y * ::SLOTS_HEIGHT:: / ::TILES_Y:: + floor(floor(vTexPack0) / ::TILES_X::) * ::SLOTS_HEIGHT:: / ::TILES_Y::));\n\t\t\t\t\t::end::\n\t\t\t\t::end::\n\t\t\t\t::end::\n\t\t\t\t\n\t\t\t::end::\n\t\t::end::\n\t\t\n\t\t// calc final color from all layers\n\t\tvec4 col = ::FRAGMENT_CALC_LAYER::;\n\t\t\n\t\t::if isDISCARD:: \n\t\t\tif (col.a <= ::DISCARD::) discard;\n\t\t::end::\n\t\t\n\t\t::if isPICKING::\n\t\t\t::if !isES3::gl_Frag::end::Color = vElement;\n\t\t::else::\n\t\t\t::if !isES3::gl_Frag::end::Color = col;\n\t\t\t// this fixing problem on old FF if alpha goes zero\n\t\t\t::if !isES3::gl_Frag::end::Color.w = clamp(::if !isES3::gl_Frag::end::Color.w, 0.003, 1.0);\n\t\t::end::\n\t}\n\t";
	}
	,getTextureIdentifiers: function() {
		return [];
	}
	,getColorIdentifiers: function() {
		return [];
	}
	,getCustomIdentifiers: function() {
		return [];
	}
	,getCustomVaryings: function() {
		return [];
	}
	,getDefaultColorFormula: function() {
		return "";
	}
	,getDefaultFormulaVars: function() {
		return Bulby.DEFAULT_FORMULA_VARS;
	}
	,getFormulas: function() {
		return Bulby.FORMULAS;
	}
	,getAttributes: function() {
		return Bulby.ATTRIBUTES;
	}
	,getFormulaNames: function() {
		return Bulby.FORMULA_NAMES;
	}
	,getFormulaVaryings: function() {
		if(Bulby.FORMULA_VARYINGS == "") {
			return [];
		} else {
			return Bulby.FORMULA_VARYINGS.split(",");
		}
	}
	,getFormulaConstants: function() {
		if(Bulby.FORMULA_CONSTANTS == "") {
			return [];
		} else {
			return Bulby.FORMULA_CONSTANTS.split(",");
		}
	}
	,getMaxZindex: function() {
		return 2097151;
	}
	,hasAlpha: function() {
		return false;
	}
	,hasZindex: function() {
		return false;
	}
	,hasPicking: function() {
		return false;
	}
	,needFragmentPrecision: function() {
		return true;
	}
	,bindAttribLocations: function(gl,glProgram) {
		if(peote_view_Version.isINSTANCED) {
			gl.bindAttribLocation(glProgram,1,"aTime0");
			gl.bindAttribLocation(glProgram,2,"aShort0");
			gl.bindAttribLocation(glProgram,0,"aPosition");
		} else {
			gl.bindAttribLocation(glProgram,1,"aTime0");
			gl.bindAttribLocation(glProgram,2,"aShort0");
			gl.bindAttribLocation(glProgram,0,"aPosition");
		}
	}
	,render: function(peoteView,display,program) {
		var toElement = this._maxElements;
		if(peote_view_Version.isINSTANCED) {
			if(peote_view_Version.isVAO) {
				this._gl.bindVertexArray(this._glVAO);
			} else {
				var gl = this._gl;
				var glBuffer = this._glBuffer;
				gl.bindBuffer(gl.ARRAY_BUFFER,this._glInstanceBuffer);
				gl.enableVertexAttribArray(0);
				gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,2,0);
				gl.bindBuffer(gl.ARRAY_BUFFER,glBuffer);
				gl.enableVertexAttribArray(1);
				gl.vertexAttribPointer(1,4,gl.FLOAT,false,20,0);
				gl.vertexAttribDivisor(1,1);
				gl.enableVertexAttribArray(2);
				gl.vertexAttribPointer(2,1,gl.SHORT,false,20,16);
				gl.vertexAttribDivisor(2,1);
			}
			this._gl.drawArraysInstanced(this._gl.TRIANGLE_STRIP,0,6,toElement);
			if(peote_view_Version.isVAO) {
				this._gl.bindVertexArray(null);
			} else {
				var gl = this._gl;
				gl.disableVertexAttribArray(0);
				gl.disableVertexAttribArray(1);
				gl.disableVertexAttribArray(2);
			}
			this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);
		} else {
			if(peote_view_Version.isVAO) {
				this._gl.bindVertexArray(this._glVAO);
			} else {
				var gl = this._gl;
				gl.bindBuffer(gl.ARRAY_BUFFER,this._glBuffer);
				gl.enableVertexAttribArray(1);
				gl.vertexAttribPointer(1,4,gl.FLOAT,false,20,0);
				gl.enableVertexAttribArray(2);
				gl.vertexAttribPointer(2,1,gl.SHORT,false,20,16);
				gl.enableVertexAttribArray(0);
				gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,20,18);
			}
			this._gl.drawArrays(this._gl.TRIANGLE_STRIP,0,toElement * 6);
			if(peote_view_Version.isVAO) {
				this._gl.bindVertexArray(null);
			} else {
				var gl = this._gl;
				gl.disableVertexAttribArray(0);
				gl.disableVertexAttribArray(1);
				gl.disableVertexAttribArray(2);
			}
			this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);
		}
	}
	,__class__: peote_view_Buffer_$Bulby
};
var peote_view_Display = function(x,y,width,height,color) {
	if(color == null) {
		color = 0;
	}
	this.renderFramebufferFrame = 0;
	this.renderFramebufferSkipFrames = 0;
	this._renderFramebufferEnabled = false;
	this.framebufferTextureSlot = 0;
	this.fbTexture = null;
	this.gl = null;
	this.peoteView = null;
	this.alpha = 1.0;
	this.blue = 0.0;
	this.green = 0.0;
	this.red = 0.0;
	this.backgroundEnabled = false;
	this.backgroundDepth = false;
	this.backgroundAlpha = false;
	this.isVisible = true;
	this.yz = 1.0;
	this.xz = 1.0;
	this.yOffset = 0;
	this.xOffset = 0;
	this.y = 0;
	this.x = 0;
	this.height = 0;
	this.width = 0;
	if(peote_view_Version.isUBO) {
		var _this = this.uniformBuffer;
		var gl = this.gl;
		if(gl != null) {
			_this.uniformBytes.b_UFloat32[0] = x + this.xOffset;
			gl.bindBuffer(gl.UNIFORM_BUFFER,_this.uniformBuffer);
			gl.bufferSubData(gl.UNIFORM_BUFFER,0,_this.xOffestBufferPointer);
			gl.bindBuffer(gl.UNIFORM_BUFFER,null);
		}
	}
	this.x = x;
	if(peote_view_Version.isUBO) {
		var _this = this.uniformBuffer;
		var gl = this.gl;
		if(gl != null) {
			_this.uniformBytes.b_UFloat32[1] = y + this.yOffset;
			gl.bindBuffer(gl.UNIFORM_BUFFER,_this.uniformBuffer);
			gl.bufferSubData(gl.UNIFORM_BUFFER,4,_this.yOffestBufferPointer);
			gl.bindBuffer(gl.UNIFORM_BUFFER,null);
		}
	}
	this.y = y;
	this.width = width;
	this.height = height;
	this.red = (color >> 24 & 255) / 255.0;
	this.green = (color >> 16 & 255) / 255.0;
	this.blue = (color >> 8 & 255) / 255.0;
	this.alpha = (color & 255) / 255.0;
	this.backgroundEnabled = this.alpha > 0.0;
	this.backgroundAlpha = this.alpha < 1.0;
	this.programList = new peote_view_utils_RenderList_$peote_$view_$Program(new haxe_ds_ObjectMap());
	if(peote_view_Version.isUBO) {
		this.uniformBuffer = new peote_view_UniformBufferDisplay();
		this.uniformBufferFB = new peote_view_UniformBufferDisplay();
		this.uniformBufferViewFB = new peote_view_UniformBufferView();
	}
};
$hxClasses["peote.view.Display"] = peote_view_Display;
peote_view_Display.__name__ = true;
peote_view_Display.prototype = {
	addToPeoteView: function(peoteView,atDisplay,addBefore) {
		if(addBefore == null) {
			addBefore = false;
		}
		if(this.peoteView != peoteView) {
			this.peoteView = peoteView;
			this.setNewGLContext(peoteView.gl);
		}
		peoteView.displayList.add(this,atDisplay,addBefore);
	}
	,setNewGLContext: function(newGl) {
		if(newGl != null && newGl != this.gl) {
			if(this.gl != null) {
				if(peote_view_Version.isUBO) {
					this.uniformBuffer.deleteGLBuffer(this.gl);
					this.uniformBufferFB.deleteGLBuffer(this.gl);
					this.uniformBufferViewFB.deleteGLBuffer(this.gl);
				}
			}
			this.gl = newGl;
			if(peote_view_Version.isUBO) {
				this.uniformBuffer.createGLBuffer(this.gl,this.x + this.xOffset,this.y + this.yOffset,this.xz,this.yz);
				this.uniformBufferFB.createGLBuffer(this.gl,this.xOffset,this.yOffset - this.height,this.xz,this.yz);
				this.uniformBufferViewFB.createGLBuffer(this.gl,this.width,-this.height,0.0,0.0,1.0,1.0);
			}
			var _g_item = this.programList.first;
			while(_g_item != null) {
				var value = _g_item.value;
				_g_item = _g_item.next;
				var program = value;
				if(newGl != null && newGl != program.gl) {
					var _g = 0;
					var _g1 = program.displays;
					while(_g < _g1.length) {
						var d = _g1[_g];
						++_g;
						if(d.gl != null && d.gl != newGl) {
							throw haxe_Exception.thrown("Error, program can not used inside different gl-contexts");
						}
					}
					if(program.gl != null) {
						program.gl.deleteShader(program.glVertexShader);
						program.gl.deleteShader(program.glFragmentShader);
						program.gl.deleteProgram(program.glProgram);
						if(program.buffer.hasPicking()) {
							program.gl.deleteShader(program.glVertexShaderPicking);
							program.gl.deleteShader(program.glFragmentShaderPicking);
							program.gl.deleteProgram(program.glProgramPicking);
						}
					}
					program.gl = newGl;
					if(peote_view_Version.isES3) {
						program.glShaderConfig.isES3 = true;
						program.glShaderConfig.IN = "in";
						program.glShaderConfig.VARIN = "in";
						program.glShaderConfig.VAROUT = "out";
					}
					if(peote_view_Version.isUBO) {
						program.glShaderConfig.isUBO = true;
					}
					if(peote_view_Version.isINSTANCED) {
						program.glShaderConfig.isINSTANCED = true;
					}
					program.glShaderConfig.FRAGMENT_EXTENSIONS = [];
					if(program.gl.getExtension("OES_standard_derivatives") != null) {
						program.glShaderConfig.FRAGMENT_EXTENSIONS.push({ EXTENSION : "GL_OES_standard_derivatives"});
					}
					if(program.gl.getExtension("EXT_color_buffer_float") != null) {
						program.glShaderConfig.FRAGMENT_EXTENSIONS.push({ EXTENSION : "EXT_color_buffer_float"});
					} else if(program.gl.getExtension("OES_texture_float") != null) {
						program.glShaderConfig.FRAGMENT_EXTENSIONS.push({ EXTENSION : "OES_texture_float"});
					}
					program.buffer.setNewGLContext(program.gl);
					program.createProg();
					if(program.buffer.hasPicking()) {
						program.createProg(true);
					}
					var _g2 = 0;
					var _g3 = program.activeTextures;
					while(_g2 < _g3.length) {
						var t = _g3[_g2];
						++_g2;
						var newGl1 = program.gl;
						if(newGl1 != null && newGl1 != t.gl) {
							var _g4 = 0;
							var _g5 = t.programs;
							while(_g4 < _g5.length) {
								var p = _g5[_g4];
								++_g4;
								if(p.gl != null && p.gl != newGl1) {
									throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
								}
							}
							var _g6 = 0;
							var _g7 = t.displays;
							while(_g6 < _g7.length) {
								var d1 = _g7[_g6];
								++_g6;
								if(d1.gl != null && d1.gl != newGl1) {
									throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
								}
							}
							if(t.gl != null) {
								t.gl.deleteTexture(t.glTexture);
								t.glTexture = null;
								if(t.displays.length == 0 && t.framebuffer != null) {
									t.gl.deleteFramebuffer(t.framebuffer);
									t.framebuffer = null;
									if(t.glDepthBuffer != null) {
										t.gl.deleteRenderbuffer(t.glDepthBuffer);
									}
									t.glDepthBuffer = null;
								}
							}
							t.gl = newGl1;
							if(t.width > t.gl.getParameter(t.gl.MAX_TEXTURE_SIZE) || t.height > t.gl.getParameter(t.gl.MAX_TEXTURE_SIZE)) {
								throw haxe_Exception.thrown("Error, texture size is greater then gl.MAX_TEXTURE_SIZE");
							}
							t.glTexture = peote_view_utils_TexUtils.createEmptyTexture(t.gl,t.width,t.height,t.colorChannels,t.createMipmaps,t.magFilter,t.minFilter,t.useFloat);
							if(t.displays.length > 0 && t.framebuffer == null) {
								t.glDepthBuffer = t.gl.createRenderbuffer();
								var gl = t.gl;
								var texture = t.glTexture;
								var depthBuffer = t.glDepthBuffer;
								var width = t.width;
								var height = t.height;
								var framebuffer = gl.createFramebuffer();
								gl.bindRenderbuffer(gl.RENDERBUFFER,depthBuffer);
								peote_view_utils_GLTool.clearGlErrorQueue(gl);
								gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT24,width,height);
								if(peote_view_utils_GLTool.getLastGlError(gl) == gl.INVALID_ENUM) {
									console.log("peote/view/utils/GLTool.hx:41:","switching to DEPTH_COMPONENT16 for framebuffer");
									gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,width,height);
								}
								gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);
								gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,depthBuffer);
								gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);
								if(gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
									throw haxe_Exception.thrown("Error: Framebuffer not complete!");
								}
								gl.bindFramebuffer(gl.FRAMEBUFFER,null);
								gl.bindRenderbuffer(gl.RENDERBUFFER,null);
								t.framebuffer = framebuffer;
								t.updated = true;
							}
							var image = t.images.keys();
							while(image.hasNext()) {
								var image1 = image.next();
								t.bufferImage(image1,t.images.h[image1.__id__]);
							}
						}
					}
				}
			}
			if(this.fbTexture != null) {
				var _this = this.fbTexture;
				if(newGl != null && newGl != _this.gl) {
					var _g = 0;
					var _g1 = _this.programs;
					while(_g < _g1.length) {
						var p = _g1[_g];
						++_g;
						if(p.gl != null && p.gl != newGl) {
							throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
						}
					}
					var _g = 0;
					var _g1 = _this.displays;
					while(_g < _g1.length) {
						var d = _g1[_g];
						++_g;
						if(d.gl != null && d.gl != newGl) {
							throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
						}
					}
					if(_this.gl != null) {
						_this.gl.deleteTexture(_this.glTexture);
						_this.glTexture = null;
						if(_this.displays.length == 0 && _this.framebuffer != null) {
							_this.gl.deleteFramebuffer(_this.framebuffer);
							_this.framebuffer = null;
							if(_this.glDepthBuffer != null) {
								_this.gl.deleteRenderbuffer(_this.glDepthBuffer);
							}
							_this.glDepthBuffer = null;
						}
					}
					_this.gl = newGl;
					if(_this.width > _this.gl.getParameter(_this.gl.MAX_TEXTURE_SIZE) || _this.height > _this.gl.getParameter(_this.gl.MAX_TEXTURE_SIZE)) {
						throw haxe_Exception.thrown("Error, texture size is greater then gl.MAX_TEXTURE_SIZE");
					}
					_this.glTexture = peote_view_utils_TexUtils.createEmptyTexture(_this.gl,_this.width,_this.height,_this.colorChannels,_this.createMipmaps,_this.magFilter,_this.minFilter,_this.useFloat);
					if(_this.displays.length > 0 && _this.framebuffer == null) {
						_this.glDepthBuffer = _this.gl.createRenderbuffer();
						var gl = _this.gl;
						var texture = _this.glTexture;
						var depthBuffer = _this.glDepthBuffer;
						var width = _this.width;
						var height = _this.height;
						var framebuffer = gl.createFramebuffer();
						gl.bindRenderbuffer(gl.RENDERBUFFER,depthBuffer);
						peote_view_utils_GLTool.clearGlErrorQueue(gl);
						gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT24,width,height);
						if(peote_view_utils_GLTool.getLastGlError(gl) == gl.INVALID_ENUM) {
							console.log("peote/view/utils/GLTool.hx:41:","switching to DEPTH_COMPONENT16 for framebuffer");
							gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,width,height);
						}
						gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);
						gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,depthBuffer);
						gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);
						if(gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
							throw haxe_Exception.thrown("Error: Framebuffer not complete!");
						}
						gl.bindFramebuffer(gl.FRAMEBUFFER,null);
						gl.bindRenderbuffer(gl.RENDERBUFFER,null);
						_this.framebuffer = framebuffer;
						_this.updated = true;
					}
					var image = _this.images.keys();
					while(image.hasNext()) {
						var image1 = image.next();
						_this.bufferImage(image1,_this.images.h[image1.__id__]);
					}
				}
			}
		}
	}
	,addProgram: function(program,atProgram,addBefore) {
		if(addBefore == null) {
			addBefore = false;
		}
		program.addToDisplay(this,atProgram,addBefore);
	}
	,__class__: peote_view_Display
};
var peote_view_PeoteGL = {};
peote_view_PeoteGL.fromRenderContext = function(context) {
	if(context.webgl2 != null) {
		console.log("peote/view/PeoteGL.hx:121:","WEBGL2 detected.");
		peote_view_Version.isUBO = true;
		peote_view_Version.isINSTANCED = true;
		peote_view_Version.isVAO = true;
		peote_view_Version.isES3 = true;
		return context.webgl2;
	} else if(context.webgl != null) {
		console.log("peote/view/PeoteGL.hx:126:","WEBGL1 detected.");
		return context.webgl;
	} else {
		window.alert("Error: missing webgl context");
		return null;
	}
};
var peote_view_Version = function() { };
$hxClasses["peote.view.Version"] = peote_view_Version;
peote_view_Version.__name__ = true;
var peote_view_Precision = function() { };
$hxClasses["peote.view.Precision"] = peote_view_Precision;
peote_view_Precision.__name__ = true;
var peote_view_PeoteView = function($window,color,registerEvents) {
	if(registerEvents == null) {
		registerEvents = true;
	}
	if(color == null) {
		color = 255;
	}
	this.speed = 1.0;
	this.stopTime = 0;
	this.startTime = 0;
	this.isRun = false;
	this.yOffset = 0;
	this.xOffset = 0;
	this.yz = 1.0;
	this.xz = 1.0;
	this.maskState = 0;
	this.glStateDepth = false;
	this.glStateAlpha = false;
	this.colorState = true;
	this.alpha = 1.0;
	this.blue = 0.0;
	this.green = 0.0;
	this.red = 0.0;
	this.gl = peote_view_PeoteGL.fromRenderContext($window.context);
	this.width = $window.__width;
	this.height = $window.__height;
	this.red = (color >> 24 & 255) / 255.0;
	this.green = (color >> 16 & 255) / 255.0;
	this.blue = (color >> 8 & 255) / 255.0;
	this.alpha = (color & 255) / 255.0;
	if(peote_view_Version.isUBO) {
		this.uniformBuffer = new peote_view_UniformBufferView();
		this.uniformBuffer.createGLBuffer(this.gl,this.width,this.height,this.xOffset,this.yOffset,this.xz,this.yz);
	}
	this.maxTextureImageUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
	var this1 = new Array(this.maxTextureImageUnits);
	this.glStateTexture = this1;
	var gl = this.gl;
	var shaderType = gl.VERTEX_SHADER;
	var t = peote_view_Precision.VertexFloat;
	var p = gl.getShaderPrecisionFormat(shaderType,gl.HIGH_FLOAT);
	if(p != null) {
		t.high = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.MEDIUM_FLOAT);
	if(p != null) {
		t.medium = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.LOW_FLOAT);
	if(p != null) {
		t.low = p.precision;
	}
	var shaderType = gl.VERTEX_SHADER;
	var t = peote_view_Precision.VertexInt;
	var p = gl.getShaderPrecisionFormat(shaderType,gl.HIGH_FLOAT);
	if(p != null) {
		t.high = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.MEDIUM_FLOAT);
	if(p != null) {
		t.medium = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.LOW_FLOAT);
	if(p != null) {
		t.low = p.precision;
	}
	var shaderType = gl.VERTEX_SHADER;
	var t = peote_view_Precision.VertexSampler;
	var p = gl.getShaderPrecisionFormat(shaderType,gl.HIGH_FLOAT);
	if(p != null) {
		t.high = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.MEDIUM_FLOAT);
	if(p != null) {
		t.medium = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.LOW_FLOAT);
	if(p != null) {
		t.low = p.precision;
	}
	var shaderType = gl.FRAGMENT_SHADER;
	var t = peote_view_Precision.FragmentFloat;
	var p = gl.getShaderPrecisionFormat(shaderType,gl.HIGH_FLOAT);
	if(p != null) {
		t.high = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.MEDIUM_FLOAT);
	if(p != null) {
		t.medium = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.LOW_FLOAT);
	if(p != null) {
		t.low = p.precision;
	}
	var shaderType = gl.FRAGMENT_SHADER;
	var t = peote_view_Precision.FragmentInt;
	var p = gl.getShaderPrecisionFormat(shaderType,gl.HIGH_FLOAT);
	if(p != null) {
		t.high = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.MEDIUM_FLOAT);
	if(p != null) {
		t.medium = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.LOW_FLOAT);
	if(p != null) {
		t.low = p.precision;
	}
	var shaderType = gl.FRAGMENT_SHADER;
	var t = peote_view_Precision.FragmentSampler;
	var p = gl.getShaderPrecisionFormat(shaderType,gl.HIGH_FLOAT);
	if(p != null) {
		t.high = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.MEDIUM_FLOAT);
	if(p != null) {
		t.medium = p.precision;
	}
	p = gl.getShaderPrecisionFormat(shaderType,gl.LOW_FLOAT);
	if(p != null) {
		t.low = p.precision;
	}
	if(peote_view_Version.isINSTANCED) {
		var this1 = new Int32Array(4);
		this.pickInt32 = this1;
		this.pickTexture = peote_view_utils_TexUtils.createPickingTexture(this.gl,true);
	} else {
		var this1 = new Uint8Array(4);
		this.pickUInt8 = this1;
		this.pickTexture = peote_view_utils_TexUtils.createPickingTexture(this.gl);
	}
	this.pickDepthBuffer = this.gl.createRenderbuffer();
	var gl = this.gl;
	var texture = this.pickTexture;
	var depthBuffer = this.pickDepthBuffer;
	var framebuffer = gl.createFramebuffer();
	gl.bindRenderbuffer(gl.RENDERBUFFER,depthBuffer);
	peote_view_utils_GLTool.clearGlErrorQueue(gl);
	gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT24,1,1);
	if(peote_view_utils_GLTool.getLastGlError(gl) == gl.INVALID_ENUM) {
		console.log("peote/view/utils/GLTool.hx:41:","switching to DEPTH_COMPONENT16 for framebuffer");
		gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,1,1);
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);
	gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,depthBuffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);
	if(gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
		throw haxe_Exception.thrown("Error: Framebuffer not complete!");
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER,null);
	gl.bindRenderbuffer(gl.RENDERBUFFER,null);
	this.pickFB = framebuffer;
	this.background = new peote_view_utils_Background(this.gl);
	this.displayList = new peote_view_utils_RenderList_$peote_$view_$Display(new haxe_ds_ObjectMap());
	this.framebufferDisplayList = new peote_view_utils_RenderList_$peote_$view_$Display(new haxe_ds_ObjectMap());
	if(registerEvents) {
		$window.onRender.add($bind(this,this.render));
		$window.onResize.add($bind(this,this.resize));
	}
};
$hxClasses["peote.view.PeoteView"] = peote_view_PeoteView;
peote_view_PeoteView.__name__ = true;
peote_view_PeoteView.prototype = {
	isTextureStateChange: function(activeTextureUnit,texture) {
		if(texture.updated) {
			texture.updated = false;
			var this1 = new Array(this.maxTextureImageUnits);
			this.glStateTexture = this1;
			this.glStateTexture[activeTextureUnit] = texture.glTexture;
			return true;
		}
		if(this.glStateTexture[activeTextureUnit] != texture.glTexture) {
			this.glStateTexture[activeTextureUnit] = texture.glTexture;
			return true;
		} else {
			return false;
		}
	}
	,start: function() {
		if(!this.isRun) {
			var t = this.stopTime;
			this.startTime = this.stopTime = new Date().getTime() / 1000 - t;
			this.isRun = true;
		}
	}
	,addDisplay: function(display,atDisplay,addBefore) {
		if(addBefore == null) {
			addBefore = false;
		}
		display.addToPeoteView(this,atDisplay,addBefore);
	}
	,resize: function(width,height) {
		this.width = width;
		this.height = height;
		if(peote_view_Version.isUBO) {
			var _this = this.uniformBuffer;
			var gl = this.gl;
			_this.uniformBytes.b_UFloat32[0] = width;
			_this.uniformBytes.b_UFloat32[1] = height;
			gl.bindBuffer(gl.UNIFORM_BUFFER,_this.uniformBuffer);
			gl.bufferSubData(gl.UNIFORM_BUFFER,0,_this.resolutionBufferPointer);
			gl.bindBuffer(gl.UNIFORM_BUFFER,null);
		}
		if(this.onResize != null) {
			this.onResize(width,height);
		}
	}
	,render: function(context) {
		this.displayListItem = this.framebufferDisplayList.first;
		while(this.displayListItem != null) {
			if(this.displayListItem.value._renderFramebufferEnabled) {
				if(this.displayListItem.value.renderFramebufferFrame == this.displayListItem.value.renderFramebufferSkipFrames) {
					var display = this.displayListItem.value;
					var textureSlot = null;
					if(textureSlot == null) {
						textureSlot = display.framebufferTextureSlot;
					}
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,display.fbTexture.framebuffer);
					this.gl.viewport(display.fbTexture.slotWidth * (textureSlot % display.fbTexture.slotsX),display.fbTexture.slotHeight * Math.floor(textureSlot / display.fbTexture.slotsX),display.fbTexture.slotWidth,display.fbTexture.slotHeight);
					this.gl.scissor(display.fbTexture.slotWidth * (textureSlot % display.fbTexture.slotsX),display.fbTexture.slotHeight * Math.floor(textureSlot / display.fbTexture.slotsX),display.fbTexture.slotWidth,display.fbTexture.slotHeight);
					this.gl.enable(this.gl.SCISSOR_TEST);
					this.gl.clearColor(0.0,0.0,0.0,0.0);
					if(display.fbTexture.clearOnRenderInto) {
						this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT);
					} else {
						this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT);
					}
					this.gl.stencilMask(255);
					this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
					this.gl.depthFunc(this.gl.LEQUAL);
					if(display.backgroundEnabled) {
						if(true != this.colorState) {
							this.colorState = true;
							this.gl.colorMask(true,true,true,true);
						}
						var enabled = display.backgroundAlpha;
						if(enabled && !this.glStateAlpha) {
							this.glStateAlpha = true;
							this.gl.enable(this.gl.BLEND);
						} else if(!enabled && this.glStateAlpha) {
							this.glStateAlpha = false;
							this.gl.disable(this.gl.BLEND);
						}
						if(0 != this.maskState) {
							this.gl.disable(this.gl.STENCIL_TEST);
							this.maskState = 0;
							this.maskState = 0;
						}
						this.background.render(display.red,display.green,display.blue,display.alpha);
					}
					display.programListItem = display.programList.first;
					while(display.programListItem != null) {
						var _this = display.programListItem.value;
						_this.gl.useProgram(_this.glProgram);
						_this.textureListItem = _this.textureList.first;
						while(_this.textureListItem != null) {
							if(this.isTextureStateChange(_this.textureListItem.value.unit,_this.textureListItem.value.texture)) {
								_this.gl.activeTexture(_this.gl.TEXTURE0 + _this.textureListItem.value.unit);
								_this.gl.bindTexture(_this.gl.TEXTURE_2D,_this.textureListItem.value.texture.glTexture);
							}
							_this.gl.uniform1i(_this.textureListItem.value.uniformLoc,_this.textureListItem.value.unit);
							_this.textureListItem = _this.textureListItem.next;
						}
						if(peote_view_Version.isUBO) {
							_this.gl.bindBufferBase(_this.gl.UNIFORM_BUFFER,0,display.uniformBufferViewFB.uniformBuffer);
							_this.gl.bindBufferBase(_this.gl.UNIFORM_BUFFER,1,display.uniformBufferFB.uniformBuffer);
						} else {
							_this.gl.uniform2f(_this.uRESOLUTION,display.width,-display.height);
							_this.gl.uniform2f(_this.uZOOM,display.xz,display.yz);
							_this.gl.uniform2f(_this.uOFFSET,(display.xOffset + this.xOffset) / display.xz,(display.yOffset + this.yOffset - display.height) / display.yz);
						}
						_this.gl.uniform1f(_this.uTIME,(this.isRun ? new Date().getTime() / 1000 - this.startTime : this.stopTime) * this.speed);
						var _g = 0;
						var _g1 = _this.uniformFloats.length;
						while(_g < _g1) {
							var i = _g++;
							_this.gl.uniform1f(_this.uniformFloatLocations[i],_this.uniformFloats[i].value);
						}
						var enabled1 = _this.colorEnabled;
						if(enabled1 != this.colorState) {
							this.colorState = enabled1;
							this.gl.colorMask(enabled1,enabled1,enabled1,enabled1);
						}
						var enabled2 = _this.zIndexEnabled;
						if(enabled2 && !this.glStateDepth) {
							this.glStateDepth = true;
							this.gl.enable(this.gl.DEPTH_TEST);
						} else if(!enabled2 && this.glStateDepth) {
							this.glStateDepth = false;
							this.gl.disable(this.gl.DEPTH_TEST);
						}
						var enabled3 = _this.alphaEnabled;
						if(enabled3 && !this.glStateAlpha) {
							this.glStateAlpha = true;
							this.gl.enable(this.gl.BLEND);
						} else if(!enabled3 && this.glStateAlpha) {
							this.glStateAlpha = false;
							this.gl.disable(this.gl.BLEND);
						}
						var mask = _this.mask;
						var clearMask = _this.clearMask;
						if(mask != this.maskState) {
							if(mask == 0) {
								this.gl.disable(this.gl.STENCIL_TEST);
								this.maskState = mask;
							} else if(mask == 2) {
								if(clearMask) {
									this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
								}
								if(this.maskState == 0) {
									this.gl.enable(this.gl.STENCIL_TEST);
								}
								this.gl.stencilFunc(this.gl.ALWAYS,1,255);
								this.gl.stencilOp(this.gl.REPLACE,this.gl.REPLACE,this.gl.REPLACE);
								this.maskState = mask;
							} else {
								if(this.maskState == 0) {
									this.gl.enable(this.gl.STENCIL_TEST);
								}
								this.gl.stencilOp(this.gl.KEEP,this.gl.KEEP,this.gl.KEEP);
								this.gl.stencilFunc(this.gl.EQUAL,1,255);
							}
							this.maskState = mask;
						}
						_this.buffer.render(this,display,_this);
						_this.gl.useProgram(null);
						display.programListItem = display.programListItem.next;
					}
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
					if(display.fbTexture.createMipmaps) {
						this.gl.bindTexture(this.gl.TEXTURE_2D,display.fbTexture.glTexture);
						this.gl.generateMipmap(this.gl.TEXTURE_2D);
						this.gl.bindTexture(this.gl.TEXTURE_2D,null);
						display.fbTexture.updated = true;
					}
					this.displayListItem.value.renderFramebufferFrame = 0;
				} else {
					this.displayListItem.value.renderFramebufferFrame++;
				}
			}
			this.displayListItem = this.displayListItem.next;
		}
		var w = this.width;
		var h = this.height;
		this.gl.viewport(0,0,w,h);
		this.gl.scissor(0,0,w,h);
		this.gl.enable(this.gl.SCISSOR_TEST);
		this.gl.clearColor(this.red,this.green,this.blue,this.alpha);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT);
		this.gl.stencilMask(255);
		this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
		this.gl.depthFunc(this.gl.LEQUAL);
		this.displayListItem = this.displayList.first;
		while(this.displayListItem != null) {
			var _this = this.displayListItem.value;
			if(_this.isVisible) {
				var w = this.width;
				var h = this.height;
				var xz = this.xz;
				var yz = this.yz;
				var sx = Math.floor((_this.x + this.xOffset) * xz);
				var sy = Math.floor((_this.y + this.yOffset) * yz);
				var sw = Math.floor(_this.width * xz);
				var sh = Math.floor(_this.height * yz);
				if(sx < 0) {
					sw += sx;
				}
				sx = Math.max(0,Math.min(w,sx)) | 0;
				sw = Math.max(0,Math.min(w - sx,sw)) | 0;
				if(sy < 0) {
					sh += sy;
				}
				sy = Math.max(0,Math.min(h,sy)) | 0;
				sh = Math.max(0,Math.min(h - sy,sh)) | 0;
				this.gl.scissor(sx,h - sh - sy,sw,sh);
				if(_this.backgroundEnabled) {
					if(true != this.colorState) {
						this.colorState = true;
						this.gl.colorMask(true,true,true,true);
					}
					var enabled = _this.backgroundDepth;
					if(enabled && !this.glStateDepth) {
						this.glStateDepth = true;
						this.gl.enable(this.gl.DEPTH_TEST);
					} else if(!enabled && this.glStateDepth) {
						this.glStateDepth = false;
						this.gl.disable(this.gl.DEPTH_TEST);
					}
					var enabled1 = _this.backgroundAlpha;
					if(enabled1 && !this.glStateAlpha) {
						this.glStateAlpha = true;
						this.gl.enable(this.gl.BLEND);
					} else if(!enabled1 && this.glStateAlpha) {
						this.glStateAlpha = false;
						this.gl.disable(this.gl.BLEND);
					}
					if(0 != this.maskState) {
						this.gl.disable(this.gl.STENCIL_TEST);
						this.maskState = 0;
						this.maskState = 0;
					}
					this.background.render(_this.red,_this.green,_this.blue,_this.alpha);
				}
				_this.programListItem = _this.programList.first;
				while(_this.programListItem != null) {
					var _this1 = _this.programListItem.value;
					if(_this1.isVisible) {
						_this1.gl.useProgram(_this1.glProgram);
						_this1.textureListItem = _this1.textureList.first;
						while(_this1.textureListItem != null) {
							if(this.isTextureStateChange(_this1.textureListItem.value.unit,_this1.textureListItem.value.texture)) {
								_this1.gl.activeTexture(_this1.gl.TEXTURE0 + _this1.textureListItem.value.unit);
								_this1.gl.bindTexture(_this1.gl.TEXTURE_2D,_this1.textureListItem.value.texture.glTexture);
							}
							_this1.gl.uniform1i(_this1.textureListItem.value.uniformLoc,_this1.textureListItem.value.unit);
							_this1.textureListItem = _this1.textureListItem.next;
						}
						if(peote_view_Version.isUBO) {
							_this1.gl.bindBufferBase(_this1.gl.UNIFORM_BUFFER,0,this.uniformBuffer.uniformBuffer);
							_this1.gl.bindBufferBase(_this1.gl.UNIFORM_BUFFER,1,_this.uniformBuffer.uniformBuffer);
						} else {
							_this1.gl.uniform2f(_this1.uRESOLUTION,this.width,this.height);
							_this1.gl.uniform2f(_this1.uZOOM,this.xz * _this.xz,this.yz * _this.yz);
							_this1.gl.uniform2f(_this1.uOFFSET,(_this.x + _this.xOffset + this.xOffset) / _this.xz,(_this.y + _this.yOffset + this.yOffset) / _this.yz);
						}
						_this1.gl.uniform1f(_this1.uTIME,(this.isRun ? new Date().getTime() / 1000 - this.startTime : this.stopTime) * this.speed);
						var _g = 0;
						var _g1 = _this1.uniformFloats.length;
						while(_g < _g1) {
							var i = _g++;
							_this1.gl.uniform1f(_this1.uniformFloatLocations[i],_this1.uniformFloats[i].value);
						}
						var enabled2 = _this1.colorEnabled;
						if(enabled2 != this.colorState) {
							this.colorState = enabled2;
							this.gl.colorMask(enabled2,enabled2,enabled2,enabled2);
						}
						var enabled3 = _this1.zIndexEnabled;
						if(enabled3 && !this.glStateDepth) {
							this.glStateDepth = true;
							this.gl.enable(this.gl.DEPTH_TEST);
						} else if(!enabled3 && this.glStateDepth) {
							this.glStateDepth = false;
							this.gl.disable(this.gl.DEPTH_TEST);
						}
						var enabled4 = _this1.alphaEnabled;
						if(enabled4 && !this.glStateAlpha) {
							this.glStateAlpha = true;
							this.gl.enable(this.gl.BLEND);
						} else if(!enabled4 && this.glStateAlpha) {
							this.glStateAlpha = false;
							this.gl.disable(this.gl.BLEND);
						}
						var mask = _this1.mask;
						var clearMask = _this1.clearMask;
						if(mask != this.maskState) {
							if(mask == 0) {
								this.gl.disable(this.gl.STENCIL_TEST);
								this.maskState = mask;
							} else if(mask == 2) {
								if(clearMask) {
									this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
								}
								if(this.maskState == 0) {
									this.gl.enable(this.gl.STENCIL_TEST);
								}
								this.gl.stencilFunc(this.gl.ALWAYS,1,255);
								this.gl.stencilOp(this.gl.REPLACE,this.gl.REPLACE,this.gl.REPLACE);
								this.maskState = mask;
							} else {
								if(this.maskState == 0) {
									this.gl.enable(this.gl.STENCIL_TEST);
								}
								this.gl.stencilOp(this.gl.KEEP,this.gl.KEEP,this.gl.KEEP);
								this.gl.stencilFunc(this.gl.EQUAL,1,255);
							}
							this.maskState = mask;
						}
						_this1.buffer.render(this,_this,_this1);
						_this1.gl.useProgram(null);
					}
					_this.programListItem = _this.programListItem.next;
				}
			}
			this.displayListItem = this.displayListItem.next;
		}
	}
	,__class__: peote_view_PeoteView
};
var peote_view_ActiveTexture = function(unit,texture,uniformLoc) {
	this.unit = unit;
	this.texture = texture;
	this.uniformLoc = uniformLoc;
};
$hxClasses["peote.view.ActiveTexture"] = peote_view_ActiveTexture;
peote_view_ActiveTexture.__name__ = true;
peote_view_ActiveTexture.prototype = {
	__class__: peote_view_ActiveTexture
};
var peote_view_Program = function(buffer) {
	this.uniformFloats = [];
	this.ready = false;
	this.hasFragmentInjection = false;
	this.fragmentFloatPrecision = null;
	this.formulaHasChanged = false;
	this.formula = new haxe_ds_StringMap();
	this.colorFormula = "";
	this.usedID_by_ColorFormula = 0;
	this.used_by_ColorFormula = 0;
	this.textureID_Defaults = [];
	this.customTextureIdentifiers = [];
	this.activeUnits = [];
	this.activeTextures = [];
	this.textureLayers = new haxe_ds_IntMap();
	this.textureListPicking = new peote_view_utils_RenderList_$peote_$view_$ActiveTexture(new haxe_ds_ObjectMap());
	this.textureList = new peote_view_utils_RenderList_$peote_$view_$ActiveTexture(new haxe_ds_ObjectMap());
	this.glShaderConfig = { isPICKING : false, isES3 : false, isINSTANCED : false, isUBO : false, IN : "attribute", VARIN : "varying", VAROUT : "varying", hasTEXTURES : false, hasTEXTURE_FUNCTIONS : false, hasFRAGMENT_INJECTION : false, FRAGMENT_PROGRAM_UNIFORMS : "", FRAGMENT_CALC_LAYER : "", TEXTURES : [], TEXTURE_DEFAULTS : [], isDISCARD : true, DISCARD : "0.0", isPIXELSNAPPING : false, PIXELDIVISOR : "1.0", VERTEX_FLOAT_PRECISION : null, VERTEX_INT_PRECISION : null, VERTEX_SAMPLER_PRECISION : null, FRAGMENT_FLOAT_PRECISION : null, FRAGMENT_INT_PRECISION : null, FRAGMENT_SAMPLER_PRECISION : null, VERTEX_INJECTION : "", FRAGMENT_INJECTION : "", SIZE_FORMULA : null, POS_FORMULA : null, ROTZ_FORMULA : null, PIVOT_FORMULA : null, FORMULA_VARYINGS : { }, FORMULA_CONSTANTS : { }, FRAGMENT_EXTENSIONS : []};
	this.glFragmentShaderPicking = null;
	this.glVertexShaderPicking = null;
	this.glFragmentShader = null;
	this.glVertexShader = null;
	this.glProgramPicking = null;
	this.glProgram = null;
	this.gl = null;
	this.displays = [];
	this.isVisible = true;
	this.autoUpdateTextures = true;
	this.clearMask = false;
	this.mask = 0;
	this.colorEnabled = true;
	this.buffer = buffer;
	this.alphaEnabled = buffer.hasAlpha();
	this.zIndexEnabled = buffer.hasZindex();
	this.colorIdentifiers = buffer.getColorIdentifiers();
	this.customIdentifiers = buffer.getCustomIdentifiers();
	this.customVaryings = buffer.getCustomVaryings();
	this.textureIdentifiers = buffer.getTextureIdentifiers();
	this.defaultColorFormula = buffer.getDefaultColorFormula();
	this.defaultFormulaVars = buffer.getDefaultFormulaVars();
	var h = buffer.getFormulas().h;
	var k_h = h;
	var k_keys = Object.keys(h);
	var k_length = k_keys.length;
	var k_current = 0;
	while(k_current < k_length) {
		var k = k_keys[k_current++];
		var _this = this.formula;
		var value = buffer.getFormulas().h[k];
		_this.h[k] = value;
	}
	try {
		peote_view_utils_Util.resolveFormulaCyclic(buffer.getFormulas());
	} catch( _g ) {
		var e = haxe_Exception.caught(_g).unwrap();
		throw haxe_Exception.thrown("Error: cyclic reference of \"" + Std.string(e.errVar) + "\" inside @formula \"" + Std.string(e.formula) + "\" for \"" + Std.string(e.errKey) + "\"");
	}
	peote_view_utils_Util.resolveFormulaVars(buffer.getFormulas(),buffer.getAttributes());
	this.parseColorFormula();
};
$hxClasses["peote.view.Program"] = peote_view_Program;
peote_view_Program.__name__ = true;
peote_view_Program.prototype = {
	addToDisplay: function(display,atProgram,addBefore) {
		if(addBefore == null) {
			addBefore = false;
		}
		if(this.displays.indexOf(display) < 0) {
			this.displays.push(display);
			var newGl = display.gl;
			if(newGl != null && newGl != this.gl) {
				var _g = 0;
				var _g1 = this.displays;
				while(_g < _g1.length) {
					var d = _g1[_g];
					++_g;
					if(d.gl != null && d.gl != newGl) {
						throw haxe_Exception.thrown("Error, program can not used inside different gl-contexts");
					}
				}
				if(this.gl != null) {
					this.gl.deleteShader(this.glVertexShader);
					this.gl.deleteShader(this.glFragmentShader);
					this.gl.deleteProgram(this.glProgram);
					if(this.buffer.hasPicking()) {
						this.gl.deleteShader(this.glVertexShaderPicking);
						this.gl.deleteShader(this.glFragmentShaderPicking);
						this.gl.deleteProgram(this.glProgramPicking);
					}
				}
				this.gl = newGl;
				if(peote_view_Version.isES3) {
					this.glShaderConfig.isES3 = true;
					this.glShaderConfig.IN = "in";
					this.glShaderConfig.VARIN = "in";
					this.glShaderConfig.VAROUT = "out";
				}
				if(peote_view_Version.isUBO) {
					this.glShaderConfig.isUBO = true;
				}
				if(peote_view_Version.isINSTANCED) {
					this.glShaderConfig.isINSTANCED = true;
				}
				this.glShaderConfig.FRAGMENT_EXTENSIONS = [];
				if(this.gl.getExtension("OES_standard_derivatives") != null) {
					this.glShaderConfig.FRAGMENT_EXTENSIONS.push({ EXTENSION : "GL_OES_standard_derivatives"});
				}
				if(this.gl.getExtension("EXT_color_buffer_float") != null) {
					this.glShaderConfig.FRAGMENT_EXTENSIONS.push({ EXTENSION : "EXT_color_buffer_float"});
				} else if(this.gl.getExtension("OES_texture_float") != null) {
					this.glShaderConfig.FRAGMENT_EXTENSIONS.push({ EXTENSION : "OES_texture_float"});
				}
				this.buffer.setNewGLContext(this.gl);
				this.createProg();
				if(this.buffer.hasPicking()) {
					this.createProg(true);
				}
				var _g = 0;
				var _g1 = this.activeTextures;
				while(_g < _g1.length) {
					var t = _g1[_g];
					++_g;
					var newGl = this.gl;
					if(newGl != null && newGl != t.gl) {
						var _g2 = 0;
						var _g3 = t.programs;
						while(_g2 < _g3.length) {
							var p = _g3[_g2];
							++_g2;
							if(p.gl != null && p.gl != newGl) {
								throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
							}
						}
						var _g4 = 0;
						var _g5 = t.displays;
						while(_g4 < _g5.length) {
							var d = _g5[_g4];
							++_g4;
							if(d.gl != null && d.gl != newGl) {
								throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
							}
						}
						if(t.gl != null) {
							t.gl.deleteTexture(t.glTexture);
							t.glTexture = null;
							if(t.displays.length == 0 && t.framebuffer != null) {
								t.gl.deleteFramebuffer(t.framebuffer);
								t.framebuffer = null;
								if(t.glDepthBuffer != null) {
									t.gl.deleteRenderbuffer(t.glDepthBuffer);
								}
								t.glDepthBuffer = null;
							}
						}
						t.gl = newGl;
						if(t.width > t.gl.getParameter(t.gl.MAX_TEXTURE_SIZE) || t.height > t.gl.getParameter(t.gl.MAX_TEXTURE_SIZE)) {
							throw haxe_Exception.thrown("Error, texture size is greater then gl.MAX_TEXTURE_SIZE");
						}
						t.glTexture = peote_view_utils_TexUtils.createEmptyTexture(t.gl,t.width,t.height,t.colorChannels,t.createMipmaps,t.magFilter,t.minFilter,t.useFloat);
						if(t.displays.length > 0 && t.framebuffer == null) {
							t.glDepthBuffer = t.gl.createRenderbuffer();
							var gl = t.gl;
							var texture = t.glTexture;
							var depthBuffer = t.glDepthBuffer;
							var width = t.width;
							var height = t.height;
							var framebuffer = gl.createFramebuffer();
							gl.bindRenderbuffer(gl.RENDERBUFFER,depthBuffer);
							peote_view_utils_GLTool.clearGlErrorQueue(gl);
							gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT24,width,height);
							if(peote_view_utils_GLTool.getLastGlError(gl) == gl.INVALID_ENUM) {
								console.log("peote/view/utils/GLTool.hx:41:","switching to DEPTH_COMPONENT16 for framebuffer");
								gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,width,height);
							}
							gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);
							gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,depthBuffer);
							gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);
							if(gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
								throw haxe_Exception.thrown("Error: Framebuffer not complete!");
							}
							gl.bindFramebuffer(gl.FRAMEBUFFER,null);
							gl.bindRenderbuffer(gl.RENDERBUFFER,null);
							t.framebuffer = framebuffer;
							t.updated = true;
						}
						var image = t.images.keys();
						while(image.hasNext()) {
							var image1 = image.next();
							t.bufferImage(image1,t.images.h[image1.__id__]);
						}
					}
				}
			}
		}
		display.programList.add(this,atProgram,addBefore);
	}
	,createProg: function(isPicking) {
		if(isPicking == null) {
			isPicking = false;
		}
		this.glShaderConfig.isPICKING = isPicking;
		if(this.fragmentFloatPrecision != null) {
			this.glShaderConfig.FRAGMENT_FLOAT_PRECISION = this.fragmentFloatPrecision;
		} else if(this.buffer.needFragmentPrecision() && peote_view_Precision.FragmentFloat.medium < 23) {
			var t = peote_view_Precision.FragmentFloat;
			this.glShaderConfig.FRAGMENT_FLOAT_PRECISION = t.high > 0 ? "highp" : t.medium > 0 ? "mediump" : t.low > 0 ? "lowp" : null;
		} else {
			var t = peote_view_Precision.FragmentFloat;
			this.glShaderConfig.FRAGMENT_FLOAT_PRECISION = t.high > 0 && false ? "highp" : t.medium > 0 ? "mediump" : t.low > 0 ? "lowp" : null;
		}
		this.parseAndResolveFormulas();
		var gl = this.gl;
		var type = this.gl.VERTEX_SHADER;
		var shader = this.buffer.getVertexShader();
		var conf = this.glShaderConfig;
		var template = new utils_MultipassTemplate(shader);
		var _this = peote_view_utils_GLTool.rStartspaces;
		var _this1 = peote_view_utils_GLTool.rEmptylines;
		var shaderSrc = template.execute(conf).replace(_this1.r,"\n").replace(_this.r,"");
		var glShader = gl.createShader(type);
		gl.shaderSource(glShader,shaderSrc);
		gl.compileShader(glShader);
		var glVShader;
		if(gl.getShaderParameter(glShader,gl.COMPILE_STATUS) == 0) {
			throw haxe_Exception.thrown("ERROR compiling " + (type == gl.VERTEX_SHADER ? "vertex" : "fragment") + " shader\n" + Std.string(gl.getShaderInfoLog(glShader)));
		} else {
			glVShader = glShader;
		}
		var gl = this.gl;
		var type = this.gl.FRAGMENT_SHADER;
		var shader = this.buffer.getFragmentShader();
		var conf = this.glShaderConfig;
		var template = new utils_MultipassTemplate(shader);
		var _this = peote_view_utils_GLTool.rStartspaces;
		var _this1 = peote_view_utils_GLTool.rEmptylines;
		var shaderSrc = template.execute(conf).replace(_this1.r,"\n").replace(_this.r,"");
		var glShader = gl.createShader(type);
		gl.shaderSource(glShader,shaderSrc);
		gl.compileShader(glShader);
		var glFShader;
		if(gl.getShaderParameter(glShader,gl.COMPILE_STATUS) == 0) {
			throw haxe_Exception.thrown("ERROR compiling " + (type == gl.VERTEX_SHADER ? "vertex" : "fragment") + " shader\n" + Std.string(gl.getShaderInfoLog(glShader)));
		} else {
			glFShader = glShader;
		}
		var glProg = this.gl.createProgram();
		this.gl.attachShader(glProg,glVShader);
		this.gl.attachShader(glProg,glFShader);
		this.buffer.bindAttribLocations(this.gl,glProg);
		var gl = this.gl;
		gl.linkProgram(glProg);
		if(gl.getProgramParameter(glProg,gl.LINK_STATUS) == 0) {
			throw haxe_Exception.thrown(Std.string(gl.getProgramInfoLog(glProg)) + "VALIDATE_STATUS: " + Std.string(gl.getProgramParameter(glProg,gl.VALIDATE_STATUS)) + "ERROR: " + Std.string(gl.getError()));
		}
		if(!isPicking && peote_view_Version.isUBO) {
			var index = this.gl.getUniformBlockIndex(glProg,"uboView");
			if(index != this.gl.INVALID_INDEX) {
				this.gl.uniformBlockBinding(glProg,index,0);
			}
			index = this.gl.getUniformBlockIndex(glProg,"uboDisplay");
			if(index != this.gl.INVALID_INDEX) {
				this.gl.uniformBlockBinding(glProg,index,1);
			}
		} else if(!isPicking) {
			this.uRESOLUTION = this.gl.getUniformLocation(glProg,"uResolution");
			this.uZOOM = this.gl.getUniformLocation(glProg,"uZoom");
			this.uOFFSET = this.gl.getUniformLocation(glProg,"uOffset");
		} else {
			this.uRESOLUTION_PICK = this.gl.getUniformLocation(glProg,"uResolution");
			this.uZOOM_PICK = this.gl.getUniformLocation(glProg,"uZoom");
			this.uOFFSET_PICK = this.gl.getUniformLocation(glProg,"uOffset");
		}
		if(!isPicking) {
			this.uTIME = this.gl.getUniformLocation(glProg,"uTime");
			this.uniformFloatLocations = [];
			var _g = 0;
			var _g1 = this.uniformFloats;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				this.uniformFloatLocations.push(this.gl.getUniformLocation(glProg,u.name));
			}
		} else {
			this.uTIME_PICK = this.gl.getUniformLocation(glProg,"uTime");
			this.uniformFloatPickLocations = [];
			var _g = 0;
			var _g1 = this.uniformFloats;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				this.uniformFloatPickLocations.push(this.gl.getUniformLocation(glProg,u.name));
			}
		}
		if(!isPicking) {
			this.textureList.clear();
			var _g = 0;
			var _g1 = this.activeTextures.length;
			while(_g < _g1) {
				var i = _g++;
				this.textureList.add(new peote_view_ActiveTexture(this.activeUnits[i],this.activeTextures[i],this.gl.getUniformLocation(glProg,"uTexture" + i)),null,false);
			}
			this.glProgram = glProg;
			this.glVertexShader = glVShader;
			this.glFragmentShader = glFShader;
		} else {
			this.textureListPicking.clear();
			var _g = 0;
			var _g1 = this.activeTextures.length;
			while(_g < _g1) {
				var i = _g++;
				this.textureListPicking.add(new peote_view_ActiveTexture(this.activeUnits[i],this.activeTextures[i],this.gl.getUniformLocation(glProg,"uTexture" + i)),null,false);
			}
			this.glProgramPicking = glProg;
			this.glVertexShaderPicking = glVShader;
			this.glFragmentShaderPicking = glFShader;
		}
		this.ready = true;
	}
	,parseColorFormula: function() {
		var formula = "";
		if(this.colorFormula != "") {
			formula = this.colorFormula;
		} else if(this.defaultColorFormula != "") {
			formula = this.defaultColorFormula;
		} else {
			var col = this.colorIdentifiers.slice();
			var tex = [];
			var _g = 0;
			var _g1 = this.textureIdentifiers.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.textureLayers.h.hasOwnProperty(i)) {
					tex.push(this.textureIdentifiers[i]);
				}
			}
			var _g = 0;
			var _g1 = this.customTextureIdentifiers.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.textureLayers.h.hasOwnProperty(this.textureIdentifiers.length + i)) {
					tex.push(this.customTextureIdentifiers[i]);
				}
			}
			if(col.length + tex.length == 0) {
				var this1 = -16776961;
				var s = "" + Std.string((this1 >> 24 & 255) / 255);
				var s1 = "" + Std.string((this1 >> 16 & 255) / 255);
				var s2 = "" + Std.string((this1 >> 8 & 255) / 255);
				var s3 = "" + Std.string((this1 & 255) / 255);
				formula = "vec4(" + (s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0") + ", " + (s1.indexOf(".") != -1 || s1.indexOf("e-") != -1 ? s1 : s1 + ".0") + "," + (" " + (s2.indexOf(".") != -1 || s2.indexOf("e-") != -1 ? s2 : s2 + ".0") + ", " + (s3.indexOf(".") != -1 || s3.indexOf("e-") != -1 ? s3 : s3 + ".0") + ")");
			} else {
				if(tex.length > 0) {
					formula = tex.shift();
					if(col.length > 0) {
						formula = "" + col.shift() + " * " + formula;
					}
				}
				var _g = 0;
				while(_g < tex.length) {
					var t = tex[_g];
					++_g;
					if(col.length > 0) {
						t = "" + col.shift() + " * " + t + " ";
					}
					formula = "mix( " + formula + ", " + t + ", (" + t + ").a )";
				}
				while(col.length > 0) {
					formula += (formula != "" ? "*" : "") + col.shift();
					if(col.length > 0) {
						formula = "(" + formula + " + " + col.shift() + ")";
					}
				}
			}
		}
		var _g = 0;
		var _g1 = this.colorIdentifiers.length;
		while(_g < _g1) {
			var i = _g++;
			var regexp = new EReg("(^|.*?[^\\w.])" + this.colorIdentifiers[i] + "\\b.*?","g");
			if(regexp.match(formula)) {
				formula = formula.replace(regexp.r,"$1" + "c" + i);
			}
		}
		var _g = 0;
		var _g1 = this.customIdentifiers.length;
		while(_g < _g1) {
			var i = _g++;
			var regexp = new EReg("(^|.*?[^\\w.])" + this.customIdentifiers[i] + "\\b.*?","g");
			if(regexp.match(formula)) {
				if(this.customVaryings[i] != null) {
					formula = formula.replace(regexp.r,"$1" + this.customVaryings[i]);
				} else {
					throw haxe_Exception.thrown("Error while parsing ColorFormula: custom identifier " + this.customIdentifiers[i] + " need @varying to access in fragmentshader");
				}
			}
		}
		this.textureID_Defaults = [];
		this.used_by_ColorFormula = 0;
		this.usedID_by_ColorFormula = 0;
		var _g = 0;
		var _g1 = this.textureIdentifiers.length;
		while(_g < _g1) {
			var i = _g++;
			var regexp = new EReg("(^|.*?[^\\w.])" + this.textureIdentifiers[i] + "\\b.*?","g");
			if(regexp.match(formula)) {
				if(this.textureLayers.h.hasOwnProperty(i)) {
					formula = formula.replace(regexp.r,"$1" + "t" + i);
				}
				this.used_by_ColorFormula |= 1 << i;
			}
			regexp = new EReg("(^|.*?[^\\w.])" + (this.textureIdentifiers[i] + "_ID") + "\\b.*?","g");
			if(regexp.match(formula)) {
				formula = formula.replace(regexp.r,"$1" + i);
				this.usedID_by_ColorFormula |= 1 << i;
				if(!this.textureLayers.h.hasOwnProperty(i)) {
					var this1 = this.defaultFormulaVars.h[this.textureIdentifiers[i]];
					var s = "" + Std.string((this1 >> 24 & 255) / 255);
					var s1 = "" + Std.string((this1 >> 16 & 255) / 255);
					var s2 = "" + Std.string((this1 >> 8 & 255) / 255);
					var s3 = "" + Std.string((this1 & 255) / 255);
					this.textureID_Defaults.push({ layer : i, value : "vec4(" + (s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0") + ", " + (s1.indexOf(".") != -1 || s1.indexOf("e-") != -1 ? s1 : s1 + ".0") + "," + (" " + (s2.indexOf(".") != -1 || s2.indexOf("e-") != -1 ? s2 : s2 + ".0") + ", " + (s3.indexOf(".") != -1 || s3.indexOf("e-") != -1 ? s3 : s3 + ".0") + ")")});
				}
			}
		}
		var _g = 0;
		var _g1 = this.customTextureIdentifiers.length;
		while(_g < _g1) {
			var i = _g++;
			var regexp = new EReg("(^|.*?[^\\w.])" + this.customTextureIdentifiers[i] + "\\b.*?","g");
			if(regexp.match(formula)) {
				if(this.textureLayers.h.hasOwnProperty(this.textureIdentifiers.length + i)) {
					formula = formula.replace(regexp.r,"$1" + "t" + (this.textureIdentifiers.length + i));
				}
				this.used_by_ColorFormula |= 1 << this.textureIdentifiers.length + i;
			}
			regexp = new EReg("(^|.*?[^\\w.])" + (this.customTextureIdentifiers[i] + "_ID") + "\\b.*?","g");
			if(regexp.match(formula)) {
				formula = formula.replace(regexp.r,"$1" + (this.textureIdentifiers.length + i));
				this.usedID_by_ColorFormula |= 1 << this.textureIdentifiers.length + i;
				if(!this.textureLayers.h.hasOwnProperty(this.textureIdentifiers.length + i)) {
					var this1 = this.defaultFormulaVars.h[this.textureIdentifiers[this.textureIdentifiers.length + i]];
					var s = "" + Std.string((this1 >> 24 & 255) / 255);
					var s1 = "" + Std.string((this1 >> 16 & 255) / 255);
					var s2 = "" + Std.string((this1 >> 8 & 255) / 255);
					var s3 = "" + Std.string((this1 & 255) / 255);
					this.textureID_Defaults.push({ layer : this.textureIdentifiers.length + i, value : "vec4(" + (s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0") + ", " + (s1.indexOf(".") != -1 || s1.indexOf("e-") != -1 ? s1 : s1 + ".0") + "," + (" " + (s2.indexOf(".") != -1 || s2.indexOf("e-") != -1 ? s2 : s2 + ".0") + ", " + (s3.indexOf(".") != -1 || s3.indexOf("e-") != -1 ? s3 : s3 + ".0") + ")")});
				}
			}
		}
		var h = this.defaultFormulaVars.h;
		var name_h = h;
		var name_keys = Object.keys(h);
		var name_length = name_keys.length;
		var name_current = 0;
		while(name_current < name_length) {
			var name = name_keys[name_current++];
			var regexp = new EReg("(^|.*?[^\\w.])" + name + "\\b.*?","g");
			if(regexp.match(formula)) {
				var this1 = this.defaultFormulaVars.h[name];
				var s = "" + Std.string((this1 >> 24 & 255) / 255);
				var s1 = "" + Std.string((this1 >> 16 & 255) / 255);
				var s2 = "" + Std.string((this1 >> 8 & 255) / 255);
				var s3 = "" + Std.string((this1 & 255) / 255);
				formula = formula.replace(regexp.r,"$1" + ("vec4(" + (s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0") + ", " + (s1.indexOf(".") != -1 || s1.indexOf("e-") != -1 ? s1 : s1 + ".0") + "," + (" " + (s2.indexOf(".") != -1 || s2.indexOf("e-") != -1 ? s2 : s2 + ".0") + ", " + (s3.indexOf(".") != -1 || s3.indexOf("e-") != -1 ? s3 : s3 + ".0") + ")")));
			}
		}
		this.glShaderConfig.FRAGMENT_CALC_LAYER = formula;
	}
	,parseAndResolveFormulas: function() {
		var _gthis = this;
		if(this.formulaHasChanged) {
			var _g = new haxe_ds_StringMap();
			var h = this.formula.h;
			var k_h = h;
			var k_keys = Object.keys(h);
			var k_length = k_keys.length;
			var k_current = 0;
			while(k_current < k_length) {
				var k = k_keys[k_current++];
				_g.h[k] = this.formula.h[k];
			}
			var formulaResolved = _g;
			try {
				peote_view_utils_Util.resolveFormulaCyclic(formulaResolved);
			} catch( _g ) {
				var e = haxe_Exception.caught(_g).unwrap();
				throw haxe_Exception.thrown("Error: cyclic reference of \"" + Std.string(e.errVar) + "\" inside formula \"" + Std.string(e.formula) + "\" for \"" + Std.string(e.errKey) + "\"");
			}
			peote_view_utils_Util.resolveFormulaVars(formulaResolved,this.buffer.getAttributes());
			var formulaTemplateValue = function(x,y,dx,dy) {
				var nx = _gthis.buffer.getFormulaNames().h[x];
				if(nx == null) {
					nx = "";
				}
				var ny = _gthis.buffer.getFormulaNames().h[y];
				if(ny == null) {
					ny = "";
				}
				var fx = formulaResolved.h[nx];
				var fy = formulaResolved.h[ny];
				if(fx != _gthis.buffer.getFormulas().h[nx] || fy != _gthis.buffer.getFormulas().h[ny]) {
					if(fx == null) {
						fx = _gthis.buffer.getAttributes().h[nx];
					}
					if(fx == null) {
						fx = dx;
					}
					if(fy == null) {
						fy = _gthis.buffer.getAttributes().h[ny];
					}
					if(fy == null) {
						fy = dy;
					}
					if(x == "rotation" && fx != "0.0") {
						fx = "(" + fx + ")/180.0*" + Math.PI;
					}
					if(y == "zIndex" && fy != "0.0") {
						var s = "" + Std.string(_gthis.buffer.getMaxZindex());
						fy = "clamp( " + fy + "/" + (s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0") + ", -1.0, 1.0)";
					}
					return "vec2(" + fx + ", " + fy + ")";
				} else {
					return null;
				}
			};
			this.glShaderConfig.SIZE_FORMULA = formulaTemplateValue("sizeX","sizeY","100.0","100.0");
			this.glShaderConfig.POS_FORMULA = formulaTemplateValue("posX","posY","0.0","0.0");
			this.glShaderConfig.ROTZ_FORMULA = formulaTemplateValue("rotation","zIndex","0.0","0.0");
			this.glShaderConfig.PIVOT_FORMULA = formulaTemplateValue("pivotX","pivotY","0.0","0.0");
			var _g = 0;
			var _g1 = this.buffer.getFormulaVaryings();
			while(_g < _g1.length) {
				var n = _g1[_g];
				++_g;
				var f = formulaResolved.h[n];
				if(f != this.buffer.getFormulas().h[n]) {
					if(f == null) {
						f = this.buffer.getAttributes().h[n];
					}
					this.glShaderConfig.FORMULA_VARYINGS[n] = f;
					console.log("peote/view/Program.hx:591:"," -- replacing Formula " + n + " => " + f);
				} else {
					this.glShaderConfig.FORMULA_VARYINGS[n] = null;
				}
			}
			var _g = 0;
			var _g1 = this.buffer.getFormulaConstants();
			while(_g < _g1.length) {
				var n = _g1[_g];
				++_g;
				var f = formulaResolved.h[n];
				if(f != null && f != this.buffer.getAttributes().h[n]) {
					this.glShaderConfig.FORMULA_CONSTANTS[n] = f;
					console.log("peote/view/Program.hx:601:"," -- replacing Formula " + n + " => " + f);
				} else {
					this.glShaderConfig.FORMULA_CONSTANTS[n] = null;
				}
			}
		}
	}
	,getTextureIndexByIdentifier: function(identifier,addNew) {
		if(addNew == null) {
			addNew = true;
		}
		var layer = this.textureIdentifiers.indexOf(identifier);
		if(layer < 0) {
			layer = this.customTextureIdentifiers.indexOf(identifier);
			if(layer < 0) {
				if(addNew) {
					var regexp = new EReg("^([a-zA-z_]+\\d*)+$","g");
					if(!regexp.match(identifier)) {
						throw haxe_Exception.thrown("Error: \"" + identifier + "\" is not an identifier, please use only letters/numbers or \"_\" (starting with a letter)");
					}
					layer = this.textureIdentifiers.length + this.customTextureIdentifiers.length;
					this.customTextureIdentifiers.push(identifier);
				}
			}
		}
		return layer;
	}
	,snapToPixel: function(pixelDivisor,autoUpdateTextures) {
		if(pixelDivisor == null) {
			this.glShaderConfig.isPIXELSNAPPING = false;
		} else {
			this.glShaderConfig.isPIXELSNAPPING = true;
			var s = "" + Std.string(1 / pixelDivisor);
			this.glShaderConfig.PIXELDIVISOR = s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0";
		}
		if(autoUpdateTextures != null) {
			if(autoUpdateTextures) {
				this.updateTextures();
			}
		} else if(this.autoUpdateTextures) {
			this.updateTextures();
		}
	}
	,addTexture: function(texture,identifier,autoUpdateTextures) {
		var layer = this.getTextureIndexByIdentifier(identifier);
		if(texture == null) {
			throw haxe_Exception.thrown("Error, texture is null.");
		}
		var textures = this.textureLayers.h[layer];
		if(textures != null) {
			if(textures.indexOf(texture) >= 0) {
				throw haxe_Exception.thrown("Error, textureLayer already contains this texture.");
			} else {
				textures.push(texture);
				this.textureLayers.h[layer] = textures;
			}
		} else {
			this.textureLayers.h[layer] = [texture];
		}
		if(autoUpdateTextures != null) {
			if(autoUpdateTextures) {
				this.updateTextures();
			}
		} else if(this.autoUpdateTextures) {
			this.updateTextures();
		}
	}
	,updateTextures: function() {
		var newTextures = [];
		var layer = this.textureLayers.keys();
		while(layer.hasNext()) {
			var layer1 = layer.next();
			var _g = 0;
			var _g1 = this.textureLayers.h[layer1];
			while(_g < _g1.length) {
				var t = _g1[_g];
				++_g;
				if(newTextures.indexOf(t) < 0) {
					newTextures.push(t);
				}
			}
		}
		var i = this.activeTextures.length;
		while(i-- > 0) if(newTextures.indexOf(this.activeTextures[i]) < 0) {
			if(!HxOverrides.remove(this.activeTextures[i].programs,this)) {
				throw haxe_Exception.thrown("Error, this texture is not used by program anymore");
			}
			this.activeTextures.splice(i,1);
			this.activeUnits.splice(i,1);
		}
		var _g = 0;
		while(_g < newTextures.length) {
			var t = newTextures[_g];
			++_g;
			if(this.activeTextures.indexOf(t) < 0) {
				this.activeTextures.push(t);
				var unit = 0;
				while(this.activeUnits.indexOf(unit) >= 0) ++unit;
				this.activeUnits.push(unit);
				if(t.programs.indexOf(this) >= 0) {
					throw haxe_Exception.thrown("Error, texture is already used by program");
				}
				var newGl = this.gl;
				if(newGl != null && newGl != t.gl) {
					var _g1 = 0;
					var _g2 = t.programs;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						if(p.gl != null && p.gl != newGl) {
							throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
						}
					}
					var _g3 = 0;
					var _g4 = t.displays;
					while(_g3 < _g4.length) {
						var d = _g4[_g3];
						++_g3;
						if(d.gl != null && d.gl != newGl) {
							throw haxe_Exception.thrown("Error, texture can not used inside different gl-contexts");
						}
					}
					if(t.gl != null) {
						t.gl.deleteTexture(t.glTexture);
						t.glTexture = null;
						if(t.displays.length == 0 && t.framebuffer != null) {
							t.gl.deleteFramebuffer(t.framebuffer);
							t.framebuffer = null;
							if(t.glDepthBuffer != null) {
								t.gl.deleteRenderbuffer(t.glDepthBuffer);
							}
							t.glDepthBuffer = null;
						}
					}
					t.gl = newGl;
					if(t.width > t.gl.getParameter(t.gl.MAX_TEXTURE_SIZE) || t.height > t.gl.getParameter(t.gl.MAX_TEXTURE_SIZE)) {
						throw haxe_Exception.thrown("Error, texture size is greater then gl.MAX_TEXTURE_SIZE");
					}
					t.glTexture = peote_view_utils_TexUtils.createEmptyTexture(t.gl,t.width,t.height,t.colorChannels,t.createMipmaps,t.magFilter,t.minFilter,t.useFloat);
					if(t.displays.length > 0 && t.framebuffer == null) {
						t.glDepthBuffer = t.gl.createRenderbuffer();
						var gl = t.gl;
						var texture = t.glTexture;
						var depthBuffer = t.glDepthBuffer;
						var width = t.width;
						var height = t.height;
						var framebuffer = gl.createFramebuffer();
						gl.bindRenderbuffer(gl.RENDERBUFFER,depthBuffer);
						peote_view_utils_GLTool.clearGlErrorQueue(gl);
						gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT24,width,height);
						if(peote_view_utils_GLTool.getLastGlError(gl) == gl.INVALID_ENUM) {
							console.log("peote/view/utils/GLTool.hx:41:","switching to DEPTH_COMPONENT16 for framebuffer");
							gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,width,height);
						}
						gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);
						gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,depthBuffer);
						gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);
						if(gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
							throw haxe_Exception.thrown("Error: Framebuffer not complete!");
						}
						gl.bindFramebuffer(gl.FRAMEBUFFER,null);
						gl.bindRenderbuffer(gl.RENDERBUFFER,null);
						t.framebuffer = framebuffer;
						t.updated = true;
					}
					var image = t.images.keys();
					while(image.hasNext()) {
						var image1 = image.next();
						t.bufferImage(image1,t.images.h[image1.__id__]);
					}
				}
				t.programs.push(this);
			}
		}
		this.parseColorFormula();
		this.glShaderConfig.hasFRAGMENT_INJECTION = this.hasFragmentInjection;
		this.glShaderConfig.FRAGMENT_PROGRAM_UNIFORMS = "";
		this.glShaderConfig.TEXTURES = [];
		if(this.activeTextures.length == 0) {
			this.glShaderConfig.hasTEXTURES = false;
		} else {
			this.glShaderConfig.hasTEXTURES = true;
			var _g = 0;
			var _g1 = this.activeTextures.length;
			while(_g < _g1) {
				var i = _g++;
				this.glShaderConfig.FRAGMENT_PROGRAM_UNIFORMS += "uniform sampler2D uTexture" + i + ";";
			}
			var layer = this.textureLayers.keys();
			while(layer.hasNext()) {
				var layer1 = layer.next();
				var units = [];
				var textures = this.textureLayers.h[layer1];
				var _g = 0;
				var _g1 = textures.length;
				while(_g < _g1) {
					var i = _g++;
					var s = "" + Std.string(textures[i].slotWidth / textures[i].width);
					var s1 = "" + Std.string(textures[i].slotHeight / textures[i].height);
					var s2 = "" + Std.string(textures[i].slotsX * textures[i].slotWidth / textures[i].width);
					var s3 = "" + Std.string(textures[i].slotsY * textures[i].slotHeight / textures[i].height);
					units.push({ UNIT_VALUE : i + 1 + ".0", TEXTURE : "uTexture" + this.activeTextures.indexOf(textures[i]), SLOTS_X : textures[i].slotsX + ".0", SLOTS_Y : textures[i].slotsY + ".0", SLOT_WIDTH : s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0", SLOT_HEIGHT : s1.indexOf(".") != -1 || s1.indexOf("e-") != -1 ? s1 : s1 + ".0", SLOTS_WIDTH : s2.indexOf(".") != -1 || s2.indexOf("e-") != -1 ? s2 : s2 + ".0", SLOTS_HEIGHT : s3.indexOf(".") != -1 || s3.indexOf("e-") != -1 ? s3 : s3 + ".0", TILES_X : textures[i].tilesX + ".0", TILES_Y : textures[i].tilesY + ".0", TEXTURE_WIDTH : textures[i].width + ".0", TEXTURE_HEIGHT : textures[i].height + ".0", FIRST : i == 0, LAST : i == textures.length - 1});
				}
				var used = (this.used_by_ColorFormula & 1 << layer1) > 0;
				var usedID = (this.usedID_by_ColorFormula & 1 << layer1) > 0;
				this.glShaderConfig.TEXTURES.push({ LAYER : layer1, UNITS : units, USED : used, USED_ID : usedID});
			}
		}
		this.glShaderConfig.TEXTURE_DEFAULTS = [];
		var _g = 0;
		var _g1 = this.textureID_Defaults;
		while(_g < _g1.length) {
			var defaults = _g1[_g];
			++_g;
			this.glShaderConfig.TEXTURE_DEFAULTS.push({ LAYER : defaults.layer, DEFAULT_VALUE : defaults.value});
		}
		this.glShaderConfig.hasTEXTURE_FUNCTIONS = this.usedID_by_ColorFormula == 0 && this.textureID_Defaults.length == 0 ? false : true;
		if(this.gl != null) {
			this.ready = false;
			this.gl.deleteShader(this.glVertexShader);
			this.gl.deleteShader(this.glFragmentShader);
			this.gl.deleteProgram(this.glProgram);
			if(this.buffer.hasPicking()) {
				this.gl.deleteShader(this.glVertexShaderPicking);
				this.gl.deleteShader(this.glFragmentShaderPicking);
				this.gl.deleteProgram(this.glProgramPicking);
			}
			this.createProg();
			if(this.buffer.hasPicking()) {
				this.createProg(true);
			}
		}
	}
	,__class__: peote_view_Program
};
var peote_view_Texture = function(slotWidth,slotHeight,imageSlots,colorChannels,createMipmaps,minFilter,magFilter,useFloat,maxTextureSize) {
	if(maxTextureSize == null) {
		maxTextureSize = 16384;
	}
	if(useFloat == null) {
		useFloat = false;
	}
	if(magFilter == null) {
		magFilter = 0;
	}
	if(minFilter == null) {
		minFilter = 0;
	}
	if(createMipmaps == null) {
		createMipmaps = false;
	}
	if(colorChannels == null) {
		colorChannels = 4;
	}
	if(imageSlots == null) {
		imageSlots = 1;
	}
	this.displays = [];
	this.programs = [];
	this.updated = false;
	this.useFloat = false;
	this.minFilter = 0;
	this.magFilter = 0;
	this.createMipmaps = false;
	this.images = new haxe_ds_ObjectMap();
	this.tilesY = 1;
	this.tilesX = 1;
	this.slotsY = 1;
	this.slotsX = 1;
	this.freeSlots = 1;
	this.imageSlots = 1;
	this.height = 0;
	this.width = 0;
	this.colorChannels = 4;
	this.clearOnRenderInto = true;
	this.glDepthBuffer = null;
	this.framebuffer = null;
	this.glTexture = null;
	this.gl = null;
	this.slotWidth = slotWidth;
	this.slotHeight = slotHeight;
	this.imageSlots = this.freeSlots = imageSlots;
	this.colorChannels = colorChannels;
	this.createMipmaps = createMipmaps;
	this.magFilter = magFilter;
	this.minFilter = minFilter;
	this.useFloat = useFloat;
	var p = peote_view_utils_TexUtils.optimalTextureSize(imageSlots,slotWidth,slotHeight,maxTextureSize);
	this.width = p.width;
	this.height = p.height;
	this.slotsX = p.slotsX;
	this.slotsY = p.slotsY;
};
$hxClasses["peote.view.Texture"] = peote_view_Texture;
peote_view_Texture.__name__ = true;
peote_view_Texture.prototype = {
	setImage: function(image,imageSlot,tilesX,tilesY) {
		if(imageSlot == null) {
			imageSlot = 0;
		}
		if(this.images.h.__keys__[image.__id__] != null) {
			throw haxe_Exception.thrown("Error, image is already inside texture inside slot " + this.images.h[image.__id__].imageSlot);
		}
		if(tilesX != null) {
			this.tilesX = tilesX;
		}
		if(tilesY != null) {
			this.tilesY = tilesY;
		}
		this.images.set(image,{ imageSlot : imageSlot});
		this.freeSlots--;
		if(this.gl != null) {
			if(this.glTexture == null) {
				if(this.width > this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE) || this.height > this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)) {
					throw haxe_Exception.thrown("Error, texture size is greater then gl.MAX_TEXTURE_SIZE");
				}
				this.glTexture = peote_view_utils_TexUtils.createEmptyTexture(this.gl,this.width,this.height,this.colorChannels,this.createMipmaps,this.magFilter,this.minFilter,this.useFloat);
			}
			this.bufferImage(image,{ imageSlot : imageSlot});
		}
	}
	,bufferImage: function(image,imgProp) {
		var gl = this.gl;
		var x = this.slotWidth * (imgProp.imageSlot % this.slotsX);
		var y = this.slotHeight * Math.floor(imgProp.imageSlot / this.slotsX);
		var w = image.width;
		var h = image.height;
		var createMipmaps = this.createMipmaps;
		var useFloat = this.useFloat;
		if(useFloat == null) {
			useFloat = false;
		}
		if(createMipmaps == null) {
			createMipmaps = false;
		}
		gl.bindTexture(gl.TEXTURE_2D,this.glTexture);
		if(useFloat) {
			var this1 = new Float32Array(w * h * 4);
			var fa = this1;
			var _g = 0;
			var _g1 = w * h * 4;
			while(_g < _g1) {
				var i = _g++;
				fa[i] = image.dataUInt8[i] / 255;
			}
			gl.texSubImage2D(gl.TEXTURE_2D,0,x,y,w,h,gl.RGBA,gl.FLOAT,fa);
		} else {
			gl.texSubImage2D(gl.TEXTURE_2D,0,x,y,w,h,gl.RGBA,gl.UNSIGNED_BYTE,image.dataUInt8);
		}
		if(createMipmaps) {
			gl.generateMipmap(gl.TEXTURE_2D);
		}
		gl.bindTexture(gl.TEXTURE_2D,null);
		this.updated = true;
	}
	,__class__: peote_view_Texture
};
var peote_view__$TextureData_TextureDataImpl = function(width,height,type,data) {
	if(type == null) {
		type = 0;
	}
	this.dataUInt8 = null;
	this.height = 0;
	this.width = 0;
	this.width = width;
	this.height = height;
	if(data == null) {
		var this1 = new Uint8Array(width * height);
		this.dataUInt8 = this1;
	} else {
		this.dataUInt8 = data;
	}
};
$hxClasses["peote.view._TextureData.TextureDataImpl"] = peote_view__$TextureData_TextureDataImpl;
peote_view__$TextureData_TextureDataImpl.__name__ = true;
peote_view__$TextureData_TextureDataImpl.prototype = {
	__class__: peote_view__$TextureData_TextureDataImpl
};
var peote_view_TextureData = {};
peote_view_TextureData.fromLimeImage = function(image) {
	var width = image.width;
	var height = image.height;
	var type = 0;
	var data = haxe_io_UInt8Array.fromBytes(new haxe_io_Bytes(new Uint8Array(image.get_data().buffer)));
	if(type == null) {
		type = 0;
	}
	var this1 = new peote_view__$TextureData_TextureDataImpl(width,height,type,data);
	return this1;
};
var peote_view_UniformBufferDisplay = function() {
	this.uniformBytes = new peote_view_utils_BufferBytes(new ArrayBuffer(32));
	var bytes = this.uniformBytes;
	var offset = 0;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.xOffestBufferPointer = this1;
	var bytes = this.uniformBytes;
	var offset = 4;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.yOffestBufferPointer = this1;
	var bytes = this.uniformBytes;
	var offset = 8;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.xZoomBufferPointer = this1;
	var bytes = this.uniformBytes;
	var offset = 12;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.yZoomBufferPointer = this1;
};
$hxClasses["peote.view.UniformBufferDisplay"] = peote_view_UniformBufferDisplay;
peote_view_UniformBufferDisplay.__name__ = true;
peote_view_UniformBufferDisplay.prototype = {
	createGLBuffer: function(gl,xOffest,yOffest,xz,yz) {
		this.uniformBuffer = gl.createBuffer();
		this.uniformBytes.b_UFloat32[0] = xOffest;
		this.uniformBytes.b_UFloat32[1] = yOffest;
		this.uniformBytes.b_UFloat32[2] = xz;
		this.uniformBytes.b_UFloat32[3] = yz;
		gl.bindBuffer(gl.UNIFORM_BUFFER,this.uniformBuffer);
		var size = this.uniformBytes.length;
		var bytes = this.uniformBytes;
		var this1 = new Uint8Array(bytes.b.bufferValue,0);
		gl.bufferData(gl.UNIFORM_BUFFER,this1,gl.STATIC_DRAW);
		gl.bindBuffer(gl.UNIFORM_BUFFER,null);
	}
	,deleteGLBuffer: function(gl) {
		gl.deleteBuffer(this.uniformBuffer);
	}
	,__class__: peote_view_UniformBufferDisplay
};
var peote_view_UniformBufferView = function() {
	this.uniformBytes = new peote_view_utils_BufferBytes(new ArrayBuffer(48));
	var bytes = this.uniformBytes;
	var offset = 0;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.resolutionBufferPointer = this1;
	var bytes = this.uniformBytes;
	var offset = 8;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.xOffestBufferPointer = this1;
	var bytes = this.uniformBytes;
	var offset = 12;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.yOffestBufferPointer = this1;
	var bytes = this.uniformBytes;
	var offset = 16;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.xZoomBufferPointer = this1;
	var bytes = this.uniformBytes;
	var offset = 20;
	if(offset == null) {
		offset = 0;
	}
	var this1 = new Uint8Array(bytes.b.bufferValue,offset);
	this.yZoomBufferPointer = this1;
};
$hxClasses["peote.view.UniformBufferView"] = peote_view_UniformBufferView;
peote_view_UniformBufferView.__name__ = true;
peote_view_UniformBufferView.prototype = {
	createGLBuffer: function(gl,width,height,xOffest,yOffest,xz,yz) {
		this.uniformBuffer = gl.createBuffer();
		this.uniformBytes.b_UFloat32[0] = width;
		this.uniformBytes.b_UFloat32[1] = height;
		this.uniformBytes.b_UFloat32[2] = xOffest;
		this.uniformBytes.b_UFloat32[3] = yOffest;
		this.uniformBytes.b_UFloat32[4] = xz;
		this.uniformBytes.b_UFloat32[5] = yz;
		gl.bindBuffer(gl.UNIFORM_BUFFER,this.uniformBuffer);
		var size = this.uniformBytes.length;
		var bytes = this.uniformBytes;
		var this1 = new Uint8Array(bytes.b.bufferValue,0);
		gl.bufferData(gl.UNIFORM_BUFFER,this1,gl.STATIC_DRAW);
		gl.bindBuffer(gl.UNIFORM_BUFFER,null);
	}
	,deleteGLBuffer: function(gl) {
		gl.deleteBuffer(this.uniformBuffer);
	}
	,__class__: peote_view_UniformBufferView
};
var peote_view_UniformFloat = function(name,value) {
	this.name = name;
	this.value = value;
};
$hxClasses["peote.view.UniformFloat"] = peote_view_UniformFloat;
peote_view_UniformFloat.__name__ = true;
peote_view_UniformFloat.prototype = {
	__class__: peote_view_UniformFloat
};
var peote_view_utils_Background = function(gl) {
	this.gl = gl;
	this.createBuffer();
	this.createProgram();
};
$hxClasses["peote.view.utils.Background"] = peote_view_utils_Background;
peote_view_utils_Background.__name__ = true;
peote_view_utils_Background.prototype = {
	createBuffer: function() {
		var bytes = new peote_view_utils_BufferBytes(new ArrayBuffer(32));
		bytes.b_UFloat32[0] = 1;
		bytes.b_UFloat32[1] = 1;
		bytes.b_UFloat32[2] = 0;
		bytes.b_UFloat32[3] = 1;
		bytes.b_UFloat32[4] = 1;
		bytes.b_UFloat32[5] = 0;
		bytes.b_UFloat32[6] = 0;
		bytes.b_UFloat32[7] = 0;
		this.buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer);
		var this1 = new Uint8Array(bytes.b.bufferValue,0);
		this.gl.bufferData(this.gl.ARRAY_BUFFER,this1,this.gl.STATIC_DRAW);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null);
	}
	,createProgram: function() {
		var precision = "";
		var t = peote_view_Precision.VertexFloat;
		if((t.high > 0 && false ? "highp" : t.medium > 0 && false ? "mediump" : t.low > 0 ? "lowp" : null) != null) {
			precision = "precision lowp float;";
		} else {
			var t = peote_view_Precision.VertexFloat;
			if((t.high > 0 && false ? "highp" : t.medium > 0 ? "mediump" : t.low > 0 ? "lowp" : null) != null) {
				precision = "precision mediump float;";
			}
		}
		var gl = this.gl;
		var type = this.gl.VERTEX_SHADER;
		var glShader = gl.createShader(type);
		gl.shaderSource(glShader,precision + "\t\n\t\t\tattribute vec2 aPosition;\n\t\t\tvoid main(void)\n\t\t\t{\n\t\t\t\tgl_Position = mat4 (\n\t\t\t\t\tvec4(2.0, 0.0, 0.0, 0.0),\n\t\t\t\t\tvec4(0.0, -2.0, 0.0, 0.0),\n\t\t\t\t\tvec4(0.0, 0.0, -1.0, 0.0),\n\t\t\t\t\tvec4(-1.0, 1.0, 0.0, 1.0)\n\t\t\t\t) * vec4 (aPosition, -1.0 ,1.0);\n\t\t\t}\n\t\t");
		gl.compileShader(glShader);
		var glVertexShader;
		if(gl.getShaderParameter(glShader,gl.COMPILE_STATUS) == 0) {
			throw haxe_Exception.thrown("ERROR compiling " + (type == gl.VERTEX_SHADER ? "vertex" : "fragment") + " shader\n" + Std.string(gl.getShaderInfoLog(glShader)));
		} else {
			glVertexShader = glShader;
		}
		var t = peote_view_Precision.FragmentFloat;
		if((t.high > 0 && false ? "highp" : t.medium > 0 && false ? "mediump" : t.low > 0 ? "lowp" : null) != null) {
			precision = "precision lowp float;";
		} else {
			var t = peote_view_Precision.FragmentFloat;
			if((t.high > 0 && false ? "highp" : t.medium > 0 ? "mediump" : t.low > 0 ? "lowp" : null) != null) {
				precision = "precision mediump float;";
			}
		}
		var gl = this.gl;
		var type = this.gl.FRAGMENT_SHADER;
		var glShader = gl.createShader(type);
		gl.shaderSource(glShader,precision + "\n\t\t\tuniform vec4 uRGBA;\n\t\t\tvoid main(void)\n\t\t\t{\n\t\t\t\tgl_FragColor = uRGBA;\n\t\t\t\t\n\t\t\t\t// TODO: Fix for old FF\n\t\t\t\tgl_FragColor.w = clamp(uRGBA.w, 0.003, 1.0);\n\t\t\t}\n\t\t");
		gl.compileShader(glShader);
		var glFragmentShader;
		if(gl.getShaderParameter(glShader,gl.COMPILE_STATUS) == 0) {
			throw haxe_Exception.thrown("ERROR compiling " + (type == gl.VERTEX_SHADER ? "vertex" : "fragment") + " shader\n" + Std.string(gl.getShaderInfoLog(glShader)));
		} else {
			glFragmentShader = glShader;
		}
		this.glProgram = this.gl.createProgram();
		this.gl.attachShader(this.glProgram,glVertexShader);
		this.gl.attachShader(this.glProgram,glFragmentShader);
		this.gl.deleteShader(glVertexShader);
		this.gl.deleteShader(glFragmentShader);
		this.gl.bindAttribLocation(this.glProgram,0,"aPosition");
		var gl = this.gl;
		var glProgram = this.glProgram;
		gl.linkProgram(glProgram);
		if(gl.getProgramParameter(glProgram,gl.LINK_STATUS) == 0) {
			throw haxe_Exception.thrown(Std.string(gl.getProgramInfoLog(glProgram)) + "VALIDATE_STATUS: " + Std.string(gl.getProgramParameter(glProgram,gl.VALIDATE_STATUS)) + "ERROR: " + Std.string(gl.getError()));
		}
		this.uRGBA = this.gl.getUniformLocation(this.glProgram,"uRGBA");
	}
	,render: function(r,g,b,a) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer);
		this.gl.enableVertexAttribArray(0);
		this.gl.vertexAttribPointer(0,2,this.gl.FLOAT,false,8,0);
		this.gl.useProgram(this.glProgram);
		this.gl.uniform4f(this.uRGBA,r,g,b,a);
		this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4);
		this.gl.disableVertexAttribArray(0);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null);
	}
	,__class__: peote_view_utils_Background
};
var peote_view_utils_BufferBytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
	this.b_UFloat32 = new Float32Array(data);
	this.b_Int32 = new Int32Array(data);
	this.b_Uint16 = new Uint16Array(data);
};
$hxClasses["peote.view.utils.BufferBytes"] = peote_view_utils_BufferBytes;
peote_view_utils_BufferBytes.__name__ = true;
peote_view_utils_BufferBytes.prototype = {
	blit: function(pos,src,srcpos,len) {
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	}
	,fill: function(pos,len,value) {
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			this.b[pos++] = value;
		}
	}
	,__class__: peote_view_utils_BufferBytes
};
var peote_view_utils_GLTool = function() { };
$hxClasses["peote.view.utils.GLTool"] = peote_view_utils_GLTool;
peote_view_utils_GLTool.__name__ = true;
peote_view_utils_GLTool.clearGlErrorQueue = function(gl) {
	while(gl.getError() != gl.NO_ERROR) {
	}
};
peote_view_utils_GLTool.getLastGlError = function(gl) {
	var err = gl.getError();
	if(err != gl.NO_ERROR) {
		if(err == gl.INVALID_ENUM) {
			console.log("peote/view/utils/GLTool.hx:22:","(GL-Error: INVALID_ENUM)");
		} else if(err == gl.INVALID_VALUE) {
			console.log("peote/view/utils/GLTool.hx:23:","(GL-Error: INVALID_VALUE)");
		} else if(err == gl.INVALID_OPERATION) {
			console.log("peote/view/utils/GLTool.hx:24:","(GL-Error: INVALID_OPERATION)");
		} else if(err == gl.OUT_OF_MEMORY) {
			console.log("peote/view/utils/GLTool.hx:25:","(GL-Error: OUT_OF_MEMORY)");
		} else {
			console.log("peote/view/utils/GLTool.hx:26:","GL-Error: " + err);
		}
	}
	return err;
};
var peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture = function(value,prev,next) {
	this.value = value;
	this.next = next;
	this.prev = prev;
	if(prev != null) {
		prev.next = this;
	}
	if(next != null) {
		next.prev = this;
	}
};
$hxClasses["peote.view.utils.RenderListItem_peote_view_ActiveTexture"] = peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture;
peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture.__name__ = true;
peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture.prototype = {
	__class__: peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture
};
var peote_view_utils_RenderListItem_$peote_$view_$Display = function(value,prev,next) {
	this.value = value;
	this.next = next;
	this.prev = prev;
	if(prev != null) {
		prev.next = this;
	}
	if(next != null) {
		next.prev = this;
	}
};
$hxClasses["peote.view.utils.RenderListItem_peote_view_Display"] = peote_view_utils_RenderListItem_$peote_$view_$Display;
peote_view_utils_RenderListItem_$peote_$view_$Display.__name__ = true;
peote_view_utils_RenderListItem_$peote_$view_$Display.prototype = {
	__class__: peote_view_utils_RenderListItem_$peote_$view_$Display
};
var peote_view_utils_RenderListItem_$peote_$view_$Program = function(value,prev,next) {
	this.value = value;
	this.next = next;
	this.prev = prev;
	if(prev != null) {
		prev.next = this;
	}
	if(next != null) {
		next.prev = this;
	}
};
$hxClasses["peote.view.utils.RenderListItem_peote_view_Program"] = peote_view_utils_RenderListItem_$peote_$view_$Program;
peote_view_utils_RenderListItem_$peote_$view_$Program.__name__ = true;
peote_view_utils_RenderListItem_$peote_$view_$Program.prototype = {
	__class__: peote_view_utils_RenderListItem_$peote_$view_$Program
};
var peote_view_utils_RenderList_$peote_$view_$ActiveTexture = function(itemMap) {
	this.last = null;
	this.first = null;
	this.itemMap = itemMap;
};
$hxClasses["peote.view.utils.RenderList_peote_view_ActiveTexture"] = peote_view_utils_RenderList_$peote_$view_$ActiveTexture;
peote_view_utils_RenderList_$peote_$view_$ActiveTexture.__name__ = true;
peote_view_utils_RenderList_$peote_$view_$ActiveTexture.prototype = {
	add: function(value,atValue,addBefore) {
		var newItem = null;
		if(addBefore) {
			if(this.first == null) {
				newItem = this.first = this.last = new peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture(value,null,null);
			} else if(atValue == null) {
				newItem = this.first = new peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture(value,null,this.first);
			} else {
				var atItem = this.itemMap.get(atValue);
				if(atItem != null) {
					newItem = new peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture(value,atItem.prev,atItem);
					if(atItem == this.first) {
						this.first = newItem;
					}
				} else {
					throw haxe_Exception.thrown("Error on add: " + Std.string(atValue) + " is not in list.");
				}
			}
		} else if(this.last == null) {
			newItem = this.first = this.last = new peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture(value,null,null);
		} else if(atValue == null) {
			newItem = this.last = new peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture(value,this.last,null);
		} else {
			var atItem = this.itemMap.get(atValue);
			if(atItem != null) {
				newItem = new peote_view_utils_RenderListItem_$peote_$view_$ActiveTexture(value,atItem,atItem.next);
				if(atItem == this.last) {
					this.last = newItem;
				}
			} else {
				throw haxe_Exception.thrown("Error on add: " + Std.string(atValue) + " is not in list.");
			}
		}
		var oldItem = this.itemMap.get(value);
		if(oldItem != null) {
			var item = oldItem;
			if(item == this.first) {
				this.first = item.next;
			}
			if(item == this.last) {
				this.last = item.prev;
			}
			if(item.prev != null) {
				item.prev.next = item.next;
			}
			if(item.next != null) {
				item.next.prev = item.prev;
			}
			item = null;
		}
		this.itemMap.set(value,newItem);
	}
	,clear: function() {
		while(this.first != null) {
			if(this.last.value != null) {
				this.itemMap.remove(this.last.value);
			}
			var item = this.last;
			if(item == this.first) {
				this.first = item.next;
			}
			if(item == this.last) {
				this.last = item.prev;
			}
			if(item.prev != null) {
				item.prev.next = item.next;
			}
			if(item.next != null) {
				item.next.prev = item.prev;
			}
			item = null;
		}
	}
	,__class__: peote_view_utils_RenderList_$peote_$view_$ActiveTexture
};
var peote_view_utils_RenderList_$peote_$view_$Display = function(itemMap) {
	this.last = null;
	this.first = null;
	this.itemMap = itemMap;
};
$hxClasses["peote.view.utils.RenderList_peote_view_Display"] = peote_view_utils_RenderList_$peote_$view_$Display;
peote_view_utils_RenderList_$peote_$view_$Display.__name__ = true;
peote_view_utils_RenderList_$peote_$view_$Display.prototype = {
	add: function(value,atValue,addBefore) {
		var newItem = null;
		if(addBefore) {
			if(this.first == null) {
				newItem = this.first = this.last = new peote_view_utils_RenderListItem_$peote_$view_$Display(value,null,null);
			} else if(atValue == null) {
				newItem = this.first = new peote_view_utils_RenderListItem_$peote_$view_$Display(value,null,this.first);
			} else {
				var atItem = this.itemMap.get(atValue);
				if(atItem != null) {
					newItem = new peote_view_utils_RenderListItem_$peote_$view_$Display(value,atItem.prev,atItem);
					if(atItem == this.first) {
						this.first = newItem;
					}
				} else {
					throw haxe_Exception.thrown("Error on add: " + Std.string(atValue) + " is not in list.");
				}
			}
		} else if(this.last == null) {
			newItem = this.first = this.last = new peote_view_utils_RenderListItem_$peote_$view_$Display(value,null,null);
		} else if(atValue == null) {
			newItem = this.last = new peote_view_utils_RenderListItem_$peote_$view_$Display(value,this.last,null);
		} else {
			var atItem = this.itemMap.get(atValue);
			if(atItem != null) {
				newItem = new peote_view_utils_RenderListItem_$peote_$view_$Display(value,atItem,atItem.next);
				if(atItem == this.last) {
					this.last = newItem;
				}
			} else {
				throw haxe_Exception.thrown("Error on add: " + Std.string(atValue) + " is not in list.");
			}
		}
		var oldItem = this.itemMap.get(value);
		if(oldItem != null) {
			var item = oldItem;
			if(item == this.first) {
				this.first = item.next;
			}
			if(item == this.last) {
				this.last = item.prev;
			}
			if(item.prev != null) {
				item.prev.next = item.next;
			}
			if(item.next != null) {
				item.next.prev = item.prev;
			}
			item = null;
		}
		this.itemMap.set(value,newItem);
	}
	,__class__: peote_view_utils_RenderList_$peote_$view_$Display
};
var peote_view_utils_RenderList_$peote_$view_$Program = function(itemMap) {
	this.last = null;
	this.first = null;
	this.itemMap = itemMap;
};
$hxClasses["peote.view.utils.RenderList_peote_view_Program"] = peote_view_utils_RenderList_$peote_$view_$Program;
peote_view_utils_RenderList_$peote_$view_$Program.__name__ = true;
peote_view_utils_RenderList_$peote_$view_$Program.prototype = {
	add: function(value,atValue,addBefore) {
		var newItem = null;
		if(addBefore) {
			if(this.first == null) {
				newItem = this.first = this.last = new peote_view_utils_RenderListItem_$peote_$view_$Program(value,null,null);
			} else if(atValue == null) {
				newItem = this.first = new peote_view_utils_RenderListItem_$peote_$view_$Program(value,null,this.first);
			} else {
				var atItem = this.itemMap.get(atValue);
				if(atItem != null) {
					newItem = new peote_view_utils_RenderListItem_$peote_$view_$Program(value,atItem.prev,atItem);
					if(atItem == this.first) {
						this.first = newItem;
					}
				} else {
					throw haxe_Exception.thrown("Error on add: " + Std.string(atValue) + " is not in list.");
				}
			}
		} else if(this.last == null) {
			newItem = this.first = this.last = new peote_view_utils_RenderListItem_$peote_$view_$Program(value,null,null);
		} else if(atValue == null) {
			newItem = this.last = new peote_view_utils_RenderListItem_$peote_$view_$Program(value,this.last,null);
		} else {
			var atItem = this.itemMap.get(atValue);
			if(atItem != null) {
				newItem = new peote_view_utils_RenderListItem_$peote_$view_$Program(value,atItem,atItem.next);
				if(atItem == this.last) {
					this.last = newItem;
				}
			} else {
				throw haxe_Exception.thrown("Error on add: " + Std.string(atValue) + " is not in list.");
			}
		}
		var oldItem = this.itemMap.get(value);
		if(oldItem != null) {
			var item = oldItem;
			if(item == this.first) {
				this.first = item.next;
			}
			if(item == this.last) {
				this.last = item.prev;
			}
			if(item.prev != null) {
				item.prev.next = item.next;
			}
			if(item.next != null) {
				item.next.prev = item.prev;
			}
			item = null;
		}
		this.itemMap.set(value,newItem);
	}
	,__class__: peote_view_utils_RenderList_$peote_$view_$Program
};
var peote_view_utils_TexUtils = function() { };
$hxClasses["peote.view.utils.TexUtils"] = peote_view_utils_TexUtils;
peote_view_utils_TexUtils.__name__ = true;
peote_view_utils_TexUtils.createEmptyTexture = function(gl,width,height,colorChannels,createMipmaps,magFilter,minFilter,useFloat) {
	if(useFloat == null) {
		useFloat = false;
	}
	if(minFilter == null) {
		minFilter = 0;
	}
	if(magFilter == null) {
		magFilter = 0;
	}
	if(createMipmaps == null) {
		createMipmaps = false;
	}
	if(colorChannels == null) {
		colorChannels = 4;
	}
	var glTexture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D,glTexture);
	peote_view_utils_GLTool.clearGlErrorQueue(gl);
	if(useFloat) {
		var target = gl.TEXTURE_2D;
		var internalformat = gl.RGBA32F;
		var format = gl.RGBA;
		var type = gl.FLOAT;
		var data = 0;
		if(data == 0) {
			gl.texImage2D(target,0,internalformat,width,height,0,format,type,null);
		} else {
			gl.texImage2D(target,0,internalformat,width,height,0,format,type,data);
		}
		if(peote_view_utils_GLTool.getLastGlError(gl) == gl.INVALID_VALUE) {
			console.log("peote/view/utils/TexUtils.hx:25:","switching to RGBA16F for float precision texture creation");
			var target = gl.TEXTURE_2D;
			var internalformat = gl.RGBA16F;
			var format = gl.RGBA;
			var type = gl.FLOAT;
			var data = 0;
			if(data == 0) {
				gl.texImage2D(target,0,internalformat,width,height,0,format,type,null);
			} else {
				gl.texImage2D(target,0,internalformat,width,height,0,format,type,data);
			}
			if(peote_view_utils_GLTool.getLastGlError(gl) == gl.INVALID_VALUE) {
				console.log("peote/view/utils/TexUtils.hx:28:","switching to RGBA for float precision texture creation");
				var target = gl.TEXTURE_2D;
				var internalformat = gl.RGBA;
				var format = gl.RGBA;
				var type = gl.FLOAT;
				var data = 0;
				if(data == 0) {
					gl.texImage2D(target,0,internalformat,width,height,0,format,type,null);
				} else {
					gl.texImage2D(target,0,internalformat,width,height,0,format,type,data);
				}
			}
		}
	} else {
		var target = gl.TEXTURE_2D;
		var internalformat = gl.RGBA;
		var format = gl.RGBA;
		var type = gl.UNSIGNED_BYTE;
		var data = 0;
		if(data == 0) {
			gl.texImage2D(target,0,internalformat,width,height,0,format,type,null);
		} else {
			gl.texImage2D(target,0,internalformat,width,height,0,format,type,data);
		}
	}
	if(peote_view_utils_GLTool.getLastGlError(gl) == gl.OUT_OF_MEMORY) {
		throw haxe_Exception.thrown("OUT OF GPU MEMORY while texture creation");
	}
	if(magFilter == 1) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
	}
	if(createMipmaps) {
		switch(minFilter) {
		case 1:
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);
			break;
		case 2:
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST_MIPMAP_NEAREST);
			break;
		case 3:
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST_MIPMAP_LINEAR);
			break;
		default:
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_NEAREST);
		}
	} else if(minFilter == 1) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
	}
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
	if(createMipmaps) {
		gl.generateMipmap(gl.TEXTURE_2D);
	}
	gl.bindTexture(gl.TEXTURE_2D,null);
	return glTexture;
};
peote_view_utils_TexUtils.createPickingTexture = function(gl,isRGBA32I) {
	if(isRGBA32I == null) {
		isRGBA32I = false;
	}
	var glTexture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D,glTexture);
	if(isRGBA32I) {
		var target = gl.TEXTURE_2D;
		var internalformat = gl.RGBA32I;
		var format = gl.RGBA_INTEGER;
		var type = gl.INT;
		var data = 0;
		if(data == 0) {
			gl.texImage2D(target,0,internalformat,1,1,0,format,type,null);
		} else {
			gl.texImage2D(target,0,internalformat,1,1,0,format,type,data);
		}
	} else {
		var target = gl.TEXTURE_2D;
		var internalformat = gl.RGBA;
		var format = gl.RGBA;
		var type = gl.UNSIGNED_BYTE;
		var data = 0;
		if(data == 0) {
			gl.texImage2D(target,0,internalformat,1,1,0,format,type,null);
		} else {
			gl.texImage2D(target,0,internalformat,1,1,0,format,type,data);
		}
	}
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
	gl.bindTexture(gl.TEXTURE_2D,null);
	return glTexture;
};
peote_view_utils_TexUtils.optimalTextureSize = function(imageSlots,slotWidth,slotHeight,maxTextureSize,errorIfNotFit,debug) {
	if(debug == null) {
		debug = true;
	}
	if(errorIfNotFit == null) {
		errorIfNotFit = true;
	}
	var mts = Math.ceil(Math.log(maxTextureSize) / Math.log(2));
	var a = Math.ceil(Math.log(imageSlots * slotWidth * slotHeight) / Math.log(2));
	var r;
	var w = 1;
	var h = a - 1;
	var delta = Math.floor(Math.abs(w - h));
	var rmin = (1 << mts) * (1 << mts);
	var found = false;
	var n = Math.floor(Math.min(mts,a));
	var m;
	while(1 << n >= slotWidth) {
		m = Math.floor(Math.min(mts,a - n + 1));
		while(1 << m >= slotHeight) {
			if(Math.floor((1 << n) / slotWidth) * Math.floor((1 << m) / slotHeight) < imageSlots) {
				break;
			}
			r = (1 << n) * (1 << m) - imageSlots * slotWidth * slotHeight;
			if(r < 0) {
				break;
			}
			if(r <= rmin) {
				if(r == rmin) {
					if(Math.abs(n - m) < delta) {
						delta = Math.floor(Math.abs(n - m));
						w = n;
						h = m;
						found = true;
					}
				} else {
					w = n;
					h = m;
					rmin = r;
					found = true;
				}
			}
			--m;
		}
		--n;
	}
	if(found) {
		w = 1 << w;
		h = 1 << h;
	} else {
		if(errorIfNotFit) {
			throw haxe_Exception.thrown("Error: max texture-size (" + maxTextureSize + ") is to small for " + imageSlots + " images (" + slotWidth + " x " + slotHeight + ")");
		}
		if(slotWidth > maxTextureSize || slotHeight > maxTextureSize) {
			throw haxe_Exception.thrown("Error: max texture-size (" + maxTextureSize + ") is to small for image (" + slotWidth + " x " + slotHeight + ")");
		}
		h = maxTextureSize;
		w = h;
	}
	return { width : w, height : h, slotsX : w / slotWidth | 0, slotsY : h / slotHeight | 0, imageSlots : (w / slotWidth | 0) * (h / slotHeight | 0)};
};
var peote_view_utils_Util = function() { };
$hxClasses["peote.view.utils.Util"] = peote_view_utils_Util;
peote_view_utils_Util.__name__ = true;
peote_view_utils_Util.resolveFormulaCyclic = function(formulas) {
	var resolved = [];
	var h = formulas.h;
	var _g_h = h;
	var _g_keys = Object.keys(h);
	var _g_length = _g_keys.length;
	var _g_current = 0;
	while(_g_current < _g_length) {
		var k = _g_keys[_g_current++];
		var err = peote_view_utils_Util.resolveFormulaKey(k,formulas,resolved);
		if(err.errKey != null) {
			throw haxe_Exception.thrown(err);
		}
	}
	var h = formulas.h;
	var _g1_h = h;
	var _g1_keys = Object.keys(h);
	var _g1_length = _g1_keys.length;
	var _g1_current = 0;
	while(_g1_current < _g1_length) {
		var k = _g1_keys[_g1_current++];
		var _this_r = new RegExp("___:::___","g".split("u").join(""));
		var value = formulas.h[k].replace(_this_r,"");
		formulas.h[k] = value;
	}
};
peote_view_utils_Util.resolveFormulaKey = function(key,formulas,resolved,fromKeys) {
	if(fromKeys == null) {
		fromKeys = [key];
	}
	if(resolved == null) {
		resolved = [];
	}
	var formula = formulas.h[key];
	if(resolved.indexOf(key) >= 0) {
		return { formula : formula, errKey : null, errVar : null};
	}
	var h = formulas.h;
	var _g_h = h;
	var _g_keys = Object.keys(h);
	var _g_length = _g_keys.length;
	var _g_current = 0;
	while(_g_current < _g_length) {
		var k = _g_keys[_g_current++];
		if(k != key) {
			var regexp = new EReg("(^|.*?[^\\w.])" + k + "\\b.*?","g");
			if(regexp.match(formula)) {
				if(fromKeys.indexOf(k) >= 0) {
					return { formula : formula, errKey : key, errVar : k};
				}
				var f = peote_view_utils_Util.resolveFormulaKey(k,formulas,resolved,fromKeys.concat([k]));
				if(f.errKey != null) {
					return f;
				}
				formula = formula.replace(regexp.r,"$1(___:::___" + f.formula + "___:::___)");
			}
		}
	}
	formulas.h[key] = formula;
	resolved.push(key);
	return { formula : formula, errKey : null, errVar : null};
};
peote_view_utils_Util.resolveFormulaVars = function(formulas,attribs) {
	var h = formulas.h;
	var _g_h = h;
	var _g_keys = Object.keys(h);
	var _g_length = _g_keys.length;
	var _g_current = 0;
	while(_g_current < _g_length) {
		var key = _g_keys[_g_current++];
		var formula = formulas.h[key];
		var h = attribs.h;
		var _g_h = h;
		var _g_keys1 = Object.keys(h);
		var _g_length1 = _g_keys1.length;
		var _g_current1 = 0;
		while(_g_current1 < _g_length1) {
			var k = _g_keys1[_g_current1++];
			var regexp = new EReg("(^|.*?[^\\w.])" + k + "\\b.*?","g");
			if(regexp.match(formula)) {
				formula = formula.replace(regexp.r,"$1(" + attribs.h[k] + ")");
			}
		}
		formulas.h[key] = formula;
	}
};
var utils_Loader = function() { };
$hxClasses["utils.Loader"] = utils_Loader;
utils_Loader.__name__ = true;
utils_Loader.onProgressDebug = function(a,b,name) {
	console.log("utils/Loader.hx:11:","...loading " + a + "/" + b + " of \"" + name + "\"");
};
utils_Loader.onErrorDebug = function(msg) {
	console.log("utils/Loader.hx:15:","Error - " + msg);
};
utils_Loader.onCompleteDebug = function(name) {
	console.log("utils/Loader.hx:19:","Loading complete \"" + name + "\"");
};
var utils__$MultipassTemplate_TemplateExpr = $hxEnums["utils._MultipassTemplate.TemplateExpr"] = { __ename__:true,__constructs__:null
	,OpVar: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"utils._MultipassTemplate.TemplateExpr",toString:$estr}; },$_._hx_name="OpVar",$_.__params__ = ["v"],$_)
	,OpExpr: ($_=function(expr) { return {_hx_index:1,expr:expr,__enum__:"utils._MultipassTemplate.TemplateExpr",toString:$estr}; },$_._hx_name="OpExpr",$_.__params__ = ["expr"],$_)
	,OpIf: ($_=function(expr,eif,eelse) { return {_hx_index:2,expr:expr,eif:eif,eelse:eelse,__enum__:"utils._MultipassTemplate.TemplateExpr",toString:$estr}; },$_._hx_name="OpIf",$_.__params__ = ["expr","eif","eelse"],$_)
	,OpStr: ($_=function(str) { return {_hx_index:3,str:str,__enum__:"utils._MultipassTemplate.TemplateExpr",toString:$estr}; },$_._hx_name="OpStr",$_.__params__ = ["str"],$_)
	,OpBlock: ($_=function(l) { return {_hx_index:4,l:l,__enum__:"utils._MultipassTemplate.TemplateExpr",toString:$estr}; },$_._hx_name="OpBlock",$_.__params__ = ["l"],$_)
	,OpForeach: ($_=function(expr,loop) { return {_hx_index:5,expr:expr,loop:loop,__enum__:"utils._MultipassTemplate.TemplateExpr",toString:$estr}; },$_._hx_name="OpForeach",$_.__params__ = ["expr","loop"],$_)
	,OpMacro: ($_=function(name,params) { return {_hx_index:6,name:name,params:params,__enum__:"utils._MultipassTemplate.TemplateExpr",toString:$estr}; },$_._hx_name="OpMacro",$_.__params__ = ["name","params"],$_)
};
utils__$MultipassTemplate_TemplateExpr.__constructs__ = [utils__$MultipassTemplate_TemplateExpr.OpVar,utils__$MultipassTemplate_TemplateExpr.OpExpr,utils__$MultipassTemplate_TemplateExpr.OpIf,utils__$MultipassTemplate_TemplateExpr.OpStr,utils__$MultipassTemplate_TemplateExpr.OpBlock,utils__$MultipassTemplate_TemplateExpr.OpForeach,utils__$MultipassTemplate_TemplateExpr.OpMacro];
var utils_MultipassTemplate = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) {
		throw haxe_Exception.thrown("Unexpected '" + Std.string(tokens.first().s) + "'");
	}
};
$hxClasses["utils.MultipassTemplate"] = utils_MultipassTemplate;
utils_MultipassTemplate.__name__ = true;
utils_MultipassTemplate.prototype = {
	execute: function(context,macros) {
		this.macros = macros == null ? { } : macros;
		this.context = context;
		this.stack = new haxe_ds_List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,resolve: function(v) {
		if(v == "__current__") {
			return this.context;
		}
		var value = Reflect.getProperty(this.context,v);
		if(value != null || Object.prototype.hasOwnProperty.call(this.context,v)) {
			return value;
		}
		var _g_head = this.stack.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var ctx = val;
			value = Reflect.getProperty(ctx,v);
			if(value != null || Object.prototype.hasOwnProperty.call(ctx,v)) {
				return value;
			}
		}
		if(!Object.prototype.hasOwnProperty.call(utils_MultipassTemplate.globals,v)) {
			throw haxe_Exception.thrown(v);
		}
		return Reflect.field(utils_MultipassTemplate.globals,v);
	}
	,parseTokens: function(data) {
		var tokens = new haxe_ds_List();
		while(utils_MultipassTemplate.splitter.match(data)) {
			var p = utils_MultipassTemplate.splitter.matchedPos();
			if(p.pos > 0) {
				tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			}
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = utils_MultipassTemplate.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			var params = [];
			var part = "";
			while(true) {
				var c = HxOverrides.cca(data,parp);
				++parp;
				if(c == 40) {
					++npar;
				} else if(c == 41) {
					--npar;
					if(npar <= 0) {
						break;
					}
				} else if(c == null) {
					throw haxe_Exception.thrown("Unclosed macro parenthesis");
				}
				if(c == 44 && npar == 1) {
					params.push(part);
					part = "";
				} else {
					part += String.fromCodePoint(c);
				}
			}
			params.push(part);
			tokens.add({ p : utils_MultipassTemplate.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) {
			tokens.add({ p : data, s : true, l : null});
		}
		return tokens;
	}
	,parseBlock: function(tokens) {
		var l = new haxe_ds_List();
		while(true) {
			var t = tokens.first();
			if(t == null) {
				break;
			}
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) {
				break;
			}
			l.add(this.parse(tokens));
		}
		if(l.length == 1) {
			return l.first();
		}
		return utils__$MultipassTemplate_TemplateExpr.OpBlock(l);
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) {
			return utils__$MultipassTemplate_TemplateExpr.OpStr(p);
		}
		if(t.l != null) {
			var pe = new haxe_ds_List();
			var _g = 0;
			var _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return utils__$MultipassTemplate_TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = null;
			try {
				e = this.parseExpr(p);
			} catch( _g ) {
				var _g1 = haxe_Exception.caught(_g).unwrap();
				if(typeof(_g1) == "string") {
					var s = _g1;
					console.log("utils/MultipassTemplate.hx:211:",s);
					throw haxe_Exception.thrown(s);
				} else {
					throw _g;
				}
			}
			var eif = this.parseBlock(tokens);
			var t = tokens.first();
			var eelse;
			if(t == null) {
				throw haxe_Exception.thrown("Unclosed 'if'");
			}
			if(t.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t = tokens.pop();
				if(t == null || t.p != "end") {
					throw haxe_Exception.thrown("Unclosed 'else'");
				}
			} else {
				t.p = HxOverrides.substr(t.p,4,t.p.length - 4);
				eelse = this.parse(tokens);
			}
			return utils__$MultipassTemplate_TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t = tokens.pop();
			if(t == null || t.p != "end") {
				throw haxe_Exception.thrown("Unclosed 'foreach'");
			}
			return utils__$MultipassTemplate_TemplateExpr.OpForeach(e,efor);
		}
		if(utils_MultipassTemplate.expr_splitter.match(p)) {
			return utils__$MultipassTemplate_TemplateExpr.OpExpr(this.parseExpr(p));
		}
		return utils__$MultipassTemplate_TemplateExpr.OpVar(p);
	}
	,parseExpr: function(data) {
		var l = new haxe_ds_List();
		var expr = data;
		while(utils_MultipassTemplate.expr_splitter.match(data)) {
			var p = utils_MultipassTemplate.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) {
				l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			}
			var p1 = utils_MultipassTemplate.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = utils_MultipassTemplate.expr_splitter.matchedRight();
		}
		if(data.length != 0) {
			l.add({ p : data, s : true});
		}
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) {
				throw haxe_Exception.thrown(l.first().p);
			}
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(typeof(_g1) == "string") {
				var s = _g1;
				throw haxe_Exception.thrown("Unexpected '" + s + "' in " + expr);
			} else {
				throw _g;
			}
		}
		return function() {
			try {
				return e();
			} catch( _g ) {
				var v = haxe_Exception.caught(_g).unwrap();
				throw haxe_Exception.thrown({ v : v, expr : expr});
			}
		};
	}
	,makeConst: function(v) {
		utils_MultipassTemplate.expr_trim.match(v);
		v = utils_MultipassTemplate.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(utils_MultipassTemplate.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(utils_MultipassTemplate.expr_float.match(v)) {
			var f = parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") {
			return e;
		}
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) {
			throw haxe_Exception.thrown(field.p);
		}
		var f = field.p;
		utils_MultipassTemplate.expr_trim.match(f);
		f = utils_MultipassTemplate.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) {
			throw haxe_Exception.thrown("<eof>");
		}
		if(p.s) {
			return this.makeConst(p.p);
		}
		switch(p.p) {
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				if(v != null) {
					return v == false;
				} else {
					return true;
				}
			};
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) {
				throw haxe_Exception.thrown(p1);
			}
			if(p1.p == ")") {
				return e1;
			}
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") {
				throw haxe_Exception.thrown(p2);
			}
			switch(p1.p) {
			case "!=":
				return function() {
					return e1() != e2();
				};
			case "&&":
				return function() {
					return e1() && e2();
				};
			case "*":
				return function() {
					return e1() * e2();
				};
			case "+":
				return function() {
					return e1() + e2();
				};
			case "-":
				return function() {
					return e1() - e2();
				};
			case "/":
				return function() {
					return e1() / e2();
				};
			case "<":
				return function() {
					return e1() < e2();
				};
			case "<=":
				return function() {
					return e1() <= e2();
				};
			case "==":
				return function() {
					return e1() == e2();
				};
			case ">":
				return function() {
					return e1() > e2();
				};
			case ">=":
				return function() {
					return e1() >= e2();
				};
			case "||":
				return function() {
					return e1() || e2();
				};
			default:
				throw haxe_Exception.thrown("Unknown operation " + p1.p);
			}
			break;
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw haxe_Exception.thrown(p.p);
	}
	,run: function(e) {
		switch(e._hx_index) {
		case 0:
			var v = e.v;
			try {
				var _this = this.buf;
				var x = Std.string(this.resolve(v));
				_this.b += Std.string(x);
			} catch( _g ) {
				this.buf.b += Std.string("::" + v + "::");
			}
			break;
		case 1:
			var e1 = e.expr;
			try {
				var _this = this.buf;
				var x = Std.string(e1());
				_this.b += Std.string(x);
			} catch( _g ) {
				var notYet = haxe_Exception.caught(_g).unwrap();
				this.buf.b += Std.string("::(" + Std.string(notYet.expr) + ")::");
			}
			break;
		case 2:
			var e1 = e.expr;
			var eif = e.eif;
			var eelse = e.eelse;
			try {
				var v = e1();
				if(v == null || v == false) {
					if(eelse != null) {
						this.run(eelse);
					}
				} else {
					this.run(eif);
				}
			} catch( _g ) {
				var notYet = haxe_Exception.caught(_g).unwrap();
				this.buf.b += Std.string("::if " + Std.string(notYet.expr) + "::");
				this.run(eif);
				if(eelse != null) {
					this.buf.b += "::else::";
					this.run(eelse);
				}
				this.buf.b += "::end::";
			}
			break;
		case 3:
			var str = e.str;
			this.buf.b += str == null ? "null" : "" + str;
			break;
		case 4:
			var l = e.l;
			var _g_head = l.h;
			while(_g_head != null) {
				var val = _g_head.item;
				_g_head = _g_head.next;
				var e1 = val;
				this.run(e1);
			}
			break;
		case 5:
			var e1 = e.expr;
			var loop = e.loop;
			try {
				var v = e1();
				try {
					var x = $getIterator(v);
					if(x.hasNext == null) {
						throw haxe_Exception.thrown(null);
					}
					v = x;
				} catch( _g ) {
					try {
						if(v.hasNext == null) {
							throw haxe_Exception.thrown(null);
						}
					} catch( _g1 ) {
						throw haxe_Exception.thrown("Cannot iter on " + Std.string(v));
					}
				}
				this.stack.push(this.context);
				var v1 = v;
				var ctx = v1;
				while(ctx.hasNext()) {
					var ctx1 = ctx.next();
					this.context = ctx1;
					this.run(loop);
				}
				this.context = this.stack.pop();
			} catch( _g ) {
				var notYet = haxe_Exception.caught(_g).unwrap();
				this.buf.b += Std.string("::foreach " + Std.string(notYet.v) + "::");
				this.run(loop);
				this.buf.b += "::end::";
			}
			break;
		case 6:
			var m = e.name;
			var params = e.params;
			var v = Reflect.field(this.macros,m);
			var pl = [];
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var _g_head = params.h;
			while(_g_head != null) {
				var val = _g_head.item;
				_g_head = _g_head.next;
				var p = val;
				if(p._hx_index == 0) {
					var v1 = p.v;
					pl.push(this.resolve(v1));
				} else {
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				var _this = this.buf;
				var x = Std.string(v.apply(this.macros,pl));
				_this.b += Std.string(x);
			} catch( _g ) {
				var e = haxe_Exception.caught(_g).unwrap();
				var plstr;
				try {
					plstr = pl.join(",");
				} catch( _g1 ) {
					plstr = "???";
				}
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e) + ")";
				throw haxe_Exception.thrown(msg);
			}
			break;
		}
	}
	,__class__: utils_MultipassTemplate
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
var _init = lime__$internal_backend_html5_HTML5Application;
var init = lime_app_Application;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
$hxClasses["Math"] = Math;
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = $hxClasses["String"] = String;
String.__name__ = true;
$hxClasses["Array"] = Array;
Array.__name__ = true;
Date.prototype.__class__ = $hxClasses["Date"] = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
var array = null;
var view = null;
var buffer = null;
var len = null;
var this1 = new Uint32Array(256);
lime_math_RGBA.__alpha16 = this1;
var _g = 0;
while(_g < 256) {
	var i = _g++;
	lime_math_RGBA.__alpha16[i] = Math.ceil(i * 257.003921568627447);
}
var array = null;
var view = null;
var buffer = null;
var len = null;
var this1 = new Uint8Array(511);
lime_math_RGBA.__clamp = this1;
var _g = 0;
while(_g < 255) {
	var i = _g++;
	lime_math_RGBA.__clamp[i] = i;
}
var _g = 255;
var _g1 = 511;
while(_g < _g1) {
	var i = _g++;
	lime_math_RGBA.__clamp[i] = 255;
}
lime_utils_Log.level = 4;
if(typeof console == "undefined") {
	console = {}
}
if(console.log == null) {
	console.log = function() {
	};
}
Bulby.__meta__ = { fields : { tile : { texTile : null}}};
Bulby.FORMULAS = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["y"] = "yStart+(yEnd-h-yStart)*time1*time1";
	_g.h["x"] = "xStart+(xEnd-w-xStart)*time0";
	$r = _g;
	return $r;
}(this));
Bulby.ATTRIBUTES = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["yStart"] = "0.0";
	_g.h["yEnd"] = "600.0";
	_g.h["y"] = "0.0+(600.0-0.0)*time1";
	_g.h["xStart"] = "0.0";
	_g.h["xEnd"] = "800.0";
	_g.h["x"] = "0.0+(800.0-0.0)*time0";
	_g.h["wStart"] = "512.0";
	_g.h["wEnd"] = "512.0";
	_g.h["w"] = "512.0";
	_g.h["tileStart"] = "aShort0";
	_g.h["tileEnd"] = "aShort0";
	_g.h["tile"] = "aShort0";
	_g.h["hStart"] = "512.0";
	_g.h["hEnd"] = "512.0";
	_g.h["h"] = "512.0";
	$r = _g;
	return $r;
}(this));
Bulby.FORMULA_NAMES = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["sizeX"] = "w";
	_g.h["sizeY"] = "h";
	_g.h["posX"] = "x";
	_g.h["posY"] = "y";
	$r = _g;
	return $r;
}(this));
Bulby.FORMULA_VARYINGS = "tile";
Bulby.FORMULA_CONSTANTS = "";
Bulby.DEFAULT_FORMULA_VARS = new haxe_ds_StringMap();
haxe_Unserializer.DEFAULT_RESOLVER = new haxe__$Unserializer_DefaultResolver();
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_zip_InflateImpl.LEN_EXTRA_BITS_TBL = [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,-1,-1];
haxe_zip_InflateImpl.LEN_BASE_VAL_TBL = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];
haxe_zip_InflateImpl.DIST_EXTRA_BITS_TBL = [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,-1,-1];
haxe_zip_InflateImpl.DIST_BASE_VAL_TBL = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];
haxe_zip_InflateImpl.CODE_LENGTHS_POS = [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
lime__$internal_backend_html5_HTML5HTTPRequest.activeRequests = 0;
lime__$internal_backend_html5_HTML5HTTPRequest.requestLimit = 17;
lime__$internal_backend_html5_HTML5HTTPRequest.requestQueue = new haxe_ds_List();
lime__$internal_backend_html5_HTML5Window.windowID = 0;
lime__$internal_format_Base64.DICTIONARY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
lime__$internal_format_Base64.EXTENDED_DICTIONARY = (function($this) {
	var $r;
	var result = [];
	{
		var _g = 0;
		var _g1 = lime__$internal_format_Base64.DICTIONARY;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = lime__$internal_format_Base64.DICTIONARY;
			while(_g2 < _g3.length) {
				var b = _g3[_g2];
				++_g2;
				result.push(a + b);
			}
		}
	}
	$r = result;
	return $r;
}(this));
lime_system_Sensor.sensorByID = new haxe_ds_IntMap();
lime_system_Sensor.sensors = [];
lime_ui_Gamepad.devices = new haxe_ds_IntMap();
lime_ui_Gamepad.onConnect = new lime_app__$Event_$lime_$ui_$Gamepad_$Void();
lime_ui_Joystick.devices = new haxe_ds_IntMap();
lime_ui_Joystick.onConnect = new lime_app__$Event_$lime_$ui_$Joystick_$Void();
lime_ui_Touch.onCancel = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onEnd = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onMove = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_ui_Touch.onStart = new lime_app__$Event_$lime_$ui_$Touch_$Void();
lime_utils_Assets.cache = new lime_utils_AssetCache();
lime_utils_Assets.onChange = new lime_app__$Event_$Void_$Void();
lime_utils_Assets.bundlePaths = new haxe_ds_StringMap();
lime_utils_Assets.libraries = new haxe_ds_StringMap();
lime_utils_Assets.libraryPaths = new haxe_ds_StringMap();
lime_utils_Log.throwErrors = true;
peote_view_Version.isES3 = false;
peote_view_Version.isUBO = false;
peote_view_Version.isINSTANCED = false;
peote_view_Version.isVAO = false;
peote_view_Precision.VertexFloat = { high : 0, medium : 0, low : 0};
peote_view_Precision.VertexInt = { high : 0, medium : 0, low : 0};
peote_view_Precision.VertexSampler = { high : 0, medium : 0, low : 0};
peote_view_Precision.FragmentFloat = { high : 0, medium : 0, low : 0};
peote_view_Precision.FragmentInt = { high : 0, medium : 0, low : 0};
peote_view_Precision.FragmentSampler = { high : 0, medium : 0, low : 0};
peote_view_utils_GLTool.rEmptylines = new EReg("([ \t]*\r?\n)+","g");
peote_view_utils_GLTool.rStartspaces = new EReg("^([ \t]*\r?\n)+","g");
utils_Loader.corsServer = "";
utils_MultipassTemplate.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
utils_MultipassTemplate.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
utils_MultipassTemplate.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
utils_MultipassTemplate.expr_int = new EReg("^[0-9]+$","");
utils_MultipassTemplate.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
utils_MultipassTemplate.globals = { };
ApplicationMain.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=Main.js.map
});
$hx_exports.lime = $hx_exports.lime || {};
$hx_exports.lime.$scripts = $hx_exports.lime.$scripts || {};
$hx_exports.lime.$scripts["Main"] = $hx_script;
$hx_exports.lime.embed = function(projectName) { var exports = {};
	var script = $hx_exports.lime.$scripts[projectName];
	if (!script) throw Error("Cannot find project name \"" + projectName + "\"");
	script(exports, $global);
	for (var key in exports) $hx_exports[key] = $hx_exports[key] || exports[key];
	var lime = exports.lime || window.lime;
	if (lime && lime.embed && this != lime.embed) lime.embed.apply(lime, arguments);
	return exports;
};
if(typeof define == "function" && define.amd) {
	define([], function() { return $hx_exports.lime; });
	define.__amd = define.amd;
	define.amd = null;
}
})(typeof exports != "undefined" ? exports : typeof define == "function" && define.amd ? {} : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

/*! howler.js v2.1.1 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e?0:o._volume,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"suspended":"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n,o=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome|Safari/i.test(e._navigator&&e._navigator.userAgent);if(!e._audioUnlocked&&e.ctx&&o){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(var o=0;o<e.html5PoolSize;o++){var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}for(var o=0;o<e._howls.length;o++)if(!e._howls[o]._webAudio)for(var a=e._howls[o]._getSoundIds(),u=0;u<a.length;u++){var i=e._howls[o]._soundById(a[u]);i&&i._node&&!i._node._unlocked&&(i._node._unlocked=!0,i._node.load())}e._autoResume();var d=e.ctx.createBufferSource();d.buffer=e._scratchBuffer,d.connect(e.ctx.destination),void 0===d.start?d.noteOn(0):d.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),d.onended=function(){d.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var o=(new Audio).play();return o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var o=this||n;return e._unlocked&&o._html5AudioPool.push(e),o},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._xhrWithCredentials=e.xhrWithCredentials||!1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onunlock=e.onunlock?[{fn:e.onunlock}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e&&(e="__default",!t._playLock)){for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state){i._sprite=e,i._ended=!1;var d=i._id;return t._queue.push({event:"play",action:function(){t.play(d)}}),d}if(r&&!i._paused)return o||t._loadQueue("play"),i._id;t._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate),c=t._sprite[e][0]/1e3,f=(t._sprite[e][0]+t._sprite[e][1])/1e3,p=!(!i._loop&&!t._sprite[e][2]);i._sprite=e,i._ended=!1;var m=function(){i._paused=!1,i._seek=_,i._start=c,i._stop=f,i._loop=p};if(_>=f)return void t._ended(i);var v=i._node;if(t._webAudio){var h=function(){t._playLock=!1,m(),t._refreshBuffer(i);var e=i._muted||t._muted?0:i._volume;v.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===v.bufferSource.start?i._loop?v.bufferSource.noteGrainOn(0,_,86400):v.bufferSource.noteGrainOn(0,_,s):i._loop?v.bufferSource.start(0,_,86400):v.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||setTimeout(function(){t._emit("play",i._id),t._loadQueue()},0)};"running"===n.state?h():(t._playLock=!0,t.once("resume",h),t._clearTimer(i._id))}else{var y=function(){v.currentTime=_,v.muted=i._muted||t._muted||n._muted||v.muted,v.volume=i._volume*n.volume(),v.playbackRate=i._rate;try{var r=v.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(t._playLock=!0,m(),r.then(function(){t._playLock=!1,v._unlocked=!0,o||(t._emit("play",i._id),t._loadQueue())}).catch(function(){t._playLock=!1,t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),i._ended=!0,i._paused=!0})):o||(t._playLock=!1,m(),t._emit("play",i._id),t._loadQueue()),v.playbackRate=i._rate,v.paused)return void t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||i._loop?t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l):(t._endTimers[i._id]=function(){t._ended(i),v.removeEventListener("ended",t._endTimers[i._id],!1)},v.addEventListener("ended",t._endTimers[i._id],!1))}catch(e){t._emit("playerror",i._id,e)}},g=window&&window.ejecta||!v.readyState&&n._navigator.isCocoonJS;if(v.readyState>=3||g)y();else{t._playLock=!0;var b=function(){y(),v.removeEventListener(n._canPlayEvent,b,!1)};v.addEventListener(n._canPlayEvent,b,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause())),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,u._interval&&t._stopFade(u._id),t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;e=parseFloat(e),o=parseFloat(o),t=parseFloat(t),a.volume(e,r);for(var u=a._getSoundIds(r),i=0;i<u.length;i++){var d=a._soundById(u[i]);if(d){if(r||a._stopFade(u[i]),a._webAudio&&!d._muted){var _=n.ctx.currentTime,s=_+t/1e3;d._volume=e,d._node.gain.setValueAtTime(e,_),d._node.gain.linearRampToValueAtTime(o,s)}a._startFadeInterval(d,e,o,t,u[i],void 0===r)}}return a},_startFadeInterval:function(e,n,o,t,r,a){var u=this,i=n,d=o-n,_=Math.abs(d/.01),s=Math.max(4,_>0?t/_:t),l=Date.now();e._fadeTo=o,e._interval=setInterval(function(){var r=(Date.now()-l)/t;l=Date.now(),i+=d*r,i=Math.max(0,i),i=Math.min(1,i),i=Math.round(100*i)/100,u._webAudio?e._volume=i:u.volume(i,e._id,!0),a&&(u._volume=i),(o<n&&i<=o||o>n&&i>=o)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(o,e._id),u._emit("fade",e._id))},s)},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o.volume(t._fadeTo,e),t._fadeTo=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop)));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){t.playing(o[d])&&(i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart),i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):t._sounds.length&&(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),t._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var l=function(){t._emit("seek",o),s&&t.play(o,!0)};if(s&&!t._webAudio){var c=function(){t._playLock?setTimeout(c,0):l()};setTimeout(c,0)}else l()}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++){if(o[t]._paused||e.stop(o[t]._id),!e._webAudio){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(o[t]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1),n._releaseHtml5Audio(o[t]._node)}delete o[t]._node,e._clearTimer(o[t]._id)}var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1);var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src||e._src.indexOf(n._howls[t]._src)>=0){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var i=Object.keys(t);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(t[i[a]])&&(t[i[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t._loadQueue(e),t},_loadQueue:function(e){var n=this;if(n._queue.length>0){var o=n._queue[0];o.event===e&&(n._queue.shift(),n._loadQueue()),e||o.action()}return n},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id,!0),o},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var o=n._soundById(e);o&&o._node&&o._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),o},_cleanBuffer:function(e){var o=this,t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}return e.bufferSource=null,o}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload="auto",e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.withCredentials=e._xhrWithCredentials,_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,o){var t=function(){o._emit("loaderror",null,"Decoding audio data failed.")},a=function(e){e&&o._sounds.length>0?(r[o._src]=e,d(o,e)):t()};"undefined"!=typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(a).catch(t):n.ctx.decodeAudioData(e,a,t)},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){if(n.usingWebAudio){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:1,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();
/*! Spatial Plugin */
!function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var r=this;return r.ctx&&r.ctx.listener?(n="number"!=typeof n?r._pos[1]:n,t="number"!=typeof t?r._pos[2]:t,"number"!=typeof e?r._pos:(r._pos=[e,n,t],void 0!==r.ctx.listener.positionX?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]),r)):r},HowlerGlobal.prototype.orientation=function(e,n,t,r,o,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;var s=a._orientation;return n="number"!=typeof n?s[1]:n,t="number"!=typeof t?s[2]:t,r="number"!=typeof r?s[3]:r,o="number"!=typeof o?s[4]:o,i="number"!=typeof i?s[5]:i,"number"!=typeof e?s:(a._orientation=[e,n,t,r,o,i],void 0!==a.ctx.listener.forwardX?(a.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.forwardZ.setTargetAtTime(t,Howler.ctx.currentTime,.1),a.ctx.listener.upX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.upY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.upZ.setTargetAtTime(t,Howler.ctx.currentTime,.1)):a.ctx.listener.setOrientation(e,n,t,r,o,i),a)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:0,distanceModel:void 0!==n.distanceModel?n.distanceModel:"inverse",maxDistance:void 0!==n.maxDistance?n.maxDistance:1e4,panningModel:void 0!==n.panningModel?n.panningModel:"HRTF",refDistance:void 0!==n.refDistance?n.refDistance:1,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"stereo",action:function(){r.stereo(n,t)}}),r;var o=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof n)return r._stereo;r._stereo=n,r._pos=[n,0,0]}for(var i=r._getSoundIds(t),a=0;a<i.length;a++){var s=r._soundById(i[a]);if(s){if("number"!=typeof n)return s._stereo;s._stereo=n,s._pos=[n,0,0],s._node&&(s._pannerAttr.panningModel="equalpower",s._panner&&s._panner.pan||e(s,o),"spatial"===o?void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):s._panner.setPosition(n,0,0):s._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),r._emit("stereo",s._id)}}return r},Howl.prototype.pos=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(n,t,r,o)}}),i;if(t="number"!=typeof t?0:t,r="number"!=typeof r?-.5:r,void 0===o){if("number"!=typeof n)return i._pos;i._pos=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._pos;p._pos=[n,t,r],p._node&&(p._panner&&!p._panner.pan||e(p,"spatial"),void 0!==p._panner.positionX?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setPosition(n,t,r)),i._emit("pos",p._id)}}return i},Howl.prototype.orientation=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(n,t,r,o)}}),i;if(t="number"!=typeof t?i._orientation[1]:t,r="number"!=typeof r?i._orientation[2]:r,void 0===o){if("number"!=typeof n)return i._orientation;i._orientation=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._orientation;p._orientation=[n,t,r],p._node&&(p._panner||(p._pos||(p._pos=i._pos||[0,0,-.5]),e(p,"spatial")),void 0!==p._panner.orientationX?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setOrientation(n,t,r)),i._emit("orientation",p._id)}}return i},Howl.prototype.pannerAttr=function(){var n,t,r,o=this,i=arguments;if(!o._webAudio)return o;if(0===i.length)return o._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return r=o._soundById(parseInt(i[0],10)),r?r._pannerAttr:o._pannerAttr;n=i[0],void 0===t&&(n.pannerAttr||(n.pannerAttr={coneInnerAngle:n.coneInnerAngle,coneOuterAngle:n.coneOuterAngle,coneOuterGain:n.coneOuterGain,distanceModel:n.distanceModel,maxDistance:n.maxDistance,refDistance:n.refDistance,rolloffFactor:n.rolloffFactor,panningModel:n.panningModel}),o._pannerAttr={coneInnerAngle:void 0!==n.pannerAttr.coneInnerAngle?n.pannerAttr.coneInnerAngle:o._coneInnerAngle,coneOuterAngle:void 0!==n.pannerAttr.coneOuterAngle?n.pannerAttr.coneOuterAngle:o._coneOuterAngle,coneOuterGain:void 0!==n.pannerAttr.coneOuterGain?n.pannerAttr.coneOuterGain:o._coneOuterGain,distanceModel:void 0!==n.pannerAttr.distanceModel?n.pannerAttr.distanceModel:o._distanceModel,maxDistance:void 0!==n.pannerAttr.maxDistance?n.pannerAttr.maxDistance:o._maxDistance,refDistance:void 0!==n.pannerAttr.refDistance?n.pannerAttr.refDistance:o._refDistance,rolloffFactor:void 0!==n.pannerAttr.rolloffFactor?n.pannerAttr.rolloffFactor:o._rolloffFactor,panningModel:void 0!==n.pannerAttr.panningModel?n.pannerAttr.panningModel:o._panningModel})}else 2===i.length&&(n=i[0],t=parseInt(i[1],10));for(var a=o._getSoundIds(t),s=0;s<a.length;s++)if(r=o._soundById(a[s])){var p=r._pannerAttr;p={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:p.coneOuterAngle,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:p.coneOuterGain,distanceModel:void 0!==n.distanceModel?n.distanceModel:p.distanceModel,maxDistance:void 0!==n.maxDistance?n.maxDistance:p.maxDistance,refDistance:void 0!==n.refDistance?n.refDistance:p.refDistance,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:p.rolloffFactor,panningModel:void 0!==n.panningModel?n.panningModel:p.panningModel};var c=r._panner;c?(c.coneInnerAngle=p.coneInnerAngle,c.coneOuterAngle=p.coneOuterAngle,c.coneOuterGain=p.coneOuterGain,c.distanceModel=p.distanceModel,c.maxDistance=p.maxDistance,c.refDistance=p.refDistance,c.rolloffFactor=p.rolloffFactor,c.panningModel=p.panningModel):(r._pos||(r._pos=o._pos||[0,0,-.5]),e(r,"spatial"))}return o},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,n._stereo?t.stereo(n._stereo):n._pos?t.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,t._refreshBuffer(n)),e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}();
/* pako 1.0.2 nodeca/pako */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.pako=t()}}(function(){return function t(e,a,i){function n(s,o){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(r)return r(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var d=a[s]={exports:{}};e[s][0].call(d.exports,function(t){var a=e[s][1][t];return n(a?a:t)},d,d.exports,t,e,a,i)}return a[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=l.assign({level:w,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var a=o.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==b)throw new Error(d[a]);if(e.header&&o.deflateSetHeader(this.strm,e.header),e.dictionary){var n;if(n="string"==typeof e.dictionary?h.string2buf(e.dictionary):"[object ArrayBuffer]"===_.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=o.deflateSetDictionary(this.strm,n),a!==b)throw new Error(d[a]);this._dict_set=!0}}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function r(t,e){return e=e||{},e.raw=!0,n(t,e)}function s(t,e){return e=e||{},e.gzip=!0,n(t,e)}var o=t("./zlib/deflate"),l=t("./utils/common"),h=t("./utils/strings"),d=t("./zlib/messages"),f=t("./zlib/zstream"),_=Object.prototype.toString,u=0,c=4,b=0,g=1,m=2,w=-1,p=0,v=8;i.prototype.push=function(t,e){var a,i,n=this.strm,r=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:e===!0?c:u,"string"==typeof t?n.input=h.string2buf(t):"[object ArrayBuffer]"===_.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&&(n.output=new l.Buf8(r),n.next_out=0,n.avail_out=r),a=o.deflate(n,i),a!==g&&a!==b)return this.onEnd(a),this.ended=!0,!1;0!==n.avail_out&&(0!==n.avail_in||i!==c&&i!==m)||("string"===this.options.to?this.onData(h.buf2binstring(l.shrinkBuf(n.output,n.next_out))):this.onData(l.shrinkBuf(n.output,n.next_out)))}while((n.avail_in>0||0===n.avail_out)&&a!==g);return i===c?(a=o.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===b):i!==m||(this.onEnd(b),n.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===b&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=i,a.deflate=n,a.deflateRaw=r,a.gzip=s},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(t,e,a){"use strict";function i(t){if(!(this instanceof i))return new i(t);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0===(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var a=s.inflateInit2(this.strm,e.windowBits);if(a!==h.Z_OK)throw new Error(d[a]);this.header=new _,s.inflateGetHeader(this.strm,this.header)}function n(t,e){var a=new i(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}function r(t,e){return e=e||{},e.raw=!0,n(t,e)}var s=t("./zlib/inflate"),o=t("./utils/common"),l=t("./utils/strings"),h=t("./zlib/constants"),d=t("./zlib/messages"),f=t("./zlib/zstream"),_=t("./zlib/gzheader"),u=Object.prototype.toString;i.prototype.push=function(t,e){var a,i,n,r,d,f,_=this.strm,c=this.options.chunkSize,b=this.options.dictionary,g=!1;if(this.ended)return!1;i=e===~~e?e:e===!0?h.Z_FINISH:h.Z_NO_FLUSH,"string"==typeof t?_.input=l.binstring2buf(t):"[object ArrayBuffer]"===u.call(t)?_.input=new Uint8Array(t):_.input=t,_.next_in=0,_.avail_in=_.input.length;do{if(0===_.avail_out&&(_.output=new o.Buf8(c),_.next_out=0,_.avail_out=c),a=s.inflate(_,h.Z_NO_FLUSH),a===h.Z_NEED_DICT&&b&&(f="string"==typeof b?l.string2buf(b):"[object ArrayBuffer]"===u.call(b)?new Uint8Array(b):b,a=s.inflateSetDictionary(this.strm,f)),a===h.Z_BUF_ERROR&&g===!0&&(a=h.Z_OK,g=!1),a!==h.Z_STREAM_END&&a!==h.Z_OK)return this.onEnd(a),this.ended=!0,!1;_.next_out&&(0!==_.avail_out&&a!==h.Z_STREAM_END&&(0!==_.avail_in||i!==h.Z_FINISH&&i!==h.Z_SYNC_FLUSH)||("string"===this.options.to?(n=l.utf8border(_.output,_.next_out),r=_.next_out-n,d=l.buf2string(_.output,n),_.next_out=r,_.avail_out=c-r,r&&o.arraySet(_.output,_.output,n,r,0),this.onData(d)):this.onData(o.shrinkBuf(_.output,_.next_out)))),0===_.avail_in&&0===_.avail_out&&(g=!0)}while((_.avail_in>0||0===_.avail_out)&&a!==h.Z_STREAM_END);return a===h.Z_STREAM_END&&(i=h.Z_FINISH),i===h.Z_FINISH?(a=s.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===h.Z_OK):i!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),_.avail_out=0,!0)},i.prototype.onData=function(t){this.chunks.push(t)},i.prototype.onEnd=function(t){t===h.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Inflate=i,a.inflate=n,a.inflateRaw=r,a.ungzip=n},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(t,e,a){"use strict";var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var i in a)a.hasOwnProperty(i)&&(t[i]=a[i])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,a,i,n){if(e.subarray&&t.subarray)return void t.set(e.subarray(a,a+i),n);for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){var e,a,i,n,r,s;for(i=0,e=0,a=t.length;e<a;e++)i+=t[e].length;for(s=new Uint8Array(i),n=0,e=0,a=t.length;e<a;e++)r=t[e],s.set(r,n),n+=r.length;return s}},r={arraySet:function(t,e,a,i,n){for(var r=0;r<i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,n)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,r))},a.setTyped(i)},{}],4:[function(t,e,a){"use strict";function i(t,e){if(e<65537&&(t.subarray&&s||!t.subarray&&r))return String.fromCharCode.apply(null,n.shrinkBuf(t,e));for(var a="",i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a}var n=t("./common"),r=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(t){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){s=!1}for(var o=new n.Buf8(256),l=0;l<256;l++)o[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;o[254]=o[254]=1,a.string2buf=function(t){var e,a,i,r,s,o=t.length,l=0;for(r=0;r<o;r++)a=t.charCodeAt(r),55296===(64512&a)&&r+1<o&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),l+=a<128?1:a<2048?2:a<65536?3:4;for(e=new n.Buf8(l),s=0,r=0;s<l;r++)a=t.charCodeAt(r),55296===(64512&a)&&r+1<o&&(i=t.charCodeAt(r+1),56320===(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),r++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return i(t,t.length)},a.binstring2buf=function(t){for(var e=new n.Buf8(t.length),a=0,i=e.length;a<i;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,n,r,s,l=e||t.length,h=new Array(2*l);for(n=0,a=0;a<l;)if(r=t[a++],r<128)h[n++]=r;else if(s=o[r],s>4)h[n++]=65533,a+=s-1;else{for(r&=2===s?31:3===s?15:7;s>1&&a<l;)r=r<<6|63&t[a++],s--;s>1?h[n++]=65533:r<65536?h[n++]=r:(r-=65536,h[n++]=55296|r>>10&1023,h[n++]=56320|1023&r)}return i(h,n)},a.utf8border=function(t,e){var a;for(e=e||t.length,e>t.length&&(e=t.length),a=e-1;a>=0&&128===(192&t[a]);)a--;return a<0?e:0===a?e:a+o[t[a]]>e?a:e}},{"./common":3}],5:[function(t,e,a){"use strict";function i(t,e,a,i){for(var n=65535&t|0,r=t>>>16&65535|0,s=0;0!==a;){s=a>2e3?2e3:a,a-=s;do n=n+e[i++]|0,r=r+n|0;while(--s);n%=65521,r%=65521}return n|r<<16|0}e.exports=i},{}],6:[function(t,e,a){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(t,e,a){"use strict";function i(){for(var t,e=[],a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}function n(t,e,a,i){var n=r,s=i+a;t^=-1;for(var o=i;o<s;o++)t=t>>>8^n[255&(t^e[o])];return t^-1}var r=i();e.exports=n},{}],8:[function(t,e,a){"use strict";function i(t,e){return t.msg=D[e],e}function n(t){return(t<<1)-(t>4?9:0)}function r(t){for(var e=t.length;--e>=0;)t[e]=0}function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(R.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function o(t,e){C._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}function l(t,e){t.pending_buf[t.pending++]=e}function h(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function d(t,e,a,i){var n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,R.arraySet(e,t.input,t.next_in,n,a),1===t.state.wrap?t.adler=N(t.adler,e,n,a):2===t.state.wrap&&(t.adler=O(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)}function f(t,e){var a,i,n=t.max_chain_length,r=t.strstart,s=t.prev_length,o=t.nice_match,l=t.strstart>t.w_size-ft?t.strstart-(t.w_size-ft):0,h=t.window,d=t.w_mask,f=t.prev,_=t.strstart+dt,u=h[r+s-1],c=h[r+s];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do if(a=e,h[a+s]===c&&h[a+s-1]===u&&h[a]===h[r]&&h[++a]===h[r+1]){r+=2,a++;do;while(h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&h[++r]===h[++a]&&r<_);if(i=dt-(_-r),r=_-dt,i>s){if(t.match_start=e,s=i,i>=o)break;u=h[r+s-1],c=h[r+s]}}while((e=f[e&d])>l&&0!==--n);return s<=t.lookahead?s:t.lookahead}function _(t){var e,a,i,n,r,s=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-ft)){R.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,a=t.hash_size,e=a;do i=t.head[--e],t.head[e]=i>=s?i-s:0;while(--a);a=s,e=a;do i=t.prev[--e],t.prev[e]=i>=s?i-s:0;while(--a);n+=s}if(0===t.strm.avail_in)break;if(a=d(t.strm,t.window,t.strstart+t.lookahead,n),t.lookahead+=a,t.lookahead+t.insert>=ht)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[r+ht-1])&t.hash_mask,t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<ht)););}while(t.lookahead<ft&&0!==t.strm.avail_in)}function u(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(_(t),0===t.lookahead&&e===I)return vt;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,o(t,!1),0===t.strm.avail_out))return vt;if(t.strstart-t.block_start>=t.w_size-ft&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.strstart>t.block_start&&(o(t,!1),0===t.strm.avail_out)?vt:vt}function c(t,e){for(var a,i;;){if(t.lookahead<ft){if(_(t),t.lookahead<ft&&e===I)return vt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ft&&(t.match_length=f(t,a)),t.match_length>=ht)if(i=C._tr_tally(t,t.strstart-t.match_start,t.match_length-ht),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=ht){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else i=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=t.strstart<ht-1?t.strstart:ht-1,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function b(t,e){for(var a,i,n;;){if(t.lookahead<ft){if(_(t),t.lookahead<ft&&e===I)return vt;if(0===t.lookahead)break}if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=ht-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ft&&(t.match_length=f(t,a),t.match_length<=5&&(t.strategy===q||t.match_length===ht&&t.strstart-t.match_start>4096)&&(t.match_length=ht-1)),t.prev_length>=ht&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-ht,i=C._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-ht),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=n&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=ht-1,t.strstart++,i&&(o(t,!1),0===t.strm.avail_out))return vt}else if(t.match_available){if(i=C._tr_tally(t,0,t.window[t.strstart-1]),i&&o(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return vt}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=C._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<ht-1?t.strstart:ht-1,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function g(t,e){for(var a,i,n,r,s=t.window;;){if(t.lookahead<=dt){if(_(t),t.lookahead<=dt&&e===I)return vt;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=ht&&t.strstart>0&&(n=t.strstart-1,i=s[n],i===s[++n]&&i===s[++n]&&i===s[++n])){r=t.strstart+dt;do;while(i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&i===s[++n]&&n<r);t.match_length=dt-(r-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=ht?(a=C._tr_tally(t,1,t.match_length-ht),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function m(t,e){for(var a;;){if(0===t.lookahead&&(_(t),0===t.lookahead)){if(e===I)return vt;break}if(t.match_length=0,a=C._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(o(t,!1),0===t.strm.avail_out))return vt}return t.insert=0,e===F?(o(t,!0),0===t.strm.avail_out?yt:xt):t.last_lit&&(o(t,!1),0===t.strm.avail_out)?vt:kt}function w(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}function p(t){t.window_size=2*t.w_size,r(t.head),t.max_lazy_match=Z[t.level].max_lazy,t.good_match=Z[t.level].good_length,t.nice_match=Z[t.level].nice_length,t.max_chain_length=Z[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ht-1,t.match_available=0,t.ins_h=0}function v(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=V,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new R.Buf16(2*ot),this.dyn_dtree=new R.Buf16(2*(2*rt+1)),this.bl_tree=new R.Buf16(2*(2*st+1)),r(this.dyn_ltree),r(this.dyn_dtree),r(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new R.Buf16(lt+1),this.heap=new R.Buf16(2*nt+1),r(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new R.Buf16(2*nt+1),r(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function k(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=Q,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ut:wt,t.adler=2===e.wrap?0:1,e.last_flush=I,C._tr_init(e),H):i(t,K)}function y(t){var e=k(t);return e===H&&p(t.state),e}function x(t,e){return t&&t.state?2!==t.state.wrap?K:(t.state.gzhead=e,H):K}function z(t,e,a,n,r,s){if(!t)return K;var o=1;if(e===Y&&(e=6),n<0?(o=0,n=-n):n>15&&(o=2,n-=16),r<1||r>$||a!==V||n<8||n>15||e<0||e>9||s<0||s>W)return i(t,K);8===n&&(n=9);var l=new v;return t.state=l,l.strm=t,l.wrap=o,l.gzhead=null,l.w_bits=n,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=r+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ht-1)/ht),l.window=new R.Buf8(2*l.w_size),l.head=new R.Buf16(l.hash_size),l.prev=new R.Buf16(l.w_size),l.lit_bufsize=1<<r+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new R.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,y(t)}function B(t,e){return z(t,e,V,tt,et,J)}function S(t,e){var a,o,d,f;if(!t||!t.state||e>L||e<0)return t?i(t,K):K;if(o=t.state,!t.output||!t.input&&0!==t.avail_in||o.status===pt&&e!==F)return i(t,0===t.avail_out?P:K);if(o.strm=t,a=o.last_flush,o.last_flush=e,o.status===ut)if(2===o.wrap)t.adler=0,l(o,31),l(o,139),l(o,8),o.gzhead?(l(o,(o.gzhead.text?1:0)+(o.gzhead.hcrc?2:0)+(o.gzhead.extra?4:0)+(o.gzhead.name?8:0)+(o.gzhead.comment?16:0)),l(o,255&o.gzhead.time),l(o,o.gzhead.time>>8&255),l(o,o.gzhead.time>>16&255),l(o,o.gzhead.time>>24&255),l(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),l(o,255&o.gzhead.os),o.gzhead.extra&&o.gzhead.extra.length&&(l(o,255&o.gzhead.extra.length),l(o,o.gzhead.extra.length>>8&255)),o.gzhead.hcrc&&(t.adler=O(t.adler,o.pending_buf,o.pending,0)),o.gzindex=0,o.status=ct):(l(o,0),l(o,0),l(o,0),l(o,0),l(o,0),l(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),l(o,zt),o.status=wt);else{var _=V+(o.w_bits-8<<4)<<8,u=-1;u=o.strategy>=G||o.level<2?0:o.level<6?1:6===o.level?2:3,_|=u<<6,0!==o.strstart&&(_|=_t),_+=31-_%31,o.status=wt,h(o,_),0!==o.strstart&&(h(o,t.adler>>>16),h(o,65535&t.adler)),t.adler=1}if(o.status===ct)if(o.gzhead.extra){for(d=o.pending;o.gzindex<(65535&o.gzhead.extra.length)&&(o.pending!==o.pending_buf_size||(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending!==o.pending_buf_size));)l(o,255&o.gzhead.extra[o.gzindex]),o.gzindex++;o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),o.gzindex===o.gzhead.extra.length&&(o.gzindex=0,o.status=bt)}else o.status=bt;if(o.status===bt)if(o.gzhead.name){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.name.length?255&o.gzhead.name.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.gzindex=0,o.status=gt)}else o.status=gt;if(o.status===gt)if(o.gzhead.comment){d=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),s(t),d=o.pending,o.pending===o.pending_buf_size)){f=1;break}f=o.gzindex<o.gzhead.comment.length?255&o.gzhead.comment.charCodeAt(o.gzindex++):0,l(o,f)}while(0!==f);o.gzhead.hcrc&&o.pending>d&&(t.adler=O(t.adler,o.pending_buf,o.pending-d,d)),0===f&&(o.status=mt)}else o.status=mt;if(o.status===mt&&(o.gzhead.hcrc?(o.pending+2>o.pending_buf_size&&s(t),o.pending+2<=o.pending_buf_size&&(l(o,255&t.adler),l(o,t.adler>>8&255),t.adler=0,o.status=wt)):o.status=wt),0!==o.pending){if(s(t),0===t.avail_out)return o.last_flush=-1,H}else if(0===t.avail_in&&n(e)<=n(a)&&e!==F)return i(t,P);if(o.status===pt&&0!==t.avail_in)return i(t,P);if(0!==t.avail_in||0!==o.lookahead||e!==I&&o.status!==pt){var c=o.strategy===G?m(o,e):o.strategy===X?g(o,e):Z[o.level].func(o,e);if(c!==yt&&c!==xt||(o.status=pt),c===vt||c===yt)return 0===t.avail_out&&(o.last_flush=-1),H;if(c===kt&&(e===U?C._tr_align(o):e!==L&&(C._tr_stored_block(o,0,0,!1),e===T&&(r(o.head),0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(t),0===t.avail_out))return o.last_flush=-1,H}return e!==F?H:o.wrap<=0?j:(2===o.wrap?(l(o,255&t.adler),l(o,t.adler>>8&255),l(o,t.adler>>16&255),l(o,t.adler>>24&255),l(o,255&t.total_in),l(o,t.total_in>>8&255),l(o,t.total_in>>16&255),l(o,t.total_in>>24&255)):(h(o,t.adler>>>16),h(o,65535&t.adler)),s(t),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?H:j)}function E(t){var e;return t&&t.state?(e=t.state.status,e!==ut&&e!==ct&&e!==bt&&e!==gt&&e!==mt&&e!==wt&&e!==pt?i(t,K):(t.state=null,e===wt?i(t,M):H)):K}function A(t,e){var a,i,n,s,o,l,h,d,f=e.length;if(!t||!t.state)return K;if(a=t.state,s=a.wrap,2===s||1===s&&a.status!==ut||a.lookahead)return K;for(1===s&&(t.adler=N(t.adler,e,f,0)),a.wrap=0,f>=a.w_size&&(0===s&&(r(a.head),a.strstart=0,a.block_start=0,a.insert=0),d=new R.Buf8(a.w_size),R.arraySet(d,e,f-a.w_size,a.w_size,0),e=d,f=a.w_size),o=t.avail_in,l=t.next_in,h=t.input,t.avail_in=f,t.next_in=0,t.input=e,_(a);a.lookahead>=ht;){i=a.strstart,n=a.lookahead-(ht-1);do a.ins_h=(a.ins_h<<a.hash_shift^a.window[i+ht-1])&a.hash_mask,a.prev[i&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=i,i++;while(--n);a.strstart=i,a.lookahead=ht-1,_(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=ht-1,a.match_available=0,t.next_in=l,t.input=h,t.avail_in=o,a.wrap=s,H}var Z,R=t("../utils/common"),C=t("./trees"),N=t("./adler32"),O=t("./crc32"),D=t("./messages"),I=0,U=1,T=3,F=4,L=5,H=0,j=1,K=-2,M=-3,P=-5,Y=-1,q=1,G=2,X=3,W=4,J=0,Q=2,V=8,$=9,tt=15,et=8,at=29,it=256,nt=it+1+at,rt=30,st=19,ot=2*nt+1,lt=15,ht=3,dt=258,ft=dt+ht+1,_t=32,ut=42,ct=69,bt=73,gt=91,mt=103,wt=113,pt=666,vt=1,kt=2,yt=3,xt=4,zt=3;Z=[new w(0,0,0,0,u),new w(4,4,8,4,c),new w(4,5,16,8,c),new w(4,6,32,32,c),new w(4,4,16,16,b),new w(8,16,32,32,b),new w(8,16,128,128,b),new w(8,32,128,256,b),new w(32,128,258,1024,b),new w(32,258,258,4096,b)],a.deflateInit=B,a.deflateInit2=z,a.deflateReset=y,a.deflateResetKeep=k,a.deflateSetHeader=x,a.deflate=S,a.deflateEnd=E,a.deflateSetDictionary=A,a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(t,e,a){"use strict";function i(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}e.exports=i},{}],10:[function(t,e,a){"use strict";var i=30,n=12;e.exports=function(t,e){var a,r,s,o,l,h,d,f,_,u,c,b,g,m,w,p,v,k,y,x,z,B,S,E,A;a=t.state,r=t.next_in,E=t.input,s=r+(t.avail_in-5),o=t.next_out,A=t.output,l=o-(e-t.avail_out),h=o+(t.avail_out-257),d=a.dmax,f=a.wsize,_=a.whave,u=a.wnext,c=a.window,b=a.hold,g=a.bits,m=a.lencode,w=a.distcode,p=(1<<a.lenbits)-1,v=(1<<a.distbits)-1;t:do{g<15&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=m[b&p];e:for(;;){if(y=k>>>24,b>>>=y,g-=y,y=k>>>16&255,0===y)A[o++]=65535&k;else{if(!(16&y)){if(0===(64&y)){k=m[(65535&k)+(b&(1<<y)-1)];continue e}if(32&y){a.mode=n;break t}t.msg="invalid literal/length code",a.mode=i;break t}x=65535&k,y&=15,y&&(g<y&&(b+=E[r++]<<g,g+=8),x+=b&(1<<y)-1,b>>>=y,g-=y),g<15&&(b+=E[r++]<<g,g+=8,b+=E[r++]<<g,g+=8),k=w[b&v];a:for(;;){if(y=k>>>24,b>>>=y,g-=y,y=k>>>16&255,!(16&y)){if(0===(64&y)){k=w[(65535&k)+(b&(1<<y)-1)];continue a}t.msg="invalid distance code",a.mode=i;break t}if(z=65535&k,y&=15,g<y&&(b+=E[r++]<<g,g+=8,g<y&&(b+=E[r++]<<g,g+=8)),z+=b&(1<<y)-1,z>d){t.msg="invalid distance too far back",a.mode=i;break t}if(b>>>=y,g-=y,y=o-l,z>y){if(y=z-y,y>_&&a.sane){t.msg="invalid distance too far back",a.mode=i;break t}if(B=0,S=c,0===u){if(B+=f-y,y<x){x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}}else if(u<y){if(B+=f+u-y,y-=u,y<x){x-=y;do A[o++]=c[B++];while(--y);if(B=0,u<x){y=u,x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}}}else if(B+=u-y,y<x){x-=y;do A[o++]=c[B++];while(--y);B=o-z,S=A}for(;x>2;)A[o++]=S[B++],A[o++]=S[B++],A[o++]=S[B++],x-=3;x&&(A[o++]=S[B++],x>1&&(A[o++]=S[B++]))}else{B=o-z;do A[o++]=A[B++],A[o++]=A[B++],A[o++]=A[B++],x-=3;while(x>2);x&&(A[o++]=A[B++],x>1&&(A[o++]=A[B++]))}break}}break}}while(r<s&&o<h);x=g>>3,r-=x,g-=x<<3,b&=(1<<g)-1,t.next_in=r,t.next_out=o,t.avail_in=r<s?5+(s-r):5-(r-s),t.avail_out=o<h?257+(h-o):257-(o-h),a.hold=b,a.bits=g}},{}],11:[function(t,e,a){"use strict";function i(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function n(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new w.Buf16(320),this.work=new w.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function r(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=T,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new w.Buf32(bt),e.distcode=e.distdyn=new w.Buf32(gt),e.sane=1,e.back=-1,Z):N}function s(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,r(t)):N}function o(t,e){var a,i;return t&&t.state?(i=t.state,e<0?(a=0,e=-e):(a=(e>>4)+1,e<48&&(e&=15)),e&&(e<8||e>15)?N:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,s(t))):N}function l(t,e){var a,i;return t?(i=new n,t.state=i,i.window=null,a=o(t,e),a!==Z&&(t.state=null),a):N}function h(t){return l(t,wt)}function d(t){if(pt){var e;for(g=new w.Buf32(512),m=new w.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(y(z,t.lens,0,288,g,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;y(B,t.lens,0,32,m,0,t.work,{bits:5}),pt=!1}t.lencode=g,t.lenbits=9,t.distcode=m,t.distbits=5}function f(t,e,a,i){var n,r=t.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new w.Buf8(r.wsize)),i>=r.wsize?(w.arraySet(r.window,e,a-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(n=r.wsize-r.wnext,n>i&&(n=i),w.arraySet(r.window,e,a-i,n,r.wnext),i-=n,i?(w.arraySet(r.window,e,a-i,i,0),r.wnext=i,r.whave=r.wsize):(r.wnext+=n,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=n))),0}function _(t,e){var a,n,r,s,o,l,h,_,u,c,b,g,m,bt,gt,mt,wt,pt,vt,kt,yt,xt,zt,Bt,St=0,Et=new w.Buf8(4),At=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return N;a=t.state,a.mode===X&&(a.mode=W),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,c=l,b=h,xt=Z;t:for(;;)switch(a.mode){case T:if(0===a.wrap){a.mode=W;break}for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(2&a.wrap&&35615===_){a.check=0,Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0),_=0,u=0,a.mode=F;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&_)<<8)+(_>>8))%31){t.msg="incorrect header check",a.mode=_t;break}if((15&_)!==U){t.msg="unknown compression method",a.mode=_t;break}if(_>>>=4,u-=4,yt=(15&_)+8,0===a.wbits)a.wbits=yt;else if(yt>a.wbits){t.msg="invalid window size",a.mode=_t;break}a.dmax=1<<yt,t.adler=a.check=1,a.mode=512&_?q:X,_=0,u=0;break;case F:for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(a.flags=_,(255&a.flags)!==U){t.msg="unknown compression method",a.mode=_t;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=_t;break}a.head&&(a.head.text=_>>8&1),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0,a.mode=L;case L:for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.time=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,Et[2]=_>>>16&255,Et[3]=_>>>24&255,a.check=v(a.check,Et,4,0)),_=0,u=0,a.mode=H;case H:for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.head&&(a.head.xflags=255&_,a.head.os=_>>8),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0,a.mode=j;case j:if(1024&a.flags){for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length=_,a.head&&(a.head.extra_len=_),512&a.flags&&(Et[0]=255&_,Et[1]=_>>>8&255,a.check=v(a.check,Et,2,0)),_=0,u=0}else a.head&&(a.head.extra=null);a.mode=K;case K:if(1024&a.flags&&(g=a.length,g>l&&(g=l),g&&(a.head&&(yt=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),w.arraySet(a.head.extra,n,s,g,yt)),512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,a.length-=g),a.length))break t;a.length=0,a.mode=M;case M:if(2048&a.flags){if(0===l)break t;g=0;do yt=n[s+g++],a.head&&yt&&a.length<65536&&(a.head.name+=String.fromCharCode(yt));while(yt&&g<l);if(512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,yt)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=P;case P:if(4096&a.flags){if(0===l)break t;g=0;do yt=n[s+g++],a.head&&yt&&a.length<65536&&(a.head.comment+=String.fromCharCode(yt));while(yt&&g<l);if(512&a.flags&&(a.check=v(a.check,n,g,s)),l-=g,s+=g,yt)break t}else a.head&&(a.head.comment=null);a.mode=Y;case Y:if(512&a.flags){for(;u<16;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(65535&a.check)){t.msg="header crc mismatch",a.mode=_t;break}_=0,u=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=X;break;case q:for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}t.adler=a.check=i(_),_=0,u=0,a.mode=G;case G:if(0===a.havedict)return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,C;t.adler=a.check=1,a.mode=X;case X:if(e===E||e===A)break t;case W:if(a.last){_>>>=7&u,u-=7&u,a.mode=ht;break}for(;u<3;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}switch(a.last=1&_,_>>>=1,u-=1,3&_){case 0:a.mode=J;break;case 1:if(d(a),a.mode=at,e===A){_>>>=2,u-=2;break t}break;case 2:a.mode=$;break;case 3:t.msg="invalid block type",a.mode=_t}_>>>=2,u-=2;break;case J:for(_>>>=7&u,u-=7&u;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if((65535&_)!==(_>>>16^65535)){t.msg="invalid stored block lengths",a.mode=_t;break}if(a.length=65535&_,_=0,u=0,a.mode=Q,e===A)break t;case Q:a.mode=V;case V:if(g=a.length){if(g>l&&(g=l),g>h&&(g=h),0===g)break t;w.arraySet(r,n,s,g,o),l-=g,s+=g,h-=g,o+=g,a.length-=g;break}a.mode=X;break;case $:for(;u<14;){if(0===l)break t;
l--,_+=n[s++]<<u,u+=8}if(a.nlen=(31&_)+257,_>>>=5,u-=5,a.ndist=(31&_)+1,_>>>=5,u-=5,a.ncode=(15&_)+4,_>>>=4,u-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=_t;break}a.have=0,a.mode=tt;case tt:for(;a.have<a.ncode;){for(;u<3;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.lens[At[a.have++]]=7&_,_>>>=3,u-=3}for(;a.have<19;)a.lens[At[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,zt={bits:a.lenbits},xt=y(x,a.lens,0,19,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid code lengths set",a.mode=_t;break}a.have=0,a.mode=et;case et:for(;a.have<a.nlen+a.ndist;){for(;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(wt<16)_>>>=gt,u-=gt,a.lens[a.have++]=wt;else{if(16===wt){for(Bt=gt+2;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_>>>=gt,u-=gt,0===a.have){t.msg="invalid bit length repeat",a.mode=_t;break}yt=a.lens[a.have-1],g=3+(3&_),_>>>=2,u-=2}else if(17===wt){for(Bt=gt+3;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,yt=0,g=3+(7&_),_>>>=3,u-=3}else{for(Bt=gt+7;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=gt,u-=gt,yt=0,g=11+(127&_),_>>>=7,u-=7}if(a.have+g>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=_t;break}for(;g--;)a.lens[a.have++]=yt}}if(a.mode===_t)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=_t;break}if(a.lenbits=9,zt={bits:a.lenbits},xt=y(z,a.lens,0,a.nlen,a.lencode,0,a.work,zt),a.lenbits=zt.bits,xt){t.msg="invalid literal/lengths set",a.mode=_t;break}if(a.distbits=6,a.distcode=a.distdyn,zt={bits:a.distbits},xt=y(B,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,zt),a.distbits=zt.bits,xt){t.msg="invalid distances set",a.mode=_t;break}if(a.mode=at,e===A)break t;case at:a.mode=it;case it:if(l>=6&&h>=258){t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,k(t,b),o=t.next_out,r=t.output,h=t.avail_out,s=t.next_in,n=t.input,l=t.avail_in,_=a.hold,u=a.bits,a.mode===X&&(a.back=-1);break}for(a.back=0;St=a.lencode[_&(1<<a.lenbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(mt&&0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.lencode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,a.length=wt,0===mt){a.mode=lt;break}if(32&mt){a.back=-1,a.mode=X;break}if(64&mt){t.msg="invalid literal/length code",a.mode=_t;break}a.extra=15&mt,a.mode=nt;case nt:if(a.extra){for(Bt=a.extra;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.length+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=rt;case rt:for(;St=a.distcode[_&(1<<a.distbits)-1],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(0===(240&mt)){for(pt=gt,vt=mt,kt=wt;St=a.distcode[kt+((_&(1<<pt+vt)-1)>>pt)],gt=St>>>24,mt=St>>>16&255,wt=65535&St,!(pt+gt<=u);){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}_>>>=pt,u-=pt,a.back+=pt}if(_>>>=gt,u-=gt,a.back+=gt,64&mt){t.msg="invalid distance code",a.mode=_t;break}a.offset=wt,a.extra=15&mt,a.mode=st;case st:if(a.extra){for(Bt=a.extra;u<Bt;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}a.offset+=_&(1<<a.extra)-1,_>>>=a.extra,u-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=_t;break}a.mode=ot;case ot:if(0===h)break t;if(g=b-h,a.offset>g){if(g=a.offset-g,g>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=_t;break}g>a.wnext?(g-=a.wnext,m=a.wsize-g):m=a.wnext-g,g>a.length&&(g=a.length),bt=a.window}else bt=r,m=o-a.offset,g=a.length;g>h&&(g=h),h-=g,a.length-=g;do r[o++]=bt[m++];while(--g);0===a.length&&(a.mode=it);break;case lt:if(0===h)break t;r[o++]=a.length,h--,a.mode=it;break;case ht:if(a.wrap){for(;u<32;){if(0===l)break t;l--,_|=n[s++]<<u,u+=8}if(b-=h,t.total_out+=b,a.total+=b,b&&(t.adler=a.check=a.flags?v(a.check,r,b,o-b):p(a.check,r,b,o-b)),b=h,(a.flags?_:i(_))!==a.check){t.msg="incorrect data check",a.mode=_t;break}_=0,u=0}a.mode=dt;case dt:if(a.wrap&&a.flags){for(;u<32;){if(0===l)break t;l--,_+=n[s++]<<u,u+=8}if(_!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=_t;break}_=0,u=0}a.mode=ft;case ft:xt=R;break t;case _t:xt=O;break t;case ut:return D;case ct:default:return N}return t.next_out=o,t.avail_out=h,t.next_in=s,t.avail_in=l,a.hold=_,a.bits=u,(a.wsize||b!==t.avail_out&&a.mode<_t&&(a.mode<ht||e!==S))&&f(t,t.output,t.next_out,b-t.avail_out)?(a.mode=ut,D):(c-=t.avail_in,b-=t.avail_out,t.total_in+=c,t.total_out+=b,a.total+=b,a.wrap&&b&&(t.adler=a.check=a.flags?v(a.check,r,b,t.next_out-b):p(a.check,r,b,t.next_out-b)),t.data_type=a.bits+(a.last?64:0)+(a.mode===X?128:0)+(a.mode===at||a.mode===Q?256:0),(0===c&&0===b||e===S)&&xt===Z&&(xt=I),xt)}function u(t){if(!t||!t.state)return N;var e=t.state;return e.window&&(e.window=null),t.state=null,Z}function c(t,e){var a;return t&&t.state?(a=t.state,0===(2&a.wrap)?N:(a.head=e,e.done=!1,Z)):N}function b(t,e){var a,i,n,r=e.length;return t&&t.state?(a=t.state,0!==a.wrap&&a.mode!==G?N:a.mode===G&&(i=1,i=p(i,e,r,0),i!==a.check)?O:(n=f(t,e,r,r))?(a.mode=ut,D):(a.havedict=1,Z)):N}var g,m,w=t("../utils/common"),p=t("./adler32"),v=t("./crc32"),k=t("./inffast"),y=t("./inftrees"),x=0,z=1,B=2,S=4,E=5,A=6,Z=0,R=1,C=2,N=-2,O=-3,D=-4,I=-5,U=8,T=1,F=2,L=3,H=4,j=5,K=6,M=7,P=8,Y=9,q=10,G=11,X=12,W=13,J=14,Q=15,V=16,$=17,tt=18,et=19,at=20,it=21,nt=22,rt=23,st=24,ot=25,lt=26,ht=27,dt=28,ft=29,_t=30,ut=31,ct=32,bt=852,gt=592,mt=15,wt=mt,pt=!0;a.inflateReset=s,a.inflateReset2=o,a.inflateResetKeep=r,a.inflateInit=h,a.inflateInit2=l,a.inflate=_,a.inflateEnd=u,a.inflateGetHeader=c,a.inflateSetDictionary=b,a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(t,e,a){"use strict";var i=t("../utils/common"),n=15,r=852,s=592,o=0,l=1,h=2,d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,a,c,b,g,m,w){var p,v,k,y,x,z,B,S,E,A=w.bits,Z=0,R=0,C=0,N=0,O=0,D=0,I=0,U=0,T=0,F=0,L=null,H=0,j=new i.Buf16(n+1),K=new i.Buf16(n+1),M=null,P=0;for(Z=0;Z<=n;Z++)j[Z]=0;for(R=0;R<c;R++)j[e[a+R]]++;for(O=A,N=n;N>=1&&0===j[N];N--);if(O>N&&(O=N),0===N)return b[g++]=20971520,b[g++]=20971520,w.bits=1,0;for(C=1;C<N&&0===j[C];C++);for(O<C&&(O=C),U=1,Z=1;Z<=n;Z++)if(U<<=1,U-=j[Z],U<0)return-1;if(U>0&&(t===o||1!==N))return-1;for(K[1]=0,Z=1;Z<n;Z++)K[Z+1]=K[Z]+j[Z];for(R=0;R<c;R++)0!==e[a+R]&&(m[K[e[a+R]]++]=R);if(t===o?(L=M=m,z=19):t===l?(L=d,H-=257,M=f,P-=257,z=256):(L=_,M=u,z=-1),F=0,R=0,Z=C,x=g,D=O,I=0,k=-1,T=1<<O,y=T-1,t===l&&T>r||t===h&&T>s)return 1;for(var Y=0;;){Y++,B=Z-I,m[R]<z?(S=0,E=m[R]):m[R]>z?(S=M[P+m[R]],E=L[H+m[R]]):(S=96,E=0),p=1<<Z-I,v=1<<D,C=v;do v-=p,b[x+(F>>I)+v]=B<<24|S<<16|E|0;while(0!==v);for(p=1<<Z-1;F&p;)p>>=1;if(0!==p?(F&=p-1,F+=p):F=0,R++,0===--j[Z]){if(Z===N)break;Z=e[a+m[R]]}if(Z>O&&(F&y)!==k){for(0===I&&(I=O),x+=C,D=Z-I,U=1<<D;D+I<N&&(U-=j[D+I],!(U<=0));)D++,U<<=1;if(T+=1<<D,t===l&&T>r||t===h&&T>s)return 1;k=F&y,b[k]=O<<24|D<<16|x-g|0}}return 0!==F&&(b[x+F]=Z-I<<24|64<<16|0),w.bits=O,0}},{"../utils/common":3}],13:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],14:[function(t,e,a){"use strict";function i(t){for(var e=t.length;--e>=0;)t[e]=0}function n(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}function r(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function s(t){return t<256?lt[t]:lt[256+(t>>>7)]}function o(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function l(t,e,a){t.bi_valid>W-a?(t.bi_buf|=e<<t.bi_valid&65535,o(t,t.bi_buf),t.bi_buf=e>>W-t.bi_valid,t.bi_valid+=a-W):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function h(t,e,a){l(t,a[2*e],a[2*e+1])}function d(t,e){var a=0;do a|=1&t,t>>>=1,a<<=1;while(--e>0);return a>>>1}function f(t){16===t.bi_valid?(o(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function _(t,e){var a,i,n,r,s,o,l=e.dyn_tree,h=e.max_code,d=e.stat_desc.static_tree,f=e.stat_desc.has_stree,_=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,c=e.stat_desc.max_length,b=0;for(r=0;r<=X;r++)t.bl_count[r]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<G;a++)i=t.heap[a],r=l[2*l[2*i+1]+1]+1,r>c&&(r=c,b++),l[2*i+1]=r,i>h||(t.bl_count[r]++,s=0,i>=u&&(s=_[i-u]),o=l[2*i],t.opt_len+=o*(r+s),f&&(t.static_len+=o*(d[2*i+1]+s)));if(0!==b){do{for(r=c-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[c]--,b-=2}while(b>0);for(r=c;0!==r;r--)for(i=t.bl_count[r];0!==i;)n=t.heap[--a],n>h||(l[2*n+1]!==r&&(t.opt_len+=(r-l[2*n+1])*l[2*n],l[2*n+1]=r),i--)}}function u(t,e,a){var i,n,r=new Array(X+1),s=0;for(i=1;i<=X;i++)r[i]=s=s+a[i-1]<<1;for(n=0;n<=e;n++){var o=t[2*n+1];0!==o&&(t[2*n]=d(r[o]++,o))}}function c(){var t,e,a,i,r,s=new Array(X+1);for(a=0,i=0;i<K-1;i++)for(dt[i]=a,t=0;t<1<<et[i];t++)ht[a++]=i;for(ht[a-1]=i,r=0,i=0;i<16;i++)for(ft[i]=r,t=0;t<1<<at[i];t++)lt[r++]=i;for(r>>=7;i<Y;i++)for(ft[i]=r<<7,t=0;t<1<<at[i]-7;t++)lt[256+r++]=i;for(e=0;e<=X;e++)s[e]=0;for(t=0;t<=143;)st[2*t+1]=8,t++,s[8]++;for(;t<=255;)st[2*t+1]=9,t++,s[9]++;for(;t<=279;)st[2*t+1]=7,t++,s[7]++;for(;t<=287;)st[2*t+1]=8,t++,s[8]++;for(u(st,P+1,s),t=0;t<Y;t++)ot[2*t+1]=5,ot[2*t]=d(t,5);_t=new n(st,et,M+1,P,X),ut=new n(ot,at,0,Y,X),ct=new n(new Array(0),it,0,q,J)}function b(t){var e;for(e=0;e<P;e++)t.dyn_ltree[2*e]=0;for(e=0;e<Y;e++)t.dyn_dtree[2*e]=0;for(e=0;e<q;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*Q]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function g(t){t.bi_valid>8?o(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function m(t,e,a,i){g(t),i&&(o(t,a),o(t,~a)),N.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}function w(t,e,a,i){var n=2*e,r=2*a;return t[n]<t[r]||t[n]===t[r]&&i[e]<=i[a]}function p(t,e,a){for(var i=t.heap[a],n=a<<1;n<=t.heap_len&&(n<t.heap_len&&w(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!w(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i}function v(t,e,a){var i,n,r,o,d=0;if(0!==t.last_lit)do i=t.pending_buf[t.d_buf+2*d]<<8|t.pending_buf[t.d_buf+2*d+1],n=t.pending_buf[t.l_buf+d],d++,0===i?h(t,n,e):(r=ht[n],h(t,r+M+1,e),o=et[r],0!==o&&(n-=dt[r],l(t,n,o)),i--,r=s(i),h(t,r,a),o=at[r],0!==o&&(i-=ft[r],l(t,i,o)));while(d<t.last_lit);h(t,Q,e)}function k(t,e){var a,i,n,r=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,l=e.stat_desc.elems,h=-1;for(t.heap_len=0,t.heap_max=G,a=0;a<l;a++)0!==r[2*a]?(t.heap[++t.heap_len]=h=a,t.depth[a]=0):r[2*a+1]=0;for(;t.heap_len<2;)n=t.heap[++t.heap_len]=h<2?++h:0,r[2*n]=1,t.depth[n]=0,t.opt_len--,o&&(t.static_len-=s[2*n+1]);for(e.max_code=h,a=t.heap_len>>1;a>=1;a--)p(t,r,a);n=l;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],p(t,r,1),i=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=i,r[2*n]=r[2*a]+r[2*i],t.depth[n]=(t.depth[a]>=t.depth[i]?t.depth[a]:t.depth[i])+1,r[2*a+1]=r[2*i+1]=n,t.heap[1]=n++,p(t,r,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],_(t,e),u(r,h,t.bl_count)}function y(t,e,a){var i,n,r=-1,s=e[1],o=0,l=7,h=4;for(0===s&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=s,s=e[2*(i+1)+1],++o<l&&n===s||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==r&&t.bl_tree[2*n]++,t.bl_tree[2*V]++):o<=10?t.bl_tree[2*$]++:t.bl_tree[2*tt]++,o=0,r=n,0===s?(l=138,h=3):n===s?(l=6,h=3):(l=7,h=4))}function x(t,e,a){var i,n,r=-1,s=e[1],o=0,d=7,f=4;for(0===s&&(d=138,f=3),i=0;i<=a;i++)if(n=s,s=e[2*(i+1)+1],!(++o<d&&n===s)){if(o<f){do h(t,n,t.bl_tree);while(0!==--o)}else 0!==n?(n!==r&&(h(t,n,t.bl_tree),o--),h(t,V,t.bl_tree),l(t,o-3,2)):o<=10?(h(t,$,t.bl_tree),l(t,o-3,3)):(h(t,tt,t.bl_tree),l(t,o-11,7));o=0,r=n,0===s?(d=138,f=3):n===s?(d=6,f=3):(d=7,f=4)}}function z(t){var e;for(y(t,t.dyn_ltree,t.l_desc.max_code),y(t,t.dyn_dtree,t.d_desc.max_code),k(t,t.bl_desc),e=q-1;e>=3&&0===t.bl_tree[2*nt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function B(t,e,a,i){var n;for(l(t,e-257,5),l(t,a-1,5),l(t,i-4,4),n=0;n<i;n++)l(t,t.bl_tree[2*nt[n]+1],3);x(t,t.dyn_ltree,e-1),x(t,t.dyn_dtree,a-1)}function S(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return D;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return I;for(e=32;e<M;e++)if(0!==t.dyn_ltree[2*e])return I;return D}function E(t){bt||(c(),bt=!0),t.l_desc=new r(t.dyn_ltree,_t),t.d_desc=new r(t.dyn_dtree,ut),t.bl_desc=new r(t.bl_tree,ct),t.bi_buf=0,t.bi_valid=0,b(t)}function A(t,e,a,i){l(t,(T<<1)+(i?1:0),3),m(t,e,a,!0)}function Z(t){l(t,F<<1,3),h(t,Q,st),f(t)}function R(t,e,a,i){var n,r,s=0;t.level>0?(t.strm.data_type===U&&(t.strm.data_type=S(t)),k(t,t.l_desc),k(t,t.d_desc),s=z(t),n=t.opt_len+3+7>>>3,r=t.static_len+3+7>>>3,r<=n&&(n=r)):n=r=a+5,a+4<=n&&e!==-1?A(t,e,a,i):t.strategy===O||r===n?(l(t,(F<<1)+(i?1:0),3),v(t,st,ot)):(l(t,(L<<1)+(i?1:0),3),B(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),v(t,t.dyn_ltree,t.dyn_dtree)),b(t),i&&g(t)}function C(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(ht[a]+M+1)]++,t.dyn_dtree[2*s(e)]++),t.last_lit===t.lit_bufsize-1}var N=t("../utils/common"),O=4,D=0,I=1,U=2,T=0,F=1,L=2,H=3,j=258,K=29,M=256,P=M+1+K,Y=30,q=19,G=2*P+1,X=15,W=16,J=7,Q=256,V=16,$=17,tt=18,et=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],at=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],it=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],rt=512,st=new Array(2*(P+2));i(st);var ot=new Array(2*Y);i(ot);var lt=new Array(rt);i(lt);var ht=new Array(j-H+1);i(ht);var dt=new Array(K);i(dt);var ft=new Array(Y);i(ft);var _t,ut,ct,bt=!1;a._tr_init=E,a._tr_stored_block=A,a._tr_flush_block=R,a._tr_tally=C,a._tr_align=Z},{"../utils/common":3}],15:[function(t,e,a){"use strict";function i(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}e.exports=i},{}],"/":[function(t,e,a){"use strict";var i=t("./lib/utils/common").assign,n=t("./lib/deflate"),r=t("./lib/inflate"),s=t("./lib/zlib/constants"),o={};i(o,n,r,s),e.exports=o},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")});

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

if(typeof define == "function" && define.__amd) {
	define.amd = define.__amd;
	delete define.__amd;
}