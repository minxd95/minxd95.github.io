import React, { useState, useEffect } from "react";
import "@/styles/sakura-effect.css";

interface Petal {
  id: number;
  size: number;
  startPosLeft: number;
  startPosTop: number;
  animation: string;
}

const SakuraEffect: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addPetal = (): void => {
    const documentHeight = document.documentElement.clientHeight;
    const documentWidth = document.documentElement.clientWidth;

    const maxSize = 14;
    const minSize = 9;
    const fallSpeed = 3;

    const blowAnimations = [
      "blow-soft-left",
      "blow-medium-left",
      "blow-hard-left",
      "blow-soft-right",
      "blow-medium-right",
      "blow-hard-right",
    ];
    const swayAnimations = [
      "sway-0",
      "sway-1",
      "sway-2",
      "sway-3",
      "sway-4",
      "sway-5",
      "sway-6",
      "sway-7",
      "sway-8",
    ];

    const blowAnimation =
      blowAnimations[Math.floor(Math.random() * blowAnimations.length)];
    const swayAnimation =
      swayAnimations[Math.floor(Math.random() * swayAnimations.length)];
    const fallTime =
      (Math.round(documentHeight * 0.007) + Math.random() * 5) * fallSpeed;

    const size = getRandomInt(minSize, maxSize);
    const startPosLeft = Math.random() * documentWidth - 100;
    const startPosTop = -(Math.random() * 20 + 15);

    const newPetal: Petal = {
      id: Math.random(),
      size,
      startPosLeft,
      startPosTop,
      animation: `fall ${fallTime}s linear 0s 1, ${blowAnimation} ${
        (fallTime > 30 ? fallTime : 30) - 20 + getRandomInt(0, 20)
      }s linear 0s infinite, ${swayAnimation} ${getRandomInt(
        2,
        4
      )}s linear 0s infinite`,
    };

    setPetals((currentPetals) => [...currentPetals, newPetal]);
  };

  useEffect(() => {
    const intervalId = setInterval(addPetal, 300);

    return () => clearInterval(intervalId);
  }, []);

  const removePetal = (petalId: number): void => {
    setPetals((currentPetals) =>
      currentPetals.filter((petal) => petal.id !== petalId)
    );
  };

  return (
    <div className="fixed w-full h-full pointer-events-none z-particle">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura"
          style={{
            width: petal.size,
            height: petal.size,
            left: petal.startPosLeft,
            marginTop: petal.startPosTop,
            animation: petal.animation,
          }}
          onAnimationEnd={() => removePetal(petal.id)}
        />
      ))}
    </div>
  );
};

export default SakuraEffect;
