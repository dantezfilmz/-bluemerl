// Home.tsx
import React, { useCallback, useState } from 'react';
import { useData, useTheme, useTranslation } from '../hooks/';
import { Block, Product } from '../components/';
import SearchInputBlock from '../components/SearchInput';

import { ImageSourcePropType } from 'react-native';
import ToggleButton from '../components/ToggleButton';

const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const handleProducts = useCallback(
    (selectedTab: number) => {
      setTab(selectedTab);
      setProducts(selectedTab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  return (
    <Block>
      {/* Search input */}
      <SearchInputBlock />

      {/* Toggle products list */}
      <Block
        row
        flex={0}
        align="center"
        justify="center"
        color={colors.card}
        paddingBottom={sizes.sm}>
        <ToggleButton index={0} tab={tab} handleProducts={handleProducts} assets={assets.extras as ImageSourcePropType} {...{ colors, fonts, sizes, t }} />
        <Block gray flex={0} width={1} marginHorizontal={sizes.sm} height={sizes.socialIconSize} />
        <ToggleButton index={1} tab={tab} handleProducts={handleProducts} assets={assets.documentation as ImageSourcePropType} {...{ colors, fonts, sizes, t }} />
      </Block>

      {/* Products list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: sizes.l }}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product) => (
            <Product {...product} key={`card-${product?.id}`} />
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
