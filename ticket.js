function calculate(amount){
   let total=document.getElementById('total');
   let totalText=parseInt(total.innerText);
   let sum=totalText+parseInt(amount);
   total.innerText=sum;
}
document.getElementById("A1").addEventListener('click', function () {
    const mainContainer = document.getElementById("main-container");

    // where to be added

    const button = document.getElementById("A1");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
   
    
    li1.innerText = "A1";
    li2.innerText = "economic";
    

    li3.innerText=550;

    calculate(li3.innerText);

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "A1" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
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
    calculate(li3.innerText);

    const list = document.querySelector("#main-container");
    
    const list1 = list.getElementsByTagName("li");
    const list2 = list1.length;

    if (li1.innerText === "A2" && list2 < 12) {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
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
        ul.classList.add('flex', 'justify-between' ,'font-semibold')
        mainContainer.appendChild(ul);

        button.setAttribute('disabled', true);

    }
    else {
        alert('It is not possible dude');
        button.setAttribute('disabled', true);
    }





})
