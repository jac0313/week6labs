const expect = chai.expect

describe('shuffle', () => {
    it('#Should rearrange the array of cards', () => 
        class Deck {
            constructor() {
                this.cards = []
            }
            buildDeck(){
                this.freshDeck()
                this.shuffle()
                return this.cards
            }
        shuffle() {
            if(this.cards.length > 0){
                const shuffleDeck = this.cards.sort(() => Math.random() - .5)
                this.cards = [...shuffleDeck]
    expect('shuffle').to.notequal([shuffleDeck])
            }   
    }
})
})