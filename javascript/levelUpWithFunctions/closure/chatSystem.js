function chatRoom() {
  let members = [];
  function joinRoom(member) {
    members.push(member);
    console.log(`${member} is joining`);
  }

  function leaveRoom(leavingMember) {
    members = members.filter((member) => member != leavingMember);
    console.log(`${leavingMember} is leaving`);
  }

  function getParticipants() {
    console.log(members);
    return members;
  }

  return { joinRoom, leaveRoom, getParticipants };
}

const chatRoomObj = chatRoom();
const { joinRoom, leaveRoom, getParticipants } = chatRoomObj;

joinRoom('Alex');
joinRoom('Mike');
getParticipants();
leaveRoom('Alex');
getParticipants();
