 import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
 import React, {useState} from 'react'
 import { useNavigation } from '@react-navigation/native';
 import { firebase } from "../config";
 
 const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error.toString())
        }
    }


   return (
     <View style={styles.container}>
         <Text style={styles.title}>
            EVAW Movement Chuchu
        </Text>
        <View style={styles.inputView} >
            <Text style={styles.inputTextLabel}>Email</Text>
            <TextInput style={styles.textInput}
                placeholder="lorem@ipsum.com"
                onChangeText={email => setEmail(email)}
                autoCapitalize="none"
                placeholderTextColor="#bfc0c1"
                autoCorrect={false}
            />
            <Text style={styles.inputTextLabel}>Password</Text>
            <TextInput style={styles.textInput}
                placeholder="Password"
                onChangeText={password => setPassword(password)}
                autoCapitalize="none"
                placeholderTextColor="#bfc0c1"
                secureTextEntry={true}
            />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => loginUser(email, password)}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.bottomText}>Don't have an account? <span style={{color: 'green'}}>colorful</span></Text>
        </TouchableOpacity>
     </View>
   )
 }
 
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 26,
            justifyContent: 'center',
            paddingTop: 50,
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        inputTextLabel:{
            fontSize: 16,
            marginLeft: 19,
            marginTop: 15,
            fontWeight: 'bold',
        },
        inputView: {
            marginTop: 50,
            width: "80%",
        },
        textInput: {
            height: 55,
            width: 292,
            margin: 12,
            borderWidth: 1,
            padding: 15,
            fontSize: 18,
            borderRadius: 20,
            borderColor: '#cccdce',
        },
        loginBtn: {
            height: 44,
            width: 290,
            backgroundColor: '#fed4c2',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
        },
        loginText: {
            fontWeight: 'bold',
            fontSize: 15,
        },
    })


 export default Login