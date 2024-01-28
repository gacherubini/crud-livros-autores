// import React, { useState, useEffect } from 'react';
// import '../app.css';
// import BookForm from '../components/BookForm';
// import BookList from '../components/BookList';

// const Authors = () => {
//   const [friends, setFriends] = useState([]);

//   useEffect(() => {
//     try {
//       const storedFriends = JSON.parse(localStorage.getItem('friends'));
//       if (storedFriends) {
//         setFriends(storedFriends);
//       }
//     } catch (error) {
//       console.error('Error parsing stored friends:', error);
//       // Handle the error as needed
//     }
//   }, []);
  
//   useEffect(() => {
//     const storedFriends = JSON.parse(localStorage.getItem('friends'));
//     if (storedFriends) {
//       setFriends(storedFriends);
//     }
//   }, [setFriends]);
    

//   const handleAddFriend = (newFriend) => {
//     setFriends([...friends, newFriend]);
//   };

//   const handleEditFriend = (friendToUpdate) => {
//     const updatedFriends = friends.map((friend) =>
//       friend.id === friendToUpdate.id ? friendToUpdate : friend
//     );
//     setFriends(updatedFriends);
//   };

//   const handleDeleteFriend = (id) => {
//     const updatedFriends = friends.filter((friend) => friend.id !== id);
//     setFriends(updatedFriends);
//   };

//   return (
//     <div className="App">
//       <h1>Authors List</h1>
//       <FriendForm onAddFriend={handleAddFriend} />
//       <FriendList
//         friends={friends}
//         onEditFriend={handleEditFriend}
//         onDeleteFriend={handleDeleteFriend}
//       />
//     </div>
//   );
// };

// export default Authors;