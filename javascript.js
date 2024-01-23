function myfunc(image,color,head,logo){
  document.getElementById("my-image").src=image;
  document.querySelector(".empty").style.backgroundColor=color;
  document.getElementById("head").textContent=head;
  document.getElementById("logobg").src=logo;
  
}
