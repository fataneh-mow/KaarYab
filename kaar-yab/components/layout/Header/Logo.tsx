import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500 text-white">
        <BriefcaseBusiness size={22} />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-slate-900 dark:text-white">
          KaarYab
        </span>

        <span className="text-xs text-slate-500 dark:text-slate-400">
          Afghanistan
        </span>
      </div>
    </Link>
  );
}