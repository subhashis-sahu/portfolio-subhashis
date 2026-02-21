import React, { useEffect, useState } from "react";

function ManageWork() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDelete, setSelectedDelete] = useState(null);

  const BASE_URL = "https://subhashissahu.onrender.com/api";
  const token = localStorage.getItem("adminToken");

  const fetchWorks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/public/works`);
      const data = await response.json();
      setWorks(data);
    } catch (error) {
      console.error("Error fetching works:", error);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (!selectedDelete) return;

    try {
      const response = await fetch(
        `${BASE_URL}/admin/works/${selectedDelete.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Unauthorized");

      setSelectedDelete(null);
      fetchWorks();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Manage Works
        </h2>

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading works...
          </div>
        ) : works.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            No works available.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left text-sm text-gray-600 uppercase tracking-wider">
                  <th className="p-4">ID</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Description</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {works.map((work) => (
                  <tr
                    key={work.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{work.id}</td>
                    <td className="p-4 font-medium">{work.tittle}</td>
                    <td className="p-4">{work.describtion}</td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => setSelectedDelete(work)}
                          className="px-3 py-1.5 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition"
                        >
                          Delete
                        </button>

                        <button
                          className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 🔥 Custom Delete Modal */}
      {selectedDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Confirm Delete
            </h3>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {selectedDelete.tittle}
              </span>
              ?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedDelete(null)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageWork;