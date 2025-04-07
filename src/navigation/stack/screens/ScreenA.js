import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../components/CustomHeader';
const ScreenA = ({navigation}) => {
//   const navigation = useNavigation();
  return (

    <View className='bg-red-500 flex-1 justify-center items-center'>
      <CustomHeader title="Screen A" icon="menu" onPress={() => {
        if(navigation.canGoBack()){
            navigation.goBack();
        }else{
            navigation.navigate('ScreenB',{
                name: 'John',
            });
        }
      }} />
      <Text className='text-white'>ScreenA</Text>
      <CustomButton
        title="Go to Screen B"
        onPress={() => navigation.navigate('ScreenB',{
            name: 'John',
        })}
      />
    </View>
  )
}

export default ScreenA