function makeDiagonalRed(table) {
  let tbl = document.body.firstElementChild;
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';}
}