import IconAddTask from "@/assets/icon-add-task-mobile.inline.svg";
import IconBoard from "@/assets/icon-board.inline.svg";
import IconCheck from "@/assets/icon-check.inline.svg";
import IconChevronDown from "@/assets/icon-chevron-down.inline.svg";
import IconChevronUp from "@/assets/icon-chevron-up.inline.svg";
import IconCross from "@/assets/icon-cross.inline.svg";
import IconMoon from "@/assets/icon-dark-theme.inline.svg";
import IconSidebarHide from "@/assets/icon-hide-sidebar.inline.svg";
import IconSun from "@/assets/icon-light-theme.inline.svg";
import IconSidebarShow from "@/assets/icon-show-sidebar.inline.svg";
import IconEllipsisVertical from "@/assets/icon-vertical-ellipsis.inline.svg";
import LogoDark from "@/assets/logo-dark.inline.svg";
import LogoLight from "@/assets/logo-light.inline.svg";
import LogoMobile from "@/assets/logo-mobile.inline.svg";

type IconObject = "board" | "logo" | "mode" | "sidebar" | "chevron";

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
