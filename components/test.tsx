import React from 'react';

import Link from 'next/link'

export default function Header() {

  return (

    <header className="text-gray-600 body-font">
      <Link>
        <button>페이지 이동</button>
      </Link>
    </header>

  );
}