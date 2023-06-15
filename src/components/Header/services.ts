/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable func-names */
function handleScroll() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const doc = document as any;
    if (prevScrollpos > currentScrollPos) {
      doc.getElementById('navbar').style.top = '0';
    } else {
      doc.getElementById('navbar').style.top = '-80px';
    }
    prevScrollpos = currentScrollPos;
  };
}

handleScroll();

export { handleScroll };
