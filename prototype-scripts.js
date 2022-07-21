Array.prototype._reduce = function(callback, initialValue) {
    let currentValue = initialValue
    for (let i = 0; i < this.length; i++){
        currentValue=callback(currentValue, this[i], i, this)
    }
    return currentValue;
};

