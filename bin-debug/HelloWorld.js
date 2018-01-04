var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript file
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    /**
     * 构造函数
     * */
    function HelloWorld() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.startGame, _this);
        return _this;
    }
    /**
     * 游戏启动后执行函数
     * */
    HelloWorld.prototype.startGame = function () {
        alert('hello world!');
    };
    return HelloWorld;
}(egret.DisplayObjectContainer));
__reflect(HelloWorld.prototype, "HelloWorld");
