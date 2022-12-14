import React from 'react';
import { Pane } from 'evergreen-ui';
import ViewSettings from './View';
import { useVCS } from '../../contexts/VCSProvider';
import TextSettings from './Text';
import ImageSettings from './Image';
import AssetSettings from './Assets';
import PeopleSettings from './People';
import ToastSettings from './Toast';
import VideoSettings from './Video';

const Settings = () => {
  const { activeTab } = useVCS();

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'view':
        return <ViewSettings />;
      case 'text':
        return <TextSettings />;
      case 'image':
        return <ImageSettings />;
      case 'toast':
        return <ToastSettings />;
      case 'video':
        return <VideoSettings />;
      case 'assets':
        return <AssetSettings />;
      case 'people':
        return <PeopleSettings />;
    }
  };

  return (
    <Pane padding={0} height="100vh" borderLeft="muted">
      <Pane display="flex" flexDirection="column" height="100%">
        <Pane padding={24} overflow="auto" height="90%" maxHeight="100%">
          {renderActiveTab()}
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Settings;
