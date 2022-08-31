export const fetchUserAttributes = async ({ tgid }) => {
  const response = await fetch(`http://localhost:3001/users?tgid=${tgid}`);
  const users = await response.json();

  if (users.length) {
    return { data: users[0] };
  }
  throw new Error('User Not Found');
};
