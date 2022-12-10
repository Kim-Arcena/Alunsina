import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import { LinearGradient } from 'expo-linear-gradient';


const AddFundraiser = () => {
    const navigation = useNavigation();
    const fundraiserRef = firebase.firestore().collection('fundraisers');
    const [organizationHandler, setOrganizationHandler] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [targetAmount, setTargetAmount] = useState('')
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    const [image, setImage] = useState(null);

    const addFundraiser = async () => {
        if(title && title.length > 0 && description && description.length > 0 && targetAmount && targetAmount.length > 0) {
            await fundraiserRef.add({
                organizationHandler: organizationHandler,
                title: title,
                description: description,
                targetAmount: targetAmount,
                createdAt: timestamp()
            })
            .then(() => {
                alert('Fundraiser added')
                navigation.navigate('Dashboard')
            })
            .catch((error) => {
                alert(error.message)
            })
        }
    }


    return (
        <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#ffffff','#FBB878']} style={styles.gradient}>

        <Text style={styles.title}>Create Fundraiser</Text>
            <View style={styles.inputView} >
            <Text style={styles.inputTextLabel}>Upload Fundraising Banner</Text>
            <TouchableOpacity style={styles.uploadImage} >
                <Text style={styles.loginText}>Upload Image</Text>
            </TouchableOpacity>
            <Text style={styles.inputTextLabel}>Organizaton Name</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Organizaton Name"
                onChangeText={organizationHandler => setOrganizationHandler(organizationHandler)}
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
                multiline={true}
            />
            <Text style={styles.inputTextLabel}>Target Amount</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="Target Amount"
                onChangeText={targetAmount => setTargetAmount(targetAmount)}
                autoCapitalize="none"
                autoCorrect={false}    
            />
        </View>
        <TouchableOpacity style={styles.addFundraiserBtn} 
            onPress={() => addFundraiser(
                organizationHandler,
                title,
                description,
                targetAmount)}>
            <Text style={styles.loginText}>Add Fundraiser</Text>
        </TouchableOpacity>
        </LinearGradient>
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
        paddingTop: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputTextLabel:{
        fontSize: 16,
        marginTop: 7,
        fontWeight: 'bold',
    },
    inputView: {
        marginTop: 30,
        width: "80%",
    },
    gradient: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        justifyContent: 'center',
    },
    textInput: {
        height: 50,
        width: 320,
        marginVertical: 6,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 20,
        borderColor: '#fef1e5',
        backgroundColor: '#fef1e5',
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
        borderColor: '#cccdce',
    },
    fullName: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    addFundraiserBtn: {
        height: 44,
        width: 290,
        backgroundColor: '#F27153',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    loginText: {
        fontWeight: '600',
        fontSize: 13,
    },
    uploadImage: {
        marginTop: 10,
        height: 44,
        width: 120,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        marginTop: 12,
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
        width: 320,
        marginVertical: 6,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        fontSize: 16,
        borderRadius: 20,
        borderColor: '#fef1e5',
        backgroundColor: '#fef1e5',
        alignContent: 'flex-start',
        textAlignVertical: 'top',
    }
})