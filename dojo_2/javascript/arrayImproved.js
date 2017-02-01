Array.prototype.findIfNotError = function(filter) {
    var result = this.find(filter);
    
    if ( !result ) {
        throw new Error();
    }

    return result;
}
