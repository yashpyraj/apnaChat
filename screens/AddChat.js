import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar } from 'native-base'
import CustomListItem from '../components/CustomListItem'
import { auth, db } from '../firebase'
import { getAuth, signOut } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Center, Image, Input, Icon, Button, KeyboardAvoidingView } from 'native-base';


export default function AddChat({ navigation }) {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Chats',
            title: "Add new Chats"
        })
    }, [navigation])
    return (
        <View>
            <Text>AddChat</Text>
        </View>
    )
}

const styles = StyleSheet.create({})