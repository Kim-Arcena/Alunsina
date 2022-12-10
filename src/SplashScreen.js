import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({Login}) => {
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('Login')
    }, 3000)
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash3.png')} style={styles.splashImage} />
      <Text style={styles.title}>Fast and Safe EVAW-Dedicated Fundraising App</Text>
      <Text style={styles.credits}>ⓒ 2022 Alunsina. All Rights Reserved.</Text>
    </View>
  )
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 26,
        justifyContent: 'center',
    },
    title: {
        fontSize: 13.5,
        marginTop: 25,
        fontWeight: '500',
    },
    credits: {
        fontSize: 12,
        marginBottom: 25,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
    },
    splashImage: {
        width: 100,
        height: 100,
    },
})