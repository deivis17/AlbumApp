import { album } from "../data/album";
import { AlbumItem } from "./AlbumItem/AlbumItem";

export const AlbumList = () => {
  return (
    <div className="container">
     { album.map(photo=>
      <AlbumItem key={photo.id} {...photo} />)}
    </div>
  );
};
