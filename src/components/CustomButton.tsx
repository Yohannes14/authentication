import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ButtonProps = {
    onPress: PressableProps['onPress'];
    text: string;
}

const CustomButton: React.FC<ButtonProps> = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }

})