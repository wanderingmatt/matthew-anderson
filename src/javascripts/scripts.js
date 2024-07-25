import { Fancybox } from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind("[data-fancybox]", {
    Carousel: {
      infinite: false,
    },
    contentClick: false,
    placeFocusBack: false,
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },
  });
});
