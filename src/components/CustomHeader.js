import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomHeader = ({title,icon,onPress}) => {
  return (
    <View className='flex-row justify-between items-center p-4 bg-black-500 h-16 w-full border-b border-gray-300'>
        <TouchableOpacity onPress={onPress}>
            <Text className='text-2xl font-bold'>{icon}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomHeader