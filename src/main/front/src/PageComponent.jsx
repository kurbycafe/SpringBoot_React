import {motion } from "framer-motion";
const PageComponent = ({ children }) => {
  return (
      <motion.div
          className="page"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: 50 }}
        >
        {children}
        </motion.div>



  );
};
export default PageComponent;
