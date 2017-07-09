export class Rol {
    private roleName: string;

    constructor(){
      
    }

    setRoleName(_name : string): void {
         this.roleName = _name;
    }

    getRoleName():string{
        return this.roleName;
    }
}