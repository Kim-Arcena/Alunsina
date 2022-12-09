import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const Dashboard = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if (snapshot.exists) {
        setName(snapshot.data());
      }
      else {
        alert('User does not exist')
      }
    })
  }, [])

  return ( 
    <SafeAreaView style={styles.container}>
        <View style={styles.topmostBox}>
          <Image source={require('../assets/tucked.png')} style={{width: 40, height: 40}} />
          <TouchableOpacity  onPress={() => firebase.auth().signOut()}>
            <Icon name="sign-out" size={25} color="black" />
          </TouchableOpacity>  
        </View>
        
        <View style={styles.box}>
          <Text style={styles.greetings}>Welcome back, {"\n"} {name.firstName}</Text>
          <Icon name="user-circle-o" size={25} color="#aa4f15" onPress />
        </View>
            
        <View style={styles.donationContainer}>
          <Image source={require('../assets/16Days-Action-banner.png')} style={styles.imageBanner} />
          <Text style={styles.OrganizationName}>Organization Name</Text>
          <Text style={styles.fundraiserTitle}>Fundraiser Title</Text>
          <Text style={styles.donationDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, sunt beatae cum esse neque modi deleniti dicta asperiores reiciendis, explicabo illum et nulla praesentium repellendus dignissimos nemo distinctio qui dolorum!</Text>
          <ProgressBar progress={0.33} color={MD3Colors.error50} />
          <Text style={styles.moneyRaised}><Text style={styles.targetAmount}>P5000 raised </Text>of P15,000</Text>
          <TouchableOpacity style={styles.donateBtn}>
            <Text style={styles.donateText}>Donate</Text>
          </TouchableOpacity>        
        </View>
        <View style={styles.line}/>
        <ScrollView scrollEventThrottle={16}>
          <Text>EVAW Movement Updates</Text>
          <View style={styles.articleContainer}>
            <Text styles={styles.headerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, provident.</Text>
            <Text styles={styles.author}>Juan Dela Cruz</Text>
            <Text styles={styles.time}>4min</Text>
            <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleBanner} />
          </View>
        </ScrollView>

    </SafeAreaView>
  ) 
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    box: {
      marginTop: 20,
      height: 70,
      backgroundColor: '#fbf9f7',
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginHorizontal: 20,
      alignItems: 'center',
      borderRadius: 20,
    },
    greetings: {
        color: '#aa4f15',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logoutBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutBtn: {
        height: 44,
        width: 290,
        backgroundColor: '#fed4c2',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    topmostBox: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
      width: '80%',
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    donationContainer: { 
      // flex: 1,  
      marginVertical: 20,
      width: '80%',
      backgroundColor: '#fbf9f7',
      flexDirection: 'column',
      borderRadius: 20,
      padding: 15,
      height: 450,
    },
    imageBanner: {
      height: 160,
      borderRadius: 20,
      width: '100%',
    },
    OrganizationName: {
      fontSize: 15,
      fontWeight: '500',
      marginTop: 10,
    },
    fundraiserTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#d46823',
      marginTop: 8,
    },
    donationDescription: {
      fontSize: 12.5,
      marginVertical: 10,
      textAlign: 'justify',
    },
    moneyRaised: {
      fontSize: 13,
      marginTop: 8,
    },
    targetAmount: {
      fontWeight: '500',
    },      
    donateBtn: {
      height: 40,
      width: 100,
      backgroundColor: '#fed4c2',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
    },
    donateText: {
      fontWeight: '600',
      fontSize: 13,
    },
    line:{
      width: '80%',
      borderWidth: 0.5,
      borderColor: '#C7A896',
    },
})