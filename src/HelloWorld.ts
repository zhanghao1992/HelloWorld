// TypeScript file
class HelloWorld extends egret.DisplayObjectContainer {
    /**
     * 构造函数
     * */
    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }

    /**
     * 游戏启动后执行函数
     * */
    public startGame(): void {
        alert('hello world!')
    }
}