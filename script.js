let  a=0;
function increase(){
    var val;
    val=++a;
    document.getElementById("count").innerHTML=val;
    document.getElementById("count").style.color="green";

}
function reset(){
    var b=0;
    document.getElementById("count").innerHTML=b;
    a=0;
    document.getElementById("count").style.color="blue";

}
function decrease(){
    var val;
    val=--a;
    document.getElementById("count").innerHTML=val;
    if(a<0){
        document.getElementById("count").style.color="red";
      }
 
    
}
