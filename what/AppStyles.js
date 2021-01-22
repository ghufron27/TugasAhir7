import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#075E54',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 25,
    color: 'white',
    padding: 10,
    flex: 1,
  },
  viewTab: {
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#075E54',
    justifyContent: 'center',
  },
  textTab: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
  },
  iconHeader: {
    marginLeft: 10,
    flex: 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  iconHeaderChat: {
    flex: 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    marginLeft: 10,
  },
  iconHeaderRight: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  iconTab: {
    flex: 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
  },
  textTabActive: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  baseChat: {
    backgroundColor: 'white',
    flex: 1,
  },
  chatCard: {
    height: 80,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderColor: 'red',
    alignSelf: 'center',
    margin: 10,
  },
  viewChatArea: {
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textChatName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textChatContent: {
    color: 'grey',
    fontSize: 15,
  },
  viewTimeArea: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textTime: {
    color: '#25D366',
  },
  badge: {
    width: 25,
    height: 25,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderColor: 'red',
    alignSelf: 'center',
    backgroundColor: '#25D366',
  },
  textBadge: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  textName: {
    color: 'white',
    fontSize: 20,
  },
  status: {
    color: 'white',
  },
  inputArea: {
    height: 60,
    flexDirection: 'row',
  },
  isiChat: {
    flex: 1,
  },
  inputBar: {
    flex: 1,
    margin: 10,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'grey',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  textInput: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 40,
    borderColor: 'gray',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  btnKirim: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  kotakChat: {
    borderRadius: 100,
  },
  isiKotakChat: {
    backgroundColor: 'white',
    width: 200,
    margin: 10,
    fontSize: 20,
  },
  waktuChat: {
    textAlign: 'right',
  },
  viewIconRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight:10,
  },
  viewProfileCenter: {
    flex: 1,
  },
});
