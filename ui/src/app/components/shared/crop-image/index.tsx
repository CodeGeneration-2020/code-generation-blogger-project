import React from 'react';
import * as Style from './styles';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import BlueButton from '../BlueButton/button.component';
import withTheme from '../../../../HOC/withTheme';
import { ITheme, ICrop } from 'types';

const CropImage: React.FC<{
  imgFile: string;
  widthCrop: number;
  heightCrop: number;
  previewWidth: number;
  previewHeight: number;
  theme?: ITheme;
  onCropImage: (ava: string | boolean) => void;
}> = ({
  imgFile,
  onCropImage,
  widthCrop,
  heightCrop,
  previewWidth,
  previewHeight,
  theme,
}) => {
  const [image, setImage] = React.useState<HTMLImageElement>();
  const [crop, setCrop] = React.useState<ICrop>();

  const initCrop = img => {
    const x = (img.width - widthCrop) / 2;
    const y = (img.height - heightCrop) / 2;
    return {
      unit: 'px',
      width: widthCrop,
      height: heightCrop,
      x,
      y,
    };
  };

  function getCroppedImg() {
    if (image && crop) {
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx: any = canvas.getContext('2d');
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );
      const base64Image = canvas.toDataURL('image/jpeg');
      return onCropImage(base64Image);
    }
  }

  const onImageLoaded = img => {
    setImage(img);
    setCrop(initCrop(img));
    return false;
  };

  const onChnageCrop = crop => {
    if (crop.width < widthCrop || crop.height < heightCrop) {
      return;
    }
    setCrop({ ...crop, aspect: 2 / 2 });
  };

  return (
    <Style.CropImgContainer theme={theme}>
      <div className="preview">
        <ReactCrop
          imageStyle={{
            width: `${previewWidth}px`,
            height: `${previewHeight}px`,
          }}
          src={imgFile}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onChange={onChnageCrop}
        />
        <div className="shadow" />
      </div>

      <div className="buttons">
        <BlueButton
          onClick={() => onCropImage(false)}
          style={{
            width: '239px',
            height: '54px',
            background: 'none',
            border: '1px solid #414D55',
            borderRadius: '8px',
            hover: false,
          }}
        >
          <span className="cancel">Cancel</span>
        </BlueButton>
        <BlueButton
          onClick={getCroppedImg}
          style={{ width: '239px', height: '54px', hover: false }}
        >
          <span className="save">Save Photo</span>
        </BlueButton>
      </div>
    </Style.CropImgContainer>
  );
};

export default withTheme(CropImage);
