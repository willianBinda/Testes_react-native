import Realm from "realm";
import TaskSchema from "./Tasck";

const getRealm = async ()=>{
    try{
        const app = new Realm.App({id:"179.124.144.22"})
        const credentials = Realm.Credentials.emailPassword("willianbinda122@gmail.com", "@ThebigBinda122#")
        // Realm.credentials.   aqui ele mostra quais as credenciais que deseja usar ou seja (facebook,email/senha,google) "permissoes"
        const User = await app.logIn(credentials)
    
        return await Realm.open({
            path:"Sensor",    //aqui vai o nome do documento nao do schema do atlas
            schema:[TaskSchema],
            sync:{user:User,partitionValue:"Willian Binda",flexible:false}
        })

    }catch(e){
        console.log('errro')
    }
}    
export default getRealm

// const app = new Realm.App({id:"application-0-ibsji"})