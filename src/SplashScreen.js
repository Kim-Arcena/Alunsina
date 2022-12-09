import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({Login}) => {
    const navigation = useNavigation();

    // setTimeout(() => {
    //     navigation.navigate('Login')
    // }, 3000)
  return (
    <View style={styles.container}>
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
        justifyContent: 'flex-end',
    },
    credits: {
        fontSize: 12,
        marginBottom: 25,
    },
})