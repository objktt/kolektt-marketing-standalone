"use client";

import { useState, useEffect } from "react";
import { SignInModal } from "@/components/sign-in-modal";
import { useMounted } from "@/hooks/use-mounted";

// 개발 모드용 더미 모달 컴포넌트
const DummyModal = ({ dict }: { dict: Record<string, string> }) => {
  return null; // 개발 모드에서는 모달 비활성화
};

export const ModalProvider = ({ dict }: { dict: Record<string, string> }) => {
  const mounted = useMounted();
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    setIsDev(process.env.NODE_ENV === "development");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {isDev ? (
        <DummyModal dict={dict} />
      ) : (
        /* 프로덕션에서만 Clerk 모달 사용 */
        <SignInModal dict={dict} />
      )}
    </>
  );
};
