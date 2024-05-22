import { useSelector } from "react-redux";

export const userRoles = [
  {
    value: "user",
    label: "User",
  },
  { value: "vendor", label: "Vendor" },
];

export const filterFoodRow = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "appetizer",
    label: "Appetizers",
  },

  {
    value: "main_course",
    label: "Main Course",
  },
];

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "transparent",
    backgroundColor: "#F1F1F1",
    textAlign: "left",
    padding: "4px",
    fontWeight: "400",
  }),
};

export const foodOptions = (foods) => {
  return foods.map((f) => ({
    value: f._id,
    label: f.name,
  }));
};

export const eventOptions = (foods) => {
  return foods.map((f) => ({
    value: f._id,
    label: f.title,
  }));
};

export const vendorOptions = (users) => {
  return users
    .filter((u) => u.role === "vendor")
    .map((f) => ({
      value: f._id,
      label: f.name,
    }));
};
