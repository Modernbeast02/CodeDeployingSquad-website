import React from "react";
import Link from "next/link";

function Navlink({ label }) {
  return (
    <div className="hover:bg-[#333] rounded p-2">
      <li>
        <Link href={`#${label}`} className="text-white ">
          {label}
        </Link>
      </li>
    </div>
  );
}

export default Navlink;
