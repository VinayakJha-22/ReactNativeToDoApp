import {StyleSheet, Text, View, Pressable} from 'react-native'

function GoalItem(props) {
    return (
        <Pressable style={({pressed}) => pressed && styles.pressedItem} android_ripple={{color: '#5e0acc'}} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalTextContainer} >{props.text}</Text>
        </Pressable>
    )
};

export default GoalItem


const styles = StyleSheet.create({
    goalTextContainer: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white"
      },
    pressedItem: {
        opacity: 0.5
    }
})