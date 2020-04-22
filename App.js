import React from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Navigator from "./Stack";
import { AppLoading } from "expo";
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import rootSaga from './sagas/sagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Serif: require("./assets/fonts/Serif.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
    console.disableYellowBox = true;
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return(
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);
