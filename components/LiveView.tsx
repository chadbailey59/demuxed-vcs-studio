import React, { Dispatch, SetStateAction } from 'react';
import Tray from './Tray';
import { Pane, Heading, Button, Paragraph, Image } from 'evergreen-ui';
import dynamic from 'next/dynamic';
import { useVCS } from '../contexts/VCSProvider';

const DailyVCSOutput = dynamic(() => import('./DailyVCSOutput'), {
  ssr: false,
});

type Props = {
  compositionReadyCb: any;
  viewportSize: { w: number; h: number };
  startStream: Dispatch<SetStateAction<boolean>>;
};

const LiveView = ({ compositionReadyCb, viewportSize, startStream }: Props) => {
  const {
    isLiveStreaming,
    isRecording,
    startRecording,
    stopRecording,
    stopStreaming,
  } = useVCS();

  const handleStreamToggle = () => {
    if (isLiveStreaming) stopStreaming();
    else startStream(true);
  };

  const handleRecordingToggle = () => {
    if (isRecording) stopRecording();
    else startRecording();
  };

  return (
    <Pane>
      <Pane
        display="flex"
        padding={16}
        background="white"
        alignItems="center"
        borderBottom="muted"
      >
        <Image src="/daily-logo.svg" alt="Daily's Logo" />
        <Pane
          flex={1}
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
          marginLeft={15}
        >
          <Heading size={600}>VCS Studio</Heading>
          <Paragraph color="muted" size={400}>
            Modify the baseline composition parameters to create custom layouts
          </Paragraph>
        </Pane>
        <Pane>
          <Button
            marginRight={16}
            intent={isRecording ? 'danger' : 'none'}
            onClick={handleRecordingToggle}
          >
            {isRecording ? 'Stop Recording' : 'Record'}
          </Button>
          <Button
            marginRight={16}
            appearance="primary"
            intent={isLiveStreaming ? 'danger' : 'none'}
            onClick={handleStreamToggle}
          >
            {isLiveStreaming ? 'Stop Live' : 'Go Live'}
          </Button>
        </Pane>
      </Pane>
      <Pane width={viewportSize.w}>
        <DailyVCSOutput
          compositionReadyCb={compositionReadyCb}
          viewportSize={viewportSize}
        />
      </Pane>
      <Pane position="absolute" bottom={20} left="30%" display="flex">
        <Tray />
      </Pane>
    </Pane>
  );
};

export default LiveView;
