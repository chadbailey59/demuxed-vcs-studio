import { Param } from '../types/params';

export const videoParams: Param[] = [
  {
    id: 'video.url',
    label: 'Video URL',
    type: 'string',
    defaultValue:
      'https://cdn.glitch.me/6b5fe90d-e616-42db-81ac-2ff6c1626118/BigBuckBunny.mp4',
  },
  {
    id: 'video.start',
    label: 'Start video',
    type: 'button',
    defaultValue: 0,
  },
];
