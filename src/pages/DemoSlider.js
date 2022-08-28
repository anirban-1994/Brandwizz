import { View, Text } from 'react-native'
import React from 'react'


import SliderData from '../component/SliderData';
export default function DemoSlider() {
  return (
    <View>
      <FlatList data={SliderData}></FlatList>
    </View>
  )
}