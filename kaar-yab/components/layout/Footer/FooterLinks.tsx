import Link from "next/link";

interface FooterLinksProps {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
}

export default function FooterLinks({
    title,
    links,
}: FooterLinksProps) {
    return (
        <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
                {title}
            </h3>

            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}