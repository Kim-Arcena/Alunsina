import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.donateName}>Donate</Text>
      <Text style={styles.donateForName}>Donated for</Text>
        <View style={styles.articleBox}>
          <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleBanner} />
          <View style={styles.articleTexts}>
              <View style={styles.smallDetails}>
                <Text style={styles.articleTitle}>United Filipino Veterans Association of Washington</Text>
              </View>
            </View>
        </View>

        <Text style={styles.paymentMethodText}>Select Amount</Text>
        <View style={styles.amountView}>
          <View style={styles.amountBoxRow}>
            <TouchableOpacity style={styles.amountBox}>
                <Text style={styles.amountBtn}>P100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountBox}>
                <Text style={styles.amountBtn}>P500</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.amountBoxRow}>
            <TouchableOpacity style={styles.amountBox}>
                <Text style={styles.amountBtn}>P1000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.amountBox}>
                <Text style={styles.amountBtn}>P200</Text>
            </TouchableOpacity>
            
          </View>
        </View>
            <View style={styles.orLines}>
              <View style={styles.line}/>
              <Text style={styles.orText}>or</Text>
              <View style={styles.line}/>
            </View>
            <TextInput 
                style={styles.textInput}
                placeholder="₱ Enter Amount You Want to Donate"
                onChangeText={targetAmount => setTargetAmount(targetAmount)}
                autoCapitalize="none"
                autoCorrect={false}    
            />
        <Text style={styles.paymentMethodText}>Payment Method</Text>

        <View style={styles.paymentMethod}>
        </View>  
    </SafeAreaView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  articleBanner: {
    height: 70,
    width: 70,
    borderRadius: 15,
  },
  donateName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  donateForName: {
    fontSize: 13,
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontWeight: '500',
  },
  articleBox: {
    flexDirection: 'row',
    backgroundColor: '#fbf9f7',
    borderRadius: 20,
    height: 100,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',  
    marginVertical: 5,

  },
  articleTitle: {
    width: '70%',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 15,
    paddingLeft: 15,
    marginVertical: 15,
  },
  amountText: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontWeight: '500',
    marginTop: 20,
  },
  amountView: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fbf9f7',
    paddingHorizontal: 40,
  },
  amountBox: {
    backgroundColor: '#fff000',
    borderRadius: 10,
    marginVertical: 10,
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line:{
    borderWidth: 0.5,
    borderColor: '#C7A896',
    width: '45%',
  },
  orLines: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  textInput: {
    height: 50,
    width: 320,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    borderRadius: 20,
    borderColor: '#fef1e5',
    backgroundColor: '#fef1e5',
    alignSelf: 'center',
  },
  paymentMethodText: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontWeight: '500',
    marginTop: 20,
  },
})