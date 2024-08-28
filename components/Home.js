import { SafeAreaView,Image, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-paper';


export default function Home() {
  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.container}>
 <View style={styles.box}>
    </View>
    <View style={styles.container1}>
        <View style={styles.container2}>
        <Image style={styles.logo} source={require('../assets/favicon.png')} />
          <Text style={styles.text1}>TYRE MOTORS</Text>
          <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upload photo</Text>
      </TouchableOpacity>
      
      <View style={styles.infoSection}>
        
      <Text style={styles.companyName}>Tyre Motors</Text>
      <Text style={styles.industry}>Automotive</Text>
        <View style={styles.inlineTextGroup}>
          <Text style={styles.location}>Denver, CO</Text>
          <Text style={styles.employees}>25-50 employees</Text>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Icon name="email" size={20} color="#999" />
            <Text style={styles.contactText}>corp@tyresmotors.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon name="phone" size={20} color="#999" />
            <Text style={styles.contactText}>303-562-1092</Text>
          </View>
        </View>
      </View>
      <View style={styles.clientsSection}>
      <View style={styles.clientsHeader}>
        <Text style={styles.clientsTitle}>Clients</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more →</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.clientContainer}>
        <View style={styles.clientRow}>
          <View style={styles.clientItem}>
            <View style={styles.clientAvatar} />
            <Text style={styles.clientName}>Astamin</Text>
          </View>
          <View style={styles.clientItem}>
            <View style={styles.clientAvatar} />
            <Text style={styles.clientName}>Bealls</Text>
          </View>
          <View style={styles.clientItem}>
            <View style={styles.clientAvatar} />
            <Text style={styles.clientName}>Astamin</Text>
          </View>
          <View style={styles.clientItem}>
            <View style={styles.clientAvatar} />
            <Text style={styles.clientName}>Bealls</Text>
          </View>
        </View>
        <View style={styles.clientRow}>
          <View style={styles.clientItem}>
            <View style={styles.clientAvatar} />
            <Text style={styles.clientName}>Astamin</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.addClientButton}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
    <View style={styles.container3}>
      <Card style={styles.card}>
        <Text style={styles.cardText}>Company Name</Text>
        <Text style={styles.cardText}>Jackson Vita</Text>
        <Text style={styles.cardText}>Contact Email</Text>
        <Text style={styles.cardText}>jvita@tyremotors.com</Text>
        <Text style={styles.cardText}>Headquters(s)</Text>
        <Text style={styles.cardText}>Denver.co;Austin,TX;Miami,FL</Text>
      </Card>
    </View>
    <View style= {styles.container4}>
      <Text style= {styles.About} >About</Text>
      <Text style= {styles.Aboutcontent}>Denver's Primier automotive sevice provider We specialize in connecting vehcle owners with expert technicians dedicatedd to keeping your car running smoothly.Drive with confidence and peace of mind with Tyre Motors Where quality sevice and expert care are just a call away.</Text>
      <Card style={styles.card1}>
        <Text style={{ marginBottom: 20 }}>Additional Files And Images</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-around', marginBottom: 20 }}>
        <Icon name="image" size={40} color="#00ffff" />
        <Text>Team pic Jpg</Text>
        <Icon name="download" size={40} color = "#483d8b"/>
        <Icon name="delete" size={40} color ="#000000"/>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around',marginBottom: 10 }}>
        <Icon name="image" size={40} color="#00ffff" />
        <Text>WorkShop.jpg</Text>
        <Icon name="download" size={40} color = "#483d8b"/>
        <Icon name="delete" size={40} color ="#000000"/>
        </View>
      </Card>
      <View>
        <Text style={{fontWeight:'bold',  fontSize:20, marginTop:20,textAlign: 'start', }}>Current Open Project</Text>
        <Card style={styles.card1}>
        <TouchableOpacity style={{width:90, height:30, borderRadius:10, backgroundColor:'#ffa500', padding:4}}>
          <Text style={{color: 'white', padding:1, paddingHorizontal:8}}>Upcoming</Text>
        </TouchableOpacity>
        <Text style={{fontWeight:'bold',  fontSize:20, marginTop:10,textAlign: 'start', }}>Design concept</Text>
        <Text style={{ marginTop:20,textAlign: 'start', }}>Donce justo lacus. autor non rutrum eget, tempus eu nibh.Etiam sodales elit non purus.</Text>
      <Text style={{width:120, height:30, borderRadius:5, backgroundColor:'#c0c0c0',  fontSize:15, marginTop:10,textAlign: 'center', padding:4}}>Apr 18, 2022</Text>
   <View style={{flex:1, flexDirection:'row', justifyContent:''}}>
      <View style={  {width: 50, height: 50,borderRadius: 30,backgroundColor: '#c0c0c0',borderWidth: 3,borderColor: 'white',shadowColor: '#696969',marginTop:10}} />
      <View style={  {width: 50,height: 50,borderRadius: 30,backgroundColor: '#c0c0c0',borderWidth: 3,borderColor: 'white',shadowColor: '#696969',marginTop:10,}} />
        </View>
      </Card>
      </View>
      <Card style={styles.card1}>
        <TouchableOpacity style={{width:90, height:30, borderRadius:10, backgroundColor:'#008000', padding:4}}>
          <Text style={{color: 'white', padding:1, paddingHorizontal:8}}>Upcoming</Text>
        </TouchableOpacity>
        <Text style={{fontWeight:'bold',  fontSize:20, marginTop:10,textAlign: 'start', }}>Design concept</Text>
        <Text style={{ marginTop:20,textAlign: 'start', }}>Donce justo lacus. autor non rutrum eget, tempus eu nibh.Etiam sodales elit non purus.</Text>
      <Text style={{width:120, height:30, borderRadius:5, backgroundColor:'#c0c0c0',  fontSize:15, marginTop:10,textAlign: 'center', padding:4}}>Apr 18, 2022</Text>
   <View style={{flex:1, flexDirection:'row', justifyContent:''}}>
      <View style={  {width: 50, height: 50,borderRadius: 30,backgroundColor: '#c0c0c0',borderWidth: 3,borderColor: 'white',shadowColor: '#696969',marginTop:10}} />
      <View style={  {width: 50,height: 50,borderRadius: 30,backgroundColor: '#c0c0c0',borderWidth: 3,borderColor: 'white',shadowColor: '#696969',marginTop:10,}} />
        </View>
      </Card>
      <Card style={styles.card1}>
        <TouchableOpacity style={{width:90, height:30, borderRadius:10, backgroundColor:'#ff8c00', padding:4}}>
          <Text style={{color: 'white', padding:1, paddingHorizontal:8}}>Upcoming</Text>
        </TouchableOpacity>
        <Text style={{fontWeight:'bold',  fontSize:20, marginTop:10,textAlign: 'start', }}>Design concept</Text>
        <Text style={{ marginTop:20,textAlign: 'start', }}>Donce justo lacus. autor non rutrum eget, tempus eu nibh.Etiam sodales elit non purus.</Text>
      <Text style={{width:120, height:30, borderRadius:5, backgroundColor:'#c0c0c0',  fontSize:15, marginTop:10,textAlign: 'center', padding:4}}>Apr 18, 2022</Text>
   <View style={{flex:1, flexDirection:'row', justifyContent:''}}>
      <View style={  {width: 50, height: 50,borderRadius: 30,backgroundColor: '#c0c0c0',borderWidth: 3,borderColor: 'white',shadowColor: '#696969',marginTop:10}} />
      <View style={  {width: 50,height: 50,borderRadius: 30,backgroundColor: '#c0c0c0',borderWidth: 3,borderColor: 'white',shadowColor: '#696969',marginTop:10,}} />
        </View>
      </Card>
      <Card style={styles.card1}>
        
        <Text style={{fontWeight:'bold',  fontSize:30, marginTop:10,textAlign: 'center', }}>Create Project</Text>
        <TouchableOpacity style={{flex:1,justifyContent: 'center',alignItems: 'center',marginHorizontal:90,marginTop:10,width: 50,height: 50,borderRadius: 30,backgroundColor: '#007BFF',
        }}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
       
      </Card>
    </View>
    </View>
    </View> 
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:0,
      },
    box: {
        width: 340,
      height:100,
        backgroundColor: '#3275a8',
        borderRadius: 10, 
      },
      container1:{
        width: 340,
       
        // backgroundColor: 'teal',
        borderRadius: 10, 
        marginTop: 20,
        marginBottom: 50,
        borderWidth: 1, 
        borderColor: 'black', 
      },
      container2:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100,
        
      },
      text1:{
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:30, 

      },
      button: {
        width:160,
        height:50,
        borderRadius:50,
        backgroundColor:'#a9a9a9',
       padding:12,
       marginTop:30
      },
      buttonText: {
        fontSize: 16,
      paddingHorizontal:20
    },
    infoSection: {
      marginTop:20,
      marginRight:30
    },
      companyName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
      },
      industry: {
        fontSize: 16,
        color: '#007BFF',
        marginBottom: 10,
      },
      inlineTextGroup: {
        flexDirection: 'row',
        gap:20,
        marginBottom: 10,
      },
      location: {
        fontSize: 16,
        color: '#555',
        marginRight: 20,
      },
      employees: {
        fontSize: 16,
        color: '#555',
      },
      contactInfo: {
        marginBottom: 20,
        
      },
      contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      contactText: {
        fontSize: 16,
        color: '#555',
        marginLeft: 10,
      },
      clientsSection: {
        marginTop: 20,
      },
      clientsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
      },
      clientsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      seeMore: {
        fontSize: 16,
        color: '#FF4500',
      },
      clientContainer: {
        flexDirection: 'row',
        paddingHorizontal:35,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      clientRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
      },
      clientItem: {
        alignItems: 'center',
        marginRight: 20,
      },
      clientAvatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#696969',
        marginBottom: 5,
      },
      clientName: {
        fontSize: 14,
        color: '#333',
      },
      addClientButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#007BFF',
        marginLeft: 250,
        marginTop: -77,
      },
      container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop:20
      },
      card: {
        width: 280,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000', 
        backgroundColor: '#fff',
      },
      cardText: {
        fontSize: 15,
        color: '#333',
        marginBottom: 10,
      },
      container4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'start',
        padding: 20,
        marginTop:-40
      },
      About: {
        fontSize: 24,
        fontWeight: 'bold', 
        marginTop: 10,
        textAlign: 'start', 
      },
      Aboutcontent: {
        fontSize: 16,
        textAlign: 'start', 
        color: '#333',
      },
      card1: {
        width: 280,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000', 
        backgroundColor: '#fff',
        marginTop:20
      },
      
})