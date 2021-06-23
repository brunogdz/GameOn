import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
type Props = RectButtonProps;

export function ButtonAdd({ ...res }: Props) {
    return (
        <RectButton
            style={styles.container}
            {...res}
        >
            <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>

    )
}