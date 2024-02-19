import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Logo from "../../assets/images/jd.png";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const OnSignInPresssed = () => { }
    const OnForgotPassPresssed = () => { }
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}

                resizeMode='contain'
            />
            <CustomInput
                placeholder='Username'
                value={username}
                setValue={setUsername}
                secureTextEntry={false}
            />
            <CustomInput
                placeholder='Password'
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton onPress={OnSignInPresssed} text='Sign In' />
            <CustomButton onPress={OnForgotPassPresssed} text='Forgot Password' />
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 200
    },
})