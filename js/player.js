/*
 * This object represents a player. The player has belongings 
 * (money, properties, cards) and a name.
 * name The name for the player.
 */
function Player(name) {
  this.name = name;
  this.belongings = {
    money: 0,
    properties: [],
    cards: []
  };
}

/*
 * This method changes the balance of the player.
 * amount Amount is the sum which should be added or removed from the 
 *  balance.
 */
Player.prototype.editBalance = function(amount) {
  this.belongings.money += amount;
};

/*
 * This method adds a property to the ownership of the player.
 * property The property to add.
 */
Player.prototype.addProperty = function(property) {
  this.belongings.properties.push(property);
};
/*
 * This method removes a property from the ownership of the player.
 * property The property to remove.
 */
Player.prototype.removeProperty = function(property) {
  this.belongings.properties.splice(
    this.belongings.properties.findIndex(property), 1);
};

/*
 * This method adds a card to the ownership of the player.
 * card The card to add.
 */
Player.prototype.addCard = function(card) {
  this.belongings.cards.push(card);
};
/*
 * This method removes a card from the ownership of the player.
 * card The card to remove.
 */
Player.prototype.removeCard = function(card) {
  this.belongings.cards.splice(
    this.belongings.cards.findIndex(card), 1);
};
