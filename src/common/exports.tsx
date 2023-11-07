import {
  IconAddTask,
  IconBoard,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconCross,
  IconEllipsisVertical,
  IconMoon,
  IconSidebarHide,
  IconSidebarShow,
  IconSun,
  LogoDark,
  LogoLight,
  LogoMobile,
} from './assets';

type IconObject = 'board' | 'logo' | 'mode' | 'sidebar' | 'chevron';

export const icons: Record<
  IconObject,
  Record<string, (props: IconProps) => React.JSX.Element>
> = {
  board: {
    task: (props) => <IconAddTask {...props} />,
    board: (props) => <IconBoard {...props} />,
    check: (props) => <IconCheck {...props} />,
    cross: (props) => <IconCross {...props} />,
    ellipsis: (props) => <IconEllipsisVertical {...props} />,
  },
  logo: {
    dark: (props) => <LogoLight {...props} />,
    light: (props) => <LogoDark {...props} />,
    mobile: (props) => <LogoMobile {...props} />,
  },
  mode: {
    sun: (props) => <IconSun {...props} />,
    moon: (props) => <IconMoon {...props} />,
  },
  sidebar: {
    show: (props) => <IconSidebarShow {...props} />,
    hide: (props) => <IconSidebarHide {...props} />,
  },
  chevron: {
    up: (props) => <IconChevronUp {...props} />,
    down: (props) => <IconChevronDown {...props} />,
  },
};
