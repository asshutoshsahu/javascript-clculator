(function (){
let screen = document.querySelector('.screen');
let button = document.querySelectorall('.btn');
let clear= document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

butttons.foreach(function(button){
    button.addeventlistener('click',function(e){
        let value = e.target.dataset.num;
        screen.value+= value;
    })
});
equal.addeventlistener('click',function(e){
    if(screen.value===''){
        screen.value="";
    }else{
        let answer = eval(acreen.value);
    }
})
  

}) ();
