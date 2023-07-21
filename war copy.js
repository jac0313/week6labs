class Card {
    constructor(face, suit, value){
        this.face = face
        this.suit = suit
        this.value = value
    }// sets up my cards
}

class Deck {
    constructor() {
        this.cards = []
    }
    buildDeck(){
        this.freshDeck()
        this.shuffle()
        return this.cards
    } //method to build the deck with the cards and shuffles it

    freshDeck() {
        const suits = ["♠", "♣", "♥", "♦"]
        const faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q','K']
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        for(let i = 0; i< suits.length; i++)
        for (let j = 0; j< faces.length; j++)
        this.cards.push(new Card(faces[j], suits[i], values[j]))
    } //loop to create my array of cards for the deck

    shuffle() {
        if(this.cards.length > 0){
            const shuffleDeck = this.cards.sort(() => Math.random() - .5)
            this.cards = [...shuffleDeck]
    } //shuffles the cards
}
}

class Player {
    constructor(name){
        this.playerName = name
        this.playerScore = 0
        this.playerDeck = []
    }
    get name(){
        return this.playerName
    }
    get deck(){
        return this.playerDeck
    }
    get score(){
        return this.playerScore
    }
    set deck(newDeck){
        if (Array.isArray(newDeck)){
            this.playerDeck = newDeck
        }
    }
    set score(newScore){
        if (!isNaN(newScore)){
            this.playerScore = newScore
        }
    }
}
class Dealer {
    constructor(){
        this.player = []
        this.deck = []
    }
    start(){
        let input = prompt("0 - exit; 1 - play")
            while (input !='0'){
                switch (input){
                    case '0':
                        exit;
                    case '1':
                        this.createGame()
                        break;
                }
                input = prompt("0 - exit; 1 - play")
            }
    }//prompt to start the game

    createGame(){
        this.player[0] = new Player("Player 1")
        this.player[1] = new Player("Player 2")
        //sets up my players
        const cards = new Deck().buildDeck()
        this.player[0].deck = [...cards.slice(0, 26)]
        this.player[1].deck = [...cards.slice(26, 52)]
        //splits the deck in half
        for(let i = 0; i<this.player[0].deck.length;i++){
            if (this.player[0].deck[i].value > this.player[1].deck[i].value){
                this.player[0].score +=1
                let winningHand = `${this.player[0].deck[i].face} of ${this.player[0].deck[i].suit}`
                console.log(`Player 1 won with a ${winningHand}`)
            } else{
                this.player[1].score +=1
                let winningHand = `${this.player[1].deck[i].face} of ${this.player[1].deck[i].suit}`
                console.log(`Player 2 won with a ${winningHand}`)
            } //sets up the game rules and statement for who wins each round
        }
        if(this.player[0].score > this.player[1].score){
            console.log(`${this.player[0].name} won war with a score of ${this.player[0].score}`)
        } else if(this.player[0].score < this.player[1].score){
            console.log(`${this.player[1].name} won war with a score of ${this.player[1].score}`)
        } else{
            console.log("Player 1 and Player 2 tied")
        }//loop to determine the winner
    }
}


const dealer = new Dealer()
dealer.start() //starts the game