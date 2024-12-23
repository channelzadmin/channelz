import { Box, Container, Flex } from "@chakra-ui/react";
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
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  const url = "https://channelz-three.vercel.app";
  const shareText = `Visit this app now: ${url}`;

  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "block", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
      <Box mt={10}>
        <Flex justify="left" gap={5}>
          <EmailShareButton
            url={url}
            subject="Check out this app"
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
        </Flex>
      </Box>
      <Box mt={10}>
        <Flex justify="left" gap={5}>
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
        </Flex>
      </Box>
      <Box mt={10}>
        <Flex justify="left" gap={5}>
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
      </Box>
    </Container>
  );
};

export default HomePage;
