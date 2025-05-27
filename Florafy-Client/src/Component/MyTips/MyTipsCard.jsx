import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const MyTipsCard = ({ rawTip, setDeletedTips }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [tip, setTips] = useState(rawTip);

  useEffect(() => {
    setTips(rawTip);
  }, [rawTip]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(
      `http://localhost:5000/gardeners-tips/update/${tip._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((dataResponse) => {
        const updatedData = {
          _id: tip._id,
          ...data,
        };
        setTips(updatedData);
        setActiveModal(false);
        if (dataResponse.matchedCount) {
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
            title: "Updated successfully",
          });
        }
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/gardeners-tips/${tip._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            setDeletedTips(rawTip);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <>
      {activeModal && (
        <dialog
          id="update_modal"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box dark:bg-gray-900 dark:text-white">
            <h3 className="font-bold text-lg text-green-700 dark:text-green-400 mb-4">
              Update Garden Tip
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="label font-medium text-green-700 dark:text-green-300">
                  Title (e.g., “How I Grow Tomatoes Indoors”)
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={tip?.title}
                  className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>

              {/* Plant Type / Topic */}
              <div>
                <label className="label font-medium text-green-700 dark:text-green-300">
                  Plant Type / Topic
                </label>
                <input
                  name="plantType"
                  type="text"
                  defaultValue={tip?.plantType}
                  className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>

              {/* Difficulty */}
              <div>
                <label className="label font-medium text-green-700 dark:text-green-300">
                  Difficulty Level
                </label>
                <select
                  name="difficulty"
                  defaultValue={tip?.difficulty}
                  className="select select-bordered w-full dark:bg-gray-800 dark:text-white"
                  required
                >
                  <option value="">Select</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="label font-medium text-green-700 dark:text-green-300">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={tip?.description}
                  className="textarea textarea-bordered w-full dark:bg-gray-800 dark:text-white"
                  rows={3}
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="label font-medium text-green-700 dark:text-green-300">
                  Image URL
                </label>
                <input
                  name="imageUrl"
                  type="text"
                  defaultValue={tip?.imageUrl}
                  className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Category */}
              <div>
                <label className="label font-medium text-green-700 dark:text-green-300">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={tip?.category}
                  className="select select-bordered w-full dark:bg-gray-800 dark:text-white"
                  required
                >
                  <option value="">Select</option>
                  <option>Composting</option>
                  <option>Plant Care</option>
                  <option>Vertical Gardening</option>
                  <option>Herbs</option>
                  <option>Container Gardening</option>
                </select>
              </div>

              {/* Availability */}
              <div>
                <label className="label font-medium text-green-700 dark:text-green-300">
                  Availability
                </label>
                <select
                  name="availability"
                  defaultValue={tip?.availability}
                  className="select select-bordered w-full dark:bg-gray-800 dark:text-white"
                  required
                >
                  <option value="">Select</option>
                  <option>Public</option>
                  <option>Hidden</option>
                </select>
              </div>

              {/* User Info (Read Only) */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="label font-medium text-green-700 dark:text-green-300">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={tip?.name}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-600"
                  />
                </div>
                <div className="flex-1">
                  <label className="label font-medium text-green-700 dark:text-green-300">
                    User Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={tip?.email}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-white text-gray-600"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="modal-action mt-6">
                <button type="submit" className="btn btn-success text-white">
                  Update
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setActiveModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
      <tr key={tip._id} className="hover:bg-green-100 dark:hover:bg-green-900">
        <td className="px-4 py-2 dark:text-white">{tip.title}</td>
        <td className="px-4 py-2 dark:text-white">{tip.plantType}</td>
        <td className="px-4 py-2 dark:text-white">{tip.difficulty}</td>
        <td className="px-4 py-2 dark:text-white">{tip.availability}</td>
        <td className="px-4 py-2 text-center">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setActiveModal(!activeModal)}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
              title="Edit Tip"
            >
              <Pencil className="w-5 h-5 cursor-pointer" />
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition"
              title="Delete Tip"
            >
              <Trash2 className="w-5 h-5 cursor-pointer" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyTipsCard;
