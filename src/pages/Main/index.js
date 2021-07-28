import { Card } from "../../components/Card";
import { RecipeModal } from "../../components/RecipeModal";
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

export function Main({ modalShow, setModalShow }) {
  return (
    <div style={{ width: "1000px" }}>
      <TitleDivider text="Fresh & New" />
      <div className="main-grid mb-5">
        {data.slice(0, 3).map((item, index) => (
          <Card
            key={item.name + item.category}
            {...item}
            setModalShow={setModalShow}
          />
        ))}
      </div>
      <TitleDivider text="Most Popular Recipes" />
      <div className="main-grid">
        {data.slice(0, 6).map((item, index) => (
          <Card
            key={item.name + item.category}
            {...item}
            setModalShow={setModalShow}
          />
        ))}
      </div>
      <RecipeModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
