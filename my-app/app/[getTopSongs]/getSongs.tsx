import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
export const TopSongsLong = async () => {
  type Album = {
    images: any[]; // Array of image URLs
  };

  type Artist = {
    name: string;
  };
  type Songs = {
    name: string;
    id: string;
    artists: Artist[];
    album: Album;
  };
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  } else if (session?.user) {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=Long_term",

      {
        headers: {
          Authorization: `Bearer ${(session as any).access_token}`,
        },
      }
    );

    const data = await response.json();

    const topSongs = data.items.map((song: Songs, index: number) => (
      <div key={song.id} className="flex mx-5 md:mx-28 mt-5">
        <span className="mt-10 mx-5">{index + 1}.</span>
        <img
          src={song.album.images[0].url}
          className="bg-spotifyGreen"
          width={100}
          alt=""
        />

        <div className="">
          <p className="mx-10 mt-5 font-bold">{song.name}</p>
          <p className="mx-10 mt-2">{song.artists[0].name}</p>
        </div>
      </div>
    ));
    return topSongs;
  }
};

export const TopSongsShort = async () => {
  type Album = {
    images: any[]; // Array of image URLs
  };

  type Artist = {
    name: string;
  };
  type Songs = {
    name: string;
    id: string;
    artists: Artist[];
    album: Album;
  };
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  } else if (session?.user) {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=Short_term",

      {
        headers: {
          Authorization: `Bearer ${(session as any).access_token}`,
        },
      }
    );

    const data = await response.json();

    const topSongs = data.items.map((song: Songs, index: number) => (
      <div key={song.id} className="flex mx-5 md:mx-28 mt-5">
        <span className="mt-10 mx-5">{index + 1}.</span>
        <img
          src={song.album.images[0].url}
          className="bg-spotifyGreen"
          width={100}
          alt=""
        />

        <div className="">
          <p className="mx-10 mt-5 font-bold">{song.name}</p>
          <p className="mx-10 mt-2">{song.artists[0].name}</p>
        </div>
      </div>
    ));
    return topSongs;
  }
};

export const TopSongsMedium = async () => {
  type Album = {
    images: any[]; // Array of image URLs
  };

  type Artist = {
    name: string;
  };
  type Songs = {
    name: string;
    id: string;
    artists: Artist[];
    album: Album;
  };
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  } else if (session?.user) {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term",

      {
        headers: {
          Authorization: `Bearer ${(session as any).access_token}`,
        },
      }
    );

    const data = await response.json();

    const topSongs = data.items.map((song: Songs, index: number) => (
      <div key={song.id} className="flex mx-5 md:mx-28 mt-5">
        <span className="mt-10 mx-5">{index + 1}.</span>
        <img
          src={song.album.images[0].url}
          className="bg-spotifyGreen"
          width={100}
          alt=""
        />

        <div className="">
          <p className="mx-10 mt-5 font-bold">{song.name}</p>
          <p className="mx-10 mt-2">{song.artists[0].name}</p>
        </div>
      </div>
    ));
    return topSongs;
  }
};
