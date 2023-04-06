import React from "react";
import Text from "./Text";
import { Link } from "gatsby";

type Props = {};

export default function Menu({}: Props) {
  return (
    <div className="bg-white py-12 px-24 flex justify-between">
      <div>
        <Text as="h1" className="underline decoration-emerald-400">
          WaitToFit.
        </Text>
      </div>
      <div className="text-center my-auto flex justify-between w-1/4">
        <Link to="/">
          <Text as="h3Link">Exercices</Text>
        </Link>
        <Link to="/">
          <Text as="h3Link">Boutique</Text>
        </Link>
        <Link to="/">
          <Text as="h3Link">Mon profil</Text>
        </Link>
      </div>
    </div>
  );
}
