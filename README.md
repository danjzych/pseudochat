# PesudoChat

## About

**PesudoChat** is an application that mimics the functionality of a ChatBot. The objective of this project was to practice DOM manipulation using jQuery.

Upon loading the chat window, you can send PsuedoChat a message and see it posted to the chat field. After a default response, PsuedoChat will give a series of randomized responses. User can send 'clear' to reset the chat. PseudoChat's responses are simple, as the objective of this project was to practice DOM manipulation and slick CSS.

**UPDATE 9/15/23** This was refactored as a flask application. In order to run PseudoChat on your machine, do the following:
- Clone the redo and install the requirements with `pip3 install -r requirements.txt`.
- Create postgres database "psuedochat" on your machine
- Run seed.py to seed database with messages
- `flask run`, on whatever port may be appropriate for your machine

### Additional Notes

the font for the logo of this project is from https://www.fontfabric.com/fonts/averta/ under their free use license.