// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme
import firebase from "./firebase";
import {  getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useEffect, useState } from "react";

export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef = ref(db,"baglanti")
    const newUserRef = push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
}

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList, setContactList]=useState();
    useEffect(()=>{
        setIsLoading(true)

        const db = getDatabase();
        const userRef = ref(db,"baglanti");

        onValue(userRef,(snapshot)=>{
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id,...data[id]})
            }
            setContactList(baglantiArray);
            setIsLoading(false);
        })

    }, [])
    return{isLoading, contactList}
}

export const DeleteUser = (id)=>{
    const db = getDatabase();
    const userRef = ref(db,"baglanti");

    remove(ref(db,"baglanti/"+id))
}