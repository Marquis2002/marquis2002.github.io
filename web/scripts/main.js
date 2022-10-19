// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello world!";
// document.querySelector('html').onclick = function(){
//     alert("Don't stab me! It hurts!")
// }
// document.querySelector('html').addEventListener('click', () => {
//     alert('别戳我，我怕疼。');
//   });

// let myImage = document.querySelector('img');
// myImage.onclick = () =>{
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc == 'images/image1.jpg')
//     {
//         myImage.setAttribute('src', 'images/image2.jpg');
//     }
//     else
//     {
//         myImage.setAttribute('src', 'images/image1.jpg');
//     }
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://tse4-mm.cn.bing.net/th/id/OIP-C.2MbMlrTj06K6VCPcbWinvgHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7') {
      myImage.setAttribute('src', "https://upload4.hlgnet.com/bbsupfile/2010/2010-07-27/20100727113413_55.jpg");
    } else {
      myImage.setAttribute('src', "https://tse4-mm.cn.bing.net/th/id/OIP-C.2MbMlrTj06K6VCPcbWinvgHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7");
    }
}

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName()
// {
//     let myName = prompt('请输入你的名字');
//     localStorage = setItem('name', myName);
//     myHeading.textContent = 'Hello, cool ' + myName;
// }

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName)
    {
        setUserName();
    }else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }}
  

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  
// if(!localStorage.getItem('name'))
// {
//     setUserName();
// }
// else
// {
//     let storedname = localStorage.getItem('name');
//     myHeading.textContent = 'Hello cool '+ storedname;
// }
myButton.onclick = ()=>
{
    setUserName();
}