(function(window) {

  var Day = Calendar.Template.create({
    hour: function() {
      var hour = this.h('hour');
      var l10n = '';
      var displayHour;

      if (hour === Calendar.Calc.ALLDAY) {
        l10n = ' data-l10n-id="hour-allday" ';
        displayHour = navigator.mozL10n.get('hour-allday');
      } else {
        displayHour = this.h('displayHour');
      }

      return '<section class="hour hour-' + hour+ ' ' + this.h('classes') + ' calendar-display">' +
          '<h4>' +
            '<span ' + l10n + 'class="display-hour ' + hour + '">' +
              displayHour +
            '</span>' +
          '</h4>' +
          /** has no semantic value - re-evaluate */
          '<div class="events">' + this.s('items') + '</div>' +
        '</section>';
    },

    attendee: function() {
      return '<span class="attendee">' + this.h('value') + '</span>';
    },

    event: function() {
      var calendarId = this.h('calendarId');
      return '<section class="event calendar-id-' + calendarId + ' ' +
             'calendar-display" data-id="' + this.h('busytimeId') + '">' +
          '<div class="container calendar-id-' + calendarId + ' calendar-color">' +
            '<h5>' + this.h('title') + '</h5>' +
            '<span class="details">' +
              '<span class="location">' +
                this.h('location') +
              '</span>' +
              this.s('attendees') +
            '</span>' +
          '</div>' +
        '</section>';
    }
  });

  Day.eventSelector = '.event';
  Day.hourEventsSelector = '.events';

  Calendar.ns('Templates').Day = Day;
}(this));
