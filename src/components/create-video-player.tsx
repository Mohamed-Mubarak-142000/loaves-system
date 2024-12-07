import { motion } from "framer-motion";

interface CreateVideoPlayerProps {
  url: string;
  classname: string;
}

const CreateVideoPlayer = ({ url, classname }: CreateVideoPlayerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 1 }}
      className={classname}
    >
      <iframe
        src={url}
        width="100%"
        height="100%"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Google Drive Video"
      ></iframe>
    </motion.div>
  );
};

export default CreateVideoPlayer;
