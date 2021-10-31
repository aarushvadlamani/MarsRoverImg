canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_images_array=["Mars1.jpeg","Mars2.jpeg","Mars3.jpeg","Mars4.jpeg"];
random_number=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=nasa_mars_images_array[random_number];
console.log("background_image="+background_image);
rover_image="rover.png";

function add(){
background_img=new Image();
background_img.onload=uploadBackground();
background_img.src=background_image;

rover_img= new Image();
rover_img.onload=uploadRover();
rover_img.src=rover_image;
}
function uploadBackground(){
ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadRover(){
ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up();
    console.log(up);
}
if(keyPressed=='40'){
    down();
    console.log(down);
    
}
if(keyPressed=='39'){
    right();
    console.log(right);
}
if(keyPressed=='37'){
left();
console.log(left);
}
}
function up(){
    if(rover_y>=0);
    rover_y=rover_y-10;
    console.log("When up key is pressed x =" + rover_x + "and y =" + rover_y);
    uploadBackground();
    uploadRover();
}
function down(){
    if(rover_y<=600);
    rover_y=rover_y+10;
    console.log("When down key is pressed x="+ rover_x + "and y = " + rover_y);
    uploadBackground();
    uploadRover();
    }
function left(){
    if(rover_x>=0);
    rover_x=rover_x-10;
    console.log("When left key is pressed x="+ rover_x + "and y = " + rover_y);
    uploadBackground();
    uploadRover();
}
function right(){
    if(rover_x<=800);
    rover_x=rover_x+10;
    console.log("When right key is pressed x="+rover_x + "and y = " + rover_y);
    uploadBackground();
    uploadRover();
}
