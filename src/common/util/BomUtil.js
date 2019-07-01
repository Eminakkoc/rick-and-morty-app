export default class BomUtil {
  /**
   * isScrolledToBottom
   *
   * is scrolled to bottom of the page.
   * @returns {boolean} visibility
   */
  static isScrolledToBottom() {
    return ((window.innerHeight + window.scrollY) >= document.body.offsetHeight);
  }

  /**
   * debounce
   * @param callback is for debouncing function
   * @param wait is for waiting interval
   * debounce a given function.
   * @returns {function} debounced callback
   */
  static debounce(callback, wait) {
    let timeout;
    return (...args) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(context, args), wait);
    };
  }
}
