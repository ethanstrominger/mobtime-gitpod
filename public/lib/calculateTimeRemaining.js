export const calculateTimeRemaining = props => {
  if (!props.timerStartedAt) {
    return props.timerDuration;
  }

  const elapsed = props.actionTime - props.timerStartedAt;
  return props.timerDuration > 0
    ? Math.max(0, props.timerDuration - elapsed)
    : 0;
};
