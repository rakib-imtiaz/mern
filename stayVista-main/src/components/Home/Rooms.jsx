import Card from "./Card";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const Rooms = () => {
  const axiosCommon = useAxiosCommon();
  const [params] = useSearchParams();
  const category = params.get("category");

  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms", category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${category}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-gray-50 py-12">
    <Container>
        <Heading
          title={category ? `${category} Stays` : "All Available Stays"}
          subtitle="Explore our selection of amazing properties"
          center={true}
        />

      {rooms && rooms.length > 0 ? (
          <motion.div
            className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {rooms.map((room) => (
              <motion.div key={room._id} variants={itemVariants}>
                <Card room={room} />
              </motion.div>
          ))}
          </motion.div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
              <button
                onClick={() => window.history.back()}
                className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
              >
                Go Back
              </button>
            </div>
        </div>
      )}
    </Container>
    </div>
  );
};

export default Rooms;
