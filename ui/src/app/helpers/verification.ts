export async function verifyImage(
  image,
  minWidth: number,
  minHeight: number,
  maxWidth: number,
  maxHeight: number,
) {
  const img = new Image();
  img.src = URL.createObjectURL(image);
  return new Promise((resolve, reject) => {
    img.onload = () => {
      if (
        img.width < minWidth ||
        img.height < minHeight ||
        img.width > maxWidth ||
        img.height > maxHeight
      ) {
        reject(false);
      }
      resolve(true);
    };
  })
    .then(verify => verify)
    .catch(error => error);
}
