import React, {Component} from "react";
import Menu from "../menu";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';

const FORMAT = 'DD.MM.YYYY, HH:mm:ss';

class ReactBootstrapDaterangepickerPage extends Component {
  render() {
    const start = moment();
    const end = moment();

    return <main>
      <h1>react-bootstrap-daterangepicker</h1>
      <Menu />
      <div style={{padding: '30px 0'}}>
        <DateRangePicker
          initialSettings={{
            autoUpdateInput: false,
            startDate: moment.utc(start).local().format(FORMAT),
            endDate: moment.utc(end).local().format(FORMAT),
            timePicker: true,
            timePicker24Hour: true,
            timePickerSeconds: true,
            showDropdowns: true,
            opens: 'center',
            locale: {
              cancelLabel: 'Очистить',
              applyLabel: 'Выбрать',
              format: FORMAT,
              daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
              firstDay: 1,
              monthNames: [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь',
              ],
            },
          }}
        >
          <input type="text" />
        </DateRangePicker>
      </div>
    </main>;
  }
}

export default ReactBootstrapDaterangepickerPage;
