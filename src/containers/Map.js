import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AutoComplete from 'react-native-autocomplete-input';
import MapView, {
  Marker,
  Callout,
} from 'react-native-maps';

import connect from '../redux/connect';
import { getRandomLatLon } from '../lib/geo';

/**
 * This class represents the Map component
 * 
 * @author Temitayo Fadojutimi
 * @class Map
 * @extends {PureComponent}
 */
class Map extends PureComponent {
  /**
   * Creates an instance of Map.
   * 
   * @author Temitayo Fadojutimi
   * @param {object} props 
   * @memberof Map
   */
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      users: [],
      showMarker: false,
      coordinate: {},
      location: {},
    }
  }

  /**
   * The lifecycle method when the component has mounted.
   * 
   * @author Temitayo Fadojutimi
   * @memberof Map
   */
  componentDidMount() {
    this.props.actions.getUsers();
  }
 
  /**
   * The lifecycle method when the props changes
   * 
   * @author Temitayo Fadojutimi
   * @param {any} nextProps 
   * @memberof Map
   */
  componentWillReceiveProps(nextProps) {
    if(this.props.users !== nextProps.users){
      const newUsers = nextProps.users.map(user => {
        user.fullName = `${user.name.first} ${user.name.last}`;
        return user;
      });
      this.setState({
        users: newUsers
      });
    }

    if(this.props.location !== nextProps.user) {
      this.setState({
        location: nextProps.location,
      })
    }
  }

  /**
   * This method is called when the onChange event
   * on the AutoComplete component is fired
   * 
   * @memberof Map
   */
  onChangeText = (text) => {
    const state = {
      query: text,
    }

    if(text.length === 0){
      state.showMarker = false;
    }

    this.setState(state);
  }

  /**
   * This method is fired when a user selects an item from the AutoComplete list
   * 
   * @memberof Map
   */
  handleSelectItem = (person) => {
    const coordinate = this.getRandomLatLong();

    this.props.actions.getLocation(coordinate)
    this.setState({
      query: person.fullName,
      showMarker: true,
      coordinate,
      person
    })
  }

  /**
   * This component renders a custom text input for the AutoComplete component
   * 
   * @memberof Map
   */
  renderTextInput = (props) => {
    return (
      <TextInput
        style={styles.inputContainerStyle}
        placeholder="Type to search for a user"
        onChangeText={this.onChangeText}
        underlineColorAndroid='transparent'
        {...props}
      />
    )
  }

  /**
   * This method searches for a user as the user types
   * 
   * @author Temitayo Fadojutimi
   * @param {string} query 
   * @returns {object} A list of fullNames that matches the query
   * @memberof Map
   */
  findPerson(query) {
    if (query.length < 2) {
      return [];
    }

    const { users } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return users.filter(user =>
      user.fullName.search(regex) >= 0
    );
  }

  /**
   * This method generates a random latitude and longitude
   * 
   * @memberof Map
   */
  getRandomLatLong = () => 
    getRandomLatLon({
      latitude: 51.5074,
      longitude: -0.1278
    }, 10000);

  /**
   * This method renders the Map JSX
   * 
   * @author Temitayo Fadojutimi
   * @returns {JSX} JSX
   * @memberof Map
   */
  render() {
    const {
      person,
      query,
      showMarker,
      coordinate,
      location,
    } = this.state;

    const people = this.findPerson(query);

    const compare = (first, second) => first.toLowerCase().trim() === second.toLowerCase().trim();

    const latLong = this.getRandomLatLong();

    return (
      <View style={styles.container}>
        <View style={styles.autocompleteContainer}>
          <AutoComplete
            autoCapitalize="none"
            autoCorrect={false}
            listStyle={styles.listStyle}
            containerStyle={styles.containerStyle}
            data={people.length === 1 && compare(query, people[0].fullName) ? [] : people}
            defaultValue={query}
            onChangeText={this.onChangeText}
            renderTextInput={this.renderTextInput}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => this.handleSelectItem(item)}
                style={styles.listItemStyle}
              >
                <Text>{item.fullName}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          style={styles.map}
          region={{
            latitude: latLong.latitude,
            longitude: latLong.longitude,
            longitudeDelta: 0.9,
            latitudeDelta: 0.5,
          }}
        >
          {showMarker && (
            <Marker
              coordinate={{...coordinate}}
              title={person.fullName}
              description={person.phone}
            >
              <Callout>
                <View style={{
                  flex: 1,
                  flexDirection: 'row'
                }}>
                  <Image
                    style={styles.calloutImage}
                    source={{ uri: person.picture.thumbnail }}
                  />
                  <View style={{
                      flex: 1,
                  }}>
                    <Text style={{ fontWeight: '900' }}>{person.fullName} (@{person.username})</Text>
                    <Text>{person.phone}</Text>
                    <Text>{person.email}</Text>
                    <Text style={{ marginTop: 30 }}>{location.city}, {location.state}</Text>
                  </View>
                </View>
              </Callout>
            </Marker>
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
    marginTop: 20,
  },
  calloutImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  container: {
    flex: 1,
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  containerStyle: {
    margin: 5,
    zIndex: 2,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 10,
  },
  listItemStyle: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  listStyle: {
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.7)',
    maxHeight: 300,
    overflow: 'scroll'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    zIndex: 1,
  },
})

const mapState = (state) => ({
  users: state.user,
  location: state.location,
})

export default connect(mapState)(Map);
