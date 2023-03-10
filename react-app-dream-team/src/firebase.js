import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import env from "react-dotenv";
const firebaseConfig = {
apiKey:env.REACT_APP_apiKey,
AuthDomain:env.React_authDomain, 
projectId:env.React_projectId,
storageBucket:env.React_storageBucket,
messagingSenderId:env.React_messagingSenderId,
appId:env.React_appId,
measurementId:env.React_measurementId

};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
