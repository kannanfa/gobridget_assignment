import React from 'react'

// Used to create a context base on user information
const UserContext = React.createContext({})

// Export the provider for user xontext
export const UserContextProvider = UserContext.Provider
export default UserContext