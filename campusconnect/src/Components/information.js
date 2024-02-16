import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import Card from "./card";
import Form from "./form";
import icon01 from "../images/icon-detailed-records.svg";
import icon02 from "../images/icon-detailed-records.svg";
import icon03 from "../images/icon-fully-customizable.svg";
import ResultList from "./resultList";

export const InformationStyled = styled.div`
  text-align: center;
  background: var(--background);
  padding: 8em 0em 1em 0em;

  h1 {
    margin: 1em 0em;
    line-height: 1.2em;
    font-size: 1.5em;
    font-weight: 700;
    color: var(--very-dark-violet);
  }

  .description {
    color: var(--grayish-violet);
    margin: 0;
    font-size: 0.9em;
    line-height: 1.5em;
    font-weight: bold;
  }

  @media (min-width: 1200px) {
    .description {
      width: 50%;
      margin: auto;
      font-size: 1.1em;
      font-weight: 900;
    }
    h1 {
      font-size: 2.5em;
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
    }
  }
`;

function Information() {
  return (
    <InformationStyled>
      <Wrapper>
        <Form />
        <ResultList />
        <h1>Campus Connectivity</h1>
        <p className="description">
        Join us today and unlock a world of possibilities at your fingertips!
        </p>

        <div className="card-list">
          <Card
            icon={icon01}
            title="Notes Repository"
            description=" Dive into a vast collection of meticulously organized notes, spanning various subjects and topics, contributed by fellow students across campuses."
            line={false}
          />
          <Card
            marginTop="6em"
            icon={icon02}
            title="Job Listings"
            description="Browse through a diverse range of internships, part-time positions, and full-time job openings tailored specifically for students across campuses."
            line={true}
          />
          <Card
            marginTop="8em"
            className="margin-2"
            icon={icon03}
            title="Ecosystem For Colleges"
            description=" Explore array of resources, from shared knowledge hubs to collaborative projects, to enhance the academic and extracurricular experiences."
            line={true}
          />
        </div>
      </Wrapper>
    </InformationStyled>
  );
}

export default Information;
