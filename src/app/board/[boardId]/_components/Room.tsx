"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children, roomId}: { children: ReactNode, roomId: string }) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_GtqmC6OJ6o1zkyxAoM4Ag78WNqy9za57XTqfVyAB1dDtyzOGjuctPWbkApiJAfYd"}>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div className="flex min-h-screen justify-center items-center">Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}