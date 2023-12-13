export const headerToolbar = {
  left: 'prev,next today colorsButton',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay',
};

export const customButtons = {
  colorsButton: {
    text: 'Colors',
    click: (event: MouseEvent, element: HTMLElement) => {
      alert('Colors');
    },
  },
};
