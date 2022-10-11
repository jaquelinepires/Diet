import * as S from './styles';

type Props = S.ModalTypeStyleProps & {
    isVisible: boolean;
    title: string;
    subtitle: string;
    buttonTitle: string;
    buttonTitleTwo?: string;
    onFunction: () => void;
    onFunctionTwo?: () => void;
}

const Modal = ({
    isVisible, title, subtitle, numberOfButtons, type, typeTwo,
    buttonTitle, buttonTitleTwo, onFunction, onFunctionTwo
}: Props) => {
    return(
        <>
            { isVisible && <>
                <S.Background />
                <S.Container>                
                    <S.Content>
                        <S.TitleContainer>
                            {/* <S.Title>
                                {title}
                            </S.Title> */}
                            <S.Subtitle>
                                {subtitle}
                            </S.Subtitle>
                        </S.TitleContainer>
                        <S.ContentButton>
                            <S.Button
                                type={type}
                                numberOfButtons={numberOfButtons}
                                onPress={onFunction}
                            >
                                <S.ButtonTitle type={type}>
                                    {buttonTitle}
                                </S.ButtonTitle>
                            </S.Button>
                            { buttonTitleTwo &&
                                <S.Button
                                    typeTwo={typeTwo}
                                    numberOfButtons={numberOfButtons}
                                    onPress={onFunctionTwo}
                                >
                                    <S.ButtonTitle typeTwo={typeTwo}>
                                        {buttonTitleTwo}
                                    </S.ButtonTitle>
                                </S.Button>
                            }
                        </S.ContentButton>
                    </S.Content>
                </S.Container>
            </>}
        </>
    )
}

export default Modal;