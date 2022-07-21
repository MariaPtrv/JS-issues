Array.prototype._reduce = function(callback, initialValue) {
    let currentValue = initialValue
    for (let i = 0; i < this.length; i++){
        currentValue=callback(currentValue, this[i], i, this)
    }
    return currentValue;
};

Array.prototype._forEach = function(callback) {
    let arr = this;
    for (let index = 0; index < this.length; index++) {
        let currentValue = this[index];
        callback(currentValue, index, arr);
    }
};

Array.prototype._filter = function(callback) {
    let newArr = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this) === true)
            newArr.push(this[i])
    }
    return newArr;
};

Array.prototype._join = function(separator) {
    let str = ""
    let s =  separator ? separator : ","
    for (let i = 0; i < this.length; i++) {
        if (i!== this.length-1 )
            str+=this[i] + s;
        else str+=this[i]
    }
    return str;
};


Array.prototype._map= function(callback) {
    let newArray = []
    for (let index=0; index < this.length; index++) {
        let currentValue = this[index]
        newArray.push(callback( currentValue, index, this));
    }
    return  newArray;
};

Array.prototype._shift= function() {
    let firstElement = this[0]
    for (let i=1; i < this.length; i++) {
        this[i-1] = this[i]
    }
    this.pop();
    return  firstElement;
};
