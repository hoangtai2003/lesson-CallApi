import { Component } from 'react';
import callApi from '../../utils/ApiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
    constructor (props){
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value
        this.setState ({
            [value]: name
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        var {id, txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        if (id) { // update
            callApi(`products/${id}`, 'PUT', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            })
        } else { // add
            callApi('product', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            })
        }
    }
    componentDidMount () {
        var {match} = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState ({
                    id: data.id,
                    txtName: data.name,
                    txtPrice:data.price,
                    chkbStatus: data.status
                });
            });
        }
    }
    render() {
        var{txtName, txtPrice, chkbStatus} = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            name='txtName'
                            value={txtName}
                            onChange = {this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            name='txtPrice'
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái: </label>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input 
                                type="checkbox"
                                name = "chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked = {chkbStatus}
                            />
                            Còn hàng
                        </label>
                    </div>
                    <Link to = "/product-list" className="btn btn-danger mr-10"> Trở lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
                
            </div>
            
        );
    }
}

export default ProductActionPage;
