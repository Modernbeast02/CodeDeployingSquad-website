import React from "react";
import Link from "next/link";

function Navlink({ label, tag }) {
  return (
    <li>
      <Link key={tag} href={tag}>
        <div className="hover:bg-[#333] rounded p-2">

          <p className="text-white ">{label}</p>

        </div>
      </Link>
    </li>
  );
}

export default Navlink;
