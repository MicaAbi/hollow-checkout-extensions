import {
  BlockSpacer,
  BlockStack,
  Divider,
  InlineLayout,
  Image,
  Text,
  reactExtension,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {title, icon1: merchantIcon1, text1: merchantText1 , icon2, text2, icon3, text3 , icon4, text4 } = useSettings();

  const icon1 = merchantIcon1 ?? 'https://cdn.shopify.com/s/files/1/0270/6509/0108/files/icon-risk-free.svg?v=1706565788';
  const text1 = merchantText1 ?? 'Example: Try Risk Free for 30-Days';

  return (
    <>
      <Divider />
      <BlockSpacer />
      <BlockStack>
        {title && <Text size="large" emphasis="bold">{title}</Text>}
        { (text1 || icon1) &&
          <InlineLayout columns={[45, 'fill']} blockAlignment="center" spacing="small100">
            <Image source={icon1} loading="lazy" />
            <Text>{text1}</Text>
          </InlineLayout>
        }
        { (text2 || icon2) && 
          <InlineLayout columns={[45, 'fill']} blockAlignment="center" spacing="small100">
            <Image source={icon2} loading="lazy" />
            <Text>{text2}</Text>
          </InlineLayout>
        }
        { (text3 || icon3) && 
          <InlineLayout columns={[45, 'fill']} blockAlignment="center" spacing="small100">
            <Image source={icon3} loading="lazy" />
            <Text>{text3}</Text>
          </InlineLayout>
        }
        { (text4 || icon4) && 
          <InlineLayout columns={[45, 'fill']} blockAlignment="center" spacing="small100">
            <Image source={icon4} loading="lazy" />
            <Text>{text4}</Text>
          </InlineLayout>
        }
      </BlockStack>
      <BlockSpacer />
      <Divider />
    </>
  );
}