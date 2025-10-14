
// const FilterButtons = ({ onFilter }) => {
//   const filters = ["All", "Pizza", "Burger", "Healthy", "Indian", "Mexican", "Fast Food"];

//   return (
//     <div className="filter-buttons">
//       {filters.map((filter, index) => (
//         <button
//           key={index}
//           className="filter-btn"
//           onClick={() => onFilter(filter)}
//         >
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };


// export default FilterButtons;



const FilterButtons = ({ onFilter }) => {
  const filters = ["All", "South Indian", "Desserts", "Pizza", "Healthy"];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button key={filter} className="filter-btn" onClick={() => onFilter(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
