//function to store items in local storage
export const setItemsInLocalStorage = (key, value) => {
  //if key or value is not present
  if(!key || !value){
    return console.error('Cannot store in local storage');
  }

  const valueToStore = typeof value !== 'string' ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueToStore);  //add the value to local storage
}
  
//function to get an item from local storage
export const getItemsFromLocalStorage = (key) => {
  //if key or value is not present
  if(!key){
    return console.error('Cannot find item in local storage');
  }

  return localStorage.getItem(key);  //get the value from local storage
}