import { _decorator, Component, Node, Vec3, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {

    @property({
        type:Node,
        tooltip: "Ground 1 is Here"
    })

    public ground1: Node

    @property({
        type:Node,
        tooltip: "Ground 2 is Here"
    })

    public ground2: Node

    @property({
        type:Node,
        tooltip: "Ground 3 is Here"
    })

    public ground3: Node

    //Create ground width variables
    public groundWidth1:number;
    public groundWidth2:number;
    public groundWidth3:number;

    public tempStartLocations1 = new Vec3;

    public tempStartLocations2 = new Vec3;

    public tempStartLocations3 = new Vec3;

    public gameSpeed:number = 50;

    onLoad() {
        this.startUp();
    }

    startUp(){ 
        this.groundWidth1 = this.ground1.getComponent(UITransform);
        this.groundWidth2 = this.ground2.getComponent(UITransform);
        this.groundWidth3 = this.ground3.getComponent(UITransform);

    }

    update(deltaTime: number) {
        
    }
}


