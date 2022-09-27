import { HomeIcon } from '@heroicons/react/20/solid';
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

export const IconList = [
  {
    name: 'Home',
    icon: HomeIcon,
    active: true,
  },
  {
    name: 'Explore',
    icon: HashtagIcon,
  },
  {
    name: 'Notifications',
    icon: BellIcon,
  },
  {
    name: 'Messages',
    icon: InboxIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarkIcon,
  },
  {
    name: 'Lists',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Profile',
    icon: UserIcon,
  },
  {
    name: 'More',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
]