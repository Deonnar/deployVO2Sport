export class Login {
    
    userName: string;
    password: string;
    role: string;
    token : string;

    constructor(){
     
    }

    setUserName(_userName : string) {
        this.userName = _userName;
    }

    getUserName() : string {
        return this.userName;
    }

    setUserPassword(_password: string) {
        this.password = _password;
    }

    getPassword() : string {
        return this.password;
    }

     setToken(_token: string) {
        this.token = _token;
    }

    getToken() : string {
        return this.token;
    }
     setRole(_role : string) {
        this.role = _role;
    }

    getRole() {
        return this.role;
    }
}