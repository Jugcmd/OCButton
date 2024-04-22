import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Tabs from './src/navigation/tabs'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <NavigationContainer>
        <SafeAreaView style={styles.container}>
            <Tabs />
        </SafeAreaView>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;