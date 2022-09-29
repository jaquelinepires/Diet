import { Container, Title } from './styles';
import { Button } from '../Button';
import { ButtonComponentTypeProps } from '../../@types/button';



type Props = ButtonComponentTypeProps & {
    contentTitle: string;
}

const ContentButton = ({ contentTitle, title, icon }: Props) => {
    return(
        <Container>
            <Title>
                {contentTitle}
            </Title>
            <Button
                title={title}
                icon={icon}
            />
        </Container>
    )
}

export default ContentButton;
