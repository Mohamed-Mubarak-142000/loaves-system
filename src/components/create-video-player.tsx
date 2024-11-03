interface CreateVideoPlayerProps {
  url: string;
  classname: string;
}
const CreateVideoPlayer = ({ url, classname }: CreateVideoPlayerProps) => {
  return (
    <div className={classname}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Google Drive Video"
      ></iframe>
    </div>
  );
};

export default CreateVideoPlayer;
