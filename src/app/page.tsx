'use client';

import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconBrain,
  IconPlayerPlayFilled,
  IconUsers,
  IconWorld,
} from '@tabler/icons-react';
import Link from 'next/link';

export default () => {
  return (
    <Container size='xl' w={'100%'}>
      <Grid gutter={{ base: 'md' }}>
        <Grid.Col span={7} display='flex'>
          <Stack
            justify='space-between'
            bdrs={'xl'}
            bg={'blue.0'}
            p={'xl'}
            w={'100%'}
          >
            <Box mb={'3rem'}>
              <ThemeIcon size={'4rem'} radius={'lg'} mb={'lg'} color={'blue.6'}>
                <IconUsers />
              </ThemeIcon>
              <Title fz={'h1'} fw={800}>
                Two Player
              </Title>
              <Text>
                Classic couch play. Share the device with your friend and settle
                the score
              </Text>
            </Box>
            <Group justify='space-between'>
              <Badge variant='light'>Same Device</Badge>
              <Button
                component={Link}
                href='/two-players'
                leftSection={<IconPlayerPlayFilled size={'1rem'} />}
                radius={'lg'}
              >
                Play Now
              </Button>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5} display='flex'>
          <Stack
            justify='space-between'
            bdrs={'xl'}
            bg={'teal.0'}
            p={'xl'}
            w={'100%'}
          >
            <Box mb={'3rem'}>
              <ThemeIcon size={'4rem'} radius={'lg'} mb={'lg'} color={'teal.6'}>
                <IconBrain />
              </ThemeIcon>
              <Title fz={'h1'} fw={800}>
                VS Computer
              </Title>
              <Text>
                Challenge our advanced AI. From &quot;Beginner&quot; to
                &quot;Unbeatable&quot; modes.
              </Text>
            </Box>
            <Group justify='space-between'>
              <Badge variant='light' color='teal.6'>
                Solo Mode
              </Badge>
              <Button
                component={Link}
                href='/vs-computer'
                leftSection={<IconPlayerPlayFilled size={'1rem'} />}
                radius={'lg'}
                color='teal.6'
              >
                Play Now
              </Button>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={12} display='flex'>
          <Group
            justify='space-between'
            align='center'
            bdrs={'xl'}
            bg={'dark'}
            p={'xl'}
            w={'100%'}
          >
            <Box maw={'400px'}>
              <Badge color='blue.6' mb={'lg'}>
                Live Now
              </Badge>
              <Title fz={'h1'} fw={800} c={'white'}>
                Multiplayer Lobby
              </Title>
              <Text c={'gray.6'}>
                Climb the global leaderboard and play against players from
                around the world
              </Text>
            </Box>
            <Stack align='center'>
              <AvatarGroup>
                <Avatar src='image.png' />
                <Avatar src='image.png' />
                <Avatar src='image.png' />
                <Avatar>+5</Avatar>
              </AvatarGroup>
              <Button
                component={Link}
                href='/lobby'
                leftSection={<IconWorld size={'1rem'} />}
                radius={'xl'}
                color='blue.6'
                px={'xl'}
                py={'md'}
                h={'auto'}
              >
                Join Arena
              </Button>
            </Stack>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
