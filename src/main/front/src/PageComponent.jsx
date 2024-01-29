import {motion } from "framer-motion";
const PageComponent = ({ children }) => {
  return (
      <motion.div
          className="page"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        >
        {children}
        </motion.div>



  );
};
export default PageComponent;
