import{firebase,googleauthProvider} from '../Firebase/firebase'

export const startLogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleauthProvider)
    }
}

export const login=(uid)=>({
    type:'LOGIN',
    uid
})

export const startLogout=()=>{
    return ()=>{
        return firebase.auth().signOut()
    }
}

export const logout=()=>({
    type:'LOGOUT'
})