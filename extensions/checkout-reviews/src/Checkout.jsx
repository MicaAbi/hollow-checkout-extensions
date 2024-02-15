import {
  BlockStack,
  Grid,
  GridItem,
  InlineLayout,
  Image,
  Style,
  Text,
  View,
  reactExtension,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
); 

function Extension() {
  const {image: merchantImage, caption: merchantCaption, stars: merchantStars , date: merchantDate, title: merchantTitle, description: merchantDescription, name: merchantName, white_bg } = useSettings();

  const image = merchantImage ?? 'https://cdn.shopify.com/s/files/1/0270/6509/0108/files/boot-socks.png?v=1706283314';
  const caption = merchantCaption ?? 'Boot Socks';
  const stars = merchantStars ?? 'https://cdn.shopify.com/s/files/1/0270/6509/0108/files/review-stars.svg?v=1706285652';
  const date = merchantDate ?? '04/11/23';
  const title = merchantTitle ?? 'Best Socks!';
  const description = merchantDescription ?? 'These are the most comfortable socks. Excellent fit, soft, and warm.';
  const name = merchantName ?? 'Janny V';

  return (
    <>
      { white_bg &&
        <Grid
          columns='fill'
          rows={0}
        >
          <GridItem columnSpan={1} rowSpan={1}>
            <View border="none" borderRadius="base" padding="none" maxBlockSize={185} overflow="hidden">
              <Image maxBlockSize={185} source="https://cdn.shopify.com/s/files/1/0270/6509/0108/files/bg-white.png?v=1706574658" loading="lazy"/>
            </View>
          </GridItem>
        </Grid>
      }
      <InlineLayout columns={['35%', 'fill']} blockAlignment="start" spacing="loose" cornerRadius="base" padding={Style.default(['large100', 'small300']).when({viewportInlineSize: {min: 'small'}}, 'large100')}>
        <BlockStack spacing="tight">
          <Image source={image} loading="lazy" />
          <Text size="small">{caption}</Text>
        </BlockStack>
        <BlockStack spacing="tight">
          <InlineLayout columns={Style.default([70, 'fill']).when({viewportInlineSize: {min: 'small'}}, [100, 'fill'])} blockAlignment="center" spacing="tight">
            <Image source={stars} loading="lazy" />
            <Text appearance="subdued" size="extraSmall">{date}</Text>
          </InlineLayout>
            <Text size="medium" emphasis="bold">{title}</Text>
            <Text>{description}</Text>
            <Text appearance="subdued" emphasis="bold">{name}</Text>
        </BlockStack>
      </InlineLayout>
    </>
  );
}