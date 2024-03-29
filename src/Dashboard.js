import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { colors } from '../components/color';



const Dashboard = () => {
  const [name, setName] = useState('');
  const [fundraisingDetails, setFundraisersDetails] = useState([]);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const foundraiserRef = firebase.firestore().collection('fundraisers');
  const [fundraiserTitle, setFundraiserTitle] = useState('');
  const [fundraiserDescription, setFundraiserDescription] = useState('');
  const [fundraiserTargetAmount, setFundraiserTargetAmount] = useState('');
  const [fundraiserHandler, setFundraiserHandler] = useState('');

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
    foundraiserRef.orderBy("createdAt", "desc").onSnapshot(
      querySnapshot => {
        const fundraisingDetails = [];
        querySnapshot.forEach((doc) => {
          const { organizationHandler, title, description, targetAmount, createdAt} = doc.data();
          fundraisingDetails.push({
            id: doc.id,
            organizationHandler,
            title,
            description,
            targetAmount,
            createdAt
          });
        });
        setFundraisersDetails(fundraisingDetails);
        setFundraiserTitle(fundraisingDetails[0].title)
        setFundraiserDescription(fundraisingDetails[0].description)
        setFundraiserTargetAmount(fundraisingDetails[0].targetAmount)
        setFundraiserHandler(fundraisingDetails[0].organizationHandler)
        // console.log(fundraisingDetails)
    })
  }, [])
  return ( 
    <SafeAreaView style={styles.container}>
        <View style={styles.topmostBox}>    
          <Image source={require('../assets/splash3.png')} style={{width: 40, height: 40}} />
          <TouchableOpacity  onPress={() => firebase.auth().signOut()}>
            <Icon name="sign-out" size={25} color="black" />
          </TouchableOpacity>  
        </View>
        
        <View style={styles.box}>
          <Text style={styles.greetings}>Welcome back,{"\n"}{name.firstName}</Text>
          <Icon name="user-circle-o" size={25} color="#aa4f15" onPress />
        </View>
        <ScrollView scrollEventThrottle={16} style={styles.articleScrollView}>  
          <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center',  width: screenWidth }}>
          <View style={styles.donationContainer}>
            <Image source={require('../assets/16Days-Action-banner.png')} style={styles.imageBanner} />
            <Text style={styles.OrganizationName}>{fundraiserHandler}</Text>
            <Text style={styles.fundraiserTitle}>{fundraiserTitle}</Text>
            <Text style={styles.donationDescription}>{fundraiserDescription}</Text>
            <ProgressBar progress={0.33} color={colors.darkorange} />
            <Text style={styles.moneyRaised}><Text style={styles.targetAmount}>P5000 raised </Text>of P{fundraiserTargetAmount}</Text>
            <TouchableOpacity style={styles.donateBtn} onPress={() => navigation.navigate('CheckoutScreen')}>
              <Text style={styles.donateText}>Donate</Text>
            </TouchableOpacity>        
          </View>
        
          <View style={styles.line}/>
          
          <View style={styles.articleSection}>
            <Text style={styles.articleMainTitle}>EVAW Movement Updates</Text>
            <TouchableOpacity style={styles.articleBox} onPress={() => navigation.navigate('SpecificArticle')}>
              <View style={styles.articleTexts}>
                <Text style={styles.headerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                  <View style={styles.smallDetails}>
                    <Text style={styles.author}>Juan Dela Cruz</Text>
                    <Text style={styles.time}>4min</Text>
                  </View>
                </View>
              <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleBanner} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleBox} onPress={() => navigation.navigate('SpecificArticle')}>
              <View style={styles.articleTexts}>
                <Text style={styles.headerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                  <View style={styles.smallDetails}>
                    <Text style={styles.author}>Juan Dela Cruz</Text>
                    <Text style={styles.time}>4min</Text>
                  </View>
                </View>
              <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleBanner} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleBox} onPress={() => navigation.navigate('SpecificArticle')}>
              <View style={styles.articleTexts}>
                <Text style={styles.headerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                  <View style={styles.smallDetails}>
                    <Text style={styles.author}>Juan Dela Cruz</Text>
                    <Text style={styles.time}>4min</Text>
                  </View>
                </View>
              <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleBanner} />
            </TouchableOpacity>
          </View>
          </ScrollView>
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('AddFundraiser')}>
            <Icon name="plus-circle" style={styles.plusCircle} />
          </TouchableOpacity>  
    </SafeAreaView>
    
  ) 
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    box: {
      marginTop: 20,
      height: 70,
      backgroundColor: colors.white,
      elevation: 7,
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginHorizontal: 20,
      alignItems: 'center',
      borderRadius: 20,
      marginBottom: 10,
    },
    greetings: {
        color: '#E54615',
        fontSize: 20,
        fontWeight: 'bold',
    },
    gradient: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 26,
      justifyContent: 'center',
  },
    logoutBtnText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutBtn: {
        height: 44,
        width: 290,
        backgroundColor: '#ff8652',
        color: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    topmostBox: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
      width: '80%',
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    donationContainer: { 
      flex: 1,  
      marginVertical: 20,
      width: '80%',
      backgroundColor: colors.white,
      flexDirection: 'column',
      borderRadius: 20,
      padding: 20,
      elevation: 7,
      // height: 450,
    },
    imageBanner: {
      height: 160,
      borderRadius: 20,
      width: '100%',
    },
    OrganizationName: {
      fontSize: 15,
      fontWeight: '500',
      marginTop: 10,
    },
    fundraiserTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.darkorange,
      marginTop: 8,
    },
    donationDescription: {
      fontSize: 12.5,
      marginVertical: 10,
      textAlign: 'justify',
    },
    moneyRaised: {
      fontSize: 13,
      marginTop: 8,
    },
    targetAmount: {
      fontWeight: '500',
    },      
    donateBtn: {
      height: 40,
      width: 110,
      backgroundColor: colors.lightorange,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
    },
    donateText: {
      fontWeight: '600',
      fontSize: 14,
      color: colors.white,
    },
    line:{
      borderWidth: 0.5,
      borderColor: '#C7A896',
      width: '80%',
    },
    articleBanner: {
      height: 70,
      width: 70,
      borderRadius: 15,
    },
    articleSection: {
      marginTop: 10,
      width: '80%',
    },
    articleMainTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    headerText: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    articleTexts: {
      width: '70%',
    },
    articleBox: {
      flexDirection: 'row',
      backgroundColor: colors.lightgrey,
      borderRadius: 20,
      height: 100,
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    smallDetails: {
      flexDirection: 'row',
    },
    author: {
      fontSize: 12,
      marginRight: 20,
    }, 
    time: {
      fontSize: 12,
    },
    plusCircle: {
      fontSize: 50,
      color: colors.lightorange,
      position: 'absolute',
      left:110,
      bottom: 50,
      alignSelf: 'flex-end',
      backgroundColor: '#fff',
      borderRadius: 50,
    }
})