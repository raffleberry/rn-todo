import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const buttonHandler = () => {
        if (submitHandler(text)) {
            setText('');
        }
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={buttonHandler} title='Add' color='coral'></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});