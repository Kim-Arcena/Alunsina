 import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
 import Checkbox from 'expo-checkbox';
 import React, {useState} from 'react'
 import { SafeAreaView } from 'react-native-safe-area-context'
 import { useNavigation } from '@react-navigation/native';
 import { firebase } from "../config";
 import { Platform, StatusBar } from "react-native";
 import { LinearGradient } from 'expo-linear-gradient';
 
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
            alert(error.message);
        }
    }


   return (
     <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#ffffff','#FBB878']} style={styles.gradient}>
        <Image source={require('../assets/splash3.png')} style={styles.icon} />
         <Text style={styles.title}>Providing Solutions in Stopping VAWC</Text>
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
                <Text style={{color: '#1D1D1D', marginRight: 10,  fontSize: 14}}>Remember Me?</Text>
                <Text style={{color: '#1D1D1D', marginLeft: 12,  fontSize: 14}}>Forgot Password?</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => loginUser(email, password)}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.bottomText}>Don't have an account? <Text style={styles.bottomTextSpan}>Sign Up</Text></Text>
        </TouchableOpacity>
        </LinearGradient>
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
    gradient: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        marginTop: 20,
        fontWeight: 'bold',
    },
    inputTextLabel:{
        fontSize: 16,
        marginTop: 15,
        fontWeight: 'bold',
        marginBottom: -10,
        marginLeft: 17,
    },
    inputView: {
        marginTop: 30,
        width: "80%",
    },
    textInput: {
        height: 50,
        width: 300,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderRadius: 20,
        borderColor: '#fef1e5',
        alignSelf: 'center',
        backgroundColor: '#fef1e5',
    },
    loginBtn: {
        height: 44,
        width: 290,
        backgroundColor: '#F27153',
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
        color: '#1D1D1D',
    },
    bottomTextSpan: {
        color: '#D46823',
    },
    addForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        marginHorizontal: 15,
    },
    icon: {
        width: 153, 
        height: 150, 
        marginBottom: 20,
        overflow: 'hidden',
    },
})


