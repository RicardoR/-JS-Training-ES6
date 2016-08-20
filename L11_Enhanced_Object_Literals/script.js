/*Multiple Properties with Enhanced Notation*/

/*Refactor to use enhanced literal notation*/

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };


/*Condensing Code with Enhanced Literals*/

/*Refactor the following to use enhance object literal syntax*/

const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };


/*Literals in Functions*/

/*Refactor to use enhanced literal notation*/

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
}

canvasDimensions(10, 20);
