import { StyleSheet, Text, View , FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';

export default function ResultsList({title , results}) {
   
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
      horizontal // yana yana basma 
      data={results}
      renderItem={({item})=>{
        return(
            <TouchableOpacity>
                <ResultDetail result={item} />
            </TouchableOpacity>
        )
      }}
       />
    </View>
  )
}

const styles = StyleSheet.create({})