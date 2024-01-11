import { FIRESTORE_DB } from '../FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

interface UserData {
  name: string;
  email: string;
  profilePicture: string;
}

export async function saveUserDataToFirestore(userData: UserData) {
  try {
    const userDocRef = doc(FIRESTORE_DB, 'users', userData.email);
    await setDoc(userDocRef, userData, { merge: true });
    console.log('User data saved to Firestore successfully');
  } catch (error) {
    console.error('Error saving user data to Firestore', error);
  }
}
