import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Star from "./star";

export default function Stars({quantity:oldQuantity,edit = false, big= false}){
    const [quantity,setQuantity] =  useState(oldQuantity);

    const RenderStars= () => {
        const starList=[];
        for(let i = 0;i < 5;i++){
            starList.push(<Star 
                            key={i}
                            onPress={() => setQuantity(i+1)}
                            disabled = {edit}
                            fulfilled = {i < quantity}
                            big = {big}
                        />);
        }
        return starList;
    }
    return <View style={styles.stars}>
                <RenderStars/>
            </View>
}

const styles =  StyleSheet.create({
    stars:{
        flexDirection:'row',
    }
});