import React from "react";

export default function SearchInput(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="chat-search">
      <form>
        <input
          className="chat-search-text"
          type="text"
          name="name"
          placeholder="Search"
          onChange={handleChange}
          value={props.value}
          style={{ backgroundColor: "#F3F3F3", border: "gainsboro 1px solid" }}
        />
      </form>
    </div>
  );
}
