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


// get sender profile details
export const getSenderProfileDetails = (loggedUser, activeChat) => {
  const { users } = activeChat;
  const data = {
    senderName: "",
    senderAbout: "",
    senderEmail: "",
    senderContact: "",
    senderPic: "",
  };

  users.forEach((user) => {
    if (loggedUser._id !== user._id) {
      data.senderName = user.name;
      data.senderAbout = user.about;
      data.senderEmail = user.email;
      data.senderContact = user.contact;
      data.senderPic = user.profile;
    }
  });

  return data;
};


// get group public details
export const getGroupProfileDetails = (loggedUser, activeGroupChat) => {
  const { _id, chatName, users, groupAdmin, createdAt } = activeGroupChat;

  const data = {
    groupId: _id,
    groupName: chatName,
    groupPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wQvepXb0gM_Ft1QUOs6UyYJjPOmA-gq5Yw&usqp=CAU',
    groupCreatedAt: createdAt,
    groupCreatedBy: groupAdmin.name,
    groupAdmin: {
      id: groupAdmin._id,
      name: groupAdmin.name,
    },
    groupUsers: [],
  };

  users.forEach((user) => {
    const obj = {
      id: user._id,
      name: user.name,
      pic: user.profile,
      about: user.about,
    };

    if (groupAdmin._id !== user._id) {
      data.groupUsers.push(obj);
    } else {
      data.groupUsers.unshift(obj);
    }
  });

  return data;
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


// get time
export const getTime = (createdAt) => {
  const date = new Date(createdAt);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dateString} ${timeString}`;
};