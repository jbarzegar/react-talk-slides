// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Slide,
  Image,
  Text,
  Quote,
  Cite,
  BlockQuote,
  List,
  ListItem
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

/* Assets */
import wsBadge from "../assets/ws-badge.svg";
/* End of Assets */

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: " #020d1c",
    tertiary: "#006aff",
    quarternary: "#CECECE"
  },
  {
    primary: "IBM Plex Mono",
    secondary: "IBM Plex Mono"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade", "zoom"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Image src={wsBadge} width={400} />
          <Heading>Writing React</Heading>
          <Text textSize={25} margin={"30px 0 0 0"}>
            (Without hating yourself)
          </Text>
        </Slide>

        <Slide>
          <Heading textSize={60}>What Is React exactly?</Heading>
          <Image
            src={
              "https://media1.tenor.com/images/c1779cc711eec61ef3cd322d569e005f/tenor.gif?itemid=8486419"
            }
          />
        </Slide>

        <Slide>
          <BlockQuote margin={0}>
            <Quote textColor="secondary" textSize={60}>
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces.
            </Quote>
            <Cite>The thing I copy pasted from reactjs.org</Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading>But this is a code-along not a lecture</Heading>
        </Slide>

        <Slide>
          <Heading textSize={60}>Here's what we're covering:</Heading>
          <List>
            <ListItem>React (Obviously)</ListItem>
            <ListItem>Managing your app with state</ListItem>
            <ListItem>Passing data through props</ListItem>
            <ListItem>The Virtual DOM</ListItem>
            <ListItem>Some cool ES6/ES7 stuffs</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Cool?</Heading>
          <Appear>
            <Text textSize={100}>Cool.</Text>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
