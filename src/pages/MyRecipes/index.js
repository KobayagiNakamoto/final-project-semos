import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TitleDivider } from "../../components/TitleDivider";

const data = [
  {
    name: "Homemade Pizza",
    category: "Brunch",
    createdOn: "22.11.2020",
  },
  {
    name: "Sea Spaghetti",
    category: "Lunch",
    createdOn: "13.10.2020",
  },
  {
    name: "Easy Tacos",
    category: "Dinner",
    createdOn: "01.09.2020",
  },
  {
    name: "Mexican Burrito",
    category: "Breakfast",
    createdOn: "11.08.2020",
  },
  {
    name: "Energy Booster",
    category: "Dinner",
    createdOn: "07.08.2020",
  },
  {
    name: "Mac & Bacon",
    category: "Brunch",
    createdOn: "02.08.2020",
  },
  {
    name: "Caesar Salad",
    category: "Brunch",
    createdOn: "27.07.2020",
  },
];

export function MyRecipes({ user }) {
  const history = useHistory();
  // if logged in, cannot navigate to log in page
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <div style={{ width: "1000px" }}>
      <TitleDivider text="My Recipes" />
      <table className="table">
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Category</th>
            <th>Created On</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <th>{item.name}</th>
              <th>
                <span className="badge rounded-pill bg-success">
                  {item.category}
                </span>
              </th>
              <th>{item.createdOn}</th>
              <th className="text-center">🗑️</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
