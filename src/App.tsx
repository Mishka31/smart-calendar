import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { customButtons, headerToolbar } from './helpers/calendarHelpers';

function App() {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={headerToolbar}
        firstDay={1}
        customButtons={customButtons}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        dayHeaderFormat={{
          week: 'short',
          day: 'numeric',
          // month: 'short',
        }}
      />
    </>
  );
}

export default App;
