const numberInput=document.getElementById("numberInput");
const fromSelect=document.getElementById("select1");
const box=document.querySelector(".box");
const toSelect=document.getElementById("select2");

function swap(){
    let temp=fromSelect.selectedIndex;
    fromSelect.selectedIndex=toSelect.selectedIndex;
    toSelect.selectedIndex=temp;
    console.log(fromIndex,toIndex);
}
const copy=document.querySelector(".copyClass");

const ans=document.createElement("textarea");

function convert(){
    const number=numberInput.value;
    

    const fromIndex=fromSelect.selectedIndex;
    const fromValue=fromSelect.options[fromIndex].value;
   
    const toIndex=toSelect.selectedIndex;
    const toValue=toSelect.options[toIndex].value;

    ans.classList.add("ansClass");
    ans.value="";
    // let n=parseInt(10.0 , 16);
    // decimalValue.toString(16)
    
    ans.value=parseInt(number,fromValue).toString(toValue);
    if(ans.value==="NaN"){
        ans.value="Please check the selected options and entered number";
    }

    box.appendChild(ans);
}
