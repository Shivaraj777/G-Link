//function to convert JS object to form-urlencoded format
export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // shiv 123 => shiv%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }
  
  return formBody.join('&'); // 'username=shiv&password=123213'
};