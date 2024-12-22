import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WeiboShareButton,
  WeiboIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);

  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;
  const url = "https://channelz-three.vercel.app";
  const shareText = `Visit this app now: ${url}`;

  return (
    <Container maxW="container.lg" py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
        <Flex justify="left" gap={5} mt={10}>
          <EmailShareButton
            url={url}
            subject="Check out this profile"
            body={shareText}
          >
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
          <FacebookShareButton url={url} quote={shareText}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
          <FacebookMessengerShareButton url={url} title={shareText}>
            <FacebookMessengerIcon size={40} round={true} />
          </FacebookMessengerShareButton>
          <LinkedinShareButton url={url} title={shareText}>
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
          <RedditShareButton url={url} title={shareText}>
            <RedditIcon size={40} round={true} />
          </RedditShareButton>
          <TelegramShareButton url={url} title={shareText}>
            <TelegramIcon size={40} round={true} />
          </TelegramShareButton>
          <TwitterShareButton url={url} title={shareText}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
          <ViberShareButton url={url} text={shareText}>
            <ViberIcon size={40} round={true} />
          </ViberShareButton>
          <WeiboShareButton url={url} title={shareText}>
            <WeiboIcon size={40} round={true} />
          </WeiboShareButton>
          <WhatsappShareButton url={url} title={shareText}>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
          <PinterestShareButton url={url} media={url} description={shareText}>
            <PinterestIcon size={40} round={true} />
          </PinterestShareButton>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProfilePage;

// skeleton for profile header
const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size="24" />

      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go home
      </Link>
    </Flex>
  );
};
