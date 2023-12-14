function sub() {
    let kette = document.querySelector("#kette").value
    let trennung = document.querySelector("#trennung").value
    let outputVorn = document.querySelector("#vorne")
    let outputHinten = document.querySelector("#hinten")
    let atIndex = kette.indexOf(trennung)
    let davor = document.getElementById("radioVorn")
    let danach = document.getElementById("radioHinter")
    let vorn = (anfang, ende) => {return kette.slice(anfang, ende)}
    let hinten = (anfang, ende) => {return kette.slice(anfang, ende)}
    if (kette.includes(trennung) === false){
        outputVorn.textContent = "Wo soll ich jetzt trennen?!"
        outputHinten.textContent = "alle sagen du bist dumm"
    }
    else if (davor.checked) {
        outputVorn.textContent = vorn(0, atIndex) 
        outputHinten.textContent = hinten(atIndex)
    }else if(danach.checked) {
        outputVorn.textContent = vorn(0, atIndex+1) 
        outputHinten.textContent = hinten(atIndex +1)
    }
}

