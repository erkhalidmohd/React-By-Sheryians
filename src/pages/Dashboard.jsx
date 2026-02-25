import useAuth from "../hooks/useAuth";

const Dashboard = () => {

  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome {user?.name}
      </h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Dashboard;