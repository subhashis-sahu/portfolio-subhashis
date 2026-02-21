import React, { useEffect, useState } from "react";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  const BASE_URL = "https://subhashissahu.onrender.com/api";
  const token = localStorage.getItem("adminToken");

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/admin/allContacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const viewContact = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setSelectedContact(data); // open modal
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">All Contacts</h2>

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Loading contacts...
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600 uppercase">
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{contact.id}</td>
                  <td className="p-4 font-medium">{contact.name}</td>
                  <td className="p-4">{contact.email}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => viewContact(contact.id)}
                      className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Custom Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

            <div className="space-y-3">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {selectedContact.name}
              </p>

              <p>
                <span className="font-medium">Email:</span>{" "}
                {selectedContact.email}
              </p>

              <p>
                <span className="font-medium">Message:</span>{" "}
                {selectedContact.message}
              </p>
            </div>

            <button
              onClick={() => setSelectedContact(null)}
              className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;