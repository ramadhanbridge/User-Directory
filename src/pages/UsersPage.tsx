import Header from "../components/Header";

const UsersPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-10">
      <Header
        title="Users"
        subtitle="Browse and explore everyone in the Centrica directory."
        to="/"
      />
      <h1>list of users</h1>
    </div>
  );
};

export default UsersPage;
