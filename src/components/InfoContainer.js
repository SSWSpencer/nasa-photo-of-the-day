import React, {useState} from "react";
import TheDate from "./TheDate";
import PictureExplanation from "./PictureExplanation";
import styled from "styled-components";
import { Collapse, Button } from 'reactstrap';

const InfoContainer = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const InformationContainer = styled.div`
  margin-top: 2%;
  color: white;
  `

  return (
    <InformationContainer>
      <TheDate date={props.date} />

      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem', marginTop: '1rem' }}>Read More</Button>
      <Collapse isOpen={isOpen}>
            <PictureExplanation explanation={props.explanation} />
      </Collapse>
    </InformationContainer>
  );
};
export default InfoContainer;