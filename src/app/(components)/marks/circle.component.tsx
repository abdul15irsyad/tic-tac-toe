import { IconCircle, IconProps } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';

export const CircleMark = ({ size }: { size?: IconProps['size'] }) => {
  const theme = useMantineTheme();
  return <IconCircle size={size} color={theme.colors.teal[4]} />;
};
