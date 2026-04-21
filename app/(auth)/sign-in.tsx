import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
      <Link href="/" className="mt-4 rounded-4xl bg-primary text-white p-4 " >Go To Homepage</Link>
      
    </SafeAreaView>
  )
}

export default SignIn