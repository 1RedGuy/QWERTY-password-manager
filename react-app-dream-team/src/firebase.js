import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDsEm5eMPpLNen_sgt-xv6uctjarfgVwDQ",
    authDomain: "qwerty-c00b4.firebaseapp.com",
    projectId: "qwerty-c00b4",
    storageBucket: "qwerty-c00b4.appspot.com",
    messagingSenderId: "381327451148",
    appId: "1:381327451148:web:d1ca0696d65e8082ebfa29",
    measurementId: "G-ZGZK75TCPN"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
