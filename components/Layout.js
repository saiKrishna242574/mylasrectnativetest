import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function Layout({ navigation }) {  // Add navigation as a prop
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.drawerContainer}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/favicon.png')} />
          <Text style={styles.providerText}>Provider</Text>
          <Text style={styles.providerName}>Tyre Motors</Text>
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.menuText}>Main</Text>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Home')}  // Use navigation to go to Home
          >
            <FontAwesome name="dashboard" size={24} color="black" />
            <Text style={styles.menuText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="message" size={24} color="black" />
            <Text style={styles.menuText}>Messaging</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="credit-card" size={24} color="black" />
            <Text style={styles.menuText}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="heart" size={24} color="black" />
            <Text style={styles.menuText}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="briefcase" size={24} color="black" />
            <Text style={styles.menuText}>Clients</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="bar-chart" size={24} color="black" />
            <Text style={styles.menuText}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="dashboard" size={24} color="black" />
            <Text style={styles.menuText}>Technician Dashboard</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="cog" size={24} color="black" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Feather name="help-circle" size={24} color="black" />
            <Text style={styles.menuText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="sign-out" size={24} color="red" />
            <Text style={[styles.menuText, { color: 'red' }]}>Logout Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  providerText: {
    fontSize: 16,
    color: 'gray',
  },
  providerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuContainer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },
});
