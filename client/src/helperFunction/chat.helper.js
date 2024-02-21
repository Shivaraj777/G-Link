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