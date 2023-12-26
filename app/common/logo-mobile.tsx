import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoMobile = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<g fill="#635FC7" fillRule="evenodd"><rect width={6} height={25} rx={2} /><rect width={6} height={25} x={9} opacity={0.75} rx={2} /><rect width={6} height={25} x={18} opacity={0.5} rx={2} /></g></svg>;
export default SvgLogoMobile;