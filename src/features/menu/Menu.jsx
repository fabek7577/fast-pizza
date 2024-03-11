import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const data = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-3">
      {data?.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
}

export async function loader() {
  // code API
  const response = await getMenu();
  return response;
}

export default Menu;
