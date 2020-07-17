import styled from "styled-components";

export const Landing = styled.div`
    width: 100%;
    min-height: calc(100vh - 190px);

    position: relative;
    display: flex;
    align-items: center;

    padding: 0 24px;
`;

export const Content = styled.div`
    height: 100%;

    background: ${({theme}) => theme.colors.background.primary};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Greeting = styled.div`
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.colors.background.tertiary};

    > span {
        font-family: ${({theme}) => theme.fonts.openSansBold};
        font-size: 12px;
        text-transform: uppercase;
        margin-top: auto;
    };
    > h2 {
        font-size: 36px;
        margin-bottom: auto;
    };
`;

export const LandingImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;

    z-index: -3;

    width: 300px;
    height: auto;


    @media (min-width: 760px) {
        top: -90px;
        width: 360px;
    };
`;

export const SocialList = styled.div``;

export const LinkedInIcon = styled.div``;

export const GithubIcon = styled.div``;

export const MailIcon = styled.div``;

export const DevToIcon = styled.div``;
