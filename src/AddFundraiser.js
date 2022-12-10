import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
import Checkbox from 'expo-checkbox';
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";

const AddFundraiser = () => {
    const navigation = useNavigation();
    const fundraiserRef = firebase.firestore().collection('fundraisers');
    const [organizationName, setOrganizationName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [targetAmount, setTargetAmount] = useState('')

    const addFundraiser = async () => {
        if(title && title.length > 0 && description && description.length > 0 && targetAmount && targetAmount.length > 0) {
            await fundraiserRef.add({
                organizationName: organizationName,
                title: title,
                description: description,
                targetAmount: targetAmount,
            })
            .then(() => {
                alert('Fundraiser added')
                navigation.navigate('Home')
            })
            .catch((error) => {
                alert(error.message)
            })
        }
    }


    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create Fundraiser</Text>
            <View style={styles.inputView} >
    
            
            <Text style={styles.inputTextLabel}>Organizaton Name</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Organizaton Name"
                onChangeText={organizationName => setOrganizationName(organizationName)}
                autoCapitalize="none"
                autoCorrect={false}    
            />

            <Text style={styles.inputTextLabel}>Title</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Title"
                onChangeText={title => setTitle(title)}
                autoCapitalize="none"
                autoCorrect={false}    
            />

            <Text style={styles.inputTextLabel}>Description</Text>
            <TextInput 
                style={styles.textInputDescription}
                placeholder="Description"
                onChangeText={description => setDescription(description)}
                autoCapitalize="none"
                autoCorrect={false}  
                secureTextEntry={true}  
            />

            <Text style={styles.inputTextLabel}>Target Amount</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Target Amount"
                onChangeText={targetAmount => setTargetAmount(targetAmount)}
                autoCapitalize="none"
                autoCorrect={false}  
                secureTextEntry={true}  
            />
        </View>
        <TouchableOpacity style={styles.addFundraiserBtn} 
            onPress={() => addFundraiser(
                organizationName,
                title,
                description,
                targetAmount)}>
            <Text style={styles.loginText}>Add Fund</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AddFundraiser

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
        fontWeight: 'bold',
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
    addFundraiserBtn: {
        height: 44,
        width: 290,
        backgroundColor: '#fed4c2',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
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
    textInputDescription: {
        height: 100,
        width: 292,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 20,
        borderColor: '#cccdce',
    }
})