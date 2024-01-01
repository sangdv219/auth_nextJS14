"use client";

import { Header } from "@/components/auth/header";
import {
  Card,
  CardContent,
  CardFoodter,
  CardHeader,
} from "@/components/ui/card";
import { Social } from "./social";
interface CardWrapperProps {
  chidlren: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  chidlren,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{chidlren}</CardContent>
      {showSocial && (
        <CardFoodter>
            <Social/>
        </CardFoodter>
      )}
    </Card>
  );
};
