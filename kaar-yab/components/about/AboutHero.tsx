import Link from "next/link";

import { Button } from "@/components/common";
import CommonHero from "@/components/common/CommonHero";


export default function AboutHero() {

    return (

        <CommonHero

            badge="About KaarYab Afghanistan"

            title={
                <>
                    Connecting Afghan Youth
                    <span className="block text-sky-300">
                        With Better Opportunities
                    </span>
                </>
            }

            description="
                KaarYab is an opportunity finder platform that helps
                students, graduates, and professionals discover jobs,
                internships, scholarships, remote work, and skill-building
                opportunities in one place.
            "

        >

            <Link href="/opportunities">

                <Button>
                    Explore Opportunities
                </Button>

            </Link>


        </CommonHero>

    );

}