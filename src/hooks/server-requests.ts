import { Message } from '../types/message';
import { mockUsers } from '../assets/mockUsers'; // todo: remove this line after server implementation

const endpoint = '../assets/'; // todo: add endpoint (server) address (starting with http://)


/**
 * GET Request to get the list of messages
 **/
export async function getMessages() {
  // todo: replace this with fetch to get the messages from the server
  const userNames = await fetch('http://localhost:3001/Name')
  const res = await userNames.json()
  return res;
}

/**
 * GET request to get the full list of users - id + name
 **/
export async function getUsers() {
  // todo: replace this with fetch to get the user list from the server
  const  mockUsers= await fetch('http://localhost:3001/useridName');
  const res =  await mockUsers.json();
  return res ;
}

interface User{
  id : number
}

/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  //  For mocking example, we're calling an external JSON service.
  //  You can use mockUserDetails.ts for the list of user details in the server.
  const usersDetails = await fetch('http://localhost:3001/userdetails');
  const res: User[] = await usersDetails.json();
  const ans = res.filter( user => user.id === userId)
  return ans[0]
  
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
  const response = await fetch('http://localhost:3001/newmessage', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message) 
  });
}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(messageId: number, userId: number, like: boolean) {
  // todo: implement sending a rquest to change the like of a message by the user
  const response = await fetch('http://localhost:3001/like', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({messageId, userId, like})

  })}