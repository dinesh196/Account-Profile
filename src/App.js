import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import NavigationBar from './component/navigationBar/NavigationBar'
import AccountProfile from './container/accountprofile'
const account = {
  username: 'Crunchy Crunch',
  dateJoined: '9/1/18',
  membershipLevel: 'Silver'
}

function App() {
  return (
    <Router>
    <React.Fragment>
      <NavigationBar username={account.username} />
      {/* <NavigationBar/> */}
      <Switch>
        <Route 
          exact path="/" 
          render={() => <div>Home</div>}
        />
        <Route 
          exact path = "/account/profile" 
          render={() => <AccountProfile account={account} />} 
        />
      </Switch>
    </React.Fragment>
  </Router>
  );
}

export default App;
