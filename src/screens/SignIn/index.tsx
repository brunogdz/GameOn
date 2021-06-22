import React from 'react';
import { 
  View, 
  Text, 
  Image,  
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn(){
    return(
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
            activeOpacity={0.7}
          />                
                 
        </View>
      </View>
    );
  }