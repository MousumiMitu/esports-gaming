import Team from "@/assets/teamLogo/team.png";
import Team2 from "@/assets/teamLogo/team2.png";
import Team3 from "@/assets/teamLogo/team3.png";
import Team4 from "@/assets/teamLogo/team4.png";
import Team5 from "@/assets/teamLogo/team5.png";
import games from "@/assets/games/game1.png";
import games2 from "@/assets/games/game2.jpg";
import games3 from "@/assets/games/game3.png";
import GamingIcon from "@/assets/icons/gaming";
import LiveIcon from "@/assets/icons/LiveIcon";
import TournamentIcon from "@/assets/icons/TournamentIcon";
import user1 from "@/assets/user1.jpg";
import user2 from "@/assets/user2.jpg";
import user3 from "@/assets/user4.jpg";
import user4 from "@/assets/user5.jpg";

export const battleCards = [
  { id: 15, image: Team },
  { id: 14, image: Team2 },
  { id: 17, image: Team3 },
  { id: 18, image: Team4 },
  { id: 19, image: Team5 },
  { id: 157, image: Team },
  { id: 145, image: Team2 },
  { id: 178, image: Team3 },
  { id: 185, image: Team4 },
];

export const gamesCards = [
  { id: 15, image: games, team: Team2, name: "Game Fusion" },

  { id: 14, image: games2, team: Team3, name: "Miracle Gamer" },
  { id: 17, image: games3, team: Team4, name: "Cyber Smoke killer" },
  // { id: 145, image: games },
];

export const featuresCards = [
  { id: 15, image: GamingIcon, name: "Gaming News" },
  { id: 14, image: LiveIcon, name: "Live Streaming" },
  { id: 17, image: TournamentIcon, name: "Great Tournament" },
];

export const featuresCards2 = [
  { id: 15, state: "Daily User", title: "1.6K", plus: true },
  { id: 14, state: "Game Downloads", title: "40M" },
  { id: 17, state: "Gaming Project", title: "100", plus: true },
  { id: 18, state: "Liked Games", title: "3.6M" },
];
export const streamersCards = [
  { id: 15, image: user1, name: "John Doe" },
  { id: 14, image: user2, name: "John Doe" },
  { id: 17, image: user4, name: "John Doe" },
  { id: 18, image: user3, name: "John Doe" },
];
