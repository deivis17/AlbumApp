export const AlbumItem = ({ ...photo }) => {
  return (
    <>
      <div className="card">
        <div className="cover">
          <img src={photo.thumbnailUrl} alt="" />
        </div>
        <div className="title">
          <p>{photo.title}</p>
        </div>
        <div className="more">
          <button className="btn btn-primary">More...</button>
        </div>
      </div>
    </>
  );
};
