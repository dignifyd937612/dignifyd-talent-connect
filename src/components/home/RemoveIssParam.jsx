"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function RemoveIssParam() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(params.toString());

    if (searchParams.has("iss")) {
      searchParams.delete("iss");

      router.replace(
        searchParams.toString() ? `?${searchParams.toString()}` : "/",
      );
    }
  }, [params, router]);

  return null;
}
