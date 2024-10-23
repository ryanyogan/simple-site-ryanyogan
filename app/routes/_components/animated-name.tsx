import { Link } from "@remix-run/react";

export function AnimatedName() {
  return (
    <Link viewTransition to="/" className="font-medium text-gray-400">
      Ryan Yogan
    </Link>
  );
}
