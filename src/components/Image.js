import React, {useState} from "react";
import styled from "styled-components";
import { Spinner } from 'reactstrap';
import { Collapse } from "reactstrap";

const Image = props => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const ImageOfDay = styled.img `
    object-fit: scale;
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    border: 5px solid black;
    `
  const CopyrightInfo = styled.p`
    color: grey;
    width: 90%;
    text-align: right;
    `

  const LoadingScreen = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    `
  if (!props.url) {
    return (
    <LoadingScreen>
      <h3>Loading...</h3>
      <Spinner style={{ width: '3rem', height: '3rem' }} />
    </LoadingScreen>
    )
  }
  return (
    <div>
      <a rel="noopener noreferrer" href={props.hdurl} target="_blank"><ImageOfDay onMouseLeave={toggle} onMouseEnter={toggle} alt={props.alt} src={props.url}/></a>

      <Collapse isOpen={isOpen}>
          <p style={{ color: 'white' }}>View HD Image</p>
        </Collapse>


      <CopyrightInfo>Copyright: {props.copyright}</CopyrightInfo>
      </div>
  );
};
export default Image; 