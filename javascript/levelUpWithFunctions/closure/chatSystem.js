function chatSystem() {
  let members = [];

  function joinRoom(newMember) {
    if (members.includes(newMember)) {
      console.log(`${newMember} already in`);
      return;
    }

    members.push(newMember);
    console.log(`${newMember} joined :)`);
  }

  function printMembers() {
    console.log(members);
  }

  function leaveRoom(leavingMember) {
    members = members.filter((member) => {
      return member !== leavingMember;
    });
    console.log(`${newMember} left :(`);
  }

  const result = {
    joinRoom: joinRoom,
    printMembers: printMembers,
    leaveRoom: leaveRoom,
  };
  return result;
}

const newChatSystem = chatSystem();
// const { joinRoom } = newChatSystem;
const joinRoom = newChatSystem.joinRoom;
const printMembers = newChatSystem.printMembers;
const leaveRoom = newChatSystem.leaveRoom;
joinRoom('Mike');
joinRoom('Mike');
joinRoom('Mike');

joinRoom('Jay');
joinRoom('Sachin');

printMembers();
