export const Home = () => {
  fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div>Home</div>;
};
