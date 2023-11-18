export interface IProps {
  image: string;
  url: string;
  title: string;
}

const Widget = ({ image, url, title }: IProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <a href={url}>{title}</a>
        </div>
      </div>
    </div>
  );
};

export default Widget;
