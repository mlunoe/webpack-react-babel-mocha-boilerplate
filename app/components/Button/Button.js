import Component from '../Component/Component';

class Button extends Component {
  componentDidMount(element) {
    element.onclick = this.handleClick;
  }

  handleClick(e) {
    console.log(e);
  }

  getView() {
    return (
      '<button class="btn btn-success pull-right">' +
        'Click me!' +
      '</button>'
    );
  }
}

module.exports = Button;
