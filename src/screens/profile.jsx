import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ProfileModal = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <>
      <Button title="Profile" onPress={openModal} />
      <Modal visible={visible} onRequestClose={closeModal} animationType="slide">
        <View style={styles.modalView}>
          <Text>Profile Sidebar Content</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});

export default ProfileModal;