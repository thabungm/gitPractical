import React from 'react';
import axios from 'axios';
import Profile from './Profile';
class ProfileListCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        /* {
          name: { title: "Mrs", first: "Kristina", last: "West" },
          email: "test@gmail.com"
        } */
      ],
    };
  }

  componentDidMount() {
    // console.log("Mounted");
    const url = 'https://randomuser.me/api/?nat=us&results=40&page=30';
    const resultPromise = axios.get(url);
    resultPromise.then((result) => {
      this.setState({ users: result?.data?.results });
    });
  }

  renderUserList() {
    return this.state.users.map((user) => (
      <div>
        <Profile user={user} />
      </div>
    ));
  }
  render() {
    return (
      <div>
        <h3>Profile list</h3>
        {this.state.users?.length === 0 ? 'Loading' : this.renderUserList()}
      </div>
    );
  }
}

export default ProfileListCC;
