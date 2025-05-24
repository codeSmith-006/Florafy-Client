import React, { use } from "react";
import { AuthContext } from "./Context/AuthContext";
import Swal from "sweetalert2";

const ShareTips = () => {
  const { loggedUser } = use(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const email = event.target.email.value;
    const name = event.target.name.value;
    const newData = {
      ...data,
      email,
      name,
      likeCount: 0
    };

    fetch("http://localhost:5000/gardeners-tips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // sign in with google sweet alert
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Shared a tips successfully",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-lg mx-auto my-8 w-[95%] bg-white dark:bg-[#0E1A2B] p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-[#38A57E] text-center dark:text-[#38A57E]">
        Share a Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="How I Grow Tomatoes Indoors"
            required
            className="input input-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            Plant Type / Topic
          </label>
          <input
            type="text"
            name="plantType"
            placeholder="Tomatoes, Herbs, Succulents..."
            required
            className="input input-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            required
            className="select select-bordered w-full dark:bg-[#1A2230] dark:text-white"
          >
            <option value="" disabled>
              Select difficulty
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="Describe your tip here..."
            required
            className="textarea textarea-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full text-sm dark:bg-[#1A2230] dark:text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            Category
          </label>
          <select
            name="category"
            required
            className="select select-bordered w-full dark:bg-[#1A2230] dark:text-white"
          >
            <option value="" disabled>
              Select category
            </option>
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Indoor Gardening</option>
            <option>Hydroponics</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            Availability
          </label>
          <select
            name="availability"
            required
            className="select select-bordered w-full dark:bg-[#1A2230] dark:text-white"
          >
            <option value="" disabled>
              Select availability
            </option>
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            User Email
          </label>
          <input
            value={loggedUser?.email}
            name="email"
            type="email"
            readOnly
            className="input input-bordered w-full bg-gray-100 dark:bg-[#1A2230] dark:text-white cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1 text-[#212121] dark:text-white">
            User Name
          </label>
          <input
            name="name"
            value={loggedUser?.displayName}
            type="text"
            readOnly
            className="input input-bordered w-full bg-gray-100 dark:bg-[#1A2230] dark:text-white cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#38A57E] text-white font-bold py-3 rounded hover:bg-[#2f7a60] transition"
        >
          Submit Tip
        </button>
      </form>
    </div>
  );
};

export default ShareTips;
