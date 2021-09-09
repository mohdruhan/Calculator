let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '' ;
for (item of buttons) {
  item.addEventListener('click' , (e)=>{
    btext = e.target.innerText;
    console.log("button text is " + btext);
    if(btext == 'x'){
      btext  = '*';
      screenValue += btext;
      screen.value = screenValue;
}
    else if (btext == 'C') {
      screenValue = ''
      screen.value = screenValue;

    }
    else if (btext == '=') {
      screen.value = eval(screenValue);
    }
    else{
      screenValue += btext;
      screen.value = screenValue;
    }
  })
}
