import React, { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Only update the name state if the input value is a string
    if (typeof inputValue === 'string') {
      setName(inputValue);
    }
  };

  return (
    <div>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
}
