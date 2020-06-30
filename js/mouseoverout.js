image1=new Image();
image1.src="image/out.png";
image2=new Image();
image2.src="image/over.png";

document.addEventListener("mouseover", mouseover, false);
document.addEventListener("mouseout", mouseout, false);

const settitlebutton=document.querySelector(".resetButton");
settitlebutton.addEventListener("click", resetpage);

function resetpage(){
  console.log('infunction');
  var lis=document.getElementById("liTags").getElementByTagName("li");
    for(var i=0; i<lis.length; ++i){
      lis[i].innerHTML=lis[i].getAttribute("value");
      lis[i].setAttribute("style", "color:" + "Black");
  console.log('in the for loop');
  console.log(lis[i].getAttribute("value"));
  }
}

function mouseover(e){
  if(e.target.getAttribute("id")=="heading"){
    e.target.getAttribute("src", image1.getAttribute("src"));
  }
  if(e.target.tagName.toLowerCase()=="li"){
    e.target.setAttribute("style","color:"
    + e.target.getAttribute("id"));
  }
}

function mouseout(e){
  if(e.target.getAttribute("id")=="heading"){
    e.target.setAttribute("src", image2.getAttribute("src"));
  }
  if(e.target.tagName.toLowerCase()=="li"){
    e.target.innerHTML=e.target.getAttribute("id");
  }
}

document.addEventListener("mouseover", mouseover, false);
document.addEventListener("mouseout", mouseout, false);
