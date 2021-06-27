import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';

import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import { styles } from './styles'
import BannerImg from '../../assets/banner2.png';
export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/brunogomes98.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Bruno Gomes',
            avatar_url: 'https://github.com/brunogomes98.png',
            status: 'offline'
        }
    ]

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
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        Um herói não precisa falar. Quando ele se for, o mundo falará por ele.
                    </Text>
                </View>

            </ImageBackground>

            <ListHeader title="Jogadores"
            subtitle="3"/>

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />
        </Background>
    );
}
