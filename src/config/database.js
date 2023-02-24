import { getFirestore } from "firebase/firestore";
import auth from "./firebase";

const db = getFirestore(auth.app);

export default db