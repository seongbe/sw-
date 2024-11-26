// src/components/CustomHeader.tsx
import React from 'react';
import { View,  Image, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../asset/images/Logo.png')} // 헤더에 표시할 이미지
        style={styles.logo}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
     
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF', // 헤더 배경색
    
  },
  logo: {
    width: 150,
    height: 100,
    marginTop: 30,
  },
  
});

export default CustomHeader;