import AccountDetails from './AccountDetails'
import AccountUpdate from './AccountUpdate'
import React from 'react'

const AccountProfile = ({ account: { username, dateJoined, membershipLevel } }) => (
  <React.Fragment>
    <AccountDetails username={username} dateJoined={dateJoined} membershipLevel={membershipLevel} />
    <AccountUpdate username={username} membershipLevel={membershipLevel} />
  </React.Fragment>
)
export default AccountProfile