import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [contacts, setContacts] = useState([]);

  function startAddContactHandler() {
    setModalIsVisible(true);
  }

  function endAddContactHandler() {
    setModalIsVisible(false);
  }

  function addContactHandler(enteredContactText) {
    setContacts((currentContacts) => [
      ...currentContacts,
      { text: enteredContactText, id: Math.random().toString() },
    ]);
    endAddContactHandler();
  }

  function deleteContactHandler(id) {
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Contact"
          color="#a065ec"
          onPress={startAddContactHandler}
        />
        <AddContact
          visible={modalIsVisible}
          onAddContact={addContactHandler}
          onCancel={endAddContactHandler}
        />
        <View style={styles.contactsContainer}>
          <FlatList
            data={contacts}
            renderItem={(itemData) => {
              return (
                <ContactDetails
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteContactHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  contactsContainer: {
    flex: 5,
  },
});
