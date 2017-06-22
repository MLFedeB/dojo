module.exports = Identify;

function Identify(cellAddress, cells) {
    this.cellAddress = cellAddress;
    
    this.cell = cells.find( c => c.isAddressedBy(cellAddress) );
};

Identify.prototype.value = function() {
    return this.cell.getContent();
};
