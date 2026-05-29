"use client";

import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LayoutGrid, Link as LinkIcon, Share2 } from "lucide-react";

export default function Home() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push("/admin");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-xl font-medium text-zinc-500">로딩 중...</div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="rounded-2xl bg-black p-3 text-white shadow-xl">
            <LinkIcon size={32} />
          </div>
        </div>
        
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
          마이링크 <span className="text-zinc-500">(My-Link)</span>
        </h1>
        
        <p className="mb-12 text-xl text-zinc-600 sm:text-2xl">
          흩어져 있는 당신의 모든 링크를<br />
          하나의 페이지로 통합하여 관리하고 공유하세요.
        </p>

        <div className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <div className="mb-3 rounded-full bg-white p-3 shadow-sm text-zinc-800">
              <LinkIcon size={24} />
            </div>
            <h3 className="font-bold text-zinc-900">링크 통합</h3>
            <p className="text-sm text-zinc-500">SNS, 블로그, 포트폴리오를 한 곳에</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="mb-3 rounded-full bg-white p-3 shadow-sm text-zinc-800">
              <LayoutGrid size={24} />
            </div>
            <h3 className="font-bold text-zinc-900">커스텀 테마</h3>
            <p className="text-sm text-zinc-500">나만의 스타일로 꾸미는 페이지</p>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="mb-3 rounded-full bg-white p-3 shadow-sm text-zinc-800">
              <Share2 size={24} />
            </div>
            <h3 className="font-bold text-zinc-900">쉬운 공유</h3>
            <p className="text-sm text-zinc-500">심플한 URL로 어디서든 공유</p>
          </div>
        </div>

        <Button 
          size="lg" 
          className="h-14 px-8 text-lg font-bold rounded-full shadow-lg transition-all hover:scale-105"
          onClick={signInWithGoogle}
        >
          Google 계정으로 시작하기
        </Button>
        
        <p className="mt-6 text-sm text-zinc-400">
          별도의 가입 절차 없이 구글 로그인만으로 즉시 사용 가능합니다.
        </p>
      </div>
    </main>
  );
}
