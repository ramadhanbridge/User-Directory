import Header from "../components/Header";

const DetailPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <Header
        title="User Details"
        subtitle="View profile information for this user."
        to="/users"
        toTitle="Users"
      />
      <div className="p-6 md:p-10">
        <h1>list of users</h1>
      </div>
    </div>
  );
};

export default DetailPage;
