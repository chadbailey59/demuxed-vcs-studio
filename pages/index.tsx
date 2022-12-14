import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Button, Heading, Pane, Text } from 'evergreen-ui';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const startCall = async () => {
    /*
    const options = { method: 'POST' };
    fetch('/api/createRoom', options)
      .then(res => res.json())
      .then(response => router.push(`/${response.name}`));
      */
    const join = (owner: boolean = false) => {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          isOwner: owner,
          roomName,
        }),
      };
      fetch('/api/createToken', options)
        .then(rt => rt.json())
        .then(resToken => setToken(resToken.token));
    };
    router.push('/demuxed');
  };

  return (
    <Pane>
      <Head>
        <title>Demuxed VCS Studio</title>
        <meta
          name="description"
          content="Custom composite a live stream in real-time with Daily"
        />
      </Head>

      <Header />
      <Pane
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="90vh"
        gap="15px">
        <Heading size={900}>VCS Studio</Heading>
        <Text size={500}>
          Custom composite a live stream in real-time with Daily
        </Text>

        <Pane display="flex" padding={10}>
          <Button appearance="primary" onClick={startCall}>
            Join call
          </Button>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Index;
