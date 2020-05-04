import React, { FC } from "react";

import { Container, TextContainer, ThinText, ItalicText, Rule } from "./styles";

const WelcomeScreen: FC = () => {
    return (
        <Container id="welcome-screen">
            <h1>
                Internet<ThinText>navigator</ThinText>
            </h1>
            <h2>Welcome and thank you for using Internet Navigator 1.0!</h2>
            <TextContainer>
                <h3>
                    <strong>
                        You can use Internet Navigator to browse Web pages,
                        circa the year 2000.
                    </strong>
                </h3>
                <Rule />

                <h3>
                    To use Internet Navigator, enter the URL you want to visit
                    in the <strong>Address Bar</strong> above. If you omit the
                    TLD (<ItalicText>.com, .org, etc.</ItalicText>) it will
                    automatically try your webpage as a <strong>.com</strong>.
                </h3>
                <h3>
                    Keep in mind, this is not a search bar! If you want to
                    search the web (<ItalicText>e.g. Rush tickets</ItalicText>),
                    first visit a search engine. We recommend
                    <strong>lycos.com</strong>.
                </h3>
                <Rule />

                <h3>
                    Internet Navigator uses the Internet Archive's
                    <ItalicText>Wayback Machine</ItalicText> to find the closest
                    snapshot of your webpage to the year 2000. If that page
                    didn't exist, or wasn't archived until 2010, Internet
                    Navigator will take you to the current page.
                </h3>
                <h3>
                    <ItalicText>But what's the point of that?</ItalicText>
                </h3>
            </TextContainer>
        </Container>
    );
};

export default WelcomeScreen;
