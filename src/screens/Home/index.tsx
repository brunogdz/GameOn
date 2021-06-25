import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListHeader } from '../../components/ListHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { Background } from '../../components/Background';
export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Igreja Team',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/07 às 20:30h',
            description: 'Só vai ter galera girando e chorando pra hacker'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Igreja Team',
                icon: null,
                owner: false,
            },
            category: '1',
            date: '22/07 às 20:30h',
            description: 'Só vai ter galera girando e chorando pra hacker'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Endurance',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/07 às 20:30h',
            description: 'Só vai ter galera girando e chorando pra hacker'
        }
    ]

    // aqui é para fazer marcação e desmacação
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)

    }
    // FlatList é uma ótima escolha, pois renderiza n elementos, porém
    // dando vantagem aos que estão na tela sendo carregaods primeiro
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    );
}