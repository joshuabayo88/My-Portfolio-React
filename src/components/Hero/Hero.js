import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, <br />
          I am Bayo, <br />A Frontend Developer.
        </SectionTitle>
        <SectionText>I build awesome Frontend Web Applications.</SectionText>
        <Link href="#about">
          <a>
            <Button>Learn More</Button>
          </a>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
