import { useState, useEffect } from 'react';
import {
  BlockStack,
  Grid,
  GridItem,
  Image,
  InlineLayout,
  Style,
  Text,
  View,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const [seconds, setSeconds] = useState(900);
  const [bgImage, setbgImage] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Mobi|Android|webOS|iPhone|iPad|iPod/i.test(userAgent);
  
    if(isMobile) {
      setbgImage('https://cdn.shopify.com/s/files/1/0270/6509/0108/files/countdown-bg-mobile-2.png?v=1706555318')
    } else {
      setbgImage('https://cdn.shopify.com/s/files/1/0270/6509/0108/files/countdown-bg-desktop.png?v=1706538301')
    }
  }, []);

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);

  // Format the remaining time (e.g., "00:05:10" for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <Grid
        columns='fill'
        rows={0}
      >
        <GridItem columnSpan={1} rowSpan={1}>
          <View border="none" padding="none">
            <Image source={bgImage} loading="eager"/>
          </View>
        </GridItem>
      </Grid>
      <Grid
        columns='fill'
        rows={Style.default(100).when({viewportInlineSize: {min: 'small'}}, 83)}
        blockAlignment="center"
      >
        <InlineLayout columns={[54, 'fill']} blockAlignment="center" padding={Style.default(['small200']).when({viewportInlineSize: {min: 'small'}}, 'base')} spacing="base">
          <View padding={['none', 'none', 'none', 'base']} inlineAlignment="center">
            <Image source="https://cdn.shopify.com/s/files/1/0270/6509/0108/files/sending-order.svg?v=1706303564" loading="lazy" />
          </View>
          <BlockStack spacing="none">
            <Text size="medium" emphasis="bold">Items in your cart are high demand</Text>
            <Text size="base" appearance="subdued">Order in the next<Text emphasis="bold"> {formatTime(seconds)} </Text>to guarantee your discounts!</Text>
          </BlockStack>
        </InlineLayout>
      </Grid>
    </>
  );
}