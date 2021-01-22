import * as React from 'react';
import {View, Text, FlatList, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppStyles from './../AppStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const DATA = [
  {
    id: '1',
    name: 'Tony Stark',
    isi: 'Apa kabar bro ?',
    waktu: '07:15 am',
    badge: '3',
  },
];

const Item = ({name, isi, waktu}) => (
  <View style={AppStyles.chatCard}>
    <Image style={AppStyles.image} source={require('./../assets/tony.jpg')} />
    <View style={AppStyles.viewChatArea}>
      <Text style={AppStyles.textChatName}>{name}</Text>
      <Text style={AppStyles.textChatContent}>{isi}</Text>
    </View>
    <View style={AppStyles.viewTimeArea}>
      <Text style={AppStyles.textTime}>{waktu}</Text>
      <View style={AppStyles.badge}>
        <Text style={AppStyles.textBadge}>3</Text>
      </View>
    </View>
  </View>
);

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
      <Item name={item.name} isi={item.isi} waktu={item.waktu} />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={AppStyles.viewHeader}>
        <Text style={AppStyles.textHeader}>WhatsApp</Text>
        <Icon name="search" size={20} style={AppStyles.iconHeader}/>
        <Icon name="bars" size={20} style={AppStyles.iconHeader}/>
      </View>
      <View style={AppStyles.viewTab}>
      <Icon name="camera" size={20} style={AppStyles.iconTab}/>
        <Text style={AppStyles.textTabActive}>CHATS</Text>
        <Text style={AppStyles.textTab}>STATUS</Text>
        <Text style={AppStyles.textTab}>CALLS</Text>
      </View>
      <View style={AppStyles.baseChat}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default HomeScreen;
