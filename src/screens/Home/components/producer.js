import React, { useMemo, useReducer, useState } from "react";
import { Image,Text,StyleSheet,View,TouchableOpacity } from "react-native";
import Stars from "../../../components/stars";

export default function Producer({name,image,distance,stars}){
    const [selected,reverse] = useReducer(
        (selected)=> !selected,
        false
    ) ;
    const distanceInMeters = () => {return `${distance}m`};
    const distanceMetersText = useMemo(() => distanceInMeters(), [distance]);
    return  <TouchableOpacity 
            onPress={reverse}
            style={styles.card}>
                <Image source={image} style={styles.image} />
                <View style={styles.infos}>
                    <View>
                        <Text style={styles.name}>{ name }</Text>
                        <Stars quantity={stars} edit={selected} big={selected} />
                    </View>
                    <Text style={styles.distance}>{ distanceMetersText }</Text>
                </View>                
            </TouchableOpacity>
}
const styles = StyleSheet.create({
    card:{
        flexDirection: "row",
        backgroundColor:'#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:6,
        elevation:4,
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.62
    },
    image:{
        width:48,
        height:48,
        borderRadius:6,
        marginVertical: 16,
        marginLeft:16,
    },
    infos:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:8,
        marginVertical:16,
        marginRight: 16
    },
    name:{
        fontSize:14,
        lineHeight:22,
        fontWeight:'bold',
        color:"black"
    },
    distance:{
        color:"black",
        fontSize:12,
        lineHeight:19
    }

});