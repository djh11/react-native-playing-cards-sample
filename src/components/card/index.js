import React from 'react'

import { Image } from 'react-native'

import Back from '../../assets/cards/back.png'
import TwoOfClubs from '../../assets/cards/2_of_clubs.png'
import ThreeOfClubs from '../../assets/cards/3_of_clubs.png'
import FourOfClubs from '../../assets/cards/4_of_clubs.png'
import FiveOfClubs from '../../assets/cards/5_of_clubs.png'
import SixOfClubs from '../../assets/cards/6_of_clubs.png'
import SevenOfClubs from '../../assets/cards/7_of_clubs.png'
import EightOfClubs from '../../assets/cards/8_of_clubs.png'
import NineOfClubs from '../../assets/cards/9_of_clubs.png'
import TenOfClubs from '../../assets/cards/10_of_clubs.png'
import JackOfClubs from '../../assets/cards/jack_of_clubs.png'
import QueenOfClubs from '../../assets/cards/queen_of_clubs.png'
import KingOfClubs from '../../assets/cards/king_of_clubs.png'
import AceOfClubs from '../../assets/cards/ace_of_clubs.png'

import TwoOfDiamonds from '../../assets/cards/2_of_diamonds.png'
import ThreeOfDiamonds from '../../assets/cards/3_of_diamonds.png'
import FourOfDiamonds from '../../assets/cards/4_of_diamonds.png'
import FiveOfDiamonds from '../../assets/cards/5_of_diamonds.png'
import SixOfDiamonds from '../../assets/cards/6_of_diamonds.png'
import SevenOfDiamonds from '../../assets/cards/7_of_diamonds.png'
import EightOfDiamonds from '../../assets/cards/8_of_diamonds.png'
import NineOfDiamonds from '../../assets/cards/9_of_diamonds.png'
import TenOfDiamonds from '../../assets/cards/10_of_diamonds.png'
import JackOfDiamonds from '../../assets/cards/jack_of_diamonds.png'
import QueenOfDiamonds from '../../assets/cards/queen_of_diamonds.png'
import KingOfDiamonds from '../../assets/cards/king_of_diamonds.png'
import AceOfDiamonds from '../../assets/cards/ace_of_diamonds.png'

import TwoOfHearts from '../../assets/cards/2_of_hearts.png'
import ThreeOfHearts from '../../assets/cards/3_of_hearts.png'
import FourOfHearts from '../../assets/cards/4_of_hearts.png'
import FiveOfHearts from '../../assets/cards/5_of_hearts.png'
import SixOfHearts from '../../assets/cards/6_of_hearts.png'
import SevenOfHearts from '../../assets/cards/7_of_hearts.png'
import EightOfHearts from '../../assets/cards/8_of_hearts.png'
import NineOfHearts from '../../assets/cards/9_of_hearts.png'
import TenOfHearts from '../../assets/cards/10_of_hearts.png'
import JackOfHearts from '../../assets/cards/jack_of_hearts.png'
import QueenOfHearts from '../../assets/cards/queen_of_hearts.png'
import KingOfHearts from '../../assets/cards/king_of_hearts.png'
import AceOfHearts from '../../assets/cards/ace_of_hearts.png'

import TwoOfSpades from '../../assets/cards/2_of_spades.png'
import ThreeOfSpades from '../../assets/cards/3_of_spades.png'
import FourOfSpades from '../../assets/cards/4_of_spades.png'
import FiveOfSpades from '../../assets/cards/5_of_spades.png'
import SixOfSpades from '../../assets/cards/6_of_spades.png'
import SevenOfSpades from '../../assets/cards/7_of_spades.png'
import EightOfSpades from '../../assets/cards/8_of_spades.png'
import NineOfSpades from '../../assets/cards/9_of_spades.png'
import TenOfSpades from '../../assets/cards/10_of_spades.png'
import JackOfSpades from '../../assets/cards/jack_of_spades.png'
import QueenOfSpades from '../../assets/cards/queen_of_spades.png'
import KingOfSpades from '../../assets/cards/king_of_spades.png'
import AceOfSpades from '../../assets/cards/ace_of_spades.png'

const cards = {
  '2c': TwoOfClubs,
  '3c': ThreeOfClubs,
  '4c': FourOfClubs,
  '5c': FiveOfClubs,
  '6c': SixOfClubs,
  '7c': SevenOfClubs,
  '8c': EightOfClubs,
  '9c': NineOfClubs,
  'Tc': TenOfClubs,
  'Jc': JackOfClubs,
  'Qc': QueenOfClubs,
  'Kc': KingOfClubs,
  'Ac': AceOfClubs,

  '2d': TwoOfDiamonds,
  '3d': ThreeOfDiamonds,
  '4d': FourOfDiamonds,
  '5d': FiveOfDiamonds,
  '6d': SixOfDiamonds,
  '7d': SevenOfDiamonds,
  '8d': EightOfDiamonds,
  '9d': NineOfDiamonds,
  'Td': TenOfDiamonds,
  'Jd': JackOfDiamonds,
  'Qd': QueenOfDiamonds,
  'Kd': KingOfDiamonds,
  'Ad': AceOfDiamonds,

  '2h': TwoOfHearts,
  '3h': ThreeOfHearts,
  '4h': FourOfHearts,
  '5h': FiveOfHearts,
  '6h': SixOfHearts,
  '7h': SevenOfHearts,
  '8h': EightOfHearts,
  '9h': NineOfHearts,
  'Th': TenOfHearts,
  'Jh': JackOfHearts,
  'Qh': QueenOfHearts,
  'Kh': KingOfHearts,
  'Ah': AceOfHearts,

  '2s': TwoOfSpades,
  '3s': ThreeOfSpades,
  '4s': FourOfSpades,
  '5s': FiveOfSpades,
  '6s': SixOfSpades,
  '7s': SevenOfSpades,
  '8s': EightOfSpades,
  '9s': NineOfSpades,
  'Ts': TenOfSpades,
  'Js': JackOfSpades,
  'Qs': QueenOfSpades,
  'Ks': KingOfSpades,
  'As': AceOfSpades,
}

function Card(props) {
  const { height } = props
  const width = (height * (500 / 726)) + 1
  
  if (props.side?.back) {
    return (
      <Image source={Back} style={{ height: height, width: width }} />
    )
  } else {
    return (
      <Image source={cards[props.card]} style={{ height: height, width: width }} />
    )
  }
}

export default Card
