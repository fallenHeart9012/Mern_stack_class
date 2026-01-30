var inner=document.getElementById("inner");
var outer=document.getElementById("outer");

inner.addEventListener("click",function(){
    console.log("inner clicke ");
},true)
outer.addEventListener("click",function(e){
    e.stopPropagation();
},true)