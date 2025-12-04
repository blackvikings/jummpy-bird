import { _decorator, Component, Node, CCInteger, input, Input, EventKeyboard, KeyCode, director } from 'cc';
const { ccclass, property } = _decorator;

import {Ground} from "./Ground";
import {Results} from "db://assets/Scripts/Results";

@ccclass('GameCtrl')
export class GameCtrl extends Component {

   @property({
       type: Ground,
       tooltip: "This is ground"
   })
   public ground: Ground

   @property({
       type: Results,
       tooltip: "Results go here"
   })
    public results: Results

    @property({
        type: CCInteger
    })

    public speed: number = 300

    @property({
        type: CCInteger
    })

    public pipeSpeed:number = 200

    onLoad() {
        this.initListener()
        this.results.resetScore()
        director.pause()
    }

    initListener(){
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
    }

    //testing method Delete in final version
    onKeyDown(event:EventKeyboard){
       switch (event.keyCode) {
           case KeyCode.KEY_A:
               this.gameOver();
               break;
           case KeyCode.KEY_P:
               this.results.addScore()
               break;
           case KeyCode.KEY_Q:
               this.resetGame()
               break;
       }
    }

    gameOver(){
        this.results.showResults();
        director.pause();
    }

    resetGame(){
        this.results.resetScore();
        this.startGame();
    }


    startGame(){
        this.results.hideResults();
        director.resume()
    }
}


