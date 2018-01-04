// TypeScript file
class Bitmap extends egret.DisplayObjectContainer {
    private logo: egret.Bitmap;

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
        this.loadResource();
        this.drawBg();
    }

    /*绘制背景*/
    private drawBg(): void {
        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x8f4080, .4);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        bg.graphics.endFill();
        this.addChild(bg);
    }

    private loadResource(): void {
        // 使用下面的方法加载资源
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig('resource/default.res.json', 'resource/');
        RES.loadGroup('bitmap')
    }

    /**
     * 资源加载回调函数
     * */
    private onResourceLoadComplete(evt: RES.ResourceEvent): void {
        this.logo = new egret.Bitmap();// 变量实例化
        this.logo.texture = RES.getRes('egret_icon_png');// 获取资源
        this.addChild(this.logo);//添加到显示列表中
    }
}