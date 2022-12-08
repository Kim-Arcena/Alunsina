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
            Login
        </Text>
        <View style={styles.inputView} >
            <TextInput style={styles.textInput}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                autoCorrect={false}
            />
            <TextInput style={styles.textInput}
                placeholder="Password"
                onChangeText={password => setPassword(password)}
                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
            />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => loginUser(email, password)}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.loginText}>Don't have an account? Sign Up</Text>
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
        },
        textInput: {
            height: 50,
            width: 300,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 20,
            textAlign: 'center',
        },
        loginBtn: {
            height: 50,
            width: 300,
            backgroundColor: '#fb5b5a',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
        },
    })


 export default Login