import { db } from "./_firebase.config";
import {
  collection,
  query,
  where,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  getDocFromCache,
} from "firebase/firestore";

export const getUser = async ({ uid }) => {
  const docRef = doc(db, "users", uid);
  const user = await getDocFromCache(docRef).catch((err) => {
    console.log(err);
  });
  console.log(user);
  return user.data();
};

export const getCourses = async () => {
  const q = query(collection(db, "courses"));
  const courses = await getDocs(q).catch((err) => {
    console.log(err);
  });
  return courses;
};

// Add a new document with a generated id.
export const signup = async ({ uid, email, lang, classes }) => {
  const docRef = await addDoc(collection(db, `users/${uid}`), {
    score: 0,
    email,
    firstName,
    lastName,
  }).catch((err) => {
    console.log(err);
  });
  console.log(docRef);
};

// Add a new document with a generated id.
export const updateUser = async ({ major, minor, discordTag }) => {
  const userRef = doc(db, "users", uid);

  // Set the "capital" field of the city 'DC'
  await updateDoc(userRef, { major, minor, discordTag }).catch((err) =>
    console.log(err)
  );
  console.log(userRef);
};

export const getUsersByClassName = async (className) => {
  let result = [];
  const q = query(collection(db, "users"));
  const users = await getDocs(q).catch((err) => {
    console.log(err);
  });
  users.forEach((user) => {
    for (var i = 0; i < user.data().classes.length; i++) {
      if (user.data().classes[i].code === className) {
        result.push({ ...user.data(), id: user.id });
      }
    }
  });

  return result;
};

export const getAllUsers = async () => {
  let result = [];
  const q = query(collection(db, "users"));
  const users = await getDocs(q).catch((err) => {
    console.log(err);
  });
  users.forEach((user) => {
    for (var i = 0; i < user.data().classes.length; i++) {
      result.push({ ...user.data(), id: user.id });
    }
  });

  return result;
};

export const sendMessage = () => {};
export const retrieveMessage = () => {};
