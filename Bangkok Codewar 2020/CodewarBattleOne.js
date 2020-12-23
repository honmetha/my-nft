// Card Tracker
// There are 52 cards in a standard deck.

// The cards are split into 4 suit: Hearts, Diamonds, Spades, and Clubs.
// For each suit, there are cards of value 2 to 10, plus Jack, Queen, King, and Ace.
// For example

// 10H - 10 of Hearts
// AD - Ace of Diamonds
// Here is one full deck of cards, for reference:

// ["2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH",
// "KH", "AH", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD",
// "KD", "AD", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS",
// "KS", "AS", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC",
// "KC", "AC"]
// The (shuffled) list of cards below contains several full decks, with one card missing. Find the missing card.

// ["5C","JD","KH","7D","KH","10D","3H","3H","8D","7S","4C","6S","7S","2S","4D",
// "4D","3H","10C","JS","4H","6C","2H","KS","5S","8H","AD","7D","2C","10S","5S",
// "JS","3C","QD","2S","AS","KC","9D","6C","8S","JS","8S","10D","9H","5H","5H",
// "8H","6D","5H","QS","JC","QS","6H","JH","2C","6D","QD","5D","AS","QD","5C",
// "8S","QC","7H","QH","5S","AD","8D","JD","AC","9C","3D","6S","6C","3H","JD",
// "KH","9S","KD","JS","8S","JC","6D","8C","9S","8C","3H","5D","JH","2D","4H",
// "5D","4H","KD","KD","KS","3D","9S","9S","9D","KH","7H","5D","2D","8D","7D",
// "9S","10H","8D","QC","QC","9D","QD","8H","9C","9H","QH","QD","4D","3C","KC",
// "AC","KS","6S","2H","6C","7S","10C","QD","10H","2S","10C","7C","QH","3D",
// "5H","JC","2D","5S","KD","6C","2D","3H","10S","4H","4S","JD","KH","2D","QC",
// "10S","2D","9C","8D","10S","JH","8C","8D","7S","6S","AC","JC","2H","7S","KS",
// "KH","8H","JD","AH","AH","8H","3C","4H","3S","AD","4D","KD","KD","5H","KC",
// "AC","2S","4H","4S","7D","3C","QD","6C","KC","6D","JH","AC","2C","6S","10S",
// "4C","QS","KC","9C","5D","6D","10S","AH","7C","6S","KH","10D","5C","8C","AD",
// "7C","6S","5S","QH","2C","6H","JS","9S","KC","10H","4C","QC","AC","3C","8C",
// "QS","9H","2H","4D","10C","10D","5D","KD","JD","2C","7D","7H","3S","10H",
// "KS","3C","8S","JH","QH","JC","3D","AS","10D","9S","10C","8S","4D","KS","7C",
// "2S","9C","KC","AH","AS","2S","AS","9D","5H","5S","4C","8C","2D","10S","JD",
// "AH","7H","KD","3S","JH","5D","7D","2D","6S","2H","AD","5C","5H","8D", "6H",
// "2H","7D","2H","6D","3D","7D","6S","QH","4C","10C","5C","JC","7D","9C", "7S",
// "KH","8C","8D","9D","7S","3H","3H","QC","4S","5D","9S","5C","7C","8S", "JH",
// "2C","QD","4C","4D","6H","9C","QC","10C","QH","5C","5C","7H","7S","KS", "AC",
// "2C","QS","JH","QD","KD","9D","QC","6H","7H","6D","9C","3D","KC","AD", "AH",
// "4S","4S","9H","3H","10H","QD","3C","3D","9D","6C","9C","7H","8S","4S", "JC",
// "6H","8S","AS","3S","4D","3C","JD","AH","AC","3S","10H","10H","2C","4H",
// "5D","JC","4C","7H","10H","QC","6H","AS","AS","KS","10H","9H","4C","KC","9H",
// "AD","8H","2C","5H","4S","KH","5D","5H","2S","8S","JH","4H","10S","3D","9H",
// "6D","7C","9D","8H","4D","JS","QS","KH","5H","3D","AH","JH","AD","AD","6H",
// "10D","JD","7C","JS","AD","2H","JC","6H","KS","3S","AS","3C","8D","7C","7S",
// "JS","QH","8C","10D","QC","6S","QH","10C","8H","8C","2C","4C","AH","2S","JD",
// "3S","9S","JS","10C","QS","9H","3H","AS","10D","2H","8H","5S","7H","5S","6D",
// "9C","2D","4D","JC","5C","4C","7C","2H","7S","8H","9H","2S","9D","2D","3S",
// "3C","3D","5C","8D","9D","AC","QH","KS","9H","QS","4S","JS","7H","10S","6C",
// "4H","3S","5S","QS","4S","10D","6D","10H","KD","2S","6C","9S","7D","6H","4S",
// "AC","7C","4H","AH","10C","8C","5S","10S","6C","10D","KC","3S"]

const findMissingCard = (cards) => {
  const cardCounter = {};
  for (let i = 0; i < cards.length; i++) {
    if (cardCounter[cards[i]]) cardCounter[cards[i]]++;
    else cardCounter[cards[i]] = 1;
  }
  return cardCounter;
};