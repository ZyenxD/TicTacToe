var limitsvert = [430, 530];
var limithor = [330, 220];
var playerFill = [false, false, false, false, false, false, false, false, false];
var PCFill = [false, false, false, false, false, false, false, false, false];
var Pwin = function( ){
        cc.log('hi :0');
      if(playerFill[0]===true &&playerFill[1]===true &&playerFill[2]===true){
          confirm("palyer 1 wins!!");
          return true;
      }else if(playerFill[0]===true &&playerFill[3]===true &&playerFill[6]===true){
         confirm("palyer 1 wins!!");
          return true;
      }else if(playerFill[0]===true &&playerFill[4]===true &&playerFill[8]===true){
         confirm("palyer 1 wins!!");
          return true;
      }else if(playerFill[1]===true &&playerFill[4]===true &&playerFill[7]===true){
          confirm("palyer 1 wins!!");
          return true;
      }else if(playerFill[3]===true &&playerFill[4]===true &&playerFill[5]===true){
          confirm("palyer 1 wins!!");
          return true;
      }else if(playerFill[6]===true &&playerFill[4]===true &&playerFill[2]===true){
          confirm("palyer 1 wins!!");
          return true;
      }else if(playerFill[6]===true &&playerFill[7]===true &&playerFill[8]===true){
          confirm("palyer 1 wins!!");
          return true;
      }
    
    }
var Cwin = function(){
        cc.log('hi :0');
      if(PCFill[0]===true &&PCFill[1]===true &&PCFill[2]===true){
          confirm("palyer 2 wins!!");
          return true;
      }else if(PCFill[0]===true &&PCFill[3]===true &&PCFill[6]===true){
          confirm("palyer 2 wins!!");
          return true;
      }else if(PCFill[0]===true &&PCFill[4]===true &&PCFill[8]===true){
          confirm("palyer 2 wins!!");
          return true;
      }else if(PCFill[1]===true &&PCFill[4]===true &&PCFill[7]===true){
          confirm("palyer 2 wins!!");
          return true;
      }else if(PCFill[3]===true &&PCFill[4]===true &&PCFill[5]===true){
          confirm("palyer 2 wins!!");
          return true;
      }else if(PCFill[6]===true &&PCFill[4]===true &&PCFill[2]===true){
          confirm("palyer 2 wins!!");
          return true;
      }else if(PCFill[6]===true &&PCFill[7]===true &&PCFill[8]===true){
          confirm("palyer 2 wins!!");
          return true;
      }
    }
