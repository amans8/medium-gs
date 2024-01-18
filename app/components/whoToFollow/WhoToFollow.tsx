import { Box } from "@gluestack-ui/themed";
import styles from "./WhoToFollow.module.css";
import { WhoToFollow, WhoToFollowProps } from "@/app/types/globalTypes";
import WhoToFollowCard from "./WhoToFollowCard";
import Heading from "../Heading";

const WhoToFollow = ({ whoToFollow }: WhoToFollowProps) => {
  return (
    <Box mt={42}>
      <Heading title="Who to follow" />
      {whoToFollow.map((profile: WhoToFollow, index: number) => (
        <WhoToFollowCard
          key={index}
          uri={profile.uri}
          name={profile.name}
          about={profile.about}
        />
      ))}
      <a href="/" className={styles.full_list}>
        See the full list{" "}
      </a>
    </Box>
  );
};

export default WhoToFollow;
