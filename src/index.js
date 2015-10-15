import React from "react";
import { Provider } from "react-redux";
import App from "./containers/App";
import configureStore from "./store/configureStore";

// import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from "redux-devtools/lib/react";

const store = configureStore();

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById("root")
);
