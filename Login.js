import react, {useState} from "react";
import {
    View,
    TextInput,
    Alert,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Button,
    Text
} from 'react-native'

import { auth } from './fbconfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoginView, setIsLoginView] = useState(true)

    const signupAction = async() => {
        if(email !== '' && password !== ''){
            try {
                
                await createUserWithEmailAndPassword(auth, email, password)
                .then(user => {
                    console.log(user);
                }) 
                .catch(err => {
                    Alert.alert(err.message)
                })

            } catch (error) {
                Alert.alert(error.message)
            }
        } else {
            Alert.alert('Email and password are required')
        }
    }

    const loginAction = async() => {
        if(email !== '' && password !== ''){
            try {
                
                await signInWithEmailAndPassword(auth, email, password)
                .then(user => {
                    console.log(user);
                }) 
                .catch(err => {
                    Alert.alert(err.message)
                })

            } catch (error) {
                Alert.alert(error.message)
            }
        } else {
            Alert.alert('Email and password are required')
        }
    }

    return (
        <View style={styles.container}>

            {
                isLoginView ? (
                    <>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder="Email address"
                        value={email}
                        autoCapitalize='none'
                        onChangeText={(e) => setEmail(e)}
                    />
        
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        keyboardType='default'
                        placeholder="Password"
                        value={password}
                        autoCapitalize='none'
                        onChangeText={(e) => setPassword(e)}
                    />
        
                    <TouchableOpacity onPress={loginAction} style={styles.btn}>
                        <Text style={styles.txt_btn}>Login</Text>
                    </TouchableOpacity>
                    <Button onPress={() => setIsLoginView(!isLoginView)} title="Don't have an account? Create Now!" />
                    </>
                ) : (
                    <>
                    <Text style={styles.title}>Create Account</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder="Email address"
                        value={email}
                        autoCapitalize='none'
                        onChangeText={(e) => setEmail(e)}
                    />
        
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        keyboardType='default'
                        placeholder="Password"
                        value={password}
                        autoCapitalize='none'
                        onChangeText={(e) => setPassword(e)}
                    />
        
                    <TouchableOpacity onPress={signupAction} style={styles.btn}>
                        <Text style={styles.txt_btn}>Signup</Text>
                    </TouchableOpacity>
                    <Button onPress={() => setIsLoginView(!isLoginView)} title="Back to Login" />
                    </>
                )
            }







        </View>
    )
}

const styles = StyleSheet.create({
    btn: { width: '100%', marginTop: 12, backgroundColor: '#000000', alignItems: 'center', paddingVertical: 12, borderRadius: 12 },
    txt_btn: { color: '#ffcc00', fontSize: 20 },
    input: {
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 12,
        borderRadius: 12,
        marginTop: 12,
        fontSize: 18,
    },
    title: {
        fontSize: 40,
        color: "#ffffff",
        fontWeight: "200",
    },
    container: {
        backgroundColor: "#00cc99",
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Login;