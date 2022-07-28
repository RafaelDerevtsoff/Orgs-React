import React from "react";
import Top from './components/top'
import Producers from "./components/producers";

export default function Home(){
    return<>
        <Producers top = {Top}/>
    </>
}