
let users = [{fullname:"jivfdjknvek",username:"brestisres",password:"brestisres",nroCuenta:"213546416",identity:5165468,rol:true,fecha:'10/10/2022',Saldo:4000000}]
export default class User{
    
    constructor(fullname,username,password,nroCuenta,identity,rol,fecha,Saldo){
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.nroCuenta = nroCuenta;
        this.identity = identity;
        this.rol = rol;
        this.fecha = fecha;
        this.Saldo = Saldo;

    }

    registrar(User){
        users.push(User)
        console.log('usuario registrado')
    }

    lista(){
        return users;
    }
}