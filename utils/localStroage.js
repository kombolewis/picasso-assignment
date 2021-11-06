export const verifyUserAuthentication = () => {
    const register = localStorage.getItem('register');
    if (register) { 
        return true; 
    } else {
        return true;
    }
}
