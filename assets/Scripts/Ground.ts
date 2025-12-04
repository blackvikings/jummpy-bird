import { _decorator, Component, Node, Vec3, UITransform, director, Canvas, UI } from 'cc';
const { ccclass, property } = _decorator;

import { GameCtrl } from "./GameCtrl";

@ccclass('Ground')
export class Ground extends Component {

    @property({
        type: Node,
        tooltip: "Ground 1 is Here"
    })
    public ground1: Node;

    @property({
        type: Node,
        tooltip: "Ground 2 is Here"
    })
    public ground2: Node;

    @property({
        type: Node,
        tooltip: "Ground 3 is Here"
    })
    public ground3: Node;

    //Create ground width variables
    public groundWidth1: number;
    public groundWidth2: number;
    public groundWidth3: number;

    public tempStartLocations1 = new Vec3;
    public tempStartLocations2 = new Vec3;
    public tempStartLocations3 = new Vec3;

    public gameCtrlSpeed = new GameCtrl;
    public gameSpeed: number;

    onLoad() {
        this.startUp();
    }

    startUp() {
        this.groundWidth1 = this.ground1.getComponent(UITransform).width;
        this.groundWidth2 = this.ground2.getComponent(UITransform).width;
        this.groundWidth3 = this.ground3.getComponent(UITransform).width;

        this.tempStartLocations1.x = 0;
        this.tempStartLocations2.x = this.groundWidth1;
        this.tempStartLocations3.x = this.groundWidth1 + this.groundWidth2;

        this.ground1.setPosition(this.tempStartLocations1);
        this.ground2.setPosition(this.tempStartLocations2);
        this.ground3.setPosition(this.tempStartLocations3);
    }

    update(deltaTime: number) {

        this.gameSpeed = this.gameCtrlSpeed.speed;

        this.ground1.getPosition(this.tempStartLocations1);
        this.ground2.getPosition(this.tempStartLocations2);
        this.ground3.getPosition(this.tempStartLocations3);

        this.tempStartLocations1.x -= this.gameSpeed * deltaTime;
        this.tempStartLocations2.x -= this.gameSpeed * deltaTime;
        this.tempStartLocations3.x -= this.gameSpeed * deltaTime;

        const totalWidth = this.groundWidth1 + this.groundWidth2 + this.groundWidth3;

        if (this.tempStartLocations1.x <= -this.groundWidth1) {
            this.tempStartLocations1.x += totalWidth;
        }
        if (this.tempStartLocations2.x <= -this.groundWidth2) {
            this.tempStartLocations2.x += totalWidth;
        }
        if (this.tempStartLocations3.x <= -this.groundWidth3) {
            this.tempStartLocations3.x += totalWidth;
        }

        this.ground1.setPosition(this.tempStartLocations1);
        this.ground2.setPosition(this.tempStartLocations2);
        this.ground3.setPosition(this.tempStartLocations3);
    }
}
