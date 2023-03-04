(function ($hx_exports, $global) { "use strict"; var $hx_script = (function (exports, global) { (function ($hx_exports, $global) { "use strict";
$hx_exports["echo"] = $hx_exports["echo"] || {};
$hx_exports["lime"] = $hx_exports["lime"] || {};
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var lime_app_IModule = function() { };
lime_app_IModule.__name__ = true;
lime_app_IModule.__isInterface__ = true;
var lime_app_Module = function() {
	this.onExit = new lime_app__$Event_$Int_$Void();
};
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
		this.stats = new Stats ();
		this.stats.domElement.style.position = "absolute";
		this.stats.domElement.style.top = "0px";
		window.document.body.appendChild(this.stats.domElement);
		
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
			this.stats.begin();
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
			this.stats.end();
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
ApplicationMain.__name__ = true;
ApplicationMain.main = function() {
	lime_system_System.__registerEntryPoint("Main",ApplicationMain.create);
};
ApplicationMain.create = function(config) {
	var app = new Main();
	app.meta.h["build"] = "1";
	app.meta.h["company"] = "austineast, semmi";
	app.meta.h["file"] = "Main";
	app.meta.h["name"] = "EchoAndPeoteView";
	app.meta.h["packageName"] = "peote.view";
	app.meta.h["version"] = "0.1.0";
	var attributes = { allowHighDPI : true, alwaysOnTop : false, borderless : false, element : null, frameRate : 61, height : 0, hidden : false, maximized : false, minimized : false, parameters : { }, resizable : true, title : "EchoAndPeoteView", width : 0, x : null, y : null};
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
	app.__preloader.load();
	ApplicationMain.start(app);
};
ApplicationMain.start = function(app) {
	var result = app.exec();
};
var Entity = function() { };
Entity.__name__ = true;
Entity.__isInterface__ = true;
Entity.prototype = {
	__class__: Entity
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
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
	,__class__: haxe_ds_StringMap
};
var Circle = function(x,y,radius,color) {
	this.bytePos = -1;
	this.intersected = 0;
	this.color = 255;
	this.radius = 50.0;
	this.y = 0.0;
	this.x = 0.0;
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	Circle.buffer.addElement(this);
};
Circle.__name__ = true;
Circle.__interfaces__ = [Entity];
Circle.init = function(display) {
	Circle.buffer = new peote_view_Buffer_$Circle(1024,1024,true);
	Circle.program = new peote_view_Program(Circle.buffer);
	Circle.program.injectIntoFragmentShader(Circle.fShader);
	Circle.program.discardAtAlpha(0.0);
	display.addProgram(Circle.program);
};
Circle.prototype = {
	update: function(x,y) {
		this.setPosition(x,y);
		Circle.buffer.updateElement(this);
	}
	,setPosition: function(x,y) {
		this.x = x;
		this.y = y;
	}
	,__class__: Circle
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
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
HxOverrides.__name__ = true;
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
var Main = function() {
	lime_app_Application.call(this);
};
Main.__name__ = true;
Main.__super__ = lime_app_Application;
Main.prototype = $extend(lime_app_Application.prototype,{
	onWindowCreate: function() {
		switch(this.__window.context.type) {
		case "opengl":case "opengles":case "webgl":
			try {
				this.startSample(this.__window);
			} catch( _g ) {
				var _ = haxe_Exception.caught(_g);
				haxe_Log.trace(haxe_CallStack.toString(haxe_CallStack.exceptionStack()),{ fileName : "src/Main.hx", lineNumber : 28, className : "Main", methodName : "onWindowCreate", customParams : [_]});
			}
			break;
		default:
			throw haxe_Exception.thrown("Sorry, only works with OpenGL.");
		}
	}
	,startSample: function($window) {
		var peoteView = new peote_view_PeoteView($window);
		var display = new peote_view_Display(0,0,800,600,65535);
		peoteView.addDisplay(display);
		Circle.init(display);
		this.world = echo_Echo.start({ x : -Main.MAX_RADIUS * 3, y : -Main.MAX_RADIUS * 3, width : 800 + Main.MAX_RADIUS * 3, height : 600 + Main.MAX_RADIUS * 3, iterations : 1});
		var bodies = [];
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(10 + Math.random() * 10));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		bodies.push(this.addBody(20 + Math.random() * 20));
		var _g = 0;
		while(_g < 40) {
			var i = _g++;
			bodies.push(this.addBody(30 + Math.random() * 25));
		}
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(40 + Math.random() * 20));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		bodies.push(this.addBody(50 + Math.random() * 10));
		this.cursor = this.addBody(150);
		bodies.push(this.cursor);
		echo_Echo.listen(this.world,haxe_ds_Either.Right(bodies),null,{ separate : false, enter : function(a,b,c) {
			a.entity.intersected++;
			b.entity.intersected++;
			var b1 = Math.min(255,96 + a.entity.intersected * 16) | 0;
			a.entity.color = a.entity.color & -65281 | b1 << 8;
			var g = b1;
			a.entity.color = a.entity.color & -16711681 | g << 16;
			var r = g;
			a.entity.color = a.entity.color & 16777215 | r << 24;
			var b1 = Math.min(255,96 + b.entity.intersected * 16) | 0;
			b.entity.color = b.entity.color & -65281 | b1 << 8;
			var g = b1;
			b.entity.color = b.entity.color & -16711681 | g << 16;
			var r = g;
			b.entity.color = b.entity.color & 16777215 | r << 24;
		}, stay : function(a,b,c) {
			var distance = Math.sqrt((a.transform.local_x - b.transform.local_x) * (a.transform.local_x - b.transform.local_x) + (a.transform.local_y - b.transform.local_y) * (a.transform.local_y - b.transform.local_y));
			var self_x = a.transform.local_x - b.transform.local_x;
			var self_y = a.transform.local_y - b.transform.local_y;
			var len_sq = self_x * self_x + self_y * self_y;
			var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
			var a_x = self_x / denominator;
			var a_y = self_y / denominator;
			var b_x = a_x;
			var b_y = a_y;
			self_x = b_x;
			self_y = b_y;
			var f = Math.pow(a.entity.radius + b.entity.radius - distance,2);
			var b_x = self_x * f;
			var b_y = self_y * f;
			self_x = b_x;
			self_y = b_y;
			a.push(-self_x / a.mass,-self_y / a.mass,false,1);
			b.push(self_x / b.mass,self_y / b.mass,false,1);
		}, exit : function(a,b) {
			a.entity.intersected--;
			b.entity.intersected--;
			var b1 = Math.min(255,96 + a.entity.intersected * 16) | 0;
			a.entity.color = a.entity.color & -65281 | b1 << 8;
			var g = b1;
			a.entity.color = a.entity.color & -16711681 | g << 16;
			var r = g;
			a.entity.color = a.entity.color & 16777215 | r << 24;
			var b1 = Math.min(255,96 + b.entity.intersected * 16) | 0;
			b.entity.color = b.entity.color & -65281 | b1 << 8;
			var g = b1;
			b.entity.color = b.entity.color & -16711681 | g << 16;
			var r = g;
			b.entity.color = b.entity.color & 16777215 | r << 24;
		}});
	}
	,addBody: function(radius) {
		var body = echo_Echo.make(this.world,{ mass : Math.PI * radius * radius, kinematic : true, max_velocity_length : 2000, shape : { type : 1, radius : radius}});
		this.setInitialMovement(body);
		body.entity = new Circle(body.transform.local_x,body.transform.local_y,radius,-2004317953);
		var _g = $bind(this,this.onMove);
		var body1 = body;
		body.on_move = function(x,y) {
			_g(body1,x,y);
		};
		return body;
	}
	,onMove: function(body,x,y) {
		if(x < -Main.MAX_RADIUS * 3 && body.velocity.x < 0 || y < -Main.MAX_RADIUS * 3 && body.velocity.y < 0 || x > 800 + Main.MAX_RADIUS * 3 && body.velocity.x > 0 || y > 600 + Main.MAX_RADIUS * 3 && body.velocity.y > 0) {
			var v = body.velocity;
			v.x = 0;
			v.y = 0;
			this.setInitialMovement(body);
		} else {
			body.entity.update(x,y);
		}
	}
	,setInitialMovement: function(body) {
		var x = Math.random() * 800;
		var y = Math.random() * 600;
		var dx = 2.5 - Math.random() * 5;
		var dy = 2.5 - Math.random() * 5;
		if(Math.random() > 0.5) {
			if(Math.random() > 0.5) {
				x = -Main.MAX_RADIUS * 3 + 1;
				dx = 10 + Math.random() * 20;
			} else {
				x = 800 + Main.MAX_RADIUS * 3 - 1;
				dx = -(10 + Math.random() * 20);
			}
		} else if(Math.random() > 0.5) {
			y = -Main.MAX_RADIUS * 3 + 1;
			dy = 10 + Math.random() * 20;
		} else {
			y = 600 + Main.MAX_RADIUS * 3 - 1;
			dy = -(10 + Math.random() * 20);
		}
		var _this = body.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_x = x;
		if(body.on_move != null) {
			body.on_move(body.transform.local_x,body.transform.local_y);
		}
		var _this = body.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_y = y;
		if(body.on_move != null) {
			body.on_move(body.transform.local_x,body.transform.local_y);
		}
		var v = body.velocity;
		v.x = dx;
		v.y = dy;
	}
	,update: function(deltaTime) {
		echo_Echo.step(this.world,deltaTime / 1000);
	}
	,onMouseMove: function(x,y) {
		var v = this.cursor.velocity;
		v.x = 0;
		v.y = 0;
		var _this = this.cursor;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_x = x;
		if(_this.on_move != null) {
			_this.on_move(_this.transform.local_x,_this.transform.local_y);
		}
		var _this = this.cursor;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_y = y;
		if(_this.on_move != null) {
			_this.on_move(_this.transform.local_x,_this.transform.local_y);
		}
	}
	,__class__: Main
});
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		haxe_NativeStackTrace.lastError = _g;
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
Reflect.copy = function(o) {
	if(o == null) {
		return null;
	}
	var o2 = { };
	var _g = 0;
	var _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
};
var Std = function() { };
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
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = true;
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
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	var ctor = Function.prototype.bind.apply(cl,[null].concat(args));
	return new (ctor);
};
var echo_util_Disposable = function() { };
echo_util_Disposable.__name__ = true;
echo_util_Disposable.__isInterface__ = true;
var echo_Body = function(options) {
	this.transform = new echo_util_Transform();
	this.layer_mask = echo_util_BitMask._new();
	this.layers = echo_util_BitMask._new();
	var this1 = new echo_math_Vector2Default(0,0);
	this.drag = this1;
	var this1 = new echo_math_Vector2Default(0,0);
	this.max_velocity = this1;
	this.torque = 0;
	var this1 = new echo_math_Vector2Default(0,0);
	this.acceleration = this1;
	var this1 = new echo_math_Vector2Default(0,0);
	this.velocity = this1;
	this.material = echo_Material.global;
	this.id = ++echo_Body.ids;
	this.active = true;
	this.shapes = [];
	this.data = { };
	this.disposed = false;
	this.transform.on_dirty = $bind(this,this.on_dirty);
	this.load_options(options);
};
echo_Body.__name__ = true;
echo_Body.__interfaces__ = [echo_util_Disposable];
echo_Body.__properties__ = {get_defaults:"get_defaults"};
echo_Body.get_defaults = function() {
	return { kinematic : false, mass : echo_Body.default_mass, x : 0, y : 0, rotation : 0, scale_x : 1, scale_y : 1, velocity_x : 0, velocity_y : 0, rotational_velocity : 0, max_velocity_x : 0, max_velocity_y : 0, max_velocity_length : 0, max_rotational_velocity : 10000, drag_x : 0, drag_y : 0, drag_length : 0, rotational_drag : 0};
};
echo_Body.prototype = {
	load_options: function(options) {
		options = echo_util_JSON.copy_fields(options,echo_Body.get_defaults());
		var _g = 0;
		var _g1 = this.shapes;
		while(_g < _g1.length) {
			var shape = _g1[_g];
			++_g;
			shape.put();
		}
		this.shapes.length = 0;
		var value = options.x;
		var _this = this.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_x = value;
		if(this.on_move != null) {
			this.on_move(this.transform.local_x,this.transform.local_y);
		}
		var value = options.y;
		var _this = this.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_y = value;
		if(this.on_move != null) {
			this.on_move(this.transform.local_x,this.transform.local_y);
		}
		var _this = this.transform;
		var v = Math.PI / 180 * options.rotation;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_radians = v;
		if(this.on_rotate != null) {
			this.on_rotate(180 / Math.PI * this.transform.local_radians);
		}
		var value = options.scale_x;
		var _this = this.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_x = value;
		var value = options.scale_y;
		var _this = this.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_y = value;
		this.kinematic = options.kinematic;
		if(options.material != null) {
			this.material = options.material;
		} else if(options.gravity_scale != null || options.elasticity != null) {
			this.material = new echo_Material(options.elasticity,null,null,null,options.gravity_scale);
		} else {
			this.material = echo_Material.global;
		}
		var v = this.velocity;
		v.x = options.velocity_x;
		v.y = options.velocity_y;
		this.rotational_velocity = options.rotational_velocity;
		var v = this.max_velocity;
		v.x = options.max_velocity_x;
		v.y = options.max_velocity_y;
		this.max_velocity_length = options.max_velocity_length;
		this.max_rotational_velocity = options.max_rotational_velocity;
		var v = this.drag;
		v.x = options.drag_x;
		v.y = options.drag_y;
		this.drag_length = options.drag_length;
		this.rotational_drag = options.rotational_drag;
		this.last_x = NaN;
		this.last_y = NaN;
		this.last_rotation = NaN;
		this.dirty = true;
		if(options.shape != null) {
			var s = echo_Shape.get(options.shape);
			var position = -1;
			if(position == null) {
				position = -1;
			}
			if(this.shapes.indexOf(s) == -1) {
				if(position > -1) {
					this.shapes[position] = s;
				} else {
					this.shapes.push(s);
				}
				s.set_parent(this);
				this.dirty = true;
				if(this.mass <= 0 && this.world != null) {
					this.bounds(this.quadtree_data.bounds);
					this.world.static_quadtree.update(this.quadtree_data);
				}
			}
		}
		if(options.shapes != null) {
			var _g = 0;
			var _g1 = options.shapes;
			while(_g < _g1.length) {
				var shape = _g1[_g];
				++_g;
				var s = echo_Shape.get(shape);
				var position = -1;
				if(position == null) {
					position = -1;
				}
				if(this.shapes.indexOf(s) == -1) {
					if(position > -1) {
						this.shapes[position] = s;
					} else {
						this.shapes.push(s);
					}
					s.set_parent(this);
					this.dirty = true;
					if(this.mass <= 0 && this.world != null) {
						this.bounds(this.quadtree_data.bounds);
						this.world.static_quadtree.update(this.quadtree_data);
					}
				}
			}
		}
		if(options.shape_instance != null) {
			var shape = options.shape_instance;
			if(this.shapes.indexOf(shape) == -1) {
				this.shapes.push(shape);
				shape.set_parent(this);
				this.dirty = true;
				if(this.mass <= 0 && this.world != null) {
					this.bounds(this.quadtree_data.bounds);
					this.world.static_quadtree.update(this.quadtree_data);
				}
			}
		}
		if(options.shape_instances != null) {
			var _g = 0;
			var _g1 = options.shape_instances;
			while(_g < _g1.length) {
				var shape = _g1[_g];
				++_g;
				if(this.shapes.indexOf(shape) == -1) {
					this.shapes.push(shape);
					shape.set_parent(this);
					this.dirty = true;
					if(this.mass <= 0 && this.world != null) {
						this.bounds(this.quadtree_data.bounds);
						this.world.static_quadtree.update(this.quadtree_data);
					}
				}
			}
		}
		var _g = options.mass;
		if(_g == null) {
			var value = options.mass;
			if(value < echo_Body.minimum_mass) {
				this.mass = this.inverse_mass = 0;
				if(this.mass <= 0 && this.world != null) {
					this.bounds(this.quadtree_data.bounds);
					this.world.static_quadtree.update(this.quadtree_data);
				}
			} else {
				if(this.mass <= 0 && this.world != null) {
					this.world.static_quadtree.remove(this.quadtree_data);
				}
				this.mass = value;
				this.inverse_mass = 1 / this.mass;
			}
		} else {
			switch(_g) {
			case -1:
				var sum = 0.;
				var _g = 0;
				var _g1 = this.shapes;
				while(_g < _g1.length) {
					var shape = _g1[_g];
					++_g;
					sum += shape.volume() * this.material.density;
				}
				if(sum < echo_Body.minimum_mass) {
					this.mass = this.inverse_mass = 0;
					if(this.mass <= 0 && this.world != null) {
						this.bounds(this.quadtree_data.bounds);
						this.world.static_quadtree.update(this.quadtree_data);
					}
				} else {
					if(this.mass <= 0 && this.world != null) {
						this.world.static_quadtree.remove(this.quadtree_data);
					}
					this.mass = sum;
					this.inverse_mass = 1 / this.mass;
				}
				break;
			case 0:
				var value = 0;
				if(value < echo_Body.minimum_mass) {
					this.mass = this.inverse_mass = 0;
					if(this.mass <= 0 && this.world != null) {
						this.bounds(this.quadtree_data.bounds);
						this.world.static_quadtree.update(this.quadtree_data);
					}
				} else {
					if(this.mass <= 0 && this.world != null) {
						this.world.static_quadtree.remove(this.quadtree_data);
					}
					this.mass = value;
					this.inverse_mass = 1 / this.mass;
				}
				break;
			default:
				var value = options.mass;
				if(value < echo_Body.minimum_mass) {
					this.mass = this.inverse_mass = 0;
					if(this.mass <= 0 && this.world != null) {
						this.bounds(this.quadtree_data.bounds);
						this.world.static_quadtree.update(this.quadtree_data);
					}
				} else {
					if(this.mass <= 0 && this.world != null) {
						this.world.static_quadtree.remove(this.quadtree_data);
					}
					this.mass = value;
					this.inverse_mass = 1 / this.mass;
				}
			}
		}
	}
	,push: function(x,y,forward,force_type) {
		if(force_type == null) {
			force_type = 0;
		}
		if(forward == null) {
			forward = false;
		}
		if(y == null) {
			y = 0;
		}
		if(x == null) {
			x = 0;
		}
		if(forward) {
			var rotated_acceleration_x = x;
			var rotated_acceleration_y = y;
			var radians = Math.PI / 180 * (180 / Math.PI * this.transform.local_radians);
			var cos = Math.cos(radians);
			var sin = Math.sin(radians);
			var tmpX = rotated_acceleration_x;
			rotated_acceleration_x = rotated_acceleration_x * cos - rotated_acceleration_y * sin;
			rotated_acceleration_y = tmpX * sin + rotated_acceleration_y * cos;
			x = rotated_acceleration_x;
			y = rotated_acceleration_y;
		}
		switch(force_type) {
		case 0:
			this.acceleration.x += x;
			this.acceleration.y += y;
			break;
		case 1:
			this.velocity.x += x;
			this.velocity.y += y;
			break;
		case 2:
			var value = this.transform.local_x + x;
			var _this = this.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = value;
			if(this.on_move != null) {
				this.on_move(this.transform.local_x,this.transform.local_y);
			}
			var value = this.transform.local_y + y;
			var _this = this.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = value;
			if(this.on_move != null) {
				this.on_move(this.transform.local_x,this.transform.local_y);
			}
			break;
		}
	}
	,bounds: function(aabb) {
		if(this.shapes.length == 0) {
			var x = this.transform.local_x;
			var y = this.transform.local_y;
			var width = 1;
			var height = 1;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var aabb1 = echo_util_AABB.pool.get();
			var x1 = x;
			var y1 = y;
			var width1 = width;
			var height1 = height;
			if(height1 == null) {
				height1 = 1;
			}
			if(width1 == null) {
				width1 = 1;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			width1 *= 0.5;
			height1 *= 0.5;
			aabb1.min_x = x1 - width1;
			aabb1.min_y = y1 - height1;
			aabb1.max_x = x1 + width1;
			aabb1.max_y = y1 + height1;
			aabb1.pooled = false;
			return aabb1;
		}
		var b1 = this.shapes[0].bounds();
		if(this.shapes.length > 1) {
			var _g = 1;
			var _g1 = this.shapes.length;
			while(_g < _g1) {
				var i = _g++;
				var b2 = this.shapes[i].bounds();
				if(b1.min_x > b2.min_x) {
					b1.min_x = b2.min_x;
				}
				if(b1.min_y > b2.min_y) {
					b1.min_y = b2.min_y;
				}
				if(b1.max_x < b2.max_x) {
					b1.max_x = b2.max_x;
				}
				if(b1.max_y < b2.max_y) {
					b1.max_y = b2.max_y;
				}
				b2.put();
			}
		}
		if(aabb == null) {
			var aabb1 = echo_util_AABB.pool.get();
			var x = 0;
			var y = 0;
			var width = 1;
			var height = 1;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			width *= 0.5;
			height *= 0.5;
			aabb1.min_x = x - width;
			aabb1.min_y = y - height;
			aabb1.max_x = x + width;
			aabb1.max_y = y + height;
			aabb1.pooled = false;
			aabb = aabb1;
		}
		aabb.min_x = b1.min_x;
		aabb.max_x = b1.max_x;
		aabb.min_y = b1.min_y;
		aabb.max_y = b1.max_y;
		b1.put();
		return aabb;
	}
	,on_dirty: function(t) {
		this.dirty = true;
		if(this.mass <= 0 && this.world != null) {
			this.bounds(this.quadtree_data.bounds);
			this.world.static_quadtree.update(this.quadtree_data);
		}
	}
	,__class__: echo_Body
};
var echo_Collisions = function() { };
echo_Collisions.__name__ = true;
echo_Collisions.update_quadtree = function(world) {
	var _g = 0;
	var _g1 = world.members;
	while(_g < _g1.length) {
		var b = _g1[_g];
		++_g;
		if(!b.disposed) {
			b.collided = false;
			var _g2 = 0;
			var _g3 = b.shapes;
			while(_g2 < _g3.length) {
				var shape = _g3[_g2];
				++_g2;
				shape.collided = false;
			}
			if(b.active && b.mass > 0 && b.dirty && b.shapes.length > 0) {
				if(b.quadtree_data.bounds == null) {
					b.quadtree_data.bounds = b.bounds();
				} else {
					b.bounds(b.quadtree_data.bounds);
				}
				world.quadtree.update(b.quadtree_data,false);
				b.dirty = false;
			}
		}
	}
	world.quadtree.shake();
};
echo_Collisions.query = function(world,listeners) {
	echo_Collisions.update_quadtree(world);
	var members = listeners == null ? world.listeners.members : listeners.members;
	var _g = 0;
	while(_g < members.length) {
		var listener = members[_g];
		++_g;
		listener.quadtree_results.length = 0;
		var _g1 = listener.a;
		switch(_g1._hx_index) {
		case 0:
			var ba = _g1.v;
			var _g2 = listener.b;
			switch(_g2._hx_index) {
			case 0:
				var bb = _g2.v;
				var col = echo_Collisions.overlap_body_and_body_bounds(ba,bb);
				if(col != null) {
					listener.quadtree_results.push(col);
				}
				break;
			case 1:
				var ab = _g2.v;
				echo_Collisions.overlap_body_and_bodies_bounds(ba,ab,world,listener.quadtree_results);
				break;
			}
			break;
		case 1:
			var aa = _g1.v;
			var _g3 = listener.b;
			switch(_g3._hx_index) {
			case 0:
				var bb1 = _g3.v;
				echo_Collisions.overlap_body_and_bodies_bounds(bb1,aa,world,listener.quadtree_results);
				break;
			case 1:
				var ab1 = _g3.v;
				echo_Collisions.overlap_bodies_and_bodies_bounds(aa,ab1,world,listener.quadtree_results);
				if(aa != ab1) {
					echo_Collisions.overlap_bodies_and_bodies_bounds(ab1,aa,world,listener.quadtree_results);
				}
				break;
			}
			break;
		}
		var _g4 = 0;
		var _g5 = listener.last_collisions;
		while(_g4 < _g5.length) {
			var collision = _g5[_g4];
			++_g4;
			collision.put();
		}
		listener.last_collisions.length = listener.collisions.length;
		var _g6 = 0;
		var _g7 = listener.collisions.length;
		while(_g6 < _g7) {
			var i = _g6++;
			listener.last_collisions[i] = listener.collisions[i];
		}
		listener.collisions.length = 0;
		var _g8 = 0;
		var _g9 = listener.quadtree_results;
		while(_g8 < _g9.length) {
			var result = _g9[_g8];
			++_g8;
			if(result.a.disposed || result.b.disposed) {
				result.put();
				continue;
			}
			if(result.a.id == result.b.id) {
				result.put();
				continue;
			}
			var flag = false;
			var _g10 = 0;
			var _g11 = listener.collisions;
			while(_g10 < _g11.length) {
				var collision1 = _g11[_g10];
				++_g10;
				if(collision1.a.id == result.a.id && collision1.b.id == result.b.id || collision1.b.id == result.a.id && collision1.a.id == result.b.id) {
					flag = true;
					break;
				}
			}
			if(flag) {
				result.put();
				continue;
			}
			if(result.a.shapes.length == 1 && result.b.shapes.length == 1) {
				var col1 = result.a.shapes[0].collides(result.b.shapes[0]);
				if(col1 != null) {
					result.data.push(col1);
				}
			} else {
				var sa = result.a.shapes;
				var _g12 = 0;
				var _g13 = sa.length;
				while(_g12 < _g13) {
					var i1 = _g12++;
					var sb = result.b.shapes;
					var b1 = sa[i1].bounds();
					var _g14 = 0;
					var _g15 = sb.length;
					while(_g14 < _g15) {
						var j = _g14++;
						var b2 = sb[j].bounds();
						if(b1.min_x < b2.max_x && b1.max_x >= b2.min_x && b1.min_y < b2.max_y && b1.max_y >= b2.min_y) {
							var col2 = sa[i1].collides(sb[j]);
							if(col2 != null) {
								result.data.push(col2);
							}
						}
						b2.put();
					}
					b1.put();
				}
			}
			if(result.data.length == 0) {
				result.put();
				continue;
			}
			if(listener.condition != null) {
				if(!listener.condition(result.a,result.b,result.data) || result.a.disposed || result.b.disposed) {
					result.put();
					continue;
				}
			}
			var _g16 = 0;
			var _g17 = result.data;
			while(_g16 < _g17.length) {
				var data = _g17[_g16];
				++_g16;
				data.sa.collided = data.sb.collided = true;
			}
			result.a.collided = result.b.collided = true;
			listener.collisions.push(result);
		}
	}
};
echo_Collisions.notify = function(world,listeners) {
	var members = listeners == null ? world.listeners.members : listeners.members;
	var _g = 0;
	while(_g < members.length) {
		var listener = members[_g];
		++_g;
		if(listener.enter != null || listener.stay != null) {
			var _g1 = 0;
			var _g2 = listener.collisions;
			while(_g1 < _g2.length) {
				var c = _g2[_g1];
				++_g1;
				if(!c.a.disposed && !c.b.disposed) {
					var tmp;
					if(listener.enter != null) {
						var found = false;
						var _g3 = 0;
						var _g4 = listener.last_collisions;
						while(_g3 < _g4.length) {
							var l = _g4[_g3];
							++_g3;
							if(l.a == c.a && l.b == c.b || l.a == c.b && l.b == c.a) {
								found = true;
								break;
							}
						}
						tmp = !found;
					} else {
						tmp = false;
					}
					if(tmp) {
						listener.enter(c.a,c.b,c.data);
					} else if(listener.stay != null) {
						listener.stay(c.a,c.b,c.data);
					}
				}
			}
		}
		if(listener.exit != null) {
			var _g5 = 0;
			var _g6 = listener.last_collisions;
			while(_g5 < _g6.length) {
				var lc = _g6[_g5];
				++_g5;
				var tmp1;
				if(!lc.a.disposed && !lc.b.disposed) {
					var found1 = false;
					var _g7 = 0;
					var _g8 = listener.collisions;
					while(_g7 < _g8.length) {
						var c1 = _g8[_g7];
						++_g7;
						if(c1.a == lc.a && c1.b == lc.b || c1.a == lc.b && c1.b == lc.a) {
							found1 = true;
							break;
						}
					}
					tmp1 = !found1;
				} else {
					tmp1 = false;
				}
				if(tmp1) {
					listener.exit(lc.a,lc.b);
				}
			}
		}
	}
};
echo_Collisions.overlap_bodies_and_bodies_bounds = function(a,b,world,results) {
	if(a.length == 0 || b.length == 0) {
		return;
	}
	var _g = 0;
	while(_g < a.length) {
		var body = a[_g];
		++_g;
		echo_Collisions.overlap_body_and_bodies_bounds(body,b,world,results);
	}
};
echo_Collisions.overlap_body_and_bodies_bounds = function(body,bodies,world,results) {
	if(body.disposed || body.shapes.length == 0 || !body.active || body.mass <= 0) {
		return;
	}
	var bounds = body.bounds();
	echo_Collisions.qr.length = 0;
	echo_Collisions.sqr.length = 0;
	world.quadtree.query(bounds,echo_Collisions.qr);
	world.static_quadtree.query(bounds,echo_Collisions.sqr);
	var _g = 0;
	while(_g < bodies.length) {
		var member = bodies[_g];
		++_g;
		if(member.disposed || member.shapes.length == 0 || !member.active || !(body.layer_mask == 0 || member.layer_mask == 0 || (body.layer_mask & member.layers) != 0 && (member.layer_mask & body.layers) != 0)) {
			continue;
		}
		var _g1 = 0;
		var _g2 = member.mass > 0 ? echo_Collisions.qr : echo_Collisions.sqr;
		while(_g1 < _g2.length) {
			var result = _g2[_g1];
			++_g1;
			if(result.id == member.id) {
				var c = echo_data_Collision.pool.get();
				c.a = body;
				c.b = member;
				c.data.length = 0;
				c.pooled = false;
				results.push(c);
			}
		}
	}
	bounds.put();
};
echo_Collisions.overlap_body_and_body_bounds = function(a,b) {
	if(a.disposed || b.disposed || a.shapes.length == 0 || b.shapes.length == 0 || !a.active || !b.active || a == b || !(a.layer_mask == 0 || b.layer_mask == 0 || (a.layer_mask & b.layers) != 0 && (b.layer_mask & a.layers) != 0) || a.mass <= 0 && b.mass <= 0) {
		return null;
	}
	var ab = a.bounds();
	var bb = b.bounds();
	var col = ab.min_x < bb.max_x && ab.max_x >= bb.min_x && ab.min_y < bb.max_y && ab.max_y >= bb.min_y;
	ab.put();
	bb.put();
	if(col) {
		var c = echo_data_Collision.pool.get();
		c.a = a;
		c.b = b;
		c.data.length = 0;
		c.pooled = false;
		return c;
	} else {
		return null;
	}
};
var echo_Listeners = function(members) {
	this.members = members == null ? [] : members;
};
echo_Listeners.__name__ = true;
echo_Listeners.__interfaces__ = [echo_util_Disposable];
echo_Listeners.prototype = {
	add: function(a,b,options) {
		options = echo_util_JSON.copy_fields(options,echo_Listener.get_defaults());
		var listener = new echo_Listener(a,b,options.separate,[],[],null,null,null,null,[],options.percent_correction,options.correction_threshold);
		if(options.enter != null) {
			listener.enter = options.enter;
		}
		if(options.stay != null) {
			listener.stay = options.stay;
		}
		if(options.exit != null) {
			listener.exit = options.exit;
		}
		if(options.condition != null) {
			listener.condition = options.condition;
		}
		this.members.push(listener);
		return listener;
	}
	,clear: function() {
		this.members.length = 0;
	}
	,__class__: echo_Listeners
};
var echo_Echo = $hx_exports["echo"]["Echo"] = function() { };
echo_Echo.__name__ = true;
echo_Echo.start = function(options) {
	return new echo_World(options);
};
echo_Echo.make = function(world,options) {
	return world.add(new echo_Body(options));
};
echo_Echo.listen = function(world,a,b,options) {
	if(a == null) {
		if(b == null) {
			return world.listeners.add(haxe_ds_Either.Right(world.members),haxe_ds_Either.Right(world.members),options);
		} else {
			return world.listeners.add(b,b,options);
		}
	}
	if(b == null) {
		return world.listeners.add(a,a,options);
	}
	return world.listeners.add(a,b,options);
};
echo_Echo.check = function(world,a,b,options) {
	echo_Echo.cached_listeners.clear();
	if(a == null && b == null) {
		echo_Echo.cached_listeners.add(haxe_ds_Either.Right(world.members),haxe_ds_Either.Right(world.members),options);
	} else if(a == null) {
		echo_Echo.cached_listeners.add(b,b,options);
	} else if(b == null) {
		echo_Echo.cached_listeners.add(a,a,options);
	} else {
		echo_Echo.cached_listeners.add(a,b,options);
	}
	echo_Collisions.query(world,echo_Echo.cached_listeners);
	echo_Physics.separate(world,echo_Echo.cached_listeners);
	echo_Collisions.notify(world,echo_Echo.cached_listeners);
};
echo_Echo.step = function(world,dt) {
	if(world.history != null) {
		var world1 = world.history;
		var _g = [];
		var _g1 = 0;
		var _g2 = world.members;
		while(_g1 < _g2.length) {
			var b = _g2[_g1];
			++_g1;
			_g.push(new echo_data_BodyState(b.id,b.transform.local_x,b.transform.local_y,180 / Math.PI * b.transform.local_radians,b.velocity.x,b.velocity.y,b.acceleration.x,b.acceleration.y,b.rotational_velocity));
		}
		world1.add(_g);
	}
	var fdt = dt / world.iterations;
	var _g = 0;
	var _g1 = world.iterations;
	while(_g < _g1) {
		var i = _g++;
		echo_Physics.step(world,fdt);
		echo_Collisions.query(world);
		echo_Physics.separate(world);
		echo_Collisions.notify(world);
	}
};
echo_Echo.linecast_floats = function(x,y,dx,dy,test,world,update_world_quadtree) {
	if(update_world_quadtree == null) {
		update_world_quadtree = true;
	}
	var x1 = x;
	var y1 = y;
	var dx1 = dx;
	var dy1 = dy;
	if(dy1 == null) {
		dy1 = 1;
	}
	if(dx1 == null) {
		dx1 = 1;
	}
	if(y1 == null) {
		y1 = 0;
	}
	if(x1 == null) {
		x1 = 0;
	}
	var line = echo_Line.pool.get();
	var x = x1;
	var y = y1;
	var dx = dx1;
	var dy = dy1;
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var v = line.start;
	v.x = x;
	v.y = y;
	var v = line.end;
	v.x = dx;
	v.y = dy;
	line.pooled = false;
	var line1 = line;
	var result = echo_Echo.linecast(line1,test,world,update_world_quadtree);
	if(!line1.pooled) {
		line1.pooled = true;
		echo_Line.pool.put_unsafe(line1);
	}
	return result;
};
echo_Echo.linecast_vector = function(start,angle,length,test,world,update_world_quadtree) {
	if(update_world_quadtree == null) {
		update_world_quadtree = true;
	}
	var line = echo_Line.pool.get();
	line.set_from_vector(start,angle,length);
	line.pooled = false;
	var line1 = line;
	var result = echo_Echo.linecast(line1,test,world,update_world_quadtree);
	if(!line1.pooled) {
		line1.pooled = true;
		echo_Line.pool.put_unsafe(line1);
	}
	return result;
};
echo_Echo.linecast_vectors = function(start,end,test,world,update_world_quadtree) {
	if(update_world_quadtree == null) {
		update_world_quadtree = true;
	}
	var x = start.x;
	var y = start.y;
	var dx = end.x;
	var dy = end.y;
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var line = echo_Line.pool.get();
	var x1 = x;
	var y1 = y;
	var dx1 = dx;
	var dy1 = dy;
	if(dy1 == null) {
		dy1 = 1;
	}
	if(dx1 == null) {
		dx1 = 1;
	}
	if(y1 == null) {
		y1 = 0;
	}
	if(x1 == null) {
		x1 = 0;
	}
	var v = line.start;
	v.x = x1;
	v.y = y1;
	var v = line.end;
	v.x = dx1;
	v.y = dy1;
	line.pooled = false;
	var line1 = line;
	var result = echo_Echo.linecast(line1,test,world);
	if(!line1.pooled) {
		line1.pooled = true;
		echo_Line.pool.put_unsafe(line1);
	}
	return result;
};
echo_Echo.linecast = function(line,test,world,update_world_quadtree) {
	if(update_world_quadtree == null) {
		update_world_quadtree = true;
	}
	var closest = null;
	var min_x = Math.min(line.start.x,line.end.x);
	var min_y = Math.min(line.start.y,line.end.y);
	var max_x = Math.max(line.start.x,line.end.x);
	var max_y = Math.max(line.start.y,line.end.y);
	var aabb = echo_util_AABB.pool.get();
	aabb.min_x = min_x;
	aabb.max_x = max_x;
	aabb.min_y = min_y;
	aabb.max_y = max_y;
	aabb.pooled = false;
	var lb = aabb;
	var _g = test;
	switch(_g._hx_index) {
	case 0:
		var body = _g.v;
		if(!body.disposed && body.active) {
			var bb = body.bounds();
			if(lb.min_x < bb.max_x && lb.max_x >= bb.min_x && lb.min_y < bb.max_y && lb.max_y >= bb.min_y) {
				var _g1 = 0;
				var _g2 = body.shapes.length;
				while(_g1 < _g2) {
					var i = _g1++;
					var result = body.shapes[i].intersect(line);
					if(result != null) {
						if(closest == null) {
							var i1 = echo_data_Intersection.pool.get();
							i1.line = line;
							i1.body = body;
							i1.data.length = 0;
							i1.pooled = false;
							closest = i1;
						}
						closest.data.push(result);
					}
				}
			}
			bb.put();
		}
		break;
	case 1:
		var arr = _g.v;
		if(world == null) {
			var _g = 0;
			while(_g < arr.length) {
				var body = arr[_g];
				++_g;
				if(body == null || body.disposed || !body.active) {
					continue;
				}
				var bb = body.bounds();
				var i = echo_data_Intersection.pool.get();
				i.line = line;
				i.body = body;
				i.data.length = 0;
				i.pooled = false;
				var temp = i;
				if(lb.min_x < bb.max_x && lb.max_x >= bb.min_x && lb.min_y < bb.max_y && lb.max_y >= bb.min_y) {
					var _g1 = 0;
					var _g2 = body.shapes.length;
					while(_g1 < _g2) {
						var i1 = _g1++;
						var result = body.shapes[i1].intersect(line);
						if(result != null) {
							temp.data.push(result);
						}
					}
				}
				bb.put();
				var tmp;
				if(temp.data.length > 0) {
					if(closest != null) {
						var tmp1;
						if(closest.data.length == 0) {
							tmp1 = null;
						} else if(closest.data.length == 1) {
							tmp1 = closest.data[0];
						} else {
							var closest1 = closest.data[0];
							var _g3 = 1;
							var _g4 = closest.data.length;
							while(_g3 < _g4) {
								var i2 = _g3++;
								if(closest.data[i2] != null && closest.data[i2].distance < closest1.distance) {
									closest1 = closest.data[i2];
								}
							}
							tmp1 = closest1;
						}
						var tmp2 = tmp1.distance;
						var tmp3;
						if(temp.data.length == 0) {
							tmp3 = null;
						} else if(temp.data.length == 1) {
							tmp3 = temp.data[0];
						} else {
							var closest2 = temp.data[0];
							var _g5 = 1;
							var _g6 = temp.data.length;
							while(_g5 < _g6) {
								var i3 = _g5++;
								if(temp.data[i3] != null && temp.data[i3].distance < closest2.distance) {
									closest2 = temp.data[i3];
								}
							}
							tmp3 = closest2;
						}
						tmp = tmp2 > tmp3.distance;
					} else {
						tmp = true;
					}
				} else {
					tmp = false;
				}
				if(tmp) {
					if(closest != null) {
						closest.put();
					}
					closest = temp;
				} else {
					temp.put();
				}
			}
		} else {
			var _g = 0;
			var _g1 = echo_Echo.cached_collisions;
			while(_g < _g1.length) {
				var collision = _g1[_g];
				++_g;
				collision.put();
			}
			echo_Echo.cached_collisions.length = 0;
			var _this = echo_Echo.cached_body;
			var min_x = lb.min_x;
			var min_y = lb.min_y;
			var max_x = lb.max_x;
			var max_y = lb.max_y;
			var rect = echo_shape_Rect.pool.get();
			var x = (min_x + max_x) * 0.5;
			var y = (min_y + max_y) * 0.5;
			var width = max_x - min_x;
			var height = max_y - min_y;
			if(height == null) {
				height = 0;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_x = x;
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_y = y;
			var value = width * 0.5;
			var _this1 = rect.transform;
			var value1;
			if(_this1.parent == null) {
				value1 = _this1.local_scale_x;
			} else {
				_this1.sync();
				value1 = _this1._scale_x;
			}
			rect.local_ex = value / value1;
			if(rect.transformed_rect != null) {
				var _this1 = rect.transformed_rect;
				_this1.count = 4;
				var _g = 0;
				var _g1 = _this1.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this1.local_vertices[i] == null) {
						var _this2 = _this1.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this2[i] = this1;
					}
				}
				var v = _this1.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this1.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_x = v;
				var v = rect.transform.local_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_y = v;
				var _this2 = _this1.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_y = v;
				_this1.dirty_vertices = true;
				_this1.dirty_bounds = true;
			}
			var value = (height <= 0 ? width : height) * 0.5;
			var _this1 = rect.transform;
			var value1;
			if(_this1.parent == null) {
				value1 = _this1.local_scale_y;
			} else {
				_this1.sync();
				value1 = _this1._scale_y;
			}
			rect.local_ey = value / value1;
			if(rect.transformed_rect != null) {
				var _this1 = rect.transformed_rect;
				_this1.count = 4;
				var _g = 0;
				var _g1 = _this1.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this1.local_vertices[i] == null) {
						var _this2 = _this1.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this2[i] = this1;
					}
				}
				var v = _this1.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this1.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_x = v;
				var v = rect.transform.local_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_y = v;
				var _this2 = _this1.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_y = v;
				_this1.dirty_vertices = true;
				_this1.dirty_bounds = true;
			}
			var _this1 = rect.transform;
			var v = Math.PI / 180 * 0;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_radians = v;
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_x = 1;
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_y = 1;
			var tmp;
			if(rect.transformed_rect == null) {
				var _this1 = rect.transform;
				var tmp1;
				if(_this1.parent == null) {
					tmp1 = 180 / Math.PI * _this1.local_radians;
				} else {
					_this1.sync();
					tmp1 = 180 / Math.PI * _this1._radians;
				}
				tmp = tmp1 != 0;
			} else {
				tmp = false;
			}
			if(tmp) {
				var polygon = echo_shape_Polygon.pool.get();
				polygon.count = 4;
				var _g = 0;
				var _g1 = polygon.count;
				while(_g < _g1) {
					var i = _g++;
					if(polygon.local_vertices[i] == null) {
						var polygon1 = polygon.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						polygon1[i] = this1;
					}
				}
				var v = polygon.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = polygon.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = polygon.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
				polygon.dirty_vertices = true;
				polygon.dirty_bounds = true;
				polygon.pooled = false;
				rect.transformed_rect = polygon;
				rect.transformed_rect.set_parent(rect.parent);
			} else if(rect.transformed_rect != null) {
				var v = rect.transform.local_x;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = rect.transformed_rect.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
			}
			rect.pooled = false;
			if(_this.shapes[0] != null) {
				_this.shapes[0].put();
			}
			_this.shapes[0] = rect;
			_this.shapes[0].set_parent(_this);
			_this.dirty = true;
			if(_this.mass <= 0 && _this.world != null) {
				_this.bounds(_this.quadtree_data.bounds);
				_this.world.static_quadtree.update(_this.quadtree_data);
			}
			if(update_world_quadtree) {
				echo_Collisions.update_quadtree(world);
			}
			echo_Collisions.overlap_body_and_bodies_bounds(echo_Echo.cached_body,arr,world,echo_Echo.cached_collisions);
			var _g = 0;
			var _g1 = echo_Echo.cached_collisions;
			while(_g < _g1.length) {
				var collision = _g1[_g];
				++_g;
				var body = collision.b;
				var i = echo_data_Intersection.pool.get();
				i.line = line;
				i.body = body;
				i.data.length = 0;
				i.pooled = false;
				var temp = i;
				var _g2 = 0;
				var _g3 = collision.b.shapes.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var result = collision.b.shapes[i1].intersect(line);
					if(result != null) {
						temp.data.push(result);
					}
				}
				var tmp;
				if(temp.data.length > 0) {
					if(closest != null) {
						var tmp1;
						if(closest.data.length == 0) {
							tmp1 = null;
						} else if(closest.data.length == 1) {
							tmp1 = closest.data[0];
						} else {
							var closest1 = closest.data[0];
							var _g4 = 1;
							var _g5 = closest.data.length;
							while(_g4 < _g5) {
								var i2 = _g4++;
								if(closest.data[i2] != null && closest.data[i2].distance < closest1.distance) {
									closest1 = closest.data[i2];
								}
							}
							tmp1 = closest1;
						}
						var tmp2 = tmp1.distance;
						var tmp3;
						if(temp.data.length == 0) {
							tmp3 = null;
						} else if(temp.data.length == 1) {
							tmp3 = temp.data[0];
						} else {
							var closest2 = temp.data[0];
							var _g6 = 1;
							var _g7 = temp.data.length;
							while(_g6 < _g7) {
								var i3 = _g6++;
								if(temp.data[i3] != null && temp.data[i3].distance < closest2.distance) {
									closest2 = temp.data[i3];
								}
							}
							tmp3 = closest2;
						}
						tmp = tmp2 > tmp3.distance;
					} else {
						tmp = true;
					}
				} else {
					tmp = false;
				}
				if(tmp) {
					if(closest != null) {
						closest.put();
					}
					closest = temp;
				} else {
					temp.put();
				}
			}
			echo_Echo.cached_body.shapes[0].put();
		}
		break;
	}
	lb.put();
	return closest;
};
echo_Echo.linecast_all = function(line,test,world,update_world_quadtree) {
	if(update_world_quadtree == null) {
		update_world_quadtree = true;
	}
	var intersections = [];
	var min_x = Math.min(line.start.x,line.end.x);
	var min_y = Math.min(line.start.y,line.end.y);
	var max_x = Math.max(line.start.x,line.end.x);
	var max_y = Math.max(line.start.y,line.end.y);
	var aabb = echo_util_AABB.pool.get();
	aabb.min_x = min_x;
	aabb.max_x = max_x;
	aabb.min_y = min_y;
	aabb.max_y = max_y;
	aabb.pooled = false;
	var lb = aabb;
	var _g = test;
	switch(_g._hx_index) {
	case 0:
		var body = _g.v;
		var i = echo_data_Intersection.pool.get();
		i.line = line;
		i.body = body;
		i.data.length = 0;
		i.pooled = false;
		var temp = i;
		var bb = body.bounds();
		if(lb.min_x < bb.max_x && lb.max_x >= bb.min_x && lb.min_y < bb.max_y && lb.max_y >= bb.min_y) {
			var _g1 = 0;
			var _g2 = body.shapes.length;
			while(_g1 < _g2) {
				var i = _g1++;
				var result = body.shapes[i].intersect(line);
				if(result != null) {
					temp.data.push(result);
				}
			}
		}
		bb.put();
		if(temp.data.length > 0) {
			intersections.push(temp);
		} else {
			temp.put();
		}
		break;
	case 1:
		var arr = _g.v;
		if(world == null) {
			var _g = 0;
			while(_g < arr.length) {
				var body = arr[_g];
				++_g;
				if(body == null) {
					continue;
				}
				var bb = body.bounds();
				var i = echo_data_Intersection.pool.get();
				i.line = line;
				i.body = body;
				i.data.length = 0;
				i.pooled = false;
				var temp = i;
				if(lb.min_x < bb.max_x && lb.max_x >= bb.min_x && lb.min_y < bb.max_y && lb.max_y >= bb.min_y) {
					var _g1 = 0;
					var _g2 = body.shapes.length;
					while(_g1 < _g2) {
						var i1 = _g1++;
						var result = body.shapes[i1].intersect(line);
						if(result != null) {
							temp.data.push(result);
						}
					}
				}
				bb.put();
				if(temp.data.length > 0) {
					intersections.push(temp);
				} else {
					temp.put();
				}
			}
		} else {
			var _g = 0;
			var _g1 = echo_Echo.cached_collisions;
			while(_g < _g1.length) {
				var collision = _g1[_g];
				++_g;
				collision.put();
			}
			echo_Echo.cached_collisions.length = 0;
			var _this = echo_Echo.cached_body;
			var min_x = lb.min_x;
			var min_y = lb.min_y;
			var max_x = lb.max_x;
			var max_y = lb.max_y;
			var rect = echo_shape_Rect.pool.get();
			var x = (min_x + max_x) * 0.5;
			var y = (min_y + max_y) * 0.5;
			var width = max_x - min_x;
			var height = max_y - min_y;
			if(height == null) {
				height = 0;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_x = x;
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_y = y;
			var value = width * 0.5;
			var _this1 = rect.transform;
			var value1;
			if(_this1.parent == null) {
				value1 = _this1.local_scale_x;
			} else {
				_this1.sync();
				value1 = _this1._scale_x;
			}
			rect.local_ex = value / value1;
			if(rect.transformed_rect != null) {
				var _this1 = rect.transformed_rect;
				_this1.count = 4;
				var _g = 0;
				var _g1 = _this1.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this1.local_vertices[i] == null) {
						var _this2 = _this1.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this2[i] = this1;
					}
				}
				var v = _this1.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this1.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_x = v;
				var v = rect.transform.local_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_y = v;
				var _this2 = _this1.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_y = v;
				_this1.dirty_vertices = true;
				_this1.dirty_bounds = true;
			}
			var value = (height <= 0 ? width : height) * 0.5;
			var _this1 = rect.transform;
			var value1;
			if(_this1.parent == null) {
				value1 = _this1.local_scale_y;
			} else {
				_this1.sync();
				value1 = _this1._scale_y;
			}
			rect.local_ey = value / value1;
			if(rect.transformed_rect != null) {
				var _this1 = rect.transformed_rect;
				_this1.count = 4;
				var _g = 0;
				var _g1 = _this1.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this1.local_vertices[i] == null) {
						var _this2 = _this1.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this2[i] = this1;
					}
				}
				var v = _this1.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this1.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this1.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_x = v;
				var v = rect.transform.local_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_y = v;
				var _this2 = _this1.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this2 = _this1.transform;
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_scale_y = v;
				_this1.dirty_vertices = true;
				_this1.dirty_bounds = true;
			}
			var _this1 = rect.transform;
			var v = Math.PI / 180 * 0;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_radians = v;
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_x = 1;
			var _this1 = rect.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_y = 1;
			var tmp;
			if(rect.transformed_rect == null) {
				var _this1 = rect.transform;
				var tmp1;
				if(_this1.parent == null) {
					tmp1 = 180 / Math.PI * _this1.local_radians;
				} else {
					_this1.sync();
					tmp1 = 180 / Math.PI * _this1._radians;
				}
				tmp = tmp1 != 0;
			} else {
				tmp = false;
			}
			if(tmp) {
				var polygon = echo_shape_Polygon.pool.get();
				polygon.count = 4;
				var _g = 0;
				var _g1 = polygon.count;
				while(_g < _g1) {
					var i = _g++;
					if(polygon.local_vertices[i] == null) {
						var polygon1 = polygon.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						polygon1[i] = this1;
					}
				}
				var v = polygon.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = polygon.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = polygon.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = polygon.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
				polygon.dirty_vertices = true;
				polygon.dirty_bounds = true;
				polygon.pooled = false;
				rect.transformed_rect = polygon;
				rect.transformed_rect.set_parent(rect.parent);
			} else if(rect.transformed_rect != null) {
				var v = rect.transform.local_x;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = rect.transformed_rect.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = rect.transformed_rect.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
			}
			rect.pooled = false;
			if(_this.shapes[0] != null) {
				_this.shapes[0].put();
			}
			_this.shapes[0] = rect;
			_this.shapes[0].set_parent(_this);
			_this.dirty = true;
			if(_this.mass <= 0 && _this.world != null) {
				_this.bounds(_this.quadtree_data.bounds);
				_this.world.static_quadtree.update(_this.quadtree_data);
			}
			if(update_world_quadtree) {
				echo_Collisions.update_quadtree(world);
			}
			echo_Collisions.overlap_body_and_bodies_bounds(echo_Echo.cached_body,arr,world,echo_Echo.cached_collisions);
			var _g = 0;
			var _g1 = echo_Echo.cached_collisions;
			while(_g < _g1.length) {
				var collision = _g1[_g];
				++_g;
				var body = collision.b;
				var i = echo_data_Intersection.pool.get();
				i.line = line;
				i.body = body;
				i.data.length = 0;
				i.pooled = false;
				var temp = i;
				var _g2 = 0;
				var _g3 = collision.b.shapes.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var result = collision.b.shapes[i1].intersect(line);
					if(result != null) {
						temp.data.push(result);
					}
				}
				if(temp.data.length > 0) {
					intersections.push(temp);
				} else {
					temp.put();
				}
			}
			echo_Echo.cached_body.shapes[0].put();
		}
		break;
	}
	lb.put();
	return intersections;
};
echo_Echo.undo = function(world) {
	if(world.history != null) {
		var state = world.history.undo();
		if(state != null) {
			var _g = 0;
			while(_g < state.length) {
				var item = state[_g];
				++_g;
				var _g1 = 0;
				var _g2 = world.members;
				while(_g1 < _g2.length) {
					var body = _g2[_g1];
					++_g1;
					if(item.id == body.id) {
						var value = item.x;
						var _this = body.transform;
						if(!_this.dirty) {
							_this.set_dirty();
						}
						_this.local_x = value;
						if(body.on_move != null) {
							body.on_move(body.transform.local_x,body.transform.local_y);
						}
						var value1 = item.y;
						var _this1 = body.transform;
						if(!_this1.dirty) {
							_this1.set_dirty();
						}
						_this1.local_y = value1;
						if(body.on_move != null) {
							body.on_move(body.transform.local_x,body.transform.local_y);
						}
						var _this2 = body.transform;
						var v = Math.PI / 180 * item.rotation;
						if(!_this2.dirty) {
							_this2.set_dirty();
						}
						_this2.local_radians = v;
						if(body.on_rotate != null) {
							body.on_rotate(180 / Math.PI * body.transform.local_radians);
						}
						var v1 = body.velocity;
						v1.x = item.velocity_x;
						v1.y = item.velocity_y;
						var v2 = body.acceleration;
						v2.x = item.acceleration_x;
						v2.y = item.acceleration_y;
						body.rotational_velocity = item.rotational_velocity;
					}
				}
			}
			world.reset_quadtrees();
		}
	}
	return world;
};
echo_Echo.redo = function(world) {
	if(world.history != null) {
		var state = world.history.redo();
		if(state != null) {
			var _g = 0;
			while(_g < state.length) {
				var item = state[_g];
				++_g;
				var _g1 = 0;
				var _g2 = world.members;
				while(_g1 < _g2.length) {
					var body = _g2[_g1];
					++_g1;
					if(item.id == body.id) {
						var value = item.x;
						var _this = body.transform;
						if(!_this.dirty) {
							_this.set_dirty();
						}
						_this.local_x = value;
						if(body.on_move != null) {
							body.on_move(body.transform.local_x,body.transform.local_y);
						}
						var value1 = item.y;
						var _this1 = body.transform;
						if(!_this1.dirty) {
							_this1.set_dirty();
						}
						_this1.local_y = value1;
						if(body.on_move != null) {
							body.on_move(body.transform.local_x,body.transform.local_y);
						}
						var _this2 = body.transform;
						var v = Math.PI / 180 * item.rotation;
						if(!_this2.dirty) {
							_this2.set_dirty();
						}
						_this2.local_radians = v;
						if(body.on_rotate != null) {
							body.on_rotate(180 / Math.PI * body.transform.local_radians);
						}
						var v1 = body.velocity;
						v1.x = item.velocity_x;
						v1.y = item.velocity_y;
						var v2 = body.acceleration;
						v2.x = item.acceleration_x;
						v2.y = item.acceleration_y;
						body.rotational_velocity = item.rotational_velocity;
					}
				}
			}
		}
		world.reset_quadtrees();
	}
	return world;
};
var echo_util_Poolable = function() { };
echo_util_Poolable.__name__ = true;
echo_util_Poolable.__isInterface__ = true;
var echo_util_Pool = function() { };
echo_util_Pool.__name__ = true;
echo_util_Pool.__isInterface__ = true;
var echo_util_GenericPool_$echo_$Line = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$Line.__name__ = true;
echo_util_GenericPool_$echo_$Line.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$Line.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$Line
};
var echo_Line = function(x,y,dx,dy) {
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.pooled = false;
	var this1 = new echo_math_Vector2Default(x,y);
	this.start = this1;
	var this1 = new echo_math_Vector2Default(dx,dy);
	this.end = this1;
};
echo_Line.__name__ = true;
echo_Line.__interfaces__ = [echo_util_Poolable];
echo_Line.prototype = {
	set_from_vector: function(start,degrees,length) {
		var rad = Math.PI / 180 * degrees;
		var end_x = start.x + length * Math.cos(rad);
		var end_y = start.y + length * Math.sin(rad);
		var x = start.x;
		var y = start.y;
		var dx = end_x;
		var dy = end_y;
		if(dy == null) {
			dy = 1;
		}
		if(dx == null) {
			dx = 1;
		}
		if(y == null) {
			y = 0;
		}
		if(x == null) {
			x = 0;
		}
		var v = this.start;
		v.x = x;
		v.y = y;
		var v = this.end;
		v.x = dx;
		v.y = dy;
		return this;
	}
	,get_x: function() {
		return this.start.x;
	}
	,get_y: function() {
		return this.start.y;
	}
	,get_dx: function() {
		return this.end.x;
	}
	,get_dy: function() {
		return this.end.y;
	}
	,__class__: echo_Line
	,__properties__: {get_dy:"get_dy",get_dx:"get_dx",get_y:"get_y",get_x:"get_x"}
};
var echo_Listener = function(a,b,separate,collisions,last_collisions,enter,stay,exit,condition,quadtree_results,percent_correction,correction_threshold) {
	this.a = a;
	this.b = b;
	this.separate = separate;
	this.collisions = collisions;
	this.last_collisions = last_collisions;
	this.enter = enter;
	this.stay = stay;
	this.exit = exit;
	this.condition = condition;
	this.quadtree_results = quadtree_results;
	this.percent_correction = percent_correction;
	this.correction_threshold = correction_threshold;
};
echo_Listener.__name__ = true;
echo_Listener.__properties__ = {get_defaults:"get_defaults"};
echo_Listener.get_defaults = function() {
	return { separate : true, percent_correction : 0.9, correction_threshold : 0.013};
};
echo_Listener.prototype = {
	__class__: echo_Listener
};
var echo_Material = function(elasticity,density,friction,static_friction,gravity_scale) {
	this.gravity_scale = 1;
	this.static_friction = 0;
	this.friction = 0;
	this.density = 1;
	this.elasticity = 0;
	if(elasticity != null) {
		this.elasticity = elasticity;
	}
	if(density != null) {
		this.density = density;
	}
	if(friction != null) {
		this.friction = friction;
	}
	if(static_friction != null) {
		this.static_friction = static_friction;
	}
	if(gravity_scale != null) {
		this.gravity_scale = gravity_scale;
	}
};
echo_Material.__name__ = true;
echo_Material.prototype = {
	__class__: echo_Material
};
var echo_Physics = function() { };
echo_Physics.__name__ = true;
echo_Physics.step = function(world,dt) {
	var _g = 0;
	var _g1 = world.members;
	while(_g < _g1.length) {
		var b = _g1[_g];
		++_g;
		if(b.mass > 0) {
			if(!b.disposed && b.active) {
				b.last_x = b.transform.local_x;
				b.last_y = b.transform.local_y;
				b.last_rotation = 180 / Math.PI * b.transform.local_radians;
				var accel_x = b.acceleration.x * b.inverse_mass;
				var accel_y = b.acceleration.y * b.inverse_mass;
				if(!b.kinematic) {
					accel_x += world.gravity.x * b.material.gravity_scale;
					accel_y += world.gravity.y * b.material.gravity_scale;
				}
				var v = b.velocity.x;
				var d = b.drag.x;
				var m = b.max_velocity.x;
				if(!(Math.abs(accel_x) <= 0.00001)) {
					v += accel_x * dt;
				} else if(!(Math.abs(d) <= 0.00001)) {
					d *= dt;
					if(v - d > 0) {
						v -= d;
					} else if(v + d < 0) {
						v += d;
					} else {
						v = 0;
					}
				}
				if(!(Math.abs(m) <= 0.00001)) {
					var min = -m;
					if(v < min) {
						v = min;
					} else if(v > m) {
						v = m;
					}
				}
				b.velocity.x = v;
				var v1 = b.velocity.y;
				var d1 = b.drag.y;
				var m1 = b.max_velocity.y;
				if(!(Math.abs(accel_y) <= 0.00001)) {
					v1 += accel_y * dt;
				} else if(!(Math.abs(d1) <= 0.00001)) {
					d1 *= dt;
					if(v1 - d1 > 0) {
						v1 -= d1;
					} else if(v1 + d1 < 0) {
						v1 += d1;
					} else {
						v1 = 0;
					}
				}
				if(!(Math.abs(m1) <= 0.00001)) {
					var min1 = -m1;
					if(v1 < min1) {
						v1 = min1;
					} else if(v1 > m1) {
						v1 = m1;
					}
				}
				b.velocity.y = v1;
				var tmp;
				var tmp1;
				if(b.drag_length > 0) {
					var a = b.acceleration;
					var b_x = 0.0;
					var b_y = 0.0;
					tmp1 = a.x == b_x && a.y == b_y;
				} else {
					tmp1 = false;
				}
				if(tmp1) {
					var a1 = b.velocity;
					var b_x1 = 0.0;
					var b_y1 = 0.0;
					tmp = !(a1.x == b_x1 && a1.y == b_y1);
				} else {
					tmp = false;
				}
				if(tmp) {
					var this1 = b.velocity;
					var self = b.velocity;
					var f = Math.sqrt(self.x * self.x + self.y * self.y) - b.drag_length * dt;
					var self1 = this1;
					var self2 = this1;
					var self3 = self2;
					var len_sq = self3.x * self3.x + self3.y * self3.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self2.x / denominator;
					var a_y = self2.y / denominator;
					var b_x2 = a_x * f;
					var b_y2 = a_y * f;
					self1.x = b_x2;
					self1.y = b_y2;
				}
				var tmp2;
				if(b.max_velocity_length > 0) {
					var self4 = b.velocity;
					tmp2 = Math.sqrt(self4.x * self4.x + self4.y * self4.y) > b.max_velocity_length;
				} else {
					tmp2 = false;
				}
				if(tmp2) {
					var this2 = b.velocity;
					var f1 = b.max_velocity_length;
					var self5 = this2;
					var self6 = this2;
					var self7 = self6;
					var len_sq1 = self7.x * self7.x + self7.y * self7.y;
					var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
					var a_x1 = self6.x / denominator1;
					var a_y1 = self6.y / denominator1;
					var b_x3 = a_x1 * f1;
					var b_y3 = a_y1 * f1;
					self5.x = b_x3;
					self5.y = b_y3;
				}
				var value = b.transform.local_x + b.velocity.x * dt;
				var _this = b.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_x = value;
				if(b.on_move != null) {
					b.on_move(b.transform.local_x,b.transform.local_y);
				}
				var value1 = b.transform.local_y + b.velocity.y * dt;
				var _this1 = b.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = value1;
				if(b.on_move != null) {
					b.on_move(b.transform.local_x,b.transform.local_y);
				}
				var accel_rot = b.torque * b.inverse_mass;
				var v2 = b.rotational_velocity;
				var a2 = b.rotational_drag;
				var d2 = accel_rot;
				var m2 = b.max_rotational_velocity;
				if(!(Math.abs(a2) <= 0.00001)) {
					v2 += a2 * dt;
				} else if(!(Math.abs(d2) <= 0.00001)) {
					d2 *= dt;
					if(v2 - d2 > 0) {
						v2 -= d2;
					} else if(v2 + d2 < 0) {
						v2 += d2;
					} else {
						v2 = 0;
					}
				}
				if(!(Math.abs(m2) <= 0.00001)) {
					var min2 = -m2;
					if(v2 < min2) {
						v2 = min2;
					} else if(v2 > m2) {
						v2 = m2;
					}
				}
				b.rotational_velocity = v2;
				var _this2 = b.transform;
				var v3 = Math.PI / 180 * (180 / Math.PI * b.transform.local_radians + b.rotational_velocity * dt);
				if(!_this2.dirty) {
					_this2.set_dirty();
				}
				_this2.local_radians = v3;
				if(b.on_rotate != null) {
					b.on_rotate(180 / Math.PI * b.transform.local_radians);
				}
			}
		}
	}
};
echo_Physics.separate = function(world,listeners) {
	var members = listeners == null ? world.listeners.members : listeners.members;
	var _g = 0;
	while(_g < members.length) {
		var listener = members[_g];
		++_g;
		if(listener.separate) {
			var _g1 = 0;
			var _g2 = listener.collisions;
			while(_g1 < _g2.length) {
				var collision = _g2[_g1];
				++_g1;
				var _g3 = 0;
				var _g4 = collision.data.length;
				while(_g3 < _g4) {
					var i = _g3++;
					var a = collision.a;
					var b = collision.b;
					var cd = collision.data[i];
					var correction_threshold = listener.correction_threshold;
					var percent_correction = listener.percent_correction;
					if(percent_correction == null) {
						percent_correction = 0.9;
					}
					if(correction_threshold == null) {
						correction_threshold = 0.013;
					}
					if(!(!cd.sa.solid || !cd.sb.solid || !a.active || !b.active || a.disposed || b.disposed || a.mass <= 0 && b.mass <= 0)) {
						var rvx = a.velocity.x - b.velocity.x;
						var rvy = a.velocity.y - b.velocity.y;
						var vel_to_normal = rvx * cd.normal.x + rvy * cd.normal.y;
						var inv_mass_sum = a.inverse_mass + b.inverse_mass;
						if(vel_to_normal > 0) {
							var e = (a.material.elasticity + b.material.elasticity) * 0.5;
							var j = -(1 + e) * vel_to_normal / inv_mass_sum;
							var impulse_x = -j * cd.normal.x;
							var impulse_y = -j * cd.normal.y;
							var mass_sum = a.mass + b.mass;
							var ratio = a.mass / mass_sum;
							if(!a.kinematic) {
								a.velocity.x -= impulse_x * a.inverse_mass;
								a.velocity.y -= impulse_y * a.inverse_mass;
							}
							ratio = b.mass / mass_sum;
							if(!b.kinematic) {
								b.velocity.x += impulse_x * b.inverse_mass;
								b.velocity.y += impulse_y * b.inverse_mass;
							}
						}
						var correction = Math.max(cd.overlap - correction_threshold,0) / inv_mass_sum * percent_correction;
						var cx = correction * cd.normal.x;
						var cy = correction * cd.normal.y;
						if(!a.kinematic) {
							var value = a.transform.local_x - a.inverse_mass * cx;
							var _this = a.transform;
							if(!_this.dirty) {
								_this.set_dirty();
							}
							_this.local_x = value;
							if(a.on_move != null) {
								a.on_move(a.transform.local_x,a.transform.local_y);
							}
							var value1 = a.transform.local_y - a.inverse_mass * cy;
							var _this1 = a.transform;
							if(!_this1.dirty) {
								_this1.set_dirty();
							}
							_this1.local_y = value1;
							if(a.on_move != null) {
								a.on_move(a.transform.local_x,a.transform.local_y);
							}
						}
						if(!b.kinematic) {
							var value2 = b.transform.local_x + b.inverse_mass * cx;
							var _this2 = b.transform;
							if(!_this2.dirty) {
								_this2.set_dirty();
							}
							_this2.local_x = value2;
							if(b.on_move != null) {
								b.on_move(b.transform.local_x,b.transform.local_y);
							}
							var value3 = b.transform.local_y + b.inverse_mass * cy;
							var _this3 = b.transform;
							if(!_this3.dirty) {
								_this3.set_dirty();
							}
							_this3.local_y = value3;
							if(b.on_move != null) {
								b.on_move(b.transform.local_x,b.transform.local_y);
							}
						}
					}
				}
			}
		}
	}
};
var echo_Shape = function(x,y,rotation) {
	if(rotation == null) {
		rotation = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.solid = true;
	this.transform = new echo_util_Transform();
	var _this = this.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_x = x;
	var _this = this.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_y = y;
	var _this = this.transform;
	var v = Math.PI / 180 * rotation;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_radians = v;
};
echo_Shape.__name__ = true;
echo_Shape.__properties__ = {get_defaults:"get_defaults"};
echo_Shape.get = function(options) {
	options = echo_util_JSON.copy_fields(options,echo_Shape.get_defaults());
	var s;
	switch(options.type) {
	case 0:
		var x = options.offset_x;
		var y = options.offset_y;
		var width = options.width;
		var height = options.height;
		var rotation = options.rotation;
		var scale_x = options.scale_x;
		var scale_y = options.scale_y;
		if(scale_y == null) {
			scale_y = 1;
		}
		if(scale_x == null) {
			scale_x = 1;
		}
		if(rotation == null) {
			rotation = 0;
		}
		if(height == null) {
			height = 0;
		}
		if(width == null) {
			width = 1;
		}
		if(y == null) {
			y = 0;
		}
		if(x == null) {
			x = 0;
		}
		var rect = echo_shape_Rect.pool.get();
		var x1 = x;
		var y1 = y;
		var width1 = width;
		var height1 = height;
		var rotation1 = rotation;
		var scale_x1 = scale_x;
		var scale_y1 = scale_y;
		if(scale_y1 == null) {
			scale_y1 = 1;
		}
		if(scale_x1 == null) {
			scale_x1 = 1;
		}
		if(rotation1 == null) {
			rotation1 = 0;
		}
		if(height1 == null) {
			height1 = 0;
		}
		if(width1 == null) {
			width1 = 1;
		}
		if(y1 == null) {
			y1 = 0;
		}
		if(x1 == null) {
			x1 = 0;
		}
		var _this = rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_x = x1;
		var _this = rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_y = y1;
		var value = width1 * 0.5;
		var _this = rect.transform;
		var value1;
		if(_this.parent == null) {
			value1 = _this.local_scale_x;
		} else {
			_this.sync();
			value1 = _this._scale_x;
		}
		rect.local_ex = value / value1;
		if(rect.transformed_rect != null) {
			var _this = rect.transformed_rect;
			_this.count = 4;
			var _g = 0;
			var _g1 = _this.count;
			while(_g < _g1) {
				var i = _g++;
				if(_this.local_vertices[i] == null) {
					var _this1 = _this.local_vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					_this1[i] = this1;
				}
			}
			var v = _this.local_vertices[0];
			v.x = -(rect.local_ex * rect.transform.local_scale_x);
			v.y = -(rect.local_ey * rect.transform.local_scale_y);
			var v = _this.local_vertices[1];
			v.x = rect.local_ex * rect.transform.local_scale_x;
			v.y = -(rect.local_ey * rect.transform.local_scale_y);
			var v = _this.local_vertices[2];
			v.x = rect.local_ex * rect.transform.local_scale_x;
			v.y = rect.local_ey * rect.transform.local_scale_y;
			var v = _this.local_vertices[3];
			v.x = -(rect.local_ex * rect.transform.local_scale_x);
			v.y = rect.local_ey * rect.transform.local_scale_y;
			var v = rect.transform.local_x;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_x = v;
			var v = rect.transform.local_y;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_y = v;
			var _this1 = _this.transform;
			var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_radians = v;
			var v = rect.transform.local_scale_x;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_x = v;
			var v = rect.transform.local_scale_y;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_y = v;
			_this.dirty_vertices = true;
			_this.dirty_bounds = true;
		}
		var value = (height1 <= 0 ? width1 : height1) * 0.5;
		var _this = rect.transform;
		var value1;
		if(_this.parent == null) {
			value1 = _this.local_scale_y;
		} else {
			_this.sync();
			value1 = _this._scale_y;
		}
		rect.local_ey = value / value1;
		if(rect.transformed_rect != null) {
			var _this = rect.transformed_rect;
			_this.count = 4;
			var _g = 0;
			var _g1 = _this.count;
			while(_g < _g1) {
				var i = _g++;
				if(_this.local_vertices[i] == null) {
					var _this1 = _this.local_vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					_this1[i] = this1;
				}
			}
			var v = _this.local_vertices[0];
			v.x = -(rect.local_ex * rect.transform.local_scale_x);
			v.y = -(rect.local_ey * rect.transform.local_scale_y);
			var v = _this.local_vertices[1];
			v.x = rect.local_ex * rect.transform.local_scale_x;
			v.y = -(rect.local_ey * rect.transform.local_scale_y);
			var v = _this.local_vertices[2];
			v.x = rect.local_ex * rect.transform.local_scale_x;
			v.y = rect.local_ey * rect.transform.local_scale_y;
			var v = _this.local_vertices[3];
			v.x = -(rect.local_ex * rect.transform.local_scale_x);
			v.y = rect.local_ey * rect.transform.local_scale_y;
			var v = rect.transform.local_x;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_x = v;
			var v = rect.transform.local_y;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_y = v;
			var _this1 = _this.transform;
			var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_radians = v;
			var v = rect.transform.local_scale_x;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_x = v;
			var v = rect.transform.local_scale_y;
			var _this1 = _this.transform;
			if(!_this1.dirty) {
				_this1.set_dirty();
			}
			_this1.local_scale_y = v;
			_this.dirty_vertices = true;
			_this.dirty_bounds = true;
		}
		var _this = rect.transform;
		var v = Math.PI / 180 * rotation1;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_radians = v;
		var _this = rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_x = scale_x1;
		var _this = rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_y = scale_y1;
		var s1;
		if(rect.transformed_rect == null) {
			var _this = rect.transform;
			var s2;
			if(_this.parent == null) {
				s2 = 180 / Math.PI * _this.local_radians;
			} else {
				_this.sync();
				s2 = 180 / Math.PI * _this._radians;
			}
			s1 = s2 != 0;
		} else {
			s1 = false;
		}
		if(s1) {
			var polygon = echo_shape_Polygon.pool.get();
			polygon.count = 4;
			var _g = 0;
			var _g1 = polygon.count;
			while(_g < _g1) {
				var i = _g++;
				if(polygon.local_vertices[i] == null) {
					var polygon1 = polygon.local_vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					polygon1[i] = this1;
				}
			}
			var v = polygon.local_vertices[0];
			v.x = -(rect.local_ex * rect.transform.local_scale_x);
			v.y = -(rect.local_ey * rect.transform.local_scale_y);
			var v = polygon.local_vertices[1];
			v.x = rect.local_ex * rect.transform.local_scale_x;
			v.y = -(rect.local_ey * rect.transform.local_scale_y);
			var v = polygon.local_vertices[2];
			v.x = rect.local_ex * rect.transform.local_scale_x;
			v.y = rect.local_ey * rect.transform.local_scale_y;
			var v = polygon.local_vertices[3];
			v.x = -(rect.local_ex * rect.transform.local_scale_x);
			v.y = rect.local_ey * rect.transform.local_scale_y;
			var v = rect.transform.local_x;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = v;
			var v = rect.transform.local_y;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = v;
			var _this = polygon.transform;
			var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var v = rect.transform.local_scale_x;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = v;
			var v = rect.transform.local_scale_y;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = v;
			polygon.dirty_vertices = true;
			polygon.dirty_bounds = true;
			polygon.pooled = false;
			rect.transformed_rect = polygon;
			rect.transformed_rect.set_parent(rect.parent);
		} else if(rect.transformed_rect != null) {
			var v = rect.transform.local_x;
			var _this = rect.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = v;
			var v = rect.transform.local_y;
			var _this = rect.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = v;
			var _this = rect.transformed_rect.transform;
			var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var v = rect.transform.local_scale_x;
			var _this = rect.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = v;
			var v = rect.transform.local_scale_y;
			var _this = rect.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = v;
		}
		rect.pooled = false;
		s = rect;
		break;
	case 1:
		var x = options.offset_x;
		var y = options.offset_y;
		var radius = options.radius;
		var rotation = options.rotation;
		var scale_x = options.scale_x;
		var scale_y = options.scale_y;
		if(scale_y == null) {
			scale_y = 1;
		}
		if(scale_x == null) {
			scale_x = 1;
		}
		if(rotation == null) {
			rotation = 0;
		}
		if(radius == null) {
			radius = 1;
		}
		if(y == null) {
			y = 0;
		}
		if(x == null) {
			x = 0;
		}
		var circle = echo_shape_Circle.pool.get();
		var x1 = x;
		var y1 = y;
		var radius1 = radius;
		var rotation1 = rotation;
		var scale_x1 = scale_x;
		var scale_y1 = scale_y;
		if(scale_y1 == null) {
			scale_y1 = 1;
		}
		if(scale_x1 == null) {
			scale_x1 = 1;
		}
		if(rotation1 == null) {
			rotation1 = 0;
		}
		if(radius1 == null) {
			radius1 = 1;
		}
		if(y1 == null) {
			y1 = 0;
		}
		if(x1 == null) {
			x1 = 0;
		}
		var _this = circle.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_x = x1;
		var _this = circle.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_y = y1;
		var _this = circle.transform;
		var v = Math.PI / 180 * rotation1;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_radians = v;
		var _this = circle.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_x = scale_x1;
		var _this = circle.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_y = scale_y1;
		var _this = circle.transform;
		var s1;
		if(_this.parent == null) {
			s1 = _this.local_scale_x;
		} else {
			_this.sync();
			s1 = _this._scale_x;
		}
		circle.local_radius = radius1 / s1;
		circle.pooled = false;
		s = circle;
		break;
	case 2:
		if(options.vertices != null) {
			var x = options.offset_x;
			var y = options.offset_y;
			var rotation = options.rotation;
			var vertices = options.vertices;
			var scale_x = options.scale_x;
			var scale_y = options.scale_y;
			if(scale_y == null) {
				scale_y = 1;
			}
			if(scale_x == null) {
				scale_x = 1;
			}
			if(rotation == null) {
				rotation = 0;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var polygon = echo_shape_Polygon.pool.get();
			var x1 = x;
			var y1 = y;
			var rotation1 = rotation;
			var scale_x1 = scale_x;
			var scale_y1 = scale_y;
			if(scale_y1 == null) {
				scale_y1 = 1;
			}
			if(scale_x1 == null) {
				scale_x1 = 1;
			}
			if(rotation1 == null) {
				rotation1 = 0;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = x1;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = y1;
			var _this = polygon.transform;
			var v = Math.PI / 180 * rotation1;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = scale_x1;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = scale_y1;
			var count = null;
			polygon.local_vertices = vertices == null ? [] : vertices;
			polygon.count = count != null && count >= 0 ? count : polygon.local_vertices.length;
			if(count > polygon.local_vertices.length) {
				var _g = polygon.local_vertices.length;
				var _g1 = count;
				while(_g < _g1) {
					var i = _g++;
					var polygon1 = polygon.local_vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					polygon1[i] = this1;
				}
			}
			polygon.dirty_vertices = true;
			polygon.dirty_bounds = true;
			polygon.pooled = false;
			s = polygon;
		} else {
			var x = options.offset_x;
			var y = options.offset_y;
			var sides = options.sides;
			var radius = options.radius;
			var rotation = options.rotation;
			var scale_x = options.scale_x;
			var scale_y = options.scale_y;
			if(scale_y == null) {
				scale_y = 1;
			}
			if(scale_x == null) {
				scale_x = 1;
			}
			if(rotation == null) {
				rotation = 0;
			}
			if(radius == null) {
				radius = 1;
			}
			if(sides == null) {
				sides = 3;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			if(sides < 3) {
				throw haxe_Exception.thrown("Polygons require 3 sides as a minimum");
			}
			var polygon = echo_shape_Polygon.pool.get();
			var rot = Math.PI * 2 / sides;
			var angle;
			var verts = [];
			var _g = 0;
			var _g1 = sides;
			while(_g < _g1) {
				var i = _g++;
				angle = i * rot + (Math.PI - rot) * 0.5;
				var this1 = new echo_math_Vector2Default(Math.cos(angle) * radius,Math.sin(angle) * radius);
				var vector = this1;
				verts.push(vector);
			}
			var x1 = x;
			var y1 = y;
			var rotation1 = rotation;
			var scale_x1 = scale_x;
			var scale_y1 = scale_y;
			if(scale_y1 == null) {
				scale_y1 = 1;
			}
			if(scale_x1 == null) {
				scale_x1 = 1;
			}
			if(rotation1 == null) {
				rotation1 = 0;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = x1;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = y1;
			var _this = polygon.transform;
			var v = Math.PI / 180 * rotation1;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = scale_x1;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = scale_y1;
			var count = null;
			polygon.local_vertices = verts == null ? [] : verts;
			polygon.count = count != null && count >= 0 ? count : polygon.local_vertices.length;
			if(count > polygon.local_vertices.length) {
				var _g = polygon.local_vertices.length;
				var _g1 = count;
				while(_g < _g1) {
					var i = _g++;
					var polygon1 = polygon.local_vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					polygon1[i] = this1;
				}
			}
			polygon.dirty_vertices = true;
			polygon.dirty_bounds = true;
			polygon.pooled = false;
			s = polygon;
		}
		break;
	}
	s.solid = options.solid;
	return s;
};
echo_Shape.get_defaults = function() {
	return { type : 0, radius : 1, width : 1, height : 0, sides : 3, rotation : 0, scale_x : 1, scale_y : 1, offset_x : 0, offset_y : 0, solid : true};
};
echo_Shape.prototype = {
	put: function() {
		this.transform.set_parent(null);
		this.parent = null;
		this.collided = false;
	}
	,set_parent: function(body) {
		if(this.parent == body) {
			return;
		}
		this.parent = body;
		this.transform.set_parent(body == null ? null : body.transform);
	}
	,bounds: function(aabb) {
		if(aabb == null) {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = 0;
			var height = 0;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var aabb1 = echo_util_AABB.pool.get();
			var x1 = x;
			var y1 = y;
			var width1 = width;
			var height1 = height;
			if(height1 == null) {
				height1 = 1;
			}
			if(width1 == null) {
				width1 = 1;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			width1 *= 0.5;
			height1 *= 0.5;
			aabb1.min_x = x1 - width1;
			aabb1.min_y = y1 - height1;
			aabb1.max_x = x1 + width1;
			aabb1.max_y = y1 + height1;
			aabb1.pooled = false;
			return aabb1;
		} else {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = 0;
			var height = 0;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			width *= 0.5;
			height *= 0.5;
			aabb.min_x = x - width;
			aabb.min_y = y - height;
			aabb.max_x = x + width;
			aabb.max_y = y + height;
			return aabb;
		}
	}
	,volume: function() {
		return 0;
	}
	,intersect: function(l) {
		return null;
	}
	,collides: function(s) {
		return null;
	}
	,collide_rect: function(r) {
		return null;
	}
	,collide_circle: function(c) {
		return null;
	}
	,collide_polygon: function(p) {
		return null;
	}
	,__class__: echo_Shape
};
var echo_World = function(options) {
	this.members = options.members == null ? [] : options.members;
	this.init = false;
	var value;
	if(options.width < 1) {
		throw haxe_Exception.thrown("World must have a width of at least 1");
	} else {
		value = options.width;
	}
	this.width = value;
	if(this.init) {
		this.reset_quadtrees();
	}
	var value;
	if(options.height < 1) {
		throw haxe_Exception.thrown("World must have a width of at least 1");
	} else {
		value = options.height;
	}
	this.height = value;
	if(this.init) {
		this.reset_quadtrees();
	}
	this.x = options.x == null ? 0 : options.x;
	if(this.init) {
		this.reset_quadtrees();
	}
	this.y = options.y == null ? 0 : options.y;
	if(this.init) {
		this.reset_quadtrees();
	}
	var this1 = new echo_math_Vector2Default(options.gravity_x == null ? 0 : options.gravity_x,options.gravity_y == null ? 0 : options.gravity_y);
	this.gravity = this1;
	this.reset_quadtrees();
	this.listeners = new echo_Listeners(options.listeners);
	this.iterations = options.iterations == null ? 5 : options.iterations;
	if(options.history != null) {
		this.history = new echo_util_History_$Array_$echo_$data_$BodyState(options.history);
	}
};
echo_World.__name__ = true;
echo_World.__interfaces__ = [echo_util_Disposable];
echo_World.prototype = {
	add: function(body) {
		if(body.world == this) {
			return body;
		}
		if(body.world != null) {
			if(body.world != null) {
				body.world.remove(body);
			}
			if(body.quadtree_data != null && body.quadtree_data.bounds != null) {
				body.quadtree_data.bounds.put();
			}
		}
		body.world = this;
		body.dirty = true;
		this.members.push(body);
		body.quadtree_data = new echo_data_QuadTreeData(body.id,body.bounds(),false);
		if(body.mass <= 0) {
			this.static_quadtree.insert(body.quadtree_data);
		} else {
			this.quadtree.insert(body.quadtree_data);
		}
		return body;
	}
	,remove: function(body) {
		this.quadtree.remove(body.quadtree_data);
		this.static_quadtree.remove(body.quadtree_data);
		HxOverrides.remove(this.members,body);
		body.world = null;
		return body;
	}
	,reset_quadtrees: function() {
		var _gthis = this;
		this.init = true;
		if(this.quadtree != null) {
			var _this = this.quadtree;
			if(!_this.pooled) {
				_this.pooled = true;
				var _g = 0;
				var _g1 = _this.children.length;
				while(_g < _g1) {
					var i = _g++;
					if(_this.children[i] != null) {
						_this.children[i].clear_children();
						var _this1 = _this.children[i];
						if(!_this1.pooled) {
							_this1.pooled = true;
							_this1.clear_children();
							_this1.contents.length = 0;
							_this1.contents_count = 0;
							_this1.nodes_list.length = 0;
							echo_util_QuadTree.pool.put_unsafe(_this1);
						}
						_this.children[i] = null;
					}
				}
				_this.contents.length = 0;
				_this.contents_count = 0;
				_this.nodes_list.length = 0;
				echo_util_QuadTree.pool.put_unsafe(_this);
			}
		}
		var qt = echo_util_QuadTree.pool.get();
		var x = 0;
		var y = 0;
		var width = 1;
		var height = 1;
		if(height == null) {
			height = 1;
		}
		if(width == null) {
			width = 1;
		}
		if(y == null) {
			y = 0;
		}
		if(x == null) {
			x = 0;
		}
		width *= 0.5;
		height *= 0.5;
		qt.min_x = x - width;
		qt.min_y = y - height;
		qt.max_x = x + width;
		qt.max_y = y + height;
		var _g = 0;
		var _g1 = qt.children.length;
		while(_g < _g1) {
			var i = _g++;
			if(qt.children[i] != null) {
				qt.children[i].clear_children();
				var _this = qt.children[i];
				if(!_this.pooled) {
					_this.pooled = true;
					_this.clear_children();
					_this.contents.length = 0;
					_this.contents_count = 0;
					_this.nodes_list.length = 0;
					echo_util_QuadTree.pool.put_unsafe(_this);
				}
				qt.children[i] = null;
			}
		}
		qt.contents.length = 0;
		qt.contents_count = 0;
		qt.pooled = false;
		this.quadtree = qt;
		if(this.static_quadtree != null) {
			var _this = this.static_quadtree;
			if(!_this.pooled) {
				_this.pooled = true;
				var _g = 0;
				var _g1 = _this.children.length;
				while(_g < _g1) {
					var i = _g++;
					if(_this.children[i] != null) {
						_this.children[i].clear_children();
						var _this1 = _this.children[i];
						if(!_this1.pooled) {
							_this1.pooled = true;
							_this1.clear_children();
							_this1.contents.length = 0;
							_this1.contents_count = 0;
							_this1.nodes_list.length = 0;
							echo_util_QuadTree.pool.put_unsafe(_this1);
						}
						_this.children[i] = null;
					}
				}
				_this.contents.length = 0;
				_this.contents_count = 0;
				_this.nodes_list.length = 0;
				echo_util_QuadTree.pool.put_unsafe(_this);
			}
		}
		var qt = echo_util_QuadTree.pool.get();
		var x = 0;
		var y = 0;
		var width = 1;
		var height = 1;
		if(height == null) {
			height = 1;
		}
		if(width == null) {
			width = 1;
		}
		if(y == null) {
			y = 0;
		}
		if(x == null) {
			x = 0;
		}
		width *= 0.5;
		height *= 0.5;
		qt.min_x = x - width;
		qt.min_y = y - height;
		qt.max_x = x + width;
		qt.max_y = y + height;
		var _g = 0;
		var _g1 = qt.children.length;
		while(_g < _g1) {
			var i = _g++;
			if(qt.children[i] != null) {
				qt.children[i].clear_children();
				var _this = qt.children[i];
				if(!_this.pooled) {
					_this.pooled = true;
					_this.clear_children();
					_this.contents.length = 0;
					_this.contents_count = 0;
					_this.nodes_list.length = 0;
					echo_util_QuadTree.pool.put_unsafe(_this);
				}
				qt.children[i] = null;
			}
		}
		qt.contents.length = 0;
		qt.contents_count = 0;
		qt.pooled = false;
		this.static_quadtree = qt;
		var rect = null;
		var r;
		if(rect != null) {
			var x = this.x + this.width * 0.5;
			var y = this.y + this.height * 0.5;
			var width = this.width;
			var height = this.height;
			if(height == null) {
				height = 0;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = x;
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = y;
			var value = width * 0.5;
			var _this = rect.transform;
			var value1;
			if(_this.parent == null) {
				value1 = _this.local_scale_x;
			} else {
				_this.sync();
				value1 = _this._scale_x;
			}
			rect.local_ex = value / value1;
			if(rect.transformed_rect != null) {
				var _this = rect.transformed_rect;
				_this.count = 4;
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						var _this1 = _this.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
				}
				var v = _this.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = _this.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
				_this.dirty_vertices = true;
				_this.dirty_bounds = true;
			}
			var value = (height <= 0 ? width : height) * 0.5;
			var _this = rect.transform;
			var value1;
			if(_this.parent == null) {
				value1 = _this.local_scale_y;
			} else {
				_this.sync();
				value1 = _this._scale_y;
			}
			rect.local_ey = value / value1;
			if(rect.transformed_rect != null) {
				var _this = rect.transformed_rect;
				_this.count = 4;
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						var _this1 = _this.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
				}
				var v = _this.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = _this.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
				_this.dirty_vertices = true;
				_this.dirty_bounds = true;
			}
			var _this = rect.transform;
			var v = Math.PI / 180 * 0;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = 1;
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = 1;
			var r1;
			if(rect.transformed_rect == null) {
				var _this = rect.transform;
				var r2;
				if(_this.parent == null) {
					r2 = 180 / Math.PI * _this.local_radians;
				} else {
					_this.sync();
					r2 = 180 / Math.PI * _this._radians;
				}
				r1 = r2 != 0;
			} else {
				r1 = false;
			}
			if(r1) {
				var polygon = echo_shape_Polygon.pool.get();
				polygon.count = 4;
				var _g = 0;
				var _g1 = polygon.count;
				while(_g < _g1) {
					var i = _g++;
					if(polygon.local_vertices[i] == null) {
						var polygon1 = polygon.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						polygon1[i] = this1;
					}
				}
				var v = polygon.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = polygon.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_x = v;
				var v = rect.transform.local_y;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_y = v;
				var _this = polygon.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_y = v;
				polygon.dirty_vertices = true;
				polygon.dirty_bounds = true;
				polygon.pooled = false;
				rect.transformed_rect = polygon;
				rect.transformed_rect.set_parent(rect.parent);
			} else if(rect.transformed_rect != null) {
				var v = rect.transform.local_x;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_x = v;
				var v = rect.transform.local_y;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_y = v;
				var _this = rect.transformed_rect.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_y = v;
			}
			r = rect;
		} else {
			var x = this.x + this.width * 0.5;
			var y = this.y + this.height * 0.5;
			var width = this.width;
			var height = this.height;
			if(height == null) {
				height = 0;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var rect = echo_shape_Rect.pool.get();
			var x1 = x;
			var y1 = y;
			var width1 = width;
			var height1 = height;
			var rotation = 0;
			var scale_x = 1;
			var scale_y = 1;
			if(scale_y == null) {
				scale_y = 1;
			}
			if(scale_x == null) {
				scale_x = 1;
			}
			if(rotation == null) {
				rotation = 0;
			}
			if(height1 == null) {
				height1 = 0;
			}
			if(width1 == null) {
				width1 = 1;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = x1;
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = y1;
			var value = width1 * 0.5;
			var _this = rect.transform;
			var value1;
			if(_this.parent == null) {
				value1 = _this.local_scale_x;
			} else {
				_this.sync();
				value1 = _this._scale_x;
			}
			rect.local_ex = value / value1;
			if(rect.transformed_rect != null) {
				var _this = rect.transformed_rect;
				_this.count = 4;
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						var _this1 = _this.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
				}
				var v = _this.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = _this.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
				_this.dirty_vertices = true;
				_this.dirty_bounds = true;
			}
			var value = (height1 <= 0 ? width1 : height1) * 0.5;
			var _this = rect.transform;
			var value1;
			if(_this.parent == null) {
				value1 = _this.local_scale_y;
			} else {
				_this.sync();
				value1 = _this._scale_y;
			}
			rect.local_ey = value / value1;
			if(rect.transformed_rect != null) {
				var _this = rect.transformed_rect;
				_this.count = 4;
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						var _this1 = _this.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
				}
				var v = _this.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = _this.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = _this.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_x = v;
				var v = rect.transform.local_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_y = v;
				var _this1 = _this.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this1 = _this.transform;
				if(!_this1.dirty) {
					_this1.set_dirty();
				}
				_this1.local_scale_y = v;
				_this.dirty_vertices = true;
				_this.dirty_bounds = true;
			}
			var _this = rect.transform;
			var v = Math.PI / 180 * rotation;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = scale_x;
			var _this = rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = scale_y;
			var r1;
			if(rect.transformed_rect == null) {
				var _this = rect.transform;
				var r2;
				if(_this.parent == null) {
					r2 = 180 / Math.PI * _this.local_radians;
				} else {
					_this.sync();
					r2 = 180 / Math.PI * _this._radians;
				}
				r1 = r2 != 0;
			} else {
				r1 = false;
			}
			if(r1) {
				var polygon = echo_shape_Polygon.pool.get();
				polygon.count = 4;
				var _g = 0;
				var _g1 = polygon.count;
				while(_g < _g1) {
					var i = _g++;
					if(polygon.local_vertices[i] == null) {
						var polygon1 = polygon.local_vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						polygon1[i] = this1;
					}
				}
				var v = polygon.local_vertices[0];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[1];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = -(rect.local_ey * rect.transform.local_scale_y);
				var v = polygon.local_vertices[2];
				v.x = rect.local_ex * rect.transform.local_scale_x;
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = polygon.local_vertices[3];
				v.x = -(rect.local_ex * rect.transform.local_scale_x);
				v.y = rect.local_ey * rect.transform.local_scale_y;
				var v = rect.transform.local_x;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_x = v;
				var v = rect.transform.local_y;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_y = v;
				var _this = polygon.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this = polygon.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_y = v;
				polygon.dirty_vertices = true;
				polygon.dirty_bounds = true;
				polygon.pooled = false;
				rect.transformed_rect = polygon;
				rect.transformed_rect.set_parent(rect.parent);
			} else if(rect.transformed_rect != null) {
				var v = rect.transform.local_x;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_x = v;
				var v = rect.transform.local_y;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_y = v;
				var _this = rect.transformed_rect.transform;
				var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_radians = v;
				var v = rect.transform.local_scale_x;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_x = v;
				var v = rect.transform.local_scale_y;
				var _this = rect.transformed_rect.transform;
				if(!_this.dirty) {
					_this.set_dirty();
				}
				_this.local_scale_y = v;
			}
			rect.pooled = false;
			r = rect;
		}
		var r1 = r.to_aabb(true);
		var _this = this.quadtree;
		_this.min_x = r1.min_x;
		_this.max_x = r1.max_x;
		_this.min_y = r1.min_y;
		_this.max_y = r1.max_y;
		var _this = this.static_quadtree;
		_this.min_x = r1.min_x;
		_this.max_x = r1.max_x;
		_this.min_y = r1.min_y;
		_this.max_y = r1.max_y;
		var _g = 0;
		var _g1 = this.members;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			if(b.mass > 0) {
				b.dirty = true;
			} else {
				b.bounds(b.quadtree_data.bounds);
				_gthis.static_quadtree.update(b.quadtree_data);
			}
		}
	}
	,__class__: echo_World
};
var echo_data_BodyState = function(id,x,y,rotation,velocity_x,velocity_y,acceleration_x,acceleration_y,rotational_velocity) {
	this.id = id;
	this.x = x;
	this.y = y;
	this.rotation = rotation;
	this.velocity_x = velocity_x;
	this.velocity_y = velocity_y;
	this.acceleration_x = acceleration_x;
	this.acceleration_y = acceleration_y;
	this.rotational_velocity = rotational_velocity;
};
echo_data_BodyState.__name__ = true;
echo_data_BodyState.prototype = {
	__class__: echo_data_BodyState
};
var echo_util_GenericPool_$echo_$data_$Collision = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$data_$Collision.__name__ = true;
echo_util_GenericPool_$echo_$data_$Collision.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$data_$Collision.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$data_$Collision
};
var echo_data_Collision = function() {
	this.pooled = false;
	this.data = [];
};
echo_data_Collision.__name__ = true;
echo_data_Collision.__interfaces__ = [echo_util_Poolable];
echo_data_Collision.prototype = {
	put: function() {
		if(!this.pooled) {
			var _g = 0;
			var _g1 = this.data;
			while(_g < _g1.length) {
				var d = _g1[_g];
				++_g;
				d.put();
			}
			this.pooled = true;
			echo_data_Collision.pool.put_unsafe(this);
		}
	}
	,__class__: echo_data_Collision
};
var echo_util_GenericPool_$echo_$data_$CollisionData = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$data_$CollisionData.__name__ = true;
echo_util_GenericPool_$echo_$data_$CollisionData.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$data_$CollisionData.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$data_$CollisionData
};
var echo_data_CollisionData = function() {
	this.pooled = false;
	var this1 = new echo_math_Vector2Default(0.0,0.0);
	this.normal = this1;
	var this1 = new echo_math_Vector2Default(0.0,0.0);
	var this11 = new echo_math_Vector2Default(0.0,0.0);
	this.contacts = [this1,this11].slice(0);
	this.contact_count = 0;
	this.overlap = 0.;
};
echo_data_CollisionData.__name__ = true;
echo_data_CollisionData.__interfaces__ = [echo_util_Poolable];
echo_data_CollisionData.prototype = {
	put: function() {
		if(!this.pooled) {
			this.pooled = true;
			echo_data_CollisionData.pool.put_unsafe(this);
		}
	}
	,__class__: echo_data_CollisionData
};
var echo_util_GenericPool_$echo_$data_$Intersection = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$data_$Intersection.__name__ = true;
echo_util_GenericPool_$echo_$data_$Intersection.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$data_$Intersection.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$data_$Intersection
};
var echo_data_Intersection = function() {
	this.pooled = false;
	this.data = [];
};
echo_data_Intersection.__name__ = true;
echo_data_Intersection.__interfaces__ = [echo_util_Poolable];
echo_data_Intersection.prototype = {
	put: function() {
		if(!this.pooled) {
			var _g = 0;
			var _g1 = this.data;
			while(_g < _g1.length) {
				var d = _g1[_g];
				++_g;
				d.put();
			}
			this.pooled = true;
			echo_data_Intersection.pool.put_unsafe(this);
		}
	}
	,__class__: echo_data_Intersection
};
var echo_util_GenericPool_$echo_$data_$IntersectionData = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$data_$IntersectionData.__name__ = true;
echo_util_GenericPool_$echo_$data_$IntersectionData.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$data_$IntersectionData.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$data_$IntersectionData
};
var echo_data_IntersectionData = function() {
	this.pooled = false;
	this.inverse_normal = false;
	var this1 = new echo_math_Vector2Default(0.0,0.0);
	this.normal = this1;
	this.overlap = 0.;
	this.distance = 0.;
	var this1 = new echo_math_Vector2Default(0.0,0.0);
	this.hit = this1;
	var this1 = new echo_math_Vector2Default(0,0);
	this.hit = this1;
	var this1 = new echo_math_Vector2Default(0,0);
	this.normal = this1;
};
echo_data_IntersectionData.__name__ = true;
echo_data_IntersectionData.__interfaces__ = [echo_util_Poolable];
echo_data_IntersectionData.prototype = {
	put: function() {
		if(!this.pooled) {
			this.pooled = true;
			echo_data_IntersectionData.pool.put_unsafe(this);
		}
	}
	,__class__: echo_data_IntersectionData
};
var echo_data_QuadTreeData = function(id,bounds,flag) {
	this.flag = false;
	this.bounds = null;
	this.id = id;
	if(bounds != null) {
		this.bounds = bounds;
	}
	if(flag != null) {
		this.flag = flag;
	}
};
echo_data_QuadTreeData.__name__ = true;
echo_data_QuadTreeData.prototype = {
	__class__: echo_data_QuadTreeData
};
var echo_math_Matrix3Default = function(m00,m10,m20,m01,m11,m21,m02,m12,m22) {
	this.m00 = m00;
	this.m10 = m10;
	this.m20 = m20;
	this.m01 = m01;
	this.m11 = m11;
	this.m21 = m21;
	this.m02 = m02;
	this.m12 = m12;
	this.m22 = m22;
};
echo_math_Matrix3Default.__name__ = true;
echo_math_Matrix3Default.prototype = {
	__class__: echo_math_Matrix3Default
};
var echo_math_Vector2Default = function(x,y) {
	this.x = x;
	this.y = y;
};
echo_math_Vector2Default.__name__ = true;
echo_math_Vector2Default.prototype = {
	__class__: echo_math_Vector2Default
};
var echo_util_GenericPool_$echo_$shape_$Circle = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$shape_$Circle.__name__ = true;
echo_util_GenericPool_$echo_$shape_$Circle.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$shape_$Circle.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$shape_$Circle
};
var echo_shape_Circle = function() {
	this.pooled = false;
	echo_Shape.call(this);
	this.type = 1;
	var _this = this.transform;
	var tmp;
	if(_this.parent == null) {
		tmp = _this.local_scale_x;
	} else {
		_this.sync();
		tmp = _this._scale_x;
	}
	this.local_radius = 0 / tmp;
};
echo_shape_Circle.__name__ = true;
echo_shape_Circle.__interfaces__ = [echo_util_Poolable];
echo_shape_Circle.get = function(x,y,radius,rotation,scale_x,scale_y) {
	if(scale_y == null) {
		scale_y = 1;
	}
	if(scale_x == null) {
		scale_x = 1;
	}
	if(rotation == null) {
		rotation = 0;
	}
	if(radius == null) {
		radius = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var circle = echo_shape_Circle.pool.get();
	var x1 = x;
	var y1 = y;
	var radius1 = radius;
	var rotation1 = rotation;
	var scale_x1 = scale_x;
	var scale_y1 = scale_y;
	if(scale_y1 == null) {
		scale_y1 = 1;
	}
	if(scale_x1 == null) {
		scale_x1 = 1;
	}
	if(rotation1 == null) {
		rotation1 = 0;
	}
	if(radius1 == null) {
		radius1 = 1;
	}
	if(y1 == null) {
		y1 = 0;
	}
	if(x1 == null) {
		x1 = 0;
	}
	var _this = circle.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_x = x1;
	var _this = circle.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_y = y1;
	var _this = circle.transform;
	var v = Math.PI / 180 * rotation1;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_radians = v;
	var _this = circle.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_scale_x = scale_x1;
	var _this = circle.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_scale_y = scale_y1;
	var _this = circle.transform;
	var tmp;
	if(_this.parent == null) {
		tmp = _this.local_scale_x;
	} else {
		_this.sync();
		tmp = _this._scale_x;
	}
	circle.local_radius = radius1 / tmp;
	circle.pooled = false;
	return circle;
};
echo_shape_Circle.__super__ = echo_Shape;
echo_shape_Circle.prototype = $extend(echo_Shape.prototype,{
	put: function() {
		echo_Shape.prototype.put.call(this);
		if(!this.pooled) {
			this.pooled = true;
			echo_shape_Circle.pool.put_unsafe(this);
		}
	}
	,bounds: function(aabb) {
		var d = this.local_radius;
		var _this = this.transform;
		var d1;
		if(_this.parent == null) {
			d1 = _this.local_scale_x;
		} else {
			_this.sync();
			d1 = _this._scale_x;
		}
		var d2 = d * d1 * 2;
		if(aabb == null) {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = d2;
			var height = d2;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var aabb1 = echo_util_AABB.pool.get();
			var x1 = x;
			var y1 = y;
			var width1 = width;
			var height1 = height;
			if(height1 == null) {
				height1 = 1;
			}
			if(width1 == null) {
				width1 = 1;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			width1 *= 0.5;
			height1 *= 0.5;
			aabb1.min_x = x1 - width1;
			aabb1.min_y = y1 - height1;
			aabb1.max_x = x1 + width1;
			aabb1.max_y = y1 + height1;
			aabb1.pooled = false;
			return aabb1;
		} else {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = d2;
			var height = d2;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			width *= 0.5;
			height *= 0.5;
			aabb.min_x = x - width;
			aabb.min_y = y - height;
			aabb.max_x = x + width;
			aabb.max_y = y + height;
			return aabb;
		}
	}
	,volume: function() {
		var r = this.local_radius;
		var _this = this.transform;
		var r1;
		if(_this.parent == null) {
			r1 = _this.local_scale_x;
		} else {
			_this.sync();
			r1 = _this._scale_x;
		}
		var r2 = r * r1;
		return Math.PI * r2 * r2;
	}
	,intersect: function(l) {
		return echo_util_SAT.line_intersects_circle(l,this);
	}
	,collides: function(s) {
		return s.collide_circle(this);
	}
	,collide_rect: function(r) {
		return echo_util_SAT.rect_and_circle(r,this,true);
	}
	,collide_circle: function(c) {
		return echo_util_SAT.circle_and_circle(c,this);
	}
	,collide_polygon: function(p) {
		return echo_util_SAT.circle_and_polygon(this,p,true);
	}
	,__class__: echo_shape_Circle
});
var echo_util_GenericPool_$echo_$shape_$Polygon = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$shape_$Polygon.__name__ = true;
echo_util_GenericPool_$echo_$shape_$Polygon.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$shape_$Polygon.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$shape_$Polygon
};
var echo_shape_Polygon = function(vertices) {
	this.pooled = false;
	echo_Shape.call(this);
	this.type = 2;
	this._vertices = [];
	this._normals = [];
	var aabb = echo_util_AABB.pool.get();
	var x = 0;
	var y = 0;
	var width = 1;
	var height = 1;
	if(height == null) {
		height = 1;
	}
	if(width == null) {
		width = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	width *= 0.5;
	height *= 0.5;
	aabb.min_x = x - width;
	aabb.min_y = y - height;
	aabb.max_x = x + width;
	aabb.max_y = y + height;
	aabb.pooled = false;
	this._bounds = aabb;
	this.transform.on_dirty = $bind(this,this.on_dirty);
	var count = null;
	this.local_vertices = vertices == null ? [] : vertices;
	this.count = count != null && count >= 0 ? count : this.local_vertices.length;
	if(count > this.local_vertices.length) {
		var _g = this.local_vertices.length;
		var _g1 = count;
		while(_g < _g1) {
			var i = _g++;
			var tmp = this.local_vertices;
			var this1 = new echo_math_Vector2Default(0,0);
			tmp[i] = this1;
		}
	}
	this.dirty_vertices = true;
	this.dirty_bounds = true;
};
echo_shape_Polygon.__name__ = true;
echo_shape_Polygon.__interfaces__ = [echo_util_Poolable];
echo_shape_Polygon.get = function(x,y,sides,radius,rotation,scale_x,scale_y) {
	if(scale_y == null) {
		scale_y = 1;
	}
	if(scale_x == null) {
		scale_x = 1;
	}
	if(rotation == null) {
		rotation = 0;
	}
	if(radius == null) {
		radius = 1;
	}
	if(sides == null) {
		sides = 3;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	if(sides < 3) {
		throw haxe_Exception.thrown("Polygons require 3 sides as a minimum");
	}
	var polygon = echo_shape_Polygon.pool.get();
	var rot = Math.PI * 2 / sides;
	var angle;
	var verts = [];
	var _g = 0;
	var _g1 = sides;
	while(_g < _g1) {
		var i = _g++;
		angle = i * rot + (Math.PI - rot) * 0.5;
		var this1 = new echo_math_Vector2Default(Math.cos(angle) * radius,Math.sin(angle) * radius);
		var vector = this1;
		verts.push(vector);
	}
	var x1 = x;
	var y1 = y;
	var rotation1 = rotation;
	var scale_x1 = scale_x;
	var scale_y1 = scale_y;
	if(scale_y1 == null) {
		scale_y1 = 1;
	}
	if(scale_x1 == null) {
		scale_x1 = 1;
	}
	if(rotation1 == null) {
		rotation1 = 0;
	}
	if(y1 == null) {
		y1 = 0;
	}
	if(x1 == null) {
		x1 = 0;
	}
	var _this = polygon.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_x = x1;
	var _this = polygon.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_y = y1;
	var _this = polygon.transform;
	var v = Math.PI / 180 * rotation1;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_radians = v;
	var _this = polygon.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_scale_x = scale_x1;
	var _this = polygon.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_scale_y = scale_y1;
	var count = null;
	polygon.local_vertices = verts == null ? [] : verts;
	polygon.count = count != null && count >= 0 ? count : polygon.local_vertices.length;
	if(count > polygon.local_vertices.length) {
		var _g = polygon.local_vertices.length;
		var _g1 = count;
		while(_g < _g1) {
			var i = _g++;
			var polygon1 = polygon.local_vertices;
			var this1 = new echo_math_Vector2Default(0,0);
			polygon1[i] = this1;
		}
	}
	polygon.dirty_vertices = true;
	polygon.dirty_bounds = true;
	polygon.pooled = false;
	return polygon;
};
echo_shape_Polygon.__super__ = echo_Shape;
echo_shape_Polygon.prototype = $extend(echo_Shape.prototype,{
	put: function() {
		echo_Shape.prototype.put.call(this);
		if(!this.pooled) {
			this.pooled = true;
			echo_shape_Polygon.pool.put_unsafe(this);
		}
	}
	,bounds: function(aabb) {
		if(this.dirty_bounds) {
			this.dirty_bounds = false;
			if(this.dirty_vertices) {
				this.dirty_vertices = false;
				while(this._vertices.length > this.count) this._vertices.pop();
				var _g = 0;
				var _g1 = this.count;
				while(_g < _g1) {
					var i = _g++;
					if(this.local_vertices[i] == null) {
						continue;
					}
					if(this._vertices[i] == null) {
						var tmp = this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						tmp[i] = this1;
					}
					var x = this.local_vertices[i].x;
					var y = this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = this._vertices[(i + 1) % this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(this._normals[i] == null) {
						var tmp = this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						tmp[i] = this1;
					} else {
						var a = this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			var verts = this._vertices;
			var left = verts[0].x;
			var top = verts[0].y;
			var right = verts[0].x;
			var bottom = verts[0].y;
			var _g = 1;
			var _g1 = this.count;
			while(_g < _g1) {
				var i = _g++;
				if(verts[i].x < left) {
					left = verts[i].x;
				}
				if(verts[i].y < top) {
					top = verts[i].y;
				}
				if(verts[i].x > right) {
					right = verts[i].x;
				}
				if(verts[i].y > bottom) {
					bottom = verts[i].y;
				}
			}
			var _this = this._bounds;
			_this.min_x = left;
			_this.max_x = right;
			_this.min_y = top;
			_this.max_y = bottom;
		}
		if(aabb == null) {
			var _this = this._bounds;
			var min_x = _this.min_x;
			var min_y = _this.min_y;
			var max_x = _this.max_x;
			var max_y = _this.max_y;
			var aabb1 = echo_util_AABB.pool.get();
			aabb1.min_x = min_x;
			aabb1.max_x = max_x;
			aabb1.min_y = min_y;
			aabb1.max_y = max_y;
			aabb1.pooled = false;
			return aabb1;
		} else {
			var aabb1 = this._bounds;
			aabb.min_x = aabb1.min_x;
			aabb.max_x = aabb1.max_x;
			aabb.min_y = aabb1.min_y;
			aabb.max_y = aabb1.max_y;
			return aabb;
		}
	}
	,volume: function() {
		var sum = 0.;
		if(this.dirty_vertices) {
			this.dirty_vertices = false;
			while(this._vertices.length > this.count) this._vertices.pop();
			var _g = 0;
			var _g1 = this.count;
			while(_g < _g1) {
				var i = _g++;
				if(this.local_vertices[i] == null) {
					continue;
				}
				if(this._vertices[i] == null) {
					var tmp = this._vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					tmp[i] = this1;
				}
				var x = this.local_vertices[i].x;
				var y = this.local_vertices[i].y;
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				var a = this.transform.get_local_to_world_matrix();
				var v_x = x;
				var v_y = y;
				var v_z = 1;
				var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
				var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
				var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
				var pos_x = result_x;
				var pos_y = result_y;
				var v = this._vertices[i];
				v.x = pos_x;
				v.y = pos_y;
			}
			var _g = 0;
			var _g1 = this.count;
			while(_g < _g1) {
				var i = _g++;
				var v = this._vertices[(i + 1) % this.count];
				var v_x = v.x;
				var v_y = v.y;
				var b = this._vertices[i];
				var b_x = v_x - b.x;
				var b_y = v_y - b.y;
				v_x = b_x;
				v_y = b_y;
				var x = -v_y;
				v_y = v_x;
				v_x = x;
				if(this._normals[i] == null) {
					var tmp = this._normals;
					var this1 = new echo_math_Vector2Default(v_x,v_y);
					tmp[i] = this1;
				} else {
					var a = this._normals[i];
					a.x = v_x;
					a.y = v_y;
				}
				var v1 = this._normals[i];
				var self = v1;
				var self1 = v1;
				var self2 = self1;
				var len_sq = self2.x * self2.x + self2.y * self2.y;
				var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
				var a_x = self1.x / denominator;
				var a_y = self1.y / denominator;
				var b_x1 = a_x;
				var b_y1 = a_y;
				self.x = b_x1;
				self.y = b_y1;
			}
		}
		var verts = this._vertices;
		var v = verts[verts.length - 1];
		var _g = 0;
		var _g1 = this.count;
		while(_g < _g1) {
			var i = _g++;
			var vi = verts[i];
			sum += vi.x * v.y - v.x * vi.y;
			v = vi;
		}
		return Math.abs(sum) * 0.5;
	}
	,intersect: function(l) {
		return echo_util_SAT.line_intersects_polygon(l,this);
	}
	,collides: function(s) {
		return s.collide_polygon(this);
	}
	,collide_rect: function(r) {
		return echo_util_SAT.rect_and_polygon(r,this,true);
	}
	,collide_circle: function(c) {
		return echo_util_SAT.circle_and_polygon(c,this);
	}
	,collide_polygon: function(p) {
		return echo_util_SAT.polygon_and_polygon(p,this,true);
	}
	,on_dirty: function(t) {
		this.dirty_vertices = true;
		this.dirty_bounds = true;
	}
	,__class__: echo_shape_Polygon
});
var echo_util_GenericPool_$echo_$shape_$Rect = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$shape_$Rect.__name__ = true;
echo_util_GenericPool_$echo_$shape_$Rect.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$shape_$Rect.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$shape_$Rect
};
var echo_shape_Rect = function() {
	this.pooled = false;
	echo_Shape.call(this);
	this.local_ex = 0;
	if(this.transformed_rect != null) {
		var _this = this.transformed_rect;
		_this.count = 4;
		var _g = 0;
		var _g1 = _this.count;
		while(_g < _g1) {
			var i = _g++;
			if(_this.local_vertices[i] == null) {
				var _this1 = _this.local_vertices;
				var this1 = new echo_math_Vector2Default(0,0);
				_this1[i] = this1;
			}
		}
		var v = _this.local_vertices[0];
		v.x = -(this.local_ex * this.transform.local_scale_x);
		v.y = -(this.local_ey * this.transform.local_scale_y);
		var v = _this.local_vertices[1];
		v.x = this.local_ex * this.transform.local_scale_x;
		v.y = -(this.local_ey * this.transform.local_scale_y);
		var v = _this.local_vertices[2];
		v.x = this.local_ex * this.transform.local_scale_x;
		v.y = this.local_ey * this.transform.local_scale_y;
		var v = _this.local_vertices[3];
		v.x = -(this.local_ex * this.transform.local_scale_x);
		v.y = this.local_ey * this.transform.local_scale_y;
		var v = this.transform.local_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_x = v;
		var v = this.transform.local_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_y = v;
		var _this1 = _this.transform;
		var v = Math.PI / 180 * (180 / Math.PI * this.transform.local_radians);
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_radians = v;
		var v = this.transform.local_scale_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_x = v;
		var v = this.transform.local_scale_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_y = v;
		_this.dirty_vertices = true;
		_this.dirty_bounds = true;
	}
	this.local_ey = 0;
	if(this.transformed_rect != null) {
		var _this = this.transformed_rect;
		_this.count = 4;
		var _g = 0;
		var _g1 = _this.count;
		while(_g < _g1) {
			var i = _g++;
			if(_this.local_vertices[i] == null) {
				var _this1 = _this.local_vertices;
				var this1 = new echo_math_Vector2Default(0,0);
				_this1[i] = this1;
			}
		}
		var v = _this.local_vertices[0];
		v.x = -(this.local_ex * this.transform.local_scale_x);
		v.y = -(this.local_ey * this.transform.local_scale_y);
		var v = _this.local_vertices[1];
		v.x = this.local_ex * this.transform.local_scale_x;
		v.y = -(this.local_ey * this.transform.local_scale_y);
		var v = _this.local_vertices[2];
		v.x = this.local_ex * this.transform.local_scale_x;
		v.y = this.local_ey * this.transform.local_scale_y;
		var v = _this.local_vertices[3];
		v.x = -(this.local_ex * this.transform.local_scale_x);
		v.y = this.local_ey * this.transform.local_scale_y;
		var v = this.transform.local_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_x = v;
		var v = this.transform.local_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_y = v;
		var _this1 = _this.transform;
		var v = Math.PI / 180 * (180 / Math.PI * this.transform.local_radians);
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_radians = v;
		var v = this.transform.local_scale_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_x = v;
		var v = this.transform.local_scale_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_y = v;
		_this.dirty_vertices = true;
		_this.dirty_bounds = true;
	}
	this.type = 0;
	this.transform.on_dirty = $bind(this,this.on_dirty);
};
echo_shape_Rect.__name__ = true;
echo_shape_Rect.__interfaces__ = [echo_util_Poolable];
echo_shape_Rect.get = function(x,y,width,height,rotation,scale_x,scale_y) {
	if(scale_y == null) {
		scale_y = 1;
	}
	if(scale_x == null) {
		scale_x = 1;
	}
	if(rotation == null) {
		rotation = 0;
	}
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var rect = echo_shape_Rect.pool.get();
	var x1 = x;
	var y1 = y;
	var width1 = width;
	var height1 = height;
	var rotation1 = rotation;
	var scale_x1 = scale_x;
	var scale_y1 = scale_y;
	if(scale_y1 == null) {
		scale_y1 = 1;
	}
	if(scale_x1 == null) {
		scale_x1 = 1;
	}
	if(rotation1 == null) {
		rotation1 = 0;
	}
	if(height1 == null) {
		height1 = 0;
	}
	if(width1 == null) {
		width1 = 1;
	}
	if(y1 == null) {
		y1 = 0;
	}
	if(x1 == null) {
		x1 = 0;
	}
	var _this = rect.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_x = x1;
	var _this = rect.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_y = y1;
	var value = width1 * 0.5;
	var _this = rect.transform;
	var value1;
	if(_this.parent == null) {
		value1 = _this.local_scale_x;
	} else {
		_this.sync();
		value1 = _this._scale_x;
	}
	rect.local_ex = value / value1;
	if(rect.transformed_rect != null) {
		var _this = rect.transformed_rect;
		_this.count = 4;
		var _g = 0;
		var _g1 = _this.count;
		while(_g < _g1) {
			var i = _g++;
			if(_this.local_vertices[i] == null) {
				var _this1 = _this.local_vertices;
				var this1 = new echo_math_Vector2Default(0,0);
				_this1[i] = this1;
			}
		}
		var v = _this.local_vertices[0];
		v.x = -(rect.local_ex * rect.transform.local_scale_x);
		v.y = -(rect.local_ey * rect.transform.local_scale_y);
		var v = _this.local_vertices[1];
		v.x = rect.local_ex * rect.transform.local_scale_x;
		v.y = -(rect.local_ey * rect.transform.local_scale_y);
		var v = _this.local_vertices[2];
		v.x = rect.local_ex * rect.transform.local_scale_x;
		v.y = rect.local_ey * rect.transform.local_scale_y;
		var v = _this.local_vertices[3];
		v.x = -(rect.local_ex * rect.transform.local_scale_x);
		v.y = rect.local_ey * rect.transform.local_scale_y;
		var v = rect.transform.local_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_x = v;
		var v = rect.transform.local_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_y = v;
		var _this1 = _this.transform;
		var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_radians = v;
		var v = rect.transform.local_scale_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_x = v;
		var v = rect.transform.local_scale_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_y = v;
		_this.dirty_vertices = true;
		_this.dirty_bounds = true;
	}
	var value = (height1 <= 0 ? width1 : height1) * 0.5;
	var _this = rect.transform;
	var value1;
	if(_this.parent == null) {
		value1 = _this.local_scale_y;
	} else {
		_this.sync();
		value1 = _this._scale_y;
	}
	rect.local_ey = value / value1;
	if(rect.transformed_rect != null) {
		var _this = rect.transformed_rect;
		_this.count = 4;
		var _g = 0;
		var _g1 = _this.count;
		while(_g < _g1) {
			var i = _g++;
			if(_this.local_vertices[i] == null) {
				var _this1 = _this.local_vertices;
				var this1 = new echo_math_Vector2Default(0,0);
				_this1[i] = this1;
			}
		}
		var v = _this.local_vertices[0];
		v.x = -(rect.local_ex * rect.transform.local_scale_x);
		v.y = -(rect.local_ey * rect.transform.local_scale_y);
		var v = _this.local_vertices[1];
		v.x = rect.local_ex * rect.transform.local_scale_x;
		v.y = -(rect.local_ey * rect.transform.local_scale_y);
		var v = _this.local_vertices[2];
		v.x = rect.local_ex * rect.transform.local_scale_x;
		v.y = rect.local_ey * rect.transform.local_scale_y;
		var v = _this.local_vertices[3];
		v.x = -(rect.local_ex * rect.transform.local_scale_x);
		v.y = rect.local_ey * rect.transform.local_scale_y;
		var v = rect.transform.local_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_x = v;
		var v = rect.transform.local_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_y = v;
		var _this1 = _this.transform;
		var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_radians = v;
		var v = rect.transform.local_scale_x;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_x = v;
		var v = rect.transform.local_scale_y;
		var _this1 = _this.transform;
		if(!_this1.dirty) {
			_this1.set_dirty();
		}
		_this1.local_scale_y = v;
		_this.dirty_vertices = true;
		_this.dirty_bounds = true;
	}
	var _this = rect.transform;
	var v = Math.PI / 180 * rotation1;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_radians = v;
	var _this = rect.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_scale_x = scale_x1;
	var _this = rect.transform;
	if(!_this.dirty) {
		_this.set_dirty();
	}
	_this.local_scale_y = scale_y1;
	var tmp;
	if(rect.transformed_rect == null) {
		var _this = rect.transform;
		var tmp1;
		if(_this.parent == null) {
			tmp1 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			tmp1 = 180 / Math.PI * _this._radians;
		}
		tmp = tmp1 != 0;
	} else {
		tmp = false;
	}
	if(tmp) {
		var polygon = echo_shape_Polygon.pool.get();
		polygon.count = 4;
		var _g = 0;
		var _g1 = polygon.count;
		while(_g < _g1) {
			var i = _g++;
			if(polygon.local_vertices[i] == null) {
				var polygon1 = polygon.local_vertices;
				var this1 = new echo_math_Vector2Default(0,0);
				polygon1[i] = this1;
			}
		}
		var v = polygon.local_vertices[0];
		v.x = -(rect.local_ex * rect.transform.local_scale_x);
		v.y = -(rect.local_ey * rect.transform.local_scale_y);
		var v = polygon.local_vertices[1];
		v.x = rect.local_ex * rect.transform.local_scale_x;
		v.y = -(rect.local_ey * rect.transform.local_scale_y);
		var v = polygon.local_vertices[2];
		v.x = rect.local_ex * rect.transform.local_scale_x;
		v.y = rect.local_ey * rect.transform.local_scale_y;
		var v = polygon.local_vertices[3];
		v.x = -(rect.local_ex * rect.transform.local_scale_x);
		v.y = rect.local_ey * rect.transform.local_scale_y;
		var v = rect.transform.local_x;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_x = v;
		var v = rect.transform.local_y;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_y = v;
		var _this = polygon.transform;
		var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_radians = v;
		var v = rect.transform.local_scale_x;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_x = v;
		var v = rect.transform.local_scale_y;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_y = v;
		polygon.dirty_vertices = true;
		polygon.dirty_bounds = true;
		polygon.pooled = false;
		rect.transformed_rect = polygon;
		rect.transformed_rect.set_parent(rect.parent);
	} else if(rect.transformed_rect != null) {
		var v = rect.transform.local_x;
		var _this = rect.transformed_rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_x = v;
		var v = rect.transform.local_y;
		var _this = rect.transformed_rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_y = v;
		var _this = rect.transformed_rect.transform;
		var v = Math.PI / 180 * (180 / Math.PI * rect.transform.local_radians);
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_radians = v;
		var v = rect.transform.local_scale_x;
		var _this = rect.transformed_rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_x = v;
		var v = rect.transform.local_scale_y;
		var _this = rect.transformed_rect.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_y = v;
	}
	rect.pooled = false;
	return rect;
};
echo_shape_Rect.__super__ = echo_Shape;
echo_shape_Rect.prototype = $extend(echo_Shape.prototype,{
	put: function() {
		echo_Shape.prototype.put.call(this);
		if(this.transformed_rect != null) {
			this.transformed_rect.put();
			this.transformed_rect = null;
		}
		if(!this.pooled) {
			this.pooled = true;
			echo_shape_Rect.pool.put_unsafe(this);
		}
	}
	,to_aabb: function(put_self) {
		if(put_self == null) {
			put_self = false;
		}
		if(put_self) {
			var aabb = null;
			var aabb1;
			var aabb2;
			if(this.transformed_rect != null) {
				var _this = this.transform;
				var aabb3;
				if(_this.parent == null) {
					aabb3 = 180 / Math.PI * _this.local_radians;
				} else {
					_this.sync();
					aabb3 = 180 / Math.PI * _this._radians;
				}
				aabb2 = aabb3 != 0;
			} else {
				aabb2 = false;
			}
			if(aabb2) {
				aabb1 = this.transformed_rect.bounds(aabb);
			} else if(aabb == null) {
				var _this = this.transform;
				var x;
				if(_this.parent == null) {
					x = _this.local_x;
				} else {
					_this.sync();
					x = _this._x;
				}
				var _this = this.transform;
				var y;
				if(_this.parent == null) {
					y = _this.local_y;
				} else {
					_this.sync();
					y = _this._y;
				}
				var width = this.local_ex * 2;
				var _this = this.transform;
				var width1;
				if(_this.parent == null) {
					width1 = _this.local_scale_x;
				} else {
					_this.sync();
					width1 = _this._scale_x;
				}
				var width2 = width * width1;
				var height = this.local_ey * 2;
				var _this = this.transform;
				var height1;
				if(_this.parent == null) {
					height1 = _this.local_scale_y;
				} else {
					_this.sync();
					height1 = _this._scale_y;
				}
				var height2 = height * height1;
				if(height2 == null) {
					height2 = 1;
				}
				if(width2 == null) {
					width2 = 1;
				}
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				var aabb2 = echo_util_AABB.pool.get();
				var x1 = x;
				var y1 = y;
				var width = width2;
				var height = height2;
				if(height == null) {
					height = 1;
				}
				if(width == null) {
					width = 1;
				}
				if(y1 == null) {
					y1 = 0;
				}
				if(x1 == null) {
					x1 = 0;
				}
				width *= 0.5;
				height *= 0.5;
				aabb2.min_x = x1 - width;
				aabb2.min_y = y1 - height;
				aabb2.max_x = x1 + width;
				aabb2.max_y = y1 + height;
				aabb2.pooled = false;
				aabb1 = aabb2;
			} else {
				var _this = this.transform;
				var x;
				if(_this.parent == null) {
					x = _this.local_x;
				} else {
					_this.sync();
					x = _this._x;
				}
				var _this = this.transform;
				var y;
				if(_this.parent == null) {
					y = _this.local_y;
				} else {
					_this.sync();
					y = _this._y;
				}
				var width = this.local_ex * 2;
				var _this = this.transform;
				var width1;
				if(_this.parent == null) {
					width1 = _this.local_scale_x;
				} else {
					_this.sync();
					width1 = _this._scale_x;
				}
				var width2 = width * width1;
				var height = this.local_ey * 2;
				var _this = this.transform;
				var height1;
				if(_this.parent == null) {
					height1 = _this.local_scale_y;
				} else {
					_this.sync();
					height1 = _this._scale_y;
				}
				var height2 = height * height1;
				if(height2 == null) {
					height2 = 1;
				}
				if(width2 == null) {
					width2 = 1;
				}
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				width2 *= 0.5;
				height2 *= 0.5;
				aabb.min_x = x - width2;
				aabb.min_y = y - height2;
				aabb.max_x = x + width2;
				aabb.max_y = y + height2;
				aabb1 = aabb;
			}
			this.put();
			return aabb1;
		}
		var aabb = null;
		var tmp;
		if(this.transformed_rect != null) {
			var _this = this.transform;
			var tmp1;
			if(_this.parent == null) {
				tmp1 = 180 / Math.PI * _this.local_radians;
			} else {
				_this.sync();
				tmp1 = 180 / Math.PI * _this._radians;
			}
			tmp = tmp1 != 0;
		} else {
			tmp = false;
		}
		if(tmp) {
			return this.transformed_rect.bounds(aabb);
		} else if(aabb == null) {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = this.local_ex * 2;
			var _this = this.transform;
			var width1;
			if(_this.parent == null) {
				width1 = _this.local_scale_x;
			} else {
				_this.sync();
				width1 = _this._scale_x;
			}
			var width2 = width * width1;
			var height = this.local_ey * 2;
			var _this = this.transform;
			var height1;
			if(_this.parent == null) {
				height1 = _this.local_scale_y;
			} else {
				_this.sync();
				height1 = _this._scale_y;
			}
			var height2 = height * height1;
			if(height2 == null) {
				height2 = 1;
			}
			if(width2 == null) {
				width2 = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var aabb1 = echo_util_AABB.pool.get();
			var x1 = x;
			var y1 = y;
			var width = width2;
			var height = height2;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			width *= 0.5;
			height *= 0.5;
			aabb1.min_x = x1 - width;
			aabb1.min_y = y1 - height;
			aabb1.max_x = x1 + width;
			aabb1.max_y = y1 + height;
			aabb1.pooled = false;
			return aabb1;
		} else {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = this.local_ex * 2;
			var _this = this.transform;
			var width1;
			if(_this.parent == null) {
				width1 = _this.local_scale_x;
			} else {
				_this.sync();
				width1 = _this._scale_x;
			}
			var width2 = width * width1;
			var height = this.local_ey * 2;
			var _this = this.transform;
			var height1;
			if(_this.parent == null) {
				height1 = _this.local_scale_y;
			} else {
				_this.sync();
				height1 = _this._scale_y;
			}
			var height2 = height * height1;
			if(height2 == null) {
				height2 = 1;
			}
			if(width2 == null) {
				width2 = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			width2 *= 0.5;
			height2 *= 0.5;
			aabb.min_x = x - width2;
			aabb.min_y = y - height2;
			aabb.max_x = x + width2;
			aabb.max_y = y + height2;
			return aabb;
		}
	}
	,bounds: function(aabb) {
		var tmp;
		if(this.transformed_rect != null) {
			var _this = this.transform;
			var tmp1;
			if(_this.parent == null) {
				tmp1 = 180 / Math.PI * _this.local_radians;
			} else {
				_this.sync();
				tmp1 = 180 / Math.PI * _this._radians;
			}
			tmp = tmp1 != 0;
		} else {
			tmp = false;
		}
		if(tmp) {
			return this.transformed_rect.bounds(aabb);
		}
		if(aabb == null) {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = this.local_ex * 2;
			var _this = this.transform;
			var width1;
			if(_this.parent == null) {
				width1 = _this.local_scale_x;
			} else {
				_this.sync();
				width1 = _this._scale_x;
			}
			var width2 = width * width1;
			var height = this.local_ey * 2;
			var _this = this.transform;
			var height1;
			if(_this.parent == null) {
				height1 = _this.local_scale_y;
			} else {
				_this.sync();
				height1 = _this._scale_y;
			}
			var height2 = height * height1;
			if(height2 == null) {
				height2 = 1;
			}
			if(width2 == null) {
				width2 = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var aabb1 = echo_util_AABB.pool.get();
			var x1 = x;
			var y1 = y;
			var width = width2;
			var height = height2;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y1 == null) {
				y1 = 0;
			}
			if(x1 == null) {
				x1 = 0;
			}
			width *= 0.5;
			height *= 0.5;
			aabb1.min_x = x1 - width;
			aabb1.min_y = y1 - height;
			aabb1.max_x = x1 + width;
			aabb1.max_y = y1 + height;
			aabb1.pooled = false;
			return aabb1;
		} else {
			var _this = this.transform;
			var x;
			if(_this.parent == null) {
				x = _this.local_x;
			} else {
				_this.sync();
				x = _this._x;
			}
			var _this = this.transform;
			var y;
			if(_this.parent == null) {
				y = _this.local_y;
			} else {
				_this.sync();
				y = _this._y;
			}
			var width = this.local_ex * 2;
			var _this = this.transform;
			var width1;
			if(_this.parent == null) {
				width1 = _this.local_scale_x;
			} else {
				_this.sync();
				width1 = _this._scale_x;
			}
			var width2 = width * width1;
			var height = this.local_ey * 2;
			var _this = this.transform;
			var height1;
			if(_this.parent == null) {
				height1 = _this.local_scale_y;
			} else {
				_this.sync();
				height1 = _this._scale_y;
			}
			var height2 = height * height1;
			if(height2 == null) {
				height2 = 1;
			}
			if(width2 == null) {
				width2 = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			width2 *= 0.5;
			height2 *= 0.5;
			aabb.min_x = x - width2;
			aabb.min_y = y - height2;
			aabb.max_x = x + width2;
			aabb.max_y = y + height2;
			return aabb;
		}
	}
	,volume: function() {
		var tmp = this.local_ex * 2;
		var _this = this.transform;
		var tmp1;
		if(_this.parent == null) {
			tmp1 = _this.local_scale_x;
		} else {
			_this.sync();
			tmp1 = _this._scale_x;
		}
		var tmp2 = this.local_ey * 2;
		var _this = this.transform;
		var tmp3;
		if(_this.parent == null) {
			tmp3 = _this.local_scale_y;
		} else {
			_this.sync();
			tmp3 = _this._scale_y;
		}
		return tmp * tmp1 * (tmp2 * tmp3);
	}
	,intersect: function(l) {
		return echo_util_SAT.line_intersects_rect(l,this);
	}
	,collides: function(s) {
		return s.collide_rect(this);
	}
	,collide_rect: function(r) {
		return echo_util_SAT.rect_and_rect(r,this);
	}
	,collide_circle: function(c) {
		return echo_util_SAT.rect_and_circle(this,c);
	}
	,collide_polygon: function(p) {
		return echo_util_SAT.rect_and_polygon(this,p);
	}
	,set_parent: function(body) {
		echo_Shape.prototype.set_parent.call(this,body);
		var tmp;
		if(this.transformed_rect == null) {
			var _this = this.transform;
			var tmp1;
			if(_this.parent == null) {
				tmp1 = 180 / Math.PI * _this.local_radians;
			} else {
				_this.sync();
				tmp1 = 180 / Math.PI * _this._radians;
			}
			tmp = tmp1 != 0;
		} else {
			tmp = false;
		}
		if(tmp) {
			var polygon = echo_shape_Polygon.pool.get();
			polygon.count = 4;
			var _g = 0;
			var _g1 = polygon.count;
			while(_g < _g1) {
				var i = _g++;
				if(polygon.local_vertices[i] == null) {
					var polygon1 = polygon.local_vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					polygon1[i] = this1;
				}
			}
			var v = polygon.local_vertices[0];
			v.x = -(this.local_ex * this.transform.local_scale_x);
			v.y = -(this.local_ey * this.transform.local_scale_y);
			var v = polygon.local_vertices[1];
			v.x = this.local_ex * this.transform.local_scale_x;
			v.y = -(this.local_ey * this.transform.local_scale_y);
			var v = polygon.local_vertices[2];
			v.x = this.local_ex * this.transform.local_scale_x;
			v.y = this.local_ey * this.transform.local_scale_y;
			var v = polygon.local_vertices[3];
			v.x = -(this.local_ex * this.transform.local_scale_x);
			v.y = this.local_ey * this.transform.local_scale_y;
			var v = this.transform.local_x;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = v;
			var v = this.transform.local_y;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = v;
			var _this = polygon.transform;
			var v = Math.PI / 180 * (180 / Math.PI * this.transform.local_radians);
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var v = this.transform.local_scale_x;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = v;
			var v = this.transform.local_scale_y;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = v;
			polygon.dirty_vertices = true;
			polygon.dirty_bounds = true;
			polygon.pooled = false;
			this.transformed_rect = polygon;
			this.transformed_rect.set_parent(this.parent);
		} else if(this.transformed_rect != null) {
			var v = this.transform.local_x;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = v;
			var v = this.transform.local_y;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = v;
			var _this = this.transformed_rect.transform;
			var v = Math.PI / 180 * (180 / Math.PI * this.transform.local_radians);
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var v = this.transform.local_scale_x;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = v;
			var v = this.transform.local_scale_y;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = v;
		}
		if(this.transformed_rect != null) {
			this.transformed_rect.set_parent(body);
		}
	}
	,on_dirty: function(t) {
		var tmp;
		if(this.transformed_rect == null) {
			var _this = this.transform;
			var tmp1;
			if(_this.parent == null) {
				tmp1 = 180 / Math.PI * _this.local_radians;
			} else {
				_this.sync();
				tmp1 = 180 / Math.PI * _this._radians;
			}
			tmp = tmp1 != 0;
		} else {
			tmp = false;
		}
		if(tmp) {
			var polygon = echo_shape_Polygon.pool.get();
			polygon.count = 4;
			var _g = 0;
			var _g1 = polygon.count;
			while(_g < _g1) {
				var i = _g++;
				if(polygon.local_vertices[i] == null) {
					var polygon1 = polygon.local_vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					polygon1[i] = this1;
				}
			}
			var v = polygon.local_vertices[0];
			v.x = -(this.local_ex * this.transform.local_scale_x);
			v.y = -(this.local_ey * this.transform.local_scale_y);
			var v = polygon.local_vertices[1];
			v.x = this.local_ex * this.transform.local_scale_x;
			v.y = -(this.local_ey * this.transform.local_scale_y);
			var v = polygon.local_vertices[2];
			v.x = this.local_ex * this.transform.local_scale_x;
			v.y = this.local_ey * this.transform.local_scale_y;
			var v = polygon.local_vertices[3];
			v.x = -(this.local_ex * this.transform.local_scale_x);
			v.y = this.local_ey * this.transform.local_scale_y;
			var v = this.transform.local_x;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = v;
			var v = this.transform.local_y;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = v;
			var _this = polygon.transform;
			var v = Math.PI / 180 * (180 / Math.PI * this.transform.local_radians);
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var v = this.transform.local_scale_x;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = v;
			var v = this.transform.local_scale_y;
			var _this = polygon.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = v;
			polygon.dirty_vertices = true;
			polygon.dirty_bounds = true;
			polygon.pooled = false;
			this.transformed_rect = polygon;
			this.transformed_rect.set_parent(this.parent);
		} else if(this.transformed_rect != null) {
			var v = this.transform.local_x;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_x = v;
			var v = this.transform.local_y;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_y = v;
			var _this = this.transformed_rect.transform;
			var v = Math.PI / 180 * (180 / Math.PI * this.transform.local_radians);
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_radians = v;
			var v = this.transform.local_scale_x;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_x = v;
			var v = this.transform.local_scale_y;
			var _this = this.transformed_rect.transform;
			if(!_this.dirty) {
				_this.set_dirty();
			}
			_this.local_scale_y = v;
		}
	}
	,__class__: echo_shape_Rect
});
var echo_util_GenericPool_$echo_$util_$AABB = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$util_$AABB.__name__ = true;
echo_util_GenericPool_$echo_$util_$AABB.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$util_$AABB.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$util_$AABB
};
var echo_util_AABB = function() {
	this.pooled = false;
	this.min_x = 0;
	this.max_x = 1;
	this.min_y = 0;
	this.max_y = 1;
};
echo_util_AABB.__name__ = true;
echo_util_AABB.__interfaces__ = [echo_util_Poolable];
echo_util_AABB.prototype = {
	put: function() {
		if(!this.pooled) {
			this.pooled = true;
			echo_util_AABB.pool.put_unsafe(this);
		}
	}
	,__class__: echo_util_AABB
};
var echo_util_BitMask = {};
echo_util_BitMask._new = function(value) {
	if(value == null) {
		value = 0;
	}
	var this1 = value;
	return this1;
};
var echo_util_GenericPool_$echo_$util_$QuadTree = function(type) {
	this.type = type;
	this.members = [];
	this.count = 0;
};
echo_util_GenericPool_$echo_$util_$QuadTree.__name__ = true;
echo_util_GenericPool_$echo_$util_$QuadTree.__interfaces__ = [echo_util_Pool];
echo_util_GenericPool_$echo_$util_$QuadTree.prototype = {
	get: function() {
		if(this.count == 0) {
			return Type.createInstance(this.type,[]);
		}
		return this.members[--this.count];
	}
	,put_unsafe: function(obj) {
		if(obj != null) {
			this.members[this.count++] = obj;
		}
	}
	,__class__: echo_util_GenericPool_$echo_$util_$QuadTree
};
var echo_util_History_$Array_$echo_$data_$BodyState = function(len) {
	this.re = new echo_util_Ring_$Array_$echo_$data_$BodyState(len);
	this.un = new echo_util_Ring_$Array_$echo_$data_$BodyState(len);
};
echo_util_History_$Array_$echo_$data_$BodyState.__name__ = true;
echo_util_History_$Array_$echo_$data_$BodyState.prototype = {
	redo: function() {
		var r = this.re.pop();
		if(r != null) {
			this.un.push(r);
		}
		return r;
	}
	,undo: function() {
		var u = this.un.pop();
		if(u != null) {
			this.re.push(u);
		}
		return u;
	}
	,add: function(v) {
		this.un.push(v);
		this.re.reset();
	}
	,__class__: echo_util_History_$Array_$echo_$data_$BodyState
};
var echo_util_JSON = function() { };
echo_util_JSON.__name__ = true;
echo_util_JSON.copy_fields = function(from,into) {
	if(from == null) {
		return into;
	}
	if(into == null) {
		into = Reflect.copy(from);
	} else {
		var _g = 0;
		var _g1 = Reflect.fields(from);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			into[f] = Reflect.field(from,f);
		}
	}
	return into;
};
var echo_util_QuadTree = function(aabb,depth) {
	if(depth == null) {
		depth = 0;
	}
	this.nodes_list = [];
	this.max_contents = 10;
	this.max_depth = 5;
	echo_util_AABB.call(this);
	if(aabb != null) {
		this.min_x = aabb.min_x;
		this.max_x = aabb.max_x;
		this.min_y = aabb.min_y;
		this.max_y = aabb.max_y;
	}
	this.depth = depth;
	var this1 = new Array(4);
	this.children = this1;
	this.contents = [];
	this.contents_count = 0;
};
echo_util_QuadTree.__name__ = true;
echo_util_QuadTree.__super__ = echo_util_AABB;
echo_util_QuadTree.prototype = $extend(echo_util_AABB.prototype,{
	put: function() {
		if(!this.pooled) {
			this.pooled = true;
			var _g = 0;
			var _g1 = this.children.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.children[i] != null) {
					this.children[i].clear_children();
					var _this = this.children[i];
					if(!_this.pooled) {
						_this.pooled = true;
						_this.clear_children();
						_this.contents.length = 0;
						_this.contents_count = 0;
						_this.nodes_list.length = 0;
						echo_util_QuadTree.pool.put_unsafe(_this);
					}
					this.children[i] = null;
				}
			}
			this.contents.length = 0;
			this.contents_count = 0;
			this.nodes_list.length = 0;
			echo_util_QuadTree.pool.put_unsafe(this);
		}
	}
	,insert: function(data) {
		if(data.bounds == null) {
			return;
		}
		var _this = data.bounds;
		if(!(_this.min_x < this.max_x && _this.max_x >= this.min_x && _this.min_y < this.max_y && _this.max_y >= this.min_y)) {
			return;
		}
		if(this.children[0] == null && this.contents_count + 1 > this.max_contents) {
			this.split();
		}
		if(this.children[0] == null) {
			var index = this.get_first_null(this.contents);
			if(index == -1) {
				this.contents.push(data);
			} else {
				this.contents[index] = data;
			}
			this.contents_count++;
		} else {
			var _g = 0;
			var _g1 = this.children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.insert(data);
			}
		}
	}
	,remove: function(data,allow_shake) {
		if(allow_shake == null) {
			allow_shake = true;
		}
		if(this.children[0] == null) {
			var i = 0;
			while(i < this.contents.length) {
				if(this.contents[i] != null && this.contents[i].id == data.id) {
					this.contents[i] = null;
					this.contents_count--;
					return true;
				}
				++i;
			}
			return false;
		}
		var removed = false;
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child != null && child.remove(data)) {
				removed = true;
			}
		}
		if(allow_shake && removed) {
			this.shake();
		}
		return removed;
	}
	,update: function(data,allow_shake) {
		if(allow_shake == null) {
			allow_shake = true;
		}
		this.remove(data,allow_shake);
		this.insert(data);
	}
	,query: function(aabb,result) {
		if(!(this.min_x < aabb.max_x && this.max_x >= aabb.min_x && this.min_y < aabb.max_y && this.max_y >= aabb.min_y)) {
			return;
		}
		if(this.children[0] == null) {
			var _g = 0;
			var _g1 = this.contents;
			while(_g < _g1.length) {
				var data = _g1[_g];
				++_g;
				var tmp;
				if(data != null) {
					var _this = data.bounds;
					tmp = _this.min_x < aabb.max_x && _this.max_x >= aabb.min_x && _this.min_y < aabb.max_y && _this.max_y >= aabb.min_y;
				} else {
					tmp = false;
				}
				if(tmp) {
					result.push(data);
				}
			}
		} else {
			var _g = 0;
			var _g1 = this.children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.query(aabb,result);
			}
		}
	}
	,shake: function() {
		if(this.children[0] == null) {
			return false;
		}
		var len = this.get_count();
		if(len == 0) {
			var _g = 0;
			var _g1 = this.children.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.children[i] != null) {
					var _this = this.children[i];
					var _g2 = 0;
					var _g3 = _this.children.length;
					while(_g2 < _g3) {
						var i1 = _g2++;
						if(_this.children[i1] != null) {
							_this.children[i1].clear_children();
							var _this1 = _this.children[i1];
							if(!_this1.pooled) {
								_this1.pooled = true;
								_this1.clear_children();
								_this1.contents.length = 0;
								_this1.contents_count = 0;
								_this1.nodes_list.length = 0;
								echo_util_QuadTree.pool.put_unsafe(_this1);
							}
							_this.children[i1] = null;
						}
					}
					var _this2 = this.children[i];
					if(!_this2.pooled) {
						_this2.pooled = true;
						var _g4 = 0;
						var _g5 = _this2.children.length;
						while(_g4 < _g5) {
							var i2 = _g4++;
							if(_this2.children[i2] != null) {
								_this2.children[i2].clear_children();
								var _this3 = _this2.children[i2];
								if(!_this3.pooled) {
									_this3.pooled = true;
									_this3.clear_children();
									_this3.contents.length = 0;
									_this3.contents_count = 0;
									_this3.nodes_list.length = 0;
									echo_util_QuadTree.pool.put_unsafe(_this3);
								}
								_this2.children[i2] = null;
							}
						}
						_this2.contents.length = 0;
						_this2.contents_count = 0;
						_this2.nodes_list.length = 0;
						echo_util_QuadTree.pool.put_unsafe(_this2);
					}
					this.children[i] = null;
				}
			}
		} else if(len < this.max_contents) {
			this.nodes_list.length = 0;
			this.nodes_list.push(this);
			while(this.nodes_list.length > 0) {
				var node = this.nodes_list.shift();
				if(node != this && node.children[0] == null) {
					var _g = 0;
					var _g1 = node.contents;
					while(_g < _g1.length) {
						var data = _g1[_g];
						++_g;
						if(this.contents.indexOf(data) == -1) {
							var index = this.get_first_null(this.contents);
							if(index == -1) {
								this.contents.push(data);
							} else {
								this.contents[index] = data;
							}
							this.contents_count++;
						}
					}
				} else {
					var _g2 = 0;
					var _g3 = node.children;
					while(_g2 < _g3.length) {
						var child = _g3[_g2];
						++_g2;
						this.nodes_list.push(child);
					}
				}
			}
			var _g = 0;
			var _g1 = this.children.length;
			while(_g < _g1) {
				var i = _g++;
				if(this.children[i] != null) {
					var _this = this.children[i];
					var _g2 = 0;
					var _g3 = _this.children.length;
					while(_g2 < _g3) {
						var i1 = _g2++;
						if(_this.children[i1] != null) {
							_this.children[i1].clear_children();
							var _this1 = _this.children[i1];
							if(!_this1.pooled) {
								_this1.pooled = true;
								_this1.clear_children();
								_this1.contents.length = 0;
								_this1.contents_count = 0;
								_this1.nodes_list.length = 0;
								echo_util_QuadTree.pool.put_unsafe(_this1);
							}
							_this.children[i1] = null;
						}
					}
					var _this2 = this.children[i];
					if(!_this2.pooled) {
						_this2.pooled = true;
						var _g4 = 0;
						var _g5 = _this2.children.length;
						while(_g4 < _g5) {
							var i2 = _g4++;
							if(_this2.children[i2] != null) {
								_this2.children[i2].clear_children();
								var _this3 = _this2.children[i2];
								if(!_this3.pooled) {
									_this3.pooled = true;
									_this3.clear_children();
									_this3.contents.length = 0;
									_this3.contents_count = 0;
									_this3.nodes_list.length = 0;
									echo_util_QuadTree.pool.put_unsafe(_this3);
								}
								_this2.children[i2] = null;
							}
						}
						_this2.contents.length = 0;
						_this2.contents_count = 0;
						_this2.nodes_list.length = 0;
						echo_util_QuadTree.pool.put_unsafe(_this2);
					}
					this.children[i] = null;
				}
			}
			return true;
		}
		return false;
	}
	,split: function() {
		if(this.depth + 1 >= this.max_depth) {
			return;
		}
		var xw = (this.max_x - this.min_x) * 0.5;
		var xh = (this.max_y - this.min_y) * 0.5;
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			var qt = echo_util_QuadTree.pool.get();
			var x = 0;
			var y = 0;
			var width = 1;
			var height = 1;
			if(height == null) {
				height = 1;
			}
			if(width == null) {
				width = 1;
			}
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			width *= 0.5;
			height *= 0.5;
			qt.min_x = x - width;
			qt.min_y = y - height;
			qt.max_x = x + width;
			qt.max_y = y + height;
			var _g1 = 0;
			var _g2 = qt.children.length;
			while(_g1 < _g2) {
				var i1 = _g1++;
				if(qt.children[i1] != null) {
					qt.children[i1].clear_children();
					var _this = qt.children[i1];
					if(!_this.pooled) {
						_this.pooled = true;
						_this.clear_children();
						_this.contents.length = 0;
						_this.contents_count = 0;
						_this.nodes_list.length = 0;
						echo_util_QuadTree.pool.put_unsafe(_this);
					}
					qt.children[i1] = null;
				}
			}
			qt.contents.length = 0;
			qt.contents_count = 0;
			qt.pooled = false;
			var child = qt;
			switch(i) {
			case 0:
				var max_x = this.min_x + xw;
				var max_y = this.min_y + xh;
				child.min_x = this.min_x;
				child.max_x = max_x;
				child.min_y = this.min_y;
				child.max_y = max_y;
				break;
			case 1:
				var max_y1 = this.min_y + xh;
				child.min_x = this.min_x + xw;
				child.max_x = this.max_x;
				child.min_y = this.min_y;
				child.max_y = max_y1;
				break;
			case 2:
				var max_x1 = this.min_x + xw;
				child.min_x = this.min_x;
				child.max_x = max_x1;
				child.min_y = this.min_y + xh;
				child.max_y = this.max_y;
				break;
			case 3:
				child.min_x = this.min_x + xw;
				child.max_x = this.max_x;
				child.min_y = this.min_y + xh;
				child.max_y = this.max_y;
				break;
			}
			child.depth = this.depth + 1;
			var value = this.max_depth;
			var _g3 = 0;
			var _g4 = child.children.length;
			while(_g3 < _g4) {
				var i2 = _g3++;
				if(child.children[i2] != null) {
					var _this1 = child.children[i2];
					var _g5 = 0;
					var _g6 = _this1.children.length;
					while(_g5 < _g6) {
						var i3 = _g5++;
						if(_this1.children[i3] != null) {
							_this1.children[i3].set_max_depth(value);
						}
					}
					_this1.max_depth = value;
				}
			}
			child.max_depth = value;
			var value1 = this.max_contents;
			var _g7 = 0;
			var _g8 = child.children.length;
			while(_g7 < _g8) {
				var i4 = _g7++;
				if(child.children[i4] != null) {
					var _this2 = child.children[i4];
					var _g9 = 0;
					var _g10 = _this2.children.length;
					while(_g9 < _g10) {
						var i5 = _g9++;
						if(_this2.children[i5] != null) {
							var _this3 = _this2.children[i5];
							var _g11 = 0;
							var _g12 = _this3.children.length;
							while(_g11 < _g12) {
								var i6 = _g11++;
								if(_this3.children[i6] != null) {
									_this3.children[i6].set_max_depth(value1);
								}
							}
							_this3.max_depth = value1;
						}
					}
					_this2.max_depth = value1;
				}
			}
			child.max_contents = value1;
			child.shake();
			var _g13 = 0;
			var _g14 = this.contents.length;
			while(_g13 < _g14) {
				var j = _g13++;
				if(this.contents[j] != null) {
					child.insert(this.contents[j]);
				}
			}
			this.children[i] = child;
		}
		this.contents.length = 0;
		this.contents_count = 0;
	}
	,clear_children: function() {
		var _g = 0;
		var _g1 = this.children.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.children[i] != null) {
				this.children[i].clear_children();
				var _this = this.children[i];
				if(!_this.pooled) {
					_this.pooled = true;
					_this.clear_children();
					_this.contents.length = 0;
					_this.contents_count = 0;
					_this.nodes_list.length = 0;
					echo_util_QuadTree.pool.put_unsafe(_this);
				}
				this.children[i] = null;
			}
		}
	}
	,reset_data_flags: function() {
		var _g = 0;
		var _g1 = this.contents.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.contents[i] != null) {
				this.contents[i].flag = false;
			}
		}
		var _g = 0;
		var _g1 = this.children.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.children[i] != null) {
				this.children[i].reset_data_flags();
			}
		}
	}
	,get_count: function() {
		this.reset_data_flags();
		var num = 0;
		var _g = 0;
		var _g1 = this.contents.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.contents[i] != null) {
				this.contents[i].flag = true;
				++num;
			}
		}
		this.nodes_list.length = 0;
		this.nodes_list.push(this);
		while(this.nodes_list.length > 0) {
			var node = this.nodes_list.shift();
			if(node.children[0] == null) {
				var _g = 0;
				var _g1 = node.contents.length;
				while(_g < _g1) {
					var i = _g++;
					if(node.contents[i] != null && !node.contents[i].flag) {
						++num;
						node.contents[i].flag = true;
					}
				}
			} else {
				var _g2 = 0;
				var _g3 = node.children.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					this.nodes_list.push(node.children[i1]);
				}
			}
		}
		return num;
	}
	,get_first_null: function(arr) {
		var _g = 0;
		var _g1 = arr.length;
		while(_g < _g1) {
			var i = _g++;
			if(arr[i] == null) {
				return i;
			}
		}
		return -1;
	}
	,set_max_depth: function(value) {
		var _g = 0;
		var _g1 = this.children.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.children[i] != null) {
				this.children[i].set_max_depth(value);
			}
		}
		return this.max_depth = value;
	}
	,__class__: echo_util_QuadTree
	,__properties__: {get_count:"get_count",set_max_depth:"set_max_depth"}
});
var echo_util_Ring_$Array_$echo_$data_$BodyState = function(len) {
	var this1 = new Array(len);
	this.a = this1;
	this.reset();
};
echo_util_Ring_$Array_$echo_$data_$BodyState.__name__ = true;
echo_util_Ring_$Array_$echo_$data_$BodyState.prototype = {
	pop: function() {
		if(this.i + this.left - this.start <= 0) {
			return null;
		}
		if(this.i == 0) {
			this.i = this.a.length;
			this.left = 0;
		}
		return this.a[--this.i];
	}
	,push: function(v) {
		if(this.i == this.a.length) {
			if(this.left > 0 && this.start == this.i) {
				this.start = 0;
			}
			this.i = 0;
			this.left = this.a.length;
		}
		if(this.i + this.left - this.start == this.a.length) {
			this.start++;
		}
		this.a[this.i++] = v;
	}
	,reset: function() {
		this.i = 0;
		this.start = 0;
		this.left = 0;
	}
	,__class__: echo_util_Ring_$Array_$echo_$data_$BodyState
};
var echo_util_SAT = function() { };
echo_util_SAT.__name__ = true;
echo_util_SAT.line_intersects_rect = function(l,r) {
	var tmp;
	if(r.transformed_rect != null) {
		var _this = r.transform;
		var tmp1;
		if(_this.parent == null) {
			tmp1 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			tmp1 = 180 / Math.PI * _this._radians;
		}
		tmp = tmp1 != 0;
	} else {
		tmp = false;
	}
	if(tmp) {
		return r.transformed_rect.intersect(l);
	}
	var closest = null;
	var left;
	var left1;
	if(r.transformed_rect != null) {
		var _this = r.transform;
		var left2;
		if(_this.parent == null) {
			left2 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			left2 = 180 / Math.PI * _this._radians;
		}
		left1 = left2 == 0;
	} else {
		left1 = true;
	}
	if(left1) {
		var _this = r.transform;
		var left1;
		if(_this.parent == null) {
			left1 = _this.local_x;
		} else {
			_this.sync();
			left1 = _this._x;
		}
		left = left1 - r.local_ex * r.transform.local_scale_x;
	} else {
		var _this = r.transformed_rect;
		var left1;
		if(_this.count != 0) {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			left1 = _this._vertices[0] == null;
		} else {
			left1 = true;
		}
		if(left1) {
			var _this1 = _this.transform;
			if(_this1.parent == null) {
				left = _this1.local_x;
			} else {
				_this1.sync();
				left = _this1._x;
			}
		} else {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			var left1 = _this._vertices[0].x;
			var _g = 1;
			var _g1 = _this.count;
			while(_g < _g1) {
				var i = _g++;
				if(_this.dirty_vertices) {
					_this.dirty_vertices = false;
					while(_this._vertices.length > _this.count) _this._vertices.pop();
					var _g2 = 0;
					var _g3 = _this.count;
					while(_g2 < _g3) {
						var i1 = _g2++;
						if(_this.local_vertices[i1] == null) {
							continue;
						}
						if(_this._vertices[i1] == null) {
							var _this1 = _this._vertices;
							var this1 = new echo_math_Vector2Default(0,0);
							_this1[i1] = this1;
						}
						var x = _this.local_vertices[i1].x;
						var y = _this.local_vertices[i1].y;
						if(y == null) {
							y = 0;
						}
						if(x == null) {
							x = 0;
						}
						var a = _this.transform.get_local_to_world_matrix();
						var v_x = x;
						var v_y = y;
						var v_z = 1;
						var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
						var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
						var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
						var pos_x = result_x;
						var pos_y = result_y;
						var v = _this._vertices[i1];
						v.x = pos_x;
						v.y = pos_y;
					}
					var _g4 = 0;
					var _g5 = _this.count;
					while(_g4 < _g5) {
						var i2 = _g4++;
						var v1 = _this._vertices[(i2 + 1) % _this.count];
						var v_x1 = v1.x;
						var v_y1 = v1.y;
						var b = _this._vertices[i2];
						var b_x = v_x1 - b.x;
						var b_y = v_y1 - b.y;
						v_x1 = b_x;
						v_y1 = b_y;
						var x1 = -v_y1;
						v_y1 = v_x1;
						v_x1 = x1;
						if(_this._normals[i2] == null) {
							var _this2 = _this._normals;
							var this2 = new echo_math_Vector2Default(v_x1,v_y1);
							_this2[i2] = this2;
						} else {
							var a1 = _this._normals[i2];
							a1.x = v_x1;
							a1.y = v_y1;
						}
						var v2 = _this._normals[i2];
						var self = v2;
						var self1 = v2;
						var self2 = self1;
						var len_sq = self2.x * self2.x + self2.y * self2.y;
						var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
						var a_x = self1.x / denominator;
						var a_y = self1.y / denominator;
						var b_x1 = a_x;
						var b_y1 = a_y;
						self.x = b_x1;
						self.y = b_y1;
					}
				}
				if(_this._vertices[i].x < left1) {
					if(_this.dirty_vertices) {
						_this.dirty_vertices = false;
						while(_this._vertices.length > _this.count) _this._vertices.pop();
						var _g6 = 0;
						var _g7 = _this.count;
						while(_g6 < _g7) {
							var i3 = _g6++;
							if(_this.local_vertices[i3] == null) {
								continue;
							}
							if(_this._vertices[i3] == null) {
								var _this3 = _this._vertices;
								var this3 = new echo_math_Vector2Default(0,0);
								_this3[i3] = this3;
							}
							var x2 = _this.local_vertices[i3].x;
							var y1 = _this.local_vertices[i3].y;
							if(y1 == null) {
								y1 = 0;
							}
							if(x2 == null) {
								x2 = 0;
							}
							var a2 = _this.transform.get_local_to_world_matrix();
							var v_x2 = x2;
							var v_y2 = y1;
							var v_z1 = 1;
							var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
							var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
							var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
							var pos_x1 = result_x1;
							var pos_y1 = result_y1;
							var v3 = _this._vertices[i3];
							v3.x = pos_x1;
							v3.y = pos_y1;
						}
						var _g8 = 0;
						var _g9 = _this.count;
						while(_g8 < _g9) {
							var i4 = _g8++;
							var v4 = _this._vertices[(i4 + 1) % _this.count];
							var v_x3 = v4.x;
							var v_y3 = v4.y;
							var b1 = _this._vertices[i4];
							var b_x2 = v_x3 - b1.x;
							var b_y2 = v_y3 - b1.y;
							v_x3 = b_x2;
							v_y3 = b_y2;
							var x3 = -v_y3;
							v_y3 = v_x3;
							v_x3 = x3;
							if(_this._normals[i4] == null) {
								var _this4 = _this._normals;
								var this4 = new echo_math_Vector2Default(v_x3,v_y3);
								_this4[i4] = this4;
							} else {
								var a3 = _this._normals[i4];
								a3.x = v_x3;
								a3.y = v_y3;
							}
							var v5 = _this._normals[i4];
							var self3 = v5;
							var self4 = v5;
							var self5 = self4;
							var len_sq1 = self5.x * self5.x + self5.y * self5.y;
							var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
							var a_x1 = self4.x / denominator1;
							var a_y1 = self4.y / denominator1;
							var b_x3 = a_x1;
							var b_y3 = a_y1;
							self3.x = b_x3;
							self3.y = b_y3;
						}
					}
					left1 = _this._vertices[i].x;
				}
			}
			left = left1;
		}
	}
	var right;
	var right1;
	if(r.transformed_rect != null) {
		var _this = r.transform;
		var right2;
		if(_this.parent == null) {
			right2 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			right2 = 180 / Math.PI * _this._radians;
		}
		right1 = right2 == 0;
	} else {
		right1 = true;
	}
	if(right1) {
		var _this = r.transform;
		var right1;
		if(_this.parent == null) {
			right1 = _this.local_x;
		} else {
			_this.sync();
			right1 = _this._x;
		}
		right = right1 + r.local_ex * r.transform.local_scale_x;
	} else {
		var _this = r.transformed_rect;
		var right1;
		if(_this.count != 0) {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			right1 = _this._vertices[0] == null;
		} else {
			right1 = true;
		}
		if(right1) {
			var _this1 = _this.transform;
			if(_this1.parent == null) {
				right = _this1.local_x;
			} else {
				_this1.sync();
				right = _this1._x;
			}
		} else {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			var right1 = _this._vertices[0].x;
			var _g = 1;
			var _g1 = _this.count;
			while(_g < _g1) {
				var i = _g++;
				if(_this.dirty_vertices) {
					_this.dirty_vertices = false;
					while(_this._vertices.length > _this.count) _this._vertices.pop();
					var _g2 = 0;
					var _g3 = _this.count;
					while(_g2 < _g3) {
						var i1 = _g2++;
						if(_this.local_vertices[i1] == null) {
							continue;
						}
						if(_this._vertices[i1] == null) {
							var _this1 = _this._vertices;
							var this1 = new echo_math_Vector2Default(0,0);
							_this1[i1] = this1;
						}
						var x = _this.local_vertices[i1].x;
						var y = _this.local_vertices[i1].y;
						if(y == null) {
							y = 0;
						}
						if(x == null) {
							x = 0;
						}
						var a = _this.transform.get_local_to_world_matrix();
						var v_x = x;
						var v_y = y;
						var v_z = 1;
						var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
						var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
						var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
						var pos_x = result_x;
						var pos_y = result_y;
						var v = _this._vertices[i1];
						v.x = pos_x;
						v.y = pos_y;
					}
					var _g4 = 0;
					var _g5 = _this.count;
					while(_g4 < _g5) {
						var i2 = _g4++;
						var v1 = _this._vertices[(i2 + 1) % _this.count];
						var v_x1 = v1.x;
						var v_y1 = v1.y;
						var b = _this._vertices[i2];
						var b_x = v_x1 - b.x;
						var b_y = v_y1 - b.y;
						v_x1 = b_x;
						v_y1 = b_y;
						var x1 = -v_y1;
						v_y1 = v_x1;
						v_x1 = x1;
						if(_this._normals[i2] == null) {
							var _this2 = _this._normals;
							var this2 = new echo_math_Vector2Default(v_x1,v_y1);
							_this2[i2] = this2;
						} else {
							var a1 = _this._normals[i2];
							a1.x = v_x1;
							a1.y = v_y1;
						}
						var v2 = _this._normals[i2];
						var self = v2;
						var self1 = v2;
						var self2 = self1;
						var len_sq = self2.x * self2.x + self2.y * self2.y;
						var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
						var a_x = self1.x / denominator;
						var a_y = self1.y / denominator;
						var b_x1 = a_x;
						var b_y1 = a_y;
						self.x = b_x1;
						self.y = b_y1;
					}
				}
				if(_this._vertices[i].x > right1) {
					if(_this.dirty_vertices) {
						_this.dirty_vertices = false;
						while(_this._vertices.length > _this.count) _this._vertices.pop();
						var _g6 = 0;
						var _g7 = _this.count;
						while(_g6 < _g7) {
							var i3 = _g6++;
							if(_this.local_vertices[i3] == null) {
								continue;
							}
							if(_this._vertices[i3] == null) {
								var _this3 = _this._vertices;
								var this3 = new echo_math_Vector2Default(0,0);
								_this3[i3] = this3;
							}
							var x2 = _this.local_vertices[i3].x;
							var y1 = _this.local_vertices[i3].y;
							if(y1 == null) {
								y1 = 0;
							}
							if(x2 == null) {
								x2 = 0;
							}
							var a2 = _this.transform.get_local_to_world_matrix();
							var v_x2 = x2;
							var v_y2 = y1;
							var v_z1 = 1;
							var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
							var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
							var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
							var pos_x1 = result_x1;
							var pos_y1 = result_y1;
							var v3 = _this._vertices[i3];
							v3.x = pos_x1;
							v3.y = pos_y1;
						}
						var _g8 = 0;
						var _g9 = _this.count;
						while(_g8 < _g9) {
							var i4 = _g8++;
							var v4 = _this._vertices[(i4 + 1) % _this.count];
							var v_x3 = v4.x;
							var v_y3 = v4.y;
							var b1 = _this._vertices[i4];
							var b_x2 = v_x3 - b1.x;
							var b_y2 = v_y3 - b1.y;
							v_x3 = b_x2;
							v_y3 = b_y2;
							var x3 = -v_y3;
							v_y3 = v_x3;
							v_x3 = x3;
							if(_this._normals[i4] == null) {
								var _this4 = _this._normals;
								var this4 = new echo_math_Vector2Default(v_x3,v_y3);
								_this4[i4] = this4;
							} else {
								var a3 = _this._normals[i4];
								a3.x = v_x3;
								a3.y = v_y3;
							}
							var v5 = _this._normals[i4];
							var self3 = v5;
							var self4 = v5;
							var self5 = self4;
							var len_sq1 = self5.x * self5.x + self5.y * self5.y;
							var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
							var a_x1 = self4.x / denominator1;
							var a_y1 = self4.y / denominator1;
							var b_x3 = a_x1;
							var b_y3 = a_y1;
							self3.x = b_x3;
							self3.y = b_y3;
						}
					}
					right1 = _this._vertices[i].x;
				}
			}
			right = right1;
		}
	}
	var top;
	var top1;
	if(r.transformed_rect != null) {
		var _this = r.transform;
		var top2;
		if(_this.parent == null) {
			top2 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			top2 = 180 / Math.PI * _this._radians;
		}
		top1 = top2 == 0;
	} else {
		top1 = true;
	}
	if(top1) {
		var _this = r.transform;
		var top1;
		if(_this.parent == null) {
			top1 = _this.local_y;
		} else {
			_this.sync();
			top1 = _this._y;
		}
		top = top1 - r.local_ey * r.transform.local_scale_y;
	} else {
		var _this = r.transformed_rect;
		var top1;
		if(_this.count != 0) {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			top1 = _this._vertices[0] == null;
		} else {
			top1 = true;
		}
		if(top1) {
			var _this1 = _this.transform;
			if(_this1.parent == null) {
				top = _this1.local_y;
			} else {
				_this1.sync();
				top = _this1._y;
			}
		} else {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			var top1 = _this._vertices[0].y;
			var _g = 1;
			var _g1 = _this.count;
			while(_g < _g1) {
				var i = _g++;
				if(_this.dirty_vertices) {
					_this.dirty_vertices = false;
					while(_this._vertices.length > _this.count) _this._vertices.pop();
					var _g2 = 0;
					var _g3 = _this.count;
					while(_g2 < _g3) {
						var i1 = _g2++;
						if(_this.local_vertices[i1] == null) {
							continue;
						}
						if(_this._vertices[i1] == null) {
							var _this1 = _this._vertices;
							var this1 = new echo_math_Vector2Default(0,0);
							_this1[i1] = this1;
						}
						var x = _this.local_vertices[i1].x;
						var y = _this.local_vertices[i1].y;
						if(y == null) {
							y = 0;
						}
						if(x == null) {
							x = 0;
						}
						var a = _this.transform.get_local_to_world_matrix();
						var v_x = x;
						var v_y = y;
						var v_z = 1;
						var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
						var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
						var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
						var pos_x = result_x;
						var pos_y = result_y;
						var v = _this._vertices[i1];
						v.x = pos_x;
						v.y = pos_y;
					}
					var _g4 = 0;
					var _g5 = _this.count;
					while(_g4 < _g5) {
						var i2 = _g4++;
						var v1 = _this._vertices[(i2 + 1) % _this.count];
						var v_x1 = v1.x;
						var v_y1 = v1.y;
						var b = _this._vertices[i2];
						var b_x = v_x1 - b.x;
						var b_y = v_y1 - b.y;
						v_x1 = b_x;
						v_y1 = b_y;
						var x1 = -v_y1;
						v_y1 = v_x1;
						v_x1 = x1;
						if(_this._normals[i2] == null) {
							var _this2 = _this._normals;
							var this2 = new echo_math_Vector2Default(v_x1,v_y1);
							_this2[i2] = this2;
						} else {
							var a1 = _this._normals[i2];
							a1.x = v_x1;
							a1.y = v_y1;
						}
						var v2 = _this._normals[i2];
						var self = v2;
						var self1 = v2;
						var self2 = self1;
						var len_sq = self2.x * self2.x + self2.y * self2.y;
						var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
						var a_x = self1.x / denominator;
						var a_y = self1.y / denominator;
						var b_x1 = a_x;
						var b_y1 = a_y;
						self.x = b_x1;
						self.y = b_y1;
					}
				}
				if(_this._vertices[i].y < top1) {
					if(_this.dirty_vertices) {
						_this.dirty_vertices = false;
						while(_this._vertices.length > _this.count) _this._vertices.pop();
						var _g6 = 0;
						var _g7 = _this.count;
						while(_g6 < _g7) {
							var i3 = _g6++;
							if(_this.local_vertices[i3] == null) {
								continue;
							}
							if(_this._vertices[i3] == null) {
								var _this3 = _this._vertices;
								var this3 = new echo_math_Vector2Default(0,0);
								_this3[i3] = this3;
							}
							var x2 = _this.local_vertices[i3].x;
							var y1 = _this.local_vertices[i3].y;
							if(y1 == null) {
								y1 = 0;
							}
							if(x2 == null) {
								x2 = 0;
							}
							var a2 = _this.transform.get_local_to_world_matrix();
							var v_x2 = x2;
							var v_y2 = y1;
							var v_z1 = 1;
							var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
							var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
							var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
							var pos_x1 = result_x1;
							var pos_y1 = result_y1;
							var v3 = _this._vertices[i3];
							v3.x = pos_x1;
							v3.y = pos_y1;
						}
						var _g8 = 0;
						var _g9 = _this.count;
						while(_g8 < _g9) {
							var i4 = _g8++;
							var v4 = _this._vertices[(i4 + 1) % _this.count];
							var v_x3 = v4.x;
							var v_y3 = v4.y;
							var b1 = _this._vertices[i4];
							var b_x2 = v_x3 - b1.x;
							var b_y2 = v_y3 - b1.y;
							v_x3 = b_x2;
							v_y3 = b_y2;
							var x3 = -v_y3;
							v_y3 = v_x3;
							v_x3 = x3;
							if(_this._normals[i4] == null) {
								var _this4 = _this._normals;
								var this4 = new echo_math_Vector2Default(v_x3,v_y3);
								_this4[i4] = this4;
							} else {
								var a3 = _this._normals[i4];
								a3.x = v_x3;
								a3.y = v_y3;
							}
							var v5 = _this._normals[i4];
							var self3 = v5;
							var self4 = v5;
							var self5 = self4;
							var len_sq1 = self5.x * self5.x + self5.y * self5.y;
							var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
							var a_x1 = self4.x / denominator1;
							var a_y1 = self4.y / denominator1;
							var b_x3 = a_x1;
							var b_y3 = a_y1;
							self3.x = b_x3;
							self3.y = b_y3;
						}
					}
					top1 = _this._vertices[i].y;
				}
			}
			top = top1;
		}
	}
	var bottom;
	var bottom1;
	if(r.transformed_rect != null) {
		var _this = r.transform;
		var bottom2;
		if(_this.parent == null) {
			bottom2 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			bottom2 = 180 / Math.PI * _this._radians;
		}
		bottom1 = bottom2 == 0;
	} else {
		bottom1 = true;
	}
	if(bottom1) {
		var _this = r.transform;
		var bottom1;
		if(_this.parent == null) {
			bottom1 = _this.local_y;
		} else {
			_this.sync();
			bottom1 = _this._y;
		}
		bottom = bottom1 + r.local_ey * r.transform.local_scale_y;
	} else {
		var _this = r.transformed_rect;
		var bottom1;
		if(_this.count != 0) {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			bottom1 = _this._vertices[0] == null;
		} else {
			bottom1 = true;
		}
		if(bottom1) {
			var _this1 = _this.transform;
			if(_this1.parent == null) {
				bottom = _this1.local_y;
			} else {
				_this1.sync();
				bottom = _this1._y;
			}
		} else {
			if(_this.dirty_vertices) {
				_this.dirty_vertices = false;
				while(_this._vertices.length > _this.count) _this._vertices.pop();
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					if(_this.local_vertices[i] == null) {
						continue;
					}
					if(_this._vertices[i] == null) {
						var _this1 = _this._vertices;
						var this1 = new echo_math_Vector2Default(0,0);
						_this1[i] = this1;
					}
					var x = _this.local_vertices[i].x;
					var y = _this.local_vertices[i].y;
					if(y == null) {
						y = 0;
					}
					if(x == null) {
						x = 0;
					}
					var a = _this.transform.get_local_to_world_matrix();
					var v_x = x;
					var v_y = y;
					var v_z = 1;
					var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
					var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
					var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
					var pos_x = result_x;
					var pos_y = result_y;
					var v = _this._vertices[i];
					v.x = pos_x;
					v.y = pos_y;
				}
				var _g = 0;
				var _g1 = _this.count;
				while(_g < _g1) {
					var i = _g++;
					var v = _this._vertices[(i + 1) % _this.count];
					var v_x = v.x;
					var v_y = v.y;
					var b = _this._vertices[i];
					var b_x = v_x - b.x;
					var b_y = v_y - b.y;
					v_x = b_x;
					v_y = b_y;
					var x = -v_y;
					v_y = v_x;
					v_x = x;
					if(_this._normals[i] == null) {
						var _this1 = _this._normals;
						var this1 = new echo_math_Vector2Default(v_x,v_y);
						_this1[i] = this1;
					} else {
						var a = _this._normals[i];
						a.x = v_x;
						a.y = v_y;
					}
					var v1 = _this._normals[i];
					var self = v1;
					var self1 = v1;
					var self2 = self1;
					var len_sq = self2.x * self2.x + self2.y * self2.y;
					var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
					var a_x = self1.x / denominator;
					var a_y = self1.y / denominator;
					var b_x1 = a_x;
					var b_y1 = a_y;
					self.x = b_x1;
					self.y = b_y1;
				}
			}
			var bottom1 = _this._vertices[0].y;
			var _g = 1;
			var _g1 = _this.count;
			while(_g < _g1) {
				var i = _g++;
				if(_this.dirty_vertices) {
					_this.dirty_vertices = false;
					while(_this._vertices.length > _this.count) _this._vertices.pop();
					var _g2 = 0;
					var _g3 = _this.count;
					while(_g2 < _g3) {
						var i1 = _g2++;
						if(_this.local_vertices[i1] == null) {
							continue;
						}
						if(_this._vertices[i1] == null) {
							var _this1 = _this._vertices;
							var this1 = new echo_math_Vector2Default(0,0);
							_this1[i1] = this1;
						}
						var x = _this.local_vertices[i1].x;
						var y = _this.local_vertices[i1].y;
						if(y == null) {
							y = 0;
						}
						if(x == null) {
							x = 0;
						}
						var a = _this.transform.get_local_to_world_matrix();
						var v_x = x;
						var v_y = y;
						var v_z = 1;
						var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
						var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
						var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
						var pos_x = result_x;
						var pos_y = result_y;
						var v = _this._vertices[i1];
						v.x = pos_x;
						v.y = pos_y;
					}
					var _g4 = 0;
					var _g5 = _this.count;
					while(_g4 < _g5) {
						var i2 = _g4++;
						var v1 = _this._vertices[(i2 + 1) % _this.count];
						var v_x1 = v1.x;
						var v_y1 = v1.y;
						var b = _this._vertices[i2];
						var b_x = v_x1 - b.x;
						var b_y = v_y1 - b.y;
						v_x1 = b_x;
						v_y1 = b_y;
						var x1 = -v_y1;
						v_y1 = v_x1;
						v_x1 = x1;
						if(_this._normals[i2] == null) {
							var _this2 = _this._normals;
							var this2 = new echo_math_Vector2Default(v_x1,v_y1);
							_this2[i2] = this2;
						} else {
							var a1 = _this._normals[i2];
							a1.x = v_x1;
							a1.y = v_y1;
						}
						var v2 = _this._normals[i2];
						var self = v2;
						var self1 = v2;
						var self2 = self1;
						var len_sq = self2.x * self2.x + self2.y * self2.y;
						var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
						var a_x = self1.x / denominator;
						var a_y = self1.y / denominator;
						var b_x1 = a_x;
						var b_y1 = a_y;
						self.x = b_x1;
						self.y = b_y1;
					}
				}
				if(_this._vertices[i].y > bottom1) {
					if(_this.dirty_vertices) {
						_this.dirty_vertices = false;
						while(_this._vertices.length > _this.count) _this._vertices.pop();
						var _g6 = 0;
						var _g7 = _this.count;
						while(_g6 < _g7) {
							var i3 = _g6++;
							if(_this.local_vertices[i3] == null) {
								continue;
							}
							if(_this._vertices[i3] == null) {
								var _this3 = _this._vertices;
								var this3 = new echo_math_Vector2Default(0,0);
								_this3[i3] = this3;
							}
							var x2 = _this.local_vertices[i3].x;
							var y1 = _this.local_vertices[i3].y;
							if(y1 == null) {
								y1 = 0;
							}
							if(x2 == null) {
								x2 = 0;
							}
							var a2 = _this.transform.get_local_to_world_matrix();
							var v_x2 = x2;
							var v_y2 = y1;
							var v_z1 = 1;
							var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
							var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
							var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
							var pos_x1 = result_x1;
							var pos_y1 = result_y1;
							var v3 = _this._vertices[i3];
							v3.x = pos_x1;
							v3.y = pos_y1;
						}
						var _g8 = 0;
						var _g9 = _this.count;
						while(_g8 < _g9) {
							var i4 = _g8++;
							var v4 = _this._vertices[(i4 + 1) % _this.count];
							var v_x3 = v4.x;
							var v_y3 = v4.y;
							var b1 = _this._vertices[i4];
							var b_x2 = v_x3 - b1.x;
							var b_y2 = v_y3 - b1.y;
							v_x3 = b_x2;
							v_y3 = b_y2;
							var x3 = -v_y3;
							v_y3 = v_x3;
							v_x3 = x3;
							if(_this._normals[i4] == null) {
								var _this4 = _this._normals;
								var this4 = new echo_math_Vector2Default(v_x3,v_y3);
								_this4[i4] = this4;
							} else {
								var a3 = _this._normals[i4];
								a3.x = v_x3;
								a3.y = v_y3;
							}
							var v5 = _this._normals[i4];
							var self3 = v5;
							var self4 = v5;
							var self5 = self4;
							var len_sq1 = self5.x * self5.x + self5.y * self5.y;
							var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
							var a_x1 = self4.x / denominator1;
							var a_y1 = self4.y / denominator1;
							var b_x3 = a_x1;
							var b_y3 = a_y1;
							self3.x = b_x3;
							self3.y = b_y3;
						}
					}
					bottom1 = _this._vertices[i].y;
				}
			}
			bottom = bottom1;
		}
	}
	var x = left;
	var y = top;
	var dx = right;
	var dy = top;
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var line = echo_Line.pool.get();
	var x1 = x;
	var y1 = y;
	var dx1 = dx;
	var dy1 = dy;
	if(dy1 == null) {
		dy1 = 1;
	}
	if(dx1 == null) {
		dx1 = 1;
	}
	if(y1 == null) {
		y1 = 0;
	}
	if(x1 == null) {
		x1 = 0;
	}
	var v = line.start;
	v.x = x1;
	v.y = y1;
	var v = line.end;
	v.x = dx1;
	v.y = dy1;
	line.pooled = false;
	var line1 = line;
	var d = (line1.get_dy() - line1.get_y()) * (l.get_dx() - l.get_x()) - (line1.get_dx() - line1.get_x()) * (l.get_dy() - l.get_y());
	var result;
	if(Math.abs(d) <= 0.00001) {
		result = null;
	} else {
		var ua = ((line1.get_dx() - line1.get_x()) * (l.get_y() - line1.get_y()) - (line1.get_dy() - line1.get_y()) * (l.get_x() - line1.get_x())) / d;
		var ub = ((l.get_dx() - l.get_x()) * (l.get_y() - line1.get_y()) - (l.get_dy() - l.get_y()) * (l.get_x() - line1.get_x())) / d;
		if(ua < 0 || ua > 1 || ub < 0 || ub > 1) {
			result = null;
		} else {
			var a = l.start;
			var lhs = ua;
			var a1 = l.end;
			var b = l.start;
			var this_x = a1.x - b.x;
			var this_y = a1.y - b.y;
			var b_x = this_x * lhs;
			var b_y = this_y * lhs;
			var hit_x = a.x + b_x;
			var hit_y = a.y + b_y;
			var a = l.start;
			var self_x = hit_x - a.x;
			var self_y = hit_y - a.y;
			var distance = Math.sqrt(self_x * self_x + self_y * self_y);
			var a = l.start;
			var b = l.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var overlap = Math.sqrt(self_x * self_x + self_y * self_y) - distance;
			var inverse = d >= 0;
			var a = line1.start;
			var b = line1.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var l2l = Math.sqrt(self_x * self_x + self_y * self_y) * (inverse ? -1 : 1);
			var v = echo_util_SAT.norm;
			var x = (line1.get_dy() - line1.get_y()) / l2l;
			var y = -(line1.get_dx() - line1.get_x()) / l2l;
			v.x = x;
			v.y = y;
			var normal_x = echo_util_SAT.norm.x;
			var normal_y = echo_util_SAT.norm.y;
			var inverse_normal = inverse;
			if(inverse_normal == null) {
				inverse_normal = false;
			}
			var i = echo_data_IntersectionData.pool.get();
			i.line = null;
			i.shape = null;
			i.line2 = null;
			var inverse_normal1 = inverse_normal;
			if(inverse_normal1 == null) {
				inverse_normal1 = false;
			}
			i.distance = distance;
			i.overlap = overlap;
			i.inverse_normal = inverse_normal1;
			var v = i.hit;
			v.x = hit_x;
			v.y = hit_y;
			var v = i.normal;
			v.x = normal_x;
			v.y = normal_y;
			i.pooled = false;
			var data = i;
			data.line = l;
			data.line2 = line1;
			result = data;
		}
	}
	if(result != null) {
		closest = result;
	}
	var x = right;
	var y = top;
	var dx = right;
	var dy = bottom;
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var v = line1.start;
	v.x = x;
	v.y = y;
	var v = line1.end;
	v.x = dx;
	v.y = dy;
	var d = (line1.get_dy() - line1.get_y()) * (l.get_dx() - l.get_x()) - (line1.get_dx() - line1.get_x()) * (l.get_dy() - l.get_y());
	if(Math.abs(d) <= 0.00001) {
		result = null;
	} else {
		var ua = ((line1.get_dx() - line1.get_x()) * (l.get_y() - line1.get_y()) - (line1.get_dy() - line1.get_y()) * (l.get_x() - line1.get_x())) / d;
		var ub = ((l.get_dx() - l.get_x()) * (l.get_y() - line1.get_y()) - (l.get_dy() - l.get_y()) * (l.get_x() - line1.get_x())) / d;
		if(ua < 0 || ua > 1 || ub < 0 || ub > 1) {
			result = null;
		} else {
			var a = l.start;
			var lhs = ua;
			var a1 = l.end;
			var b = l.start;
			var this_x = a1.x - b.x;
			var this_y = a1.y - b.y;
			var b_x = this_x * lhs;
			var b_y = this_y * lhs;
			var hit_x = a.x + b_x;
			var hit_y = a.y + b_y;
			var a = l.start;
			var self_x = hit_x - a.x;
			var self_y = hit_y - a.y;
			var distance = Math.sqrt(self_x * self_x + self_y * self_y);
			var a = l.start;
			var b = l.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var overlap = Math.sqrt(self_x * self_x + self_y * self_y) - distance;
			var inverse = d >= 0;
			var a = line1.start;
			var b = line1.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var l2l = Math.sqrt(self_x * self_x + self_y * self_y) * (inverse ? -1 : 1);
			var v = echo_util_SAT.norm;
			var x = (line1.get_dy() - line1.get_y()) / l2l;
			var y = -(line1.get_dx() - line1.get_x()) / l2l;
			v.x = x;
			v.y = y;
			var normal_x = echo_util_SAT.norm.x;
			var normal_y = echo_util_SAT.norm.y;
			var inverse_normal = inverse;
			if(inverse_normal == null) {
				inverse_normal = false;
			}
			var i = echo_data_IntersectionData.pool.get();
			i.line = null;
			i.shape = null;
			i.line2 = null;
			var inverse_normal1 = inverse_normal;
			if(inverse_normal1 == null) {
				inverse_normal1 = false;
			}
			i.distance = distance;
			i.overlap = overlap;
			i.inverse_normal = inverse_normal1;
			var v = i.hit;
			v.x = hit_x;
			v.y = hit_y;
			var v = i.normal;
			v.x = normal_x;
			v.y = normal_y;
			i.pooled = false;
			var data = i;
			data.line = l;
			data.line2 = line1;
			result = data;
		}
	}
	if(result != null && (closest == null || closest.distance > result.distance)) {
		closest = result;
	}
	var x = right;
	var y = bottom;
	var dx = left;
	var dy = bottom;
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var v = line1.start;
	v.x = x;
	v.y = y;
	var v = line1.end;
	v.x = dx;
	v.y = dy;
	var d = (line1.get_dy() - line1.get_y()) * (l.get_dx() - l.get_x()) - (line1.get_dx() - line1.get_x()) * (l.get_dy() - l.get_y());
	if(Math.abs(d) <= 0.00001) {
		result = null;
	} else {
		var ua = ((line1.get_dx() - line1.get_x()) * (l.get_y() - line1.get_y()) - (line1.get_dy() - line1.get_y()) * (l.get_x() - line1.get_x())) / d;
		var ub = ((l.get_dx() - l.get_x()) * (l.get_y() - line1.get_y()) - (l.get_dy() - l.get_y()) * (l.get_x() - line1.get_x())) / d;
		if(ua < 0 || ua > 1 || ub < 0 || ub > 1) {
			result = null;
		} else {
			var a = l.start;
			var lhs = ua;
			var a1 = l.end;
			var b = l.start;
			var this_x = a1.x - b.x;
			var this_y = a1.y - b.y;
			var b_x = this_x * lhs;
			var b_y = this_y * lhs;
			var hit_x = a.x + b_x;
			var hit_y = a.y + b_y;
			var a = l.start;
			var self_x = hit_x - a.x;
			var self_y = hit_y - a.y;
			var distance = Math.sqrt(self_x * self_x + self_y * self_y);
			var a = l.start;
			var b = l.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var overlap = Math.sqrt(self_x * self_x + self_y * self_y) - distance;
			var inverse = d >= 0;
			var a = line1.start;
			var b = line1.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var l2l = Math.sqrt(self_x * self_x + self_y * self_y) * (inverse ? -1 : 1);
			var v = echo_util_SAT.norm;
			var x = (line1.get_dy() - line1.get_y()) / l2l;
			var y = -(line1.get_dx() - line1.get_x()) / l2l;
			v.x = x;
			v.y = y;
			var normal_x = echo_util_SAT.norm.x;
			var normal_y = echo_util_SAT.norm.y;
			var inverse_normal = inverse;
			if(inverse_normal == null) {
				inverse_normal = false;
			}
			var i = echo_data_IntersectionData.pool.get();
			i.line = null;
			i.shape = null;
			i.line2 = null;
			var inverse_normal1 = inverse_normal;
			if(inverse_normal1 == null) {
				inverse_normal1 = false;
			}
			i.distance = distance;
			i.overlap = overlap;
			i.inverse_normal = inverse_normal1;
			var v = i.hit;
			v.x = hit_x;
			v.y = hit_y;
			var v = i.normal;
			v.x = normal_x;
			v.y = normal_y;
			i.pooled = false;
			var data = i;
			data.line = l;
			data.line2 = line1;
			result = data;
		}
	}
	if(result != null && (closest == null || closest.distance > result.distance)) {
		closest = result;
	}
	var x = left;
	var y = bottom;
	var dx = left;
	var dy = top;
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var v = line1.start;
	v.x = x;
	v.y = y;
	var v = line1.end;
	v.x = dx;
	v.y = dy;
	var d = (line1.get_dy() - line1.get_y()) * (l.get_dx() - l.get_x()) - (line1.get_dx() - line1.get_x()) * (l.get_dy() - l.get_y());
	if(Math.abs(d) <= 0.00001) {
		result = null;
	} else {
		var ua = ((line1.get_dx() - line1.get_x()) * (l.get_y() - line1.get_y()) - (line1.get_dy() - line1.get_y()) * (l.get_x() - line1.get_x())) / d;
		var ub = ((l.get_dx() - l.get_x()) * (l.get_y() - line1.get_y()) - (l.get_dy() - l.get_y()) * (l.get_x() - line1.get_x())) / d;
		if(ua < 0 || ua > 1 || ub < 0 || ub > 1) {
			result = null;
		} else {
			var a = l.start;
			var lhs = ua;
			var a1 = l.end;
			var b = l.start;
			var this_x = a1.x - b.x;
			var this_y = a1.y - b.y;
			var b_x = this_x * lhs;
			var b_y = this_y * lhs;
			var hit_x = a.x + b_x;
			var hit_y = a.y + b_y;
			var a = l.start;
			var self_x = hit_x - a.x;
			var self_y = hit_y - a.y;
			var distance = Math.sqrt(self_x * self_x + self_y * self_y);
			var a = l.start;
			var b = l.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var overlap = Math.sqrt(self_x * self_x + self_y * self_y) - distance;
			var inverse = d >= 0;
			var a = line1.start;
			var b = line1.end;
			var self_x = b.x - a.x;
			var self_y = b.y - a.y;
			var l2l = Math.sqrt(self_x * self_x + self_y * self_y) * (inverse ? -1 : 1);
			var v = echo_util_SAT.norm;
			var x = (line1.get_dy() - line1.get_y()) / l2l;
			var y = -(line1.get_dx() - line1.get_x()) / l2l;
			v.x = x;
			v.y = y;
			var normal_x = echo_util_SAT.norm.x;
			var normal_y = echo_util_SAT.norm.y;
			var inverse_normal = inverse;
			if(inverse_normal == null) {
				inverse_normal = false;
			}
			var i = echo_data_IntersectionData.pool.get();
			i.line = null;
			i.shape = null;
			i.line2 = null;
			var inverse_normal1 = inverse_normal;
			if(inverse_normal1 == null) {
				inverse_normal1 = false;
			}
			i.distance = distance;
			i.overlap = overlap;
			i.inverse_normal = inverse_normal1;
			var v = i.hit;
			v.x = hit_x;
			v.y = hit_y;
			var v = i.normal;
			v.x = normal_x;
			v.y = normal_y;
			i.pooled = false;
			var data = i;
			data.line = l;
			data.line2 = line1;
			result = data;
		}
	}
	if(result != null && (closest == null || closest.distance > result.distance)) {
		closest = result;
	}
	if(closest != null) {
		closest.line = l;
		closest.shape = r;
	}
	return closest;
};
echo_util_SAT.line_intersects_circle = function(l,c) {
	var a = l.end;
	var b = l.start;
	var d_x = a.x - b.x;
	var d_y = a.y - b.y;
	var a = l.start;
	var _this = c.transform;
	_this.sync();
	var b_x = _this._x;
	var b_y = _this._y;
	var f_x = a.x - b_x;
	var f_y = a.y - b_y;
	var c1 = c.local_radius;
	var _this = c.transform;
	var r;
	if(_this.parent == null) {
		r = _this.local_scale_x;
	} else {
		_this.sync();
		r = _this._scale_x;
	}
	var r1 = c1 * r;
	var a = d_x * d_x + d_y * d_y;
	var b = 2 * (f_x * d_x + f_y * d_y);
	var e = f_x * f_x + f_y * f_y - r1 * r1;
	var discriminant = b * b - 4 * a * e;
	if(discriminant < 0) {
		return null;
	}
	discriminant = Math.sqrt(discriminant);
	var t1 = (-b - discriminant) / (2 * a);
	var t2 = (-b + discriminant) / (2 * a);
	if(t1 >= 0 && t1 <= 1) {
		var a = l.start;
		var lhs = t1;
		var a1 = l.end;
		var b = l.start;
		var this_x = a1.x - b.x;
		var this_y = a1.y - b.y;
		var b_x = this_x * lhs;
		var b_y = this_y * lhs;
		var hit_x = a.x + b_x;
		var hit_y = a.y + b_y;
		var a = l.start;
		var self_x = hit_x - a.x;
		var self_y = hit_y - a.y;
		var distance = Math.sqrt(self_x * self_x + self_y * self_y);
		var a = l.start;
		var b = l.end;
		var self_x = b.x - a.x;
		var self_y = b.y - a.y;
		var overlap = Math.sqrt(self_x * self_x + self_y * self_y) - distance;
		var v = echo_util_SAT.norm;
		var _this = c.transform;
		var x;
		if(_this.parent == null) {
			x = _this.local_x;
		} else {
			_this.sync();
			x = _this._x;
		}
		var _this = c.transform;
		var y;
		if(_this.parent == null) {
			y = _this.local_y;
		} else {
			_this.sync();
			y = _this._y;
		}
		v.x = hit_x - x;
		v.y = hit_y - y;
		var a = echo_util_SAT.norm;
		var b_x = a.x / r1;
		var b_y = a.y / r1;
		a.x = b_x;
		a.y = b_y;
		var normal_x = echo_util_SAT.norm.x;
		var normal_y = echo_util_SAT.norm.y;
		var i = echo_data_IntersectionData.pool.get();
		i.line = null;
		i.shape = null;
		i.line2 = null;
		var inverse_normal = false;
		if(inverse_normal == null) {
			inverse_normal = false;
		}
		i.distance = distance;
		i.overlap = overlap;
		i.inverse_normal = inverse_normal;
		var v = i.hit;
		v.x = hit_x;
		v.y = hit_y;
		var v = i.normal;
		v.x = normal_x;
		v.y = normal_y;
		i.pooled = false;
		var i1 = i;
		i1.line = l;
		i1.shape = c;
		return i1;
	}
	if(t2 >= 0 && t2 <= 1) {
		var a = l.start;
		var lhs = t2;
		var a1 = l.end;
		var b = l.start;
		var this_x = a1.x - b.x;
		var this_y = a1.y - b.y;
		var b_x = this_x * lhs;
		var b_y = this_y * lhs;
		var hit_x = a.x + b_x;
		var hit_y = a.y + b_y;
		var a = l.start;
		var self_x = hit_x - a.x;
		var self_y = hit_y - a.y;
		var distance = Math.sqrt(self_x * self_x + self_y * self_y);
		var a = l.start;
		var b = l.end;
		var self_x = b.x - a.x;
		var self_y = b.y - a.y;
		var overlap = Math.sqrt(self_x * self_x + self_y * self_y) - distance;
		var v = echo_util_SAT.norm;
		var _this = c.transform;
		var x;
		if(_this.parent == null) {
			x = _this.local_x;
		} else {
			_this.sync();
			x = _this._x;
		}
		var _this = c.transform;
		var y;
		if(_this.parent == null) {
			y = _this.local_y;
		} else {
			_this.sync();
			y = _this._y;
		}
		v.x = hit_x - x;
		v.y = hit_y - y;
		var a = echo_util_SAT.norm;
		var a1 = echo_util_SAT.norm;
		var a_x = -a1.x;
		var a_y = -a1.y;
		var b_x = a_x / r1;
		var b_y = a_y / r1;
		a.x = b_x;
		a.y = b_y;
		var normal_x = echo_util_SAT.norm.x;
		var normal_y = echo_util_SAT.norm.y;
		var inverse_normal = true;
		if(inverse_normal == null) {
			inverse_normal = false;
		}
		var i = echo_data_IntersectionData.pool.get();
		i.line = null;
		i.shape = null;
		i.line2 = null;
		var inverse_normal1 = inverse_normal;
		if(inverse_normal1 == null) {
			inverse_normal1 = false;
		}
		i.distance = distance;
		i.overlap = overlap;
		i.inverse_normal = inverse_normal1;
		var v = i.hit;
		v.x = hit_x;
		v.y = hit_y;
		var v = i.normal;
		v.x = normal_x;
		v.y = normal_y;
		i.pooled = false;
		var i1 = i;
		i1.line = l;
		i1.shape = c;
		return i1;
	}
	return null;
};
echo_util_SAT.line_intersects_polygon = function(l,p) {
	var closest = null;
	var line = echo_Line.pool.get();
	var x = 0;
	var y = 0;
	var dx = 1;
	var dy = 1;
	if(dy == null) {
		dy = 1;
	}
	if(dx == null) {
		dx = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	var v = line.start;
	v.x = x;
	v.y = y;
	var v = line.end;
	v.x = dx;
	v.y = dy;
	line.pooled = false;
	var line1 = line;
	var _g = 0;
	var _g1 = p.count;
	while(_g < _g1) {
		var i = _g++;
		if(p.dirty_vertices) {
			p.dirty_vertices = false;
			while(p._vertices.length > p.count) p._vertices.pop();
			var _g2 = 0;
			var _g3 = p.count;
			while(_g2 < _g3) {
				var i1 = _g2++;
				if(p.local_vertices[i1] == null) {
					continue;
				}
				if(p._vertices[i1] == null) {
					var p1 = p._vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					p1[i1] = this1;
				}
				var x = p.local_vertices[i1].x;
				var y = p.local_vertices[i1].y;
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				var a = p.transform.get_local_to_world_matrix();
				var v_x = x;
				var v_y = y;
				var v_z = 1;
				var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
				var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
				var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
				var pos_x = result_x;
				var pos_y = result_y;
				var v = p._vertices[i1];
				v.x = pos_x;
				v.y = pos_y;
			}
			var _g4 = 0;
			var _g5 = p.count;
			while(_g4 < _g5) {
				var i2 = _g4++;
				var v1 = p._vertices[(i2 + 1) % p.count];
				var v_x1 = v1.x;
				var v_y1 = v1.y;
				var b = p._vertices[i2];
				var b_x = v_x1 - b.x;
				var b_y = v_y1 - b.y;
				v_x1 = b_x;
				v_y1 = b_y;
				var x1 = -v_y1;
				v_y1 = v_x1;
				v_x1 = x1;
				if(p._normals[i2] == null) {
					var p2 = p._normals;
					var this2 = new echo_math_Vector2Default(v_x1,v_y1);
					p2[i2] = this2;
				} else {
					var a1 = p._normals[i2];
					a1.x = v_x1;
					a1.y = v_y1;
				}
				var v2 = p._normals[i2];
				var self = v2;
				var self1 = v2;
				var self2 = self1;
				var len_sq = self2.x * self2.x + self2.y * self2.y;
				var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
				var a_x = self1.x / denominator;
				var a_y = self1.y / denominator;
				var b_x1 = a_x;
				var b_y1 = a_y;
				self.x = b_x1;
				self.y = b_y1;
			}
		}
		var start = p._vertices[i];
		if(p.dirty_vertices) {
			p.dirty_vertices = false;
			while(p._vertices.length > p.count) p._vertices.pop();
			var _g6 = 0;
			var _g7 = p.count;
			while(_g6 < _g7) {
				var i3 = _g6++;
				if(p.local_vertices[i3] == null) {
					continue;
				}
				if(p._vertices[i3] == null) {
					var p3 = p._vertices;
					var this3 = new echo_math_Vector2Default(0,0);
					p3[i3] = this3;
				}
				var x2 = p.local_vertices[i3].x;
				var y1 = p.local_vertices[i3].y;
				if(y1 == null) {
					y1 = 0;
				}
				if(x2 == null) {
					x2 = 0;
				}
				var a2 = p.transform.get_local_to_world_matrix();
				var v_x2 = x2;
				var v_y2 = y1;
				var v_z1 = 1;
				var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
				var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
				var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
				var pos_x1 = result_x1;
				var pos_y1 = result_y1;
				var v3 = p._vertices[i3];
				v3.x = pos_x1;
				v3.y = pos_y1;
			}
			var _g8 = 0;
			var _g9 = p.count;
			while(_g8 < _g9) {
				var i4 = _g8++;
				var v4 = p._vertices[(i4 + 1) % p.count];
				var v_x3 = v4.x;
				var v_y3 = v4.y;
				var b1 = p._vertices[i4];
				var b_x2 = v_x3 - b1.x;
				var b_y2 = v_y3 - b1.y;
				v_x3 = b_x2;
				v_y3 = b_y2;
				var x3 = -v_y3;
				v_y3 = v_x3;
				v_x3 = x3;
				if(p._normals[i4] == null) {
					var p4 = p._normals;
					var this4 = new echo_math_Vector2Default(v_x3,v_y3);
					p4[i4] = this4;
				} else {
					var a3 = p._normals[i4];
					a3.x = v_x3;
					a3.y = v_y3;
				}
				var v5 = p._normals[i4];
				var self3 = v5;
				var self4 = v5;
				var self5 = self4;
				var len_sq1 = self5.x * self5.x + self5.y * self5.y;
				var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
				var a_x1 = self4.x / denominator1;
				var a_y1 = self4.y / denominator1;
				var b_x3 = a_x1;
				var b_y3 = a_y1;
				self3.x = b_x3;
				self3.y = b_y3;
			}
		}
		var end = p._vertices[(i + 1) % p.count];
		var x4 = start.x;
		var y2 = start.y;
		var dx = end.x;
		var dy = end.y;
		if(dy == null) {
			dy = 1;
		}
		if(dx == null) {
			dx = 1;
		}
		if(y2 == null) {
			y2 = 0;
		}
		if(x4 == null) {
			x4 = 0;
		}
		var v6 = line1.start;
		v6.x = x4;
		v6.y = y2;
		var v7 = line1.end;
		v7.x = dx;
		v7.y = dy;
		var d = (line1.get_dy() - line1.get_y()) * (l.get_dx() - l.get_x()) - (line1.get_dx() - line1.get_x()) * (l.get_dy() - l.get_y());
		var result;
		if(Math.abs(d) <= 0.00001) {
			result = null;
		} else {
			var ua = ((line1.get_dx() - line1.get_x()) * (l.get_y() - line1.get_y()) - (line1.get_dy() - line1.get_y()) * (l.get_x() - line1.get_x())) / d;
			var ub = ((l.get_dx() - l.get_x()) * (l.get_y() - line1.get_y()) - (l.get_dy() - l.get_y()) * (l.get_x() - line1.get_x())) / d;
			if(ua < 0 || ua > 1 || ub < 0 || ub > 1) {
				result = null;
			} else {
				var a4 = l.start;
				var lhs = ua;
				var a5 = l.end;
				var b2 = l.start;
				var this_x = a5.x - b2.x;
				var this_y = a5.y - b2.y;
				var b_x4 = this_x * lhs;
				var b_y4 = this_y * lhs;
				var hit_x = a4.x + b_x4;
				var hit_y = a4.y + b_y4;
				var a6 = l.start;
				var self_x = hit_x - a6.x;
				var self_y = hit_y - a6.y;
				var distance = Math.sqrt(self_x * self_x + self_y * self_y);
				var a7 = l.start;
				var b3 = l.end;
				var self_x1 = b3.x - a7.x;
				var self_y1 = b3.y - a7.y;
				var overlap = Math.sqrt(self_x1 * self_x1 + self_y1 * self_y1) - distance;
				var inverse = d >= 0;
				var a8 = line1.start;
				var b4 = line1.end;
				var self_x2 = b4.x - a8.x;
				var self_y2 = b4.y - a8.y;
				var l2l = Math.sqrt(self_x2 * self_x2 + self_y2 * self_y2) * (inverse ? -1 : 1);
				var v8 = echo_util_SAT.norm;
				var x5 = (line1.get_dy() - line1.get_y()) / l2l;
				var y3 = -(line1.get_dx() - line1.get_x()) / l2l;
				v8.x = x5;
				v8.y = y3;
				var normal_x = echo_util_SAT.norm.x;
				var normal_y = echo_util_SAT.norm.y;
				var inverse_normal = inverse;
				if(inverse_normal == null) {
					inverse_normal = false;
				}
				var i5 = echo_data_IntersectionData.pool.get();
				i5.line = null;
				i5.shape = null;
				i5.line2 = null;
				var inverse_normal1 = inverse_normal;
				if(inverse_normal1 == null) {
					inverse_normal1 = false;
				}
				i5.distance = distance;
				i5.overlap = overlap;
				i5.inverse_normal = inverse_normal1;
				var v9 = i5.hit;
				v9.x = hit_x;
				v9.y = hit_y;
				var v10 = i5.normal;
				v10.x = normal_x;
				v10.y = normal_y;
				i5.pooled = false;
				var data = i5;
				data.line = l;
				data.line2 = line1;
				result = data;
			}
		}
		if(result != null && (closest == null || closest.distance > result.distance)) {
			closest = result;
		}
	}
	if(closest != null) {
		closest.line = l;
		closest.shape = p;
	}
	return closest;
};
echo_util_SAT.rect_and_rect = function(rect1,rect2,flip) {
	if(flip == null) {
		flip = false;
	}
	var col = null;
	var tmp;
	var _this = rect1.transform;
	var tmp1;
	if(_this.parent == null) {
		tmp1 = 180 / Math.PI * _this.local_radians;
	} else {
		_this.sync();
		tmp1 = 180 / Math.PI * _this._radians;
	}
	if(tmp1 == 0) {
		var _this = rect2.transform;
		var tmp1;
		if(_this.parent == null) {
			tmp1 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			tmp1 = 180 / Math.PI * _this._radians;
		}
		tmp = tmp1 != 0;
	} else {
		tmp = true;
	}
	if(tmp) {
		if(rect1.transformed_rect != null) {
			col = echo_util_SAT.rect_and_polygon(rect2,rect1.transformed_rect,flip);
			if(col == null) {
				return null;
			}
			if(flip) {
				col.sa = rect1;
			} else {
				col.sb = rect1;
			}
			return col;
		}
		if(rect2.transformed_rect != null) {
			col = echo_util_SAT.rect_and_polygon(rect1,rect2.transformed_rect,!flip);
			if(col == null) {
				return null;
			}
			if(flip) {
				col.sa = rect2;
			} else {
				col.sb = rect2;
			}
			return col;
		}
	}
	var sa = flip ? rect2 : rect1;
	var sb = flip ? rect1 : rect2;
	var _this = sb.transform;
	var nx;
	if(_this.parent == null) {
		nx = _this.local_x;
	} else {
		_this.sync();
		nx = _this._x;
	}
	var _this = sa.transform;
	var nx1;
	if(_this.parent == null) {
		nx1 = _this.local_x;
	} else {
		_this.sync();
		nx1 = _this._x;
	}
	var nx2 = nx - nx1;
	var _this = sb.transform;
	var ny;
	if(_this.parent == null) {
		ny = _this.local_y;
	} else {
		_this.sync();
		ny = _this._y;
	}
	var _this = sa.transform;
	var ny1;
	if(_this.parent == null) {
		ny1 = _this.local_y;
	} else {
		_this.sync();
		ny1 = _this._y;
	}
	var ny2 = ny - ny1;
	var x_overlap = sa.local_ex * sa.transform.local_scale_x + sb.local_ex * sb.transform.local_scale_x - Math.abs(nx2);
	if(x_overlap > 0) {
		var y_overlap = sa.local_ey * sa.transform.local_scale_y + sb.local_ey * sb.transform.local_scale_y - Math.abs(ny2);
		if(y_overlap > 0) {
			if(x_overlap < y_overlap) {
				var c = echo_data_CollisionData.pool.get();
				c.sa = null;
				c.sb = null;
				c.contact_count = 0;
				var _g = 0;
				var _g1 = c.contacts;
				while(_g < _g1.length) {
					var cc = _g1[_g];
					++_g;
					cc.x = 0;
					cc.y = 0;
				}
				c.overlap = x_overlap;
				var v = c.normal;
				v.x = nx2 < 0 ? -1 : 1;
				v.y = 0;
				c.pooled = false;
				col = c;
			} else {
				var c = echo_data_CollisionData.pool.get();
				c.sa = null;
				c.sb = null;
				c.contact_count = 0;
				var _g = 0;
				var _g1 = c.contacts;
				while(_g < _g1.length) {
					var cc = _g1[_g];
					++_g;
					cc.x = 0;
					cc.y = 0;
				}
				c.overlap = y_overlap;
				var v = c.normal;
				v.x = 0;
				v.y = ny2 < 0 ? -1 : 1;
				c.pooled = false;
				col = c;
			}
			col.sa = sa;
			col.sb = sb;
		}
	}
	return col;
};
echo_util_SAT.circle_and_circle = function(circle1,circle2,flip) {
	if(flip == null) {
		flip = false;
	}
	var sa = flip ? circle2 : circle1;
	var sb = flip ? circle1 : circle2;
	var _this = sb.transform;
	var nx;
	if(_this.parent == null) {
		nx = _this.local_x;
	} else {
		_this.sync();
		nx = _this._x;
	}
	var _this = sa.transform;
	var nx1;
	if(_this.parent == null) {
		nx1 = _this.local_x;
	} else {
		_this.sync();
		nx1 = _this._x;
	}
	var nx2 = nx - nx1;
	var _this = sb.transform;
	var ny;
	if(_this.parent == null) {
		ny = _this.local_y;
	} else {
		_this.sync();
		ny = _this._y;
	}
	var _this = sa.transform;
	var ny1;
	if(_this.parent == null) {
		ny1 = _this.local_y;
	} else {
		_this.sync();
		ny1 = _this._y;
	}
	var ny2 = ny - ny1;
	var sa1 = sa.local_radius;
	var _this = sa.transform;
	var r;
	if(_this.parent == null) {
		r = _this.local_scale_x;
	} else {
		_this.sync();
		r = _this._scale_x;
	}
	var sb1 = sb.local_radius;
	var _this = sb.transform;
	var r1;
	if(_this.parent == null) {
		r1 = _this.local_scale_x;
	} else {
		_this.sync();
		r1 = _this._scale_x;
	}
	var r2 = sa1 * r + sb1 * r1;
	var d = nx2 * nx2 + ny2 * ny2;
	var col = null;
	if(d >= r2 * r2) {
		return col;
	} else if(Math.abs(d) <= 0.00001) {
		var sa1 = sa.local_radius;
		var _this = sa.transform;
		var overlap;
		if(_this.parent == null) {
			overlap = _this.local_scale_x;
		} else {
			_this.sync();
			overlap = _this._scale_x;
		}
		var overlap1 = sa1 * overlap;
		var c = echo_data_CollisionData.pool.get();
		c.sa = null;
		c.sb = null;
		c.contact_count = 0;
		var _g = 0;
		var _g1 = c.contacts;
		while(_g < _g1.length) {
			var cc = _g1[_g];
			++_g;
			cc.x = 0;
			cc.y = 0;
		}
		c.overlap = overlap1;
		var v = c.normal;
		v.x = 1;
		v.y = 0;
		c.pooled = false;
		col = c;
	} else {
		d = Math.sqrt(d);
		nx2 /= d;
		ny2 /= d;
		var c = echo_data_CollisionData.pool.get();
		c.sa = null;
		c.sb = null;
		c.contact_count = 0;
		var _g = 0;
		var _g1 = c.contacts;
		while(_g < _g1.length) {
			var cc = _g1[_g];
			++_g;
			cc.x = 0;
			cc.y = 0;
		}
		c.overlap = r2 - d;
		var v = c.normal;
		v.x = nx2;
		v.y = ny2;
		c.pooled = false;
		col = c;
	}
	col.sa = sa;
	col.sb = sb;
	return col;
};
echo_util_SAT.polygon_and_polygon = function(polygon1,polygon2,flip) {
	if(flip == null) {
		flip = false;
	}
	var data1 = echo_util_SAT.check_polygons(polygon1,polygon2,flip);
	if(data1 == null) {
		return null;
	}
	var data2 = echo_util_SAT.check_polygons(polygon2,polygon1,!flip);
	if(data2 == null) {
		return null;
	}
	if(data1.overlap < 0) {
		data1.overlap = Math.abs(data1.overlap);
	}
	if(data2.overlap < 0) {
		data2.overlap = Math.abs(data2.overlap);
	}
	if(data1.overlap < data2.overlap) {
		data2.put();
		return data1;
	}
	data1.put();
	return data2;
};
echo_util_SAT.rect_and_circle = function(r,c,flip) {
	if(flip == null) {
		flip = false;
	}
	var tmp;
	if(r.transformed_rect != null) {
		var _this = r.transform;
		var tmp1;
		if(_this.parent == null) {
			tmp1 = 180 / Math.PI * _this.local_radians;
		} else {
			_this.sync();
			tmp1 = 180 / Math.PI * _this._radians;
		}
		tmp = tmp1 != 0;
	} else {
		tmp = false;
	}
	if(tmp) {
		var col = echo_util_SAT.circle_and_polygon(c,r.transformed_rect,flip);
		if(col == null) {
			return null;
		}
		if(flip) {
			col.sa = r;
		} else {
			col.sb = r;
		}
		return col;
	}
	var nx;
	if(flip) {
		var _this = c.transform;
		var nx1;
		if(_this.parent == null) {
			nx1 = _this.local_x;
		} else {
			_this.sync();
			nx1 = _this._x;
		}
		var _this = r.transform;
		var nx2;
		if(_this.parent == null) {
			nx2 = _this.local_x;
		} else {
			_this.sync();
			nx2 = _this._x;
		}
		nx = nx1 - nx2;
	} else {
		var _this = r.transform;
		var nx1;
		if(_this.parent == null) {
			nx1 = _this.local_x;
		} else {
			_this.sync();
			nx1 = _this._x;
		}
		var _this = c.transform;
		var nx2;
		if(_this.parent == null) {
			nx2 = _this.local_x;
		} else {
			_this.sync();
			nx2 = _this._x;
		}
		nx = nx1 - nx2;
	}
	var ny;
	if(flip) {
		var _this = c.transform;
		var ny1;
		if(_this.parent == null) {
			ny1 = _this.local_y;
		} else {
			_this.sync();
			ny1 = _this._y;
		}
		var _this = r.transform;
		var ny2;
		if(_this.parent == null) {
			ny2 = _this.local_y;
		} else {
			_this.sync();
			ny2 = _this._y;
		}
		ny = ny1 - ny2;
	} else {
		var _this = r.transform;
		var ny1;
		if(_this.parent == null) {
			ny1 = _this.local_y;
		} else {
			_this.sync();
			ny1 = _this._y;
		}
		var _this = c.transform;
		var ny2;
		if(_this.parent == null) {
			ny2 = _this.local_y;
		} else {
			_this.sync();
			ny2 = _this._y;
		}
		ny = ny1 - ny2;
	}
	var cx = nx;
	var cy = ny;
	var min = -(r.local_ex * r.transform.local_scale_x);
	var max = r.local_ex * r.transform.local_scale_x;
	if(cx < min) {
		cx = min;
	} else if(cx > max) {
		cx = max;
	}
	var min = -(r.local_ey * r.transform.local_scale_y);
	var max = r.local_ey * r.transform.local_scale_y;
	if(cy < min) {
		cy = min;
	} else if(cy > max) {
		cy = max;
	}
	var inside = false;
	var c1 = c.local_radius;
	var _this = c.transform;
	var rad;
	if(_this.parent == null) {
		rad = _this.local_scale_x;
	} else {
		_this.sync();
		rad = _this._scale_x;
	}
	var rad1 = c1 * rad;
	if(Math.abs(nx - cx) <= 0.00001 && Math.abs(ny - cy) <= 0.00001) {
		inside = true;
		if(Math.abs(nx) > Math.abs(ny)) {
			cx = cx > 0 ? r.local_ex * r.transform.local_scale_x + rad1 + 0.1 : -(r.local_ex * r.transform.local_scale_x) - rad1 - 0.1;
		} else {
			cy = cy > 0 ? r.local_ey * r.transform.local_scale_y + rad1 + 0.1 : -(r.local_ey * r.transform.local_scale_y) - rad1 - 0.1;
		}
	}
	nx -= cx;
	ny -= cy;
	var d = nx * nx + ny * ny;
	if(d > rad1 * rad1 && !inside) {
		return null;
	}
	d = Math.sqrt(d);
	nx /= d;
	ny /= d;
	if(inside) {
		nx *= -1;
		ny *= -1;
	}
	var overlap = Math.abs(rad1 - d);
	var c1 = echo_data_CollisionData.pool.get();
	c1.sa = null;
	c1.sb = null;
	c1.contact_count = 0;
	var _g = 0;
	var _g1 = c1.contacts;
	while(_g < _g1.length) {
		var cc = _g1[_g];
		++_g;
		cc.x = 0;
		cc.y = 0;
	}
	c1.overlap = overlap;
	var v = c1.normal;
	v.x = nx;
	v.y = ny;
	c1.pooled = false;
	var col = c1;
	col.sa = flip ? c : r;
	col.sb = flip ? r : c;
	return col;
};
echo_util_SAT.rect_and_polygon = function(r,p,flip) {
	if(flip == null) {
		flip = false;
	}
	var col = null;
	if(r.transformed_rect != null) {
		col = echo_util_SAT.polygon_and_polygon(r.transformed_rect,p,flip);
	} else {
		var polygon = echo_shape_Polygon.pool.get();
		polygon.count = 4;
		var _g = 0;
		var _g1 = polygon.count;
		while(_g < _g1) {
			var i = _g++;
			if(polygon.local_vertices[i] == null) {
				var polygon1 = polygon.local_vertices;
				var this1 = new echo_math_Vector2Default(0,0);
				polygon1[i] = this1;
			}
		}
		var v = polygon.local_vertices[0];
		v.x = -(r.local_ex * r.transform.local_scale_x);
		v.y = -(r.local_ey * r.transform.local_scale_y);
		var v = polygon.local_vertices[1];
		v.x = r.local_ex * r.transform.local_scale_x;
		v.y = -(r.local_ey * r.transform.local_scale_y);
		var v = polygon.local_vertices[2];
		v.x = r.local_ex * r.transform.local_scale_x;
		v.y = r.local_ey * r.transform.local_scale_y;
		var v = polygon.local_vertices[3];
		v.x = -(r.local_ex * r.transform.local_scale_x);
		v.y = r.local_ey * r.transform.local_scale_y;
		var v = r.transform.local_x;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_x = v;
		var v = r.transform.local_y;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_y = v;
		var _this = polygon.transform;
		var v = Math.PI / 180 * (180 / Math.PI * r.transform.local_radians);
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_radians = v;
		var v = r.transform.local_scale_x;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_x = v;
		var v = r.transform.local_scale_y;
		var _this = polygon.transform;
		if(!_this.dirty) {
			_this.set_dirty();
		}
		_this.local_scale_y = v;
		polygon.dirty_vertices = true;
		polygon.dirty_bounds = true;
		polygon.pooled = false;
		var tr = polygon;
		tr.set_parent(r.parent);
		col = echo_util_SAT.polygon_and_polygon(tr,p,flip);
		tr.put();
	}
	if(col == null) {
		return null;
	}
	if(flip) {
		col.sb = r;
	} else {
		col.sa = r;
	}
	return col;
};
echo_util_SAT.circle_and_polygon = function(c,p,flip) {
	if(flip == null) {
		flip = false;
	}
	var distance = 0;
	var testDistance = 1073741823;
	var _this = c.transform;
	_this.sync();
	var c_pos_x = _this._x;
	var c_pos_y = _this._y;
	var c1 = c.local_radius;
	var _this = c.transform;
	var c_rad;
	if(_this.parent == null) {
		c_rad = _this.local_scale_x;
	} else {
		_this.sync();
		c_rad = _this._scale_x;
	}
	var c_rad1 = c1 * c_rad;
	var _g = 0;
	var _g1 = p.count;
	while(_g < _g1) {
		var i = _g++;
		if(p.dirty_vertices) {
			p.dirty_vertices = false;
			while(p._vertices.length > p.count) p._vertices.pop();
			var _g2 = 0;
			var _g3 = p.count;
			while(_g2 < _g3) {
				var i1 = _g2++;
				if(p.local_vertices[i1] == null) {
					continue;
				}
				if(p._vertices[i1] == null) {
					var p1 = p._vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					p1[i1] = this1;
				}
				var x = p.local_vertices[i1].x;
				var y = p.local_vertices[i1].y;
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				var a = p.transform.get_local_to_world_matrix();
				var v_x = x;
				var v_y = y;
				var v_z = 1;
				var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
				var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
				var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
				var pos_x = result_x;
				var pos_y = result_y;
				var v = p._vertices[i1];
				v.x = pos_x;
				v.y = pos_y;
			}
			var _g4 = 0;
			var _g5 = p.count;
			while(_g4 < _g5) {
				var i2 = _g4++;
				var v1 = p._vertices[(i2 + 1) % p.count];
				var v_x1 = v1.x;
				var v_y1 = v1.y;
				var b = p._vertices[i2];
				var b_x = v_x1 - b.x;
				var b_y = v_y1 - b.y;
				v_x1 = b_x;
				v_y1 = b_y;
				var x1 = -v_y1;
				v_y1 = v_x1;
				v_x1 = x1;
				if(p._normals[i2] == null) {
					var p2 = p._normals;
					var this2 = new echo_math_Vector2Default(v_x1,v_y1);
					p2[i2] = this2;
				} else {
					var a1 = p._normals[i2];
					a1.x = v_x1;
					a1.y = v_y1;
				}
				var v2 = p._normals[i2];
				var self = v2;
				var self1 = v2;
				var self2 = self1;
				var len_sq = self2.x * self2.x + self2.y * self2.y;
				var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
				var a_x = self1.x / denominator;
				var a_y = self1.y / denominator;
				var b_x1 = a_x;
				var b_y1 = a_y;
				self.x = b_x1;
				self.y = b_y1;
			}
		}
		var b1 = p._vertices[i];
		var self_x = c_pos_x - b1.x;
		var self_y = c_pos_y - b1.y;
		distance = self_x * self_x + self_y * self_y;
		if(distance < testDistance) {
			testDistance = distance;
			var v3 = echo_util_SAT.closest;
			if(p.dirty_vertices) {
				p.dirty_vertices = false;
				while(p._vertices.length > p.count) p._vertices.pop();
				var _g6 = 0;
				var _g7 = p.count;
				while(_g6 < _g7) {
					var i3 = _g6++;
					if(p.local_vertices[i3] == null) {
						continue;
					}
					if(p._vertices[i3] == null) {
						var p3 = p._vertices;
						var this3 = new echo_math_Vector2Default(0,0);
						p3[i3] = this3;
					}
					var x2 = p.local_vertices[i3].x;
					var y1 = p.local_vertices[i3].y;
					if(y1 == null) {
						y1 = 0;
					}
					if(x2 == null) {
						x2 = 0;
					}
					var a2 = p.transform.get_local_to_world_matrix();
					var v_x2 = x2;
					var v_y2 = y1;
					var v_z1 = 1;
					var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
					var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
					var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
					var pos_x1 = result_x1;
					var pos_y1 = result_y1;
					var v4 = p._vertices[i3];
					v4.x = pos_x1;
					v4.y = pos_y1;
				}
				var _g8 = 0;
				var _g9 = p.count;
				while(_g8 < _g9) {
					var i4 = _g8++;
					var v5 = p._vertices[(i4 + 1) % p.count];
					var v_x3 = v5.x;
					var v_y3 = v5.y;
					var b2 = p._vertices[i4];
					var b_x2 = v_x3 - b2.x;
					var b_y2 = v_y3 - b2.y;
					v_x3 = b_x2;
					v_y3 = b_y2;
					var x3 = -v_y3;
					v_y3 = v_x3;
					v_x3 = x3;
					if(p._normals[i4] == null) {
						var p4 = p._normals;
						var this4 = new echo_math_Vector2Default(v_x3,v_y3);
						p4[i4] = this4;
					} else {
						var a3 = p._normals[i4];
						a3.x = v_x3;
						a3.y = v_y3;
					}
					var v6 = p._normals[i4];
					var self3 = v6;
					var self4 = v6;
					var self5 = self4;
					var len_sq1 = self5.x * self5.x + self5.y * self5.y;
					var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
					var a_x1 = self4.x / denominator1;
					var a_y1 = self4.y / denominator1;
					var b_x3 = a_x1;
					var b_y3 = a_y1;
					self3.x = b_x3;
					self3.y = b_y3;
				}
			}
			var x4 = p._vertices[i].x;
			if(p.dirty_vertices) {
				p.dirty_vertices = false;
				while(p._vertices.length > p.count) p._vertices.pop();
				var _g10 = 0;
				var _g11 = p.count;
				while(_g10 < _g11) {
					var i5 = _g10++;
					if(p.local_vertices[i5] == null) {
						continue;
					}
					if(p._vertices[i5] == null) {
						var p5 = p._vertices;
						var this5 = new echo_math_Vector2Default(0,0);
						p5[i5] = this5;
					}
					var x5 = p.local_vertices[i5].x;
					var y2 = p.local_vertices[i5].y;
					if(y2 == null) {
						y2 = 0;
					}
					if(x5 == null) {
						x5 = 0;
					}
					var a4 = p.transform.get_local_to_world_matrix();
					var v_x4 = x5;
					var v_y4 = y2;
					var v_z2 = 1;
					var result_x2 = a4.m00 * v_x4 + a4.m10 * v_y4 + a4.m20 * v_z2;
					var result_y2 = a4.m01 * v_x4 + a4.m11 * v_y4 + a4.m21 * v_z2;
					var result_z2 = a4.m02 * v_x4 + a4.m12 * v_y4 + a4.m22 * v_z2;
					var pos_x2 = result_x2;
					var pos_y2 = result_y2;
					var v7 = p._vertices[i5];
					v7.x = pos_x2;
					v7.y = pos_y2;
				}
				var _g12 = 0;
				var _g13 = p.count;
				while(_g12 < _g13) {
					var i6 = _g12++;
					var v8 = p._vertices[(i6 + 1) % p.count];
					var v_x5 = v8.x;
					var v_y5 = v8.y;
					var b3 = p._vertices[i6];
					var b_x4 = v_x5 - b3.x;
					var b_y4 = v_y5 - b3.y;
					v_x5 = b_x4;
					v_y5 = b_y4;
					var x6 = -v_y5;
					v_y5 = v_x5;
					v_x5 = x6;
					if(p._normals[i6] == null) {
						var p6 = p._normals;
						var this6 = new echo_math_Vector2Default(v_x5,v_y5);
						p6[i6] = this6;
					} else {
						var a5 = p._normals[i6];
						a5.x = v_x5;
						a5.y = v_y5;
					}
					var v9 = p._normals[i6];
					var self6 = v9;
					var self7 = v9;
					var self8 = self7;
					var len_sq2 = self8.x * self8.x + self8.y * self8.y;
					var denominator2 = len_sq2 == 0.0 ? 1.0 : Math.sqrt(len_sq2);
					var a_x2 = self7.x / denominator2;
					var a_y2 = self7.y / denominator2;
					var b_x5 = a_x2;
					var b_y5 = a_y2;
					self6.x = b_x5;
					self6.y = b_y5;
				}
			}
			var y3 = p._vertices[i].y;
			v3.x = x4;
			v3.y = y3;
		}
	}
	var a = echo_util_SAT.closest;
	var self_x = a.x - c_pos_x;
	var self_y = a.y - c_pos_y;
	var len_sq = self_x * self_x + self_y * self_y;
	var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
	var normal_x = self_x / denominator;
	var normal_y = self_y / denominator;
	var test = 0;
	if(p.dirty_vertices) {
		p.dirty_vertices = false;
		while(p._vertices.length > p.count) p._vertices.pop();
		var _g = 0;
		var _g1 = p.count;
		while(_g < _g1) {
			var i = _g++;
			if(p.local_vertices[i] == null) {
				continue;
			}
			if(p._vertices[i] == null) {
				var p1 = p._vertices;
				var this1 = new echo_math_Vector2Default(0,0);
				p1[i] = this1;
			}
			var x = p.local_vertices[i].x;
			var y = p.local_vertices[i].y;
			if(y == null) {
				y = 0;
			}
			if(x == null) {
				x = 0;
			}
			var a = p.transform.get_local_to_world_matrix();
			var v_x = x;
			var v_y = y;
			var v_z = 1;
			var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
			var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
			var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
			var pos_x = result_x;
			var pos_y = result_y;
			var v = p._vertices[i];
			v.x = pos_x;
			v.y = pos_y;
		}
		var _g = 0;
		var _g1 = p.count;
		while(_g < _g1) {
			var i = _g++;
			var v = p._vertices[(i + 1) % p.count];
			var v_x = v.x;
			var v_y = v.y;
			var b = p._vertices[i];
			var b_x = v_x - b.x;
			var b_y = v_y - b.y;
			v_x = b_x;
			v_y = b_y;
			var x = -v_y;
			v_y = v_x;
			v_x = x;
			if(p._normals[i] == null) {
				var p1 = p._normals;
				var this1 = new echo_math_Vector2Default(v_x,v_y);
				p1[i] = this1;
			} else {
				var a = p._normals[i];
				a.x = v_x;
				a.y = v_y;
			}
			var v1 = p._normals[i];
			var self = v1;
			var self1 = v1;
			var self2 = self1;
			var len_sq = self2.x * self2.x + self2.y * self2.y;
			var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
			var a_x = self1.x / denominator;
			var a_y = self1.y / denominator;
			var b_x1 = a_x;
			var b_y1 = a_y;
			self.x = b_x1;
			self.y = b_y1;
		}
	}
	var b = p._vertices[0];
	var min1 = normal_x * b.x + normal_y * b.y;
	var max1 = min1;
	var _g = 1;
	var _g1 = p.count;
	while(_g < _g1) {
		var j = _g++;
		if(p.dirty_vertices) {
			p.dirty_vertices = false;
			while(p._vertices.length > p.count) p._vertices.pop();
			var _g2 = 0;
			var _g3 = p.count;
			while(_g2 < _g3) {
				var i = _g2++;
				if(p.local_vertices[i] == null) {
					continue;
				}
				if(p._vertices[i] == null) {
					var p1 = p._vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					p1[i] = this1;
				}
				var x = p.local_vertices[i].x;
				var y = p.local_vertices[i].y;
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				var a = p.transform.get_local_to_world_matrix();
				var v_x = x;
				var v_y = y;
				var v_z = 1;
				var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
				var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
				var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
				var pos_x = result_x;
				var pos_y = result_y;
				var v = p._vertices[i];
				v.x = pos_x;
				v.y = pos_y;
			}
			var _g4 = 0;
			var _g5 = p.count;
			while(_g4 < _g5) {
				var i1 = _g4++;
				var v1 = p._vertices[(i1 + 1) % p.count];
				var v_x1 = v1.x;
				var v_y1 = v1.y;
				var b = p._vertices[i1];
				var b_x = v_x1 - b.x;
				var b_y = v_y1 - b.y;
				v_x1 = b_x;
				v_y1 = b_y;
				var x1 = -v_y1;
				v_y1 = v_x1;
				v_x1 = x1;
				if(p._normals[i1] == null) {
					var p2 = p._normals;
					var this2 = new echo_math_Vector2Default(v_x1,v_y1);
					p2[i1] = this2;
				} else {
					var a1 = p._normals[i1];
					a1.x = v_x1;
					a1.y = v_y1;
				}
				var v2 = p._normals[i1];
				var self = v2;
				var self1 = v2;
				var self2 = self1;
				var len_sq = self2.x * self2.x + self2.y * self2.y;
				var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
				var a_x = self1.x / denominator;
				var a_y = self1.y / denominator;
				var b_x1 = a_x;
				var b_y1 = a_y;
				self.x = b_x1;
				self.y = b_y1;
			}
		}
		var b1 = p._vertices[j];
		test = normal_x * b1.x + normal_y * b1.y;
		if(test < min1) {
			min1 = test;
		}
		if(test > max1) {
			max1 = test;
		}
	}
	var max2 = c_rad1;
	var min2 = -c_rad1;
	var b_x = -c_pos_x;
	var b_y = -c_pos_y;
	var offset = normal_x * b_x + normal_y * b_y;
	min1 += offset;
	max1 += offset;
	var test1 = min1 - max2;
	var test2 = min2 - max1;
	if(test1 > 0 || test2 > 0) {
		return null;
	}
	var distMin = -(max2 - min1);
	if(flip) {
		distMin *= -1;
	}
	var x = normal_x;
	var y = normal_y;
	var c1 = echo_data_CollisionData.pool.get();
	c1.sa = null;
	c1.sb = null;
	c1.contact_count = 0;
	var _g = 0;
	var _g1 = c1.contacts;
	while(_g < _g1.length) {
		var cc = _g1[_g];
		++_g;
		cc.x = 0;
		cc.y = 0;
	}
	c1.overlap = distMin;
	var v = c1.normal;
	v.x = x;
	v.y = y;
	c1.pooled = false;
	var col = c1;
	var closest = Math.abs(distMin);
	var _g = 0;
	var _g1 = p.count;
	while(_g < _g1) {
		var i = _g++;
		if(p.dirty_vertices) {
			p.dirty_vertices = false;
			while(p._vertices.length > p.count) p._vertices.pop();
			var _g2 = 0;
			var _g3 = p.count;
			while(_g2 < _g3) {
				var i1 = _g2++;
				if(p.local_vertices[i1] == null) {
					continue;
				}
				if(p._vertices[i1] == null) {
					var p1 = p._vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					p1[i1] = this1;
				}
				var x = p.local_vertices[i1].x;
				var y = p.local_vertices[i1].y;
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				var a = p.transform.get_local_to_world_matrix();
				var v_x = x;
				var v_y = y;
				var v_z = 1;
				var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
				var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
				var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
				var pos_x = result_x;
				var pos_y = result_y;
				var v = p._vertices[i1];
				v.x = pos_x;
				v.y = pos_y;
			}
			var _g4 = 0;
			var _g5 = p.count;
			while(_g4 < _g5) {
				var i2 = _g4++;
				var v1 = p._vertices[(i2 + 1) % p.count];
				var v_x1 = v1.x;
				var v_y1 = v1.y;
				var b = p._vertices[i2];
				var b_x = v_x1 - b.x;
				var b_y = v_y1 - b.y;
				v_x1 = b_x;
				v_y1 = b_y;
				var x1 = -v_y1;
				v_y1 = v_x1;
				v_x1 = x1;
				if(p._normals[i2] == null) {
					var p2 = p._normals;
					var this2 = new echo_math_Vector2Default(v_x1,v_y1);
					p2[i2] = this2;
				} else {
					var a1 = p._normals[i2];
					a1.x = v_x1;
					a1.y = v_y1;
				}
				var v2 = p._normals[i2];
				var self = v2;
				var self1 = v2;
				var self2 = self1;
				var len_sq = self2.x * self2.x + self2.y * self2.y;
				var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
				var a_x = self1.x / denominator;
				var a_y = self1.y / denominator;
				var b_x1 = a_x;
				var b_y1 = a_y;
				self.x = b_x1;
				self.y = b_y1;
			}
		}
		var x2 = p._normals[i].x;
		if(p.dirty_vertices) {
			p.dirty_vertices = false;
			while(p._vertices.length > p.count) p._vertices.pop();
			var _g6 = 0;
			var _g7 = p.count;
			while(_g6 < _g7) {
				var i3 = _g6++;
				if(p.local_vertices[i3] == null) {
					continue;
				}
				if(p._vertices[i3] == null) {
					var p3 = p._vertices;
					var this3 = new echo_math_Vector2Default(0,0);
					p3[i3] = this3;
				}
				var x3 = p.local_vertices[i3].x;
				var y1 = p.local_vertices[i3].y;
				if(y1 == null) {
					y1 = 0;
				}
				if(x3 == null) {
					x3 = 0;
				}
				var a2 = p.transform.get_local_to_world_matrix();
				var v_x2 = x3;
				var v_y2 = y1;
				var v_z1 = 1;
				var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
				var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
				var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
				var pos_x1 = result_x1;
				var pos_y1 = result_y1;
				var v3 = p._vertices[i3];
				v3.x = pos_x1;
				v3.y = pos_y1;
			}
			var _g8 = 0;
			var _g9 = p.count;
			while(_g8 < _g9) {
				var i4 = _g8++;
				var v4 = p._vertices[(i4 + 1) % p.count];
				var v_x3 = v4.x;
				var v_y3 = v4.y;
				var b1 = p._vertices[i4];
				var b_x2 = v_x3 - b1.x;
				var b_y2 = v_y3 - b1.y;
				v_x3 = b_x2;
				v_y3 = b_y2;
				var x4 = -v_y3;
				v_y3 = v_x3;
				v_x3 = x4;
				if(p._normals[i4] == null) {
					var p4 = p._normals;
					var this4 = new echo_math_Vector2Default(v_x3,v_y3);
					p4[i4] = this4;
				} else {
					var a3 = p._normals[i4];
					a3.x = v_x3;
					a3.y = v_y3;
				}
				var v5 = p._normals[i4];
				var self3 = v5;
				var self4 = v5;
				var self5 = self4;
				var len_sq1 = self5.x * self5.x + self5.y * self5.y;
				var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
				var a_x1 = self4.x / denominator1;
				var a_y1 = self4.y / denominator1;
				var b_x3 = a_x1;
				var b_y3 = a_y1;
				self3.x = b_x3;
				self3.y = b_y3;
			}
		}
		normal_x = x2;
		normal_y = p._normals[i].y;
		if(p.dirty_vertices) {
			p.dirty_vertices = false;
			while(p._vertices.length > p.count) p._vertices.pop();
			var _g10 = 0;
			var _g11 = p.count;
			while(_g10 < _g11) {
				var i5 = _g10++;
				if(p.local_vertices[i5] == null) {
					continue;
				}
				if(p._vertices[i5] == null) {
					var p5 = p._vertices;
					var this5 = new echo_math_Vector2Default(0,0);
					p5[i5] = this5;
				}
				var x5 = p.local_vertices[i5].x;
				var y2 = p.local_vertices[i5].y;
				if(y2 == null) {
					y2 = 0;
				}
				if(x5 == null) {
					x5 = 0;
				}
				var a4 = p.transform.get_local_to_world_matrix();
				var v_x4 = x5;
				var v_y4 = y2;
				var v_z2 = 1;
				var result_x2 = a4.m00 * v_x4 + a4.m10 * v_y4 + a4.m20 * v_z2;
				var result_y2 = a4.m01 * v_x4 + a4.m11 * v_y4 + a4.m21 * v_z2;
				var result_z2 = a4.m02 * v_x4 + a4.m12 * v_y4 + a4.m22 * v_z2;
				var pos_x2 = result_x2;
				var pos_y2 = result_y2;
				var v6 = p._vertices[i5];
				v6.x = pos_x2;
				v6.y = pos_y2;
			}
			var _g12 = 0;
			var _g13 = p.count;
			while(_g12 < _g13) {
				var i6 = _g12++;
				var v7 = p._vertices[(i6 + 1) % p.count];
				var v_x5 = v7.x;
				var v_y5 = v7.y;
				var b2 = p._vertices[i6];
				var b_x4 = v_x5 - b2.x;
				var b_y4 = v_y5 - b2.y;
				v_x5 = b_x4;
				v_y5 = b_y4;
				var x6 = -v_y5;
				v_y5 = v_x5;
				v_x5 = x6;
				if(p._normals[i6] == null) {
					var p6 = p._normals;
					var this6 = new echo_math_Vector2Default(v_x5,v_y5);
					p6[i6] = this6;
				} else {
					var a5 = p._normals[i6];
					a5.x = v_x5;
					a5.y = v_y5;
				}
				var v8 = p._normals[i6];
				var self6 = v8;
				var self7 = v8;
				var self8 = self7;
				var len_sq2 = self8.x * self8.x + self8.y * self8.y;
				var denominator2 = len_sq2 == 0.0 ? 1.0 : Math.sqrt(len_sq2);
				var a_x2 = self7.x / denominator2;
				var a_y2 = self7.y / denominator2;
				var b_x5 = a_x2;
				var b_y5 = a_y2;
				self6.x = b_x5;
				self6.y = b_y5;
			}
		}
		var b3 = p._vertices[0];
		min1 = normal_x * b3.x + normal_y * b3.y;
		max1 = min1;
		var _g14 = 1;
		var _g15 = p.count;
		while(_g14 < _g15) {
			var j = _g14++;
			if(p.dirty_vertices) {
				p.dirty_vertices = false;
				while(p._vertices.length > p.count) p._vertices.pop();
				var _g16 = 0;
				var _g17 = p.count;
				while(_g16 < _g17) {
					var i7 = _g16++;
					if(p.local_vertices[i7] == null) {
						continue;
					}
					if(p._vertices[i7] == null) {
						var p7 = p._vertices;
						var this7 = new echo_math_Vector2Default(0,0);
						p7[i7] = this7;
					}
					var x7 = p.local_vertices[i7].x;
					var y3 = p.local_vertices[i7].y;
					if(y3 == null) {
						y3 = 0;
					}
					if(x7 == null) {
						x7 = 0;
					}
					var a6 = p.transform.get_local_to_world_matrix();
					var v_x6 = x7;
					var v_y6 = y3;
					var v_z3 = 1;
					var result_x3 = a6.m00 * v_x6 + a6.m10 * v_y6 + a6.m20 * v_z3;
					var result_y3 = a6.m01 * v_x6 + a6.m11 * v_y6 + a6.m21 * v_z3;
					var result_z3 = a6.m02 * v_x6 + a6.m12 * v_y6 + a6.m22 * v_z3;
					var pos_x3 = result_x3;
					var pos_y3 = result_y3;
					var v9 = p._vertices[i7];
					v9.x = pos_x3;
					v9.y = pos_y3;
				}
				var _g18 = 0;
				var _g19 = p.count;
				while(_g18 < _g19) {
					var i8 = _g18++;
					var v10 = p._vertices[(i8 + 1) % p.count];
					var v_x7 = v10.x;
					var v_y7 = v10.y;
					var b4 = p._vertices[i8];
					var b_x6 = v_x7 - b4.x;
					var b_y6 = v_y7 - b4.y;
					v_x7 = b_x6;
					v_y7 = b_y6;
					var x8 = -v_y7;
					v_y7 = v_x7;
					v_x7 = x8;
					if(p._normals[i8] == null) {
						var p8 = p._normals;
						var this8 = new echo_math_Vector2Default(v_x7,v_y7);
						p8[i8] = this8;
					} else {
						var a7 = p._normals[i8];
						a7.x = v_x7;
						a7.y = v_y7;
					}
					var v11 = p._normals[i8];
					var self9 = v11;
					var self10 = v11;
					var self11 = self10;
					var len_sq3 = self11.x * self11.x + self11.y * self11.y;
					var denominator3 = len_sq3 == 0.0 ? 1.0 : Math.sqrt(len_sq3);
					var a_x3 = self10.x / denominator3;
					var a_y3 = self10.y / denominator3;
					var b_x7 = a_x3;
					var b_y7 = a_y3;
					self9.x = b_x7;
					self9.y = b_y7;
				}
			}
			var b5 = p._vertices[j];
			test = normal_x * b5.x + normal_y * b5.y;
			if(test < min1) {
				min1 = test;
			}
			if(test > max1) {
				max1 = test;
			}
		}
		max2 = c_rad1;
		min2 = -c_rad1;
		var b_x8 = -c_pos_x;
		var b_y8 = -c_pos_y;
		offset = normal_x * b_x8 + normal_y * b_y8;
		min1 += offset;
		max1 += offset;
		test1 = min1 - max2;
		test2 = min2 - max1;
		if(test1 > 0 || test2 > 0) {
			col.put();
			return null;
		}
		distMin = -(max2 - min1);
		if(flip) {
			distMin *= -1;
		}
		if(Math.abs(distMin) < closest) {
			var v12 = col.normal;
			v12.x = normal_x;
			v12.y = normal_y;
			col.overlap = distMin;
			closest = Math.abs(distMin);
		}
	}
	col.sa = flip ? p : c;
	col.sb = flip ? c : p;
	col.overlap = Math.abs(col.overlap);
	if(flip) {
		var v = col.normal;
		v.x = -v.x;
		v.y = -v.y;
	}
	return col;
};
echo_util_SAT.check_polygons = function(polygon1,polygon2,flip) {
	if(flip == null) {
		flip = false;
	}
	var test1 = 0;
	var test2 = 0;
	var testNum = 0;
	var min1 = 0;
	var max1 = 0;
	var min2 = 0;
	var max2 = 0;
	var closest = 1073741823;
	var col = null;
	var normal_x = 0;
	var normal_y = 0;
	var _g = 0;
	var _g1 = polygon1.count;
	while(_g < _g1) {
		var i = _g++;
		if(polygon1.dirty_vertices) {
			polygon1.dirty_vertices = false;
			while(polygon1._vertices.length > polygon1.count) polygon1._vertices.pop();
			var _g2 = 0;
			var _g3 = polygon1.count;
			while(_g2 < _g3) {
				var i1 = _g2++;
				if(polygon1.local_vertices[i1] == null) {
					continue;
				}
				if(polygon1._vertices[i1] == null) {
					var polygon11 = polygon1._vertices;
					var this1 = new echo_math_Vector2Default(0,0);
					polygon11[i1] = this1;
				}
				var x = polygon1.local_vertices[i1].x;
				var y = polygon1.local_vertices[i1].y;
				if(y == null) {
					y = 0;
				}
				if(x == null) {
					x = 0;
				}
				var a = polygon1.transform.get_local_to_world_matrix();
				var v_x = x;
				var v_y = y;
				var v_z = 1;
				var result_x = a.m00 * v_x + a.m10 * v_y + a.m20 * v_z;
				var result_y = a.m01 * v_x + a.m11 * v_y + a.m21 * v_z;
				var result_z = a.m02 * v_x + a.m12 * v_y + a.m22 * v_z;
				var pos_x = result_x;
				var pos_y = result_y;
				var v = polygon1._vertices[i1];
				v.x = pos_x;
				v.y = pos_y;
			}
			var _g4 = 0;
			var _g5 = polygon1.count;
			while(_g4 < _g5) {
				var i2 = _g4++;
				var v1 = polygon1._vertices[(i2 + 1) % polygon1.count];
				var v_x1 = v1.x;
				var v_y1 = v1.y;
				var b = polygon1._vertices[i2];
				var b_x = v_x1 - b.x;
				var b_y = v_y1 - b.y;
				v_x1 = b_x;
				v_y1 = b_y;
				var x1 = -v_y1;
				v_y1 = v_x1;
				v_x1 = x1;
				if(polygon1._normals[i2] == null) {
					var polygon12 = polygon1._normals;
					var this2 = new echo_math_Vector2Default(v_x1,v_y1);
					polygon12[i2] = this2;
				} else {
					var a1 = polygon1._normals[i2];
					a1.x = v_x1;
					a1.y = v_y1;
				}
				var v2 = polygon1._normals[i2];
				var self = v2;
				var self1 = v2;
				var self2 = self1;
				var len_sq = self2.x * self2.x + self2.y * self2.y;
				var denominator = len_sq == 0.0 ? 1.0 : Math.sqrt(len_sq);
				var a_x = self1.x / denominator;
				var a_y = self1.y / denominator;
				var b_x1 = a_x;
				var b_y1 = a_y;
				self.x = b_x1;
				self.y = b_y1;
			}
		}
		var x2 = polygon1._normals[i].x;
		if(polygon1.dirty_vertices) {
			polygon1.dirty_vertices = false;
			while(polygon1._vertices.length > polygon1.count) polygon1._vertices.pop();
			var _g6 = 0;
			var _g7 = polygon1.count;
			while(_g6 < _g7) {
				var i3 = _g6++;
				if(polygon1.local_vertices[i3] == null) {
					continue;
				}
				if(polygon1._vertices[i3] == null) {
					var polygon13 = polygon1._vertices;
					var this3 = new echo_math_Vector2Default(0,0);
					polygon13[i3] = this3;
				}
				var x3 = polygon1.local_vertices[i3].x;
				var y1 = polygon1.local_vertices[i3].y;
				if(y1 == null) {
					y1 = 0;
				}
				if(x3 == null) {
					x3 = 0;
				}
				var a2 = polygon1.transform.get_local_to_world_matrix();
				var v_x2 = x3;
				var v_y2 = y1;
				var v_z1 = 1;
				var result_x1 = a2.m00 * v_x2 + a2.m10 * v_y2 + a2.m20 * v_z1;
				var result_y1 = a2.m01 * v_x2 + a2.m11 * v_y2 + a2.m21 * v_z1;
				var result_z1 = a2.m02 * v_x2 + a2.m12 * v_y2 + a2.m22 * v_z1;
				var pos_x1 = result_x1;
				var pos_y1 = result_y1;
				var v3 = polygon1._vertices[i3];
				v3.x = pos_x1;
				v3.y = pos_y1;
			}
			var _g8 = 0;
			var _g9 = polygon1.count;
			while(_g8 < _g9) {
				var i4 = _g8++;
				var v4 = polygon1._vertices[(i4 + 1) % polygon1.count];
				var v_x3 = v4.x;
				var v_y3 = v4.y;
				var b1 = polygon1._vertices[i4];
				var b_x2 = v_x3 - b1.x;
				var b_y2 = v_y3 - b1.y;
				v_x3 = b_x2;
				v_y3 = b_y2;
				var x4 = -v_y3;
				v_y3 = v_x3;
				v_x3 = x4;
				if(polygon1._normals[i4] == null) {
					var polygon14 = polygon1._normals;
					var this4 = new echo_math_Vector2Default(v_x3,v_y3);
					polygon14[i4] = this4;
				} else {
					var a3 = polygon1._normals[i4];
					a3.x = v_x3;
					a3.y = v_y3;
				}
				var v5 = polygon1._normals[i4];
				var self3 = v5;
				var self4 = v5;
				var self5 = self4;
				var len_sq1 = self5.x * self5.x + self5.y * self5.y;
				var denominator1 = len_sq1 == 0.0 ? 1.0 : Math.sqrt(len_sq1);
				var a_x1 = self4.x / denominator1;
				var a_y1 = self4.y / denominator1;
				var b_x3 = a_x1;
				var b_y3 = a_y1;
				self3.x = b_x3;
				self3.y = b_y3;
			}
		}
		normal_x = x2;
		normal_y = polygon1._normals[i].y;
		if(polygon1.dirty_vertices) {
			polygon1.dirty_vertices = false;
			while(polygon1._vertices.length > polygon1.count) polygon1._vertices.pop();
			var _g10 = 0;
			var _g11 = polygon1.count;
			while(_g10 < _g11) {
				var i5 = _g10++;
				if(polygon1.local_vertices[i5] == null) {
					continue;
				}
				if(polygon1._vertices[i5] == null) {
					var polygon15 = polygon1._vertices;
					var this5 = new echo_math_Vector2Default(0,0);
					polygon15[i5] = this5;
				}
				var x5 = polygon1.local_vertices[i5].x;
				var y2 = polygon1.local_vertices[i5].y;
				if(y2 == null) {
					y2 = 0;
				}
				if(x5 == null) {
					x5 = 0;
				}
				var a4 = polygon1.transform.get_local_to_world_matrix();
				var v_x4 = x5;
				var v_y4 = y2;
				var v_z2 = 1;
				var result_x2 = a4.m00 * v_x4 + a4.m10 * v_y4 + a4.m20 * v_z2;
				var result_y2 = a4.m01 * v_x4 + a4.m11 * v_y4 + a4.m21 * v_z2;
				var result_z2 = a4.m02 * v_x4 + a4.m12 * v_y4 + a4.m22 * v_z2;
				var pos_x2 = result_x2;
				var pos_y2 = result_y2;
				var v6 = polygon1._vertices[i5];
				v6.x = pos_x2;
				v6.y = pos_y2;
			}
			var _g12 = 0;
			var _g13 = polygon1.count;
			while(_g12 < _g13) {
				var i6 = _g12++;
				var v7 = polygon1._vertices[(i6 + 1) % polygon1.count];
				var v_x5 = v7.x;
				var v_y5 = v7.y;
				var b2 = polygon1._vertices[i6];
				var b_x4 = v_x5 - b2.x;
				var b_y4 = v_y5 - b2.y;
				v_x5 = b_x4;
				v_y5 = b_y4;
				var x6 = -v_y5;
				v_y5 = v_x5;
				v_x5 = x6;
				if(polygon1._normals[i6] == null) {
					var polygon16 = polygon1._normals;
					var this6 = new echo_math_Vector2Default(v_x5,v_y5);
					polygon16[i6] = this6;
				} else {
					var a5 = polygon1._normals[i6];
					a5.x = v_x5;
					a5.y = v_y5;
				}
				var v8 = polygon1._normals[i6];
				var self6 = v8;
				var self7 = v8;
				var self8 = self7;
				var len_sq2 = self8.x * self8.x + self8.y * self8.y;
				var denominator2 = len_sq2 == 0.0 ? 1.0 : Math.sqrt(len_sq2);
				var a_x2 = self7.x / denominator2;
				var a_y2 = self7.y / denominator2;
				var b_x5 = a_x2;
				var b_y5 = a_y2;
				self6.x = b_x5;
				self6.y = b_y5;
			}
		}
		var b3 = polygon1._vertices[0];
		min1 = normal_x * b3.x + normal_y * b3.y;
		max1 = min1;
		var _g14 = 1;
		var _g15 = polygon1.count;
		while(_g14 < _g15) {
			var j = _g14++;
			if(polygon1.dirty_vertices) {
				polygon1.dirty_vertices = false;
				while(polygon1._vertices.length > polygon1.count) polygon1._vertices.pop();
				var _g16 = 0;
				var _g17 = polygon1.count;
				while(_g16 < _g17) {
					var i7 = _g16++;
					if(polygon1.local_vertices[i7] == null) {
						continue;
					}
					if(polygon1._vertices[i7] == null) {
						var polygon17 = polygon1._vertices;
						var this7 = new echo_math_Vector2Default(0,0);
						polygon17[i7] = this7;
					}
					var x7 = polygon1.local_vertices[i7].x;
					var y3 = polygon1.local_vertices[i7].y;
					if(y3 == null) {
						y3 = 0;
					}
					if(x7 == null) {
						x7 = 0;
					}
					var a6 = polygon1.transform.get_local_to_world_matrix();
					var v_x6 = x7;
					var v_y6 = y3;
					var v_z3 = 1;
					var result_x3 = a6.m00 * v_x6 + a6.m10 * v_y6 + a6.m20 * v_z3;
					var result_y3 = a6.m01 * v_x6 + a6.m11 * v_y6 + a6.m21 * v_z3;
					var result_z3 = a6.m02 * v_x6 + a6.m12 * v_y6 + a6.m22 * v_z3;
					var pos_x3 = result_x3;
					var pos_y3 = result_y3;
					var v9 = polygon1._vertices[i7];
					v9.x = pos_x3;
					v9.y = pos_y3;
				}
				var _g18 = 0;
				var _g19 = polygon1.count;
				while(_g18 < _g19) {
					var i8 = _g18++;
					var v10 = polygon1._vertices[(i8 + 1) % polygon1.count];
					var v_x7 = v10.x;
					var v_y7 = v10.y;
					var b4 = polygon1._vertices[i8];
					var b_x6 = v_x7 - b4.x;
					var b_y6 = v_y7 - b4.y;
					v_x7 = b_x6;
					v_y7 = b_y6;
					var x8 = -v_y7;
					v_y7 = v_x7;
					v_x7 = x8;
					if(polygon1._normals[i8] == null) {
						var polygon18 = polygon1._normals;
						var this8 = new echo_math_Vector2Default(v_x7,v_y7);
						polygon18[i8] = this8;
					} else {
						var a7 = polygon1._normals[i8];
						a7.x = v_x7;
						a7.y = v_y7;
					}
					var v11 = polygon1._normals[i8];
					var self9 = v11;
					var self10 = v11;
					var self11 = self10;
					var len_sq3 = self11.x * self11.x + self11.y * self11.y;
					var denominator3 = len_sq3 == 0.0 ? 1.0 : Math.sqrt(len_sq3);
					var a_x3 = self10.x / denominator3;
					var a_y3 = self10.y / denominator3;
					var b_x7 = a_x3;
					var b_y7 = a_y3;
					self9.x = b_x7;
					self9.y = b_y7;
				}
			}
			var b5 = polygon1._vertices[j];
			testNum = normal_x * b5.x + normal_y * b5.y;
			if(testNum < min1) {
				min1 = testNum;
			}
			if(testNum > max1) {
				max1 = testNum;
			}
		}
		if(polygon2.dirty_vertices) {
			polygon2.dirty_vertices = false;
			while(polygon2._vertices.length > polygon2.count) polygon2._vertices.pop();
			var _g20 = 0;
			var _g21 = polygon2.count;
			while(_g20 < _g21) {
				var i9 = _g20++;
				if(polygon2.local_vertices[i9] == null) {
					continue;
				}
				if(polygon2._vertices[i9] == null) {
					var polygon21 = polygon2._vertices;
					var this9 = new echo_math_Vector2Default(0,0);
					polygon21[i9] = this9;
				}
				var x9 = polygon2.local_vertices[i9].x;
				var y4 = polygon2.local_vertices[i9].y;
				if(y4 == null) {
					y4 = 0;
				}
				if(x9 == null) {
					x9 = 0;
				}
				var a8 = polygon2.transform.get_local_to_world_matrix();
				var v_x8 = x9;
				var v_y8 = y4;
				var v_z4 = 1;
				var result_x4 = a8.m00 * v_x8 + a8.m10 * v_y8 + a8.m20 * v_z4;
				var result_y4 = a8.m01 * v_x8 + a8.m11 * v_y8 + a8.m21 * v_z4;
				var result_z4 = a8.m02 * v_x8 + a8.m12 * v_y8 + a8.m22 * v_z4;
				var pos_x4 = result_x4;
				var pos_y4 = result_y4;
				var v12 = polygon2._vertices[i9];
				v12.x = pos_x4;
				v12.y = pos_y4;
			}
			var _g22 = 0;
			var _g23 = polygon2.count;
			while(_g22 < _g23) {
				var i10 = _g22++;
				var v13 = polygon2._vertices[(i10 + 1) % polygon2.count];
				var v_x9 = v13.x;
				var v_y9 = v13.y;
				var b6 = polygon2._vertices[i10];
				var b_x8 = v_x9 - b6.x;
				var b_y8 = v_y9 - b6.y;
				v_x9 = b_x8;
				v_y9 = b_y8;
				var x10 = -v_y9;
				v_y9 = v_x9;
				v_x9 = x10;
				if(polygon2._normals[i10] == null) {
					var polygon22 = polygon2._normals;
					var this10 = new echo_math_Vector2Default(v_x9,v_y9);
					polygon22[i10] = this10;
				} else {
					var a9 = polygon2._normals[i10];
					a9.x = v_x9;
					a9.y = v_y9;
				}
				var v14 = polygon2._normals[i10];
				var self12 = v14;
				var self13 = v14;
				var self14 = self13;
				var len_sq4 = self14.x * self14.x + self14.y * self14.y;
				var denominator4 = len_sq4 == 0.0 ? 1.0 : Math.sqrt(len_sq4);
				var a_x4 = self13.x / denominator4;
				var a_y4 = self13.y / denominator4;
				var b_x9 = a_x4;
				var b_y9 = a_y4;
				self12.x = b_x9;
				self12.y = b_y9;
			}
		}
		var b7 = polygon2._vertices[0];
		min2 = normal_x * b7.x + normal_y * b7.y;
		max2 = min2;
		var _g24 = 1;
		var _g25 = polygon2.count;
		while(_g24 < _g25) {
			var j1 = _g24++;
			if(polygon2.dirty_vertices) {
				polygon2.dirty_vertices = false;
				while(polygon2._vertices.length > polygon2.count) polygon2._vertices.pop();
				var _g26 = 0;
				var _g27 = polygon2.count;
				while(_g26 < _g27) {
					var i11 = _g26++;
					if(polygon2.local_vertices[i11] == null) {
						continue;
					}
					if(polygon2._vertices[i11] == null) {
						var polygon23 = polygon2._vertices;
						var this11 = new echo_math_Vector2Default(0,0);
						polygon23[i11] = this11;
					}
					var x11 = polygon2.local_vertices[i11].x;
					var y5 = polygon2.local_vertices[i11].y;
					if(y5 == null) {
						y5 = 0;
					}
					if(x11 == null) {
						x11 = 0;
					}
					var a10 = polygon2.transform.get_local_to_world_matrix();
					var v_x10 = x11;
					var v_y10 = y5;
					var v_z5 = 1;
					var result_x5 = a10.m00 * v_x10 + a10.m10 * v_y10 + a10.m20 * v_z5;
					var result_y5 = a10.m01 * v_x10 + a10.m11 * v_y10 + a10.m21 * v_z5;
					var result_z5 = a10.m02 * v_x10 + a10.m12 * v_y10 + a10.m22 * v_z5;
					var pos_x5 = result_x5;
					var pos_y5 = result_y5;
					var v15 = polygon2._vertices[i11];
					v15.x = pos_x5;
					v15.y = pos_y5;
				}
				var _g28 = 0;
				var _g29 = polygon2.count;
				while(_g28 < _g29) {
					var i12 = _g28++;
					var v16 = polygon2._vertices[(i12 + 1) % polygon2.count];
					var v_x11 = v16.x;
					var v_y11 = v16.y;
					var b8 = polygon2._vertices[i12];
					var b_x10 = v_x11 - b8.x;
					var b_y10 = v_y11 - b8.y;
					v_x11 = b_x10;
					v_y11 = b_y10;
					var x12 = -v_y11;
					v_y11 = v_x11;
					v_x11 = x12;
					if(polygon2._normals[i12] == null) {
						var polygon24 = polygon2._normals;
						var this12 = new echo_math_Vector2Default(v_x11,v_y11);
						polygon24[i12] = this12;
					} else {
						var a11 = polygon2._normals[i12];
						a11.x = v_x11;
						a11.y = v_y11;
					}
					var v17 = polygon2._normals[i12];
					var self15 = v17;
					var self16 = v17;
					var self17 = self16;
					var len_sq5 = self17.x * self17.x + self17.y * self17.y;
					var denominator5 = len_sq5 == 0.0 ? 1.0 : Math.sqrt(len_sq5);
					var a_x5 = self16.x / denominator5;
					var a_y5 = self16.y / denominator5;
					var b_x11 = a_x5;
					var b_y11 = a_y5;
					self15.x = b_x11;
					self15.y = b_y11;
				}
			}
			var b9 = polygon2._vertices[j1];
			testNum = normal_x * b9.x + normal_y * b9.y;
			if(testNum < min2) {
				min2 = testNum;
			}
			if(testNum > max2) {
				max2 = testNum;
			}
		}
		test1 = min1 - max2;
		test2 = min2 - max1;
		if(test1 > 0 || test2 > 0) {
			return null;
		}
		var overlap = -(max2 - min1);
		if(flip) {
			overlap *= -1;
		}
		if(Math.abs(overlap) < closest) {
			if(col == null) {
				var x13 = normal_x;
				var y6 = normal_y;
				var c = echo_data_CollisionData.pool.get();
				c.sa = null;
				c.sb = null;
				c.contact_count = 0;
				var _g30 = 0;
				var _g31 = c.contacts;
				while(_g30 < _g31.length) {
					var cc = _g31[_g30];
					++_g30;
					cc.x = 0;
					cc.y = 0;
				}
				c.overlap = overlap;
				var v18 = c.normal;
				v18.x = x13;
				v18.y = y6;
				c.pooled = false;
				col = c;
			} else {
				col.overlap = overlap;
				var v19 = col.normal;
				v19.x = normal_x;
				v19.y = normal_y;
			}
			closest = Math.abs(overlap);
		}
	}
	if(col == null) {
		return null;
	}
	col.sa = flip ? polygon2 : polygon1;
	col.sb = flip ? polygon1 : polygon2;
	if(flip) {
		var v = col.normal;
		v.x = -v.x;
		v.y = -v.y;
	}
	return col;
};
var echo_util_Transform = function(x,y,rotation,scale_x,scale_y) {
	if(scale_y == null) {
		scale_y = 1;
	}
	if(scale_x == null) {
		scale_x = 1;
	}
	if(rotation == null) {
		rotation = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.coordinates_dirty = false;
	this.inverse_dirty = false;
	this.dirty = false;
	var this1 = new echo_math_Matrix3Default(1.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0);
	this.local_to_world_matrix = this1;
	this.children = [];
	this._scale_y = 1;
	this._scale_x = 1;
	this._radians = 0;
	this._y = 0;
	this._x = 0;
	this.on_dirty = null;
	if(!this.dirty) {
		this.set_dirty();
	}
	this.local_x = x;
	if(!this.dirty) {
		this.set_dirty();
	}
	this.local_y = y;
	var v = Math.PI / 180 * rotation;
	if(!this.dirty) {
		this.set_dirty();
	}
	this.local_radians = v;
	if(!this.dirty) {
		this.set_dirty();
	}
	this.local_scale_x = scale_x;
	if(!this.dirty) {
		this.set_dirty();
	}
	this.local_scale_y = scale_y;
};
echo_util_Transform.__name__ = true;
echo_util_Transform.__interfaces__ = [echo_util_Disposable];
echo_util_Transform.prototype = {
	set_parent: function(parent,preserve_world_transform) {
		if(preserve_world_transform == null) {
			preserve_world_transform = false;
		}
		if(this.parent != null) {
			HxOverrides.remove(this.parent.children,this);
		}
		this.parent = parent;
		if(parent != null) {
			this.parent.children.push(this);
		}
		this.set_dirty();
	}
	,get_local_to_world_matrix: function() {
		if(this.dirty) {
			if(this.parent == null) {
				var a = this.local_to_world_matrix;
				var s = Math.sin(this.local_radians);
				var c = Math.cos(this.local_radians);
				var b_m00 = c * this.local_scale_x;
				var b_m10 = -s * this.local_scale_y;
				var b_m20 = this.local_x;
				var b_m01 = s * this.local_scale_x;
				var b_m11 = c * this.local_scale_y;
				var b_m21 = this.local_y;
				var b_m02 = 0;
				var b_m12 = 0;
				var b_m22 = 1;
				a.m00 = b_m00;
				a.m10 = b_m10;
				a.m20 = b_m20;
				a.m01 = b_m01;
				a.m11 = b_m11;
				a.m21 = b_m21;
				a.m02 = b_m02;
				a.m12 = b_m12;
				a.m22 = b_m22;
			} else {
				var a = this.local_to_world_matrix;
				var a1 = this.parent.get_local_to_world_matrix();
				var s = Math.sin(this.local_radians);
				var c = Math.cos(this.local_radians);
				var b_m00 = c * this.local_scale_x;
				var b_m10 = -s * this.local_scale_y;
				var b_m20 = this.local_x;
				var b_m01 = s * this.local_scale_x;
				var b_m11 = c * this.local_scale_y;
				var b_m21 = this.local_y;
				var b_m02 = 0;
				var b_m12 = 0;
				var b_m22 = 1;
				var b_m001 = a1.m00 * b_m00 + a1.m10 * b_m01 + a1.m20 * b_m02;
				var b_m101 = a1.m00 * b_m10 + a1.m10 * b_m11 + a1.m20 * b_m12;
				var b_m201 = a1.m00 * b_m20 + a1.m10 * b_m21 + a1.m20 * b_m22;
				var b_m011 = a1.m01 * b_m00 + a1.m11 * b_m01 + a1.m21 * b_m02;
				var b_m111 = a1.m01 * b_m10 + a1.m11 * b_m11 + a1.m21 * b_m12;
				var b_m211 = a1.m01 * b_m20 + a1.m11 * b_m21 + a1.m21 * b_m22;
				var b_m021 = a1.m02 * b_m00 + a1.m12 * b_m01 + a1.m22 * b_m02;
				var b_m121 = a1.m02 * b_m10 + a1.m12 * b_m11 + a1.m22 * b_m12;
				var b_m221 = a1.m02 * b_m20 + a1.m12 * b_m21 + a1.m22 * b_m22;
				a.m00 = b_m001;
				a.m10 = b_m101;
				a.m20 = b_m201;
				a.m01 = b_m011;
				a.m11 = b_m111;
				a.m21 = b_m211;
				a.m02 = b_m021;
				a.m12 = b_m121;
				a.m22 = b_m221;
			}
			this.dirty = false;
		}
		return this.local_to_world_matrix;
	}
	,sync: function() {
		if(!this.coordinates_dirty) {
			return;
		}
		var m = this.get_local_to_world_matrix();
		if(this.parent == null) {
			this._x = this.local_x;
			this._y = this.local_y;
			this._scale_x = this.local_scale_x;
			this._scale_y = this.local_scale_y;
			this._radians = this.local_radians;
		} else {
			var a = m.m00;
			var b = m.m01;
			var c = m.m10;
			var d = m.m11;
			this._x = m.m20;
			this._y = m.m21;
			this._scale_x = Math.sqrt(a * a + b * b);
			this._scale_y = Math.sqrt(c * c + d * d);
			this._radians = 180 / Math.PI * Math.atan2(-c / this._scale_y,a / this._scale_x);
		}
		this.coordinates_dirty = false;
	}
	,set_dirty: function() {
		this.dirty = this.inverse_dirty = this.coordinates_dirty = true;
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_dirty();
		}
		if(this.on_dirty != null) {
			this.on_dirty(this);
		}
	}
	,__class__: echo_util_Transform
};
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__:true,__constructs__:null
	,CFunction: {_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Module",$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="FilePos",$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Method",$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="LocalFunction",$_.__params__ = ["v"],$_)
};
haxe_StackItem.__constructs__ = [haxe_StackItem.CFunction,haxe_StackItem.Module,haxe_StackItem.FilePos,haxe_StackItem.Method,haxe_StackItem.LocalFunction];
var haxe_CallStack = {};
haxe_CallStack.callStack = function() {
	return haxe_NativeStackTrace.toHaxe(haxe_NativeStackTrace.callStack());
};
haxe_CallStack.exceptionStack = function(fullStack) {
	if(fullStack == null) {
		fullStack = false;
	}
	var eStack = haxe_NativeStackTrace.toHaxe(haxe_NativeStackTrace.exceptionStack());
	return fullStack ? eStack : haxe_CallStack.subtract(eStack,haxe_CallStack.callStack());
};
haxe_CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	var _g1 = stack;
	while(_g < _g1.length) {
		var s = _g1[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe_CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe_CallStack.subtract = function(this1,stack) {
	var startIndex = -1;
	var i = -1;
	while(++i < this1.length) {
		var _g = 0;
		var _g1 = stack.length;
		while(_g < _g1) {
			var j = _g++;
			if(haxe_CallStack.equalItems(this1[i],stack[j])) {
				if(startIndex < 0) {
					startIndex = i;
				}
				++i;
				if(i >= this1.length) {
					break;
				}
			} else {
				startIndex = -1;
			}
		}
		if(startIndex >= 0) {
			break;
		}
	}
	if(startIndex >= 0) {
		return this1.slice(0,startIndex);
	} else {
		return this1;
	}
};
haxe_CallStack.equalItems = function(item1,item2) {
	if(item1 == null) {
		if(item2 == null) {
			return true;
		} else {
			return false;
		}
	} else {
		switch(item1._hx_index) {
		case 0:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 0) {
				return true;
			} else {
				return false;
			}
			break;
		case 1:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 1) {
				var m2 = item2.m;
				var m1 = item1.m;
				return m1 == m2;
			} else {
				return false;
			}
			break;
		case 2:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 2) {
				var item21 = item2.s;
				var file2 = item2.file;
				var line2 = item2.line;
				var col2 = item2.column;
				var col1 = item1.column;
				var line1 = item1.line;
				var file1 = item1.file;
				var item11 = item1.s;
				if(file1 == file2 && line1 == line2 && col1 == col2) {
					return haxe_CallStack.equalItems(item11,item21);
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case 3:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 3) {
				var class2 = item2.classname;
				var method2 = item2.method;
				var method1 = item1.method;
				var class1 = item1.classname;
				if(class1 == class2) {
					return method1 == method2;
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case 4:
			if(item2 == null) {
				return false;
			} else if(item2._hx_index == 4) {
				var v2 = item2.v;
				var v1 = item1.v;
				return v1 == v2;
			} else {
				return false;
			}
			break;
		}
	}
};
haxe_CallStack.itemToString = function(b,s) {
	switch(s._hx_index) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s.m;
		b.b += "module ";
		b.b += m == null ? "null" : "" + m;
		break;
	case 2:
		var s1 = s.s;
		var file = s.file;
		var line = s.line;
		var col = s.column;
		if(s1 != null) {
			haxe_CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += file == null ? "null" : "" + file;
		b.b += " line ";
		b.b += line == null ? "null" : "" + line;
		if(col != null) {
			b.b += " column ";
			b.b += col == null ? "null" : "" + col;
		}
		if(s1 != null) {
			b.b += ")";
		}
		break;
	case 3:
		var cname = s.classname;
		var meth = s.method;
		b.b += Std.string(cname == null ? "<unknown>" : cname);
		b.b += ".";
		b.b += meth == null ? "null" : "" + meth;
		break;
	case 4:
		var n = s.v;
		b.b += "local function #";
		b.b += n == null ? "null" : "" + n;
		break;
	}
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
	this.__skipStack = 0;
	var old = Error.prepareStackTrace;
	Error.prepareStackTrace = function(e) { return e.stack; }
	if(((native) instanceof Error)) {
		this.stack = native.stack;
	} else {
		var e = null;
		if(Error.captureStackTrace) {
			Error.captureStackTrace(this,haxe_Exception);
			e = this;
		} else {
			e = new Error();
			if(typeof(e.stack) == "undefined") {
				try { throw e; } catch(_) {}
				this.__skipStack++;
			}
		}
		this.stack = e.stack;
	}
	Error.prepareStackTrace = old;
};
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
		e.__skipStack++;
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
	,__shiftStack: function() {
		this.__skipStack++;
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,get_stack: function() {
		var _g = this.__exceptionStack;
		if(_g == null) {
			var value = haxe_NativeStackTrace.toHaxe(haxe_NativeStackTrace.normalize(this.stack),this.__skipStack);
			this.setProperty("__exceptionStack",value);
			return value;
		} else {
			var s = _g;
			return s;
		}
	}
	,setProperty: function(name,value) {
		try {
			Object.defineProperty(this,name,{ value : value});
		} catch( _g ) {
			this[name] = value;
		}
	}
	,__class__: haxe_Exception
	,__properties__: {get_native:"get_native",get_stack:"get_stack",get_message:"get_message"}
});
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_NativeStackTrace = function() { };
haxe_NativeStackTrace.__name__ = true;
haxe_NativeStackTrace.saveStack = function(e) {
	haxe_NativeStackTrace.lastError = e;
};
haxe_NativeStackTrace.callStack = function() {
	var e = new Error("");
	var stack = haxe_NativeStackTrace.tryHaxeStack(e);
	if(typeof(stack) == "undefined") {
		try {
			throw e;
		} catch( _g ) {
		}
		stack = e.stack;
	}
	return haxe_NativeStackTrace.normalize(stack,2);
};
haxe_NativeStackTrace.exceptionStack = function() {
	return haxe_NativeStackTrace.normalize(haxe_NativeStackTrace.tryHaxeStack(haxe_NativeStackTrace.lastError));
};
haxe_NativeStackTrace.toHaxe = function(s,skip) {
	if(skip == null) {
		skip = 0;
	}
	if(s == null) {
		return [];
	} else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") {
			stack.shift();
		}
		var m = [];
		var _g = 0;
		var _g1 = stack.length;
		while(_g < _g1) {
			var i = _g++;
			if(skip > i) {
				continue;
			}
			var line = stack[i];
			var matched = line.match(/^    at ([A-Za-z0-9_. ]+) \(([^)]+):([0-9]+):([0-9]+)\)$/);
			if(matched != null) {
				var path = matched[1].split(".");
				if(path[0] == "$hxClasses") {
					path.shift();
				}
				var meth = path.pop();
				var file = matched[2];
				var line1 = Std.parseInt(matched[3]);
				var column = Std.parseInt(matched[4]);
				m.push(haxe_StackItem.FilePos(meth == "Anonymous function" ? haxe_StackItem.LocalFunction() : meth == "Global code" ? null : haxe_StackItem.Method(path.join("."),meth),file,line1,column));
			} else {
				m.push(haxe_StackItem.Module(StringTools.trim(line)));
			}
		}
		return m;
	} else if(skip > 0 && Array.isArray(s)) {
		return s.slice(skip);
	} else {
		return s;
	}
};
haxe_NativeStackTrace.tryHaxeStack = function(e) {
	if(e == null) {
		return [];
	}
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = haxe_NativeStackTrace.prepareHxStackTrace;
	var stack = e.stack;
	Error.prepareStackTrace = oldValue;
	return stack;
};
haxe_NativeStackTrace.prepareHxStackTrace = function(e,callsites) {
	var stack = [];
	var _g = 0;
	while(_g < callsites.length) {
		var site = callsites[_g];
		++_g;
		if(haxe_NativeStackTrace.wrapCallSite != null) {
			site = haxe_NativeStackTrace.wrapCallSite(site);
		}
		var method = null;
		var fullName = site.getFunctionName();
		if(fullName != null) {
			var idx = fullName.lastIndexOf(".");
			if(idx >= 0) {
				var className = fullName.substring(0,idx);
				var methodName = fullName.substring(idx + 1);
				method = haxe_StackItem.Method(className,methodName);
			} else {
				method = haxe_StackItem.Method(null,fullName);
			}
		}
		var fileName = site.getFileName();
		var fileAddr = fileName == null ? -1 : fileName.indexOf("file:");
		if(haxe_NativeStackTrace.wrapCallSite != null && fileAddr > 0) {
			fileName = fileName.substring(fileAddr + 6);
		}
		stack.push(haxe_StackItem.FilePos(method,fileName,site.getLineNumber(),site.getColumnNumber()));
	}
	return stack;
};
haxe_NativeStackTrace.normalize = function(stack,skipItems) {
	if(skipItems == null) {
		skipItems = 0;
	}
	if(Array.isArray(stack) && skipItems > 0) {
		return stack.slice(skipItems);
	} else if(typeof(stack) == "string") {
		switch(stack.substring(0,6)) {
		case "Error\n":case "Error:":
			++skipItems;
			break;
		default:
		}
		return haxe_NativeStackTrace.skipLines(stack,skipItems);
	} else {
		return stack;
	}
};
haxe_NativeStackTrace.skipLines = function(stack,skip,pos) {
	if(pos == null) {
		pos = 0;
	}
	if(skip > 0) {
		pos = stack.indexOf("\n",pos);
		if(pos < 0) {
			return "";
		} else {
			return haxe_NativeStackTrace.skipLines(stack,--skip,pos + 1);
		}
	} else {
		return stack.substring(pos);
	}
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
	this.__skipStack++;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_ds_Either = $hxEnums["haxe.ds.Either"] = { __ename__:true,__constructs__:null
	,Left: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Left",$_.__params__ = ["v"],$_)
	,Right: ($_=function(v) { return {_hx_index:1,v:v,__enum__:"haxe.ds.Either",toString:$estr}; },$_._hx_name="Right",$_.__params__ = ["v"],$_)
};
haxe_ds_Either.__constructs__ = [haxe_ds_Either.Left,haxe_ds_Either.Right];
var haxe_ds_IntMap = function() {
	this.h = { };
};
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
	,__class__: haxe_ds_IntMap
};
var haxe_ds_List = function() {
	this.length = 0;
};
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
haxe_ds__$List_ListNode.__name__ = true;
haxe_ds__$List_ListNode.prototype = {
	__class__: haxe_ds__$List_ListNode
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
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
	,__class__: haxe_ds_ObjectMap
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
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
var js_Boot = function() { };
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
			haxe_NativeStackTrace.lastError = _g;
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
lime__$internal_backend_html5_GameDeviceData.__name__ = true;
lime__$internal_backend_html5_GameDeviceData.prototype = {
	__class__: lime__$internal_backend_html5_GameDeviceData
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
var lime_app__$Event_$Float_$Float_$Float_$Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
};
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
var lime_graphics_RenderContext = function() {
};
lime_graphics_RenderContext.__name__ = true;
lime_graphics_RenderContext.prototype = {
	__class__: lime_graphics_RenderContext
};
var lime_graphics_WebGLRenderContext = {};
lime_graphics_WebGLRenderContext.fromWebGL2RenderContext = function(gl) {
	return gl;
};
var lime_graphics_opengl_GL = function() { };
lime_graphics_opengl_GL.__name__ = true;
var lime_media_AudioContext = function(type) {
	if(type != "custom") {
		if(type == null || type == "web") {
			try {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				this.web = new window.AudioContext ();
				this.type = "web";
			} catch( _g ) {
				haxe_NativeStackTrace.lastError = _g;
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
lime_media_AudioContext.__name__ = true;
lime_media_AudioContext.prototype = {
	__class__: lime_media_AudioContext
};
var lime_media_AudioManager = function() { };
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
lime_media_HTML5AudioContext.__name__ = true;
lime_media_HTML5AudioContext.prototype = {
	__class__: lime_media_HTML5AudioContext
};
var lime_media_OpenALAudioContext = function() {
};
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
var lime_system_Sensor = function(type,id) {
	this.onUpdate = new lime_app__$Event_$Float_$Float_$Float_$Void();
	this.type = type;
	this.id = id;
};
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
var lime_ui_Gamepad = function(id) {
	this.onDisconnect = new lime_app__$Event_$Void_$Void();
	this.onButtonUp = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onButtonDown = new lime_app__$Event_$lime_$ui_$GamepadButton_$Void();
	this.onAxisMove = new lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void();
	this.id = id;
	this.connected = true;
};
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
lime_ui_Window.__name__ = true;
lime_ui_Window.prototype = {
	close: function() {
		this.__backend.close();
	}
	,__class__: lime_ui_Window
};
var lime_utils_Log = function() { };
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
var lime_utils_Preloader = function() {
	this.bytesLoadedCache = new haxe_ds_ObjectMap();
	this.onProgress = new lime_app__$Event_$Int_$Int_$Void();
	this.onComplete = new lime_app__$Event_$Void_$Void();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.libraries = [];
	this.libraryNames = [];
	this.onProgress.add($bind(this,this.update));
};
lime_utils_Preloader.__name__ = true;
lime_utils_Preloader.prototype = {
	load: function() {
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
		if(!this.simulateProgress) {
			this.onProgress.dispatch(this.bytesLoaded,this.bytesTotal);
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
peote_view_BufferInterface.__name__ = true;
peote_view_BufferInterface.__isInterface__ = true;
peote_view_BufferInterface.prototype = {
	__class__: peote_view_BufferInterface
};
var peote_view_Buffer_$Circle = function(minSize,growSize,autoShrink) {
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
		if(Circle.instanceBytes == null) {
			Circle.instanceBytes = new peote_view_utils_BufferBytes(new ArrayBuffer(12));
			Circle.instanceBytes.b[0] = 1;
			Circle.instanceBytes.b[1] = 1;
			Circle.instanceBytes.b[2] = 1;
			Circle.instanceBytes.b[3] = 1;
			Circle.instanceBytes.b[4] = 0;
			Circle.instanceBytes.b[5] = 1;
			Circle.instanceBytes.b[6] = 1;
			Circle.instanceBytes.b[7] = 0;
			Circle.instanceBytes.b[8] = 0;
			Circle.instanceBytes.b[9] = 0;
			Circle.instanceBytes.b[10] = 0;
			Circle.instanceBytes.b[11] = 0;
		}
		this._elemBuffSize = 16;
	} else {
		this._elemBuffSize = 120;
	}
	this._bytes = new peote_view_utils_BufferBytes(new ArrayBuffer(this._elemBuffSize * this._minSize));
	this._bytes.fill(0,this._elemBuffSize * this._minSize,0);
};
peote_view_Buffer_$Circle.__name__ = true;
peote_view_Buffer_$Circle.__interfaces__ = [peote_view_BufferInterface];
peote_view_Buffer_$Circle.prototype = {
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
				var size = Circle.instanceBytes.length;
				var bytes = Circle.instanceBytes;
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
					gl.enableVertexAttribArray(2);
					gl.vertexAttribPointer(2,4,gl.UNSIGNED_BYTE,true,16,0);
					gl.vertexAttribDivisor(2,1);
					gl.enableVertexAttribArray(1);
					gl.vertexAttribPointer(1,2,gl.FLOAT,false,16,4);
					gl.vertexAttribDivisor(1,1);
					gl.enableVertexAttribArray(3);
					gl.vertexAttribPointer(3,1,gl.FLOAT,false,16,12);
					gl.vertexAttribDivisor(3,1);
				} else {
					var gl = this._gl;
					gl.bindBuffer(gl.ARRAY_BUFFER,this._glBuffer);
					gl.enableVertexAttribArray(2);
					gl.vertexAttribPointer(2,4,gl.UNSIGNED_BYTE,true,20,0);
					gl.enableVertexAttribArray(1);
					gl.vertexAttribPointer(1,2,gl.FLOAT,false,20,4);
					gl.enableVertexAttribArray(3);
					gl.vertexAttribPointer(3,1,gl.FLOAT,false,20,12);
					gl.enableVertexAttribArray(0);
					gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,20,16);
				}
				this._gl.bindVertexArray(null);
			}
		}
	}
	,updateElement: function(element) {
		if(peote_view_Version.isINSTANCED) {
			var bytes = this._bytes;
			bytes.b_Int32[element.bytePos >> 2] = element.color;
			bytes.b_UFloat32[element.bytePos + 4 >> 2] = element.x;
			bytes.b_UFloat32[element.bytePos + 8 >> 2] = element.y;
			bytes.b_UFloat32[element.bytePos + 12 >> 2] = element.radius;
		} else {
			var bytes = this._bytes;
			bytes.b_Int32[element.bytePos >> 2] = element.color;
			bytes.b_UFloat32[element.bytePos + 4 >> 2] = element.x;
			bytes.b_UFloat32[element.bytePos + 8 >> 2] = element.y;
			bytes.b_UFloat32[element.bytePos + 12 >> 2] = element.radius;
			bytes.b[element.bytePos + 16] = 1;
			bytes.b[element.bytePos + 17] = 1;
			bytes.b_Int32[element.bytePos + 20 >> 2] = element.color;
			bytes.b_UFloat32[element.bytePos + 24 >> 2] = element.x;
			bytes.b_UFloat32[element.bytePos + 28 >> 2] = element.y;
			bytes.b_UFloat32[element.bytePos + 32 >> 2] = element.radius;
			bytes.b[element.bytePos + 36] = 1;
			bytes.b[element.bytePos + 37] = 1;
			bytes.b_Int32[element.bytePos + 40 >> 2] = element.color;
			bytes.b_UFloat32[element.bytePos + 44 >> 2] = element.x;
			bytes.b_UFloat32[element.bytePos + 48 >> 2] = element.y;
			bytes.b_UFloat32[element.bytePos + 52 >> 2] = element.radius;
			bytes.b[element.bytePos + 56] = 0;
			bytes.b[element.bytePos + 57] = 1;
			bytes.b_Int32[element.bytePos + 60 >> 2] = element.color;
			bytes.b_UFloat32[element.bytePos + 64 >> 2] = element.x;
			bytes.b_UFloat32[element.bytePos + 68 >> 2] = element.y;
			bytes.b_UFloat32[element.bytePos + 72 >> 2] = element.radius;
			bytes.b[element.bytePos + 76] = 1;
			bytes.b[element.bytePos + 77] = 0;
			bytes.b_Int32[element.bytePos + 80 >> 2] = element.color;
			bytes.b_UFloat32[element.bytePos + 84 >> 2] = element.x;
			bytes.b_UFloat32[element.bytePos + 88 >> 2] = element.y;
			bytes.b_UFloat32[element.bytePos + 92 >> 2] = element.radius;
			bytes.b[element.bytePos + 96] = 0;
			bytes.b[element.bytePos + 97] = 0;
			bytes.b_Int32[element.bytePos + 100 >> 2] = element.color;
			bytes.b_UFloat32[element.bytePos + 104 >> 2] = element.x;
			bytes.b_UFloat32[element.bytePos + 108 >> 2] = element.y;
			bytes.b_UFloat32[element.bytePos + 112 >> 2] = element.radius;
			bytes.b[element.bytePos + 116] = 0;
			bytes.b[element.bytePos + 117] = 0;
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
							gl.enableVertexAttribArray(2);
							gl.vertexAttribPointer(2,4,gl.UNSIGNED_BYTE,true,16,0);
							gl.vertexAttribDivisor(2,1);
							gl.enableVertexAttribArray(1);
							gl.vertexAttribPointer(1,2,gl.FLOAT,false,16,4);
							gl.vertexAttribDivisor(1,1);
							gl.enableVertexAttribArray(3);
							gl.vertexAttribPointer(3,1,gl.FLOAT,false,16,12);
							gl.vertexAttribDivisor(3,1);
						} else {
							var gl = this._gl;
							gl.bindBuffer(gl.ARRAY_BUFFER,this._glBuffer);
							gl.enableVertexAttribArray(2);
							gl.vertexAttribPointer(2,4,gl.UNSIGNED_BYTE,true,20,0);
							gl.enableVertexAttribArray(1);
							gl.vertexAttribPointer(1,2,gl.FLOAT,false,20,4);
							gl.enableVertexAttribArray(3);
							gl.vertexAttribPointer(3,1,gl.FLOAT,false,20,12);
							gl.enableVertexAttribArray(0);
							gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,20,16);
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
		return "\n\t::if isES3::#version 300 es::end::\n\t::if VERTEX_INT_PRECISION::precision ::VERTEX_INT_PRECISION:: int; ::end::\n\t::if VERTEX_FLOAT_PRECISION::precision ::VERTEX_FLOAT_PRECISION:: float; ::end::\n\t::if VERTEX_SAMPLER_PRECISION::precision ::VERTEX_SAMPLER_PRECISION:: sampler2D; ::end::\n\t\n\t// Uniforms -------------------------\n\t::if (!isPICKING && isUBO)::\n\t//layout(std140) uniform uboView\n\tuniform uboView\n\t{\n\t\tvec2 uResolution;\n\t\tvec2 uViewOffset;\n\t\tvec2 uViewZoom;\n\t};\n\t//layout(std140) uniform uboDisplay\n\tuniform uboDisplay\n\t{\n\t\tvec2 uOffset;\n\t\tvec2 uZoom;\n\t};\n\t::else::\n\tuniform vec2 uResolution;\n\tuniform vec2 uOffset;\n\tuniform vec2 uZoom;\n\t::end::\n\t\n\t\n\t\n\t// Attributes -------------------------\n\t::IN:: vec2 aPosition;\n\t\n\t::if isPICKING::\n\t\t::if !isINSTANCED::\n\t\t\t::IN:: vec4 aElement;\n\t\t::end::\n\t::end::\n\t\n\t::IN:: vec2 aPos;\n\t\n\t\n\t\n\t\n\t\n\t::IN:: vec4 aColorStart0;\n\t\n\t::IN:: float aFloat0;\n\t\n\t// Varyings ---------------------------\n\t::if isPICKING::\n\t\t::if isINSTANCED::\n\t\t\tflat ::VAROUT:: int vElement;\n\t\t::else::\n\t\t\t::VAROUT:: vec4 vElement;\n\t\t::end::\n\t::end::\n\t\n\t::if isES3::flat ::end::::VAROUT:: vec4 vColor0;\n\t::if isES3::flat ::end:: ::VAROUT:: float vPack0;\n\t\n\t::if (hasTEXTURES || hasFRAGMENT_INJECTION)::\n\t\t::VAROUT:: vec2 vTexCoord;\n\t\t\n\t::end::\t\n\n\t// custom functions -------------------\n\t::VERTEX_INJECTION::\n\n\t// --------- vertex main --------------\n\tvoid main(void)\n\t{\n\t\t\n\t\tvec2 size = ::if SIZE_FORMULA::::SIZE_FORMULA::::else::vec2((aFloat0) * 2.0, (aFloat0) * 2.0)::end::;\n\t\tvec2 pivot = ::if PIVOT_FORMULA::::PIVOT_FORMULA::::else::vec2((aFloat0), (aFloat0))::end::;\t\t\n\t\t\n\t\tvec2 pos = ::if POS_FORMULA::::POS_FORMULA::::else::aPos::end::;\npos = pos + (aPosition * size - pivot);\n\t\tvColor0 = aColorStart0.wzyx; \n\n\t\tvPack0 = ::if FORMULA_VARYINGS.radius::::FORMULA_VARYINGS.radius::::else::aFloat0::end::;\n\n\t\t::if (hasTEXTURES || hasFRAGMENT_INJECTION)::\n\t\t\tvTexCoord = aPosition;\t\t\t\n\t\t\t\n\t\t::end::\n\t\t\n\t\t::if isPICKING::\n\t\t\t::if isINSTANCED::\n\t\t\t\tvElement = gl_InstanceID + 1;\n\t\t\t::else::\n\t\t\t\tvElement = aElement;\n\t\t\t::end::\n\t\t::end::\n\t\t\n\t\tfloat width = uResolution.x;\n\t\tfloat height = uResolution.y;\n\t\t::if (!isPICKING && isUBO)::\n\t\tfloat deltaX = (uOffset.x  + uViewOffset.x) / uZoom.x;\n\t\tfloat deltaY = (uOffset.y  + uViewOffset.y) / uZoom.y;\n\t\tvec2 zoom = uZoom * uViewZoom;\n\t\t::else::\n\t\tfloat deltaX = uOffset.x;\n\t\tfloat deltaY = uOffset.y;\n\t\tvec2 zoom = uZoom;\n\t\t::end::\n\t\t\n\t\t::if isPIXELSNAPPING::\n\t\tpos = floor( pos * ::PIXELDIVISOR:: * zoom ) / ::PIXELDIVISOR:: / zoom;\n\t\t::end::\n\t\t\n\t\tgl_Position = vec4 (\n\t\t\t 2.0 * zoom.x/width  * (pos.x + deltaX) - 1.0,\n\t\t\t-2.0 * zoom.y/height * (pos.y + deltaY) + 1.0,\n\t\t\t- 0.0,\n\t\t\t1.0\n\t\t);\t\t\n\t\t\n\t}\n\t";
	}
	,getFragmentShader: function() {
		return "\n\t::if isES3::#version 300 es::end::\n\t::foreach FRAGMENT_EXTENSIONS::#extension ::EXTENSION:: : enable\n\t::end::\n\t\n\t::if FRAGMENT_INT_PRECISION::precision ::FRAGMENT_INT_PRECISION:: int; ::end::\n\t::if FRAGMENT_FLOAT_PRECISION::precision ::FRAGMENT_FLOAT_PRECISION:: float; ::end::\n\t::if FRAGMENT_SAMPLER_PRECISION::precision ::FRAGMENT_SAMPLER_PRECISION:: sampler2D; ::end::\n\t\n\t// Uniforms -------------------------\t\n\t::FRAGMENT_PROGRAM_UNIFORMS::\n\t\n\t// Varyings ---------------------------\n\t::if isPICKING::\n\t\t::if isINSTANCED::\n\t\t\tflat ::VARIN:: int vElement;\n\t\t::else::\n\t\t\t::VARIN:: vec4 vElement;\n\t\t::end::\n\t::end::\n\n\t::if isES3::flat ::end::::VARIN:: vec4 vColor0; \n\t::if isES3::flat ::end:: ::VARIN:: float vPack0;\n\t\t\t\n\t::if (hasTEXTURES || hasFRAGMENT_INJECTION)::\n\t\t::VARIN:: vec2 vTexCoord;\n\t\t\n\t::end::\t\n\t\n\t\n\t::if isES3::\n\t\t::if (isPICKING && isINSTANCED)::\n\t\t\tout int Color;\n\t\t::else::\n\t\t\tout vec4 Color;\n\t\t::end::\n\t::end::\n\n\t::if hasTEXTURE_FUNCTIONS::\n\t\t// function to get texture color\n\t\tvec4 getTextureColor(int TXTNUM, vec2 vTexCoord) {\n\t\t::foreach TEXTURES::\n\t\t\t\n\t\t\t::if (LAYER >= 0)::\n\t\t\t::if USED_ID::\n\t\t\t\tif (TXTNUM == ::LAYER::) {\n\t\t\t\t\t::foreach UNITS::\n\t\t\t\t\t::if !FIRST ::else ::end::::if !LAST ::if (0.0 < ::UNIT_VALUE::)::end::\n\t\t\t\t\t\treturn(texture::if !isES3::2D::end::(::TEXTURE::, vec2(vTexCoord.x * ::SLOTS_WIDTH::, vTexCoord.y * ::SLOTS_HEIGHT::)));\n\t\t\t\t\t::end::\n\t\t\t\t}\n\t\t\t::end::\n\t\t\t::end::\n\t\t\t\n\t\t::end::\n\t\t// default values:\n\t\t::foreach TEXTURE_DEFAULTS::\n\t\t\tif (TXTNUM == ::LAYER::) {return(::DEFAULT_VALUE::);}\t\t\n\t\t::end::\n\t\t}\n\t::else:: \n\t\t::if hasFRAGMENT_INJECTION::#define getTextureColor(a,b) vec4(0.0,0.0,0.0,0.0)::end::\n\t::end::\n\n\t::if hasTEXTURE_FUNCTIONS::\n\t\t// function to get full texture size\n\t\tvec2 getTextureResolution(int TXTNUM) {\n\t\t::foreach TEXTURES::\n\t\t\t\n\t\t\t::if (LAYER >= 0)::\n\t\t\t::if USED_ID::\n\t\t\t\tif (TXTNUM == ::LAYER::) {\n\t\t\t\t\t::foreach UNITS::\n\t\t\t\t\t::if !FIRST ::else ::end::::if !LAST ::if (0.0 < ::UNIT_VALUE::)::end::\n\t\t\t\t\t\treturn( vec2(::TEXTURE_WIDTH::, ::TEXTURE_HEIGHT::) );\n\t\t\t\t\t::end::\n\t\t\t\t}\n\t\t\t::end::\n\t\t\t::end::\n\t\t\t\n\t\t::end::\n\t\t// default values:\n\t\t::foreach TEXTURE_DEFAULTS::\n\t\t\tif (TXTNUM == ::LAYER::) {return(vec2(0.0,0.0));}\t\t\n\t\t::end::\n\t\t}\n\t::else:: \n\t\t::if hasFRAGMENT_INJECTION::#define getTextureResolution(a) vec2(0.0,0.0)::end::\n\t::end::\n\n\t// custom functions -------------------\n\t::FRAGMENT_INJECTION::\n\t\n\t// --------- fragment main ------------\n\tvoid main(void)\n\t{\t\n\t\tvec4 c0 = vColor0; \n\t\t\n\t\t::if hasTEXTURES::\n\t\t\t::foreach TEXTURES::\n\t\t\t\t// ------------- LAYER ::LAYER:: --------------\n\t\t\t\t\n\t\t\t\t::if (LAYER >= 0)::\n\t\t\t\t::if USED::\n\t\t\t\t\tvec4 t::LAYER::;\n\t\t\t\t\t::foreach UNITS::\n\t\t\t\t\t::if !FIRST ::else ::end::::if !LAST ::if (0.0 < ::UNIT_VALUE::)::end::\n\t\t\t\t\t\tt::LAYER:: = texture::if !isES3::2D::end::(::TEXTURE::, vec2(vTexCoord.x * ::SLOTS_WIDTH::, vTexCoord.y * ::SLOTS_HEIGHT::));\n\t\t\t\t\t::end::\n\t\t\t\t::end::\n\t\t\t\t::end::\n\t\t\t\t\n\t\t\t::end::\n\t\t::end::\n\t\t\n\t\t// calc final color from all layers\n\t\tvec4 col = ::FRAGMENT_CALC_LAYER::;\n\t\t\n\t\t::if isDISCARD:: \n\t\t\tif (col.a <= ::DISCARD::) discard;\n\t\t::end::\n\t\t\n\t\t::if isPICKING::\n\t\t\t::if !isES3::gl_Frag::end::Color = vElement;\n\t\t::else::\n\t\t\t::if !isES3::gl_Frag::end::Color = col;\n\t\t\t// this fixing problem on old FF if alpha goes zero\n\t\t\t::if !isES3::gl_Frag::end::Color.w = clamp(::if !isES3::gl_Frag::end::Color.w, 0.003, 1.0);\n\t\t::end::\n\t}\n\t";
	}
	,getTextureIdentifiers: function() {
		return [];
	}
	,getColorIdentifiers: function() {
		return "color".split(",");
	}
	,getCustomIdentifiers: function() {
		return "radius".split(",");
	}
	,getCustomVaryings: function() {
		return "vPack0".split(",");
	}
	,getDefaultColorFormula: function() {
		return "color*circle(radius)";
	}
	,getDefaultFormulaVars: function() {
		return Circle.DEFAULT_FORMULA_VARS;
	}
	,getFormulas: function() {
		return Circle.FORMULAS;
	}
	,getAttributes: function() {
		return Circle.ATTRIBUTES;
	}
	,getFormulaNames: function() {
		return Circle.FORMULA_NAMES;
	}
	,getFormulaVaryings: function() {
		if(Circle.FORMULA_VARYINGS == "") {
			return [];
		} else {
			return Circle.FORMULA_VARYINGS.split(",");
		}
	}
	,getFormulaConstants: function() {
		if(Circle.FORMULA_CONSTANTS == "") {
			return [];
		} else {
			return Circle.FORMULA_CONSTANTS.split(",");
		}
	}
	,getMaxZindex: function() {
		return 2097151;
	}
	,hasAlpha: function() {
		return true;
	}
	,hasZindex: function() {
		return false;
	}
	,hasPicking: function() {
		return false;
	}
	,needFragmentPrecision: function() {
		return false;
	}
	,bindAttribLocations: function(gl,glProgram) {
		if(peote_view_Version.isINSTANCED) {
			gl.bindAttribLocation(glProgram,2,"aColorStart0");
			gl.bindAttribLocation(glProgram,1,"aPos");
			gl.bindAttribLocation(glProgram,3,"aFloat0");
			gl.bindAttribLocation(glProgram,0,"aPosition");
		} else {
			gl.bindAttribLocation(glProgram,2,"aColorStart0");
			gl.bindAttribLocation(glProgram,1,"aPos");
			gl.bindAttribLocation(glProgram,3,"aFloat0");
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
				gl.enableVertexAttribArray(2);
				gl.vertexAttribPointer(2,4,gl.UNSIGNED_BYTE,true,16,0);
				gl.vertexAttribDivisor(2,1);
				gl.enableVertexAttribArray(1);
				gl.vertexAttribPointer(1,2,gl.FLOAT,false,16,4);
				gl.vertexAttribDivisor(1,1);
				gl.enableVertexAttribArray(3);
				gl.vertexAttribPointer(3,1,gl.FLOAT,false,16,12);
				gl.vertexAttribDivisor(3,1);
			}
			this._gl.drawArraysInstanced(this._gl.TRIANGLE_STRIP,0,6,toElement);
			if(peote_view_Version.isVAO) {
				this._gl.bindVertexArray(null);
			} else {
				var gl = this._gl;
				gl.disableVertexAttribArray(0);
				gl.disableVertexAttribArray(2);
				gl.disableVertexAttribArray(1);
				gl.disableVertexAttribArray(3);
			}
			this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);
		} else {
			if(peote_view_Version.isVAO) {
				this._gl.bindVertexArray(this._glVAO);
			} else {
				var gl = this._gl;
				gl.bindBuffer(gl.ARRAY_BUFFER,this._glBuffer);
				gl.enableVertexAttribArray(2);
				gl.vertexAttribPointer(2,4,gl.UNSIGNED_BYTE,true,20,0);
				gl.enableVertexAttribArray(1);
				gl.vertexAttribPointer(1,2,gl.FLOAT,false,20,4);
				gl.enableVertexAttribArray(3);
				gl.vertexAttribPointer(3,1,gl.FLOAT,false,20,12);
				gl.enableVertexAttribArray(0);
				gl.vertexAttribPointer(0,2,gl.UNSIGNED_BYTE,false,20,16);
			}
			this._gl.drawArrays(this._gl.TRIANGLE_STRIP,0,toElement * 6);
			if(peote_view_Version.isVAO) {
				this._gl.bindVertexArray(null);
			} else {
				var gl = this._gl;
				gl.disableVertexAttribArray(0);
				gl.disableVertexAttribArray(2);
				gl.disableVertexAttribArray(1);
				gl.disableVertexAttribArray(3);
			}
			this._gl.bindBuffer(this._gl.ARRAY_BUFFER,null);
		}
	}
	,__class__: peote_view_Buffer_$Circle
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
									haxe_Log.trace("switching to DEPTH_COMPONENT16 for framebuffer",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 41, className : "peote.view.utils.GLTool", methodName : "createFramebuffer"});
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
							haxe_Log.trace("switching to DEPTH_COMPONENT16 for framebuffer",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 41, className : "peote.view.utils.GLTool", methodName : "createFramebuffer"});
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
		haxe_Log.trace("WEBGL2 detected.",{ fileName : "peote/view/PeoteGL.hx", lineNumber : 121, className : "peote.view._PeoteGL.PeoteGL_Impl_", methodName : "fromRenderContext"});
		peote_view_Version.isUBO = true;
		peote_view_Version.isINSTANCED = true;
		peote_view_Version.isVAO = true;
		peote_view_Version.isES3 = true;
		return context.webgl2;
	} else if(context.webgl != null) {
		haxe_Log.trace("WEBGL1 detected.",{ fileName : "peote/view/PeoteGL.hx", lineNumber : 126, className : "peote.view._PeoteGL.PeoteGL_Impl_", methodName : "fromRenderContext"});
		return context.webgl;
	} else {
		window.alert("Error: missing webgl context");
		return null;
	}
};
var peote_view_Version = function() { };
peote_view_Version.__name__ = true;
var peote_view_Precision = function() { };
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
		haxe_Log.trace("switching to DEPTH_COMPONENT16 for framebuffer",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 41, className : "peote.view.utils.GLTool", methodName : "createFramebuffer"});
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
peote_view_ActiveTexture.__name__ = true;
peote_view_ActiveTexture.prototype = {
	__class__: peote_view_ActiveTexture
};
var peote_view_Program = function(buffer) {
	this.uniformFloats = [];
	this.uniformFloatsFragment = null;
	this.uniformFloatsVertex = null;
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
		haxe_NativeStackTrace.lastError = _g;
		var e = haxe_Exception.caught(_g).unwrap();
		throw haxe_Exception.thrown("Error: cyclic reference of \"" + Std.string(e.errVar) + "\" inside @formula \"" + Std.string(e.formula) + "\" for \"" + Std.string(e.errKey) + "\"");
	}
	peote_view_utils_Util.resolveFormulaVars(buffer.getFormulas(),buffer.getAttributes());
	this.parseColorFormula();
};
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
								haxe_Log.trace("switching to DEPTH_COMPONENT16 for framebuffer",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 41, className : "peote.view.utils.GLTool", methodName : "createFramebuffer"});
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
	,injectIntoFragmentShader: function(glslCode,uTimeUniformEnabled,uniformFloats,autoUpdateTextures) {
		if(uTimeUniformEnabled == null) {
			uTimeUniformEnabled = false;
		}
		if(glslCode == null) {
			glslCode = "";
		}
		this.hasFragmentInjection = glslCode == "" ? false : true;
		this.uniformFloatsFragment = uniformFloats;
		var tmp = (uTimeUniformEnabled ? "uniform float uTime;" : "") + this.generateUniformFloatsGLSL(uniformFloats);
		this.glShaderConfig.FRAGMENT_INJECTION = tmp + glslCode;
		this.accumulateUniformsFloat();
		if(autoUpdateTextures != null) {
			if(autoUpdateTextures) {
				this.updateTextures();
			}
		} else if(this.autoUpdateTextures) {
			this.updateTextures();
		}
	}
	,generateUniformFloatsGLSL: function(uniformFloats) {
		var out = "";
		if(uniformFloats != null) {
			var _g = 0;
			while(_g < uniformFloats.length) {
				var u = uniformFloats[_g];
				++_g;
				out += "uniform float " + u.name + ";";
			}
		}
		return out;
	}
	,accumulateUniformsFloat: function() {
		if(this.uniformFloatsVertex == null) {
			if(this.uniformFloatsFragment != null) {
				this.uniformFloats = this.uniformFloatsFragment;
			}
		} else if(this.uniformFloatsFragment == null) {
			this.uniformFloats = this.uniformFloatsVertex;
		} else {
			this.uniformFloats = this.uniformFloatsVertex;
			var _g = 0;
			var _g1 = this.uniformFloatsFragment;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				if(this.uniformFloats.indexOf(u) < 0) {
					this.uniformFloats.push(u);
				}
			}
		}
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
				haxe_NativeStackTrace.lastError = _g;
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
					haxe_Log.trace(" -- replacing Formula " + n + " => " + f,{ fileName : "peote/view/Program.hx", lineNumber : 591, className : "peote.view.Program", methodName : "parseAndResolveFormulas"});
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
					haxe_Log.trace(" -- replacing Formula " + n + " => " + f,{ fileName : "peote/view/Program.hx", lineNumber : 601, className : "peote.view.Program", methodName : "parseAndResolveFormulas"});
				} else {
					this.glShaderConfig.FORMULA_CONSTANTS[n] = null;
				}
			}
		}
	}
	,discardAtAlpha: function(atAlphaValue,autoUpdateTextures) {
		if(atAlphaValue == null) {
			this.glShaderConfig.isDISCARD = false;
		} else {
			this.glShaderConfig.isDISCARD = true;
			var s = "" + Std.string(atAlphaValue);
			this.glShaderConfig.DISCARD = s.indexOf(".") != -1 || s.indexOf("e-") != -1 ? s : s + ".0";
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
							haxe_Log.trace("switching to DEPTH_COMPONENT16 for framebuffer",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 41, className : "peote.view.utils.GLTool", methodName : "createFramebuffer"});
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
peote_view_Texture.__name__ = true;
peote_view_Texture.prototype = {
	bufferImage: function(image,imgProp) {
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
peote_view__$TextureData_TextureDataImpl.__name__ = true;
peote_view__$TextureData_TextureDataImpl.prototype = {
	__class__: peote_view__$TextureData_TextureDataImpl
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
peote_view_UniformFloat.__name__ = true;
peote_view_UniformFloat.prototype = {
	__class__: peote_view_UniformFloat
};
var peote_view_utils_Background = function(gl) {
	this.gl = gl;
	this.createBuffer();
	this.createProgram();
};
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
peote_view_utils_GLTool.__name__ = true;
peote_view_utils_GLTool.clearGlErrorQueue = function(gl) {
	while(gl.getError() != gl.NO_ERROR) {
	}
};
peote_view_utils_GLTool.getLastGlError = function(gl) {
	var err = gl.getError();
	if(err != gl.NO_ERROR) {
		if(err == gl.INVALID_ENUM) {
			haxe_Log.trace("(GL-Error: INVALID_ENUM)",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 22, className : "peote.view.utils.GLTool", methodName : "getLastGlError"});
		} else if(err == gl.INVALID_VALUE) {
			haxe_Log.trace("(GL-Error: INVALID_VALUE)",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 23, className : "peote.view.utils.GLTool", methodName : "getLastGlError"});
		} else if(err == gl.INVALID_OPERATION) {
			haxe_Log.trace("(GL-Error: INVALID_OPERATION)",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 24, className : "peote.view.utils.GLTool", methodName : "getLastGlError"});
		} else if(err == gl.OUT_OF_MEMORY) {
			haxe_Log.trace("(GL-Error: OUT_OF_MEMORY)",{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 25, className : "peote.view.utils.GLTool", methodName : "getLastGlError"});
		} else {
			haxe_Log.trace("GL-Error: " + err,{ fileName : "peote/view/utils/GLTool.hx", lineNumber : 26, className : "peote.view.utils.GLTool", methodName : "getLastGlError"});
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
peote_view_utils_RenderListItem_$peote_$view_$Program.__name__ = true;
peote_view_utils_RenderListItem_$peote_$view_$Program.prototype = {
	__class__: peote_view_utils_RenderListItem_$peote_$view_$Program
};
var peote_view_utils_RenderList_$peote_$view_$ActiveTexture = function(itemMap) {
	this.last = null;
	this.first = null;
	this.itemMap = itemMap;
};
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
			haxe_Log.trace("switching to RGBA16F for float precision texture creation",{ fileName : "peote/view/utils/TexUtils.hx", lineNumber : 25, className : "peote.view.utils.TexUtils", methodName : "createEmptyTexture"});
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
				haxe_Log.trace("switching to RGBA for float precision texture creation",{ fileName : "peote/view/utils/TexUtils.hx", lineNumber : 28, className : "peote.view.utils.TexUtils", methodName : "createEmptyTexture"});
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
				haxe_NativeStackTrace.lastError = _g;
				var _g1 = haxe_Exception.caught(_g).unwrap();
				if(typeof(_g1) == "string") {
					var s = _g1;
					haxe_Log.trace(s,{ fileName : "utils/MultipassTemplate.hx", lineNumber : 211, className : "utils.MultipassTemplate", methodName : "parse"});
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
			haxe_NativeStackTrace.lastError = _g;
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
				haxe_NativeStackTrace.lastError = _g;
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
				haxe_NativeStackTrace.lastError = _g;
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
				haxe_NativeStackTrace.lastError = _g;
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
				haxe_NativeStackTrace.lastError = _g;
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
					haxe_NativeStackTrace.lastError = _g;
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
				haxe_NativeStackTrace.lastError = _g;
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
				haxe_NativeStackTrace.lastError = _g;
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
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
lime_utils_Log.level = 4;
if(typeof console == "undefined") {
	console = {}
}
if(console.log == null) {
	console.log = function() {
	};
}
Circle.__meta__ = { fields : { x : { posX : null, set : ["Position"]}, y : { posY : null, set : ["Position"]}, radius : { custom : null, varying : null}, color : { color : null}}};
Circle.fShader = "\n\t\tfloat circle(float radius)\n\t\t{\n\t\t\tfloat x = (vTexCoord.x - 0.5) * 2.0;\n\t\t\tfloat y = (vTexCoord.y - 0.5) * 2.0;\n\t\t\tfloat r = sqrt(x * x + y * y);\n\t\t\tfloat c;\n\t\t\t\n\t\t\tif ( r < 1.0 && r > 1.0 - 2.0/radius ) {\n\t\t\t\tc = 1.0;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tc = 0.0;\n\t\t\t}\n\t\t\treturn c;\n\t\t}\n\t";
Circle.FORMULAS = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["w"] = "radius * 2.0";
	_g.h["py"] = "radius";
	_g.h["px"] = "radius";
	_g.h["h"] = "radius * 2.0";
	$r = _g;
	return $r;
}(this));
Circle.ATTRIBUTES = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["yStart"] = "aPos.y";
	_g.h["yEnd"] = "aPos.y";
	_g.h["y"] = "aPos.y";
	_g.h["xStart"] = "aPos.x";
	_g.h["xEnd"] = "aPos.x";
	_g.h["x"] = "aPos.x";
	_g.h["wStart"] = "100.0";
	_g.h["wEnd"] = "100.0";
	_g.h["w"] = "100.0";
	_g.h["radiusStart"] = "aFloat0";
	_g.h["radiusEnd"] = "aFloat0";
	_g.h["radius"] = "aFloat0";
	_g.h["pyStart"] = "0.0";
	_g.h["pyEnd"] = "0.0";
	_g.h["py"] = "0.0";
	_g.h["pxStart"] = "0.0";
	_g.h["pxEnd"] = "0.0";
	_g.h["px"] = "0.0";
	_g.h["hStart"] = "100.0";
	_g.h["hEnd"] = "100.0";
	_g.h["h"] = "100.0";
	$r = _g;
	return $r;
}(this));
Circle.FORMULA_NAMES = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	_g.h["sizeX"] = "w";
	_g.h["sizeY"] = "h";
	_g.h["posX"] = "x";
	_g.h["posY"] = "y";
	_g.h["pivotX"] = "px";
	_g.h["pivotY"] = "py";
	$r = _g;
	return $r;
}(this));
Circle.FORMULA_VARYINGS = "radius";
Circle.FORMULA_CONSTANTS = "";
Circle.DEFAULT_FORMULA_VARS = new haxe_ds_StringMap();
Main.MAX_RADIUS = 100;
echo_Body.default_mass = -1;
echo_Body.minimum_mass = 0.0001;
echo_Body.ids = 0;
echo_Collisions.qr = [];
echo_Collisions.sqr = [];
echo_Echo.cached_listeners = new echo_Listeners();
echo_Echo.cached_collisions = [];
echo_Echo.cached_body = new echo_Body({ mass : 1});
echo_Line.pool = new echo_util_GenericPool_$echo_$Line(echo_Line);
echo_Material.global = new echo_Material(null,null,null,null,null);
echo_data_Collision.pool = new echo_util_GenericPool_$echo_$data_$Collision(echo_data_Collision);
echo_data_CollisionData.pool = new echo_util_GenericPool_$echo_$data_$CollisionData(echo_data_CollisionData);
echo_data_Intersection.pool = new echo_util_GenericPool_$echo_$data_$Intersection(echo_data_Intersection);
echo_data_IntersectionData.pool = new echo_util_GenericPool_$echo_$data_$IntersectionData(echo_data_IntersectionData);
echo_shape_Circle.pool = new echo_util_GenericPool_$echo_$shape_$Circle(echo_shape_Circle);
echo_shape_Polygon.pool = new echo_util_GenericPool_$echo_$shape_$Polygon(echo_shape_Polygon);
echo_shape_Rect.pool = new echo_util_GenericPool_$echo_$shape_$Rect(echo_shape_Rect);
echo_util_AABB.pool = new echo_util_GenericPool_$echo_$util_$AABB(echo_util_AABB);
echo_util_QuadTree.pool = new echo_util_GenericPool_$echo_$util_$QuadTree(echo_util_QuadTree);
echo_util_SAT.norm = (function($this) {
	var $r;
	var this1 = new echo_math_Vector2Default(0,0);
	$r = this1;
	return $r;
}(this));
echo_util_SAT.closest = (function($this) {
	var $r;
	var this1 = new echo_math_Vector2Default(0,0);
	$r = this1;
	return $r;
}(this));
lime__$internal_backend_html5_HTML5Window.windowID = 0;
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

// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){function h(a){c.appendChild(a.dom);return a}function k(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();k(++l%c.children.length)},!1);var g=(performance||Date).now(),e=g,a=0,r=h(new Stats.Panel("FPS","#0ff","#002")),f=h(new Stats.Panel("MS","#0f0","#020"));
if(self.performance&&self.performance.memory)var t=h(new Stats.Panel("MB","#f08","#201"));k(0);return{REVISION:16,dom:c,addPanel:h,showPanel:k,begin:function(){g=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();f.update(c-g,200);if(c>e+1E3&&(r.update(1E3*a/(c-e),100),e=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){g=this.end()},domElement:c,setMode:k}};
Stats.Panel=function(h,k,l){var c=Infinity,g=0,e=Math.round,a=e(window.devicePixelRatio||1),r=80*a,f=48*a,t=3*a,u=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=f;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,f);b.fillStyle=k;b.fillText(h,t,u);b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(f,
v){c=Math.min(c,f);g=Math.max(g,f);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=k;b.fillText(e(f)+" "+h+" ("+e(c)+"-"+e(g)+")",t,u);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,e((1-f/v)*p))}}};"object"===typeof module&&(module.exports=Stats);

if(typeof define == "function" && define.__amd) {
	define.amd = define.__amd;
	delete define.__amd;
}