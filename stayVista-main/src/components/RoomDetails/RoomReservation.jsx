import PropTypes from "prop-types";
import Button from "../Shared/Button/Button";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { differenceInCalendarDays } from "date-fns";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomReservation = ({ room, refetch }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('daily');
  const [state, setState] = useState([
    {
      startDate: new Date(room.from),
      endDate: new Date(room.to),
      key: "selection",
    },
  ]);

  const closeModal = () => {
    setIsOpen(false);
  };

  // Calculate price based on duration
  const calculatePrice = () => {
    const dailyPrice = room?.price;

    switch (selectedDuration) {
      case 'monthly':
        return dailyPrice * 30;
      case 'sixMonthly':
        return dailyPrice * 180;
      case 'yearly':
        return dailyPrice * 365;
      default:
        return parseInt(
          differenceInCalendarDays(new Date(room.to), new Date(room.from))
        ) * dailyPrice;
    }
  };

  const totalPrice = calculatePrice();

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-1">
          <div className="text-2xl font-semibold">$ {room?.price}</div>
          <div className="font-light text-neutral-600">/night</div>
        </div>

        {/* Duration Selection */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Select Duration</label>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-rose-500"
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="sixMonthly">Six Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <hr />
      {selectedDuration === 'daily' && (
        <div className="flex justify-center">
          <DateRange
            showDateDisplay={false}
            rangeColors={["#F54B68"]}
            onChange={(item) => {
              setState([
                {
                  startDate: new Date(room.from),
                  endDate: new Date(room.to),
                  key: "selection",
                },
              ]);
            }}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      )}
      <hr />
      <div className="p-4">
        <Button
          disabled={room?.booked}
          onClick={() => setIsOpen(true)}
          label={room?.booked ? "Booked" : "Reserve"}
        />
      </div>

      {/* Modal */}
      <BookingModal
        isOpen={isOpen}
        refetch={refetch}
        closeModal={closeModal}
        bookingInfo={{
          ...room,
          price: totalPrice,
          duration: selectedDuration,
          guest: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }}
      />
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
}

RoomReservation.propTypes = {
  room: PropTypes.object,
  refetch: PropTypes.func
};

export default RoomReservation;
