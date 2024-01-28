import { useEffect, useState } from "react";
import { EmpireBranchImageDto } from "../../dtos/empire-branch-image.dto";
import { randomInt } from "../../util/util";
import "./BranchGallery.css";

type GalleryImage = EmpireBranchImageDto & {
  top: string;
  left: string;
  zIndex: number;
  transform: string;
  opacity: number;
};

interface BranchGalleryProps {
  images: EmpireBranchImageDto[];
}

const BranchGallery = ({ images }: BranchGalleryProps) => {
  const [imageList, setImageList] = useState<GalleryImage[]>([]);

  const rotateImageList = (imageIndex: number) => {
    setImageList((prev) => {
      prev[imageIndex].opacity = 0;
      return [...prev];
    });

    setTimeout(() => {
      setImageList((prev) => {
        prev.forEach((image) => {
          image.zIndex = image.zIndex < prev.length ? image.zIndex + 1 : 1;
          image.top = `${randomInt(-15, 15)}px`;
          image.left = `${randomInt(-15, 15)}px`;
          image.transform = `rotate(${randomInt(-4, 4)}deg)`;
        });
        return [...prev];
      });
    }, 500);

    setTimeout(() => {
      setImageList((prev) => {
        prev[imageIndex].opacity = 1;
        return [...prev];
      });
    }, 750);
  };

  useEffect(
    () =>
      setImageList(
        images.toReversed().map((image, index) => ({
          ...image,
          top: `${randomInt(-15, 15)}px`,
          left: `${randomInt(-15, 15)}px`,
          zIndex: index + 1,
          transform: `rotate(${randomInt(-4, 4)}deg)`,
          opacity: 1,
        }))
      ),
    [images]
  );

  return (
    <div className="branch-gallery">
      {imageList.map((image, index) => (
        <div
          key={image.url}
          className="branch-gallery-card"
          style={{
            top: image.top,
            left: image.left,
            transform: image.transform,
            zIndex: image.zIndex,
            opacity: image.opacity,
          }}
        >
          <img
            src={image.url}
            alt={image.title}
            className="branch-gallery-card-img"
            onClick={() => rotateImageList(index)}
          />
          <h3 className="branch-gallery-card-title">{image.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BranchGallery;
