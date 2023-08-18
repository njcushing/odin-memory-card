-- THE ODIN PROJECT: MEMORY CARD --

The aim of this game is to select as many cards as possible in a row without selecting one you've already selected.

Your score will increment by 1 for every successful card selected, up to a maximum of the number of cards in play, at which point the game will notify you that you have 'won' and to reset the game to play again.

For each card selected, all cards visible will be shuffled, randomising their positions on the screen. This prevents the player just clicking each card in succession from left to right and top to bottom to win the game without challenge.

The number of cards can be changed from 10 to 30. At 52 cards, the game is essentially 'unloseable'; you can just 'count' your way through the cards for each suit, so the upper limit of the number of cards is restricted to 30.

This game is actually quite easy for the same reason as explained above: you can just 'count' your way through the cards present for each of the 4 suits, so it's very easy to win even on the highest number of cards. This game wasn't necessarily about challenge, but rather about practising using the useEffect React hook to fetch some card images, which I did from the following API:

https://www.deckofcardsapi.com/

If I wanted the game to be harder, I would switch the playing cards out for things that are truly unique, like pictures of food, maps of countries, etc.