'use client';

import React from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <div>the id of this artist is {id}</div>;
}
