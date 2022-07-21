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

