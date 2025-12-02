// src/components/ui/InfoCard.tsx
import React from "react";
import { Card } from "./Card";
import { Caption } from "./Typography";
import { Body } from "./Typography";

type InfoCardProps = {
  title: string;
  text: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => (
  <Card hover>
    <Caption className="mb-2">
      {title}
    </Caption>
    <Body className="mt-2">
      {text}
    </Body>
  </Card>
);

