import React from 'react';
import { Route } from "react-router-dom";

import Charts from './components/Charts';
import Home from './components/Home';
import CriptoTable from './components/CriptoTable';
import SpecificChart from './components/SpecificChart'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/my-crypto-app/' component={Home} />
      <Route path='/my-crypto-app/Home' component={CriptoTable} />
      <Route path='/my-crypto-app/Charts' component={Charts} />
      <Route path='/my-crypto-app/Chart' component={SpecificChart} />
    </React.Fragment>
  );
}

export default App;
