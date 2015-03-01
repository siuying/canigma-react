var React = require('react')
var _ = require('lodash')

var CantoneseInput = require('./components/CantoneseInput')
var CantoneseStore = require('./stores/CantoneseStore')

function getCantoneseState () {
    return {
        output: CantoneseStore.getOutput()
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = getCantoneseState()
    }

    componentDidMount() {
        CantoneseStore.addChangeListener(this.onChange.bind(this))
    }

    componentWillUnmount() {
        CantoneseStore.removeChangeListener(this.onChange.bind(this))
    }

    onChange() {
        this.setState(getCantoneseState())
    }

    render() {
        var output = this.state.output
        return (
            <div>
                <div>
                    <CantoneseInput />
                </div>
                <div>{output}</div>
            </div>
        )
    }
}

module.exports = App