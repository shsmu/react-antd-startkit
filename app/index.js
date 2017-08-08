import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button  } from 'antd'
import './index.css';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

class NewTodoComponent extends React.Component {

    render() {
        return (
            <div className='input-wrapper'>
                <Form layout="inline">
                    <FormItem>
                    <Input
                            className='event-input'
                            type='text'
                            name='TodoText'
                            onChange={e => this.props.onChange(e.target.value)}
                        />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" >
                            增加
                        </Button>
                    </FormItem>
                </Form>
            </div>
    )
    }
}

class TodoListComponent extends React.Component {
    render(){
        return (
            <div>TodoListComponent: {this.props.value}</div>
        )
    }
}

class RootComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    render() {
        return (
            <div>
                <NewTodoComponent onChange={ v => this.setState({value: v})} />
                <TodoListComponent value={this.state.value}/>
            </div>
        )
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'))
