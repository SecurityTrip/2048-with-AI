// Set the Canvas size
var canvas = document.getElementById("gameField");
var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;
var ctx = document.getElementById("gameField").getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;

// The game ends
var endFlag = 0;
// Built a class, 2048 board class, array is an array, where is the coordinate of the upper left corner of the board, size is the edge, Jieshu is the order
function Pan(array, location, size, jieshu){
    this.array = array;
    this.location = location;
    this.size = size;
    this.jieshu = jieshu;
}


// Write a function, the function is: New 2 2
Pan.prototype.add2 = function(){
    // Find all 0 digits
    var zeroIndex = [];
    for(i=0; i<this.jieshu; i++)
    {
        for(j=0; j<this.jieshu; j++)
        {
            if(this.array[i][j]==0)
                zeroIndex.push([i, j]);
        }
    }
    // If there is no 0, it will be over (move it)
    if(zeroIndex.length <= 0)
        return -1; // Return -1 indicates the end of the game
    else
    {
        var t1 = Math.ceil(Math.random()*zeroIndex.length) - 1; // Generate a random number
        var t2 = zeroIndex[t1];
        this.array[t2[0]][t2[1]] = 2;
        return zeroIndex[t1];
    }
}
// array inverse order
function reverseArray(array){
    var t1 = [];
    for(i=0; i<array.length; i++)
        t1.push(array[array.length-i-1]);
    return t1;
}
// A number of sets 0
function del_0(array){
    var t1 = array.length; // number of array elements
    var t2 = []; // Used to install 0 elements
    var t3 = []; // Used to load 0
    for(i = 0; i<t1; i++){
        if(array[i]==0)
            t3.push(array[i]);
        else
            t2.push(array[i])
    }
    var t4 = t3.concat(t2);
    return t4;
}

// array merge same element
function merge(array){
    var t1 = array.length;
    for(i=t1-1; i>0; i--){
        if(array[i]==array[i-1]){
            array[i] = array[i] * 2;
            array[i-1] = 0;
            i--; // Skip Array [i-1], because 0
        }
    }
    return array;
}

// Write a function, enter a one-dimensional array, as well as the array of moving combined, output mobile merge
function move_1(array_1, direction){
    // Direction only two values, 0 means left, 1 to right
    // If you move right
    if(direction==1){
        var t1 = del_0(array_1);
        var t2 = merge(t1);
        var t3 = del_0(t2);
        return t3;
    }
    else{
        var t1 = del_0(reverseArray(array_1));
        var t2 = merge(t1);
        var t3 = del_0(t2);
        return reverseArray(t3);
    }
}
// Write a function, transfers two-dimensional array, mainly used for row
function array2trans(array){
    var t6 = [];
    var t7 = array.length;
    for(i=0; i<t7; i++){
        var t8 = [];
        for(j=0; j<t7; j++){
            t8.push(array[j][i]);
        }
        t6.push(t8);
    }
    return t6;
}

// Write a function, enter the two-dimensional array and move direction, the output movement, the Direction number is 1234, indicating the left and right respectively.
Pan.prototype.move_1234 = function(direction){
    var array_2 = this.array;
    var t1 = array_2.length; // Representation
    // Get each line, each column, half of the previous line, half half is all columns
    var t2 = []; // All rows
    for(i=0; i<t1; i++){
        var t3 = [];
        for(j=0; j<t1; j++){
            t3.push(array_2[i][j]);
        }
        t2.push(t3);

    }

    var t4 = []; // All columns
    for(i=0; i<t1; i++){
        var t3 = [];
        for(j=0; j<t1; j++){
            t3.push(array_2[j][i]);
        }
        t4.push(t3);

    }

    if(direction==1) // Means moving up
    {
        var t5 = [];
        for(var i=0; i<t1; i++){
            var t6 = move_1(t4[i], 0);
            t5.push(t6);
        }
        this.array = array2trans(t5); // Update Array, here to turn
    }
    else if(direction==2){ // Indicate downward
        var t5 = [];
        for(var i=0; i<t1; i++){
            var t6 = move_1(t4[i], 1);
            t5.push(t6);
        }
        this.array = array2trans(t5); // Update Array, here to turn
    }
    else if(direction==3){ //left
        var t5 = [];
        for(var i=0; i<t1; i++){
            var t6 = move_1(t2[i], 0);
            t5.push(t6);
        }
        this.array = t5; // Update Array
    }
    else if(direction==4){ //To the right
        var t5 = [];
        for(var i=0; i<t1; i++){
            var t6 = move_1(t2[i], 1);
            t5.push(t6);
        }
        this.array = t5; // Update Array
    }

    var t10 = this.add2();  // After moving, you must add 2 in a random 0.
    if(t10==-1)
        endFlag = 1;
}


// Draw a chessboard according to Array
Pan.prototype.draw = function(){
    // Painting before clear screen
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    // The coordinates of the left upper left corner
    var top = this.location[1];
    var left = this.location[0];
    ctx.font = this.size/4/this.jieshu + "px Arial";

    var maxNum = 0;
    var maxIndex = [0, 0];
    for(var i=0; i<this.jieshu; i++)
    {
        for(var j=0; j<this.jieshu; j++)
        {
            if(this.array[i][j]>maxNum){
                maxNum = this.array[i][j];
                maxIndex = [i, j];
            }
            if(this.array[i][j]==0)
                ctx.fillStyle = '#DCDCDC';
            else
                ctx.fillStyle = 'black'
            var top1 = top + this.size/this.jieshu * i;
            var left1 = left + this.size/this.jieshu * j;
            // alert([x1, y1]);
            ctx.fillText(this.array[i][j], left1, top1); // Note that Y1 is in front
        }
    }

    // Put the biggest digital red
    ctx.fillStyle = 'red';
    ctx.font = this.size/4/this.jieshu + "px Arial";
    var top1 = top + this.size/this.jieshu * maxIndex[0];
    var left1 = left + this.size/this.jieshu * maxIndex[1];
    ctx.fillText(this.array[maxIndex[0]][maxIndex[1]], left1, top1);

}

// Keyboard event function
function f(e){
    // The game is not moved.
    if(endFlag==1){
        alert('GAME_OVER');
        return
    }
    var e = e || window.event;
    // alert(e.keyCode);
    switch(e.keyCode){
        case 87: // Move up
            p.move_1234(1);
            p.draw();
            break;
        case 83: //
            p.move_1234(2);
            p.draw();
            break;
        case 65: // Left movement
            p.move_1234(3);
            p.draw();
            break;
        case 68: // right movement
            p.move_1234(4);
            p.draw();
            break;
    }
}

// A function, enter the order, output all 0 two-dimensional array
function gen0Array(jieshu){
    var t8 = [];
    for(var i=0; i<jieshu; i++)
    {
        var t9 = [];
        for(var j=0; j<jieshu; j++){
            t9.push(0);
        }
        t8.push(t9);
    }
    return t8;
}

var jieshu = 5; // Order
var array1 = gen0Array(jieshu);
p = new Pan(array1, [300, 50], HEIGHT-50, jieshu);
p.add2();
p.add2();
p.draw();
// ctx.fillText("for", 10, 100);
// Document.onkeyDown = f; // Keyboard control, WSAD indicates the left and right respectively.

// Automatic movement
var nMove = 0; // number of movements
setInterval(function(){
    if(nMove%2==0)
        p.move_1234(2);
    else
        p.move_1234(4);
    p.draw();
    nMove += 1;
}, 100);
