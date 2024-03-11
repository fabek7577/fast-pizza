import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const name = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      dispatch(updateName(username));
      navigate("/menu");
    }
  }

  return (
    <>
      {name.username ? (
        <Button to="/menu" type={"primary"} >Continue ordering</Button>
      ) : (
        <form onSubmit={handleSubmit}>
          <p className="mb-4 text-sm text-stone-600">
            👋 Welcome! Please start by telling us your name:
          </p>

          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 input w-[250px]"
          />

          {username !== "" && (
            <div>
              <Button type={"primary"}>Start ordering</Button>
            </div>
          )}
        </form>
      )}
    </>
  );
}

export default CreateUser;
