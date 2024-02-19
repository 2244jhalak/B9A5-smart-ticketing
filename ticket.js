function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
let arr=[];
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
    coupon.removeAttribute('disabled',true);
    
    

    coupon.addEventListener('keyup',function(event){
        let code=event.target.value;
        if(code==='NEW15'){
            // discountContainer.classList.remove('hidden');
           
         
            apply(sum,15);
            
            applyBtn.removeAttribute('disabled',true);
        }
        else if(code==='Couple 20'){
            // discountContainer.classList.remove('hidden');
            
            
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
    let discountContainer=document.getElementById('discount-container');
    discountContainer.classList.remove('hidden')
    let discountText=discount.innerText;
    let grandTotal=document.getElementById('grand-total');
    let grandTotalValue=grandTotal.innerText
     
    let grandValue=grandTotalValue-discountText;
    grandTotal.innerText=grandValue;
    const applyBtn=document.getElementById('apply');
    
    applyBtn.setAttribute('disabled',true);
    const inputHide=document.getElementById('input-hide');
    inputHide.style.display='none';
    
    
})
document.getElementById('number').addEventListener('keyup',function(event){
    const number=event.target.value;
    const allBtn=document.getElementById('all');
    const seat=document.getElementById('seat');
    if(number && seat.innerText>0){
        allBtn.removeAttribute('disabled',true);

    }
    else{
        allBtn.setAttribute('disabled',true)
    }
})




document.getElementById("A1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    
    let seat=document.getElementById('seat');
  
    arr.push('A1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'
    

    

    


    // where to be added

    const button = document.getElementById("A1");
    
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
   
    
    li1.innerText = "A1";
    li2.innerText = "Economy";
    

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
    let seat=document.getElementById('seat');
  
    arr.push('A2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("A2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "A2";
    li2.innerText = "Economy";


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
    let seat=document.getElementById('seat');
  
    arr.push('A3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("A3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "A3";
    li2.innerText = "Economy";


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
    let seat=document.getElementById('seat');
  
    arr.push('A4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("A4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "A4";
    li2.innerText = "Economy";


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
    let seat=document.getElementById('seat');
  
    arr.push('B1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("B1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B1";
    li2.innerText = "Economy";


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
    let seat=document.getElementById('seat');
  
    arr.push('B2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("B2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B2";
    li2.innerText = "Economy";


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
    let seat=document.getElementById('seat');
  
    arr.push('B3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("B3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B3";
    li2.innerText = "Economy";


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
    let seat=document.getElementById('seat');
  
    arr.push('B4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("B4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "B4";
    li2.innerText = "Economy";


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
document.getElementById("C1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('C1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("C1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "C1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "C1" && list2 < 12) {
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
document.getElementById("C2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('C2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("C2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "C2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "C2" && list2 < 12) {
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
document.getElementById("C3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('C3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("C3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "C3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "C3" && list2 < 12) {
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
document.getElementById("C4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('C4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("C4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "C4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "C4" && list2 < 12) {
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
document.getElementById("D1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('D1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("D1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "D1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "D1" && list2 < 12) {
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
document.getElementById("D2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('D2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("D2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "D2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "D2" && list2 < 12) {
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
document.getElementById("D3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('D3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("D3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "D3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "D3" && list2 < 12) {
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
document.getElementById("D4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('D4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("D4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "D4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "D4" && list2 < 12) {
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
document.getElementById("E1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('E1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("E1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "E1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "E1" && list2 < 12) {
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
document.getElementById("E2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('E2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("E2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "E2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "E2" && list2 < 12) {
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
document.getElementById("E3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('E3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("E3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "E3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "E3" && list2 < 12) {
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
document.getElementById("E4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('E4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("E4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "E4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "E4" && list2 < 12) {
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
document.getElementById("F1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('F1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("F1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "F1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "F1" && list2 < 12) {
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
document.getElementById("F2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('F2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("F2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "F2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "F2" && list2 < 12) {
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
document.getElementById("F3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('F3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("F3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "F3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "F3" && list2 < 12) {
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
document.getElementById("F4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('F4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("F4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "F4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "F4" && list2 < 12) {
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
document.getElementById("G1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('G1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("G1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "G1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "G1" && list2 < 12) {
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
document.getElementById("G2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('G2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("G2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "G2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "G2" && list2 < 12) {
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
document.getElementById("G3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('G3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("G3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "G3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "G3" && list2 < 12) {
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
document.getElementById("G4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('G4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("G4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "G4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "G4" && list2 < 12) {
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
document.getElementById("H1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('H1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("H1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "H1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "H1" && list2 < 12) {
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
document.getElementById("H2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('H2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("H2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "H2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "H2" && list2 < 12) {
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
// H3
document.getElementById("H3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('H3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("H3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "H3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "H3" && list2 < 12) {
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
document.getElementById("H4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('H4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("H4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "H4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "H4" && list2 < 12) {
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
document.getElementById("I1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('I1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("I1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "I1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "I1" && list2 < 12) {
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
document.getElementById("I2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('I2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("I2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "I2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "I2" && list2 < 12) {
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
document.getElementById("I3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('I3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("I3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "I3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "I3" && list2 < 12) {
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
document.getElementById("I4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('I4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("I4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "I4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "I4" && list2 < 12) {
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
document.getElementById("J1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('J1');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("J1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "J1";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "J1" && list2 < 12) {
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
document.getElementById("J2").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('J2');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("J2");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "J2";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "J2" && list2 < 12) {
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
document.getElementById("J3").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('J3');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("J3");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "J3";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "J3" && list2 < 12) {
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
document.getElementById("J4").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");
    let seat=document.getElementById('seat');
  
    arr.push('J4');
    
    let seatText=arr.length;
    if(seatText<=4){
        seat.innerText=seatText;

    }
    
    let totalSeat=document.getElementById('total-seat');
    let totalSeatCount=totalSeat.innerText;
    let presentSeat=totalSeatCount-1;
    
    if(presentSeat>=36){
        totalSeat.innerText=presentSeat;
    }
    
    seat.style.backgroundColor='#1DD100';
    seat.style.padding='1px 8px';
    seat.style.color='white';
    seat.style.borderRadius='5px'

    // where to be added

    const button = document.getElementById("J4");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "J4";
    li2.innerText = "Economy";


    li3.innerText=550;
    

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "J4" && list2 < 12) {
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
function applyAll(){
    const page1=document.getElementById('page1');
    const success=document.getElementById('success');
    page1.classList.add('hidden');
    success.classList.remove('hidden');
}

