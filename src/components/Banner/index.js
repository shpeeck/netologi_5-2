// Рекламный баннер

export default function Banner({ image, alt, banStyle }) {
  return <img className={banStyle} src={image} alt={alt} />;
}
