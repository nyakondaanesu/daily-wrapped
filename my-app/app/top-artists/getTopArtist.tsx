import { auth } from "@/auth";

const GetTopArtists = async () => {
  type Artist = {
    name: string;
    id: string;
    images: any[];
  };
  const session = await auth();

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/artists?limit=10",
    {
      headers: {
        Authorization: `Bearer ${(session as any).access_token}`,
      },
    }
  );

  const data = await response.json();

  const topartist = data.items.map((artist: Artist) => (
    <div key={artist.id} className="flex mx-5 md:mx-28 mt-5">
      <img
        src={artist.images[0].url}
        className="bg-spotifyGreen"
        width={100}
        alt=""
      />

      <p className="my-10 mx-10">{artist.name}</p>
    </div>
  ));
  return topartist;
};

export default GetTopArtists;
