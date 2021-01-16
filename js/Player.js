class Player {
  constructor(){
    this.index = null;
   // this.distance = 0;
    this.name = null;
    this.type="Crewmate";
    this.x=0,
    this.y=0
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      //distance:this.distance
      positionx:this.x,
      positiony:this.y,
      Type : this.type
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
 
 
}
