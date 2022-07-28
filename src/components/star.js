import React from "react";
import { TouchableOpacity, Image,StyleSheet } from "react-native";
import GoldenStar from '../../assets/estrela.png'
import BlackStar from '../../assets/estrelaCinza.png'


export default function Star({onPress,
     disabled = true ,
     fulfilled,
     big =false}){
    const styles = stylesFunction(big);
    const getImage= () =>{
        if(fulfilled){
            return GoldenStar;
        }
            return BlackStar;
    }
    return <TouchableOpacity
                onPress= {onPress}
                disabled={!disabled}
            >
                <Image source={getImage()} style={styles.star}/>
            </TouchableOpacity>
}

const stylesFunction= (big) => StyleSheet.create({
    star:{
        width:big ? 36 : 12,
        height:big ? 36 : 12,
        marginRight:2
    },
})