import { Fancybox } from "@fancyapps/ui";

function toRomanNumeral(year) {
  const vals = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let result = '';
  for (const [value, numeral] of vals) {
    while (year >= value) {
      result += numeral;
      year -= value;
    }
  }
  return result;
}

const yearEl = document.querySelector('.year');
if (yearEl) yearEl.textContent = toRomanNumeral(new Date().getFullYear());

document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind("[data-fancybox]", {
    Carousel: {
      infinite: false,
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['close'],
        },
      },
      Zoomable: {
        Panzoom: {
          clickAction: false,
        },
      },
    },
    placeFocusBack: false,
  });
});
