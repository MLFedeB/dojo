module.exports = Summatory;

function Summatory(range, cells) {
    this.range = range;
    this.cells = range.cells(cells);
};

Summatory.prototype.value = function() {
    return this.cells.reduce( (acc, cell) => acc + cell.getContent(), 0); 
};

