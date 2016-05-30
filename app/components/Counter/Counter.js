import Component from '../Component/Component';

class Counter extends Component {
  constructor() {
    super(...arguments);
    // Private scope
    let count = 0;
    let counterID;

    Object.assign(this, {
      // Public API with access to private variables
      restartTimer() {
        if (counterID) {
          clearInterval(counterID);
        }

        count = 0;
        this.notifySubscribers();
        // Tick each second
        counterID = setInterval(() => {
          count++;
          this.notifySubscribers();
        }, 1000);
      },

      getView() {
        return (
          '<div class="text-center">' +
            `Seconds passed since you have opened this page: ${count}.` +
          '</div>'
        );
      }
    });
  }
}

module.exports = Counter;
