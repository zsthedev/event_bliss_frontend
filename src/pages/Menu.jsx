import React, { useEffect, useState } from "react";
import PrimaryBtn from "../components/primaryBtn";
import { filterFoodRow } from "../utils/selectOptions";
import Food from "../components/Food";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "../redux/actions/menu";
import Loader from "./Loader";

const Menu = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, message, menu } = useSelector((state) => state.menu);
  
  useEffect(() => {
    dispatch(getAllMenu());
  }, [dispatch, error, message]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return loading ? (
    <Loader />
  ) : (
    <section className="flex_section">
      <div className="content flex flex-col gap-5">
        <h2>Menu</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            onKeyUp={handleSearch}
          />
        </div>
        <div className="filter-row flex gap-2">
          {filterFoodRow.map((f, index) => (
            <PrimaryBtn
              key={index}
              title={f.label}
              customStyling={
                `border border-black min-w-[100px] h-[35px] hover:bg-crimson hover:text-white hover:border-none ${active === f.value ? "bg-crimson text-white border-none" : ""}`
              }
              handleClick={() => setActive(f.value)}
            />
          ))}
        </div>

        <div className="food-row flex items-center gap-5 flex-wrap justify-between">
          {menu && menu.length > 0
            ? menu
                .filter((f) => (active === "all" || f.category === active) && f.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((m, index) => (
                  <Food
                    key={index}
                    image={m.image.url}
                    category={m.category}
                    name={m.name}
                    price={`PKR ${m.price}`}
                    desc={m.description}
                    ratings={m.ratings}
                  />
                ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Menu;
