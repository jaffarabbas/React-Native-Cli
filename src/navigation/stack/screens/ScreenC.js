import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton';
import CustomHeader from '../../../components/CustomHeader';
const ScreenC = () => {
  const navigation = useNavigation();
  return (
    <View className='bg-blue-500 flex-1 justify-center items-center'>
      <CustomHeader title="Screen C" icon="menu" onPress={() => {
        if(navigation.canGoBack()){
            navigation.goBack();
        }else{
            navigation.navigate('ScreenA');
        }   
      }} />
      <Text className='text-white'>ScreenC</Text>
      <CustomButton
        title="Go to Screen A"
        onPress={() => navigation.navigate('ScreenA')}
      />
    </View>
  )
}

export default ScreenC