import DisplayTopArtists from "../[getTopArtists]/displayTopArtists";
import {
  TopArtistLong,
  TopArtistMedium,
  TopArtistShort,
} from "../[getTopArtists]/getArtists";
import Navbar from "../navbar";

const page = () => {
  return (
    <DisplayTopArtists
      navbarChild={<Navbar pageType="Top Songs" />}
      short_termChildren={<TopArtistShort />}
      long_termChildren={<TopArtistLong />}
      medium_termChildren={<TopArtistMedium />}
    ></DisplayTopArtists>
  );
};

export default page;
