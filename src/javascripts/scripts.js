import { Fancybox } from "@fancyapps/ui";

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
