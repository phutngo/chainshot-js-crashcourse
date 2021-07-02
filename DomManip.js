//https://www.freecodecamp.org/news/how-to-manipulate-the-dom-beginners-guide/

//https://javascript.info/script-async-defer to include the script src in the html

//select DOM element with document.getElementById('element id goes here') method
const iLove = document.getElementById('iLoveX')
console.log(iLove) //<p id="master">i love javascript</p> 

//select DOM elements with document.getElementsByClassName('class name goes here'). This method returns a collection of all elements in the document with the specified class name.

const btn = document.getElementById('btn') //btn is now the element 
btn.addEventListener('click', function master(){
    let ugly = document.getElementsByClassName("ugly");
    ugly[0].innerHTML = 'BUTTON IS CLICKED'; //.innerHTML is a property of any element that represents the stuff between the tags of the element.
    console.log(ugly);
})

//select DOM elements with document.getElementsByTagNME('TAG NAME GOES HERE'). This method returns a collection of all elements in the document with the specified tag name. Examples of Tag names are.

const btn2 = document.getElementById('btn2')
        
    btn2.addEventListener('click', () => {
        let peeS = document.getElementsByTagName('p');
        peeS[3].innerHTML = 'CHANGED'; 
    })


//select DOM elemetns with CSS Selectors using document.querySelector('CSS Selector goes here') or document.querySelectorAll('CSS Selector goes here')
//This returns the first (or All) value that matches the selector it’s given. This method can accept all CSS style selectors, allowing it to select by tag, class, or ID.

//!https://dev.to/neutrino2211/using-css-selectors-in-javascript-3hlm

const div = document.querySelector("div") // => First occurence of a div element in the document

const allDivs = document.querySelectorAll("div") // NodeList of all div elements. https://developer.mozilla.org/en-US/docs/Web/API/NodeList

console.log(allDivs)

//!To get an element by its ID, use a # before the element ID
const selectedID = document.querySelector("#id") // same as document.getElementById('id')

//!To get elements by class, use a . before the class name
const selectedClass = document.querySelectorAll(".myElementClass")

//!To get elements by tag name, just input the tag name
const selectedTag = document.querySelectorAll("body") // => document.getElementsByTagName('body')

//!To get all elements use *
const selectAllEl = document.querySelectorAll("*") // => NodeList[...]