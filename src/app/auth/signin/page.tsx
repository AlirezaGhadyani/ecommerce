import { Metadata } from "next";
import { CONSTANT_STRINGS } from "@/constants";

const signInMetadata = CONSTANT_STRINGS.metadata.Auth.SignIn;

export const metadata: Metadata = {
  title: signInMetadata.title,
};

export default function SignIn() {
  return <div>SignIn</div>;
}
