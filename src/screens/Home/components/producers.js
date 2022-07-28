import React,{ useEffect,useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Producer from "./producer";
import useProducers from "../../../components/hooks";

export default function Producers({top:Top}){
    const [title,list] = useProducers();

    const TopList= () =>{ 
        return  <>
        <Top />
        <Text style = {styles.title}>{ title }</Text>
        </>
    }
    return <FlatList
                data={list}
                renderItem={({ item })=> <Producer {...item} />}
                keyExtractor= {({ name }) => name}
                ListHeaderComponent= {TopList}
                />



}
const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:20,
        lineHeight:32,
        marginHorizontal: 16,
        marginTop:16,
        color:'#464646'
    }
})