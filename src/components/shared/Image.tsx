import { default as NextImage, ImageProps } from "next/image";

interface Props extends ImageProps {}

export default function Image(props: Props) {
  const { ...restProps } = props;

  return <NextImage {...restProps} />;
}
