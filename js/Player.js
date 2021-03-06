class Player {
  constructor(){
    this.index = null;
    
    this.rank = null;
    this.in = null;
    this.name = null;
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
         
         Name:this.name,
         BookName:this.in
        
      
    });
}

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        
         BOOKName:this.BOOKName,
         Name:this.Name
      
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
       this.rank=data.val();
    })

    }

    static updateCarsAtEnd(rank){
      database.ref('/').update({
        CarsAtEnd:rank
      })
    }

 
    

 



}
