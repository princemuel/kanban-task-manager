import * as React from "react";
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
} from "./images";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {}

export const icons = {
  board: {
    task: (props: IconProps) => <IconAddTask {...props} />,
    board: (props: IconProps) => <IconBoard {...props} />,
    check: (props: IconProps) => <IconCheck {...props} />,
    cross: (props: IconProps) => <IconCross {...props} />,
    ellipsis: (props: IconProps) => <IconEllipsisVertical {...props} />,
  },
  logo: {
    dark: (props: IconProps) => <LogoLight {...props} />,
    light: (props: IconProps) => <LogoDark {...props} />,
    mobile: (props: IconProps) => <LogoMobile {...props} />,
  },
  mode: {
    sun: (props: IconProps) => <IconSun {...props} />,
    moon: (props: IconProps) => <IconMoon {...props} />,
  },
  sidebar: {
    show: (props: IconProps) => <IconSidebarShow {...props} />,
    hide: (props: IconProps) => <IconSidebarHide {...props} />,
  },
  chevron: {
    up: (props: IconProps) => <IconChevronUp {...props} />,
    down: (props: IconProps) => <IconChevronDown {...props} />,
  },
};
