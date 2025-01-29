import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import { Helmet } from "react-helmet-async";
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const { user } = useAuth();
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')
  const [tourImagePreview, setTourImagePreview] = useState()
  const [tourImageText, setTourImageText] = useState('Upload 360° Image')

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  /**---------------------------------
 *      Date range handler         *
 ----------------------------------*/
  const handleDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };

  const { mutateAsync } = useMutation({

    mutationFn: async (roomData) => {
      const { data } = await axiosSecure.post(`/room`, roomData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved successfully');
      toast.success('Room Added Successfully!')
      navigate('/dashboard/my-listings')

      setLoading(false)
    }

  })





  /**---------------------------------
 *      Form handler                *
 ----------------------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const tourImage = form.tourImage?.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };

    try {
      const image_url = await imageUpload(image);
      let tour_image_url = null;
      if (tourImage) {
        tour_image_url = await imageUpload(tourImage);
      }

      const roomData = {
        location,
        category,
        title,
        to,
        from,
        price,
        guests,
        bathrooms,
        bedrooms,
        description,
        host,
        image: image_url,
        tourImage: tour_image_url,
      };
      console.table(roomData);

      // post request to server 
      await mutateAsync(roomData)


    } catch (err) {
      console.log(err);
      toast.error(err.message)
      setLoading(false)
    }
  };

  /**---------------------------------
*       handle image Chaange                *
----------------------------------*/

  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name)
  }

  const handleTourImage = image => {
    setTourImagePreview(URL.createObjectURL(image));
    setTourImageText(image.name)
  }



  return (

    <>
      <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet>

      {/* Form  */}
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
        handleTourImage={handleTourImage}
        tourImagePreview={tourImagePreview}
        tourImageText={tourImageText}
      />
    </>

  );
};

export default AddRoom;
