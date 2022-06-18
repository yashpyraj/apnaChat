import { StyleSheet, View } from 'react-native'
import React from 'react'
import { HStack, Avatar, Text } from 'native-base'

const CustomListItem = ({ id, chatname, enterChat }) => {
    return (
        <View style={{ justifyContent: 'center', padding: 5, flex: 1, backgroundColor: 'white' }}>
            <HStack>
                <Avatar bg="purple.600" size="lg" source={{
                    uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                }}>
                    RB
                </Avatar>
                <View style={{ padding: 5, margin: 2 }}><Text bold style={{ marginBottom: 10 }}>Yash Raj</Text>
                    <Text isTruncated maxW="300" w="90%">resent isTruncated maxW="300" w="80%"  message</Text></View>

            </HStack>
        </View>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})