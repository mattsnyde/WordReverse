//Get string from the page, controller function
function getString(){
    document.getElementById('alert').classList.add('invisible') /*Add invisible class if it is not already present on the div*/
    const userString = document.getElementById('userString').value
     let reversedString = reverseString(userString)
     displayString(reversedString)
 }

//Reverse the string, logic function
function reverseString(userString){
    let reversedString = [];

    //Reversing the string using a for loop
    for(let i = userString.length - 1; i >= 0; i--){ //userString.length-1 is the very last position in a string
      reversedString += userString[i] //Add each letter from userString to the empty array we declared above.
    }
    return reversedString
}

// //Display reversed string to  user view function
function displayString(reversedString){
    //Write message to page and then show the alert box
    const displayString = document.getElementById('message')
    displayString.innerHTML = `${reversedString}`
    document.getElementById('alert').classList.remove('invisible') //Get rid of the invisible class on the alert box so users can see the box now.
}

 