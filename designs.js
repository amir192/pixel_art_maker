// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const color = document.getElementById('colorPicker');

let gridHeight = document.getElementById('input_height');
let gridWidth = document.getElementById('input_width');
let submitInput = document.querySelector('input[type="submit"]');

let grid = document.getElementById('pixel_canvas');

submitInput.addEventListener('click', makeGrid); //on clicking submit button call makegrid()

function makeGrid() {

  event.preventDefault();

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
}

  let n = gridHeight.value;
  let m = gridWidth.value;

  for (let i = 0; i < n; i++) {

    let row = document.createElement("tr");

    //event listener for click on a grid cell for colorfill
    function onClickEventListener(evt) {
      evt.target.style.backgroundColor = color.value;
    }

    for (let j = 0; j < m; j++) {

      let column = document.createElement("td");
      column.addEventListener('click', onClickEventListener);
      row.appendChild(column);
    }

    grid.appendChild(row);
  }
}

/*

:bulb: To insert a row in a table you can also use the insertRow method. To insert a cell, use the insertCell method:

const table = document.getElementById('table_id');
for (let i = 0; i < 10; i++) {
    // Inserts 10 rows into the table
    const row = table.insertRow(i);
    for (let j = 0; j < 10; j++) {
        // Inserts 10 cells into each of the rows
        const cell = row.insertCell(j);
    }
}


:bulb: You can also empty an element by setting the inner HTML to an empty string: table.innerHTML = '';

*/