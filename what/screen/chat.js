import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  TextInput,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppStyles from './../AppStyles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ChatScreen = ({navigation}) => {
  const [value, onChangeText] = React.useState('');

  return (
    <>
      <ImageBackground
        source={require('./../assets/back.png')}
        style={AppStyles.backgroundImage}>
        <View style={AppStyles.viewHeader}>
          <TouchableOpacity style={{width:30,height:100,justifyContent:'center'}} onPress={() => navigation.navigate('Home')}>
            <Icon
              name="arrow-left"
              size={20}
              style={AppStyles.iconHeaderChat}
            />
          </TouchableOpacity>
          <Image
            style={AppStyles.image}
            source={require('./../assets/tony.jpg')}
          />
          <View style={AppStyles.viewProfileCenter}>
            <Text style={AppStyles.textName}>Tony Stark</Text>
            <Text style={AppStyles.status}>Online</Text>
          </View>
          <View style={AppStyles.viewIconRight}>
            <Icon name="phone" size={20} style={AppStyles.iconHeaderChat} />
            <Icon name="bars" size={20} style={AppStyles.iconHeaderChat} />
          </View>
        </View>
        <View style={AppStyles.isiChat}>
          <View style={AppStyles.kotakChat}>
            <Text style={AppStyles.isiKotakChat}>Apa Kabar ?</Text>
          </View>
        </View>
        <View style={AppStyles.inputArea}>
          <View style={AppStyles.inputBar}>
            <TextInput
              style={AppStyles.textInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
          </View>
          <Icon name="paper-plane" size={30} style={AppStyles.iconHeaderChat} />
        </View>
      </ImageBackground>
    </>
  );
};

export default ChatScreen;
