import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; // firebase/auth

const config = {
    apiKey: "AIzaSyAFY6xyJADL8voknsPkFAssnXj_alsCCYY",
    authDomain: "crwn-db-65f8d.firebaseapp.com",
    projectId: "crwn-db-65f8d",
    storageBucket: "crwn-db-65f8d.appspot.com",
    messagingSenderId: "789392842564",
    appId: "1:789392842564:web:3547c2c809317e38ae4111",
    measurementId: "G-VE9LQ6EJVM"
}; 
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // console.log(snapshot);
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log("Error creating user", error.message);
        }
    }
    return userRef;
}

export const getUserCartRef = async userId => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const snapShot = await cartsRef.get();

    if (snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc();

        // Set a new document in carts collection.
        await cartDocRef.set({ userId, cartItems: [] });
        return cartDocRef;
    } else {
        return snapShot.docs[0].ref;
    }
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return transformedCollection.reduce((accu, collection) => {
        accu[collection.title.toLowerCase()] = collection;
        return accu;
    }, {})
}

// FOR CHECK USER SESSION
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
}

// FOR SIGN IN
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;