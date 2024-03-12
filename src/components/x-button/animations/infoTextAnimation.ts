const infoTextAnimation = (hovered:boolean) => ({
  opacity: hovered ? 1 : 0,
  scale:hovered ?1:0.8,
  transition: { delay:0.1, duration: 0.1 },
});

export default infoTextAnimation