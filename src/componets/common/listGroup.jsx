import React from "react";

const ListGroup = props => {
  const {
    genres,
    onGenreSelected,
    textProperty,
    valueProperty,
    selectedGenre
  } = props;

  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          onClick={() => onGenreSelected(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active clickable"
              : "list-group-item clickable"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
