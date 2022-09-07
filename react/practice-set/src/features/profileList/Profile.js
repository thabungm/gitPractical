import './styles.css';
const Profile = ({ user }) => {
  return (
    <div className='userCard'>
      <div style={{ borderRadius: '50px' }} className='profilePicture'>
        <img className='imageClass' src={user.picture.medium} />
      </div>
      <h3>{`${user?.name?.title} ${user?.name?.first}`}</h3>
      <div className='email'>{user.email}</div>
    </div>
  );
};

export default Profile;
