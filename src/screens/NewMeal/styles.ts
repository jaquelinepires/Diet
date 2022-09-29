
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
  padding: 40px 24px;

  `;

export const Label = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;
  `;

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 24px;

`
export const InputGroupContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;

`
export const InputGroupContent = styled.View`

`;

export const ButtonTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;

`

