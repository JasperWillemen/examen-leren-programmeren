function Text(string) {
    this.str = string;
}

Text.prototype.left = function(char) {
    const leftString = this.str.slice(0, char)
    return leftString
}

let string1 = new Text('testing this bullshit');

console.log(string1.left(7))