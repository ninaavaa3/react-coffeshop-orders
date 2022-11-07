import { getDefaultNormalizer } from "@testing-library/react";
import { useHistory } from "react-router-dom";
import Modalbody from "./Modalbody";

const Modal = (props) => {
    const history = useHistory();
    const pushi = () => {
        history.push({
            pathname: '/pay',
            state: { detail: props }
        }
        );
    }


    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">your orders</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Modalbody orders={props.orders} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button onClick={pushi} type="button" data-dismiss="modal" className="btn btn-outline-warning">Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Modal;