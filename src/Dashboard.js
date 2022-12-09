import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';



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
          <Text style={styles.donationDescription}>Fundraiser Title</Text>
          <Text style={styles.donationDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, sunt beatae cum esse neque modi deleniti dicta asperiores reiciendis, explicabo illum et nulla praesentium repellendus dignissimos nemo distinctio qui dolorum!</Text>
          <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
          style={{ width: 300, height: 40 }}
        />
        </View>
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
      height: 80,
      // backgroundColor: '#ffac85',
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
      flex: 1,  
      alignItems: 'center',
      marginVertical: 20,
      width: '80%',
    },
    imageBanner: {
      height: 180,
      borderRadius: 20,
      width: '100%',
    },
})