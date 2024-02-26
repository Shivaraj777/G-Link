// to get the sender
export const getSender = (loggedUser, users) => {
  if(!users){
    return;
  }

  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};


// To get the sender pic
export const getSenderPic = (loggedUser, users) => {
  if(!users){
    return;
  }

  return users[0]._id === loggedUser._id ? users[1].profile : users[0].profile;
};



// check whether message is sent by logged-in user
export const isMyMessage = (loggedUser, message) => {
  if(!message.sender || !loggedUser){
    return;
  }

  if(loggedUser._id === message.sender._id){
    return true;
  }

  return false;
};