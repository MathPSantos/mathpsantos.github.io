import React from "react";

import { Layout } from "../../components";

import { 
  Landing,
  Content,
  Greeting,
  SocialList,
  LinkedInIcon,
  GithubIcon,
  MailIcon,
  DevToIcon,
  LandingImg,
} from "./styles";

import LandingImage from '../../assets/images/LandingImage.png'

const Home: React.FC = () => {
  return (
    <Layout>
      <Landing>
        <Content>
          <Greeting>
            <span>Hi. I'm Matheus,</span>
            <h2>I’m a Developer <br/> and Designer</h2>

            <SocialList>
              <LinkedInIcon />
              <GithubIcon />
              <MailIcon/>
              <DevToIcon />
            </SocialList>
          </Greeting>

          {/* <Lang>

          </Lang> */}
        </Content>
        <LandingImg src={LandingImage} />
      </Landing>
    </Layout>
  );
};

export default Home;
