(function () {

  //grab the inputBox box element
  let inputBox = document.querySelector("#search-box");
  //add event listener
  inputBox.addEventListener('keyup', search);

  //declare function
  function search() {

    let filterInput = inputBox.value;
    let table = document.querySelector("#table");

    // grab all table rows
    let tableRows = document.getElementsByTagName("tr");
    // using for of loop
    for (let value of tableRows) { //loop over all table rows

      //take the model column
      let tableCell = value.getElementsByTagName("td")[1];

      if (tableCell) { //if user input is found
        if (tableCell.innerHTML.toLowerCase().indexOf(filterInput) !== -1) {
          value.style.display = '';

        } else {
          value.style.display = 'none';
        }
      }

    } //for of

  } //search

})();
