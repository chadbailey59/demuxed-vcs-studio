import React from 'react';
import { Pane } from 'evergreen-ui';
import { useCall } from '../../contexts/CallProvider';
import TrayButton from './TrayButton';
import { useLocalParticipant } from '@daily-co/daily-react-hooks';
import { ReactComponent as IconMicOff } from '../../icons/mic-off-md.svg';
import { ReactComponent as IconMicOn } from '../../icons/mic-on-md.svg';
import { ReactComponent as IconCameraOff } from '../../icons/camera-off-md.svg';
import { ReactComponent as IconCameraOn } from '../../icons/camera-on-md.svg';
import { ReactComponent as IconShare } from '../../icons/share-md.svg';

const Index = () => {
  const { callFrame } = useCall();
  const localParticipant = useLocalParticipant();

  return (
    <Pane
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={20}
      marginTop={24}
      padding={10}
    >
      <TrayButton
        label={localParticipant?.video ? 'Turn off' : 'Turn on'}
        Icon={localParticipant?.video ? IconCameraOn : IconCameraOff}
        onClick={() => callFrame.setLocalVideo(!localParticipant?.video)}
        muted={!localParticipant?.video}
      />
      <TrayButton
        label={localParticipant?.audio ? 'Mute' : 'Unmute'}
        Icon={localParticipant?.audio ? IconMicOn : IconMicOff}
        onClick={() => callFrame.setLocalAudio(!localParticipant?.audio)}
        muted={!localParticipant?.audio}
      />
      <TrayButton
        label={localParticipant?.screen ? 'Stop' : 'Share'}
        Icon={IconShare}
        onClick={() =>
          localParticipant?.screen
            ? callFrame.stopScreenShare()
            : callFrame.startScreenShare()
        }
        muted={!localParticipant?.screen}
      />
    </Pane>
  );
};

export default Index;