import React from 'react';
import { Route } from "react-router-dom";

import Charts from './components/Charts';
import Home from './components/Home';
import TablaCripto from './components/TablaCripto';
import SpecificChart from './components/SpecificChart'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/my-cripto-app/' component={Home} />
      <Route path='/my-cripto-app/Home' component={TablaCripto} />
      <Route path='/my-cripto-app/Charts' component={Charts} />
      <Route path='/my-cripto-app/Chart' component={SpecificChart} />
    </React.Fragment>
  );
}

export default App;
