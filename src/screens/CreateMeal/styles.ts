
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const CreateMealContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const CreateMealContent = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`


export const Form = styled.View`
  width: 100%;
  padding: 24px;
  `;

export const Label = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;
  `;

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 24px;

`
export const InputGroupDate = styled.View`
  flex-direction: row;

`

export const ContainerButton = styled.View`
  flex-direction: row;



`

