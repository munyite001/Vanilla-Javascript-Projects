// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********

//  Submit Form
form.addEventListener('submit', addItem);

//  Clear List
clearBtn.addEventListener('click', clearList);

//  Load Items
window.addEventListener('DOMContentLoaded', setupItems);


// ****** FUNCTIONS **********
function addItem(e)
{
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if(value !== '' && editFlag === false)
  {
    createGroceryListItem(id, value);
//  display alert for success
displayAlert("Successfully added item", "success");
groceryContainer.classList.add('show-container');

//  Add to local storage
addToLocalStorage(id, value);

//  Set Back To Default
setBackToDefault()

  }
  else if(value !== '' && editFlag === true)
  {
    editElement.innerHTML = value;
    displayAlert("Value Changed Successfully", "success");
    //edit local storage
    editLocalStorage(editId, value);

    setBackToDefault();
  }
  else
  {
    displayAlert("Please enter a Value", 'danger');
  }
}

// display alert
function displayAlert(text, action)
{
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(() => {
      alert.textContent = '';
      alert.classList.remove(`alert-${action}`);
    },1000);
}

//  set back to default
function setBackToDefault()
{
  grocery.value = '';
  editFlag = false;
  editId = '';
  submitBtn.textContent = 'Add';
}

//  Clear List
function clearList()
{
  const groceryItems = document.querySelectorAll('.grocery-item');
  if(groceryItems.length > 0)
  {
    groceryItems.forEach((item) => {
      groceryList.removeChild(item);
    });
  }
  groceryContainer.classList.remove('show-container');
  displayAlert("Emptied List", "danger");
  setBackToDefault();
  localStorage.removeItem('list');
}

//  delete function
function deleteItem(e)
{
  const item = e.currentTarget.parentElement.parentElement;
  const id = item.dataset.id;

  groceryList.removeChild(item);
  if (groceryList.children.length === 0)
  {
    groceryContainer.classList.remove('show-container');
  }
  displayAlert("Removed Item", "danger");
  setBackToDefault();
  //  Remove from Local Storage
  removeFromLocalStorage(id);
}

//  edit function
function editItem(e)
{
  const item = e.currentTarget.parentElement.parentElement;

  //  set edit item equal to the p tag
  editElement = e.currentTarget.parentElement.previousElementSibling

  //  Set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = item.dataset.id;
  submitBtn.textContent = 'edit';
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value)
{
  const groceryItem = {id, value};
  
  //  Check whether there is an item in the local storage
  const items = getLocalStorage()

  //  Add the new grocery item to the list
  items.push(groceryItem);

  //  Resend the list to the local storage
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id)
{
  let items = getLocalStorage();

  //  Remove the item from the list of items
  items = items.filter((item) => {
    if (item.id !== id)
    {
      return item;
    }
  });

  //  Resend the list to the local storage
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value)
{
  let items = getLocalStorage();

  items.forEach((item) => {
    if (item.id == id)
    {
      item.value = value;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage()
{
  /*
  * Checks whether there is an item stored in the local storage
  * If there is, it returns it
  * If there is none, it returns an empty array
  */
  return localStorage.getItem("list") ? 
  JSON.parse(localStorage.getItem("list")) : [];
}

// ****** SETUP ITEMS **********
function setupItems()
{
  let items = getLocalStorage();
  if (items.length > 0)
  {
    items.forEach((item) => {
      createGroceryListItem(item.id, item.value);
    });
  groceryContainer.classList.add("show-container");
  }
}

function createGroceryListItem(id, value)
{
  //  create an element for the element
  const element = document.createElement('article');

  //  add class
  element.className = 'grocery-item';

  //  add a unique id as an attribute
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
  <p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>`;

//  Add event listeners for the edit and delete btns
const deleteBtn = element.querySelector('.delete-btn');
const editBtn = element.querySelector('.edit-btn');

deleteBtn.addEventListener('click', deleteItem);
editBtn.addEventListener('click', editItem);

//  Add item to the list
groceryList.appendChild(element);
}