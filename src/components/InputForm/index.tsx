

import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container } from './styles';
import { Control, Controller } from 'react-hook-form'

interface Props extends TextInputProps {
  control: Control;
  name: string;

}

export function InputForm({control, name,...rest}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input 
          onChangeText={onChange}
          value={value}
          {...rest}/>
        )}
        name={name}
        />
    </Container>
  );
}
