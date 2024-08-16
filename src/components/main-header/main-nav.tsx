import { IconBallFootball, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import NavLinkList from '@/components/main-header/nav-link-list';

export default function MainNav() {
  return (
    <div className="md-block">
      <div className="container mx-auto flex h-full items-center justify-start text-white">
        <Link className="mr-8 flex items-center gap-2" href="/">
          <IconBallFootball size={36} />
          <span className="text-xl font-extrabold">커뮤니티</span>
        </Link>

        <nav className="block h-[74px]">
          <ul className="flex h-full items-center space-x-8">
            <NavLinkList />
          </ul>
        </nav>

        <div className="ml-auto hover:text-amber-200">
          <Link className="flex gap-2" href="/login">
            <IconUser stroke={2} />
            <span>로그인</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
