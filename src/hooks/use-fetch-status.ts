"use client";

import { useState } from "react";

type FetchStatus =
  | "idle"
  | "pending"
  | "invalid"
  | "delayed"
  | "canceled"
  | "failed"
  | "success";

export const useFetchStatus = (defaultValue: FetchStatus = "idle") =>
  useState<FetchStatus>(defaultValue);
