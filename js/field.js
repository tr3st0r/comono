/*
 * This object is a general field on the game board. 
 * title The title of the field.
 */
function Field(title) {
  this.title = title;
}

/*
 * This is a money field, when on this field the player gets or looses 
 * some amount of money.
 * title The title of the field.
 * amount The amount of money which can be positive or negative.
 */
function MoneyField(title, amount) {
  Field.call(this, title);
  this.amount = amount;
}
// Correct prototype chain for inheritance
MoneyField.prototype = Object.create(Field.prototype);
MoneyField.prototype.constructor = MoneyField;

/*
 * This is a card field, when on this field the player has to draw a card
 * with a specified type.
 * title The title of the field.
 * cardType The type of the card it is a string e.g. "chance".
 */
function CardField(title, cardType) {
  Field.call(this, title);
  this.cardType = cardType;
}
// Correct prototype chain for inheritance
CardField.prototype = Object.create(Field.prototype);
CardField.prototype.constructor = CardField;

/*
 * This is a jail field, when on this field the player has to follow jail
 * actions. The player can go to jail or be in jail. 
 * (The difference between visiting jail and staying in jail is not a field
 * property. It must be handled in the game logic.)
 * title The title of the field.
 * action The jail action, which the player needs to perform. It must be
 *  "go" or "in".
 */
function JailField(title, action) {
  Field.call(this, title);
  this.action = action;
}
// Correct prototype chain for inheritance
JailField.prototype = Object.create(Field.prototype);
JailField.prototype.constructor = JailField;

/*
 * This is a property.
 * title The title of the property.
 * group The group of the property e.g. utilities, green.
 * price The price of the property.
 */
function Property(title, group, price) {
  Field.call(this, title);
  this.group = group;
  this.price = price;
}
// Correct prototype chain for inheritance
Property.prototype = Object.create(Field.prototype);
Property.prototype.constructor = Property;

/*
 * This is a street.
 * title The title of the street.
 * colour The group of the street e.g. green, yellow.
 * price The price of the street.
 * housePrice The price for houses in this street.
 * rent The rent for the street alone, with houses (up to 4) or with a 
 *  hotel. It must be an array with the format [alone, one House, .., hotel]
 *  e.g. [28, 150, 450, 1000, 1200, 1400].
 */
function Street(title, color, price, housePrice, rent) {
  Property.call(this, title, color, price);
  this.housePrice = housePrice;
  this.rent = rent;
}
// Correct prototype chain for inheritance
Street.prototype = Object.create(Property.prototype);
Street.prototype.constructor = Street;

/*
 * This is a train station.
 * title The title of the station.
 * price The price of the station.
 * rent The rent for the station alone, with up to 4 other stations. It must
 * be an array with the format [alone, one other, two other, three other]
 *  e.g. [25, 50, 100, 100, 200].
 */
function Station(title, price, rent) {
  Property.call(this, title, "station", price);
  this.rent = rent;
}
// Correct prototype chain for inheritance
Station.prototype = Object.create(Property.prototype);
Station.prototype.constructor = Station;

/*
 * This is an utility .
 * title The title of the utility.
 * price The price of the utility.
 * rent The amount of dice rolls with one or two utilities. It must be an 
 * array with the format [alone, other utility] e.g. [4, 10].
 */
function Utility(title, price, rent) {
  Property.call(this, title, "utility", price);
  this.rent = rent;
}
// Correct prototype chain for inheritance
Utility.prototype = Object.create(Property.prototype);
Utility.prototype.constructor = Utility;
