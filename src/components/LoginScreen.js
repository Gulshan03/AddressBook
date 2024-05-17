import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [factorial, setFactorial] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    const num = parseInt(number);
    if (num < 0) {
      alert('Please enter a non-negative number');
      return;
    }
    let fact = 1;
    for (let i = 2; i <= num; i++) {
      fact *= i;
    }
    if (fact.toString() === factorial) {
      // Navigate to Frame 2
      navigation.navigate('MainScreen');
    } else {
      setError('Invalid credentials');
    }
  };

  const clearField = () => {
    setFactorial('');
    setNumber('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Find Factorial</Text>
      <TextInput
        placeholder="Enter number"
        keyboardType={'number-pad'}
        value={number}
        onChangeText={setNumber}
        style={[styles.inputfilds, {marginTop: 50}]}
      />
      <TextInput
        placeholder="Enter factorial"
        keyboardType={'number-pad'}
        value={factorial}
        onChangeText={setFactorial}
        style={[styles.inputfilds, {marginTop: 30}]}
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btntxt}>submit</Text>
      </TouchableOpacity>

      {/* {error && <Text style={{color: 'ed'}}>{error}</Text>} */}
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },
  title: {
    fontSize: 30,
    color: '#000',
    marginTop: '45%',
    alignSelf: 'center',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  inputfilds: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 16,
    fontSize: 16,
    color: '#000',
    borderColor: '#000',
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#2E8B57',
    alignItems: 'center',
  },
  btntxt: {
    color: '#fff',
    fontSize: 22,
  },
});
