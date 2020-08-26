var grid[];
var poss = [];
class Enemy(poss){
  this.poss = poss;
  guess(){
    guess_co_ord = Math.floor(Math.random() * 100);
    if (grid[co_ord] == 1) {

        document.getElementById(`${co_ord}`).style.background = "red";
        this.poss.push(co_ord + 1);
        this.poss.push(co_ord - 1);
        this.poss.push(co_ord + 10);
        this.poss.push(co_ord - 10);
        grid[co_ord] = 0;

    }
    hunt(){
      var test = this.poss.length;
      if (grid[test] == 1){
        for(var i = 3; i > 0; i = i-1){
          this.poss.pop()
        }
        


      }
    }


    if (grid[co_ord] != 1) {
        document.getElementById(`${co_ord}`).style.background = "yellow";


    }
  }
}
