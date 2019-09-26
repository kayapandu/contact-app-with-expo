import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';

class ContactList extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this._getContactData();
    }

    _getContactData = () => {
        axios.get('https://simple-contact-crud.herokuapp.com/contact')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Contact List Page</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ContactList;