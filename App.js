import React from 'react'
import { StyleSheet, View } from 'react-native'
import DeckWrapper from './src/contexts/deck'
import CardExamples from './src/examples'

export default function App() {
  return (
    <View style={styles.container}>
      <DeckWrapper>
        <CardExamples />
      </DeckWrapper>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