var draw = function(){
    if((playerFill[0]||PCFill[0])&&(playerFill[1]||PCFill[1])&&(playerFill[2]||PCFill[2])&&(playerFill[3]||PCFill[3])&&(playerFill[4]||PCFill[4])&&(playerFill[5]||PCFill[5])&&(playerFill[6]||PCFill[6])&&(playerFill[7]||PCFill[7])&&(playerFill[8]||PCFill[8])){
        confirm("draw!");
        return true;
    }
}
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,player: null, Anti:null,
    iter:null,Moves: [],turns: 0,
    selcet: function(){
        choice = prompt("Player 1, chosse 'X' or 'O'")
        switch(choice){
            case 'X':
                break;
            case 'O':
                this.turns=1;
                break;
            default:
                this.selcet();
                break;
        }    
    },
    setPlayer1: function(location,event){
        //cc.log("put a o");
        var game = event.getCurrentTarget();
        var ubic = location.getLocation();
        var end = false;
        game.player = new cc.Sprite(res.O_png);
        game.Anti = new cc.Sprite(res.X_png);
        //if(cc.rectContainsPoint())
        
        if(game.turns%2===0){
            if((ubic.x<650 && ubic.x>350)&&(ubic.y<450 && ubic.y>150)){
                if(ubic.x<limitsvert[0]-10){
                      if(ubic.y>limithor[0]+10 && playerFill[0]!=true && PCFill[0]!=true){
                        game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[0] = true;
                          end = Cwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[0]-10 && ubic.y>limithor[1]+10 &&playerFill[1]!=true && PCFill[1]!=true ){
                          game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[1] = true;
                          end =Cwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[1]-10 &&playerFill[2]!=true && PCFill[2]!=true){
                        game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[2] = true;
                          end =Cwin();
                          game.turns++;
                      }
                }
                if(ubic.x>limitsvert[0]+10 && ubic.x<limitsvert[1]-10){
                    if(ubic.y>limithor[0]+10 &&playerFill[3]!=true && PCFill[3]!=true){
                        game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[3] = true;
                        end =Cwin();
                        game.turns++;
                      }else  if(ubic.y<limithor[0]-10 && ubic.y>limithor[1]+10 &&playerFill[4]!=true && PCFill[4]!=true){
                          game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[4] = true;
                          end =Cwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[1]-10 &&playerFill[5]!=true && PCFill[5]!=true){
                        game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[5] = true;
                         end = Cwin();
                          game.turns++;
                      }
                }
                if(ubic.x>limitsvert[1]+10){
                    if(ubic.y>limithor[0]+10 &&playerFill[6]!=true && PCFill[6]!=true){
                        game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[6] = true;
                        end =Cwin();
                        game.turns++;
                      }else  if(ubic.y<limithor[0]-10 && ubic.y>limithor[1]+10 &&playerFill[7]!=true && PCFill[7]!=true){
                          game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[7] = true;
                          end =Cwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[1]-10 &&playerFill[8]!=true && PCFill[8]!=true){
                        game.addChild(game.Anti,1);
                        game.Anti.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.Anti);
                         cc.log('x: '+ubic.x,'y: '+ubic.y);
                          PCFill[8] = true;
                          end =Cwin();
                          game.turns++;
                      }
                }
            }
        }else{
            if((ubic.x<650 && ubic.x>350)&&(ubic.y<450 && ubic.y>150)){
                if(ubic.x<limitsvert[0]-10){
                      if(ubic.y>limithor[0]+10 && playerFill[0]!=true && PCFill[0]!=true){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                        playerFill[0] =true;
                         end = Pwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[0]-10 && ubic.y>limithor[1]+10 &&playerFill[1]!=true && PCFill[1]!=true ){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[1] =true;
                        end = Pwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[1]-10 &&playerFill[2]!=true && PCFill[2]!=true){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[2] =true;
                          end =Pwin();
                          game.turns++;
                      }
                }
                if(ubic.x>limitsvert[0]+10 && ubic.x<limitsvert[1]-10){
                    if(ubic.y>limithor[0]+10 &&playerFill[3]!=true && PCFill[3]!=true){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[3] =true;
                        end =Pwin();
                        game.turns++;
                      }else  if(ubic.y<limithor[0]-10 && ubic.y>limithor[1]+10 &&playerFill[4]!=true && PCFill[4]!=true){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[4] =true;
                          Pwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[1]-10 &&playerFill[5]!=true && PCFill[5]!=true){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[5] =true;
                          Pwin();
                          game.turns++;
                      }
                }
                if(ubic.x>limitsvert[1]+10){
                    if(ubic.y>limithor[0]+10 &&playerFill[6]!=true && PCFill[6]!=true){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[6] =true;
                       end = Pwin();
                        game.turns++;
                      }else  if(ubic.y<limithor[0]-10 && ubic.y>limithor[1]+10 &&playerFill[7]!=true && PCFill[7]!=true){
                       game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[7] =true;
                          end = Pwin();
                          game.turns++;
                      }else  if(ubic.y<limithor[1]-10 &&playerFill[8]!=true && PCFill[8]!=true){
                        game.addChild(game.player,1);
                        game.player.setPosition(ubic.x,ubic.y);
                        game.Moves.push(game.player);
                        cc.log('x: '+ubic.x,'y: '+ubic.y);
                          playerFill[8] =true;
                         end = Pwin();
                        game.turns++;
                      }
                }
            }
            
        }
        if(!end)
        {
            end = draw();
        }
        if(end){
            cc.log("reset");
            while(game.Moves.length != 0){
                cc.log('poping');
                del = game.Moves.pop();
                del.setVisible(false);
            }
            for(i=0;i<9;i++){
                if(playerFill[i])
                    playerFill[i] =false;
                if(PCFill[i])
                    PCFill[i] =false;
            }
            game.turns = 0;
            game.selcet();
        }
        //game.put1.setPosition(ubic.x,ubic.y);
    },
    ctor:function () {
        //var ob;
        //ob._setBoundingWidth(44);
        //ob._setBoundingHeight(56);
        
        this._super();

        var size = cc.winSize;
        
        var helloLabel = new cc.LabelTTF("TicTacToe V0.1", "Arial", 38);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        
        this.addChild(helloLabel, 5);
        
        this.sprite = new cc.Sprite(res.tablero_png);
       
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            
        });

        var num = 1;
        //this.iter = new Number(num);
        
        this.selcet();
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: this.setPlayer1
        },this);
        this.addChild(this.sprite,0);
        
        
        //this.addChild(this.Anti);
        //this.addChild(this.Pwin);

        

        return true;
    }
});


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

