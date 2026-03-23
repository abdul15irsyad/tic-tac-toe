'use client';

import { AppShell, Group, Anchor, Box, Text } from '@mantine/core';
import { IconSettings, ReactNode } from '@tabler/icons-react';
import Link from 'next/link';

const menus = [
  // { href: '/', label: 'Home' },
  { href: '/two-players', label: 'Two Players' },
  { href: '/vs-computer', label: 'VS Computer' },
  { href: '/lobby', label: 'Lobby' },
];

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header bd={'none'}>
        <Group h='100%' px='lg' justify='space-between'>
          <Group gap='5rem'>
            <Text fw={800} fz='h4' component={Link} href={'/'}>
              Tic Tac Toe
            </Text>
            <Group gap='xl' visibleFrom='sm'>
              {menus.map((menu, index) => (
                <Anchor
                  key={index}
                  component={Link}
                  underline='never'
                  href={menu.href}
                  c='gray.7'
                  fw={600}
                >
                  {menu.label}
                </Anchor>
              ))}
            </Group>
          </Group>
          <Group>
            <IconSettings />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main
        display='flex'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box pt={'md'}>{children}</Box>
      </AppShell.Main>
    </AppShell>
  );
};
