import DisplaySongs from "../[getTopSongs]/displaySongs";
import {
  TopSongsLong,
  TopSongsMedium,
  TopSongsShort,
} from "../[getTopSongs]/getSongs";
import Navbar from "../navbar";

const page = () => {
  return (
    <DisplaySongs
      navbarChild={<Navbar pageType="Top Artists" />}
      short_termChildren={<TopSongsShort />}
      long_termChildren={<TopSongsLong />}
      medium_termChildren={<TopSongsMedium />}
    ></DisplaySongs>
  );
};

export default page;
