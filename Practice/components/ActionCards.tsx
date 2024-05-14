/* eslint-disable prettier/prettier */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.card}>
        <View style={styles.cardHeadingContainer}>
          <Text style={styles.cardHeading}>
            New JavaScript Features in 2024
          </Text>
        </View>
        <Image
          source={require('../assets/images/js.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDescription} numberOfLines={3}>
            5 Exciting New JavaScript Features in 2024 are ECMAScript
            Updates,Temporal,Pipe Operator,Records and Tuples,RegExp /v
            flag,Decorators.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.sitepoint.com/new-javascript-ecmascript/',
              )
            }>
            <Text style={styles.socialLink}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/jinal-tandel/')
            }>
            <Text style={styles.socialLink}>Follow Me</Text>
          </TouchableOpacity>
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
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 8,
  },

  cardImage: {
    height: 250,
    width: '100%',
  },
  cardHeadingContainer: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  cardBody: {
    padding: 8,
    flex: 1,
    alignItems: 'center',
  },
  cardDescription: {
    fontSize: 12,
    textAlign: 'justify',
    color: '#37474F',
  },
  cardFooter: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    color: 'black',
    backgroundColor: '#f7ec79',
    padding: 8,
  },
});
