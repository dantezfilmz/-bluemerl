import React from 'react';
import { useTranslation } from '../hooks/';
import { Block, Input } from '../components/';
import { useTheme } from '../hooks';

const SearchInputBlock: React.FC = () => {
  const { t } = useTranslation();
  const { colors, sizes } = useTheme();

  return (
    <Block color={colors.card} flex={0} padding={sizes.padding}>
      <Input search placeholder={t('common.searchCustomer')} />
    </Block>
  );
};

export default SearchInputBlock;
