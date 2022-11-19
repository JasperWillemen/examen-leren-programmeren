import rl from "readline-sync"

const firstName = rl.question(`Wat is uw voornaam? 
> `)
const lastName = rl.question(`Wat is uw achternaam? 
> `)
const street = rl.question(`Wat is uw straatnaam en huisnummer? 
> `) 
const postcode = rl.question(`Wat is uw postcode?
> `)
const town = rl.question(`Wat is uw gemeente? 
> `)

function fullAddress(){
    if (firstName == '' || lastName == '' || street == '' || town == '' || postcode == '' || postcode > 9900 || postcode < 1000 || postcode == ''){
        return `Minstens één van de ingevulde velden is niet geldig!`
    } else if (firstName.length > 40 || lastName.length > 40 || street.length > 40 || postcode.length > 40 || town.length > 40){
            return `Kader is te breed. Gebruik afkortingen in de breedste stukken.`
        }
    return `${firstName.charAt(0).toUpperCase()}. ${lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase()}
${street.charAt(0).toUpperCase() + street.substring(1).toLowerCase()}
${postcode} ${town.toUpperCase()}`
}

console.log(fullAddress())