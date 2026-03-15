'use client';

import dynamic from 'next/dynamic';

const FloatingShapesScene = dynamic(
  () => import('./FloatingShapesScene').then((mod) => mod.FloatingShapesScene),
  { ssr: false }
);

export function FloatingShapes() {
  return <FloatingShapesScene />;
}
