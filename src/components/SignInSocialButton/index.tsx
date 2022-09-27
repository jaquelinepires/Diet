import { AppleLogo } from "phosphor-react-native";
import React from "react";
import { TouchableOpacityProps } from 'react-native'
import { SvgProps } from "react-native-svg";
import { 
  Button,
  ImageContainer,
  Text,
  Icon
} from './styles'

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}
export function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: Props) {
  return (
    <Button {...rest} >
      <ImageContainer>
        {/* <Svg /> */}
   </ImageContainer>
   <Text>
     {title}
   </Text>
    </Button>
  )
}