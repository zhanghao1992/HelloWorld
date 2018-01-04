// TypeScript file
class BitmapAnination extends egret.DisplayObjectContainer {
    private logo: egret.Bitmap;

    /*构造函数*/
    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.startGame, this);
    }

    /*游戏启动后执行函数*/
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
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onRourceLoadComplete, this);
        RES.loadConfig('resource/default.res.json', 'resource/');
        RES.loadGroup('bitmap')
    }

    /*资源加载回调函数*/
    private onRourceLoadComplete(evt: RES.ResourceEvent): void {
        this.logo = new egret.Bitmap();// 变量实例化
        this.logo.texture = RES.getRes('egret_icon_png');// 获取资源
        this.addChild(this.logo);//添加到显示列表中
        this.bitmapAnimation();
    }

    private bitmapAnimation(): void {
        let tw = egret.Tween.get(this.logo);
        const logoWidth = this.logo.texture._bitmapWidth;
        const logoHeight = this.logo.texture._bitmapHeight;
        console.log(this.logo.texture)
        tw.to({x: this.stage.stageWidth - logoWidth, y: 0}, 5000);
        tw.to({x: this.stage.stageWidth - logoWidth, y: this.stage.stageHeight - logoHeight}, 5000);
        tw.to({x: 0, y: this.stage.stageHeight - logoHeight}, 5000);
        tw.to({x: 0, y: 0}, 5000);
        tw.call(this.bitmapAnimation, this);
    }
}