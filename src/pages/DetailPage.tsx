import Header from "../components/Header";

const DetailPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-10">
      <Header
        title="User Details"
        subtitle="View profile information for this user."
        to="/users"
      />
      <h1>single users</h1>
    </div>
  );
};

export default DetailPage;
