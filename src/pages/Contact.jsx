import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const API = import.meta.env.VITE_API;

  // OPTIONAL: single axios instance
  const http = axios.create({ baseURL: API, withCredentials: false });

  const [input, setinput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "",
  });

  const [loading, setloading] = useState(false);
  const [cat, setcat] = useState([]);

  const onChangeHandle = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      // JSON payload; don't add headers—axios sets Content-Type automatically
      const res = await http.post(`/contacts/contact`, input);

      // ✅ treat 2xx as success unless success===false
      if (res.status >= 200 && res.status < 300 && res?.data?.success !== false) {
        toast.success(res?.data?.message || "Submitted ✅");
        setinput({ name: "", email: "", phone: "", message: "", category: "" });
      } else {
        toast.error(res?.data?.message || "Failed to submit");
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong";
      console.log("submit error:", error?.response?.data || error);
      toast.error(msg);
    } finally {
      setloading(false);
    }
  };

  const getCat = async () => {
    try {
      const res = await http.get(`/category/getcat`);
      setcat(res.data?.category || []);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load categories");
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="bg-gray-100 w-[100vw] min-h-screen mt-[5px] flex flex-col items-center">
      <div className="mt-[20px] text-center">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <p>Drop us a message & let's work together!</p>
      </div>

      <form onSubmit={onSubmitHandle}>
        <div className="w-[100%] bg-white shadow-2xl rounded-2xl p-[20px] mt-[20px] ">
          <div>
            YOUR NAME:
            <input
              name="name"
              onChange={onChangeHandle}
              value={input.name}
              className="w-[90%] p-[10px] border-1 "
              type="text"
              required
            />
          </div>

          <div className="mt-[10px]">
            <select
              name="category"
              value={input.category}
              onChange={onChangeHandle}
              className="w-[90%] border rounded-lg p-3"
              required
            >
              <option value="">-- Select Category --</option>
              {cat?.map((items) => (
                <option key={items._id} value={items._id}>
                  {items.name}
                </option>
              ))}
             
            </select>
          </div>

          <div className="mt-[10px]">
            YOUR EMAIL:
            <input
              name="email"
              onChange={onChangeHandle}
              value={input.email}
              className="w-[90%] p-[10px] border-1 "
              type="email"
              required
            />
          </div>

          <div className="mt-[10px]">
            YOUR MOBILE NUMBER:
            <input
              name="phone"
              onChange={onChangeHandle}
              value={input.phone}
              className="w-[90%] p-[10px] border-1 "
              type="tel"
              inputMode="numeric"
            />
          </div>

          <div className="mt-[10px]">
            YOUR MESSAGE:
            <textarea
              name="message"
              onChange={onChangeHandle}
              value={input.message}
              className="w-[90%] p-[10px] border-1 "
              required
            />
          </div>

          <div className="mt-[10px]">
            <button type="submit" className="bg-green-700 w-[90%] p-[10px] ">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;