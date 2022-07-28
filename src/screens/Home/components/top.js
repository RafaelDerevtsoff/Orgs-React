import React from "react";
import { StyleSheet, Image,Text, View } from "react-native";
import Logo from '../../../../assets/logo.png';
import { loadTop,loadProducers } from "../../../services/loadData";

 class Top extends React.Component {
    state= {
        top:{
            greetings:'',
            subtitle:''
        }
    }
    atualizaTopo(){
        this.setState({top: loadTop()})
    }
    componentDidMount(){
        this.atualizaTopo()
    }
    render(){
    return <>
                <View style={styles.top}>
                    <Image source={Logo} style={styles.image}></Image>
                    <Text style={styles.greetings}>{this.state.top.greetings}</Text>
                    <Text style={styles.subtitle}>{this.state.top.subtitle}</Text>
                </View>
            </>
    }
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height:28
    },
    top:{
        backgroundColor:'#F6F6F6',
        padding:16,
    },
    greetings:{
        marginTop: 24,
        color: '#464646',
        fontSize: 26,
        lineHeight:42,
        fontWeight:'bold'
    },
    subtitle:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight:26
    }
});
export default Top;