import { Container, Header } from "semantic-ui-react";

import "./list.css";

import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

function App() {
  return (
    <>
      <br /> <br />
      <Container text>
        <Header as="h1" dividing>
          helo :)
        </Header>
        <br />
        <Link to="/list">
          <Button primary>View Dumps </Button>
        </Link>
        <Link to="/blog">
          <Button secondary>Read More </Button>
        </Link>
        <br /> <br />
        <p>
          so recenly i left nsbm because i hated my university so much. the
          reason for this is becasue the university is really bad. the only
          thing they are doing rigt is the marketing.
          <br /> <br />
          but its really sad to see how much students fall in to this massive
          scam which no one talks. so i though about talking about this. people
          said to me that the faculties other than computing are kinda ok. so i
          dont know about that but specially im talking about the computer
          faculty here.
          <br /> <br />
          ok so you might be thinking well this should be true nsbm is a big
          university and shit. but it isnt. i learned here. i wasted my money
          here. thats one of the biggest regret i have.i came to the uni
          thinking im gonna learn more about it stuff but ended up learning
          nothing and wasting some years of my life. <br /> <br />
          if you are thinking about joining nsbm to do it. dont. dont fall for
          this scam
          <br /> <br />
          im coming with big proof not just words. im 17 and i hacked this whole
          university alone. i have a remove access to all there internal network
          just from my shit computer.
          <br /> <br /> you dont believe me right ? well here you can find the
          content of there database do you belive me now ? you can download all
          the personal details of students and more from here .
          <br /> <br />
          i am terribly sorry if you are a victim of my attack. im sorry i just
          dont wanted to publish your information. but i had no other option. i
          wanted to help people. i wanted to tell people / show them that this
          is a scam.
          <br /> <br />i am sorry again and hope the victims will forgive me
        </p>
        <br />
        <br />
        <Message warning>
          <Message.Header>Message!</Message.Header>
          <p>
            Even while im writing this post i still have access to all there
            internal network. i can do lot more damage than this. but i dont
            want to thats because im a nice person and i dont wanna ruin
            anything :) but maybe i will leak more soon
          </p>
        </Message>
        <br />
        <Message negative>
          <Message.Header>Removing this information </Message.Header>
          <p>
            sorry for causing trouble if you want this to removed email me at{" "}
            <a href="mailto:ripnsbm@protonmail.com">
              ripnsbm[at]protonmail[dot]com{" "}
            </a>{" "}
            i will remove the information{" "}
          </p>
        </Message>
        <br />
      </Container>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
