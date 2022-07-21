import React, { useState, useContext } from 'react'
import { Button, Text, View } from 'react-native'

import Card from '../components/card'
import { DeckContext } from '../contexts/deck'

const CardExamples = () => {
  const { cards, resetDeck, shuffleDeck, addCardToBottom, drawCards, isHigherCard, getSuit} = useContext(DeckContext)
  const [drawnCards, setDrawnCards] = useState([])
  
  const onShuffle = () => {
    shuffleDeck(cards)
  }

  const onDraw = () => {
    const temp = drawCards()
    const currentCards = drawnCards
    currentCards.push(temp[0])
    setDrawnCards(currentCards)
  }

  const onSendBottom = () => {
    if (drawnCards.length < 1) {
      console.log('Need a card to send to the bottom of the deck')
    } else {
      const currentCards = drawnCards
      const latestCard = currentCards.pop()
      setDrawnCards(currentCards)
      addCardToBottom(latestCard)
    }
  }

  // quick sort algorithm code can consume basic card equality check for use in ordering cards. Same concept could be extended to check hand equality
  const swap = (items, li, ri) => {
    const temp = items[li]
    items[li] = items[ri]
    items[ri] = temp
  }

  const partition = (items, li, ri) => {
    const pivot = items[Math.floor((ri + li) / 2)]
    let i = li
    let j = ri
    while (i <= j) {
      while (isHigherCard(pivot, items[i])) {
        i++
      }
      while (isHigherCard(items[j], pivot)) {
        j--
      }
      if (i <= j) {
        swap(items, i, j)
        i++
        j--
      }
    }
    return i
  }

  const quickSort = (items, li, ri) => {
    let index
    if (items.length > 1) {
      index = partition(items, li, ri)
      if (li < index - 1) {
        quickSort(items, li, index - 1)
      }
      if (index < ri) {
        quickSort(items, index, ri)
      }
    }
    return items
  }

  const onOrderHand = () => {
    const tempHand = quickSort(drawnCards, 0, drawnCards.length - 1)
    setDrawnCards([...tempHand])
  }

  const onReset = () => {
    setDrawnCards([])
    resetDeck()
  }

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-start', justifyContent: 'space-between', padding: 100 }}>
        <Button onPress={() => {onShuffle()}} title='Shuffle deck' />
        <Button onPress={() => {onDraw()}} title='Draw card' />
        <Button onPress={() => {onSendBottom()}} title='Send to bottom' />
        <Button onPress={() => {onOrderHand()}} title='Order hand' />
        <Button onPress={() => {onReset()}} title='Reset' />
        <Button onPress={() => {console.log('drawnCards', drawnCards)}} title='Log drawn cards' />
        <Button onPress={() => {console.log('deck', cards)}} title='Log deck' />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: 100 }}>
        {(drawnCards && drawnCards.length > 0) ? drawnCards.map(card => {
          return (
            <View key={card} style={{ padding: 20, alignItems: 'center' }}>
              <Card card={card} side={{back: false}} height={80} />
              <Text>{'suit: ' + getSuit(card)}</Text>
            </View>
          )
        }) : null}
      </View>
    </View>
  )
}

export default CardExamples