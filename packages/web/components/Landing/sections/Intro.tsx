import { Box, Image, Text, VStack } from '@metafam/ds';
import BackgroundImage from 'assets/landing/intro-background.png';
import MetaGameLogo from 'assets/landing/synthlogo-2.svg';

export const Intro: React.FC = () => (
  <Box
    width="100%"
    minHeight="100%"
    maxHeight="100%"
    backgroundImage={`url(${BackgroundImage})`}
    bgPosition="center"
    bgSize="cover"
  >
    <VStack
      spacing="1.5rem"
      flexDirection="column"
      justifyContent="flex-end"
      display="flex"
      alignItems="center"
      width="100%"
      height="100vh"
      pb="4.875rem"
    >
      <Image src={MetaGameLogo} />
      <Text
        fontSize="1rem"
        fontWeight="normal"
        color="white"
        mt="0.625rem"
        mb="2.188rem"
      >
        A Massive Online Coordination Game
      </Text>
    </VStack>
  </Box>
);
