const cartArray = [];

function display(cartPlayer) {
    // console.log(cartPlayer);
    const myList = document.getElementById("my-list");
    myList.innerText =""  ;

    for (let i=0; i< cartPlayer.length ; i++){
        const selected =cartArray[i];
        
        const li = document.createElement('li');
        li.innerText = selected;
        myList.appendChild(li);
    }

}

// document.getElementById('calculate').addEventListener('click', function(){

function addToCart(element) {
    element.disabled = true ;
    console.log(element.parentNode.children)
    const playerName = element.parentNode.children[0].innerText;

   cartArray.push(playerName)

   

    console.log(cartArray)
     
    
    display(cartArray) ;
    
    
    const arrayLength =  cartArray.length


    
///****Cost Calculation********** */




document.getElementById('calculate').addEventListener('click', function(){
    const perPlayer = document.getElementById('per-player');
    const newPlayerString = perPlayer.value;
    const newPlayerAmount = parseFloat(newPlayerString);

    
    const playerExpenses = newPlayerAmount * arrayLength;

    // console.log(playerExpenses)

    const depositTotalElement = document.getElementById('player-expenses');
    depositTotalElement.innerText =  playerExpenses;

   //////////////***************************** */

   const manager = document.getElementById('manager');
   const managerString = manager.value;
   const managerFloat = parseFloat(managerString);
   /////****************************** */

   const coach = document.getElementById('coach');
   const coachString = coach.value;
   const coachFloat = parseFloat(coachString);

   
  document.getElementById('calculate-total').addEventListener('click', function(){

    const total = managerFloat +coachFloat + playerExpenses ;

    //////////////////////////
    const Total = document.getElementById('total');
    Total.innerText =  total;

  })


   console.log(playerExpenses);
})



}



