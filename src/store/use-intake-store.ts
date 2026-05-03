"use client";

import { create } from "zustand";

import type { ContactInfo } from "@/lib/schemas/intake.schema";

type IntakeDraftState = {
  contact?: ContactInfo;
  setContact: (contact: ContactInfo) => void;
  reset: () => void;
};

export const useIntakeStore = create<IntakeDraftState>((set) => ({
  contact: undefined,
  setContact: (contact) => set({ contact }),
  reset: () => set({ contact: undefined }),
}));
