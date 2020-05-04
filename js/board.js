/*
 * This Object describes a gameboard. It contains fields, these can be 
 * streets or other special fields (tax, cards, jail, start, free parking).
 * title The title of the game. 
 * */
function Board(title) {
  this.title = title;
  this.fields = [];
}

/*
 * This Method adds a new field to the board. 
 * field The field which should be added.
 * index The position of the new field in the fields array.
 * If no index is provided, it will be added to the end of the 
 * fields array.
*/
Board.prototype.addField = function(field, index) {
  if (index === undefined) {
    this.fields.push(field);
  } else {
    this.fields.splice(index, 0, field);
  }
};

/*
 * This Method removes the field with the specified index.
 * index The position in the fields array.
 */
Board.prototype.removeField = function(index) {
  this.fields.splice(index, 1);
};
