import React, { FC } from 'react';
import { Button } from './styles';

interface IMainButton {
    text: string;
    action: () => Promise<void>;
}

const MainButton: FC<IMainButton> = ({ text, action }) => {
    return <Button onClick={action}>{text}</Button>;
};

export default MainButton;
