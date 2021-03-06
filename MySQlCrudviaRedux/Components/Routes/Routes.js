import React, {Component, Text} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MysqlCrude from '../Scenes/MySQLCRUD';
import UpdateScreen from '../Scenes/UpdateScreen';
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="CRUD"
            component={MysqlCrude}
            title="MySQL CRUD"
            type="refresh"
            initial
          />

          <Scene
            key="UpdateScreen"
            component={UpdateScreen}
            title="UpdateScreen"
          />
        </Scene>
      </Router>
    );
  }
}
