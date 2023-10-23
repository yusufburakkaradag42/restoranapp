import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
export default function SearchBar({term,onTremChange , onTremsubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
      <TextInput style={styles.inputStyle}
      placeholder='Ara'
      autoCapitalize='none'
      autoCorrect={false}
      //arama
      value={term}
      onChangeText={onTremChange}
      onEndEditing={onTremsubmit}
       />

    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'lightgray',
        flexDirection:'row', //yan yana
        margin:10,
        height:50,
        alignItems: 'center',
        borderRadius: 20,
    },
    iconStyle:{
        marginHorizontal: 15 ,

    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
    },
})