import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    {this.props.count} products found
                </div>
                <div className='col-md-4'>
                    <label>
                        Sorting
                        <select className='form-control' value={this.props.sort} onChange={this.props.handleChangeSort}>
                            <option value=" ">Select</option>
                            <option value="Lowest">Lowest To Highest</option>
                            <option value="Highest">Highest To Lowest</option>
                            <option value="Old">Old To New</option>
                            <option value="New">New To Old</option>
                        </select>
                    </label>
                </div>
                <div className='col-md-4'>
                    <label>
                        Products
                        <select className='form-control' value={this.props.pro} onChange={this.props.handlePro}>
                            <option value="">Select</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Mug">Mug</option>
                        </select>
                    </label>

                </div>
            </div>
        )
    }
}
