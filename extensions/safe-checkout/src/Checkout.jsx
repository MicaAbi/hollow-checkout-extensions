import {
  Grid,
  Image,
  InlineLayout,
  Style,
  Text,
  View,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.actions.render-before',
  () => <Extension />,
);

function Extension() {

  return (
    <Grid columns={Style.default('fill').when({viewportInlineSize: {min: 'small'}}, ['45%', '55%'])}
        inlineAlignment="center"
        blockAlignment="center" 
        padding={["small200", "large100"]} 
        spacing={Style.default('small100').when({viewportInlineSize: {min: 'small'}}, 'large200')}
        border="base"
        cornerRadius="base">
      <View minInlineSize="fill"
          padding={Style.default(['none', 'none', 'small200', 'none']).when({viewportInlineSize: {min: 'small'}}, ['none', 'small200', 'none', 'none'])} 
          border={Style.default(['none', 'none', 'base', 'none']).when({viewportInlineSize: {min: 'small'}}, ['none', 'base', 'none', 'none'])}
          >
        <InlineLayout spacing="small200"
            inlineAlignment="center"
            columns={[14, 'auto']} 
            blockAlignment="center">
          <Image source="https://cdn.shopify.com/s/files/1/0270/6509/0108/files/padlock.svg?v=1706187091" loading="lazy"/>
          <Text size="base">Guaranteed<Text size="base" emphasis="bold"> Safe </Text>Checkout</Text>
        </InlineLayout>
      </View>
      <View maxInlineSize={400}
          padding={Style.default('none').when({viewportInlineSize: {min: 'small'}}, ['none', 'small200', 'none', 'none'])}>
        <Image source="https://cdn.shopify.com/s/files/1/0270/6509/0108/files/safe-checkout.png?v=1706187102" loading="lazy" />
      </View>
    </Grid>
  );
}