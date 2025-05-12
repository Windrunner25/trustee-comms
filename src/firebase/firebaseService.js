import db from "./init.js";
import { collection, addDoc } from "firebase/firestore";

export async function addMessage(messageData) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      ...messageData,
    });
    console.log("Message successfully added: ", docRef.id);
  } catch (e) {
    console.error("Error adding message: ", e);
  }
}

export async function addRecipient(email) {
    try {
      const docRef = await addDoc(collection(db, "recipients"), {
        email: email,
      });
      console.log("Recipient successfully added: ", docRef.id);
    } catch (e) {
      console.error("Error adding recipient: ", e);
    }
  }
