import { useState,useEffect } from "react";
import { loadProducers } from "../services/loadData";

export default function useProducers(){
    const [title,setTitle] = useState ('');
    const [list,setList] = useState ([]);
    useEffect(() =>{
        const r = loadProducers();
        setTitle(r.title);
        setList(r.list);
    },[]);
    return [title, list];
}