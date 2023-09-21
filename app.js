function Dare(event){

    {
        event.preventDefault()
    }

    let result = ""

    let Dare = ""

    let number = Math.random(Dare)*10
    
    number = Number.parseInt(number)
    
    // console.log(number)
    
    if( number === 0 ){
        
        result = "Lucky! No Dare For You"

    }else if( number === 1 ){

        result = "Slap Yourself"

    }else if( number === 2 ){

        result = "Chicken ban"

    }else if( number === 3 ){

        result = "Do 15 times Up And Down"

    }else if( number === 4 ){

        result = "Press Dare Button Again"

    }else if( number === 5 ){

        result = "Touch Your Nose With Your Tongue"

    }else if( number === 6 ){

        result = "Make A Funny Face And Take A Selfie"

    }else if( number === 7 ){

        result = "Your Nickname is Donkey"

    }else if( number === 8 ){

        result = "Act Like A Chicken"

    }else if( number === 9 ){

        result = "Type Your Name Using Your Nose"

    }else{

        result = "Stop Breathing For 15 Seconds"

    }

    console.log(result)

    document.querySelector('.result').innerHTML = result

}