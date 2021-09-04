import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFrameWork = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    };
}

export const handleGoogleSignIn = () => {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(providerGoogle)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return signedUser
        })
        .catch(err => console.error(err))
}



export const handleSignOut = () => {
    return firebase.auth().signOut().then(() => {
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: ''
        }
        return signedOutUser;
    }).catch((error) => {
    });
}



export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const userInfo = userCredential.user;
            userInfo.error = '';
            userInfo.success = true;
            updateUserInfo(name);
            return userInfo;
        })
        .catch(error => {
            const userInfo = {}
            userInfo.error = error.message;
            userInfo.success = false;
            console.log(userInfo.error);
            return userInfo
        });
}


export const siginUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const userInfo = userCredential.user;
            userInfo.error = '';
            userInfo.success = true;
            return userInfo
            // ...
        })
        .catch((error) => {
            const userInfo = {}
            userInfo.error = error.message;
            userInfo.success = false;
            console.log(userInfo.error);
            return userInfo;
        });
}


const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    })
        .then(res => {
            console.log('User updated');
        })
        .catch(error => {
        
            console.log(error);
        });
}