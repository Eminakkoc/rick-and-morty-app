import BomUtil from '../../common/util/BomUtil';

import { configure } from 'enzyme';

// setup file
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe('Test Debounce function', () => {
  it('Should not call the parameter function if time interval is less than debounce', () => {
    const mockCallBack = jest.fn();
    const debouncedFn = BomUtil.debounce(mockCallBack, 100);

    // call 3 times in 50 ms
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(50);

    // no callback applied in 50ms (total calls 3)
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });

  it('Should call the parameter function once if time interval is equal to debounce', () => {
    const mockCallBack = jest.fn();
    const debouncedFn = BomUtil.debounce(mockCallBack, 100);

    // call 3 times in 50 ms
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(100);

    // 1 callback applied in 100ms (total calls 3)
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Should call the parameter function once if time interval is more than debounce but less than two times debounce', () => {
    const mockCallBack = jest.fn();
    const debouncedFn = BomUtil.debounce(mockCallBack, 100);

    // call 3 times in 50 ms
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(100);

    // call 4 more times between 100 ms and 150ms
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(50);
    // still 1 callback applied in 150ms (total calls 7)
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('Should call the parameter function twice if time interval is more than two times debounce', () => {
    const mockCallBack = jest.fn();
    const debouncedFn = BomUtil.debounce(mockCallBack, 100);

    // call 3 times in 150 ms
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(100);

    // still 1 callback applied in 100ms (total calls 3)
    expect(mockCallBack.mock.calls.length).toEqual(1);

    // call 4 more times between 100 ms and 200ms
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(100);

    // 2 callback applied in 200ms (total calls 7)
    expect(mockCallBack.mock.calls.length).toEqual(2);
  });
});
