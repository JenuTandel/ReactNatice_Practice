import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

export const AddContact = (props) => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const addContactHandler = () => {
    props.onAddContact({
      firstname: firstname,
      surname: surname,
      phone: phone,
    });
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Firstname"
          value={firstname}
          onChangeText={(txt) => setFirstname(txt)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Surname"
          value={surname}
          onChangeText={(txt) => setSurname(txt)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone"
          value={phone}
          onChangeText={(txt) => setPhone(txt)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addContactHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
