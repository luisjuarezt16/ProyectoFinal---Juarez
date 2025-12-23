import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDO5cWfbKRECWbF9BMUasQY5bU8BiFmBgs",
  authDomain: "forklift-services-proyect.firebaseapp.com",
  projectId: "forklift-services-proyect",
  storageBucket: "forklift-services-proyect.firebasestorage.app",
  messagingSenderId: "267434662648",
  appId: "1:267434662648:web:69f22b045b4df4c9c0f90d"
}

    
const app = initializeApp(firebaseConfig)


export const db = getFirestore(app)
