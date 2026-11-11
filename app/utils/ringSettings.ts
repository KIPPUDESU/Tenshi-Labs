export interface RingSettings {
  // 尺寸
  radius: number; // 半径（SVG 用户单位 ≈ px）
  bandWidth: number; // 带宽
  gapDeg: number; // 缺口角度
  // 运动
  spinDeg: number; // 入场旋转角度（顺时针）
  enterDur: number; // 入场（位移/旋转）时长 s
  growDur: number; // 弧长生长时长 s
  growStart: number; // 起始弧长（占终态百分比）
  fadeDur: number; // 过半后淡出消失的时长 s
  // 渐变
  colorFrom: string; // 起始色（黑侧）
  colorTo: string; // 结束色（深灰侧）
  grayBias: number; // 到达灰侧的百分比位置（越小灰越多）
  // 卡帧闪烁（仅在重影生成瞬间触发）
  jank: boolean;
  jankAmp: number; // 抖动幅度 px
  jankMinOpacity: number; // 闪烁最低透明度
  // 重影（复制环）
  echo: boolean; // 是否启用重影
  echoOffset: number; // 相对原环向右偏移 px
  echoTrigger: number; // 原环中心越过页面宽度的百分之几时生成重影
}

export const defaultRingSettings: RingSettings = {
  radius: 260,
  bandWidth: 100,
  gapDeg: 52,
  spinDeg: 306,
  enterDur: 2.8,
  growDur: 1.2,
  growStart: 26,
  fadeDur: 0.75,
  colorFrom: "#050505",
  colorTo: "#4d4d4d",
  grayBias: 55,
  jank: true,
  jankAmp: 14,
  jankMinOpacity: 0.05,
  echo: true,
  echoOffset: 60,
  echoTrigger: 25,
};
