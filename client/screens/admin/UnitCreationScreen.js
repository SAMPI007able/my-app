import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, TextInput, Button} from 'react-native-paper';
import AdminLayout from '../../components/AdminLayout';

const UnitCreationScreen = ({navigation}) => {
  const [unitName, setUnitName] = useState('');
  const [unitDescription, setUnitDescription] = useState('');

  const handleFormSubmit = () => {
    // Validate form fields
    if (!unitName.trim() || !unitDescription.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    // Process the form data (you can send it to the server, save it locally, etc.)
    // For demonstration purposes, we'll just log the data
    console.log('Unit Name:', unitName);
    console.log('Unit Description:', unitDescription);

    // Optionally, reset the form fields after submission
    setUnitName('');
    setUnitDescription('');

    // Show a success message or navigate to another screen
    // Alert.alert('Success', 'Unit submitted successfully');
    navigation.navigate('UnitCreation')
  };

  return (
    <AdminLayout navigation={navigation}>
      <View style={styles.container}>
        <Text variant="titleMedium" style={styles.title}>Enter the following details about the unit</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Name'
          value={unitName}
          onChangeText={(text) => setUnitName(text)}
        />

        <TextInput
          style={[styles.textArea]}
          placeholder='Enter brief description about the unit'
          value={unitDescription}
          onChangeText={(text) => setUnitDescription(text)}
          numberOfLines={10}
          multiline
        />

        <Button mode="contained" title="Submit" onPress={handleFormSubmit}> 
          Submit
        </Button>
      </View>
    </AdminLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10
  },
  input: {
    width: '100%',
    marginBottom: 10
  },
  textArea: {
    width: '100%',
    marginBottom: 10
  },
});

export default UnitCreationScreen;
