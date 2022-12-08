import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((documentSnapshot) => {
      if (documentSnapshot.exists) {
        setName(documentSnapshot.data().firstName);
      }
      else {
        alert('User does not exist')
      }
    })
  }, []);

  return ( 
    <SafeAreaView style={styles.container}>
        <Text style={styles.greetings}>Welcome back {name.firstName}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
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
        color: '#ff6347',
        marginTop: 20
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