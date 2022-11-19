function Text(string) {
    this.str = string;
}

Text.prototype.left = function(char) {
    const leftString = this.str.slice(0, char)
    return leftString
}

Text.prototype.right = function(char) {
    const rightString = this.str.slice(Text.length - (char+1))
    return rightString
}

Text.prototype.charCount = function(){
    return this.str.length
}

Text.prototype.wordCount = function(){
    const individualWords = this.str.split(' ')
    return individualWords.length;
}

Text.prototype.vowelCount = function(){
    let vowels = 0
    for (let i = 0; i < this.str.length; i++){
        if (this.str[i] == 'a' || this.str[i] == 'e' || this.str[i] == 'i' || this.str[i] == 'o' || this.str[i] == 'u'){
            vowels += 1
        } 
    }
    return vowels
}

Text.prototype.capitalsCount = function(){
    let capitals = 0
    for (let i = 0; i < this.str.length; i++){
        if (this.str[i] === this.str[i].toUpperCase() && this.str[i] !== ' '){
            capitals += 1
        } 
    }
    return capitals
}

Text.prototype.appendString = function(string){
    return `${this.str} ${string}`
}

Text.prototype.prependString = function(string){
    return `${string} ${this.str}`
}

let string1 = new Text('Testing This Thing and now adding more words');
let string2 = new Text("of dit lukt ").prependString("Eens kijken ").appendString(", niewaar?")

console.log(string1.left(5))
console.log(string1.right(3))
console.log(string1.charCount())
console.log(string1.wordCount())
console.log(string1.vowelCount())
console.log(string1.capitalsCount())
console.log(string1.appendString('navoegsel'))
console.log(string1.prependString('Voorvoegsel'))
console.log(string2)