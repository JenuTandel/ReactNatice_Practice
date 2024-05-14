/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <View style={[styles.card]}>
        <Image
          source={require('../assets/images/TajLake.jpeg')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Lake Palace</Text>
          <Text style={styles.cardLabel}>Udaipur, Tourist Place</Text>
          <Text style={styles.cardDescription}>
            Lake Palace is a former summer palace of the royal dynasty of Mewar,
            it is now turned into a hotel.{' '}
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  cardImage: {
    height: 250,
    width: '100%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardBody: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    flex: 1,
    flexShrink: 1,
  },
  cardTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  cardLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 8,
  },
  cardDescription: {
    color: '#455A64',
    marginBottom: 8,
    fontSize: 12,
  },
  cardFooter: {
    color: '#2962FF',
    fontSize: 12,
  },
});
