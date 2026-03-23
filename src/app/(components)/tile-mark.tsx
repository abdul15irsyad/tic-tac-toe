import { IconX } from '@tabler/icons-react';
import { IconWrapper, IconWrapperProps } from './icon-wrapper';
import { useMantineTheme } from '@mantine/core';

export const TileMark = (props: IconWrapperProps) => {
  const theme = useMantineTheme();
  return (
    <IconWrapper
      stroke={3}
      color={props.icon === IconX ? theme.colors.red[4] : theme.colors.blue[6]}
      {...props}
    />
  );
};
