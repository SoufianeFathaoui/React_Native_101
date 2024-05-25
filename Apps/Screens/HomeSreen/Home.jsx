import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'

export default function Home() {
  return (
    <View>
      {/* This is a Header component */}
      <Header/>
      {/* This is a Slider component */}
      <Slider/>
    </View>
  )
}