// Adding new item to the list
function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
      alert("You must write something!");
  } else {
      $('#list').append(li);
  }

// Crossing an item out
  li.on("dblclick", function() {
      li.toggleClass("strike");
  });

// Adding delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

// Adding DELETE class from the CSS
crossOutButton.on("click", deleteListItem);
function deleteListItem(){
 	li.addClass("delete")
}

// Reordering the items
  $('#list').sortable();
}