
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField= document.getElementById('resultField');
var form = document.getElementById('XiswhatpercentofY');

form.addEventListener('submit',function(event){
    
    if(!numField1.value||!numField2.value){
        alert("Please enter the value in the fields");
    }
    var x=parseFloat(numField1.value);
    var y=parseFloat(numField2.value);
    
    var result =x/y;
    var percent=result*100;
   resultField.innerText="Answer"+ percent +"%";
    event.preventDefault();
//    alert(percent);
    
//    console.log(x+y);
//    alert(x+y);
});

//numField1.value="TEST";
//resultField.innerText="TEST2";
//alert(numField1.value);