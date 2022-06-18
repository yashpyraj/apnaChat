
import React, { useEffect, useState } from 'react'
import { Center, Image, Input, Icon, Button, KeyboardAvoidingView } from 'native-base';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, FacebookAuthProvider, getRedirectResult } from 'firebase/auth';
import { auth } from '../firebase';
export default function LoginScreen({ navigation }) {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                navigation.replace('Home')
            }

        });

        return unsubscribe
    }, [])

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('Sign IN', user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });
    }




    return (
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView>
                <Center>
                    <Image style={{ borderRadius: 80 }} source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }} alt="Alternate Text" size="xl" />
                    <Input mt='5'
                        onChangeText={(text) => setEmail(text)}
                        w={{
                            base: "75%",
                            md: "25%"
                        }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" value={email} />
                    <Input
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        w={{
                            base: "75%",
                            md: "25%"
                        }} type={show ? "text" : "password"} mt='5'
                        onSubmitEditing={signIn}

                        InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
                    <Button mt='5' name='Press' style={styles.center} onPress={signIn} w={{
                        base: "55%",
                        md: "25%"
                    }}> Login</Button>
                    <Button
                        onPress={() => navigation.navigate('Registor')}
                        mt='5' name='Press' variant={'outline'} w={{
                            base: "55%",
                            md: "25%"
                        }} > Registor</Button>


                </Center>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 10, justifyContent: "center", },
    center: { justifyContent: "center", alignItems: 'center', textAlign: 'center' }
})