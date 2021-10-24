import { BrowserRouter, Switch } from 'react-router-dom'

import { GlobalStyles } from "./styles/GlobalStyles";
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
