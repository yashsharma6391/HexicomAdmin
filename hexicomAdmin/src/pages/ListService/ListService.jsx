import React, { useEffect, useState } from "react";
import { asserts } from "../../assets/asserts";
import axios from "axios";
import { toast } from "react-toastify";
import "./ListFood.css";
import { deleteService, getService } from "../../services/Service";
import { useNavigate } from "react-router-dom";
const ListFood = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const data = await getService();
      setList(data);
      console.log(data);
    } catch (error) {
      console.log(error)
      toast.error("Error while reading the Service");
    }
  };
  const removeService = async (foodId) => {
    console.log(foodId);
    try {
      const success = await deleteService(foodId);
      if (success) {
        toast.success("Service deleted Successfully");
        await fetchList();
      } else {
        toast.error("Error while deleting");
      }
    } catch (error) {
      toast.error("Error while deleting");
      // console.log(error)
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className="table">
          <thead>
            <tr className="text-center align-middle">
              <th>S.No</th>
              <th>Image</th>
              <th>ServiceName</th>
              <th>ServiceType</th>
              <th>ServiceDetails</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index} className="text-center align-middle ">
                  <td className="text-center align-middle fs-2">{index + 1}</td>
                  <td className="service-image text-center align-middle">
                    <img src={item.Image?.url} alt="" />
                  </td>
                  <td className="text-center align-middle text-primary fw-bold">
                    {item.ServiceName}
                  </td>
                  <td className="text-center align-middle">
                    {item.ServiceType}
                  </td>

                  
                  <td className="service-details-td">
                    <div className="service-details-content">
                      {(() => {
                        let globalIndex = 1;

                        return item.ServiceDetails.flatMap((detail) =>
                          detail.split(",").map((line) => line.trim())
                        ).map((line, index) => (
                          <div key={index} className="mb-3 d-block w-100 ">
                            <span className="service-number">
                              {globalIndex++}.{" "}
                            </span>
                            <span className="service-text">{line}</span>
                          </div>
                        ));
                      })()}
                    </div>
                  </td>

                  {/* <td>&#8377;{item.price}.00</td> */}
                  <td className="text-danger">
                    <i
                      className="bi bi-x-circle-fill"
                      onClick={() => removeService(item._id)}
                    ></i>
                  </td>
                  <td className="text-warning"> 
                    <i
                      className="btn btn-warning "
                      onClick={() => navigate(`/edit/${item._id}`)}
                    >
                      Edit
                    </i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFood;
