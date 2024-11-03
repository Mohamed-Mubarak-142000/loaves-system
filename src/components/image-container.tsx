// ImageContainer.js
import React, { Suspense } from "react";
const LazyImage = React.lazy(() => import("./lazy-image-component"));
interface Props {
  src: string;
  alt: string;
  className: string;
}
const ImageContainer = ({ src, alt, className }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyImage src={src} alt={alt} className={className} />
    </Suspense>
  );
};

export default ImageContainer;
