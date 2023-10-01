
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const config = {
    apiKey: "AIzaSyDirjqbubzOhlxhBcpNYVcBrz9v7GUw_4s",
    authDomain: "bpp-shop-app.firebaseapp.com",
    projectId: "bpp-shop-app",
    storageBucket: "bpp-shop-app.appspot.com",
    messagingSenderId: "151442206751",
    appId: "1:151442206751:web:cc8594321516c5a5f6252a"
};

const app = initializeApp(config);
export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();