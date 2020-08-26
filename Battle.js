document.getElementById('forfeit_id').style.visibility = 'hidden';
document.getElementById('begin_id').style.visibility = 'hidden';
// arr and enemy_arr created to test 
arr = [];
enemy_arr = [];
var butt; 
var place = 0;
var save_check = 1;
var begin;
var turn = 0;
var old_list = []
// makes sure game is saved
var grid = [
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,

];

var enemy_grid = [
1,1,1,1,0,0,1,0,0,0,
0,0,0,0,0,0,1,0,0,0,
0,0,0,0,0,0,1,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,1,1,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,0,0,

];
console.log(grid);
console.log(enemy_grid)






function def_loop(){

    for(var i = 0; i <= 99; ++i){
        el = document.getElementById(`${i}`)
        arr.push(el);  
        console.log(`${i}, ${el}`)
        el.addEventListener("click", placement);
        
    }
}
function firing(event){
    //finding cell
    
    var enemy_e = event.target
    var enemy_cell = enemy_e.getAttribute('id');
    en = parseInt(enemy_cell, 10)
    enemy_cen = en - 100
    //checking grid
    var n = enemy_grid.includes(1);
    if(n != true){
        alert("you won");
        location.reload();
        
        return;
    }

    //testing
    console.log(n);

    //checking if hit

    if(enemy_grid[enemy_cen] != 1){
        
        event.target.style.background = "yellow";
        
    }
    if(enemy_grid[enemy_cen] == 1){
        
        event.target.style.background = "red";
        enemy_grid[enemy_cen] = 0;
    }
    //removing event
    event.target.removeEventListener("click",firing)
    enemyTurn();

}


        
function placement(event) {
    // original cell change
    event.target.style.background = "green"  

    //finding the other cells of selected ships
    var e = event.target
    var cell = e.getAttribute('id');
    cen = parseInt(cell, 10)
    grid[cen] = 1;
    //testing 
    console.log(place)
    console.log(butt)
    console.log(cen)
    console.log(e);


    // checking orientation of ship
    if(place == 0){
        for(var i = 0; i < butt; i++){
            document.getElementById(cen+i).style.background = "green";
            grid[cen+i] = 1;

        }
    }
    if(place == 1){
        for(var x = 0; x < butt; x++){
        
            document.getElementById(cen+x*10).style.background = "green";
            grid[cen+x*10] = 1;
        }


}
//testing
console.log(grid)



} 
function Carrier(){
//5 spaces
    if(save_check == 1){
        butt = 5
        console.log("Carrier");
        console.log(arr)
        def_loop();
    }

}
function Battleship(){
//4 spaces
    if(save_check == 1){
        butt = 4
        console.log("Battleship");
        def_loop();
    }

}
function Submarine(){
// 3 spaces
    if(save_check == 1){
        butt = 3
        console.log("Submarine");
        def_loop();
    }
    

}
function Cruiser(){
// 3 spaces
    if(save_check == 1){
        butt = 3
        console.log("cruiser");
        def_loop();
    }

}
function Destroyer(){
    if(save_check == 1){
        butt = 2
        //2 spaces
        console.log("Destroyer");
        def_loop();
    }

}
function Vertical(){
    place = 1;
}
function Horizontal(){
    place = 0;
}
function Save(){
    for(var i = 0; i <= 99; ++i){
        el = document.getElementById(`${i}`)
        arr.push(el);  
        console.log(`${i}, ${el}`)
        el.removeEventListener("click", placement);
        
    }
    document.getElementById('begin_id').style.visibility = 'visible';
    document.getElementById('batt_id').style.visibility = 'hidden';
    document.getElementById('carr_id').style.visibility = 'hidden';
    document.getElementById('sub_id').style.visibility = 'hidden';
    document.getElementById('cruis_id').style.visibility = 'hidden';
    document.getElementById('dest_id').style.visibility = 'hidden';
    document.getElementById('vert_id').style.visibility = 'hidden';
    document.getElementById('hori_id').style.visibility = 'hidden';

    document.getElementById('save_id').style.visibility = 'hidden';
    save_check = save_check -1;

}

function Begin(){
    begin = 1;
    alert("Fire: Double click on enemy board to rain hell")
    alert("Colours: Yellow = miss, Red = Hit")

    document.getElementById('forfeit_id').style.visibility = 'visible';
    document.getElementById('begin_id').style.visibility = 'hidden';
    for(var i =99; i <= 199; ++i){
        el = document.getElementById(`${i}`)
        enemy_arr.push(el);  
        console.log(`${i}, ${el}`)
        el.addEventListener("click", firing);
        
    }
}

function enemyTurn(){
    co_ord = Math.floor(Math.random() * 100);

    var checked = old_list.includes(co_ord);
    if(checked == true){
        var co_ord = Math.floor(Math.random() * 100);
    }

    old_list.push(co_ord);

    console.log(old_list)

    if(grid[co_ord] == 1){
        
        document.getElementById(`${co_ord}`).style.background = "red";
        grid[co_ord] = 1;

    }


    if(grid[co_ord] != 1){
        document.getElementById(`${co_ord}`).style.background = "yellow";
        

    } 

    var n = grid.includes(1);
    if(n != true){
        alert("you lost")

        location.reload();
    }

}          
