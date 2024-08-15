import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://192.168.105.187:3000/hello-world')  // 將 IP 地址替換為你自己的開發機 IP 地址
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{message || 'Loading...'}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
});



