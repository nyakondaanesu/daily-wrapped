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
  const topG: Artist = data.items[0];
  console.log(topG.images[0].url);

  const topartist = data.items.map((artist: Artist) => (
    <li key={artist.id}>{artist.name}</li>
  ));
  return topartist;
};

export default GetTopArtists;
