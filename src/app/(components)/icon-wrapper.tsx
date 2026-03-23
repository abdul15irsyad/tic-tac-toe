import { TablerIcon } from '@tabler/icons-react';

export type IconWrapperProps = {
  icon: TablerIcon;
} & React.ComponentProps<TablerIcon>;

export const IconWrapper = ({ icon: Icon, ...props }: IconWrapperProps) => {
  return <Icon {...props} />;
};
