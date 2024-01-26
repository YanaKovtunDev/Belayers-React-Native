import { FIRESTORE_DB } from '../FirebaseConfig';
import { doc, setDoc, getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { User } from '../types/user';

export async function saveUserDataToFirestore(userData: User) {
  try {
    const userDocRef = doc(FIRESTORE_DB, 'users', userData.email);
    await setDoc(userDocRef, userData, { merge: true });
    console.log('User data saved to Firestore successfully');
  } catch (error) {
    console.error('Error saving user data to Firestore', error);
  }
}

type fieldType = 'phoneNumber' | 'email';
export const getUserDataFromDB = async (value: string, field: fieldType = 'email') => {
  try {
    const db = getFirestore();
    const usersCollection = collection(db, 'users');
    const usersQuery = query(usersCollection, where(field, '==', value));

    const querySnapshot = await getDocs(usersQuery);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching user by ${field}:`, error);
    throw error;
  }
};
