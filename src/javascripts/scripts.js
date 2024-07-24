import { Fancybox } from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind("[data-fancybox]", {
    closeButton: 'outside',
    Image: {
      click: false
    },
    infinite: false,
    Thumbs: false,
    Toolbar: false
  });
});
