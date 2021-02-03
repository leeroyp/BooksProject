import React, {useContext} from 'react'
import {Text, View , StyleSheet, Button} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const  HomeScreen = () => {

    const {logout} =useContext(AuthContext)


    return (
       <View style={styles.container}> 
           <Text >HomeScreen</Text>
           <Button title="Logout" onPress={()=>logout()}/>
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
