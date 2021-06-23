import React from 'react';
import { Image} from 'react-native';
import { styles } from './styles'


export function GuildIcon() {
    const uri = 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/csgo_squircle-512.png';

    return (
        <Image 
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
        />

    )
}