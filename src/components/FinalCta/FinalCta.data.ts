import type { Decoration } from "./FinalCta.types";
import { fromCenter, rem } from "./FinalCta.utils";

export const decorations: Decoration[] = [
  { file: "cta-square-filled-top", w: 136, h: 113, style: { right: 0, top: 0 } },
  { file: "cta-circle-outline-large", w: 108, h: 108, style: { left: fromCenter(22), top: rem(16) } },
  { file: "cta-circle-outline-small", w: 32, h: 32, style: { left: fromCenter(877), top: rem(43) } },
  { file: "cta-square-outline", w: 67, h: 67, style: { left: fromCenter(317), top: rem(42.5) } },
  { file: "cta-icon-drop", w: 62, h: 62, style: { left: fromCenter(1016.25), top: rem(82) } },
  { file: "cta-icon-layers", w: 160, h: 160, style: { left: fromCenter(1079.75), top: rem(180.25) } },
  { file: "cta-icon-chat", w: 32, h: 32, style: { left: fromCenter(141.25), top: rem(214.25) } },
  { file: "cta-square-filled-left", w: 34, h: 67, style: { left: 0, top: rem(230) } },
  { file: "cta-icon-bold", w: 102, h: 102, style: { left: fromCenter(271.75), top: rem(360) } },
  { file: "cta-icon-panels", w: 48, h: 48, style: { left: fromCenter(962.75), top: rem(380.75) } },
  { file: "cta-circle-outline-small", w: 32, h: 32, style: { left: fromCenter(1208), top: rem(429) } },
  { file: "cta-circle-filled", w: 120, h: 97, style: { left: fromCenter(56), bottom: rem(-0.5) } },
  { file: "cta-circle-edge", w: 40, h: 2, style: { left: fromCenter(1064), bottom: rem(-0.5) } },
];
