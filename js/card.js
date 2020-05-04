/*
 * This Object represents a generic card. It has  some text and a type.  
 * text The text for the card.
 * type The kind of card e.g. "chance"
 */
function Card(text, type) {
  this.text = text;
  this.type = type
}

/*
 * This Object is a child of the general Card. It handles paying and 
 * receiving money from or to other players or the bank.
 * text The card text.
 * type The kind of card e.g. "chance"
 * amount The amount of money (positive or negative).
 * isToPlayers Boolean true if the money is to or from other players. 
 *  false if it is a bank transaction
 */
function MoneyCard(text, type, amount, isToPlayers) {
  Card.call(this, text, type);
  
  this.amount = amount;
  this.isToPlayers = isToPlayers;
}
// Inheritance of the prototype and reset of the constructor.
MoneyCard.prototype = Object.create(Card.prototype);
MoneyCard.prototype.constructor = MoneyCard;

/*
 * This Object is a child of the general Card. It handles moving the player
 * to a specific field, a nearest field of some sort, an amount of steps.
 * text The Card text.
 * type The kind of card e.g. "chance"
 * toBoardIndex Move the player to a specific position at the board. This is
 *  the index in the board array e.g. 0 --> first board position.
 * toGroup Move the player to the first instance of a field with the 
 *  specified group.
 * steps Move the player some steps (positive or negative).
 */
function MovementCard(text, type, toBoardIndex, toGroup, steps) {
  Card.call(this, text, type);

  this.toBoardIndex = toBoardIndex;
  this.toGroup = toGroup;
  this.steps = steps;
}
// Inheritance of the prototype and reset of the constructor.
MovementCard.prototype = Object.create(Card.prototype);
MovementCard.prototype.constructor = MovementCard;

/*
 * This Object is a child of the general Card. It handles getting the player
 * in or out of jail.
 * isToJail A boolean true the player must go to jail, 
 *  false the player can get out of jail.
 */
function JailCard(text, type, isToJail) {
  Card.call(this, text, type);
  
  this.isToJail = isToJail;
}
// Inheritance of the prototype and reset of the constructor.
JailCard.prototype = Object.create(Card.prototype);
JailCard.prototype.constructor = JailCard;

/*
 * This Object is a child of the general Card. It handles house repairs.
 * repairHouse Amount to pay for each house.
 * repairHotel Amount to pay for each hotel.
 */
function RepairCard(text, type, repairHouse, repairHotel) {
  Card.call(this, text, type);
  
  this.repairHouse = repairHouse;
  this.repairHotel = repairHotel;
}
// Inheritance of the prototype and reset of the constructor.
RepairCard.prototype = Object.create(Card.prototype);
RepairCard.prototype.constructor = RepairCard;
