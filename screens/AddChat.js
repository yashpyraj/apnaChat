import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Avatar } from 'native-base'
import CustomListItem from '../components/CustomListItem'
import { auth, db } from '../firebase'
import { getAuth, signOut } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Center, Image, Input, Icon, Button, KeyboardAvoidingView } from 'native-base';
import { collection, addDoc } from "firebase/firestore";



export default function AddChat({ navigation }) {

    const [chatname, setChatname] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Chats',
            title: "Add new Chats"
        })
    }, [navigation])




    const createChat = async () => {
        try {
            const docRef = await addDoc(collection(db, "chats"), {
                chatName: chatname,
            });
            console.log("Document written with ID: ", docRef.id);
            navigation.goBack()
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    return (
        <Center>
            <Text>AddChat</Text>
            <Input mt='5'
                onChangeText={(text) => setChatname(text)}
                InputLeftElement={<Icon as={<MaterialIcons name="chat" />} size={5} ml="2" color="muted.400" />}
                w={{
                    base: "75%",
                    md: "25%"
                }} value={chatname}
                onSubmitEditing={createChat}
            />
            <Button onPress={createChat}> Create</Button>
        </Center>
    )
}

const styles = StyleSheet.create({})