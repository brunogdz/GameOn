import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
export function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <View>
                <CategorySelect/>
            </View>
        </View>
    );
}