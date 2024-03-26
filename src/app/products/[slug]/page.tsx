import React from "react";

export default function Products({ params }: { params: { slug: string } }) {
  return (
    <main>
          <p className="bg-orange-400">{params.slug}</p>
    </main>
  );
}
