class Wall 
{
constructor(x,y,width,height) {
 this.x=x
 this.y=y
 this.width=width   
 this.height=height 
}
display(){
    //fill(58,73,73);
    fill("red")
    rect(this.x,this.y,this.width,this.height);
}
}