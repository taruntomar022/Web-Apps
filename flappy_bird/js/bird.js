
var score;
function Bird(birdImg,fire){
	this.x = width/2-100;
	this.y = height/2-100;
	this.width = this.height = 50;
	this.birdImg = birdImg;
	this.gravity = 0.5;
	this.velocity = 0.5;
	this.fire = fire;
    this.ishit=false;
    this.score=0;
	this.printBird = function(){
		
		image(this.birdImg, this.x, this.y , this.width, this.height);
		
	}
	this.fall = function(){
		if(this.y<=height+25){
		this.velocity += this.gravity;
		this.y +=this.velocity;
		}
		else{
		image(this.fire, this.x, this.y-50 , this.width, this.height-200);	
		}
	}
	this.up = function(){
		this.velocity = -10;
	}
	this.hit = function(pipe){
		//console.log(" "+this.x + " "+this.y +" "+pipe.x+" "+pipe.topY+" "+pipe.topHeight +" "+pipe.width);
		if((this.y>0 && this.y<pipe.topHeight)  || (this.y<height && this.y>pipe.bottomY))
            {
                if((this.x+50)>pipe.x && this.x<(pipe.x+50))
                    {
                        return true;
                        this.ishit=true;
                    }
               
            /*    
                if(this.y>=pipe.topY && this.y<=pipe.topHeight){
			if((this.x<=pipe.x + (pipe.width/2)) && (this.x >=pipe.x - (pipe.width/2)) ){
				return true;
			}
		}*/
                
                
                
            }
        
         if(this.ishit==false && this.x>pipe.x+50 && this.x<(pipe.x+80))
                    {
                        mon++;
                    }
    }
	}

