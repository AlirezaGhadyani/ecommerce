import { Image } from "@/components/shared";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const appName = process.env.NEXT_PUBLIC_APP_NAME || "";

const defaultProps: Props = {
  src: "/images/Logo",
  alt: appName,
  width: 200,
  height: 150,
};

export default function AppLogo(props: Props = defaultProps) {
  const { alt, ...restProps } = props;

  return <Image {...restProps} alt={alt} />;
}
