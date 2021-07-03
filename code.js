function changeBackgroundColor(color) {
    document.body.style.background = color;
    let txt = document.getElementsByClassName('text');
    console.log(txt);
    if (color == "black") {
        for(elm of txt){
      elm.style.color = "white";
    }
    }else{
        
        for(elm of txt){
            elm.style.color = "black";
          }
        
    }
  }