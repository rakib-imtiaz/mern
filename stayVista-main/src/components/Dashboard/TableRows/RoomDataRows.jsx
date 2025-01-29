/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import UpdateRoomModal from "../../Modal/UpdateRoomModal";

const RoomDataRow = ({ room, handleDetete,refetch }) => {
  /**----------------------
   * For Delete Modal
   * ---------------------- */
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  /**----------------------
   * For update Modal
   * ---------------------- */

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={room?.image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{room?.title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{room?.location}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">${room?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(room?.from), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {format(new Date(room?.to), "P")}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </button>
        {/* Delete modal start */}
        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDetete={handleDetete}
          id={room?._id}
        />
        {/* <>
          
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                <DialogTitle className="font-bold">
                  Deactivate account
                </DialogTitle>
                <Description>
                  This will permanently deactivate your account
                </Description>
                <p>
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                  <button onClick={() => setIsOpen(false)}>Deactivate</button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </> */}
        {/* Delete modal end */}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update</span>
        </button>
        {/* Update Modal */}
        <UpdateRoomModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          room={room}
          refetch={refetch}
        />
      </td>
    </tr>
  );
};

RoomDataRow.propTypes = {
  room: PropTypes.object,
  refetch: PropTypes.func,
  handleDetete: PropTypes.func,
};

export default RoomDataRow;
