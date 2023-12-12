import React, { useState } from "react";
import "./styles.css";
function DriveFinished() {
  const [rating, setRating] = useState(0); // State to store the selected rating

  // Function to handle changes in the rating
  const handleRatingChange = (event) => {
    setRating(Number(event.target.value)); // Update the rating state when a radio button is selected
  };
  return (
    <div className="drive-finished">
      <p>You have arrived at your desination</p>
      <p className="rate-prompt">Please rate your driver:</p>
      <div class="star-rating">
        <input
          type="radio"
          id="star5"
          name="rating"
          value="5"
          onChange={handleRatingChange}
        />
        <label for="star5">&#9733;</label>
        <input
          type="radio"
          id="star4"
          name="rating"
          value="4"
          onChange={handleRatingChange}
        />
        <label for="star4">&#9733;</label>
        <input
          type="radio"
          id="star3"
          name="rating"
          value="3"
          onChange={handleRatingChange}
        />
        <label for="star3">&#9733;</label>
        <input
          type="radio"
          id="star2"
          name="rating"
          value="2"
          onChange={handleRatingChange}
        />
        <label for="star2">&#9733;</label>
        <input
          type="radio"
          id="star1"
          name="rating"
          value="1"
          onChange={handleRatingChange}
        />
        <label for="star1">&#9733;</label>
      </div>
      <button className="btn-animated finish_btn">
        <span class="btn__visible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21,3H3A2,2,0,0,0,1,5V19a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V5A2,2,0,0,0,21,3Zm-1,14H4V7H20ZM8,15l4,4,4-4H8Z" />
          </svg>
        </span>
        <span className="btn__invisible">SUBMIT & FINISH</span>
      </button>
    </div>
  );
}

export default DriveFinished;
