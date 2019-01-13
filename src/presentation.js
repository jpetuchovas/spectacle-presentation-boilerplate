import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';
import Typist from 'react-typist';
import { Deck, Heading, Link, ListItem, List, Slide, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import createTheme from 'spectacle/lib/themes/default';

import './spectacle-code-slide-note.css';

require('normalize.css');
require('prismjs/components/prism-json');

const theme = createTheme(
  {
    primary: '#122b45',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    fifth: 'white',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const cursor = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: false,
  hideWhenDoneDelay: 1000,
};

const codeExamples = {
  config: require('./code-examples/json.example'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['zoom']}
          bgColor="fifth"
          controlColor="quartenary"
          progressColor="quartenary"
        >
          <Heading textSize="1.4em" lineHeight={1} textColor="secondary">
            Spectacle presentation boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize="1em" bold>
            open the presentation.js file to get started
          </Text>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="fifth"
          textColor="tertiary"
          controlColor="quartenary"
          progressColor="quartenary"
        >
          <Heading size={6} textColor="secondary">
            Standard list
          </Heading>
          <List>
            <ListItem textSize="2.1vw">Item 1,</ListItem>
            <ListItem textSize="2.1vw">Item 2,</ListItem>
            <ListItem textSize="2.1vw">Item 3,</ListItem>
            <ListItem textSize="2.1vw">Item 4.</ListItem>
          </List>
        </Slide>

        <Slide transition={['spin', 'slide']} bgColor="quartenary">
          <Heading textColor="secondary" textSize="2em" margin="10px 0">
            Spectacle presentation boilerplate
          </Heading>

          <Link
            href="https://github.com/jpetuchovas/spectacle-presentation-boilerplate"
            target="_blank"
          >
            <Heading textColor="secondary" textSize="1em" margin="10px 0">
              https://github.com/jpetuchovas/spectacle-presentation-boilerplate
            </Heading>
          </Link>

          <Terminal
            title="justinas@justinas-laptop: ~"
            output={[
              <Typist avgTypingDelay={20} cursor={cursor}>
                git clone
                git@github.com:jpetuchovas/spectacle-presentation-boilerplate.git
              </Typist>,
              <div>
                <div>Cloning into 'spectacle-presentation-boilerplate'...</div>
                <div>done</div>
              </div>,
            ]}
          />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="json"
          textSize="1.75vw"
          bgColor="primary"
          code={codeExamples.config}
          ranges={[
            {
              loc: [0, 0],
              title: 'JSON',
            },
            { loc: [1, 2], note: 'Property with its value.' },
          ]}
        />
      </Deck>
    );
  }
}
