import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "@/public/aidemy_md_logo.jpeg";
import Dentiest from "@/public/LodingPageImage/dentist.svg";
import Doctor from "@/public/LodingPageImage/doctor.svg";
import LabTech from "@/public/LodingPageImage/lab tech.svg";
import Nurse from "@/public/LodingPageImage/nurse.svg";
import Physio from "@/public/LodingPageImage/Physio.svg";
import Radiologist from "@/public/LodingPageImage/radiologist.svg";

export default function MarketingPage() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-5 p-4 lg:flex-row">
      <div className="relative mb-8 h-60 w-60 lg:mb-0 lg:h-[400px] lg:w-[400px]">
        <Image
          src={Doctor}
          alt="Doctor"
          height={130}
          className="absolute left-1/2 top-0 -translate-x-1/2"
        />
        <Image
          src={Nurse}
          alt="Nurse"
          height={130}
          className="absolute left-12 top-1/4 -translate-y-1/4"
        />
        <Image
          src={Dentiest}
          alt="Dentiest"
          height={130}
          className="absolute right-10 top-1/4 -translate-y-1/4"
        />
        <Image
          src={Logo}
          alt="logo"
          height={110}
          className="absolute right-40 top-40 rounded-lg"
        />
        <Image
          src={Physio}
          alt="Physio"
          height={135}
          className="absolute right-0 top-3/4 -translate-y-3/4"
        />
        <Image
          src={LabTech}
          alt="LabTech"
          height={130}
          className="absolute top-3/4 -translate-y-3/4"
        />
        <Image
          src={Radiologist}
          alt="Radiologist"
          height={130}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center text-xl font-extrabold tracking-wide text-gray-700 lg:text-3xl">
          <p>Turn study time into play time</p>
          <p>Smart & fun way to learn medicine</p>
        </h1>

        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton mode="modal">
                <Button size="lg" variant="secondaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
