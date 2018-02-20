import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBE6VPG0Y2oOs8VugDLMwwi1esYkXFiIWw',
            authDomain: 'auth-628fc.firebaseapp.com',
            databaseURL: 'https://auth-628fc.firebaseio.com',
            projectId: 'auth-628fc',
            storageBucket: 'auth-628fc.appspot.com',
            messagingSenderId: '578819605165'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
