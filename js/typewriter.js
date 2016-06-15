(function(){
  var typewriter=document.querySelector(".typewriter"),
  code=typewriter.innerHTML,
  pos=0,
  len=code.length;
  typewriter.innerHTML="";
  typewriter.style.display="block";
  function typewriting(){
    pos++;
    if(pos<=len)
    {
      switch(code.charAt(pos))
      {
        case "<":
          pos=code.indexOf(">",pos);
        break;
        case "&":
          pos=code.indexOf(";",pos);
        break;
      }
      typewriter.innerHTML=code.substring(0,pos);
      setTimeout(typewriting,100);
    }
    else
    {
      typewriter.classList.add("gameover");
    }
  }
  typewriting();
})();
