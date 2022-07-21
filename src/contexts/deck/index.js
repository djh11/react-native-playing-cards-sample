import React, { useState, useEffect, createContext } from 'react'

import { shuffleCards } from '../../helpers/cardHelpers'

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
const suits = ['c', 'd', 'h', 's']

const clubs = ranks.map(r => r + suits[0])
const diamonds = ranks.map(r => r + suits[1])
const hearts = ranks.map(r => r + suits[2])
const spades = ranks.map(r => r + suits[3])
const defaultDeck = clubs.concat(diamonds.concat(hearts.concat(spades)))
const DeckContext = createContext()

function DeckWrapper({ children }) {
  const [cards, setCards] = useState(defaultDeck)
  // some rummy games, among other things, require multiple decks for higher numbers of players
  const [useMultipleDecks, setUseMultipleDecks] = useState(1)
  const [isShuffled, setIsShuffled] = useState(false)

  useEffect(() => {
    // on rerender with desired number of decks change, add new decks
    let tempDeck = []
    for (let i = 0; i < useMultipleDecks; i++) {
      tempDeck = tempDeck.concat(defaultDeck)
    }
    setCards(tempDeck)
    setIsShuffled(false)
  }, [useMultipleDecks])

  const resetDeck = () => {
    setIsShuffled(false)
    setCards(defaultDeck)
  }

  const shuffleDeck = deck => {
    const shuffledDeck = shuffleCards(deck)
    setCards(shuffledDeck)
  }

  const addCardToTop = card => {
    setCards(prev => ([card, ...prev]))
  }

  const addCardToBottom = card => {
    setCards(prev => ([...prev, card]))
  }

  const drawCards = (numToDraw = 1) => {
    const drawnCards = []
    for (let i = 0; i < numToDraw; i++) {
      const drawnCard = cards[i]
      drawnCards.push(drawnCard)
    }
    setCards(cards.slice(numToDraw))
    return drawnCards
  }

  const isHigherCard = (cardToCheck, otherCard) => {
    return (ranks.indexOf(cardToCheck.charAt(0)) > ranks.indexOf(otherCard.charAt(0))) 
  }

  const equalValues = (cardToCheck, otherCard) => {
    return (cardToCheck.charAt(0) === otherCard.charAt(0))
  }
  
  const getSuit = cardToCheck => {
    if (cardToCheck.charAt(1) === 's') {
      return 'spades'
    } else if (cardToCheck.charAt(1) === 'c') {
      return 'clubs'
    } else if (cardToCheck.charAt(1) === 'h') {
      return 'hearts'
    } else return 'diamonds'
  }

  return (
    <DeckContext.Provider
      value={{
        cards,
        setCards,
        useMultipleDecks,
        setUseMultipleDecks,
        resetDeck,
        shuffleDeck,
        addCardToTop,
        addCardToBottom,
        drawCards,
        isHigherCard,
        isShuffled,
        setIsShuffled,
        equalValues,
        getSuit
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}

export default DeckWrapper

export { DeckContext }
