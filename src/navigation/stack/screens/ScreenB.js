import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';   
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
const ScreenB = ({navigation,route}) => {
  return (
    <View className='bg-green-500 flex-1 justify-center items-center'>
      <CustomHeader title="Screen B" icon="menu" onPress={() => {
        if(navigation.canGoBack()){
            navigation.goBack();
        }else{
            navigation.navigate('ScreenA');
        }
      }} />
      <Text className='text-white'>ScreenB</Text>
      <Text className='text-black'>{route.params.name}</Text>
      <CustomButton
        title="Go to Screen C"
        onPress={() => navigation.navigate('ScreenC')}
      />
    </View>
  )
}

export default ScreenB