import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
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
            dataContact: []
        };
    };

    componentDidMount(){
        this._getContactData();
    };

    _getContactData = () => {
        axios.get('https://simple-contact-crud.herokuapp.com/contact')
            .then(res => res.data.data)
            .then(data => this.setState({ dataContact: data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is Contact List Page</Text>
                <FlatList
                    data={this.state.dataContact}
                    renderItem={({item}) => (
                            <View>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ContactList;