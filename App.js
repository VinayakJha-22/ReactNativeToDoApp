import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [moadlIsVisible, setModalIsVisible] = useState(false)
  const [goals, setGoals] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setGoals(currentGoals => [...currentGoals, {id:Math.random().toString(), text:enteredGoalText}])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput visible={moadlIsVisible} onAddGoal={addGoalHandler} onClose={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 6
  }
});
