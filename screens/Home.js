import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Avatar } from 'native-base'
import CustomListItem from '../components/CustomListItem'
import { auth, db } from '../firebase'
import { getAuth, signOut } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { collection, getDocs } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";

const Home = ({ navigation }) => {
    const [chats, setChats] = useState([])


    useEffect(() => {
        const chatRef = collection(db, "chats")

        const unsub = onSnapshot(chatRef, (snap) => {
            let chats = []
            snap.docs.forEach((doc) => {
                chats.push({ ...doc.data(), id: doc.id })
            })

            console.log(chats)
            setChats(chats)

        })


        return unsub
    }, [])






    const userSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign Out")
            navigation.replace('Login')
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    useLayoutEffect(() => {

        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerRight: () => (<View style={{ margin: 0 }}>
                <TouchableOpacity activeOpacity={0.5}
                    onPress={() => navigation.navigate('AddChat')}

                >
                    <MaterialIcons name='add' size={25} />
                </TouchableOpacity>
            </View>),
            headerLeft: () => (
                <View style={{ margin: 0 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={userSignOut}>
                        <Avatar size={'sm'} source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>

                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})