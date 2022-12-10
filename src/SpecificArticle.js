import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const SpecificArticle = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} style={styles.articleScrollView}>
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: screenWidth }}>
      <View style={styles.articleHeader}>
        <Text style={styles.articleTitle}>Article Title</Text>
        <View style={styles.articleDetails}>
          <Text style={styles.articleAuthor}>Author</Text>
          <Text style={styles.articleTime}>4 min</Text>
          <Text style={styles.articleTime}>12 Hours Ago</Text>
        </View>
      </View>
      <View style={styles.line}/>
      <View style={styles.articleContent}>
        <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleImage} />
        <View style={styles.line}/>        
        <Text style={styles.details}>
        {"\t"}{"\t"}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur sint et nam ex iusto, amet dolorum facilis voluptate possimus vel autem eos, delectus dolores nisi tempore eaque. Eligendi sit in mollitia autem reprehenderit exercitationem reiciendis sint dignissimos dolor suscipit sed impedit voluptas, dolorum quod eos, nihil asperiores enim quisquam et aut. Iusto quibusdam laborum corporis perferendis aliquam voluptatum molestiae dolorum saepe numquam? Repudiandae excepturi, harum et vel maxime in laboriosam?
        {"\n"}
        {"\t"}{"\t"}Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, libero. Expedita, porro nihil. Accusamus obcaecati repellendus recusandae vitae eos quibusdam sed necessitatibus impedit ratione suscipit eligendi provident tenetur deserunt labore, inventore, cumque pariatur quisquam adipisci dolores sunt deleniti officia praesentium. Autem earum quisquam a dolore maxime natus, officia, dicta alias quia adipisci corporis velit ratione facere nam vero saepe, id quibusdam repellat harum. Incidunt veritatis amet, beatae minus provident soluta consequuntur odio illum ea facilis omnis autem vitae dolore molestias?
        </Text>
        <View style={styles.line}/>
          
          <View style={styles.articleSection}>
            <Text style={styles.articleMainTitle}>EVAW Movement Updates</Text>
            <View style={styles.articleBox}>
              <View style={styles.articleTexts}>
                <Text style={styles.headerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                  <View style={styles.smallDetails}>
                    <Text style={styles.author}>Juan Dela Cruz</Text>
                    <Text style={styles.time}>4min</Text>
                  </View>
                </View>
              <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleBanner} />
            </View>
            <View style={styles.articleBox}>
              <View style={styles.articleTexts}>
                <Text style={styles.headerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                  <View style={styles.smallDetails}>
                    <Text style={styles.author}>Juan Dela Cruz</Text>
                    <Text style={styles.time}>4min</Text>
                  </View>
                </View>
              <Image source={require('../assets/ufvaw.jpeg')} style={styles.articleBanner} />
            </View>
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
      </View>
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SpecificArticle

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingTop: 40,
    },
    articleTitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    articleAuthor: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    articleHeader: {
      width: '80%',
      flexWrap: 'wrap',
    },
    articleBanner: {
      height: 70,
      width: 70,
      borderRadius: 15,
    },
    articleTime: {
      fontSize: 12,
      color: '#C7A896',
    },
    articleContent: {
      width: '80%',
      textAlign: 'justify',
      marginTop: 10,
    },
    articleSection: {
      marginTop: 10,
      width: '100%',
    },
    articleMainTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    details: {
      fontSize: 11,
      textAlign: 'justify',
      marginVertical: 5,
    },
    articleImage: {
      height: 200,
      width: 200,
      borderRadius: 15,
      alignSelf: 'center',
      marginVertical: 10,
    },
    headerText: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    
    articleTexts: {
      width: '70%',
    },
    articleDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    articleBox: {
      flexDirection: 'row',
      backgroundColor: '#fbf9f7',
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
    line:{
      borderWidth: 0.5,
      borderColor: '#C7A896',
      width: 320,
      alignSelf: 'center',
    },
})