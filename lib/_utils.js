import { db } from "./_firebase.config";
import { collection, query, where, addDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"; 

export const getUser = async({ uid }) => {
    const docRef = doc(db, "users", uid);
    const user = await getDoc(docRef)
        .catch(err => {
            console.log(err);
        });
    console.log(user)
    return user.data();
}

export const getCourses = async() => {
    const q = query(collection(db, "courses"));
    const courses = await getDocs(q)
        .catch(err => {
            console.log(err);
        });
    console.log(courses)
    courses.forEach(doc=>{
        console.log(doc.data())
    })
    return courses;
}

// Add a new document with a generated id.
export const signup = async({uid, email, lang, classes}) => {
    const docRef = await addDoc(collection(db, `users/${uid}`), {
        score:0,
        email,
        firstName,
        lastName
    }).catch(err=>{
        console.log(err);
    });
    console.log(docRef);
};

// Add a new document with a generated id.
export const updateUser = async({ major, minor, discordTag }) => {
    const userRef = doc(db, "users", uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {major,minor, discordTag})
        .catch(err => console.log(err));
    console.log(userRef);
};

export const getUsersByClassName = (className) => {
    const q = query(collection(db, "users"), where("classes", "array-contains", className));
    const users = await getDocs(q)
        .catch(err => {
            console.log(err);
        });
    users.forEach(doc=>{
        console.log(doc.data())
    })
    return users;
};

export const sendMessage = () => {

}
export const retrieveMessage = () => {

}