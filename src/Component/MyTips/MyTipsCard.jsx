import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const MyTipsCard = ({ rawTip, setDeletedTips }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [tip, setTips] = useState(rawTip);
  console.log(tip)
  useEffect(() => {
    setTips(rawTip);
  }, [rawTip]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(`http://localhost:5000/gardeners-tips/update/${tip._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(dataResponse => {console.log(dataResponse)
      const updatedData = {
        _id: tip._id,
        ...data
      }
      console.log(updatedData)
      setTips(updatedData)
      setActiveModal(false)
    })
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
          .then((data) => console.log(data));
        setDeletedTips(rawTip);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };


  // const handleEdit = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/gardeners-tips/update/${tip._id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": 'application/json'
  //       },
  //       body: JSON.stringify(updatedData)
  //     })
  //     const data = await response.json();
  //     console.log(data)
  //     if (data.modifiedCount) {
  //       setTips(updatedData)
  //       setActiveModal(false)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <tr key={tip._id} className="hover:bg-green-100">
      {activeModal && (
        <dialog
          id="update_modal"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg text-green-700 mb-4">
              Update Garden Tip
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="label font-medium text-green-700">
                  Title (e.g., “How I Grow Tomatoes Indoors”)
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={tip?.title}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Plant Type / Topic */}
              <div>
                <label className="label font-medium text-green-700">
                  Plant Type / Topic
                </label>
                <input
                  name="plantType"
                  type="text"
                  defaultValue={tip?.plantType}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Difficulty */}
              <div>
                <label className="label font-medium text-green-700">
                  Difficulty Level
                </label>
                <select
                  name="difficulty"
                  defaultValue={tip?.difficulty}
                  className="select select-bordered w-full"
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
                <label className="label font-medium text-green-700">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={tip?.description}
                  className="textarea textarea-bordered w-full"
                  rows={3}
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="label font-medium text-green-700">
                  Image URL
                </label>
                <input
                  name="imageUrl"
                  type="text"
                  defaultValue={tip?.imageUrl}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Category */}
              <div>
                <label className="label font-medium text-green-700">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={tip?.category}
                  className="select select-bordered w-full"
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
                <label className="label font-medium text-green-700">
                  Availability
                </label>
                <select
                  name="availability"
                  defaultValue={tip?.availability}
                  className="select select-bordered w-full"
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
                  <label className="label font-medium text-green-700">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={tip?.name}
                    className="input input-bordered w-full bg-gray-100 text-gray-600"
                  />
                </div>
                <div className="flex-1">
                  <label className="label font-medium text-green-700">
                    User Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={tip?.email}
                    className="input input-bordered w-full bg-gray-100 text-gray-600"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="modal-action mt-6">
                <button type="submit"
                  className="btn btn-success text-white"
                >
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
      <td className="px-4 py-2">{tip.title}</td>
      <td className="px-4 py-2">{tip.plantType}</td>
      <td className="px-4 py-2">{tip.difficulty}</td>
      <td className="px-4 py-2">
        <td className="px-4 py-2">{tip.availability}</td>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setActiveModal(!activeModal)}
            className="text-blue-600 hover:text-blue-800 transition"
            title="Edit Tip"
          >
            <Pencil className="w-5 h-5 cursor-pointer" />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 transition"
            title="Delete Tip"
          >
            <Trash2 className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTipsCard;
