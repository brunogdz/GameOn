import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles'
import { ScrollView } from 'react-native'
import { theme } from '../../global/styles/theme';

export function CategorySelect() {
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                
            }
        </ScrollView>
    )
}