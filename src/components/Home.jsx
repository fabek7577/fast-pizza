import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-16 text-center px-4">
      <h1 className="font-pizza text-3xl text-stone-800 font-semibold mb-6 tracking-widest space-x-5">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
