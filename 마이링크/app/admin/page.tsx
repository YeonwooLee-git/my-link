"use client";

import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut, Share, ExternalLink } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    };
    fetchProfile();
  }, [user]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-xl font-medium text-zinc-500">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold tracking-tight">마이링크 관리자</h1>
          {profile && (
            <div className="hidden rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 sm:block">
              mylink.com/@{profile.displayName}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Share size={16} />
            <span className="hidden sm:inline">링크 공유</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={logout} className="gap-2 text-zinc-500 hover:text-red-600">
            <LogOut size={16} />
            <span className="hidden sm:inline">로그아웃</span>
          </Button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Editor Section (Left) */}
        <section className="flex-1 overflow-y-auto p-6 lg:p-12">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10">
              <h2 className="mb-6 text-2xl font-bold text-zinc-900">프로필 설정</h2>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">디스플레이 이름</label>
                    <input 
                      type="text" 
                      defaultValue={profile?.displayName}
                      className="w-full rounded-lg border border-zinc-200 p-2 focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">소개글</label>
                    <textarea 
                      rows={3}
                      defaultValue={profile?.bio}
                      className="w-full rounded-lg border border-zinc-200 p-2 focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="자신을 소개해보세요"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-zinc-900">링크 관리</h2>
                <Button>+ 새 링크 추가</Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white p-12 text-zinc-400">
                  아직 추가된 링크가 없습니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section (Right) */}
        <section className="hidden w-[400px] border-l bg-zinc-100 p-12 lg:block xl:w-[500px]">
          <div className="sticky top-28 flex justify-center">
            {/* Mobile Frame */}
            <div className="relative h-[700px] w-[350px] overflow-hidden rounded-[3rem] border-[8px] border-zinc-900 bg-white shadow-2xl">
              <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-zinc-900"></div>
              
              <div className="h-full overflow-y-auto p-8 pt-12 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-20 w-20 rounded-full bg-zinc-200 animate-pulse"></div>
                </div>
                <h3 className="text-lg font-bold">@{profile?.displayName || "username"}</h3>
                <p className="mt-2 text-sm text-zinc-500">{profile?.bio || "소개글이 여기에 표시됩니다."}</p>
                
                <div className="mt-8 space-y-3">
                  {/* Preview Buttons */}
                  <div className="h-12 w-full rounded-xl bg-zinc-50 border border-zinc-100 animate-pulse"></div>
                  <div className="h-12 w-full rounded-xl bg-zinc-50 border border-zinc-100 animate-pulse"></div>
                </div>

                <div className="absolute bottom-8 left-0 w-full text-center">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">My-Link</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
