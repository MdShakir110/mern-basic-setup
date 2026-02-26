import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import Button from "../components/common/Button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations/variants";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div
        variants={fadeIn}
        className="bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.name}!
        </h2>
        <p className="text-gray-600 italic">
          This is your production-ready dashboard.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-semibold mb-2">Stat {item}</h3>
            <p className="text-3xl font-bold text-blue-600 font-mono">1,234</p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={fadeIn} className="flex justify-center mt-8">
        <Button variant="danger" onClick={() => dispatch(logout())}>
          Log Out
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
