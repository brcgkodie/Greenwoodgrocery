import React, { useEffect } from "react";
import Visit from "../components/visit/Visit";

export default function VisitPage() {
  useEffect(() => {
    document.title = "Visit | Greenwood Gourmet Grocery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-4">
      <Visit />
    </div>
  );
}
