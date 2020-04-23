import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./Title";
import Image from "./Image";
import InfoContainer from "./InfoContainer";
import styled from "styled-components";

function APODContainer() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=tBKXIwWIVxRCJMS7Q02CQDZajQepqOxwa3hi3FkL`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log("nasa machine broke", error)
        })
    
      }, [])

      const APODContainer = styled.div`
      width: 80%;
      margin: 4% auto 0 auto;
      display: flex;
      flex-direction: column;
      `
  return (

    <APODContainer>
      <Title title={data.title}/>
      <Image hdurl= {data.hdurl} alt={data.title} url={data.url} copyright={data.copyright} />
      <InfoContainer date={data.date} explanation={data.explanation}/>
    </APODContainer>
  );
}

export default APODContainer;
