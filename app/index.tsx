import { View, ScrollView, Image, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import { CustomButton } from '../components'
import { router } from 'expo-router'

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='w-full min-h-[85vh] justify-center items-center px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain' />
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain' />
          <View className='relative mt-5'>
            <Text className="text-white text-3xl text-center font-bold">
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-gray-100 text-sm font-pregular mt-7 text-center'>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>
          <CustomButton
          title='Continue with Email'
          handlePressed={()=>{router.push('/sign-in')}}
          containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" barStyle="light-content"/>
    </SafeAreaView>
  )
}

export default App