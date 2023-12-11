import APIKEYS from '../constants/api'

const useAuth = () => {
    // Validate User Input For Login
    return {
        isValidUser: ({email, password}) => {
            return fetch(`${APIKEYS.base_url}login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email, password
                }),
              });
        }
    }
}

export default useAuth