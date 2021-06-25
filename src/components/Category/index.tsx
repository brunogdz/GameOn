import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles'
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {
    const { secondary40, secondary50, secondary80, secondary100, secondary85 } = theme.colors;
    return (

        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary80, secondary100]}
            >
                <LinearGradient
                    style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
                    colors={[checked ? secondary85 : secondary50, secondary40]}
                >
                    {
                        hasCheckBox &&
                        <View style={
                            checked ? styles.checked : styles.check}
                        />
                    }


                    <Icon
                        width={48}
                        height={48}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}