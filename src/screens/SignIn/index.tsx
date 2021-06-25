import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }


  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Organize {`\n`}
            suas jogatinas {`\n`}
            facilmente
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos {`\n`}
            sem desculpas agora rs
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
          />

        </View>
      </View>
    </Background>

  );
}