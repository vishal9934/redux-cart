
function output(){
    window.InputEvent = window.Event || window.InputEvent;
    var event = new InputEvent("input", { bubbles: true });
    var textbox = document.getElementsByClassName("selectable-text copyable-text iq0m558w")[1];
    for (let index = 0; index < 2000; index++) {
      textbox.innerHTML = textbox.value;
      textbox.dispatchEvent(event);
      document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
    }
}
// output();

// tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq
 function time(){
setInterval(output,2000);
 }
 time();


// another way

var randomTexts=["hi" ,"vishal", "here"];

window.InputEvent=window.Event || window.InputEvent ;
var event =new InputEvent("input" ,{bubbles:true});
var textbox=document.getElementsByClassName("text")[0];

setInterval(()=>{
    textbox.innerHTML=randomTexts[Math.floor(Math.random()*randomTexts)+0];
    textbox.dispatchEvent(event);
    document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
} ,2000)




