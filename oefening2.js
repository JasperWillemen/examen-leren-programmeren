function Text(string) {
    this.str = string;

}

Text.prototype.left = function(char) {
    const leftString = this.str.substring(0, char)
    return leftString
}

let string1 = new Text('testing this bullshit');

Text.left(2);