import React from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity } from 'react-native';


class ContactForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.input} placeholder='firstName'/>
                    <TextInput style={styles.input} placeholder='lastName'/>
                    <TextInput style={styles.input} placeholder='age'/>
                    <TextInput style={styles.input} placeholder='Photo'/>
                </View>
                <View>
                    <TouchableOpacity
                        ><Text>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = {
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#fff'
      },
    input: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 2
    }
}

export default ContactForm;
