import { Metadata } from "next";
import { CONSTANT_STRINGS } from "@/constants";

const signUpMetadata = CONSTANT_STRINGS.metadata.Auth.SignUp;

export const metadata: Metadata = {
  title: signUpMetadata.title,
};

export default function SignUp() {
  return <div>SignUp</div>;
}
