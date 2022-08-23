const cartArray = [];

function display(cartPlayer) {
    // console.log(cartPlayer);
    const myList = document.getElementById("my-list");

    for (let i=0; i< cartPlayer.length ; i++){
        const selected =cartArray[i];
        
        const li = document.createElement('li');
        li.innerText = selected;
        myList.appendChild(li);
    }

}



function addToCart(element) {
    element.disabled = true ;
    console.log(element.parentNode.children)
    const playerName = element.parentNode.children[0].innerText;

    cartArray.push(playerName)
    
    console.log(cartArray)

    const playerQuantity = cartArray.length;

    console.log(playerQuantity)

    display(cartArray)
}