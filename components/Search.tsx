// Components/Search.tsx

import React from 'react'
import { StyleSheet,View, TextInput, Button, FlatList, Text } from 'react-native'
import {PRODUCTS} from '../helpers/produits-data'
import { ProduitItem } from './ProduitItem';

const styles =  StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

type SearchProps = {
  // using `interface` is also ok
  //message: string;
};
type SearchState = {
  count: number; // like this
};

export default class Search extends React.Component<SearchProps, SearchState>  {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ProduitItem produit={item}/>}
        />
      </View>
    )
  }
}