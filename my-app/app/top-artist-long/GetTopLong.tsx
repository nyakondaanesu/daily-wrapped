import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
const GetTopLong = async () => {
  type Artist = {
    name: string;
    id: string;
    images: any[];
  };
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  } else if (session?.user) {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=10&time_range=Long_term",

      {
        headers: {
          Authorization: `Bearer ${(session as any).access_token}`,
        },
      }
    );

    const data = await response.json();

    const topartist = data.items.map((artist: Artist, index: number) => (
      <div key={artist.id} className="flex mx-5 md:mx-28 mt-5">
        <span className="mt-10 mx-5">{index + 1}.</span>
        <img
          src={artist.images[0].url}
          className="bg-spotifyGreen"
          width={100}
          alt=""
        />

        <p className="mx-10 mt-10">{artist.name}</p>
      </div>
    ));
    return topartist;
  }
};

export default GetTopLong;
