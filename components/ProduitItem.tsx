import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Produit } from '../model/produit';

interface ProduitItemProps  {
    produit: Produit;
  };
  interface ProduitItemState {
    time: Date
  };


export class ProduitItem extends React.Component<ProduitItemProps,ProduitItemState> {
 

  render() {
    return (
    <View style={styles.main_container}>
        <Text style={styles.nom_text}>{this.props.produit.nom}</Text>

        <Text style={styles.prix_text}>{this.props.produit.prix}</Text>
       
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
