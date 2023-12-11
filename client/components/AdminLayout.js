import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

const AdminLayout = ({children, navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Admin Dashboard" />
        <Appbar.Action icon='home' onPress={() => navigation.navigate('AdminDashboard')} />
        <Appbar.Action icon='logout' onPress={() => navigation.navigate('Login')} />
      </Appbar.Header>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>

      <View style={styles.footer}>
        <Text variant="labelSmall">
          © {new Date().getFullYear()} My Application Name. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  footer: {
    marginTop: 10,
    backgroundColor: '#f4f4f4',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default AdminLayout;
