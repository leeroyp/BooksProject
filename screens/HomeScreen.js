import React from 'react'
import {Text, View , StyleSheet, Button} from 'react-native'
const  HomeScreen = () => {
    return (
       <View style={styles.container}> 
           <Text >HomeScreen</Text>
           <Button title="Logout" onPress={()=>{}}/>
       </View>
    )
}

const styles = StyleSheet.create ({
    container: { 
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default HomeScreen
