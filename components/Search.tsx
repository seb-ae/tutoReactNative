// Components/Search.tsx

import React from 'react'
import { View, TextInput, Button } from 'react-native'


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
      <View>
        <TextInput placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}