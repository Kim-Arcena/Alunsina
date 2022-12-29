import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, SafeAreaView} from 'react-native'
import Checkbox from 'expo-checkbox';
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import { colors } from '../components/color';

const Registration = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    registerUser = async (firstName, lastName, organizationName, email, password) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'https://alunsina-c5368.firebaseapp.com',
            })
            .then(() => {
                alert('Verification email sent')
            }).catch((error) => {
                alert(error.message);
            })
            .then(() => {
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName: firstName,
                    lastName: lastName,
                    organizationName: organizationName,
                    email: email,
                })
            })
            .catch((error) => {
                alert(error.message);
            })
        })
        .catch((error) => {
            alert(error.message);
        })
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Create Volunteer Account</Text>
                <View style={styles.inputView} >
                <Text style={styles.inputTextLabel}>First Name</Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Juan"
                        onChangeText={firstName => setFirstName(firstName)}
                        autoCapitalize="none"
                        autoCorrect={false}    
                    />
                <Text style={styles.inputTextLabel}>Last Name</Text>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Dela Cruz"
                        onChangeText={lastName => setLastName(lastName)}
                        autoCapitalize="none"
                        autoCorrect={false}    
                />
                <Text style={styles.inputTextLabel}>Organizaton Name</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Organizaton Name"
                    onChangeText={organizationName => setOrganizationName(organizationName)}
                    autoCapitalize="none"
                    autoCorrect={false}    
                />

                <Text style={styles.inputTextLabel}>Email</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="loremipsum@gmail.com"
                    onChangeText={email => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}    
                />

                <Text style={styles.inputTextLabel}>Password</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={password => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}  
                    secureTextEntry={true}  
                />
            </View>
            <TouchableOpacity style={styles.registrationBtn} 
                onPress={() => registerUser(
                    firstName,
                    lastName,
                    organizationName,
                    email,
                    password,)}>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.bottomText}>Have an account? <Text style={styles.bottomTextSpan}>Login</Text></Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
    
}

export default Registration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 25,
    },
    gradient: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        justifyContent: 'center',
    },
    inputTextLabel:{
        fontSize: 16,
        marginLeft: 17,
        marginTop: 7,
        fontWeight: 'bold',
        marginBottom: -8,
    },
    inputView: {
        marginTop: 10,
        width: "80%",
    },
    textInput: {
        height: 55,
        width: 300,
        marginVertical: 12,
        borderWidth: 2,
        padding: 10,
        paddingLeft: 18,
        fontSize: 16,
        borderRadius: 20,
        borderColor: colors.grey,
        alignSelf: 'center',
    },
    halfName: {
        height: 50,
        width: 140,
        marginVertical: 12,
        marginHorizontal: 5,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 20,
        borderColor: '#fef1e5',
        backgroundColor: '#fef1e5',
    },
    fullName: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registrationBtn: {
        height: 44,
        width: 290,
        backgroundColor: colors.lightorange,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    loginText: {
        fontWeight: '600',
        fontSize: 15,
        color: '#fff',
    },
    bottomText: {
        marginTop: 10,
        fontSize: 15,
        color: '#1D1D1D',
    },
    bottomTextSpan: {
        fontWeight: '600',
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
        width: 180, 
        height: 180, 
        marginBottom: 20
    },
})