import PropTypes from "prop-types";

const UserList = ({ users, loading, error }) => {
  if (loading) return <div>...Loading</div>;
  if (error) return <div>Something went wrong</div>;
  if (!users) return null;
  return (
    <div className="flex">
      {users.length &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
            </div>
          );
        })}
    </div>
  );
};

const user = PropTypes.shape({
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}).isRequired;

UserList.propTypes = {
  users: PropTypes.arrayOf(user).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default UserList;
