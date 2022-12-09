import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";


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
        <Text style={styles.greetings}>Welcome back, {name.firstName}</Text>
        <TouchableOpacity 
            onPress={() => firebase.auth().signOut()}
            style={styles.logoutBtn}
        >
            <Text style={styles.logoutBtnText}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
   )
}

export default Dashboard
c
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    greetings: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 16
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
    }
})