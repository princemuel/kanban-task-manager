import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconLightTheme = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path fill="#828FA3" d="M9.167 15.833a.833.833 0 0 1 .833.834v.833a.833.833 0 0 1-1.667 0v-.833a.833.833 0 0 1 .834-.834M3.75 13.75a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 0 1-1.18-1.178l1.25-1.25a.833.833 0 0 1 .59-.244m10.833 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.179 1.178l-1.25-1.25a.833.833 0 0 1 .59-1.422ZM9.167 5a4.167 4.167 0 1 1 0 8.334 4.167 4.167 0 0 1 0-8.334m-7.5 3.333a.833.833 0 0 1 0 1.667H.833a.833.833 0 1 1 0-1.667zm15.833 0a.833.833 0 0 1 0 1.667h-.833a.833.833 0 0 1 0-1.667zm-1.667-6.666a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 1 1-1.179-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm-13.333 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.18 1.178L1.91 3.09a.833.833 0 0 1 .59-1.422ZM9.167 0A.833.833 0 0 1 10 .833v.834a.833.833 0 1 1-1.667 0V.833A.833.833 0 0 1 9.167 0" /></svg>;
export default SvgIconLightTheme;