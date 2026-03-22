import { useMantineTheme } from '@mantine/core';
import { IconProps, IconX } from '@tabler/icons-react';

export const XMark = ({ size }: { size?: IconProps['size'] }) => {
  const theme = useMantineTheme();
  return <IconX size={size} color={theme.colors.red[4]} />;
};
