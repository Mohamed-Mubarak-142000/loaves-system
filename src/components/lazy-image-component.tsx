interface Props {
  src: string;
  alt: string;
  className: string;
}
const LazyImageComponent = ({ src, alt, className }: Props) => {
  return (
    <div className={className}>
      <img className="w-full h-full" alt={alt} src={src} />
    </div>
  );
};

export default LazyImageComponent;
