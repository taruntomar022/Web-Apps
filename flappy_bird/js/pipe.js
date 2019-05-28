function Pipe(){
	this.x = width;
	this.topY = 0;
    this.max=533;
    this.netx=this.x;
    this.bottomY=random(this.max);
	//this.bottomY = height-10;
	this.width = 50;
	this.topHeight = random((height/2)-70);
	this.bottomHeight = (height)-this.bottomY;
	this.speed = -2;
	this.printPipe=function(){
		fill('green');
		rect(this.x, this.topY , this.width , this.topHeight);
        if(this.bottomY>250)
            {
		rect(this.x, this.bottomY , this.width , this.bottomHeight);
            }
        else{
             this.bottomY=random(this.max);
        }
        this.x += this.speed;
	}
	this.outOfScreen = function(){
		if((this.x+25)<=0){
			return true;
		}
		else{
			return false;
		}
	}
}