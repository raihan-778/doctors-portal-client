import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

import ConformationModal from "../../shared/ConformationModal/ConformationModal";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

const ManageDoctors = () => {
  const [deleteDoctor, setdeleteDoctor] = useState(null);
  const {
    data: doctors = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearar ${localStorage.getItem("access_token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {
        console.error(err);
      }
    },
  });

  const cancelDeleteDoctor = () => {
    setdeleteDoctor(null);
  };

  const handleDeleteDoctor = (doctor) => {
    console.log(doctor);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearea ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${doctor.name} deleted successfully`);
        }
        refetch();
      });
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <h2 className="text-3xl">Manage Doctors: {doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Profile Image</th>
              <th>Doctors' Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="doctor-img" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.speciality}</td>

                <td>
                  <label
                    onClick={() => setdeleteDoctor(doctor)}
                    htmlFor="conformation-modal"
                    className="btn-sx text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm text-center py-1 mr-2 mb-2 px-2"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {deleteDoctor && (
          <ConformationModal
            title={"Do you want to remove this doctor!"}
            message={`Once you have confirmed to remove doctor <>${deleteDoctor.name}</>
                it cannot be undone.`}
            cancelDeleteDoctor={cancelDeleteDoctor}
            successAction={handleDeleteDoctor}
            modalData={deleteDoctor}
          ></ConformationModal>
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
