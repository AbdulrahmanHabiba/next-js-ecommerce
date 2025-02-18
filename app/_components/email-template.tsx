import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';
import { Properties } from 'csstype';

export const EmailTemplate = ({
                                  fullName,
                              }:{fullName : string}) => (
    <Html>
        <Head />
        <Preview>
            The Ecommerce Platform For Yout Digital Products search now for your future
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src='https://res.cloudinary.com/dnvlh7gm3/image/upload/v1739570211/Best-Online-Coding-Courses_diwpo2.jpg'
                    width="420"
                    height="300"
                    alt="Koala"
                    style={logo}
                />
                <Text style={paragraph}>Hi {fullName},</Text>
                <Text style={paragraph}>
                    Thank you purchasing on abdo Tech Ecommerce. Click on Below download button to download the all digital content
                </Text>
                <Section style={btnContainer}>
                    <Button
                        style={{
                            padding: 12,
                            paddingLeft: 10,
                            paddingRight: 10,
                        }}
                        href="https://res.cloudinary.com/dnvlh7gm3/image/upload/v1739570641/Advanced-Diploma-in-Software-Programing_fvq52n.jpg"
                    >
                        Download
                    </Button>
                </Section>
                <Text style={paragraph}>
                    Best,
                    <br />
                    Abdo Tech team
                </Text>
                <Hr style={hr} />
                <Text style={footer}>Subscribe to Ali Sleem</Text>
            </Container>
        </Body>
    </Html>
);


const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const logo = {
    margin: '0 auto',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const btnContainer:Properties = {
    textAlign: 'center',
};

const button = {
    backgroundColor: '#5F51E8',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};