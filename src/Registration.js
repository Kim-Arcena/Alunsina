import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
import Checkbox from 'expo-checkbox';
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";



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
        <View style={styles.container}>
            <Text style={styles.title}>Create Volunteer Account</Text>
                <View style={styles.inputView} >
                    <View style={styles.fullName}>
                        <View style={styles.firstNameFrame}>
                            <Text style={styles.inputTextLabel}>First Name</Text>
                            <TextInput 
                                style={styles.halfName}
                                placeholder="Juan"
                                onChangeText={firstName => setFirstName(firstName)}
                                autoCapitalize="none"
                                autoCorrect={false}    
                            />
                        </View>
                        <View style={styles.firstNameFrame}>
                            <Text style={styles.inputTextLabel}>Last Name</Text>
                            <TextInput 
                                style={styles.halfName}
                                placeholder="Dela Cruz"
                                onChangeText={lastName => setLastName(lastName)}
                                autoCapitalize="none"
                                autoCorrect={false}    
                            />
                        </View>
                </View>
                
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
        </View>
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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
    },
    inputTextLabel:{
        fontSize: 16,
        marginLeft: 17,
        marginTop: 7,
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
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 20,
        borderColor: '#cccdce',
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
        borderColor: '#cccdce',
    },
    fullName: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registrationBtn: {
        height: 44,
        width: 290,
        backgroundColor: '#fed4c2',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 85,
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
        marginBottom: 20
    },
})