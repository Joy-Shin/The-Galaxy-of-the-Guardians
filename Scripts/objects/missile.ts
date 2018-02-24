/*
    Name : Dongwan Kim
    Version : v1.0
    Last_modification : Feb 21, 2018
    Description : Created missile objects
*/
module objects{
    export class Missile extends objects.GameObject {
        //PRIVATE VARIABLES
        private _plane:objects.Plane;
        //PUBLIC PROPERTIES

        //CONSTRUTOR
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"missile");    
            
            this.Start();
        }
        //PRIVATE METHODS
        private _reset():void{
             this.x = objects.Game.stage.mouseX;
             this.y = objects.Game.stage.mouseY; //TODO: + plane top

        }
        private _checkBounds():void{
            if(this.y <= 0 ){
                this._reset();
            }
            
        }
        private _move():void{
            this.y -= this._dy;
            this._checkBounds();
        }
        private _updatePosition():void{
            this.position.x = this.x;
            this.position.y = this.y;
        }
        //PUBLIC METHODS
        public Start():void{
            this._dy = 15;
            
        }
        public Update():void{
            if(this.y >0){
                this._updatePosition();
                this._move();
            }
        }
        public ResetValue(value1:number, value2:number):void{
            this.x = value1;
            this.y = value2;
        }


    }
}