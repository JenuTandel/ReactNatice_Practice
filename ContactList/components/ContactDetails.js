import { View, StyleSheet } from "react-native";

export const ContactDetails = (props) => {
  return (
    <View style={styles.contacts}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteContacts.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.contactName}>{props.contactName}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
