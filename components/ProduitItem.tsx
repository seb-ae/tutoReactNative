import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export class ProduitItem extends React.Component {
  render() {
    return (
    <View style={styles.main_container}>
        <Text style={styles.nom_text}>Nom du produit</Text>
        <Text style={styles.prix_text}>prix</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  nom_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    paddingRight: 5
  },
  prix_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
})
