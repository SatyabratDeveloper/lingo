import Image from "next/image";

import { Button } from "@/components/ui/button";
import Doctor from "@/public/LodingPageImage/icons/doctor.png";
import LabTech from "@/public/LodingPageImage/icons/lab.png";
import Nurse from "@/public/LodingPageImage/icons/nurse.png";
import Pharmacist from "@/public/LodingPageImage/icons/pharmacist.png";
import Radiologist from "@/public/LodingPageImage/icons/radiologist.png";
import Dentiest from "@/public/LodingPageImage/icons/tooth.png";

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-center gap-2">
        <Button
          size="lg"
          variant="ghost"
          className="font-extrabold hover:bg-transparent"
        >
          <Image
            src={Doctor}
            alt="Doctor"
            height={36}
            className="mr-4 rounded-md"
          />
          Doctor
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="font-extrabold hover:bg-transparent"
        >
          <Image
            src={Nurse}
            alt="Nurse"
            height={36}
            className="mr-4 rounded-md"
          />
          Nurse
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="font-extrabold hover:bg-transparent"
        >
          <Image
            src={Pharmacist}
            alt="Pharmacist"
            height={36}
            className="mr-4 rounded-md"
          />
          Pharmacist
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="font-extrabold hover:bg-transparent"
        >
          <Image
            src={Dentiest}
            alt="Dentiest"
            height={36}
            className="mr-4 rounded-md"
          />
          Dentiest
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="font-extrabold hover:bg-transparent"
        >
          <Image
            src={Radiologist}
            alt="Radiologist"
            height={36}
            className="mr-4 rounded-md"
          />
          Radiologist
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="font-extrabold hover:bg-transparent"
        >
          <Image
            src={LabTech}
            alt="Lab_Technician"
            height={36}
            className="mr-4 rounded-md"
          />
          Lab Technician
        </Button>
      </div>
    </div>
  );
};
