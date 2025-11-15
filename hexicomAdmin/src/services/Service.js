import axios from "axios";
import { data } from "react-router-dom";
const BackendUrl = import.meta.env.VITE_BACKEND_URL;
const AccessPoint = import.meta.env.VITE_ACCESS_POINT;

const API_URL = `${BackendUrl}/${AccessPoint}`;

export const addService = async (data,image)=>{
    const formData = new FormData();
    // formData.append("food", JSON.stringify(foodData));
    formData.append("Image", image);
   formData.append("ServiceName", data.ServiceName);
  formData.append("ServiceType", data.ServiceType);
  formData.append("ServiceDetails", data.ServiceDetails);

     try {
      const response = await axios.post(API_URL+"/upload",
        formData,
      //  { headers: { "Content-Type": "multipart/form-data" } }
      );
       return response.data;
      
    } catch (error) {
      alert("Error while adding food");
      console.log(error);
      throw error;
      
    }
}

export const getService = async () =>{
    try {
     const response = await axios.get(API_URL+"/services");
      return response.data;
    } catch (error) {
        console.log('Error fetching food List', error);
        throw error;
    }
}

export const deleteService = async (foodId)=>{
  try {
      const response = await axios.delete(API_URL+"/"+foodId)
   return response.status  === 200;
  } catch (error) {
    
    console.log("error while deleting te food", error);
    throw error; 
  }

}
export const updateService = async (id, updatedData, image) => {
 try {
   const formData = new FormData();

  if (updatedData.ServiceName)
    formData.append("ServiceName", updatedData.ServiceName);

  if (updatedData.ServiceType)
    formData.append("ServiceType", updatedData.ServiceType);

  if (updatedData.ServiceDetails)
    formData.append("ServiceDetails", updatedData.ServiceDetails);

  if (image) formData.append("Image", image);

  const res = await axios.patch(`${API_URL}/${id}`, formData);
  return res.data;
 } catch (error) {
  console.log(error)
 }
};
