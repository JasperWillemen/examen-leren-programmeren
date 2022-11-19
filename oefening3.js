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
        return painting.list !== name 
    })
}

const firstPainter = new Painter(`Gustav`, `Klimt`, `symbolism`)
firstPainter.addPainting('the Kiss', 20, 20, 200000)
firstPainter.addPainting('Death and life', 50, 38, 125000)
firstPainter.removePainting('the Kiss')

console.log(firstPainter.list)
