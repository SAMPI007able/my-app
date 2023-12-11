import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { Text, TextInput, Button} from 'react-native-paper';
import SPOCLayout from '../../components/SPOCLayout';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import APIKEYS from '../../utility/constants/api'

const TaskCreationScreen = ({navigation}) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Request permissions for image picker
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access media library denied');
      }
    })();

    // Request permissions for location
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location denied');
      }
    })();
  }, []);

  const handleFormSubmit = () => {
    // Validate form fields
    if (!taskName.trim() || !taskDescription.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    // Process the form data (you can send it to the server, save it locally, etc.)
    // For demonstration purposes, we'll just log the data
    console.log('Task Name:', taskName);
    console.log('Task Description:', taskDescription);

    // Optionally, reset the form fields after submission
    setTaskName('');
    setTaskDescription('');

    // Show a success message or navigate to another screen
    // Alert.alert('Success', 'Task submitted successfully');
    navigation.navigate('UnitCreation')
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const getLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.error('Error getting location', error);
    }
  };

  const uploadData = async () => {
    if (image && location) {
      // Example endpoint to upload image and location
      const uploadEndpoint = `${APIKEYS.base_url}upload`;
      
      const formData = new FormData();
      formData.append('image', {
        uri: image,
        name: 'image.jpg',
        type: 'image/jpg',
      });
      formData.append('latitude', location.coords.latitude.toString());
      formData.append('longitude', location.coords.longitude.toString());

      try {
        const response = await fetch(`${uploadEndpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });

        // Handle the response as needed
        console.log('Upload response:', response.data);
      } catch (error) {
        console.error('Error uploading data', error);
      }
    } else {
      console.warn('Please select an image and fetch location before uploading.');
    }
  };

  return (
    <SPOCLayout navigation={navigation}>
      <View style={styles.container}>
        <Text variant="titleMedium" style={styles.title}>Enter the following details about the task</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Name'
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />

        <TextInput
          style={[styles.textArea]}
          placeholder='Enter brief description about the task'
          value={taskDescription}
          onChangeText={(text) => setTaskDescription(text)}
          numberOfLines={10}
          multiline
        />

      {image && <Image source={{ uri: image }} style={styles.image} />}
      
      <Button mode="outlined" style={styles.title} onPress={pickImage}>Pick Image</Button>
      <Button mode="outlined" style={styles.title} onPress={getLocation}>Get Location</Button>
      <Button title="Upload Data" onPress={uploadData} />
      {location && (
        <Text style={styles.locationText}>
          Latitude: {location.coords.latitude.toFixed(6)}, Longitude: {location.coords.longitude.toFixed(6)}
        </Text>
      )}

        <Button mode="contained" title="Submit" onPress={handleFormSubmit}> 
          Submit
        </Button>
      </View>
    </SPOCLayout>
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  locationText: {
    marginTop: 10,
    textAlign: 'center',
  }
});

export default TaskCreationScreen;
