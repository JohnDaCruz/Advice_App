import { Text, View, TouchableOpacity, Share, Vibration, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react'
import styles from './style';

export default function Main() {

    const [count, setCount] = useState(1) // MAX = 225
    const [api, setApi] = useState("Conselhos...")

    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice/${count}`)
            .then((res) => res.json())
            .then((data) => {
                setApi(data.slip.advice)
                console.log(data.slip.id, data.slip.advice)
            })
    }, [count])

    function btnShare() {
        Vibration.vibrate(100)
        Share.share({
            message: `Um conselho pra ti:  ${api}`
        })
    }

    function tratErroMax() {
        if (count == 224) {
            setCount(224)
            Vibration.vibrate(200)

        } else {
            setCount((prevState) => prevState + 1)
        }
    }

    function tratErroMin() {
        if (count == 1) {
            setCount(1);
            Vibration.vibrate(200)
        } else {
            setCount((prevState) => prevState - 1);
        }
    }

    return (
        <View style={styles.containerBtns}>

            <Text style={styles.textApi}>{api}</Text>

            <TouchableOpacity style={styles.btn} onPress={tratErroMax}
            >
                <Text style={styles.btnText}> Pass </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={tratErroMin}
            >
                <Text style={styles.btnText}> Back </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnShare}>
                <Text onPress={btnShare} style={styles.btnTextShare}>Share</Text>
            </TouchableOpacity>
        </View>
    )
}