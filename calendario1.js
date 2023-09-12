document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        timeZone: 'UTC',
        allDay: true,
    
        // editable: true,
        events: [
            {
                id: '1',
                title: 'Exibir',
                start: '2023-08-25',
                endStr: '2023-08-29',
                description: 'Ajuste de visualização',
            },
            {
                id: '2',
                title: 'Ajuste',
                start: '2023-08-01',
                end: '2023-08-02',
                description: 'Ajuste de visualização',
            },
            {
                id: '3',
                title: 'Adiciona',
                start: '2023-08-11',
                end: '2023-08-14',
                description: 'Ajuste de visualização',
            }
        ]
    });
    calendar.render();
});