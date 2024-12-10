import { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/yurichi.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your Goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Close'
              onPress={props.onClose}
              color="#ffdb58"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b"
  },
  image:{
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ffdb58"
  },
  textInput: {
    borderRadius: 5,
    width: '100%',
    padding: 10,
    color: "#ffdb58",
    backgroundColor: "#b180f0"
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})