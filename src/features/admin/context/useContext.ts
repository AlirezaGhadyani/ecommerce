"use client";
import { useContext } from "react";
import { context } from "./context";

export default function useAdminContext() {
  return useContext(context);
}
