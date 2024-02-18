
function calculate(amount){
   let total=document.getElementById('total');
   let grandTotal=document.getElementById('grand-total')
   
   let discount=document.getElementById('discount');
   let discountText=discount.innerText;
   let discountContainer=document.getElementById('discount-container');
   
   let totalText=parseInt(total.innerText);
   let sum=totalText+parseInt(amount);
   total.innerText=sum;
   grandTotal.innerText=sum;
   
   
   const coupon=document.getElementById("coupon-field");
  
   const applyBtn=document.getElementById('apply')
   if(sum===2200){
    

    coupon.addEventListener('keyup',function(event){
        let code=event.target.value;
        if(code==='NEW15'){
            discountContainer.classList.remove('hidden');
           
         
            apply(sum,15);
            
            applyBtn.removeAttribute('disabled',true);
        }
        else if(code==='Couple 20'){
            discountContainer.classList.remove('hidden');
            
            
            apply(sum,20);
           
            applyBtn.removeAttribute('disabled',true);

        }
        else{
            
            discountContainer.classList.add('hidden');
            discount.innerText='';
            applyBtn.setAttribute('disabled',true); 
        }
    })
    

   }
   
  
   
    
   
   
}
function apply(sum,num){
    console.log(sum,num)
    
    
    let discount=document.getElementById('discount');
    let discountText=discount.innerText;
    let discountValue=(sum * num)/100;
    discount.innerText=discountValue;
   
  
    

}
document.getElementById('apply').addEventListener('click',function(){
    let discount=document.getElementById('discount');
    let discountText=discount.innerText;
    let grandTotal=document.getElementById('grand-total');
    let grandTotalValue=grandTotal.innerText
     
    let grandValue=grandTotalValue-discountText;
    grandTotal.innerText=grandValue;
    const applyBtn=document.getElementById('apply');
    applyBtn.setAttribute('disabled',true);
})
document.getElementById('number').addEventListener('keyup',function(event){
    const number=event.target.value;
    const allBtn=document.getElementById('all');
    if(number){
        allBtn.removeAttribute('disabled',true);

    }
})




document.getElementById("A1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    const coupon=document.getElementById("coupon-field");
    console.log(coupon.value)

    // where to be added

    const button = document.getElementById("A1");
    
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
   
    
    li1.innerText = "A1";
    li2.innerText = "economic";
    

    li3.innerText=550;

    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "A1" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        button.classList.add('disabled');
        mainContainer.appendChild(ul);
        

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
document.getElementById("A2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("A2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "A2";
    li2.innerText = "economic";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "A2" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        button.classList.add('disabled');
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
document.getElementById("A3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("A3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "A3";
    li2.innerText = "economic";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "A3" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        button.classList.add('disabled');
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
document.getElementById("A4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("A4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "A4";
    li2.innerText = "economic";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "A4" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        button.classList.add('disabled');
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
document.getElementById("B1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("B1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B1";
    li2.innerText = "economic";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "B1" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        button.classList.add('disabled');
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
document.getElementById("B2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("B2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B2";
    li2.innerText = "economic";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "B2" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        button.classList.add('disabled');
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
document.getElementById("B3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("B3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B3";
    li2.innerText = "economic";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "B3" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        button.classList.add('disabled');
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
document.getElementById("B4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("B4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B4";
    li2.innerText = "economic";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "B4" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        calculate(li3.innerText);
        button.classList.add('disabled');
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
