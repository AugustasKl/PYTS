import React from 'react';

import Layout from './components/Layout/Layout';
import CheckOutpage from './pages/CheckOutpage';

const App:React.FC=()=> {
  return (
    <div className="App">
      <Layout>
      <CheckOutpage/>
      </Layout>
    </div>
  );
}

export default App;
