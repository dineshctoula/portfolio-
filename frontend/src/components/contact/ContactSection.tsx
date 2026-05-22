import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      console.log("SENDING DATA:", data);

      await api.post("/contact", data);

      setStatusMessage("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setStatusMessage("Failed to send message.");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }
  };

  return (
    <section className="py-32 px-6 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 outline-none"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            })}
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 outline-none"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 outline-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="w-full py-4 rounded-lg bg-cyan-500 font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status */}
        {statusMessage && (
          <p className="text-center text-green-400">
            {statusMessage}
          </p>
        )}
      </motion.form>
    </section>
  );
}