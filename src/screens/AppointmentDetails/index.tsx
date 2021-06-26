import React from 'react';
import {ImageBackground, Text} from 'react-native';
import { Fontisto} from '@expo/vector-icons'
import {BorderlessButton} from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import {styles} from './styles'
import BannerImg from '../../assets/banner2.png';
export function AppointmentDetails() {
    return (
        <Background>
            <Header 
            title="Detalhes"
            action={
                <BorderlessButton>
                    <Fontisto 
                        name="share"
                        size={24}
                        color={theme.colors.primary}
                    />
                </BorderlessButton>
            }
            />

            <ImageBackground 
            source={BannerImg}
            style={styles.banner}
            >

            </ImageBackground>
        </Background>
    );
}
