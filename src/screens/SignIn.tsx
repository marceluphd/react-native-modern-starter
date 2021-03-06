import React from 'react';
import {Content, Container, Form, Item, Input, Icon, Button} from 'native-base';
import {TextInputStyles} from '../styles/TextInputStyles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../router/Navigation';
import {CommonActions} from '@react-navigation/native';
import Typography from '../components/Typography';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
};

const reset = CommonActions.reset({
  index: 0,
  routes: [{name: 'Home'}],
});

const SignIn: React.FC<Props> = ({navigation}) => {
  const handleLogIn = () => {
    navigation.dispatch(reset);
  };

  return (
    <Container>
      <Content padder>
        <Form>
          <Item regular style={TextInputStyles.input}>
            <Input placeholder="Email" keyboardType="email-address" />
          </Item>
          <Item regular style={TextInputStyles.input}>
            <Input placeholder="Password" secureTextEntry={true} />
            <Icon active name="eye-off" type="Feather" />
          </Item>
          <Button full onPress={handleLogIn}>
            <Typography>Log in</Typography>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
