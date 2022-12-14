import React from 'react';
import { Pane } from 'evergreen-ui';
import IconButton from './IconButton';
import { ReactComponent as IconView } from '../../icons/view-md.svg';
import { ReactComponent as IconText } from '../../icons/text-md.svg';
import { ReactComponent as IconToast } from '../../icons/toast-md.svg';
import { ReactComponent as IconImage } from '../../icons/image-md.svg';
import { ReactComponent as IconAssets } from '../../icons/assets-md.svg';
import { ReactComponent as IconPeople } from '../../icons/people-md.svg';
import { useVCS } from '../../contexts/VCSProvider';
import { ReactComponent as IconVideo } from '../../icons/camera-on-md.svg';

const Sidebar = () => {
  const { activeTab, setActiveTab, isRecording, isLiveStreaming } = useVCS();
  return (
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={20}
      position="fixed"
      background="white">
      <IconButton
        label="View"
        Icon={IconView}
        onClick={() => setActiveTab('view')}
        isActive={activeTab === 'view'}
      />
      <IconButton
        label="Text"
        Icon={IconText}
        onClick={() => setActiveTab('text')}
        isActive={activeTab === 'text'}
      />
      <IconButton
        label="Image"
        Icon={IconImage}
        onClick={() => setActiveTab('image')}
        isActive={activeTab === 'image'}
      />
      <IconButton
        label="Toast"
        Icon={IconToast}
        onClick={() => setActiveTab('toast')}
        isActive={activeTab === 'toast'}
      />
      <IconButton
        label="Video"
        Icon={IconVideo}
        onClick={() => setActiveTab('video')}
        isActive={activeTab === 'video'}
      />
      <IconButton
        label="Assets"
        Icon={IconAssets}
        disabled={isRecording || isLiveStreaming}
        onClick={() => setActiveTab('assets')}
        isActive={activeTab === 'assets'}
      />
      <IconButton
        label="People"
        Icon={IconPeople}
        onClick={() => setActiveTab('people')}
        isActive={activeTab === 'people'}
      />
    </Pane>
  );
};

export default Sidebar;
