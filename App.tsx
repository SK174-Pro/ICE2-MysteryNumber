import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [secretNumber, setSecretNumber] = useState<number>(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const checkGuess = () => {
    const num = parseInt(guess, 10);

    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Enter a number between 1 and 100.');
      return;
    }

    if (num < secretNumber) {
      setMessage('Oops nice try. go for a bigger number.');
    } else if (num > secretNumber) {
      setMessage(' Not quite. go for a smaller number.');
    } else {
      setMessage('Lets Go! The number was ${secretNumber}.');
    }
  };

  const resetGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the number</Text>

      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={(text) => {
          const filtered = text.replace(/[^0-9]/g, '');
          setGuess(filtered);
        }}
        placeholder="Enter a number 1-100"
        keyboardType="numeric"
        maxLength={3}
      />

      <TouchableHighlight 
        style={[styles.button,styles.checkButton]} 
        onPress={checkGuess}>
        <Text style={styles.buttonText}>CHECK GUESS</Text>
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.button,styles.checkButton]}
        onPress={resetGame}>
        <Text style={styles.buttonText}>RESET GAME</Text>
      </TouchableHighlight>

      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: 350,
    alignItems: 'center',
  },
  checkButton: {
      backgroundColor: '#2563EB',
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      width: 350,
      alignItems: 'center',
  },
  resetButton: {
      backgroundColor: '#0EA5E9',
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      width: 350,
      alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  message: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});