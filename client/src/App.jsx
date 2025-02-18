import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [action, setAction] = useState("Sign Up"); // Manage Sign Up/Login action
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [popup, setPopup] = useState({ message: "", success: null }); // Popup state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        action === "Sign Up"
          ? "http://localhost:4000/signup"
          : "http://localhost:4000/login";

      const response = await axios.post(url, formData);
      setPopup({ message: response.data.message, success: true }); // Green background for success
    } catch (error) {
      if (error.response) {
        setPopup({ message: error.response.data.message, success: false }); // Red background for error
      } else {
        setPopup({ message: "An error occurred. Please try again.", success: false });
      }
    }
  };

  // Clear form and toggle action
  const toggleAction = () => {
    setAction(action === "Sign Up" ? "Login" : "Sign Up");
    setPopup({ message: "", success: null }); // Clear popup
    setFormData({ username: "", password: "" }); // Reset form
  };

  return (
    <div className="bg-banner-image bg-cover h-[100vh]">
      <div className="flex justify-center items-center h-full">
        <div className="lg:w-[450px] bg-white py-20 px-10 rounded-bl-[40px] rounded-se-[40px]">
          <h1 className="text-4xl text-center mb-6 transition-all">{action}</h1>

          {/* Popup Message */}
          {popup.message && (
            <div
              className={`p-4 rounded mb-4 text-center transition-all ${
                popup.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {popup.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="w-full">
              <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded transition-all">
                <IoPerson className="text-gray-700 text-xl" />
                <input
                  type="text"
                  className="bg-transparent border-none outline-none"
                  placeholder="Your Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="bg-gray-200 flex items-center gap-5 my-4 p-4 rounded">
                <RiLockPasswordFill className="text-gray-700 text-xl" />
                <input
                  type="password"
                  className="bg-transparent border-none outline-none"
                  placeholder="Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex space-x-12">
                <button
                  type="submit"
                  className="bg-gray-900 text-white py-2 w-36 rounded-3xl"
                >
                  {action}
                </button>
                <button
                  type="button"
                  className="bg-gray-900 text-white py-2 w-36 rounded-3xl"
                  onClick={toggleAction}
                >
                  Switch to {action === "Sign Up" ? "Login" : "Sign Up"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
