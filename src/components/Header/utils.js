//@flow strict
export function calculateBackgroundOffset(width: number) {
  let offsetX = 0;
  let offsetY = 0;
  switch (true) {
    case width >= 1600:
      offsetY = -width * 0.1;
      break;
    case width >= 1400:
      offsetY = -width * 0.09;
      break;
    case width >= 1200:
      offsetY = -width * 0.08;
      break;
    case width >= 1060:
      offsetY = -width * 0.07;
      break;
    case width >= 992:
      offsetY = -width * 0.06;
      break;
    case width >= 900:
      offsetX = width * 0.2;
      break;
    case width >= 870:
      offsetX = width * 0.2;
      break;
    case width >= 768:
      offsetX = width * 0.2;
      offsetY = width * 0.06;
      break;
    case width >= 576:
      offsetX = width * 0.35;
      offsetY = width * 0.15;
      break;
    case width >= 535:
      offsetX = width * 0.35;
      offsetY = width * 0.4;
      break;
    case width >= 460:
      offsetX = width * 0.35;
      offsetY = width * 0.45;
      break;
    case width >= 300:
      offsetX = width * 0.4;
      offsetY = width * 0.5;
      break;
    default:
      offsetX = 0;
      offsetY = 0;
      break;
  }

  return { offsetX, offsetY };
}
