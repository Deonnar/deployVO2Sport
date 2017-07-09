export class User {
    userId: number;
    name: string;
    surname: string;
    address: string;
    email: string;
    phone: string;
    active: boolean;
    userAuthId:string;
    userName: string;
    password: string;
    role: string;

    constructor(){ }

    setId(_userId : number){
        this.userId = _userId;
    }
    
    getId():number{
        return this.userId
    }

    setName(_name: string){
        this.name = _name;
    }

    getName(){
        return this.name;
    }

    setSurname(_surname : string) {
        this.surname = _surname;
    }

    getSurname() {
        return this.surname;
    }

    setAddress(_address : string) {
        this.address = _address;
    }

    getAddress() {
        return this.address;
    }

    setEmail(_email : string) {
        this.email = _email;
    }

    getEmail() {
        return this.email;
    }

    setPhone(_phone : string) {
        this.phone = _phone;
    }

    getPhone() {
        return this.phone;
    }

    setActive(_active : boolean) {
        this.active = _active;
    }

    getActive() {
        return this.active;
    }

    setUserAuth(_userAuthId:string) {
        this.userAuthId =_userAuthId;
    }

    getUserAuth() {
        return this.userAuthId;
    }

    setUserName(_userName : string){
        this.userName = _userName;
    }
    
    getUserName() : string{
        return this.userName
    }

    setPassword(_password : string){
        this.password = _password;
    }

    getPassword() {
        return this.password;
    }

    setRole(_role : string) {
        this.role = _role;
    }

    getRole() {
        return this.role;
    }
}