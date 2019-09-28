import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Button } from 'react-native';
import axios from 'axios';

const dataContact = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 32,
        photo: 'N/A'
    },
    {
        id: 2,
        firstName: 'Jahn',
        lastName: 'Dhara',
        age: 32,
        photo: 'N/A'
    },
    {
        id: 3,
        firstName: 'Kahn',
        lastName: 'Thas',
        age: 32,
        photo: 'N/A'
    }
]

class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataContact: dataContact
        };
    };

    componentDidMount(){
        //this._getContactData();
    };
    
    componentDidUpdate() {
        console.log(this.state);
    }

    _getContactData = () => {
        axios.get('https://simple-contact-crud.herokuapp.com/contact')
            .then(res => res.data.data)
            .then(data => this.setState({ dataContact: data}))
            .catch(err => console.log(err));
    };

    _addData = () => { 
        const { dataContact } = this.state;
        const data = {
            id: dataContact.length + 1,
            firstName: 'John',
            lastName: `Don`,
            age: 32,
            photo: 'N/A'
        };

        this.setState(prevState => ({
            dataContact: [
                ...prevState.dataContact,
                data
            ]
        }));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Contact List Page</Text>
                <Button title='Add' onPress={this._addData}/>
                <FlatList
                    data={this.state.dataContact}
                    renderItem={({item}) => (
                            <View style={styles.list}>
                                <Text>{`${item.firstName} ${item.lastName}`}</Text>
                            </View>
                        )
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      backgroundColor: '#fff'
    },
    list: {
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        alignItems: 'flex-start'
    }
  });

export default ContactList;