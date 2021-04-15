//한번 할당했다가, 변환할 이유가 없기 때문, let이 아니라, const로 상수변수로 할당 (상수(常數, constant)는 '항상 같은 수')
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    //   console.log(`${x} ${y}`);

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    //   vertical.style.left = `${x}px`; //스타일을 지정할때는 px를 붙혀야한다!
    //   horizontal.style.top = `${y}px`;
    //   target.style.left = `${x}px`;
    //   target.style.top = `${y}px`;
    //   tag.style.left = `${x}px`;
    //   tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
