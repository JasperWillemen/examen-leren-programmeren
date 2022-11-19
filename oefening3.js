function Painting (name, width, height, price){
    this.name = name;
    this.size = width + "x" + height;
    this.price = price;
}

function Painter (firstName, lastName, style){
    this.firstName = firstName;
    this.lastName = lastName;
    this.style = style;
    this.list = [];
}

Painter.prototype.addPainting = function(name, width, height, price){
    this.list.push(new Painting(name, width, height, price))
}

Painter.prototype.removePainting = function (name){
    this.list = this.list.filter(function (painting){
        return painting.name !== name 
    })
}

const firstPainter = new Painter(`Gustav`, `Klimt`, `symbolism`)
const secondPainter = new Painter('Leonardo', 'da Vinci', 'renaissance')

Painter.prototype.getList = function (){
    const lijn = '-';
    let output = '';
    output += `${Painter.firstName} ${Painter.lastName} / ${Painter.style}`
    for (let i = 0; i < this.list.length; i++){
        output += `
  - Naam : ${this.list[i].name}
  - Canvas : ${this.list[i].size}
  - Prijs : €${this.list[i].price.toLocaleString()}
    ${lijn.repeat(30)}`
    }
    return output
}

firstPainter.addPainting('the Kiss', 20, 20, 200000)
firstPainter.addPainting('Death and life', 50, 38, 125000)
secondPainter.addPainting('Mona Lisa', 77, 35, 860000000)

console.log(firstPainter.getList())
console.log(secondPainter.getList())