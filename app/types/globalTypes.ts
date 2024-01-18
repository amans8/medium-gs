export interface BlogDetails {
  uri?: string;
  title: string;
  description: string;
  tag?: string;
  localImage?: string;
  name?: string;
  slug?: string;
}

export interface StarPick {
  uri?: string;
  name: string;
  msg?: string;
  tagLine: string;
}

export interface StarPicksProps {
  staffPicks: StarPick[];
}

export interface WhoToFollow {
  uri?: string;
  name: string;
  about: string;
}
export interface WhoToFollowProps {
  whoToFollow: WhoToFollow[];
}
