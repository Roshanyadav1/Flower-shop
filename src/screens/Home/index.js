import { View, Text } from 'react-native'
import React from 'react'
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Home = () => {
    return (
        <View>
            <AppBar
                title="Title"
                subtitle="Lorem ipsum"
                centerTitle={true}
                leading={props => (
                    <IconButton icon={props => <Icon name="menu"  {...props} />} {...props} />
                )}
                trailing={props => (
                    <IconButton
                        icon={props => <Icon name="dots-vertical" {...props} />}
                        {...props}
                    />
                )}
            />
            <Text>hello</Text>
        </View>
    )
}

export default Home