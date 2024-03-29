<h1 align="center">Lexibot</h1>
<p align="center">
<img alt="Lexibot Logo" title="Lexibot Logo" src="https://user-images.githubusercontent.com/41394178/197904144-85e012fe-89c2-4143-baab-6dd9330c9dc0.png" />
</p>
<p align="center">
  <strong>Expanding personal vocabulary with spaced repetition approach.</strong>
  
  > Spaced repetition is a method of reviewing material at systematic intervals. At the beginning of the
  learning process, the intervals are spaced closely together (for example, one hour; four hours; one
  day). As the material is reviewed, the intervals become systematically longer (four days; one week;
  two weeks). An ideal system of spaced repetition allows you to review the material before it is
  forgotten, helping you to retain it in your long term memory.
  
</p>
<p align="center">
<img alt="Lexibot Hero Image" title="Lexibot Hero Image" src="https://user-images.githubusercontent.com/41394178/197904130-8264da4c-4016-4cf3-8e94-e67cf534748f.png" />
</p>

## In a Nutshell
Lexibot is a chatbot for [Telegram messenger](https://telegram.org/). It helps users to expand their English vocabulary, with the focus on low-frequnecy words. The chatbot uses [Free Dictionary API](https://dictionaryapi.dev/) under the hood as a source for vocabulary data. Lexibot utilizes the [spaced repetition technique](https://en.wikipedia.org/wiki/Spaced_repetition) which is designed to be effective with long-term retention of the new information.

The project consists of two parts:
1. Backend layer that manages a database and a chatbot using Firebase API and Telegram Bot API;
2. UI layer that employs React and Redux-Toolkit and provides the chatbot users with separate webviews for every task they need to perform.

_This codebase includes only the UI layer._

## Goals

### Learning by Doing
The first version of Lexibot was my first serious attempt to develop an application that had a backend, users and interactive UI. As a UI-designer I had experience with frontend technologies but nevertheless the task proved to be quite challenging. The project was eventually finished and had a few active users.

### Keep Learning and Make Version Two
At some point I decided to get back to the project and redesign the bot's UI and UI's code using [React 18](https://reactjs.org/) and [Redux Toolkit](https://redux-toolkit.js.org/). The second version's UI is being developed from scratch. The new interface is cleaner, simpler and more intuitive. I'm hoping to achieve the same effect with the code.

## Features
* Look up a word in Free Dictionary;
* Build a card using the data from Free Dictionary;
* Study cards;
* Manage cards;
* Manage settings and preferences.

<img alt="Lexibot Logo" title="Lexibot Logo" src="https://user-images.githubusercontent.com/41394178/197913884-e04b8bf0-9557-497f-98da-2b45d64dd142.png" />

## Todo
- [ ] Finish 'Free Dictionary Lookup' view;
- [ ] Develop 'Studying' view;
- [ ] Migrate from JSON-server to Firebase;
- [ ] Add authorization;
- [ ] Develop 'Manage cards' view;
- [ ] Develop 'Settings and Preferences' view;
- [ ] Design and develop 'Explore' feature (based on [wordnetweb engine](https://wordnet.princeton.edu/)).
