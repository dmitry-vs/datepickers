import React, {Component} from 'react';
import Menu from '../menu';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import {getFiltersUrl, getQueryParam} from '../../utils';
import {
  END_DT_PARAM,
  FORMAT_DISPLAY,
  FORMAT_URL,
  START_DT_PARAM,
} from '../../consts';

class ReactBootstrapDaterangepickerPage extends Component {
  getValuesFromQuery() {
    const {
      location: {search},
    } = this.props;
    return {
      start: getQueryParam(search, START_DT_PARAM) || undefined,
      end: getQueryParam(search, END_DT_PARAM) || undefined,
    };
  }

  handleApply = (e, picker) => {
    const {
      location: {search, pathname},
      history,
    } = this.props;

    const {startDate, endDate, element} = picker;
    element.val(
      `${startDate.format(FORMAT_DISPLAY)} - ${endDate.format(FORMAT_DISPLAY)}`,
    );
    picker.startDate = moment.utc(startDate).local();
    picker.endDate = moment.utc(endDate).local();

    const searchParams = new URLSearchParams(search);
    searchParams.set(START_DT_PARAM, moment.utc(startDate).format(FORMAT_URL));
    searchParams.set(END_DT_PARAM, moment.utc(endDate).format(FORMAT_URL));
    history.push(getFiltersUrl(pathname, searchParams.toString()));
  };

  handleCancel = (e, picker) => {
    const {
      location: {search, pathname},
      history,
    } = this.props;

    picker.element.val('');

    const searchParams = new URLSearchParams(search);
    searchParams.delete(START_DT_PARAM);
    searchParams.delete(END_DT_PARAM);
    history.push(getFiltersUrl(pathname, searchParams.toString()));
  };

  getInputDefaultValue = () => {
    const {start, end} = this.getValuesFromQuery();
    if (!start || !end) return '';
    const startDt = moment.utc(start).local();
    const endDt = moment.utc(end).local();
    return `${startDt.format(FORMAT_DISPLAY)} - ${endDt.format(
      FORMAT_DISPLAY,
    )}`;
  };

  handleInputKeyDown = (e) => {
    e.preventDefault();
    return false;
  };

  render() {
    const {start, end} = this.getValuesFromQuery();

    return (
      <main>
        <h1>react-bootstrap-daterangepicker</h1>
        <Menu />
        <div style={{padding: '30px 0'}}>
          <DateRangePicker
            onApply={this.handleApply}
            onCancel={this.handleCancel}
            initialSettings={{
              autoUpdateInput: false,
              startDate: moment.utc(start).local().format(FORMAT_DISPLAY),
              endDate: moment.utc(end).local().format(FORMAT_DISPLAY),
              timePicker: true,
              timePicker24Hour: true,
              timePickerSeconds: true,
              showDropdowns: true,
              opens: 'center',
              locale: {
                cancelLabel: 'Очистить',
                applyLabel: 'Выбрать',
                format: FORMAT_DISPLAY,
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
            <input
              type="text"
              onKeyDown={this.handleInputKeyDown}
              defaultValue={this.getInputDefaultValue()}
              style={{width: '300px'}}
            />
          </DateRangePicker>
        </div>
      </main>
    );
  }
}

export default ReactBootstrapDaterangepickerPage;
