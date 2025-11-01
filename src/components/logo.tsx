import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Mountain className="h-6 w-6 text-primary" />
      <span className="text-lg font-semibold font-headline tracking-tighter">
        Aman Antuley
      </span>
    </Link>
  );
}
