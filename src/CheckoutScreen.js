import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import { colors } from '../components/color';
import { RadioButton } from 'react-native-paper';

const CheckoutScreen = () => {
  const [fundraisingDetails, setFundraisersDetails] = useState([]);
  const [fundraiserTitle, setFundraiserTitle] = useState('');
  const foundraiserRef = firebase.firestore().collection('fundraisers');
  
  useEffect(() => {
    foundraiserRef.orderBy("createdAt", "desc").onSnapshot(
      querySnapshot => {
        const fundraisingDetails = [];
        querySnapshot.forEach((doc) => {
          const {title} = doc.data();
          fundraisingDetails.push({
            id: doc.id,
            title,
          });
        });
        setFundraiserTitle(fundraisingDetails[0].title)
    })
  }, [])

  const [checked, setChecked] = React.useState('first');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.donateName}>Donate</Text>
      <Text style={styles.donateForName}>Donated for</Text>
        <View style={styles.articleBox}>
          <Image source={require('../assets/16Days-Action-banner.png')} style={styles.articleBanner} />
          <View style={styles.articleTexts}>
              <View style={styles.smallDetails}>
                <Text style={styles.articleTitle}>{fundraiserTitle}</Text>
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
                autoCapitalize="none"
                autoCorrect={false}    
            />
        <Text style={styles.paymentMethodText}>Payment Method</Text>
        <View style={styles.paymentMethod}>
          <View style={styles.paymentMethodRdbtn}>
            <RadioButton
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')}
              uncheckedColor={"#9e7e68"}
              color={'#FF6D00'}
            />
            <Text>Gcash</Text> 
          </View>
          <View style={styles.paymentMethodRdbtn}>
            <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}
              uncheckedColor={"#9e7e68"}
              color={'#FF6D00'}
            />
            <Text>Bank Transfer</Text>
          </View>
          <View style={styles.paymentMethodRdbtn}>
            <RadioButton
              value="third"
              status={ checked === 'third' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('third')}
              uncheckedColor={"#9e7e68"}
              color={'#FF6D00'}
            />
            <Text>Debit/Credit Card</Text>
          </View>
        </View>  
        <TouchableOpacity style={styles.paymentBtn}>
            <Text style={styles.loginText}>Pay & Confirm</Text>
        </TouchableOpacity>
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
    marginTop: 40,
    marginBottom: 10,
  },
  donateForName: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontWeight: '500',
  },
  articleBox: {
    flexDirection: 'row',
    backgroundColor: colors.lightgrey,
    borderRadius: 20,
    height: 100,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  articleTitle: {
    width: '100%',
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
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 40,
  },
  amountBox: {
    backgroundColor: colors.lighterorange,
    borderRadius: 15,
    marginVertical: 10,
    width: 150,
    height: 40,
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
    height: 55,
    width: 320,
    marginTop: 10,
    borderWidth: 2,
    padding: 10,
    paddingLeft: 20,
    fontSize: 16,
    borderRadius: 20,
    borderColor: colors.grey,
    alignSelf: 'center',
  },
  paymentMethodText: {
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontWeight: '500',
    marginTop: 15,
  },
  paymentMethod: {
    flexDirection: 'column',
    width: '80%',
    height: 100,
  },
  paymentMethodRdbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  paymentBtn: {
    height: 44,
    width: 290,
    backgroundColor: colors.lightorange,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  amountBtn: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  gradient: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 26,
  },
  loginText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
})