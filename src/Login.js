 import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
 import Checkbox from 'expo-checkbox';
 import React, {useState} from 'react'
 import { SafeAreaView } from 'react-native-safe-area-context'
 import { useNavigation } from '@react-navigation/native';
 import { firebase } from "../config";
 import { Platform, StatusBar } from "react-native";

 
 const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(true);

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error.toString())
        }
    }


   return (
     <SafeAreaView style={styles.container}>
        <Image source={require('../assets/openHand.png')} style={styles.icon} />
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
            <View style={styles.addForm}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={isChecked ? '#a8a9ad' : undefined} />
                <Text style={{color: '#b0b1b2', marginRight: 10,  fontSize: 14}}>Remember Me?</Text>
                <Text style={{color: '#b0b1b2', marginLeft: 12,  fontSize: 14}}>Forgot Password?</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => loginUser(email, password)}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.bottomText}>Don't have an account? <Text style={styles.bottomTextSpan}>Sign Up</Text></Text>
        </TouchableOpacity>
     </SafeAreaView>
   )
 }

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },
    inputTextLabel:{
        fontSize: 16,
        marginTop: 15,
        fontWeight: 'bold',
        marginBottom: -10,
    },
    inputView: {
        marginTop: 30,
        width: "80%",
    },
    textInput: {
        height: 50,
        width: 292,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
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
        fontWeight: '600',
        fontSize: 13,
    },
    bottomText: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600',
        color: '#cccdce',
    },
    bottomTextSpan: {
        color: '#83b182',
    },
    addForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        marginHorizontal: 15,
    },
    icon: {
        width: 180, 
        height: 180, 
        marginBottom: 20,
        overflow: 'hidden',
    },
})


