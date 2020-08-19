import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons'

import List from '../../components/List/index';
import ButtonPlus from '../../components/ButtonPlus/';
import Logo from '../../assets/images/logo.png';

import styles from './styles';




export default function Home(){

    const [list, Setlist] = useState([
        {key: 1, list: 'Festa de aniversário'},
        {key: 2, list: 'Compras do mês'},
        {key: 3, list: 'Tabalho escolar do João'}
    ]);
    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImg}/>
            <Text style={styles.title}>Minhas listas</Text>
            
            <FlatList
                style={{marginTop: 20}}
                showsHorizontalScrollIndicator={false}
                data={list}
                keyExtractor={ (item) => String(item.key) }
                renderItem={ ({ item }) => <List data={item} /> }
            />
            <ButtonPlus/>
            
        </View>
    )
}